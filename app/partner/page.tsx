'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function PartnerPage() {
  const [tab, setTab] = useState<'apply' | 'login'>('apply');
  const [form, setForm] = useState({ name: '', email: '', company: '', type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <div className="page-hero">
        <div className="page-wrap">
          <div className="page-hero-copy">
            <span className="eyebrow">Partner & Referral Programme</span>
            <h1 className="type-h1 text-[32px] sm:text-[46px] lg:text-[58px] mb-4">
              Earn by referring.<br /><span className="serif-italic">We handle the rest.</span>
            </h1>
            <p className="type-body text-[#2C2B26] max-w-[500px]">
              Join our network of freelancers, agencies, and sales partners. Refer clients, close deals, and earn generous commissions — no cap.
            </p>
          </div>
        </div>
      </div>

      <div className="metric-strip">
        <div className="page-wrap metric-strip-grid">
        {[['10–15%','Commission rate'],['Monthly','Payout cycle'],['No cap','On earnings'],['2 days','Approval time']].map(([n,l])=>(
          <div key={n} className="text-center">
            <div className="text-[18px] sm:text-[22px] font-extrabold tracking-[-0.03em] serif-italic">{n}</div>
            <div className="text-[11px] sm:text-[12px] text-[#7E7B72]">{l}</div>
          </div>
        ))}
        </div>
      </div>

      <section className="section-pad border-b border-rule">
        <div className="page-wrap">
          <span className="eyebrow">Partnership models</span>
          <h2 className="type-h2 text-[24px] sm:text-[34px] lg:text-[44px] mb-8 sm:mb-10">Three ways to <span className="serif-italic">earn with Vazgro</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {[
              {icon:'💼',color:'#1A6B54',bg:'#EBF5F1',title:'Client Referral',commission:'10% of first 3 months · 5% of project value',items:['Share your referral link','Client signs up and pays','Commission pays monthly','Tracked in your dashboard']},
              {icon:'📞',color:'#1400FF',bg:'#EEEEFF',title:'Commission SDR',commission:'15% of all revenue in first 6 months',items:['Pick up leads from our CRM','Work them in your own time','We handle delivery','Paid monthly on revenue received']},
              {icon:'🏢',color:'#E03D00',bg:'#FFF0EB',title:'Agency White-Label',commission:'20–30% wholesale discount',items:['Your clients, your brand','We deliver, you invoice','Dedicated partner manager','Volume-based tier upgrades']},
            ].map(m=>(
              <div key={m.title} className="info-card surface-card-hover sm:px-8 sm:py-8">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[18px] mb-5" style={{background:m.bg}}>{m.icon}</div>
                <h3 className="font-bold text-[15px] sm:text-[17px] mb-2">{m.title}</h3>
                <p className="text-[12px] sm:text-[13px] font-semibold mb-4 leading-snug" style={{color:m.color}}>{m.commission}</p>
                <div className="space-y-1.5">
                  {m.items.map(i=><div key={i} className="flex items-start gap-2 text-[12px] sm:text-[13px] text-[#2C2B26]"><span className="text-[10px] font-bold mt-0.5 flex-shrink-0" style={{color:m.color}}>→</span>{i}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream-2 border-b border-rule">
        <div className="page-wrap">
          <div className="max-w-[520px] mx-auto">
            <div className="flex border border-rule rounded-[26px] overflow-hidden mb-6 bg-white">
              {(['apply','login'] as const).map(t=>(
                <button key={t} onClick={()=>setTab(t)} className={`flex-1 py-3 text-[13px] sm:text-[14px] font-semibold transition-colors border-none cursor-pointer font-sans ${tab===t?'bg-[#0E0D09] text-[#F6F4EE]':'bg-transparent text-[#7E7B72] hover:text-[#0E0D09]'}`}>
                  {t==='apply'?'Apply to Join':'Partner Login'}
                </button>
              ))}
            </div>
            <div className="section-panel p-6 sm:p-8 shadow-none">
              {tab==='login'?(
                <div>
                  <h3 className="font-bold text-[16px] sm:text-[18px] mb-1">Partner login</h3>
                  <p className="text-[12px] sm:text-[13px] text-[#7E7B72] mb-5">Access your referral dashboard and earnings</p>
                  <div className="space-y-3 mb-5">
                    <div><label className="text-[12px] font-semibold block mb-1.5">Email</label><input type="email" className="input" placeholder="you@company.com" /></div>
                    <div><label className="text-[12px] font-semibold block mb-1.5">Password</label><input type="password" className="input" placeholder="••••••••" /></div>
                  </div>
                  <button className="w-full py-3.5 bg-[#0E0D09] text-[#F6F4EE] font-bold rounded-lg text-[14px] hover:bg-[#2C2B26] transition-colors border-none cursor-pointer font-sans">Log In →</button>
                  <p className="text-center text-[12px] text-[#7E7B72] mt-4">Not a partner yet? <button onClick={()=>setTab('apply')} className="text-[#1400FF] font-semibold border-none bg-transparent cursor-pointer font-sans text-[12px]">Apply here →</button></p>
                </div>
              ):submitted?(
                <div className="text-center py-6">
                  <div className="text-[44px] mb-4">✅</div>
                  <h3 className="font-bold text-[17px] mb-2">Application received!</h3>
                  <p className="text-[13px] text-[#7E7B72] mb-5">We review within 2 business days and will email you with next steps.</p>
                  <Link href="/" className="btn btn-dark btn-md no-underline">Back to Vazgro →</Link>
                </div>
              ):(
                <div>
                  <h3 className="font-bold text-[16px] sm:text-[18px] mb-1">Apply to become a partner</h3>
                  <p className="text-[12px] sm:text-[13px] text-[#7E7B72] mb-5">Takes 3 minutes. We review within 2 business days.</p>
                  <div className="space-y-3 mb-5">
                    <div className="grid grid-cols-2 gap-3">
                      <div><label className="text-[12px] font-semibold block mb-1.5">Full name *</label><input className="input" placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} /></div>
                      <div><label className="text-[12px] font-semibold block mb-1.5">Email *</label><input type="email" className="input" placeholder="you@co.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} /></div>
                    </div>
                    <div><label className="text-[12px] font-semibold block mb-1.5">Company</label><input className="input" placeholder="Optional" value={form.company} onChange={e=>setForm({...form,company:e.target.value})} /></div>
                    <div>
                      <label className="text-[12px] font-semibold block mb-1.5">Partnership type *</label>
                      <select className="input cursor-pointer" value={form.type} onChange={e=>setForm({...form,type:e.target.value})}>
                        <option value="">Select...</option>
                        <option>Client Referral</option><option>Commission SDR</option><option>Agency White-Label</option><option>Not sure</option>
                      </select>
                    </div>
                    <div><label className="text-[12px] font-semibold block mb-1.5">Tell us about yourself</label><textarea className="input resize-none min-h-[80px]" placeholder="Your background, network, and why you want to partner with Vazgro" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} /></div>
                  </div>
                  <button onClick={()=>{if(form.name&&form.email&&form.type)setSubmitted(true)}} disabled={!form.name||!form.email||!form.type}
                    className="w-full py-3.5 bg-[#1A6B54] text-white font-bold rounded-lg text-[14px] hover:bg-[#155843] disabled:opacity-40 transition-colors border-none cursor-pointer font-sans">
                    Submit Application →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-ink py-14 sm:py-20 text-center">
        <div className="page-wrap max-w-[480px]">
          <h2 className="type-h2 text-[24px] sm:text-[34px] text-white mb-3">Questions about <span className="serif-italic text-[rgba(255,255,255,0.35)]">partnering?</span></h2>
          <p className="type-body text-[rgba(255,255,255,0.5)] mb-6">Email us and we will get back to you within a day.</p>
          <a href="mailto:partners@vazgro.com" className="btn btn-cream btn-md no-underline">partners@vazgro.com →</a>
        </div>
      </div>
    </>
  );
}
