import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import HeroCarousel from '@/components/home/HeroCarousel';

export const metadata: Metadata = {
  title: 'Vazgro — More Customers, Stronger Brand, Faster Growth',
  description:
    'Vazgro: web design, marketing, and AI for growing businesses. Fixed-price launches, subscription-led growth, and custom digital builds.',
  alternates: { canonical: 'https://vazgro.com' },
  openGraph: {
    title: 'Vazgro — More Customers, Stronger Brand, Faster Growth',
    description:
      'Web design, marketing, and AI for growing UK businesses. Fixed-price, transparent and fast delivery.',
    url: 'https://vazgro.com',
  },
};

const serviceModels = [
  {
    title: 'Fixed price. Fast delivery',
    text: 'Buy exactly what you need - websites, branding, AI tools - at a price you know upfront. Delivered in days, not months.',
    href: '/services/launch',
    icon: 'rocket',
  },
  {
    title: 'Your always-on digital team.',
    text: 'Design, development, and marketing with fast turnaround, clear communication, and no agency drag.',
    href: '/services/grow',
    icon: 'chart',
  },
  {
    title: 'Custom apps, AI & digital builds.',
    text: 'Senior execution for product builds, internal systems, and AI-led tools that move your business forward.',
    href: '/services/build',
    icon: 'wrench',
  },
];

const stats = [
  {
    value: '81%',
    title: 'of buyers research online before buying',
    body: 'A weak website loses customers before you pitch. First impressions are now entirely digital.',
  },
  {
    value: '4.2x',
    title: 'higher ROI from consistent social media',
    body: 'Businesses with consistent social presence generate significantly more inbound leads.',
  },
  {
    value: '40%',
    title: 'of admin time saved with AI automation',
    body: 'Smart AI handles follow-ups, scheduling, and reporting - freeing your team for growth work.',
  },
  {
    value: '4 wks',
    title: 'to go from idea to live product',
    body: 'With modern tooling and the right partner, validate and launch faster than competitors.',
  },
];

const showcaseCards = [
  {
    title: 'Progrize APP',
    body: 'A mobile-first job discovery and career growth product designed to feel clear, calm, and useful.',
    tone: 'neutral',
    size: 'large',
    src: '/progrize-app.svg',
    contentClass: 'left-[28px] top-[28px] max-w-[180px]',
    imageClass: 'bottom-0 right-0 h-[80%] w-[84%] sm:h-[84%] sm:w-[82%]',
  },
  {
    title: 'Progrize Web',
    body: 'A sharper desktop experience for career matching, insight-led decisions, and AI-assisted progress.',
    tone: 'violet',
    size: 'small',
    src: '/websiteprogrize.svg',
    contentClass: 'left-[28px] top-[28px] max-w-[188px]',
    imageClass: 'bottom-0 -right-[14%] h-[68%] w-[94%] sm:-right-[12%] sm:h-[74%] sm:w-[86%]',
  },
  {
    title: 'Progrize Learn',
    body: 'Education and interview support layered into the product so users keep moving, not just browsing.',
    tone: 'green',
    size: 'small',
    src: '/progrizelearn.svg',
    contentClass: 'left-[28px] top-[28px] max-w-[190px]',
    imageClass: 'bottom-0 left-[6%] h-[58%] w-[88%] sm:left-[14px] sm:h-[61%] sm:w-[84%]',
  },
  {
    title: 'Track your TAXI',
    body: 'A service product concept with real-time motion, payment context, and mobile-first system thinking.',
    tone: 'neutral',
    size: 'large',
    src: '/taxi.svg',
    contentClass: 'bottom-[28px] right-[28px] max-w-[190px]',
    imageClass: 'left-0 -top-[22%] h-[118%] w-[74%] sm:left-[2%] sm:-top-[18%] sm:h-[112%] sm:w-[68%]',
  },
];

const proofBubbles = [
  {
    title: 'George (founder of Progrize)',
    body: "They didn't just make the brand. They built trust.",
  },
  {
    title: 'Team Vazgro',
    body: "Building a product is not just a process. It's a passion for us.",
  },
  {
    title: '500 + Reviews',
    body: 'Trusted by founders, operators, and growing teams.',
  },
];

const reviewAvatars = [
  { src: '/AVATAR.svg', alt: 'Reviewer avatar 1' },
  { src: '/AVATAR-1.svg', alt: 'Reviewer avatar 2' },
  { src: '/AVATAR-2.svg', alt: 'Reviewer avatar 3' },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-[#ECECE6] bg-[#FEFEFE] pt-[138px] sm:pt-[156px] lg:pt-[130px] pb-20 sm:pb-24">
        <div className="page-wrap">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="parallax-layer max-w-[640px]" data-parallax="18">
              <div className="inline-flex h-10 items-center gap-2 rounded-full bg-[#F4F4F1] px-5 text-[13px] font-medium tracking-[-0.03em] text-[#616161]">
                <span aria-hidden="true">⚡</span>
                <span>Power up your brand</span>
              </div>

              <h1 className="mt-7 max-w-[640px] text-[54px] font-medium leading-[0.98] tracking-[-0.06em] text-[#161616] sm:text-[64px] lg:text-[76px]">
                More Customers,
                <br />
                Stronger <span className="serif-italic">brand</span>.
                <br />
                Faster <span className="serif-italic">Growth</span>
              </h1>

              <p className="mt-7 max-w-[560px] text-[17px] leading-[1.55] tracking-[-0.015em] text-[#707070]">
                We build the websites, run the marketing, and ship the AI products that turn your business into a digital powerhouse.
              </p>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex min-w-[236px] items-center justify-between gap-5 rounded-full bg-[#151515] px-2 py-2 pl-6 pr-2 text-[14px] font-medium text-white no-underline shadow-[0_18px_40px_rgba(17,17,17,0.14)]"
                >
                  <span>Book a free strategy call</span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[17px] font-semibold text-[#1F008E]">
                    ↗
                  </span>
                </Link>

                <Link
                  href="/services/launch"
                  className="inline-flex h-[56px] items-center rounded-full border border-[#D8D8D2] bg-white px-6 text-[14px] font-medium text-[#393939] no-underline shadow-[0_10px_24px_rgba(17,17,17,0.04)]"
                >
                  See What We Do
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-3.5">
                  {reviewAvatars.map((avatar) => (
                    <div
                      key={avatar.src}
                      className="relative h-[42px] w-[42px] overflow-hidden rounded-full border-2 border-white shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
                    >
                      <Image src={avatar.src} alt={avatar.alt} fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-[14px] leading-[22px] tracking-[-0.01em] text-[#7A7A7A]">500 + Reviews</div>
              </div>
            </div>

            <div className="parallax-layer" data-parallax="30">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-[132px]">
        <div className="page-wrap">
          <div className="parallax-layer flex flex-col gap-8 pb-10 lg:flex-row lg:items-end lg:justify-between" data-parallax="10">
            <h2 className="max-w-[495px] text-[34px] font-medium leading-[1.36] tracking-[-0.01em] text-[#3B3B3B] sm:text-[38px] lg:text-[42px]">
              Three ways to work with Us
            </h2>
            <p className="max-w-[677px] text-[16px] leading-[22px] tracking-[0.06em] text-[rgba(80,80,80,0.83)]">
              We build the websites, run the marketing, and ship the AI products that turn your business into a digital powerhouse.
            </p>
          </div>

          <div className="parallax-layer grid gap-5 lg:grid-cols-3" data-parallax="16">
            {serviceModels.map((model) => (
              <Link
                key={model.title}
                href={model.href}
                className="rounded-[34px] border border-[#ECECE6] bg-[#FAFAF7] p-9 no-underline shadow-[0_16px_40px_rgba(17,17,17,0.03)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_22px_52px_rgba(17,17,17,0.06)]"
              >
                <div className="mb-7 inline-flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-white shadow-[0_10px_24px_rgba(17,17,17,0.05)]">
                  <ServiceIcon type={model.icon} />
                </div>
                <h3 className="text-[26px] font-medium leading-[1.2] tracking-[-0.03em] text-[#222222]">
                  {model.title}
                </h3>
                <p className="mt-4 text-[16px] leading-[1.6] tracking-[-0.01em] text-[#737373]">
                  {model.text}
                </p>
                <div className="mt-9 text-[16px] font-medium tracking-[-0.03em] text-black">Explore more</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-[132px]">
        <div className="page-wrap">
          <div className="parallax-layer mx-auto max-w-[807px] text-center" data-parallax="10">
            <h2 className="text-[34px] font-medium leading-[1.36] tracking-[-0.01em] text-[#3B3B3B] sm:text-[38px] lg:text-[42px]">
              Your next customer is already online.
              <br />
              Are you ready ?
            </h2>
            <p className="mx-auto mt-4 max-w-[583px] text-[16px] leading-[22px] tracking-[0.06em] text-[rgba(80,80,80,0.83)]">
              Businesses that invest in their digital presence win more customers, spend less on ads, and outgrow their competitors.
            </p>
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-[534px_minmax(0,1fr)] lg:items-center">
            <div className="parallax-layer relative min-h-[669px] overflow-hidden rounded-[27px] bg-[#F8F8F8] shadow-[0_20px_56px_rgba(17,17,17,0.05)]" data-parallax="24">
              <Image
                src="/are-u-ready.svg"
                alt="Product illustration for the digital growth section"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="parallax-layer grid gap-y-[59px] sm:grid-cols-2 sm:gap-x-[31px]" data-parallax="12">
              {stats.map((item) => (
                <article key={item.value}>
                  <div className="serif-italic text-[46px] leading-[1] tracking-[-0.04em] text-black sm:text-[57px] sm:leading-[66px]">
                    {item.value}
                  </div>
                  <h3 className="mt-[17px] text-[24px] font-medium leading-[33px] tracking-[-0.01em] text-[#222222]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[16px] leading-[22px] tracking-[0.06em] text-[rgba(80,80,80,0.83)]">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-[132px]">
        <div className="page-wrap">
          <div className="parallax-layer mx-auto max-w-[583px] text-center" data-parallax="10">
            <h2 className="text-[34px] font-medium leading-[1.36] tracking-[-0.01em] text-[#3B3B3B] sm:text-[38px] lg:text-[42px]">
              Real projects, Real Results
            </h2>
            <p className="mt-4 text-[16px] leading-[22px] tracking-[0.06em] text-[rgba(80,80,80,0.83)]">
              Businesses that invest in their digital presence win more customers, spend less on ads, and outgrow their competitors.
            </p>
          </div>

          <div className="parallax-layer mt-14 grid gap-5 lg:grid-cols-[1.32fr_0.98fr]" data-parallax="18">
            <ShowcaseCard card={showcaseCards[0]} />
            <ShowcaseCard card={showcaseCards[1]} />
            <ShowcaseCard card={showcaseCards[2]} />
            <ShowcaseCard card={showcaseCards[3]} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-[156px]">
        <div className="page-wrap relative">
          <div className="parallax-layer mx-auto max-w-[487px] text-center" data-parallax="16">
            <div className="text-[16px] leading-[22px] tracking-[0.06em] text-[rgba(80,80,80,0.83)]">READY TO START</div>
            <h2 className="mt-[21px] text-[34px] font-medium leading-[1.36] tracking-[-0.01em] text-[#3B3B3B] sm:text-[38px] lg:text-[42px]">
              Let&apos;s grow your business
              <br />
              digitally.
            </h2>
            <p className="mt-4 text-[16px] leading-[22px] tracking-[0.06em] text-[rgba(80,80,80,0.83)]">
              Free 30-minute strategy call. No commitment, no pressure.
            </p>

            <div className="mt-[21px] flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-[26px]">
              <Link
                href="/contact"
                className="inline-flex h-[60px] items-center justify-between gap-6 rounded-[40px] bg-[#202020] px-4 pl-6 pr-3 text-[14px] font-bold text-white no-underline min-w-[272px]"
              >
                <span>Book a free strategy call</span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[20px] font-semibold text-[#1F008E]">
                  ↗
                </span>
              </Link>
              <a
                href="mailto:hello@vazgro.com"
                className="inline-flex h-[60px] items-center rounded-[50px] border border-black px-6 text-[14px] font-bold text-[#393939] no-underline"
              >
                Email Us
              </a>
            </div>
          </div>

          <div className="parallax-layer hidden xl:block absolute left-[24px] top-[16px]" data-parallax="28">
            <SpeechBubble title={proofBubbles[1].title} body={proofBubbles[1].body} tail="right" />
          </div>
          <div className="parallax-layer hidden xl:block absolute left-[96px] bottom-[-10px]" data-parallax="34">
            <div className="rounded-[20px_0_20px_20px] border border-[#E8E8E8] bg-white px-5 py-3">
              <div className="flex items-center gap-5">
                <div className="flex -space-x-3.5">
                  {reviewAvatars.map((avatar) => (
                    <div key={avatar.src} className="relative h-[44px] w-[44px] overflow-hidden rounded-full border-2 border-white shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
                      <Image src={avatar.src} alt={avatar.alt} fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-[16px] leading-[22px] tracking-[0.06em] text-[#505050]">500 + Reviews</div>
              </div>
            </div>
          </div>
          <div className="parallax-layer hidden xl:block absolute right-[20px] top-[84px]" data-parallax="30">
            <div className="rounded-[26px_26px_26px_0] border border-[#EAEAEA] bg-white px-5 py-4">
              <div className="flex items-center gap-4">
                <div className="h-[40px] w-[40px] rounded-[12px] bg-[#D9D9D9]" />
                <div>
                  <div className="text-[14px] font-bold leading-[15px] text-[#191D2A]">$560.00</div>
                  <div className="mt-1 text-[9px] leading-[9px] text-[#888B92]">From Adom</div>
                </div>
                <div className="text-[8px] leading-[7px] text-[#FF0000]">On Hold</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceIcon({ type }: { type: string }) {
  if (type === 'chart') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 18.5H20" stroke="#000" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M6 15L10 11L13 14L18 8" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5 8H18V9.5" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === 'wrench') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14.5 6.5A4.5 4.5 0 0 0 9 12l-4.75 4.75a1.77 1.77 0 1 0 2.5 2.5L11.5 14A4.5 4.5 0 0 0 17 8.5L14 11.5l-1.5-1.5 3-3Z" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" aria-hidden="true">
      <path d="M8.31 1.33c.31-.51 1.07-.51 1.38 0l2.04 3.41 3.86.83c.63.13.88.9.45 1.39l-2.64 3.03.4 3.98c.07.65-.61 1.14-1.18.84L9 13.15l-3.62 1.66c-.57.3-1.25-.19-1.18-.84l.4-3.98L1.96 6.96c-.43-.49-.18-1.26.45-1.39l3.86-.83L8.31 1.33Z" fill="#000" />
      <path d="M9 13.15V20" stroke="#000" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ShowcaseCard({
  card,
}: {
  card: {
    title: string;
    body: string;
    tone: string;
    size: string;
    src: string;
    contentClass: string;
    imageClass: string;
  };
}) {
  const shellClass =
    card.tone === 'violet'
      ? 'bg-[linear-gradient(180deg,#F3F0FF_0%,#DAD1FE_100%)]'
      : card.tone === 'green'
        ? 'bg-[linear-gradient(180deg,#FBFFFA_0%,#CEFFDA_100%)]'
        : 'bg-[#F4F4F4]';

  return (
    <article
      className={[
        'relative overflow-hidden rounded-[30px] border border-[#ECECE6] shadow-[0_14px_38px_rgba(17,17,17,0.04)]',
        shellClass,
        'min-h-[456px]',
      ].join(' ')}
    >
      <div className={`absolute z-10 ${card.contentClass}`}>
        <h3 className="text-[30px] font-medium leading-[1.08] tracking-[-0.03em] text-black">{card.title}</h3>
        <p className="mt-2 text-[13px] leading-[1.45] tracking-[-0.01em] text-[rgba(80,80,80,0.83)]">
          {card.body}
        </p>
      </div>

      <div className={`absolute ${card.imageClass}`}>
        <Image src={card.src} alt={card.title} fill className="object-contain object-center" />
      </div>
    </article>
  );
}

function SpeechBubble({ title, body, tail }: { title: string; body: string; tail: 'left' | 'right' }) {
  return (
    <div
      className={[
        'max-w-[296px] border border-[#F0F0F0] bg-white px-5 py-4',
        tail === 'right' ? 'rounded-[20px_20px_20px_0]' : 'rounded-[20px_20px_0_20px]',
      ].join(' ')}
    >
      <div className="text-[14px] font-light leading-[23px] text-[#7A7A7A]">{body}</div>
      <div className="mt-2 text-[14px] font-light leading-[19px] text-[#696969]">{title}</div>
    </div>
  );
}
