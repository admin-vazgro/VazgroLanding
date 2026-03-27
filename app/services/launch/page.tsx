'use client';
import { useState } from 'react';
import Link from 'next/link';
import { packages, Package } from '@/lib/data/packages';
import LaunchModal from '@/components/modals/LaunchModal';

const categories = ['All', ...Array.from(new Set(packages.map(p => p.category)))];

export default function LaunchPage() {
  const [filter, setFilter] = useState('All');
  const [selectedPkg, setSelectedPkg] = useState<Package | null>(null);
  const filtered = filter === 'All' ? packages : packages.filter(p => p.category === filter);

  return (
    <>
      <div className="bg-[#FCFBF8] pt-[118px] sm:pt-[132px] lg:pt-[148px] pb-16 sm:pb-20 lg:pb-24">
        <div className="page-wrap">
          <div className="parallax-layer max-w-[760px]" data-parallax="14">
            <span className="inline-flex h-10 items-center rounded-full bg-[#F0EEEB] px-5 text-[13px] font-medium tracking-[0.12em] text-[#47433F] uppercase">
              Launch
            </span>
            <h1 className="mt-7 text-[56px] font-medium leading-[0.94] tracking-[-0.07em] text-[#34312E] sm:text-[72px] lg:text-[86px]">
              Fixed Price.
              <br />
              <span className="serif-italic font-normal">Fast delivery</span>
            </h1>
            <p className="mt-8 max-w-[560px] text-[17px] leading-[1.65] tracking-[-0.01em] text-[#87827D]">
              We build the websites, run the marketing, and ship the AI products that turn your business into a digital powerhouse.
            </p>
          </div>

          <div className="parallax-layer mt-14 border-t border-[#E7E2DB] pt-12 sm:mt-16 sm:pt-14" data-parallax="10">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                ['From £149', 'Starting Price'],
                ['3-21 Days', 'Delivery Window'],
                ['Fixed Price', 'No Hidden Cost'],
                ['2 revisions', 'Included free'],
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
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 text-[13px] font-medium rounded-full transition-all cursor-pointer font-sans ${
                  filter === cat
                    ? 'bg-[#8B4CF6] text-white shadow-[0_10px_24px_rgba(139,76,246,0.26)]'
                    : 'bg-[#EFEDE9] text-[#595552] hover:bg-[#E7E3DE]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="parallax-layer grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6" data-parallax="18">
            {filtered.map(pkg => (
              <article key={pkg.id} className="flex h-full flex-col rounded-[30px] bg-[#F1EFED] p-7 shadow-[0_18px_44px_rgba(17,17,17,0.03)] transition-transform duration-300 hover:-translate-y-1">
                {pkg.popular && (
                  <span className="mb-5 inline-flex w-fit rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6A6662]">
                    Popular
                  </span>
                )}
                <div className="text-[28px]">{pkg.icon}</div>
                <div className="mt-5 text-[14px] font-medium leading-none text-[#595552]">{pkg.category}</div>
                <h2 className="mt-3 text-[34px] font-medium leading-[1.02] tracking-[-0.05em] text-[#171513]">
                  {pkg.name}
                </h2>
                <p className="mt-3 max-w-[280px] text-[16px] leading-[1.6] tracking-[-0.01em] text-[#85807B]">
                  {pkg.description}
                </p>
                <div className="mt-7 flex items-end gap-3">
                  <span className="text-[40px] font-medium leading-none tracking-[-0.05em] text-[#171513]">£{pkg.price.toLocaleString()}</span>
                  <span className="pb-1 text-[15px] font-medium text-[#2E2A27]">⏱ {pkg.deliveryDays} days</span>
                </div>
                <div className="mt-8 space-y-2.5 text-[15px] leading-[1.55] text-[#35312E]">
                  {pkg.features.map(f => (
                    <div key={f} className="flex items-start gap-2.5">
                      <span className="mt-0.5 text-[#1F1B18]">✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedPkg(pkg)}
                  className="mt-8 inline-flex h-[52px] items-center justify-center rounded-full bg-[#252525] px-7 text-[14px] font-medium text-white transition-colors hover:bg-[#353535] border-none cursor-pointer"
                >
                  Start this package
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
              FAQ
            </span>
            <h2 className="mt-6 text-[38px] font-medium leading-[1.04] tracking-[-0.05em] text-[#222222] sm:text-[48px]">
              Frequently asked <span className="serif-italic font-normal">questions</span>
            </h2>
          </div>

          <div className="parallax-layer mt-12 max-w-[820px] mx-auto space-y-4" data-parallax="16">
            {[
              { q: 'How long does a LAUNCH package take?', a: 'LAUNCH packages are delivered in 3-21 days depending on the package. Landing pages take 3 days, websites 7-14 days, and e-commerce sites up to 21 days.' },
              { q: 'Are LAUNCH prices fixed?', a: 'Yes. Every LAUNCH price on our website is the final price. No hidden costs, no scope creep. You pay upfront and we deliver.' },
              { q: 'How many revisions are included?', a: 'All LAUNCH packages include 2 rounds of revisions at no additional cost.' },
              { q: 'What payment methods do you accept?', a: 'We accept card payments via Stripe (UK, EU, US) and Razorpay (India). Payment is required upfront before work begins.' },
              { q: 'Can I upgrade my package later?', a: 'Absolutely. Many clients start with a Starter Site and upgrade to a Business Site or add an AI chatbot once they see initial results.' },
            ].map(faq => (
              <div key={faq.q} className="rounded-[22px] bg-white px-6 py-6 sm:px-7">
                <h3 className="text-[18px] font-medium leading-[1.25] tracking-[-0.02em] text-[#23201D]">{faq.q}</h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-[#79736D]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#161616] py-16 sm:py-20 text-center">
        <div className="page-wrap max-w-[560px] parallax-layer" data-parallax="16">
          <h2 className="text-[36px] font-medium leading-[1.04] tracking-[-0.05em] text-white sm:text-[48px]">
            Not sure which <span className="serif-italic font-normal text-[rgba(255,255,255,0.4)]">package?</span>
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-[rgba(255,255,255,0.56)]">Book a free 15-minute call and we will recommend the right fit.</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-[56px] items-center justify-center rounded-full bg-white px-8 text-[14px] font-medium text-[#1A1A1A] no-underline"
          >
            Book a Free Call
          </Link>
        </div>
      </div>

      {selectedPkg && <LaunchModal pkg={selectedPkg} onClose={() => setSelectedPkg(null)} />}
    </>
  );
}
