'use client';
import { useState, useEffect } from 'react';
import { GrowPlan } from '@/lib/data/grow-plans';

interface Props { plan: GrowPlan | null; onClose: () => void; }
type Step = 1 | 2 | 3;

interface GeoInfo {
  country: string;
  currency: string;
  currencySymbol: string;
  gateway: 'stripe' | 'razorpay';
}

export default function GrowModal({ plan, onClose }: Props) {
  const [step, setStep] = useState<Step>(1);
  const [leadId, setLeadId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [booked, setBooked] = useState(false);
  const [geo, setGeo] = useState<GeoInfo>({ country: 'GB', currency: 'GBP', currencySymbol: '£', gateway: 'stripe' });
  const [s1, setS1] = useState({ firstName: '', lastName: '', email: '', phone: '', company: '', website: '', industry: '', companySize: '' });
  const [s2, setS2] = useState({ goals: '', currentChallenges: '', existingTools: '', expectedOutput: '', preferredCallTime: '', additionalNotes: '' });

  useEffect(() => {
    fetch('/api/geo').then(r => r.json()).then(setGeo).catch(() => {});
  }, []);

  if (!plan) return null;
  const selectedPlan = plan;

  const displayPrice = geo.currency === 'GBP'
    ? `£${selectedPlan.price.toLocaleString()}`
    : `${geo.currencySymbol}${Math.round(selectedPlan.price * getApproxRate(geo.currency)).toLocaleString()}`;

  async function submitStep1() {
    if (!s1.firstName || !s1.email || !s1.company) return;
    setLoading(true);
    const res = await fetch('/api/leads', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...s1, type: 'grow', step: 'basic', serviceId: selectedPlan.id, serviceName: selectedPlan.name, country: geo.country }),
    });
    const data = await res.json();
    setLeadId(data.lead?.id || null);
    setLoading(false);
    setStep(2);
  }

  async function submitStep2() {
    if (!leadId) return;
    setLoading(true);
    await fetch('/api/leads', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'update', leadId, requirements: s2, step: 'requirements' }),
    });
    setLoading(false);
    setStep(3);
  }

  async function handleBookCall() {
    if (!leadId) return;
    setLoading(true);
    await fetch('/api/leads', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'update', leadId, step: 'booked' }),
    });
    setLoading(false);
    setBooked(true);
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/vazgro/strategy-call';
    window.open(calendlyUrl, '_blank');
  }

  return (
    <div className="fixed inset-0 bg-[rgba(14,13,9,0.6)] z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-hidden" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="bg-white w-full sm:rounded-2xl sm:max-w-[560px] border border-rule flex flex-col max-h-[95dvh] overflow-hidden shadow-2xl sm:my-auto">

        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-rule flex-shrink-0">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted mb-0.5">📈 GROW · {selectedPlan.name}</div>
            <div className="flex items-center gap-3">
              <span className="text-[22px] sm:text-[26px] font-bold tracking-[-0.03em] serif-italic">{displayPrice}<span className="text-[14px] sm:text-[16px] font-sans font-normal text-muted">/mo</span></span>
              <span className="text-[10px] sm:text-[11px] text-sage bg-sage-lt px-2 py-0.5 rounded-full font-bold">3 month min.</span>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg bg-cream-2 border-none text-muted hover:bg-ink hover:text-cream transition-all cursor-pointer font-sans text-sm flex items-center justify-center flex-shrink-0">✕</button>
        </div>

        {/* Step bar */}
        <div className="flex border-b border-rule flex-shrink-0">
          {[{ n: 1, l: 'Business Info' }, { n: 2, l: 'Your Goals' }, { n: 3, l: 'Book Call' }].map(s => (
            <div key={s.n} className={`flex-1 py-2.5 text-center text-[11px] sm:text-[12px] font-semibold border-r last:border-r-0 border-rule transition-colors ${step === s.n ? 'text-sage bg-sage-lt' : step > s.n ? 'text-sage bg-sage-lt' : 'text-muted bg-white'}`}>
              {step > s.n ? '✓ ' : ''}{s.l}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          {step === 1 && (
            <div>
              <h3 className="text-[15px] sm:text-[17px] font-bold mb-1">Tell us about your business</h3>
              <p className="text-[12px] sm:text-[13px] text-muted mb-4">This helps us prepare for our discovery call and match you with the right team.</p>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div><label className="text-[11px] sm:text-[12px] font-semibold block mb-1.5">First name *</label><input className="input" placeholder="First" value={s1.firstName} onChange={e => setS1(p => ({ ...p, firstName: e.target.value }))} /></div>
                <div><label className="text-[11px] sm:text-[12px] font-semibold block mb-1.5">Last name</label><input className="input" placeholder="Last" value={s1.lastName} onChange={e => setS1(p => ({ ...p, lastName: e.target.value }))} /></div>
              </div>
              <div className="mb-3"><label className="text-[11px] sm:text-[12px] font-semibold block mb-1.5">Email *</label><input type="email" className="input" placeholder="you@company.co.uk" value={s1.email} onChange={e => setS1(p => ({ ...p, email: e.target.value }))} /></div>
              <div className="mb-3"><label className="text-[11px] sm:text-[12px] font-semibold block mb-1.5">Phone</label><input className="input" placeholder="+44 07..." value={s1.phone} onChange={e => setS1(p => ({ ...p, phone: e.target.value }))} /></div>
              <div className="mb-3"><label className="text-[11px] sm:text-[12px] font-semibold block mb-1.5">Company name *</label><input className="input" placeholder="Your company" value={s1.company} onChange={e => setS1(p => ({ ...p, company: e.target.value }))} /></div>
              <div className="mb-3"><label className="text-[11px] sm:text-[12px] font-semibold block mb-1.5">Website</label><input className="input" placeholder="https://..." value={s1.website} onChange={e => setS1(p => ({ ...p, website: e.target.value }))} /></div>
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div><label className="text-[11px] sm:text-[12px] font-semibold block mb-1.5">Industry</label><input className="input" placeholder="e.g. Legal, SaaS" value={s1.industry} onChange={e => setS1(p => ({ ...p, industry: e.target.value }))} /></div>
                <div><label className="text-[11px] sm:text-[12px] font-semibold block mb-1.5">Team size</label>
                  <select className="input cursor-pointer" value={s1.companySize} onChange={e => setS1(p => ({ ...p, companySize: e.target.value }))}>
                    <option value="">Select...</option>
                    {['1–5', '6–20', '21–50', '51–200', '200+'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>
              <button onClick={submitStep1} disabled={!s1.firstName || !s1.email || !s1.company || loading} className="w-full py-3.5 bg-ink text-cream rounded-lg font-bold text-[13px] sm:text-[14px] cursor-pointer hover:bg-ink-2 disabled:opacity-40 transition-colors border-none font-sans">{loading ? 'Saving...' : 'Next: Your Goals →'}</button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-[15px] sm:text-[17px] font-bold mb-1">What do you need from us?</h3>
              <p className="text-[12px] sm:text-[13px] text-muted mb-4">The more detail you give, the more useful your discovery call will be.</p>
              <div className="bg-sage-lt border border-[rgba(26,107,84,0.2)] rounded-xl p-3.5 mb-4 text-[11px] sm:text-[12px] text-sage">
                <strong>Selected:</strong> {selectedPlan.name} — {displayPrice}/mo · Min. 3 months
              </div>
              <div className="space-y-3 mb-5">
                <div><label className="text-[11px] sm:text-[12px] font-semibold block mb-1.5">Key goals for the next 3 months *</label><textarea className="input resize-none min-h-[70px]" placeholder="e.g. Launch new brand, grow Instagram, ship 2 features..." value={s2.goals} onChange={e => setS2(p => ({ ...p, goals: e.target.value }))} /></div>
                <div><label className="text-[11px] sm:text-[12px] font-semibold block mb-1.5">Biggest current challenge *</label><textarea className="input resize-none min-h-[65px]" placeholder="What is bottlenecking your growth right now?" value={s2.currentChallenges} onChange={e => setS2(p => ({ ...p, currentChallenges: e.target.value }))} /></div>
                <div><label className="text-[11px] sm:text-[12px] font-semibold block mb-1.5">Tools you currently use</label><input className="input" placeholder="e.g. Notion, HubSpot, Figma, GitHub..." value={s2.existingTools} onChange={e => setS2(p => ({ ...p, existingTools: e.target.value }))} /></div>
                <div><label className="text-[11px] sm:text-[12px] font-semibold block mb-1.5">What success looks like to you</label><textarea className="input resize-none min-h-[65px]" placeholder="How will you know this subscription is working?" value={s2.expectedOutput} onChange={e => setS2(p => ({ ...p, expectedOutput: e.target.value }))} /></div>
                <div><label className="text-[11px] sm:text-[12px] font-semibold block mb-1.5">Preferred call time</label>
                  <select className="input cursor-pointer" value={s2.preferredCallTime} onChange={e => setS2(p => ({ ...p, preferredCallTime: e.target.value }))}>
                    <option value="">Select preference...</option>
                    {['Morning (9–12)', 'Afternoon (12–3)', 'Late afternoon (3–6)', 'Flexible'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div><label className="text-[11px] sm:text-[12px] font-semibold block mb-1.5">Anything else?</label><textarea className="input resize-none min-h-[60px]" placeholder="Any constraints, context, or questions?" value={s2.additionalNotes} onChange={e => setS2(p => ({ ...p, additionalNotes: e.target.value }))} /></div>
              </div>
              <button onClick={submitStep2} disabled={!s2.goals || !s2.currentChallenges || loading} className="w-full py-3.5 bg-ink text-cream rounded-lg font-bold text-[13px] sm:text-[14px] cursor-pointer hover:bg-ink-2 disabled:opacity-40 transition-colors border-none font-sans">{loading ? 'Saving...' : 'Next: Book Your Discovery Call →'}</button>
            </div>
          )}

          {step === 3 && (
            <div>
              {!booked ? (
                <>
                  <h3 className="text-[15px] sm:text-[17px] font-bold mb-2">All set — book your call</h3>
                  <p className="text-[12px] sm:text-[13px] text-muted mb-4">Free, 30 minutes, no-obligation. We have everything we need and will be prepared for your call.</p>
                  <div className="bg-cream rounded-xl border border-rule p-4 mb-4">
                    <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted mb-2">Your summary</div>
                    <div className="text-[12px] sm:text-[13px] text-ink-2 space-y-1">
                      <div><strong>Plan:</strong> {selectedPlan.name} — {displayPrice}/mo</div>
                      <div><strong>Commitment:</strong> 3-month minimum, then monthly rolling</div>
                      <div><strong>Contact:</strong> {s1.firstName} {s1.lastName} · {s1.email}</div>
                      <div><strong>Company:</strong> {s1.company}</div>
                      {geo.country !== 'GB' && <div><strong>Location:</strong> {geo.country} · Payments in {geo.currency} via {geo.gateway === 'razorpay' ? 'Razorpay' : 'Stripe'}</div>}
                    </div>
                  </div>
                  <div className="bg-sage-lt border border-[rgba(26,107,84,0.2)] rounded-xl p-3.5 mb-5 text-[11px] sm:text-[12px] text-sage">
                    📋 Your details and requirements have been saved. We will review them before the call.
                  </div>
                  <button onClick={handleBookCall} disabled={loading} className="w-full py-4 bg-sage text-white rounded-lg font-bold text-[14px] cursor-pointer hover:bg-[#155843] disabled:opacity-40 transition-colors border-none font-sans mb-2">{loading ? 'Opening Calendly...' : 'Book Your Free Discovery Call →'}</button>
                  <p className="text-[11px] text-muted text-center">30 minutes · Free · UK business hours</p>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="text-[44px] mb-4">📅</div>
                  <h3 className="text-[16px] sm:text-[18px] font-bold mb-2">Call booking opened</h3>
                  <p className="text-[13px] sm:text-[14px] text-muted mb-4">Calendly has opened in a new tab. Select a time that works for you. We have everything we need and will be prepared for your call.</p>
                  <p className="text-[12px] sm:text-[13px] text-muted">Questions? Email <a href="mailto:hello@vazgro.com" className="text-blue no-underline">hello@vazgro.com</a></p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function getApproxRate(currency: string): number {
  const rates: Record<string, number> = { GBP: 1, USD: 1.27, EUR: 1.16, CAD: 1.72, AUD: 1.94, INR: 105.5, AED: 4.67, SGD: 1.71, JPY: 190.5 };
  return rates[currency] || 1;
}
