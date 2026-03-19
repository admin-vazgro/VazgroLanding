import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#BEBEBE] pt-16 sm:pt-20">
      <div className="page-wrap">
        <div className="flex flex-col gap-12 pb-16 lg:flex-row lg:justify-between lg:gap-16">
          <div className="max-w-[234px]">
            <Link href="/" className="no-underline">
              <span className="block text-[52px] font-medium leading-[1.08] tracking-[-0.04em] text-[#3B3B3B] sm:text-[62px]">
                Vazgro
              </span>
            </Link>
            <p className="mt-7 text-[16px] leading-[22px] tracking-[0.06em] text-[#6A6A6A]">
              UK digital agency - web design, marketing & AI for growing businesses.
            </p>

            <div className="mt-[47px] flex items-center gap-4">
              {[
                { label: 'YouTube', text: 'YT', href: 'https://www.youtube.com' },
                { label: 'Facebook', text: 'Fb', href: 'https://www.facebook.com' },
                { label: 'Twitter', text: 'X', href: 'https://x.com/vazgro' },
                { label: 'Instagram', text: 'Ig', href: 'https://www.instagram.com/vazgro' },
                { label: 'LinkedIn', text: 'In', href: 'https://www.linkedin.com/company/vazgro' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-6 w-6 items-center justify-center text-[11px] font-medium text-[#0F161E] no-underline"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[42px]">
            <FooterCol
              title="SERVICES"
              links={[
                { href: '/services/launch', label: 'Launch' },
                { href: '/services/grow', label: 'Grow' },
                { href: '/services/build', label: 'Build' },
                { href: '/pricing', label: 'Pricing' },
              ]}
            />
            <FooterCol
              title="COMPANY"
              links={[
                { href: '/work', label: 'Our Work' },
                { href: '/products', label: 'Products' },
                { href: '/about', label: 'About' },
                { href: '/blog', label: 'Blog' },
              ]}
            />
            <FooterCol
              title="RESOURCES"
              links={[
                { href: '/partner', label: 'Partner programme' },
                { href: '/client-portal', label: 'Client Portal' },
                { href: '/products/progrize', label: 'Progrize' },
              ]}
            />
            <FooterCol
              title="GET STARTED"
              links={[
                { href: '/contact', label: 'Contact us' },
                { href: '/contact', label: 'Book a Free Call', highlight: true },
                { href: 'mailto:hello@vazgro.com', label: 'Hello@vazgro.com' },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="border-t border-[#BFBFBF]">
        <div className="page-wrap flex min-h-[106px] items-center justify-center py-6 text-center">
          <div className="text-[16px] leading-[22px] tracking-[0.06em] text-black">
            &copy; {year} Vazgro Ltd · Registered in England & Wales · London, UK
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string; highlight?: boolean }[];
}) {
  return (
    <div className="min-w-[80px]">
      <div className="text-[16px] leading-[22px] tracking-[0.06em] text-[rgba(80,80,80,0.83)]">{title}</div>
      <div className="mt-[15px] flex flex-col gap-[6px]">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={[
              'text-[16px] leading-[22px] tracking-[0.06em] no-underline transition-colors',
              link.highlight ? 'font-bold text-[rgba(80,80,80,0.83)]' : 'font-normal text-[rgba(80,80,80,0.83)] hover:text-black',
            ].join(' ')}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
