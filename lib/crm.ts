/**
 * CRM Adapter — Pluggable lead management
 *
 * Set CRM_PROVIDER env var to switch:
 *   "json"      → Local JSON file (default, for dev/early stage)
 *   "hubspot"   → HubSpot CRM via API
 *   "salesforce" → Salesforce (stub — implement when needed)
 *
 * To add a new CRM: implement the CRMAdapter interface below
 * and register it in the getAdapter() switch.
 */

import { promises as fs } from 'fs';
import path from 'path';

/* ─── Lead Schema ─── */
export interface Lead {
  id: string;
  createdAt: string;
  type: 'launch' | 'grow' | 'build' | 'contact';
  step: 'basic' | 'requirements' | 'booked' | 'paid';
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  industry?: string;
  companySize?: string;
  serviceId?: string;
  serviceName?: string;
  requirements?: Record<string, string>;
  notes?: string;
  stripeSessionId?: string;
  razorpayOrderId?: string;
  paid?: boolean;
  source?: string;
  country?: string;
}

/* ─── Adapter Interface ─── */
interface CRMAdapter {
  saveLead(lead: Partial<Lead>): Promise<Lead>;
  updateLead(id: string, update: Partial<Lead>): Promise<Lead | null>;
  getLeads(): Promise<Lead[]>;
}

/* ─── JSON File Adapter (default) ─── */
const DB_PATH = path.join(process.cwd(), 'data', 'leads.json');

async function ensureDB() {
  const dir = path.dirname(DB_PATH);
  try { await fs.mkdir(dir, { recursive: true }); } catch { /* exists */ }
  try { await fs.access(DB_PATH); } catch { await fs.writeFile(DB_PATH, '[]'); }
}

const jsonAdapter: CRMAdapter = {
  async saveLead(lead) {
    await ensureDB();
    const raw = await fs.readFile(DB_PATH, 'utf-8');
    const leads: Lead[] = JSON.parse(raw);
    const newLead: Lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      createdAt: new Date().toISOString(),
      ...lead,
    } as Lead;
    leads.push(newLead);
    await fs.writeFile(DB_PATH, JSON.stringify(leads, null, 2));
    return newLead;
  },

  async updateLead(id, update) {
    await ensureDB();
    const raw = await fs.readFile(DB_PATH, 'utf-8');
    const leads: Lead[] = JSON.parse(raw);
    const idx = leads.findIndex(l => l.id === id);
    if (idx === -1) return null;
    leads[idx] = { ...leads[idx], ...update };
    await fs.writeFile(DB_PATH, JSON.stringify(leads, null, 2));
    return leads[idx];
  },

  async getLeads() {
    await ensureDB();
    const raw = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(raw);
  },
};

/* ─── HubSpot Adapter (stub — fill in when API key is available) ─── */
const hubspotAdapter: CRMAdapter = {
  async saveLead(lead) {
    const apiKey = process.env.HUBSPOT_API_KEY;
    if (!apiKey) throw new Error('HUBSPOT_API_KEY not set');

    // HubSpot Contacts API v3
    const res = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        properties: {
          firstname: lead.firstName,
          lastname: lead.lastName,
          email: lead.email,
          phone: lead.phone || '',
          company: lead.company || '',
          website: lead.website || '',
          hs_lead_status: 'NEW',
          // Map custom properties as needed
          ...(lead.serviceId && { service_id: lead.serviceId }),
          ...(lead.serviceName && { service_name: lead.serviceName }),
        },
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('HubSpot create error:', err);
      // Fallback to JSON so we don't lose the lead
      return jsonAdapter.saveLead(lead);
    }

    const data = await res.json();
    return {
      id: data.id,
      createdAt: data.createdAt || new Date().toISOString(),
      ...lead,
    } as Lead;
  },

  async updateLead(id, update) {
    const apiKey = process.env.HUBSPOT_API_KEY;
    if (!apiKey) return jsonAdapter.updateLead(id, update);

    const properties: Record<string, string> = {};
    if (update.step) properties.hs_lead_status = update.step === 'paid' ? 'CONNECTED' : update.step.toUpperCase();
    if (update.paid !== undefined) properties.paid = String(update.paid);

    const res = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({ properties }),
    });

    if (!res.ok) {
      console.error('HubSpot update error');
      return null;
    }

    return { id, ...update } as Lead;
  },

  async getLeads() {
    // For dashboard usage — not commonly needed from HubSpot in this context
    return jsonAdapter.getLeads();
  },
};

/* ─── Salesforce Adapter (stub) ─── */
const salesforceAdapter: CRMAdapter = {
  async saveLead(lead) {
    // TODO: Implement Salesforce Lead creation
    console.warn('Salesforce adapter not yet implemented — falling back to JSON');
    return jsonAdapter.saveLead(lead);
  },
  async updateLead(id, update) {
    return jsonAdapter.updateLead(id, update);
  },
  async getLeads() {
    return jsonAdapter.getLeads();
  },
};

/* ─── Adapter Factory ─── */
function getAdapter(): CRMAdapter {
  const provider = (process.env.CRM_PROVIDER || 'json').toLowerCase();
  switch (provider) {
    case 'hubspot': return hubspotAdapter;
    case 'salesforce': return salesforceAdapter;
    default: return jsonAdapter;
  }
}

/* ─── Public API ─── */
export async function saveLead(lead: Partial<Lead>): Promise<Lead> {
  return getAdapter().saveLead(lead);
}

export async function updateLead(id: string, update: Partial<Lead>): Promise<Lead | null> {
  return getAdapter().updateLead(id, update);
}

export async function getLeads(): Promise<Lead[]> {
  return getAdapter().getLeads();
}
