import Link from 'next/link';

const buildOffers = [
  {
    ico: '🚀',
    category: 'Product Builds',
    title: 'MVP Development',
    desc: 'Go from validated idea to working product in 4-8 weeks with senior product, design, and engineering support.',
    items: ['Full-stack Next.js or React Native builds', 'Supabase or custom backend architecture', 'Payments, auth, and analytics included', 'Launch-ready deployment and handover'],
  },
  {
    ico: '🤖',
    category: 'AI Systems',
    title: 'AI Development',
    desc: 'Custom AI solutions for chat, document workflows, knowledge retrieval, automation, and internal tooling.',
    items: ['OpenAI, Anthropic, and open-source models', 'RAG pipelines and vector search', 'Custom evaluation and guardrails', 'GDPR-conscious system design'],
  },
  {
    ico: '⚙️',
    category: 'Platforms',
    title: 'Custom Software',
    desc: 'Bespoke internal tools, SaaS platforms, API integrations, and business-critical digital products.',
    items: ['Full-stack web application delivery', 'Third-party API and workflow integrations', 'Database design and migrations', 'CI/CD and production setup'],
  },
  {
    ico: '📱',
    category: 'Mobile',
    title: 'Mobile Apps',
    desc: 'Cross-platform mobile experiences built for iOS and Android from one production-grade codebase.',
    items: ['React Native or Expo delivery', 'Push notifications and account systems', 'App Store and Play Store support', 'Backend APIs and admin tooling'],
  },
  {
    ico: '🔄',
    category: 'Retainers',
    title: 'Sprint Retainers',
    desc: 'Ongoing development capacity for businesses with continuous product, platform, or AI delivery needs.',
    items: ['Dedicated delivery capacity', 'Sprint-based prioritisation', 'Weekly demos and planning', 'Flexible scope evolution'],
  },
  {
    ico: '🤝',
    category: 'Partnership',
    title: 'Co-Founder Model',
    desc: 'For the right opportunity, we work as a deeply involved technical partner rather than a standard vendor.',
    items: ['Sweat equity partnership model', 'CTO-level product and technical direction', 'Architecture, roadmap, and hiring support', 'Investor-ready product thinking'],
  },
];

const buildPricing = [
  { title: 'MVP Fast-Track', price: '£3,999-£8,000', time: '4-8 weeks', desc: 'Working product with the core features needed to validate and sell.' },
  { title: 'AI Project', price: '£5,000-£15,000', time: '3-8 weeks', desc: 'Custom AI system, deployed with documentation and operational clarity.' },
  { title: 'Custom Platform', price: '£10,000-£25,000+', time: '8-16 weeks', desc: 'Full SaaS or enterprise application with broader workflow complexity.' },
  { title: 'Sprint Retainer', price: '£2,500-£8,000/mo', time: 'Ongoing', desc: 'Dedicated build capacity for teams shipping continuously.' },
];

const buildProcess = [
  { n: '01', title: 'Discovery', desc: 'Free strategy call to understand goals, constraints, timelines, and commercial priorities.' },
  { n: '02', title: 'Proposal', desc: 'A scoped recommendation, timeline, and fixed-price or sprint-based delivery model.' },
  { n: '03', title: 'Sprint 0', desc: 'Product framing, design direction, architecture decisions, and execution setup.' },
  { n: '04', title: 'Build', desc: 'Agile execution with demos, clear visibility, and continuous delivery discipline.' },
  { n: '05', title: 'Launch', desc: 'Production handover, documentation, and post-launch support so the product lands cleanly.' },
];

export default function BuildPage() {
  return (
    <>
      <div className="bg-[#FCFBF8] pt-[118px] sm:pt-[132px] lg:pt-[148px] pb-16 sm:pb-20 lg:pb-24">
        <div className="page-wrap">
          <div className="parallax-layer max-w-[780px]" data-parallax="14">
            <span className="inline-flex h-10 items-center rounded-full bg-[#F0EEEB] px-5 text-[13px] font-medium tracking-[0.12em] text-[#47433F] uppercase">
              Build
            </span>
            <h1 className="mt-7 text-[52px] font-medium leading-[0.94] tracking-[-0.07em] text-[#34312E] sm:text-[68px] lg:text-[84px]">
              Custom apps, AI
              <br />
              <span className="serif-italic font-normal">&amp; digital builds.</span>
            </h1>
            <p className="mt-8 max-w-[590px] text-[17px] leading-[1.65] tracking-[-0.01em] text-[#87827D]">
              Senior engineers who think like founders. Design-led, AI-assisted, outcome-obsessed delivery from MVP through to production-grade systems.
            </p>
          </div>

          <div className="parallax-layer mt-14 border-t border-[#E7E2DB] pt-12 sm:mt-16 sm:pt-14" data-parallax="10">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                ['From £3,999', 'Typical starting point'],
                ['4-8 weeks', 'MVP delivery window'],
                ['Sprint 0', 'Included in bigger builds'],
                ['Senior team', 'Product + engineering support'],
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

      <section className="bg-[#FCFBF8] pb-20 sm:pb-24 lg:pb-16">
        <div className="page-wrap">
          <div className="parallax-layer flex flex-wrap gap-2 mb-10 sm:mb-12" data-parallax="8">
            {['MVP', 'AI', 'Platforms', 'Mobile', 'Retainers', 'Partnership'].map((item, index) => (
              <span
                key={item}
                className={`inline-flex rounded-full px-5 py-2.5 text-[13px] font-medium ${
                  index === 0 ? 'bg-[#8B4CF6] text-white shadow-[0_10px_24px_rgba(139,76,246,0.26)]' : 'bg-[#EFEDE9] text-[#595552]'
                }`}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="parallax-layer grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6" data-parallax="18">
            {buildOffers.map((item, index) => (
              <article key={item.title} className={`flex h-full flex-col rounded-[30px] p-7 shadow-[0_18px_44px_rgba(17,17,17,0.03)] transition-transform duration-300 hover:-translate-y-1 ${index === 1 ? 'bg-[#EDE7FA]' : 'bg-[#F1EFED]'}`}>
                <div className="text-[28px]">{item.ico}</div>
                <div className="mt-5 text-[14px] font-medium leading-none text-[#595552]">{item.category}</div>
                <h2 className="mt-3 text-[34px] font-medium leading-[1.02] tracking-[-0.05em] text-[#171513]">
                  {item.title}
                </h2>
                <p className="mt-3 max-w-[320px] text-[16px] leading-[1.6] tracking-[-0.01em] text-[#85807B]">
                  {item.desc}
                </p>
                <div className="mt-8 space-y-2.5 text-[15px] leading-[1.55] text-[#35312E]">
                  {item.items.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <span className="mt-0.5 text-[#1F1B18]">→</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#E7E2DB] bg-[#F7F4F0] py-20 sm:py-24">
        <div className="page-wrap">
          <div className="parallax-layer max-w-[620px] text-center mx-auto" data-parallax="10">
            <span className="inline-flex h-10 items-center rounded-full bg-white px-5 text-[13px] font-medium tracking-[0.12em] text-[#3B3B3B] uppercase">
              Transparent pricing
            </span>
            <h2 className="mt-6 text-[38px] font-medium leading-[1.04] tracking-[-0.05em] text-[#222222] sm:text-[48px]">
              Build <span className="serif-italic font-normal">pricing guide</span>
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#747474]">Every project is scoped individually. These ranges help you budget before we shape the final brief.</p>
          </div>

          <div className="parallax-layer mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" data-parallax="16">
            {buildPricing.map((item) => (
              <div key={item.title} className="rounded-[24px] bg-white px-6 py-6 text-center sm:px-7">
                <div className="text-[20px] font-medium leading-[1.15] tracking-[-0.03em] text-[#23201D]">{item.title}</div>
                <div className="mt-4 text-[30px] font-medium leading-[1.02] tracking-[-0.05em] text-[#171513]">{item.price}</div>
                <div className="mt-2 text-[14px] font-medium text-[#6F6963]">{item.time}</div>
                <p className="mt-4 text-[15px] leading-[1.7] text-[#79736D]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FCFBF8] py-20 sm:py-24">
        <div className="page-wrap">
          <div className="parallax-layer max-w-[620px] text-center mx-auto" data-parallax="10">
            <span className="inline-flex h-10 items-center rounded-full bg-[#F0EEEB] px-5 text-[13px] font-medium tracking-[0.12em] text-[#47433F] uppercase">
              Our Process
            </span>
            <h2 className="mt-6 text-[38px] font-medium leading-[1.04] tracking-[-0.05em] text-[#23201D] sm:text-[48px]">
              How we <span className="serif-italic font-normal">build.</span>
            </h2>
          </div>

          <div className="parallax-layer mt-12 border-t border-[#E7E2DB]" data-parallax="16">
            {buildProcess.map((step) => (
              <div key={step.n} className="grid gap-4 border-b border-[#E7E2DB] py-7 sm:grid-cols-[80px_minmax(0,1fr)] sm:gap-8 sm:py-9">
                <div className="text-[26px] font-light tracking-[-0.04em] text-[#8B857D]">{step.n}</div>
                <div>
                  <h3 className="text-[28px] font-medium leading-[1.08] tracking-[-0.04em] text-[#23201D]">{step.title}</h3>
                  <p className="mt-3 max-w-[680px] text-[15px] leading-[1.75] text-[#79736D]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#161616] py-16 sm:py-20 text-center">
        <div className="page-wrap max-w-[560px] parallax-layer" data-parallax="16">
          <h2 className="text-[36px] font-medium leading-[1.04] tracking-[-0.05em] text-white sm:text-[48px]">
            Got an idea? <span className="serif-italic font-normal text-[rgba(255,255,255,0.4)]">Let&apos;s build it.</span>
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-[rgba(255,255,255,0.56)]">Free 30-minute strategy call. Detailed proposal within 48 hours.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-[56px] items-center justify-center rounded-full bg-white px-8 text-[14px] font-medium text-[#1A1A1A] no-underline"
            >
              Book Your Strategy Call
            </Link>
            <Link
              href="/work"
              className="inline-flex h-[56px] items-center justify-center rounded-full border border-[rgba(255,255,255,0.24)] px-8 text-[14px] font-medium text-white no-underline"
            >
              See our Build work
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
