import { NextRequest, NextResponse } from 'next/server';
import { saveLead, updateLead } from '@/lib/crm';

/**
 * POST /api/leads
 *
 * Creates a new lead or updates an existing one.
 *
 * To create: POST { firstName, email, type, step, ... }
 * To update: POST { action: 'update', leadId: '...', ...fields }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, leadId, ...data } = body;

    // Update existing lead
    if (action === 'update' && leadId) {
      const updated = await updateLead(leadId, data);
      if (!updated) {
        return NextResponse.json(
          { success: false, error: 'Lead not found' },
          { status: 404 }
        );
      }
      return NextResponse.json({ success: true, lead: updated });
    }

    // Validate required fields for new lead
    if (!data.email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    // Create new lead
    const lead = await saveLead(data);
    return NextResponse.json({ success: true, lead });
  } catch (e: any) {
    console.error('Leads API error:', e);
    return NextResponse.json(
      { success: false, error: e.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/leads
 * Alternative update method
 */
export async function PATCH(req: NextRequest) {
  try {
    const { leadId, ...data } = await req.json();
    if (!leadId) {
      return NextResponse.json({ success: false, error: 'leadId required' }, { status: 400 });
    }
    const updated = await updateLead(leadId, data);
    if (!updated) {
      return NextResponse.json({ success: false, error: 'Lead not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, lead: updated });
  } catch (e: any) {
    return NextResponse.json({ success: false, error: e.message }, { status: 500 });
  }
}
