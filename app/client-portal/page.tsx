'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ClientPortalPage() {
  const [tab, setTab] = useState<'login' | 'signup'>('login');

  return (
    <div className="min-h-[calc(100vh-60px)] bg-cream flex items-center justify-center px-4 sm:px-6 py-12">
      <div className="w-full max-w-[440px]">
        {/* Logo & title */}
        <div className="text-center mb-7">
          <Link href="/" className="font-extrabold text-[24px] sm:text-[26px] tracking-[-0.04em] text-[#0E0D09] no-underline">
            vaz<span className="text-[#1400FF]">gro</span>
          </Link>
          <div className="text-[13px] text-[#7E7B72] mt-1.5">Client Portal</div>
        </div>

        <div className="section-panel overflow-hidden">
          {/* Tab bar */}
          <div className="flex border-b border-rule">
            {(['login', 'signup'] as const).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 py-3 text-[13px] font-semibold capitalize transition-colors border-none cursor-pointer font-sans ${
                  tab === t
                    ? 'bg-[#0E0D09] text-[#F6F4EE]'
                    : 'bg-white text-[#7E7B72] hover:text-[#0E0D09]'
                }`}
              >
                {t === 'login' ? 'Log In' : 'Sign Up'}
              </button>
            ))}
          </div>

          <div className="p-6 sm:p-8">
            {tab === 'login' ? (
              <div>
                <h2 className="font-bold text-[16px] sm:text-[18px] text-[#0E0D09] mb-1">Welcome back</h2>
                <p className="text-[12px] sm:text-[13px] text-[#7E7B72] mb-5">Sign in to your Vazgro client portal</p>
                <div className="space-y-3 mb-5">
                  <div>
                    <label className="text-[12px] font-semibold text-[#2C2B26] block mb-1.5">Email address</label>
                    <input type="email" className="input" placeholder="you@company.co.uk" />
                  </div>
                  <div>
                    <label className="text-[12px] font-semibold text-[#2C2B26] block mb-1.5">Password</label>
                    <input type="password" className="input" placeholder="••••••••" />
                  </div>
                </div>
                <button className="w-full py-3.5 bg-[#0E0D09] text-[#F6F4EE] font-bold rounded-lg text-[14px] hover:bg-[#2C2B26] transition-colors border-none cursor-pointer font-sans">
                  Log In →
                </button>
                <div className="text-center mt-4 text-[12px] text-[#7E7B72]">
                  <button className="hover:text-[#0E0D09] transition-colors border-none bg-transparent cursor-pointer font-sans text-[12px] text-[#7E7B72]">
                    Forgot password?
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="font-bold text-[16px] sm:text-[18px] text-[#0E0D09] mb-1">Get access</h2>
                <p className="text-[12px] sm:text-[13px] text-[#7E7B72] mb-5">Portal access is provided when you start a project</p>
                <div className="bg-[#EEEEFF] border border-[rgba(20,0,255,0.12)] rounded-[22px] p-4 text-[12px] sm:text-[13px] text-[#1400FF] mb-5">
                  Your portal account is created automatically when you purchase a LAUNCH package or start a GROW subscription. Check your email for login details.
                </div>
                <div className="border-t border-rule pt-5 mb-5">
                  <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#7E7B72] mb-3">What is inside the portal</div>
                  <div className="space-y-2.5">
                    {[
                      { icon: '📋', title: 'Project tracker', desc: 'Live status of every request and deliverable' },
                      { icon: '💬', title: 'Direct messaging', desc: 'Instant access to your PM' },
                      { icon: '📁', title: 'File delivery', desc: 'Download all assets and source files' },
                      { icon: '💳', title: 'Invoices & billing', desc: 'View invoices and manage payments' },
                    ].map(item => (
                      <div key={item.title} className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg bg-[#EFECE4] flex items-center justify-center text-[13px] flex-shrink-0">{item.icon}</div>
                        <div>
                          <div className="text-[13px] font-semibold text-[#0E0D09] leading-tight">{item.title}</div>
                          <div className="text-[11px] text-[#7E7B72]">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  href="/services/launch"
                  className="block w-full text-center py-3.5 bg-[#0E0D09] text-[#F6F4EE] font-bold rounded-lg text-[14px] no-underline hover:bg-[#2C2B26] transition-colors"
                >
                  Browse Packages →
                </Link>
              </div>
            )}
          </div>
        </div>

        <p className="text-center text-[12px] text-[#7E7B72] mt-5">
          Need help? Email{' '}
          <a href="mailto:hello@vazgro.com" className="text-[#1400FF] no-underline hover:underline">
            hello@vazgro.com
          </a>
        </p>
      </div>
    </div>
  );
}
