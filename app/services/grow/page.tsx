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
      <div className="bg-[#FCFBF8] pt-[118px] sm:pt-[132px] lg:pt-[148px] pb-16 sm:pb-20 lg:pb-24">
        <div className="page-wrap">
          <div className="parallax-layer max-w-[780px]" data-parallax="14">
            <span className="inline-flex h-10 items-center rounded-full bg-[#F0EEEB] px-5 text-[13px] font-medium tracking-[0.12em] text-[#47433F] uppercase">
              Grow
            </span>
            <h1 className="mt-7 text-[52px] font-medium leading-[0.94] tracking-[-0.07em] text-[#34312E] sm:text-[68px] lg:text-[84px]">
              Your always-on
              <br />
              <span className="serif-italic font-normal">digital team.</span>
            </h1>
            <p className="mt-8 max-w-[580px] text-[17px] leading-[1.65] tracking-[-0.01em] text-[#87827D]">
              Design, development, and marketing with subscription-led delivery, fast turnaround, and a dedicated team that keeps your business moving every week.
            </p>
          </div>

          <div className="parallax-layer mt-14 border-t border-[#E7E2DB] pt-12 sm:mt-16 sm:pt-14" data-parallax="10">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                ['From £349/mo', 'Starting Price'],
                ['3 months', 'Minimum term'],
                ['Unlimited', 'Revisions included'],
                ['Dedicated PM', 'Slack access'],
              ].map(([n, l]) => (
                <div key={n} className="rounded-[18px] bg-[#ECE9E6] px-5 py-5 sm:px-6">
                  <div className="text-[24px] font-medium leading-[1.05] tracking-[-0.04em] text-[#45413D] sm:text-[28px]">{n}</div>
                  <div className="mt-3 text-[14px] leading-[1.5] text-[#8B8680]">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#FCFBF8] pb-20 sm:pb-24 lg:pb-[132px]">
        <div className="page-wrap">
          <div className="parallax-layer flex flex-wrap gap-2 mb-10 sm:mb-12" data-parallax="8">
            {tracks.map((track) => (
              <button
                key={track}
                onClick={() => setActiveTrack(track)}
                className={`px-5 py-2.5 text-[13px] font-medium rounded-full transition-all cursor-pointer font-sans ${
                  activeTrack === track
                    ? 'bg-[#8B4CF6] text-white shadow-[0_10px_24px_rgba(139,76,246,0.26)]'
                    : 'bg-[#EFEDE9] text-[#595552] hover:bg-[#E7E3DE]'
                }`}
              >
                {track}
              </button>
            ))}
          </div>

          <div className="parallax-layer grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6" data-parallax="18">
            {growPlans.filter((plan) => plan.track === activeTrack).map((plan) => (
              <article
                key={plan.id}
                className={`flex h-full flex-col rounded-[30px] p-7 shadow-[0_18px_44px_rgba(17,17,17,0.035)] transition-transform duration-300 hover:-translate-y-1 ${
                  plan.popular ? 'bg-[#EDE7FA]' : 'bg-[#F1EFED]'
                }`}
              >
                {plan.popular && (
                  <span className="mb-5 inline-flex w-fit rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6B55A3]">
                    Most Popular
                  </span>
                )}
                <div className="text-[28px]">{plan.icon}</div>
                <div className="mt-5 text-[14px] font-medium leading-none text-[#595552]">{plan.track}</div>
                <h2 className="mt-3 text-[34px] font-medium leading-[1.02] tracking-[-0.05em] text-[#171513]">
                  {plan.name}
                </h2>
                <p className="mt-3 max-w-[300px] text-[16px] leading-[1.6] tracking-[-0.01em] text-[#85807B]">
                  {plan.capacity}
                </p>
                <div className="mt-7 flex items-end gap-2">
                  <span className="text-[40px] font-medium leading-none tracking-[-0.05em] text-[#171513]">£{plan.price.toLocaleString()}</span>
                  <span className="pb-1 text-[15px] font-medium text-[#2E2A27]">/mo</span>
                </div>
                <div className="mt-8 space-y-2.5 text-[15px] leading-[1.55] text-[#35312E]">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <span className="mt-0.5 text-[#8B4CF6]">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-7 text-[13px] leading-[1.6] text-[#7A746E]">Minimum {plan.minMonths} month commitment</div>
                <button
                  onClick={() => setSelectedPlan(plan)}
                  className="mt-8 inline-flex h-[52px] items-center justify-center rounded-full bg-[#252525] px-7 text-[14px] font-medium text-white transition-colors hover:bg-[#353535] border-none cursor-pointer"
                >
                  Book Discovery Call
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#E7E2DB] bg-[#F7F4F0] py-20 sm:py-24">
        <div className="page-wrap">
          <div className="parallax-layer max-w-[620px] text-center mx-auto" data-parallax="10">
            <span className="inline-flex h-10 items-center rounded-full bg-white px-5 text-[13px] font-medium tracking-[0.12em] text-[#3B3B3B] uppercase">
              Every Grow plan includes
            </span>
            <h2 className="mt-6 text-[38px] font-medium leading-[1.04] tracking-[-0.05em] text-[#222222] sm:text-[48px]">
              Built for serious <span className="serif-italic font-normal">businesses.</span>
            </h2>
          </div>

          <div className="parallax-layer mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" data-parallax="16">
            {[
              { ico: '👤', t: 'Dedicated PM', d: 'One point of contact who knows your business, your priorities, and your deadlines.' },
              { ico: '💬', t: 'Slack access', d: 'Direct communication with your delivery team. No ticketing queues or black boxes.' },
              { ico: '♾️', t: 'Unlimited revisions', d: 'We iterate until the work is right, not until an arbitrary revision count is reached.' },
              { ico: '📊', t: 'Monthly reports', d: 'Clear visibility into output, performance, and what is shipping next.' },
            ].map((item) => (
              <div key={item.t} className="rounded-[24px] bg-white px-6 py-6 sm:px-7">
                <div className="text-[24px]">{item.ico}</div>
                <h3 className="mt-4 text-[22px] font-medium leading-[1.1] tracking-[-0.03em] text-[#23201D]">{item.t}</h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-[#79736D]">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#161616] py-16 sm:py-20 text-center">
        <div className="page-wrap max-w-[560px] parallax-layer" data-parallax="16">
          <h2 className="text-[36px] font-medium leading-[1.04] tracking-[-0.05em] text-white sm:text-[48px]">
            Ready for an <span className="serif-italic font-normal text-[rgba(255,255,255,0.4)]">always-on team?</span>
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-[rgba(255,255,255,0.56)]">Book a free discovery call. We will match you with the right plan and team.</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-[56px] items-center justify-center rounded-full bg-white px-8 text-[14px] font-medium text-[#1A1A1A] no-underline"
          >
            Book Your Discovery Call
          </Link>
        </div>
      </div>

      {selectedPlan && <GrowModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />}
    </>
  );
}
