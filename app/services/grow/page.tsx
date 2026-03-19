'use client';
import { useState } from 'react';
import Link from 'next/link';
import { growPlans, GrowPlan } from '@/lib/data/grow-plans';
import GrowModal from '@/components/modals/GrowModal';

const tracks = ['Design', 'Dev', 'Social'] as const;

export default function GrowPage() {
  const [activeTrack, setActiveTrack] = useState<string>('Design');
  const [selectedPlan, setSelectedPlan] = useState<GrowPlan | null>(null);

  return (
    <>
      {/* Hero */}
      <div className="bg-white border-b border-rule pt-[84px] sm:pt-[100px] pb-10 sm:pb-14">
        <div className="page-wrap">
          <div className="parallax-layer max-w-[680px]" data-parallax="14">
            <span className="eyebrow">📈 GROW</span>
            <h1 className="type-h1 text-[32px] sm:text-[48px] lg:text-[64px] mb-4">
              Your always-on<br />
              <span className="serif-italic">digital team.</span>
            </h1>
            <p className="type-body text-ink-2 max-w-[500px]">
              Design, development, and marketing — unlimited requests, dedicated team, no lock-in contracts. One subscription replaces three agencies.
            </p>
          </div>
        </div>
      </div>

      {/* Key highlights */}
      <div className="border-b border-rule bg-sage-lt py-4 sm:py-5">
        <div className="page-wrap">
          <div className="parallax-layer flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-center" data-parallax="10">
            {[['From £349/mo', 'Starting price'], ['3 month', 'Minimum commitment'], ['Unlimited', 'Revisions included'], ['Dedicated PM', 'Slack access']].map(([n, l]) => (
              <div key={n}>
                <div className="text-[16px] sm:text-[18px] font-extrabold tracking-[-0.02em] serif-italic text-sage">{n}</div>
                <div className="text-[11px] sm:text-[12px] text-muted">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Plans by track */}
      <section className="section-pad">
        <div className="page-wrap">
          {/* Track tabs */}
          <div className="flex gap-2 mb-10 sm:mb-12">
            {tracks.map(track => (
              <button
                key={track}
                onClick={() => setActiveTrack(track)}
                className={`px-5 py-2.5 text-[13px] sm:text-[14px] font-semibold rounded-full border transition-all cursor-pointer font-sans ${
                  activeTrack === track
                    ? 'bg-sage text-white border-sage'
                    : 'bg-white text-muted border-rule hover:border-sage hover:text-sage'
                }`}
              >
                {track === 'Design' ? '🎨' : track === 'Dev' ? '💻' : '📱'} {track}
              </button>
            ))}
          </div>

          <div className="parallax-layer grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5" data-parallax="18">
            {growPlans.filter(p => p.track === activeTrack).map(plan => (
              <div key={plan.id} className={`bg-white border rounded-xl p-5 sm:p-7 flex flex-col transition-all relative ${plan.popular ? 'border-sage shadow-[0_8px_32px_rgba(26,107,84,0.1)]' : 'border-rule hover:border-sage'}`}>
                {plan.popular && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full bg-sage-lt text-sage border border-[rgba(26,107,84,0.15)]">
                    Most Popular
                  </span>
                )}
                <div className="text-[24px] mb-3">{plan.icon}</div>
                <h3 className="font-extrabold text-[17px] sm:text-[19px] tracking-[-0.02em] mb-1">{plan.name}</h3>
                <div className="text-[12px] text-muted mb-4">{plan.capacity}</div>
                <div className="flex items-end gap-1 mb-5">
                  <span className="serif-italic text-[32px] sm:text-[36px] font-extrabold tracking-[-0.03em] leading-none text-sage">£{plan.price.toLocaleString()}</span>
                  <span className="text-[14px] text-muted mb-1">/mo</span>
                </div>
                <div className="space-y-2 mb-6 flex-1">
                  {plan.features.map(f => (
                    <div key={f} className="flex items-start gap-2 text-[13px] text-ink-2">
                      <span className="text-sage font-bold text-[10px] mt-0.5 flex-shrink-0">✓</span>{f}
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedPlan(plan)}
                  className={`w-full py-3 rounded-lg font-bold text-[13px] sm:text-[14px] cursor-pointer transition-colors border-none font-sans ${
                    plan.popular
                      ? 'bg-sage text-white hover:bg-[#155843]'
                      : 'bg-ink text-cream hover:bg-ink-2'
                  }`}
                >
                  Book Discovery Call →
                </button>
                <div className="text-[11px] text-muted text-center mt-2">Min. {plan.minMonths} month commitment</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-cream-2 border-y border-rule section-pad">
        <div className="page-wrap">
          <div className="parallax-layer text-center mb-10" data-parallax="10">
            <span className="eyebrow">Every GROW plan includes</span>
            <h2 className="type-h2 text-[24px] sm:text-[34px]">Built for serious <span className="serif-italic">businesses.</span></h2>
          </div>
          <div className="parallax-layer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" data-parallax="16">
            {[
              { ico: '👤', t: 'Dedicated PM', d: 'One point of contact who knows your business inside out.' },
              { ico: '💬', t: 'Slack access', d: 'Real-time communication with your team — no ticketing queues.' },
              { ico: '♾️', t: 'Unlimited revisions', d: 'We iterate until you are happy. Every time.' },
              { ico: '📊', t: 'Monthly reports', d: 'Clear progress tracking, output summaries, and strategy alignment.' },
            ].map(item => (
              <div key={item.t} className="bg-white border border-rule rounded-xl p-5">
                <div className="text-[20px] mb-3">{item.ico}</div>
                <div className="font-bold text-[14px] mb-1.5">{item.t}</div>
                <p className="text-[13px] text-muted leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-ink py-14 sm:py-20 text-center">
        <div className="page-wrap max-w-[540px] parallax-layer" data-parallax="16">
          <h2 className="type-h2 text-[26px] sm:text-[38px] text-white mb-4">Ready for an <span className="serif-italic text-[rgba(255,255,255,0.35)]">always-on team?</span></h2>
          <p className="type-body text-[rgba(255,255,255,0.5)] mb-7">Book a free discovery call. We will match you with the right plan and team.</p>
          <Link href="/contact" className="btn btn-cream btn-lg rounded-full justify-center">Book Your Discovery Call →</Link>
        </div>
      </div>

      {selectedPlan && <GrowModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />}
    </>
  );
}
