'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', company: '', service: '', message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.message) return;

    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          company: form.company,
          type: 'contact',
          step: 'basic',
          serviceName: form.service || 'General enquiry',
          notes: form.message,
        }),
      });

      if (!res.ok) throw new Error('Failed to submit');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please email us directly at hello@vazgro.com');
    }
    setSubmitting(false);
  }

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }));

  return (
    <>
      <div className="bg-white border-b border-rule pt-[84px] sm:pt-[100px] pb-10 sm:pb-14">
        <div className="page-wrap">
          <div className="parallax-layer max-w-[580px]" data-parallax="14">
            <span className="eyebrow">Get in touch</span>
            <h1 className="type-h1 text-[30px] sm:text-[46px] lg:text-[60px] mb-4">
              Let&apos;s talk about <span className="serif-italic">your project.</span>
            </h1>
            <p className="type-body text-ink-2">
              We respond within 4 business hours. No hard sells, no vague timelines.
            </p>
          </div>
        </div>
      </div>

      <section className="section-pad">
        <div className="page-wrap">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 sm:gap-14 items-start">
            {/* Form */}
            <div className="parallax-layer bg-white border border-rule rounded-xl p-6 sm:p-8 lg:p-10" data-parallax="18">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-[44px] mb-4">✅</div>
                  <h3 className="font-bold text-[18px] mb-2">Message sent!</h3>
                  <p className="text-[14px] text-muted mb-5">We will reply within 4 business hours. Check your email for a confirmation.</p>
                  <Link href="/" className="btn btn-dark btn-md rounded-lg no-underline">Back to Home →</Link>
                </div>
              ) : (
                <>
                  <h3 className="text-[17px] sm:text-[19px] font-bold tracking-[-0.02em] mb-1.5">Send us a message</h3>
                  <p className="text-[13px] sm:text-[14px] text-muted mb-6 sm:mb-7">We&apos;ll reply within 4 business hours.</p>
                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div><label className="text-[12px] font-semibold text-ink-2 block mb-1.5">First name *</label><input type="text" className="input" placeholder="Marcus" value={form.firstName} onChange={set('firstName')} required /></div>
                      <div><label className="text-[12px] font-semibold text-ink-2 block mb-1.5">Last name</label><input type="text" className="input" placeholder="Harrison" value={form.lastName} onChange={set('lastName')} /></div>
                    </div>
                    <div><label className="text-[12px] font-semibold text-ink-2 block mb-1.5">Email address *</label><input type="email" className="input" placeholder="you@company.co.uk" value={form.email} onChange={set('email')} required /></div>
                    <div><label className="text-[12px] font-semibold text-ink-2 block mb-1.5">Company <span className="font-normal text-muted">(optional)</span></label><input type="text" className="input" placeholder="Your company" value={form.company} onChange={set('company')} /></div>
                    <div>
                      <label className="text-[12px] font-semibold text-ink-2 block mb-1.5">I&apos;m interested in...</label>
                      <select className="input cursor-pointer" value={form.service} onChange={set('service')}>
                        <option value="">Select a service</option>
                        <option>⚡ LAUNCH — A fixed-fee package</option>
                        <option>📈 GROW — A monthly subscription</option>
                        <option>🔧 BUILD — A custom project or AI build</option>
                        <option>💬 General enquiry</option>
                      </select>
                    </div>
                    <div><label className="text-[12px] font-semibold text-ink-2 block mb-1.5">Tell us about your project *</label><textarea className="input min-h-[100px] sm:min-h-[110px] resize-none" placeholder="What do you need? Timeline? Budget?" value={form.message} onChange={set('message')} required /></div>

                    {error && <div className="text-[13px] text-warm bg-warm-lt border border-[rgba(224,61,0,0.15)] rounded-lg p-3">{error}</div>}

                    <button
                      type="submit"
                      disabled={submitting || !form.firstName || !form.email || !form.message}
                      className="w-full py-3.5 sm:py-4 bg-ink text-cream rounded-lg font-bold text-[14px] cursor-pointer hover:bg-ink-2 disabled:opacity-40 transition-colors border-none font-sans"
                    >
                      {submitting ? 'Sending...' : 'Send Message →'}
                    </button>
                    <p className="text-[11px] sm:text-[12px] text-muted text-center">No spam. Ever.</p>
                  </form>
                </>
              )}
            </div>

            {/* Contact info */}
            <div className="parallax-layer" data-parallax="12">
              {[
                ['✉️', 'Email', 'hello@vazgro.com', ''],
                ['📍', 'Location', 'London, United Kingdom', 'Serving clients nationwide'],
                ['⏱', 'Response time', 'Within 4 business hours', 'Mon–Fri, 9am–6pm GMT'],
              ].map(([ico, lbl, val, sub]) => (
                <div key={lbl} className="flex gap-3.5 mb-5 sm:mb-6">
                  <div className="w-9 h-9 rounded-lg bg-cream-2 border border-rule flex items-center justify-center text-[15px] flex-shrink-0">{ico}</div>
                  <div>
                    <div className="font-bold text-[13px] mb-0.5">{lbl}</div>
                    <div className="text-[12px] sm:text-[13px] text-muted">{val}{sub && <><br />{sub}</>}</div>
                  </div>
                </div>
              ))}
              <div className="bg-ink rounded-xl p-6 sm:p-7 text-center mt-4 sm:mt-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[rgba(255,255,255,0.3)] mb-2.5">Skip the form</div>
                <div className="text-[16px] sm:text-[18px] font-bold text-white mb-2">Book a Free 30-Min Call</div>
                <p className="text-[12px] sm:text-[13px] text-[rgba(255,255,255,0.45)] mb-5 leading-relaxed">Talk to a real member of the Vazgro team. Honest advice — even if that means pointing you elsewhere.</p>
                <a
                  href={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/vazgro/strategy-call'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 bg-cream text-ink rounded-lg font-bold text-[13px] no-underline hover:bg-white transition-colors"
                >
                  Open Calendly →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
