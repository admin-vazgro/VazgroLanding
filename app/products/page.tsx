import Link from 'next/link';
export default function ProductsPage() {
  return (
    <>
      <div className="bg-[#0E0D09] pt-[60px] sm:pt-[64px]">
        <div className="page-wrap py-16 sm:py-20">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.12em] uppercase text-[rgba(255,255,255,0.3)] block mb-3 sm:mb-4">Built by Vazgro</span>
          <h1 className="type-h1 text-[36px] sm:text-[52px] lg:text-[72px] text-white mb-4">Products we're building<br /><span className="serif-italic text-[rgba(255,255,255,0.35)]">for the world.</span></h1>
          <p className="type-body text-[rgba(255,255,255,0.5)] max-w-[520px]">We don't just build for clients — we build for ourselves too. These are the products we're shipping under the Vazgro umbrella.</p>
        </div>
      </div>

      {/* PROGRIZE hero */}
      <section className="bg-[#080B10] py-14 sm:py-20">
        <div className="page-wrap">
          <div className="bg-[#0D1117] border border-[rgba(99,102,241,0.2)] rounded-2xl p-6 sm:p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(99,102,241,0.07)] to-transparent pointer-events-none" />
            <div className="absolute top-5 right-5 sm:top-6 sm:right-8 text-[10px] font-bold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full bg-[rgba(99,102,241,0.15)] text-[#8B8EF8] border border-[rgba(99,102,241,0.2)]">In Development</div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start relative">
              <div>
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center text-white font-extrabold text-[15px] sm:text-[18px] flex-shrink-0">P</div>
                  <div>
                    <div className="font-extrabold text-[20px] sm:text-[24px] text-white">Progrize</div>
                    <div className="text-[12px] text-[rgba(255,255,255,0.35)]">progrize.com · Career acceleration platform</div>
                  </div>
                </div>
                <h2 className="type-h2 text-[26px] sm:text-[34px] text-white mb-4">LinkedIn meets Glassdoor,<br /><span className="serif-italic text-[#8B8EF8]">supercharged by AI.</span></h2>
                <p className="type-body text-[rgba(255,255,255,0.5)] mb-7">Progrize is the career platform professionals have been waiting for — combining the networking power of LinkedIn, the honest company intel of Glassdoor, and AI tools that actually improve your career trajectory.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
                  {[
                    {icon:'✍️',title:'AI CV & Cover Letter Optimiser',desc:'Upload your CV and a JD. Get tailored, ATS-optimised versions with specific improvement suggestions.'},
                    {icon:'🏢',title:'Honest Company Reviews',desc:'Unfiltered culture insights from verified employees — real data on management, pay equity, and growth.'},
                    {icon:'💼',title:'Smart Job Matching',desc:'Matched by values, culture fit, and growth potential — not just keywords. Know why before you apply.'},
                    {icon:'📊',title:'Salary Benchmarking',desc:'Real-time UK salary data by role, level, location, and company size. Know your worth.'},
                    {icon:'🎯',title:'Interview Preparation',desc:'AI coaching based on the specific role, company, and your background. Company-specific question banks.'},
                    {icon:'🤝',title:'Professional Networking Feed',desc:'Signal-over-noise professional content — without the self-promotion noise of other platforms.'},
                  ].map(f => (
                    <div key={f.title} className="flex items-start gap-3 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-xl p-3">
                      <div className="text-[16px] flex-shrink-0">{f.icon}</div>
                      <div><div className="font-bold text-[13px] text-white mb-0.5">{f.title}</div><div className="text-[12px] text-[rgba(255,255,255,0.4)] leading-relaxed">{f.desc}</div></div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="#waitlist" className="btn btn-sm bg-[#6366F1] text-white hover:bg-[#5255E0] no-underline border-none rounded-lg">Join the Waitlist →</Link>
                  <a href="mailto:hello@vazgro.com?subject=Progrize interest" className="btn btn-sm border border-[rgba(255,255,255,0.15)] text-[rgba(255,255,255,0.6)] hover:border-[rgba(255,255,255,0.35)] hover:text-white no-underline bg-transparent rounded-lg">Get in Touch</a>
                </div>
              </div>

              {/* Mock dashboard — hidden on sm */}
              <div className="hidden lg:block bg-[#161B22] rounded-xl border border-[rgba(255,255,255,0.06)] overflow-hidden">
                <div className="bg-[#1C2128] px-4 py-3 flex items-center gap-2 border-b border-[rgba(255,255,255,0.05)]">
                  <div className="flex gap-1.5">{['#FF5F57','#FEBC2E','#28C840'].map(c=><div key={c} className="w-2.5 h-2.5 rounded-full" style={{background:c}}/>)}</div>
                  <div className="text-[11px] text-[rgba(255,255,255,0.25)] ml-2">progrize.com · Dashboard</div>
                </div>
                <div className="p-5 space-y-3">
                  <div className="bg-[rgba(99,102,241,0.12)] border border-[rgba(99,102,241,0.2)] rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-[12px] font-bold text-[#8B8EF8]">CV Score</div>
                      <div className="text-[20px] font-extrabold text-white">94<span className="text-[12px] text-[rgba(255,255,255,0.4)]">/100</span></div>
                    </div>
                    <div className="h-1.5 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden mb-2"><div className="h-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full" style={{width:'94%'}}/></div>
                    <div className="text-[11px] text-[rgba(255,255,255,0.4)]">3 improvements suggested →</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-[rgba(255,255,255,0.04)] rounded-lg p-3 border border-[rgba(255,255,255,0.05)]"><div className="text-[10px] text-[rgba(255,255,255,0.3)] mb-1.5">Culture fit</div><div className="text-[20px] font-extrabold text-[#6EE7B7]">8.7</div></div>
                    <div className="bg-[rgba(255,255,255,0.04)] rounded-lg p-3 border border-[rgba(255,255,255,0.05)]"><div className="text-[10px] text-[rgba(255,255,255,0.3)] mb-1.5">Salary delta</div><div className="text-[20px] font-extrabold text-[#FCD34D]">+12%</div></div>
                  </div>
                  {[{co:'Stripe',role:'Senior PM · London',match:91,c:'#6EE7B7'},{co:'Monzo',role:'Product Lead · Remote',match:87,c:'#8B8EF8'},{co:'Deliveroo',role:'PM II · London',match:79,c:'#FCD34D'}].map(j=>(
                    <div key={j.co} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-lg p-3 flex items-center justify-between">
                      <div><div className="text-[13px] font-bold text-white">{j.co}</div><div className="text-[11px] text-[rgba(255,255,255,0.35)]">{j.role}</div></div>
                      <div className="font-extrabold text-[14px]" style={{color:j.c}}>{j.match}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future products */}
      <section className="bg-[#0A0D12] py-14 sm:py-20">
        <div className="page-wrap">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.12em] uppercase text-[rgba(255,255,255,0.25)] block mb-3 sm:mb-4">On the roadmap</span>
          <h2 className="type-h2 text-[26px] sm:text-[36px] lg:text-[44px] text-white mb-10 sm:mb-12">What we're building <span className="serif-italic text-[rgba(255,255,255,0.35)]">next.</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {[
              {icon:'📊',name:'DashMetric',tag:'Planned Q2 2026',color:'#F59E0B',desc:'White-label analytics dashboard builder for agencies and SaaS products.',features:['No-code dashboard builder','Multi-client management','Custom white-label branding','API-first data connectors']},
              {icon:'📝',name:'Briefly AI',tag:'Planned Q3 2026',color:'#10B981',desc:'AI-powered proposal and creative brief generator. Turns a 10-minute intake into a fully scoped project brief.',features:['AI brief generation','Scope & pricing templates','E-signature built in','Client collaboration portal']},
              {icon:'🏢',name:'Venturize',tag:'Concept — 2027',color:'#EF4444',desc:'UK startup ecosystem platform connecting founders with vetted investors, advisors, and service providers.',features:['Vetted investor network','Advisor marketplace','Stage-matched resources','Warm intro request system']},
            ].map(p => (
              <div key={p.name} className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-xl p-6 sm:p-7 hover:border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.04)] transition-all">
                <div className="flex items-start justify-between mb-5">
                  <div className="text-[28px] sm:text-[32px]">{p.icon}</div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.04)] text-[rgba(255,255,255,0.3)]">{p.tag}</span>
                </div>
                <div className="font-extrabold text-[17px] sm:text-[19px] text-white mb-2">{p.name}</div>
                <p className="text-[13px] text-[rgba(255,255,255,0.4)] leading-relaxed mb-5">{p.desc}</p>
                <div className="space-y-1.5">
                  {p.features.map(f => <div key={f} className="flex items-center gap-2 text-[12px] sm:text-[13px] text-[rgba(255,255,255,0.3)]"><span className="w-1 h-1 rounded-full flex-shrink-0" style={{background:p.color}}/>{f}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
