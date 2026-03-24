'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ProgrizePage() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleWaitlist(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', step: 'basic', firstName: 'Waitlist', lastName: '', email, notes: 'Progrize waitlist signup', serviceName: 'Progrize Waitlist' }),
      });
      setJoined(true);
    } catch { /* silently handle */ }
    setLoading(false);
  }

  return (
    <>
      <div className="page-hero">
        <div className="page-wrap">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center text-white font-extrabold text-[17px] flex-shrink-0">P</div>
                <div>
                  <div className="font-extrabold text-[22px] sm:text-[26px] text-ink tracking-[-0.02em]">Progrize</div>
                  <div className="text-[12px] text-muted">progrize.com</div>
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] px-3 py-1.5 rounded-full bg-[rgba(99,102,241,0.15)] text-[#8B8EF8] border border-[rgba(99,102,241,0.2)] inline-block mb-5">In Development · Launching 2026</span>
              <h1 className="type-h1 text-[34px] sm:text-[48px] lg:text-[60px] mb-4">
                LinkedIn meets Glassdoor,<br />
                <span className="serif-italic text-[#8B8EF8]">supercharged by AI.</span>
              </h1>
              <p className="type-body text-muted max-w-[480px] mb-8">
                Progrize is the career platform professionals have been waiting for — combining networking, honest company intel, and AI tools that actually improve your career trajectory.
              </p>

              {/* Waitlist form */}
              <div id="waitlist" className="max-w-[400px]">
                {joined ? (
                  <div className="section-panel p-5 text-center">
                    <div className="text-[32px] mb-2">🎉</div>
                    <div className="text-[15px] font-bold text-ink mb-1">You&apos;re on the list!</div>
                    <div className="text-[13px] text-muted">We will email you when Progrize launches.</div>
                  </div>
                ) : (
                  <form onSubmit={handleWaitlist} className="flex gap-2">
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="input flex-1 bg-white placeholder:text-muted focus:border-[#6366F1]"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-5 py-3 bg-[#6366F1] text-white rounded-lg font-bold text-[13px] cursor-pointer hover:bg-[#5255E0] disabled:opacity-50 transition-colors border-none font-sans flex-shrink-0"
                    >
                      {loading ? '...' : 'Join Waitlist →'}
                    </button>
                  </form>
                )}
                <div className="text-[11px] text-muted mt-2">No spam. We will only email you about Progrize.</div>
              </div>
            </div>

            {/* Dashboard mock */}
            <div className="hidden lg:block bg-[#F6F5F1] rounded-[30px] border border-rule overflow-hidden shadow-[0_20px_56px_rgba(17,17,17,0.05)]">
              <div className="bg-white px-4 py-3 flex items-center gap-2 border-b border-rule">
                <div className="flex gap-1.5">{['#FF5F57', '#FEBC2E', '#28C840'].map(c => <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />)}</div>
                <div className="text-[11px] text-muted ml-2">progrize.com · Dashboard</div>
              </div>
              <div className="p-5 space-y-3">
                <div className="bg-blue-lt border border-[rgba(20,0,255,0.15)] rounded-[22px] p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-[12px] font-bold text-[#8B8EF8]">CV Score</div>
                    <div className="text-[20px] font-extrabold text-ink">94<span className="text-[12px] text-muted">/100</span></div>
                  </div>
                  <div className="h-1.5 bg-[rgba(17,17,17,0.08)] rounded-full overflow-hidden mb-2"><div className="h-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full" style={{ width: '94%' }} /></div>
                  <div className="text-[11px] text-muted">3 improvements suggested →</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white rounded-[22px] p-3 border border-rule"><div className="text-[10px] text-muted mb-1.5">Culture fit</div><div className="text-[20px] font-extrabold text-[#1A6B54]">8.7</div></div>
                  <div className="bg-white rounded-[22px] p-3 border border-rule"><div className="text-[10px] text-muted mb-1.5">Salary delta</div><div className="text-[20px] font-extrabold text-[#C5A84F]">+12%</div></div>
                </div>
                {[{ co: 'Stripe', role: 'Senior PM · London', match: 91, c: '#6EE7B7' }, { co: 'Monzo', role: 'Product Lead · Remote', match: 87, c: '#8B8EF8' }, { co: 'Deliveroo', role: 'PM II · London', match: 79, c: '#FCD34D' }].map(j => (
                  <div key={j.co} className="bg-white border border-rule rounded-[22px] p-3 flex items-center justify-between">
                    <div><div className="text-[13px] font-bold text-ink">{j.co}</div><div className="text-[11px] text-muted">{j.role}</div></div>
                    <div className="font-extrabold text-[14px]" style={{ color: j.c }}>{j.match}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features grid */}
      <section className="section-pad bg-cream-2 border-b border-rule">
        <div className="page-wrap">
          <div className="text-center mb-10 sm:mb-12">
            <span className="eyebrow">Core features</span>
            <h2 className="type-h2 text-[28px] sm:text-[38px]">
              Everything you need to <span className="serif-italic text-[#8B8EF8]">accelerate.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '✍️', title: 'AI CV & Cover Letter Optimiser', desc: 'Upload your CV and a job description. Get tailored, ATS-optimised versions with specific improvement suggestions.' },
              { icon: '🏢', title: 'Honest Company Reviews', desc: 'Unfiltered culture insights from verified employees — real data on management, pay equity, and growth potential.' },
              { icon: '💼', title: 'Smart Job Matching', desc: 'Matched by values, culture fit, and growth potential — not just keywords. Know why a role fits before you apply.' },
              { icon: '📊', title: 'Salary Benchmarking', desc: 'Real-time UK salary data by role, level, location, and company size. Know your worth before you negotiate.' },
              { icon: '🎯', title: 'Interview Preparation', desc: 'AI coaching based on the specific role, company, and your background. Company-specific question banks.' },
              { icon: '🤝', title: 'Professional Network', desc: 'Signal-over-noise professional content — meaningful connections without the self-promotion noise.' },
            ].map(f => (
              <div key={f.title} className="info-card surface-card-hover hover:border-[rgba(99,102,241,0.2)]">
                <div className="text-[22px] mb-3">{f.icon}</div>
                <div className="font-bold text-[15px] text-ink mb-2">{f.title}</div>
                <p className="text-[13px] text-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built by Vazgro */}
      <section className="bg-white section-pad">
        <div className="page-wrap text-center max-w-[600px] mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Link href="/" className="no-underline">
              <span className="font-display text-[24px] tracking-[-0.03em] text-ink italic">Vazgro</span>
            </Link>
            <span className="text-muted text-[14px]">×</span>
            <span className="font-extrabold text-[20px] bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">Progrize</span>
          </div>
          <h2 className="type-h2 text-[24px] sm:text-[32px] mb-3">
            Built by <span className="serif-italic">Vazgro.</span>
          </h2>
          <p className="type-body text-muted mb-6">
            Progrize is designed, developed, and operated by the Vazgro team. The same engineering and design standards we apply to client projects, applied to our own products.
          </p>
          <Link href="/" className="link-arrow">Learn more about Vazgro →</Link>
        </div>
      </section>
    </>
  );
}
