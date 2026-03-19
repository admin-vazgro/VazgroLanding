export interface CaseStudy {
  slug: string; client: string; location: string; service: string;
  serviceType: 'launch' | 'grow' | 'build'; headline: string; subline: string;
  tags: string[]; color: string; bg: string; glyph: string; results: string[];
  intro: string; challenge: string; approach: string; quote: string; quoteBy: string;
  deliveryTime?: string; investment?: string; tech?: string[];
  metrics: { label: string; value: string; }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'greenfield-law', client: 'Greenfield Law', location: 'Manchester',
    service: 'LAUNCH · Business Site', serviceType: 'launch',
    headline: '+127% enquiry form submissions in 60 days',
    subline: 'A 12-year-old law firm needed a modern website that actually converted.',
    tags: ['Web Design', 'SEO', 'LAUNCH'], color: '#1400FF', bg: '#DDDEFF', glyph: '🌐',
    investment: '£499', deliveryTime: '12 days',
    metrics: [
      { label: 'Form submissions', value: '+127%' },
      { label: 'Delivery', value: '12 days' },
      { label: 'Investment', value: '£499' },
      { label: 'Google ranking', value: 'Page 1' },
    ],
    intro: 'Greenfield Law had been in business for 12 years but their website was built in 2014 — not mobile-friendly, ranking nowhere on Google, and losing them credibility in the Manchester legal market.',
    challenge: 'They had been quoted £6,000–£8,000 by local agencies and been stung by a freelancer who disappeared with a deposit. They needed a trustworthy partner who could deliver fast at a sensible price.',
    approach: '30-minute discovery call to understand the business. 10-page Business Site on WordPress — mobile-first, structured for local search, conversion-optimised for enquiry form completions. On-page SEO for all pages, 90+ Lighthouse performance score.',
    results: [
      '+127% form submissions within 60 days of launch',
      'Page 1 Google ranking for 3 local search terms within 90 days',
      'Delivered in 12 days from deposit',
      '£499 investment vs £6,000+ quoted elsewhere',
      '2 rounds of revisions, zero overruns',
    ],
    quote: 'The team actually listened. We got exactly what we needed at a price that made sense. More quality enquiries in 60 days than the whole of last year.',
    quoteBy: 'Marcus H., Director · Greenfield Law',
    tech: ['WordPress', 'Elementor', 'Google Analytics 4', 'Rank Math SEO'],
  },
  {
    slug: 'talentedge-mvp', client: 'TalentEdge', location: 'London',
    service: 'BUILD · MVP Fast-Track', serviceType: 'build',
    headline: '£150k seed round raised using the MVP — delivered in 4 weeks',
    subline: 'A non-technical HR tech founder needed a working product before a critical investor meeting.',
    tags: ['MVP', 'SaaS', 'BUILD'], color: '#1A6B54', bg: '#D0EDE6', glyph: '📱',
    deliveryTime: '4 weeks',
    metrics: [
      { label: 'Seed raised', value: '£150k' },
      { label: 'Delivery', value: '4 weeks' },
      { label: 'Core features', value: '3' },
      { label: 'Status', value: 'Live' },
    ],
    intro: 'TalentEdge had a validated HR tech idea and early user interest — but no working product to show investors. A pitch meeting was 6 weeks away and two previous dev agencies had quoted £35k+ with vague timelines.',
    challenge: 'They needed a senior team who would build fast, build right, and think commercially. The MVP had to be demo-ready and genuinely usable, not a click-through prototype.',
    approach: '1-week Sprint 0 to nail product scope and design system. Three weeks of agile sprints for core features: employee onboarding, leave management, and manager dashboard. Weekly demos kept both sides aligned.',
    results: [
      'Working MVP in 4 weeks, on budget',
      '£150,000 seed round closed using the MVP as proof-of-concept',
      'Core: onboarding, leave tracking, manager dashboard',
      'Built on Next.js + Supabase — production-ready from day one',
      'TalentEdge continues as an ongoing GROW Dev client',
    ],
    quote: 'Vazgro moved as fast as we needed without cutting corners. They think like founders — always asking the right questions.',
    quoteBy: 'Priya S., Co-founder · TalentEdge',
    tech: ['Next.js 14', 'Supabase', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Stripe'],
  },
  {
    slug: 'mediflow-ai', client: 'Medi-Flow UK', location: 'Birmingham',
    service: 'BUILD · Custom AI Development', serviceType: 'build',
    headline: '42% reduction in admin processing time with custom AI triage',
    subline: 'A healthcare operations company cut manual document handling by nearly half.',
    tags: ['AI', 'Automation', 'BUILD'], color: '#E03D00', bg: '#FFE4DA', glyph: '🤖',
    deliveryTime: '6 weeks',
    metrics: [
      { label: 'Time saved', value: '42%' },
      { label: 'Accuracy', value: '99.1%' },
      { label: 'Delivery', value: '6 weeks' },
      { label: 'ROI', value: '8 weeks' },
    ],
    intro: 'Medi-Flow UK processes patient referrals and triage documents for NHS and private clinics. A team of 12 administrators was spending 60%+ of their day manually categorising and routing incoming documentation.',
    challenge: 'Off-the-shelf tools did not handle medical terminology or their specific routing logic. Enterprise vendors quoted £80k–£200k with 12-month timelines — completely disproportionate.',
    approach: 'Custom RAG pipeline using their existing document taxonomy. AI classifies incoming documents, extracts key fields, routes them to the correct team — with human review for low-confidence cases. Fully on-prem, no PHI sent externally.',
    results: [
      '42% reduction in per-document processing time within 8 weeks',
      'Admin team reallocated to higher-value patient work',
      '99.1% routing accuracy on high-confidence documents',
      'Zero PHI sent to external APIs — fully GDPR compliant',
      'Total investment under £20k vs £80k+ enterprise quotes',
    ],
    quote: 'We were sceptical AI could handle the nuance of medical triage. Vazgro proved us wrong — in a way that kept our team in control and patient data safe.',
    quoteBy: 'Operations Director · Medi-Flow UK',
    tech: ['Python', 'LangChain', 'OpenAI GPT-4o', 'PostgreSQL', 'FastAPI', 'Docker'],
  },
  {
    slug: 'northstar-grow', client: 'NorthStar Retail', location: 'Leeds',
    service: 'GROW · Design Pro + Social Growth', serviceType: 'grow',
    headline: '3× content output, 68% follower growth — from one subscription',
    subline: 'A growing retail brand replaced three separate agencies with one Vazgro GROW bundle.',
    tags: ['Design', 'Social Media', 'GROW'], color: '#7C3AED', bg: '#EDE9FE', glyph: '⭐',
    investment: '£1,448/mo', deliveryTime: 'Ongoing (6 months)',
    metrics: [
      { label: 'Content output', value: '3×' },
      { label: 'Follower growth', value: '+68%' },
      { label: 'Agency cost saved', value: '£2.1k/mo' },
      { label: 'Avg turnaround', value: '36 hrs' },
    ],
    intro: 'NorthStar Retail was managing three separate agencies — one for graphic design, one for social media, and a freelancer for email. The coordination overhead was consuming their marketing manager\'s entire week.',
    challenge: 'Despite spending £3,500/month across three vendors, output was inconsistent and off-brand. Campaign assets arrived late, the social agency didn\'t understand the brand voice, and nobody owned the bigger picture.',
    approach: 'Consolidated onto a GROW bundle: Design Pro + Social Growth. One team, one Slack channel, one PM. Week 1 was spent on a brand immersion session. By week 2, the first fully on-brand social batch was live.',
    results: [
      'Content output tripled within 60 days — same headcount',
      '68% Instagram follower growth over 6 months',
      'Social engagement rate up from 1.2% to 4.7%',
      'Monthly agency spend reduced from £3,500 to £1,448',
      'Marketing manager freed from coordination — now focused on strategy',
    ],
    quote: 'It sounds cliché but they genuinely feel like part of our team. Everything is on-brand, everything is on time, and we\'re paying less than before.',
    quoteBy: 'Tom R., Head of Marketing · NorthStar Retail',
    tech: ['Figma', 'Adobe Creative Suite', 'Later (scheduling)', 'Mailchimp', 'Meta Ads Manager'],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find(cs => cs.slug === slug) || null;
}
