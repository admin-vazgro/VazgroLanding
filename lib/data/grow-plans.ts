export interface GrowPlan {
  id: string; name: string; track: string; price: number;
  currency: string; icon: string; features: string[]; popular?: boolean;
  capacity: string; minMonths: number;
}
export const growPlans: GrowPlan[] = [
  {id:'design-starter',name:'Design Starter',track:'Design',price:349,currency:'GBP',icon:'🎨',capacity:'2 active requests · 48hr turnaround',minMonths:3,features:['2 active requests at a time','Social graphics & banners','Print & digital assets','Unlimited revisions','48hr avg turnaround']},
  {id:'design-pro',name:'Design Pro',track:'Design',price:649,currency:'GBP',icon:'🎨',capacity:'4 active requests · Priority queue',minMonths:3,popular:true,features:['4 active requests at a time','Custom illustrations','UI mockups & wireframes','Basic motion & GIFs','Priority queue','Monthly strategy call']},
  {id:'design-studio',name:'Design Studio',track:'Design',price:999,currency:'GBP',icon:'🎨',capacity:'6 active requests · 24hr turnaround',minMonths:3,features:['6 active requests at a time','Video editing & short-form','Full UI/UX design','24hr priority turnaround','Bi-weekly strategy calls']},
  {id:'dev-essentials',name:'Dev Essentials',track:'Dev',price:799,currency:'GBP',icon:'💻',capacity:'~10 hrs/week',minMonths:3,features:['~10 hrs/week capacity','Bug fixes & updates','Performance improvements','Monthly progress report']},
  {id:'dev-growth',name:'Dev Growth',track:'Dev',price:1499,currency:'GBP',icon:'💻',capacity:'~20 hrs/week',minMonths:3,popular:true,features:['~20 hrs/week capacity','Feature development','API & integrations','Staging environment','Monthly strategy call']},
  {id:'dev-scale',name:'Dev Scale',track:'Dev',price:2499,currency:'GBP',icon:'💻',capacity:'~40 hrs/week dedicated',minMonths:3,features:['~40 hrs/week dedicated dev','Sprint-based delivery','Full-stack development','Weekly sync calls']},
  {id:'social-starter',name:'Social Starter',track:'Social',price:399,currency:'GBP',icon:'📱',capacity:'3 platforms · 12 posts/mo',minMonths:3,features:['3 platforms','12 posts per month','Scheduling & community replies','Monthly performance report']},
  {id:'social-growth',name:'Social Growth',track:'Social',price:799,currency:'GBP',icon:'📱',capacity:'4 platforms · 20 posts/mo',minMonths:3,popular:true,features:['4 platforms','20 posts per month','Ad management (£500 budget)','Competitor analysis','Monthly strategy call']},
  {id:'social-scale',name:'Social Scale',track:'Social',price:1299,currency:'GBP',icon:'📱',capacity:'All platforms · Unlimited posts',minMonths:3,features:['All platforms','Unlimited posts','Full SEO management','Email marketing (monthly)','Ads up to £2k budget']},
];
