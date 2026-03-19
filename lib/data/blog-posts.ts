export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  color: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-your-sme-needs-a-website-in-2026',
    title: 'Why Your SME Still Needs a Website in 2026',
    excerpt:
      'Social media is not a substitute for a proper web presence. Here is why a well-built website remains the highest-ROI investment for UK SMEs.',
    category: 'Web Design',
    date: '2026-03-10',
    readTime: '5 min read',
    color: '#1400FF',
    content: `Many UK business owners question whether they still need a website when they have Instagram and Facebook. The data is clear: 81% of consumers research online before making a purchase decision, and businesses with a professional website generate 2–3× more inbound leads than those relying solely on social media.

A website is your owned real estate on the internet. Social media platforms change algorithms, restrict reach, and can even suspend accounts. Your website is the one digital asset you fully control.

For SMEs specifically, a well-optimised website provides 24/7 lead generation, builds credibility with potential customers, ranks in local Google searches, and serves as the hub for all your marketing efforts.

The cost barrier has dropped dramatically. A professional, conversion-optimised website can be built for under £500 with modern tools and the right agency partner. The ROI typically pays for itself within 60–90 days through increased enquiries alone.`,
  },
  {
    slug: 'ai-chatbots-for-small-business',
    title: 'AI Chatbots for Small Business: A Practical Guide',
    excerpt:
      'Cut through the hype. Here is what AI chatbots can realistically do for a small business in 2026, what they cost, and how to get started.',
    category: 'AI & Automation',
    date: '2026-03-05',
    readTime: '7 min read',
    color: '#E03D00',
    content: `AI chatbots have moved from enterprise-only technology to something any small business can deploy. The question is no longer whether AI chatbots work, but which use cases deliver the best return for smaller teams.

The three highest-impact use cases for SME chatbots are: answering frequently asked questions (reducing email volume by 30–50%), qualifying leads outside business hours (capturing enquiries that would otherwise be lost), and handling appointment booking (eliminating back-and-forth scheduling emails).

Modern chatbots can be trained on your existing website content, FAQs, and documents. They understand context, handle follow-up questions, and know when to escalate to a human. Setup typically takes 3–5 days with a specialist agency.

Costs range from £500–£2,000 for initial setup, with minimal ongoing costs for hosting and API usage. Most businesses see ROI within the first month through time saved and leads captured outside business hours.

The key mistake to avoid: trying to make your chatbot do everything. Start with one clear use case, measure results, then expand. A chatbot that answers FAQs brilliantly is far more valuable than one that tries to handle sales, support, and booking but does none of them well.`,
  },
  {
    slug: 'design-subscription-vs-agency-retainer',
    title: 'Design Subscription vs Agency Retainer: Which Is Right for You?',
    excerpt:
      'The subscription model is reshaping how businesses buy design. We break down the pros, cons, and when each model makes sense.',
    category: 'Business',
    date: '2026-02-28',
    readTime: '6 min read',
    color: '#1A6B54',
    content: `The design subscription model has exploded in popularity since 2023, and for good reason. Instead of negotiating project scopes and dealing with change request fees, businesses pay a flat monthly fee for unlimited design requests.

Traditional agency retainers typically work on a time-and-materials basis: you buy a block of hours, and the agency tracks time against it. The advantage is flexibility — you can use those hours for anything. The disadvantage is unpredictability: you never quite know how many hours a project will consume, and overruns mean additional invoices.

Design subscriptions flip this model. You submit requests through a portal or Slack channel, and the team works through them in priority order. Revisions are unlimited. The monthly cost is fixed regardless of output volume. This model works exceptionally well for businesses with consistent, ongoing design needs: social media content, marketing collateral, presentation decks, email templates, and UI updates.

The subscription model tends to work best when you need consistent output across multiple channels, when your design needs are varied but not highly specialised, and when budget predictability matters more than project-based flexibility.

The traditional retainer works better when you need deep strategic involvement, when projects require extensive research and discovery phases, or when your design needs are sporadic rather than consistent.

Many growing businesses find the ideal approach is a combination: a design subscription for ongoing production work, supplemented by project-based engagements for major strategic initiatives like rebrands or product launches.`,
  },
];
