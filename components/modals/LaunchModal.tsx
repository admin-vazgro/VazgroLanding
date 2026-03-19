'use client';
import { useState, useEffect } from 'react';
import { Package } from '@/lib/data/packages';

interface Props { pkg: Package | null; onClose: () => void; }
type Step = 1 | 2 | 3;

interface GeoInfo {
  country: string;
  currency: string;
  currencySymbol: string;
  gateway: 'stripe' | 'razorpay';
}

export default function LaunchModal({ pkg, onClose }: Props) {
  const [step, setStep] = useState<Step>(1);
  const [leadId, setLeadId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [geo, setGeo] = useState<GeoInfo>({ country: 'GB', currency: 'GBP', currencySymbol: '£', gateway: 'stripe' });
  const [s1, setS1] = useState({ firstName: '', lastName: '', email: '', phone: '', company: '', website: '' });
  const [s2, setS2] = useState<Record<string, string>>({});

  // Detect geo on mount
  useEffect(() => {
    fetch('/api/geo').then(r => r.json()).then(setGeo).catch(() => {});
  }, []);

  if (!pkg) return null;
  const selectedPkg = pkg;

  const displayPrice = geo.currency === 'GBP'
    ? `£${selectedPkg.price.toLocaleString()}`
    : `${geo.currencySymbol}${Math.round(selectedPkg.price * getApproxRate(geo.currency)).toLocaleString()}`;

  async function submitStep1() {
    if (!s1.firstName || !s1.email) return;
    setLoading(true);
    const res = await fetch('/api/leads', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...s1, type: 'launch', step: 'basic', serviceId: selectedPkg.id, serviceName: selectedPkg.name, country: geo.country }),
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

  async function handlePayNow() {
    if (!leadId) return;
    setLoading(true);
    const res = await fetch('/api/checkout', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'payment',
        packageId: selectedPkg.id,
        packageName: selectedPkg.name,
        price: selectedPkg.price,
        customerEmail: s1.email,
        leadId,
        gateway: geo.gateway,
        currency: geo.currency,
      }),
    });
    const data = await res.json();

    if (data.gateway === 'stripe' && data.url) {
      // Stripe: redirect to Checkout
      window.location.href = data.url;
    } else if (data.gateway === 'razorpay' && data.razorpayOrderId) {
      // Razorpay: open client-side checkout
      openRazorpayCheckout(data);
    } else {
      setLoading(false);
    }
  }

  function openRazorpayCheckout(data: any) {
    const options = {
      key: data.razorpayKeyId,
      amount: data.amount,
      currency: data.currency,
      name: 'Vazgro',
      description: `LAUNCH — ${selectedPkg.name}`,
      order_id: data.razorpayOrderId,
      prefill: { name: `${s1.firstName} ${s1.lastName}`, email: s1.email, contact: s1.phone },
      notes: { leadId, packageId: selectedPkg.id },
      handler: function (response: any) {
        // Verify payment server-side
        fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'update', leadId,
            paid: true, step: 'paid',
            razorpayOrderId: response.razorpay_order_id,
          }),
        }).then(() => {
          window.location.href = '/payment/success?gateway=razorpay';
        });
      },
      theme: { color: '#0E0D09' },
    };

    // Load Razorpay script dynamically
    if (!(window as any).Razorpay) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        const rzp = new (window as any).Razorpay(options);
        rzp.open();
      };
      document.body.appendChild(script);
    } else {
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    }
    setLoading(false);
  }

  return (
    <div className="fixed inset-0 bg-[rgba(14,13,9,0.6)] z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-hidden" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="bg-white w-full sm:rounded-2xl sm:max-w-[560px] border border-rule flex flex-col max-h-[95dvh] overflow-hidden shadow-2xl sm:my-auto">

        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-rule flex-shrink-0">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted mb-0.5">⚡ LAUNCH · {selectedPkg.name}</div>
            <div className="flex items-center gap-3">
              <span className="text-[22px] sm:text-[26px] font-bold tracking-[-0.03em] serif-italic">{displayPrice}</span>
              <span className="text-[11px] text-muted bg-cream-2 px-2 py-0.5 rounded-full font-medium">⏱ {selectedPkg.deliveryDays} days</span>
              {geo.gateway === 'razorpay' && (
                <span className="text-[10px] text-[#528FF0] bg-[#EEF4FF] px-2 py-0.5 rounded-full font-bold">Razorpay</span>
              )}
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg bg-cream-2 border-none text-muted hover:bg-ink hover:text-cream transition-all cursor-pointer font-sans text-sm flex items-center justify-center flex-shrink-0">✕</button>
        </div>

        {/* Step bar */}
        <div className="flex border-b border-rule flex-shrink-0">
          {[{ n: 1, l: 'Details' }, { n: 2, l: 'Requirements' }, { n: 3, l: 'Pay' }].map(s => (
            <div key={s.n} className={`flex-1 py-2.5 text-center text-[11px] sm:text-[12px] font-semibold border-r last:border-r-0 border-rule transition-colors ${step === s.n ? 'text-blue bg-blue-lt' : step > s.n ? 'text-sage bg-sage-lt' : 'text-muted bg-white'}`}>
              {step > s.n ? '✓ ' : ''}{s.l}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          {step === 1 && (
            <div>
              <h3 className="text-[15px] sm:text-[17px] font-bold mb-4">Let&apos;s start with your details</h3>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div><label className="text-[11px] sm:text-[12px] font-semibold text-ink-2 block mb-1.5">First name *</label><input className="input" placeholder="First name" value={s1.firstName} onChange={e => setS1(p => ({ ...p, firstName: e.target.value }))} /></div>
                <div><label className="text-[11px] sm:text-[12px] font-semibold text-ink-2 block mb-1.5">Last name</label><input className="input" placeholder="Last name" value={s1.lastName} onChange={e => setS1(p => ({ ...p, lastName: e.target.value }))} /></div>
              </div>
              <div className="mb-3"><label className="text-[11px] sm:text-[12px] font-semibold text-ink-2 block mb-1.5">Email address *</label><input type="email" className="input" placeholder="you@company.co.uk" value={s1.email} onChange={e => setS1(p => ({ ...p, email: e.target.value }))} /></div>
              <div className="mb-3"><label className="text-[11px] sm:text-[12px] font-semibold text-ink-2 block mb-1.5">Phone</label><input className="input" placeholder="+44 07..." value={s1.phone} onChange={e => setS1(p => ({ ...p, phone: e.target.value }))} /></div>
              <div className="mb-3"><label className="text-[11px] sm:text-[12px] font-semibold text-ink-2 block mb-1.5">Company</label><input className="input" placeholder="Your company" value={s1.company} onChange={e => setS1(p => ({ ...p, company: e.target.value }))} /></div>
              <div className="mb-5"><label className="text-[11px] sm:text-[12px] font-semibold text-ink-2 block mb-1.5">Current website <span className="font-normal text-muted">(if any)</span></label><input className="input" placeholder="https://..." value={s1.website} onChange={e => setS1(p => ({ ...p, website: e.target.value }))} /></div>
              <button onClick={submitStep1} disabled={!s1.firstName || !s1.email || loading} className="w-full py-3.5 bg-ink text-cream rounded-lg font-bold text-[13px] sm:text-[14px] cursor-pointer hover:bg-ink-2 disabled:opacity-40 transition-colors border-none font-sans">{loading ? 'Saving...' : 'Next: Project Requirements →'}</button>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="mb-4">
                <h3 className="text-[15px] sm:text-[17px] font-bold mb-1">What&apos;s included & what we need</h3>
                <p className="text-[12px] sm:text-[13px] text-muted">Review the package, then fill in what you can provide.</p>
              </div>
              <div className="bg-sage-lt border border-[rgba(26,107,84,0.2)] rounded-xl p-3.5 sm:p-4 mb-5">
                <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-sage mb-2">What&apos;s included</div>
                {selectedPkg.whatsIncluded.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-[12px] sm:text-[13px] text-ink mb-1.5"><span className="text-sage font-bold flex-shrink-0 text-[10px] mt-0.5">✓</span>{item}</div>
                ))}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted mb-3">What we need from you</div>
              <div className="space-y-3 mb-5">
                {selectedPkg.requiresFrom.map((field, i) => (
                  <div key={i}>
                    <label className="text-[11px] sm:text-[12px] font-semibold text-ink-2 block mb-1.5">{field.label}{field.required ? ' *' : <span className="font-normal text-muted"> (optional)</span>}</label>
                    {field.type === 'textarea' ? (
                      <textarea className="input resize-none min-h-[70px] sm:min-h-[80px]" placeholder={field.placeholder} value={s2[field.label] || ''} onChange={e => setS2(p => ({ ...p, [field.label]: e.target.value }))} />
                    ) : field.type === 'select' ? (
                      <select className="input cursor-pointer" value={s2[field.label] || ''} onChange={e => setS2(p => ({ ...p, [field.label]: e.target.value }))}>
                        <option value="">Select...</option>
                        {field.options?.map(opt => <option key={opt}>{opt}</option>)}
                      </select>
                    ) : (
                      <input type={field.type} className="input" placeholder={field.placeholder} value={s2[field.label] || ''} onChange={e => setS2(p => ({ ...p, [field.label]: e.target.value }))} />
                    )}
                  </div>
                ))}
              </div>
              <button onClick={submitStep2} disabled={loading} className="w-full py-3.5 bg-ink text-cream rounded-lg font-bold text-[13px] sm:text-[14px] cursor-pointer hover:bg-ink-2 disabled:opacity-40 transition-colors border-none font-sans">{loading ? 'Saving...' : 'Next: Review & Pay →'}</button>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-[15px] sm:text-[17px] font-bold mb-4">Review your order</h3>
              <div className="bg-cream border border-rule rounded-xl p-4 mb-4">
                <div className="flex justify-between items-start mb-3 pb-3 border-b border-rule">
                  <div><div className="font-bold text-[14px] sm:text-[15px]">{selectedPkg.icon} {selectedPkg.name}</div><div className="text-[11px] sm:text-[12px] text-muted mt-0.5">Delivered in {selectedPkg.deliveryDays} days</div></div>
                  <div className="serif-italic text-[20px] sm:text-[22px]">{displayPrice}</div>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted mb-2">Order for</div>
                <div className="text-[13px] text-ink-2">{s1.firstName} {s1.lastName}</div>
                <div className="text-[12px] text-muted">{s1.email}{s1.company ? ` · ${s1.company}` : ''}</div>
              </div>

              {/* Payment method indicator */}
              <div className="bg-blue-lt border border-[rgba(20,0,255,0.1)] rounded-xl p-3.5 mb-3 text-[11px] sm:text-[12px] text-blue">
                <strong>Payment via {geo.gateway === 'razorpay' ? 'Razorpay' : 'Stripe'}:</strong>{' '}
                {geo.gateway === 'razorpay'
                  ? 'Secure payment with UPI, cards, net banking, and wallets.'
                  : 'Secure card payment. You will receive a receipt immediately.'}
              </div>

              <div className="bg-sage-lt border border-[rgba(26,107,84,0.12)] rounded-xl p-3.5 mb-5 text-[11px] sm:text-[12px] text-sage">
                <strong>What happens next:</strong> After payment, your dedicated PM will contact you within 2 business hours to kick off your project.
              </div>

              <button onClick={handlePayNow} disabled={loading} className="w-full py-4 bg-blue text-white rounded-lg font-bold text-[14px] sm:text-[15px] cursor-pointer hover:bg-[#0500CC] disabled:opacity-40 transition-colors border-none font-sans mb-2">
                {loading ? 'Processing...' : `Pay Now — ${displayPrice} →`}
              </button>
              <p className="text-[11px] text-muted text-center">
                Secure payment via {geo.gateway === 'razorpay' ? 'Razorpay' : 'Stripe'} · {geo.country !== 'GB' && `Paying in ${geo.currency} · `}Instant receipt
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* Approximate FX rates for display — matches lib/geo.ts */
function getApproxRate(currency: string): number {
  const rates: Record<string, number> = { GBP: 1, USD: 1.27, EUR: 1.16, CAD: 1.72, AUD: 1.94, INR: 105.5, AED: 4.67, SGD: 1.71, JPY: 190.5 };
  return rates[currency] || 1;
}
