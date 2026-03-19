'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_H = 96;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeDD, setActiveDD] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setActiveDD(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setActiveDD(null);
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  const toggle = (name: string) => setActiveDD(p => (p === name ? null : name));

  return (
    <>
      {/* ── NAV BAR ── */}
      <nav
        ref={navRef}
        style={{ height: NAV_H }}
        className={[
          'fixed top-0 left-0 right-0 z-50 border-b transition-all duration-200',
          scrolled
            ? 'bg-[rgba(254,254,254,0.94)] backdrop-blur-xl border-[#E6E6E1]'
            : 'bg-[rgba(254,254,254,0.86)] backdrop-blur-md border-[#ECECE6]',
        ].join(' ')}
      >
        <div className="page-wrap flex h-full items-center justify-between">
          <Link
            href="/"
            className="no-underline flex-shrink-0 group"
            aria-label="Vazgro — Home"
          >
            <span className="text-[30px] font-medium leading-[1] tracking-[-0.08em] text-[#202020] sm:text-[34px]">
              Vazgro
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-2">
            <div className="relative">
              <DDButton label="Service" open={activeDD === 'services'} onClick={() => toggle('services')} />
              <DDPanel open={activeDD === 'services'} align="left">
                <DDItem href="/services/launch" icon="⚡" label="LAUNCH" sub="Fixed-fee packages · Web, Brand, AI" />
                <DDItem href="/services/grow" icon="📈" label="GROW" sub="Monthly subscriptions · Design, Dev, Social" />
                <DDItem href="/services/build" icon="🔧" label="BUILD" sub="Product studio · Apps, AI, Custom builds" />
              </DDPanel>
            </div>

            <div className="relative">
              <DDButton label="Pricing" open={activeDD === 'pricing'} onClick={() => toggle('pricing')} />
              <DDPanel open={activeDD === 'pricing'} align="left">
                <DDItem href="/pricing" icon="⚡" label="LAUNCH Pricing" sub="One-off packages from £149" />
                <DDItem href="/pricing" icon="📈" label="GROW Pricing" sub="Subscriptions from £349/mo" />
                <div className="h-px bg-rule my-1.5 mx-2" />
                <DDItem href="/services/build" icon="🔧" label="BUILD Enquiry" sub="Custom scoping · Free strategy call" />
              </DDPanel>
            </div>

            <NavLink href="/work" active={pathname.startsWith('/work')}>Work</NavLink>
            <NavLink href="/about" active={pathname === '/about'}>About</NavLink>
            <NavLink href="/contact" active={pathname === '/contact'}>Contact</NavLink>
          </div>

          <Link
            href="/contact"
            className="hidden lg:inline-flex h-[48px] items-center justify-center rounded-full bg-[#151515] px-5 text-[14px] font-medium text-white no-underline shadow-[0_12px_24px_rgba(17,17,17,0.12)] transition-transform hover:-translate-y-0.5"
          >
            Book a call
          </Link>

          <button
            onClick={() => setMobileOpen(v => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="lg:hidden relative flex flex-col justify-center items-center w-10 h-10 flex-shrink-0 bg-transparent border-none cursor-pointer p-0 gap-[5px]"
          >
            <span style={{
              display: 'block', width: 22, height: 2, background: '#0E0D09', borderRadius: 2,
              transition: 'transform 0.25s ease, opacity 0.25s ease',
              transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : '',
            }} />
            <span style={{
              display: 'block', width: 22, height: 2, background: '#0E0D09', borderRadius: 2,
              transition: 'transform 0.25s ease, opacity 0.25s ease',
              opacity: mobileOpen ? 0 : 1, transform: mobileOpen ? 'scaleX(0)' : '',
            }} />
            <span style={{
              display: 'block', width: 22, height: 2, background: '#0E0D09', borderRadius: 2,
              transition: 'transform 0.25s ease, opacity 0.25s ease',
              transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : '',
            }} />
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      <div
        aria-hidden="true"
        onClick={() => setMobileOpen(false)}
        className="lg:hidden fixed inset-0 z-40 bg-black"
        style={{ opacity: mobileOpen ? 0.45 : 0, pointerEvents: mobileOpen ? 'auto' : 'none', transition: 'opacity 0.3s ease', top: NAV_H }}
      />
      <div
        className="lg:hidden fixed right-0 z-40 bg-cream border-l border-rule flex flex-col shadow-2xl overflow-hidden"
        style={{
          top: NAV_H, height: `calc(100dvh - ${NAV_H}px)`, width: 300, maxWidth: '88vw',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.3s ease',
        }}
      >
        <div className="flex-1 overflow-y-auto py-3 px-3">
          {/* Services accordion */}
          <div>
            <button
              onClick={() => setServicesOpen(v => !v)}
              className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-semibold text-ink bg-transparent border-none cursor-pointer font-sans hover:bg-cream-2 transition-colors"
            >
              <span>Services</span>
              <span style={{ fontSize: 11, color: '#7E7B72', display: 'inline-block', transition: 'transform 0.2s ease', transform: servicesOpen ? 'rotate(180deg)' : '' }}>▾</span>
            </button>
            <div style={{ overflow: 'hidden', maxHeight: servicesOpen ? 220 : 0, transition: 'max-height 0.25s ease' }}>
              <div className="pl-3 pb-1 space-y-0.5">
                <MobileItem href="/services/launch" icon="⚡" label="LAUNCH" sub="Fixed-fee packages" />
                <MobileItem href="/services/grow" icon="📈" label="GROW" sub="Monthly subscriptions" />
                <MobileItem href="/services/build" icon="🔧" label="BUILD" sub="Product studio & AI" />
              </div>
            </div>
          </div>
          {[
            { href: '/pricing', label: 'Pricing' },
            { href: '/work', label: 'Work' },
            { href: '/products', label: 'Products' },
            { href: '/about', label: 'About' },
            { href: '/contact', label: 'Contact' },
          ].map(item => (
            <Link key={item.href} href={item.href} className="block px-4 py-3.5 text-[15px] font-semibold text-ink rounded-xl no-underline hover:bg-cream-2 transition-colors">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="p-4 border-t border-rule flex-shrink-0">
          <Link href="/contact" className="block w-full text-center py-4 bg-ink text-cream rounded-xl font-bold text-[14px] no-underline hover:bg-ink-2 transition-colors" style={{ WebkitTapHighlightColor: 'transparent' }}>
            Book a Free Call →
          </Link>
        </div>
      </div>
    </>
  );
}

/* ── Sub-components ── */

function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active?: boolean }) {
  return (
    <Link href={href} className={[
      'text-[16px] font-light px-3 py-1.5 rounded-md no-underline transition-colors duration-150',
      active ? 'text-[#111111]' : 'text-[#5D5D5D] hover:text-[#111111]',
    ].join(' ')}>
      {children}
    </Link>
  );
}

function DDButton({ label, open, onClick }: { label: string; open: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className={[
      'inline-flex items-center gap-2 text-[15px] font-normal px-3 py-1.5 rounded-md',
      'border-none cursor-pointer font-sans transition-colors duration-150',
      open ? 'text-[#111111]' : 'bg-transparent text-[#5D5D5D] hover:text-[#111111]',
    ].join(' ')}>
      {label}
      <span style={{ fontSize: 10, display: 'inline-block', transition: 'transform 0.15s ease', transform: open ? 'rotate(180deg)' : '' }}>▾</span>
    </button>
  );
}

function DDPanel({ open, children, align = 'left' }: { open: boolean; children: React.ReactNode; align?: 'left' | 'right' }) {
  return (
    <div
      className="absolute top-[calc(100%+14px)] bg-white border border-[#EAEAEA] rounded-[20px] p-2 shadow-[0_12px_28px_rgba(14,13,9,0.08)] z-50"
      style={{
        minWidth: 290, left: align === 'left' ? 0 : 'auto', right: align === 'right' ? 0 : 'auto',
        opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
        transform: open ? 'translateY(0)' : 'translateY(-6px)', transition: 'opacity 0.15s ease, transform 0.15s ease',
      }}
    >
      {children}
    </div>
  );
}

function DDItem({ href, icon, label, sub }: { href: string; icon: string; label: string; sub: string }) {
  return (
    <Link href={href} className="flex items-start gap-3 px-3.5 py-3 rounded-[16px] no-underline hover:bg-[#F8F8F8] transition-colors">
      <div className="w-7 h-7 rounded-[10px] bg-[#EAEAEA] flex items-center justify-center text-[13px] flex-shrink-0 mt-0.5">{icon}</div>
      <div>
        <div className="text-[13px] font-semibold text-ink leading-snug">{label}</div>
        <div className="text-[12px] text-muted mt-0.5 leading-snug">{sub}</div>
      </div>
    </Link>
  );
}

function MobileItem({ href, icon, label, sub }: { href: string; icon: string; label: string; sub: string }) {
  return (
    <Link href={href} className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl no-underline hover:bg-cream-2 transition-colors" style={{ WebkitTapHighlightColor: 'transparent' }}>
      <div className="w-7 h-7 rounded-md bg-blue-lt flex items-center justify-center text-[13px] flex-shrink-0">{icon}</div>
      <div>
        <div className="text-[13px] font-bold text-ink leading-snug">{label}</div>
        <div className="text-[11px] text-muted leading-snug">{sub}</div>
      </div>
    </Link>
  );
}
