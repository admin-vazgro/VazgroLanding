# Vazgro — v4.0

UK digital agency website built with Next.js 14, TypeScript, and Tailwind CSS.

## Quick Start

```bash
unzip vazgro-v4.zip && cd vazgro-v4
npm install
cp .env.example .env.local   # add your keys
npm run dev                   # http://localhost:3000
```

## Tech Stack

| Layer         | Technology                          |
|---------------|-------------------------------------|
| Framework     | Next.js 14 (App Router)             |
| Language      | TypeScript                          |
| Styling       | Tailwind CSS + custom design system |
| Fonts         | Instrument Serif + Bricolage Grotesque |
| Payments      | Stripe + Razorpay (geo-detected)    |
| CRM           | Pluggable adapter (JSON / HubSpot / Salesforce) |
| Animations    | CSS keyframes + Framer Motion       |
| Icons         | Lucide React                        |
| Deployment    | Vercel (recommended)                |

## Design System

- **Background:** Warm cream `#F6F4EE`
- **Ink:** `#0E0D09`
- **Accents:** Electric blue `#1400FF`, deep sage `#1A6B54`, terracotta `#E03D00`
- **Gold accent:** `#C5A84F` (CTA highlights)
- **Style:** Editorial magazine — serif italic headlines, thin rules, generous whitespace

## File Structure

```
app/
├── page.tsx                          # Homepage (Figma-aligned design)
├── layout.tsx                        # Root layout + JSON-LD structured data
├── globals.css                       # Design tokens + Tailwind components
├── sitemap.ts                        # Dynamic sitemap generation
├── robots.ts                         # Dynamic robots.txt
├── not-found.tsx                     # Custom 404
├── services/launch/page.tsx          # LAUNCH packages (filter + modal)
├── services/grow/page.tsx            # GROW subscriptions (track tabs + modal)
├── services/build/page.tsx           # BUILD studio page
├── work/page.tsx                     # Portfolio index
├── work/[slug]/page.tsx              # Case study detail
├── pricing/page.tsx                  # Full pricing table
├── about/page.tsx                    # About
├── contact/page.tsx                  # Contact form (wired to CRM API)
├── blog/page.tsx                     # Blog index (SEO foundation)
├── products/page.tsx                 # Products overview
├── products/progrize/page.tsx        # Progrize dedicated page + waitlist
├── partner/page.tsx                  # Partner/referral programme
├── client-portal/page.tsx            # Client login
├── payment/success/page.tsx          # Payment confirmation (Stripe + Razorpay)
├── privacy/page.tsx                  # Privacy policy
├── terms/page.tsx                    # Terms of service
└── api/
    ├── geo/route.ts                  # GET — country/currency/gateway detection
    ├── leads/route.ts                # POST/PATCH — lead capture (CRM adapter)
    ├── checkout/route.ts             # POST — unified payment (Stripe or Razorpay)
    └── webhooks/
        ├── stripe/route.ts           # Stripe event handler
        └── razorpay/route.ts         # Razorpay event handler

components/
├── Nav.tsx                           # Responsive nav (serif logo, pill CTA)
├── Footer.tsx                        # 4-column footer
└── modals/
    ├── LaunchModal.tsx               # 3-step modal (geo-aware, multi-gateway)
    └── GrowModal.tsx                 # 3-step modal (geo-aware pricing)

lib/
├── crm.ts                           # Pluggable CRM adapter (JSON/HubSpot/Salesforce)
├── stripe.ts                        # Stripe checkout + subscription helpers
├── razorpay.ts                      # Razorpay order/subscription + verification
├── payment.ts                       # Unified payment gateway abstraction
├── geo.ts                           # Country detection + currency mapping
└── data/
    ├── packages.ts                   # 9 LAUNCH package definitions
    ├── grow-plans.ts                 # 9 GROW plan definitions
    └── case-studies.ts               # 4 case studies
```

## Payment Gateway Architecture

### How geo-detection works

1. Client calls `GET /api/geo` on page load
2. Server reads country from `x-vercel-ip-country` → `cf-ipcountry` → `accept-language` → defaults to GB
3. Country maps to currency and preferred gateway
4. Modals display localised price and payment method
5. Checkout API creates payment via the selected gateway

### Gateway routing

| Country | Gateway   | Currency |
|---------|-----------|----------|
| GB      | Stripe    | GBP      |
| US      | Stripe    | USD      |
| EU      | Stripe    | EUR      |
| IN      | Razorpay  | INR      |
| Others  | Stripe    | Local    |

Razorpay only activates when `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` are both set. Without them, all traffic routes to Stripe regardless of country.

### Adding a new gateway

1. Create `lib/newgateway.ts` implementing order creation + verification
2. Add a case to `lib/payment.ts` in `createPayment()`
3. Add country mapping in `lib/geo.ts`
4. Add webhook handler at `app/api/webhooks/newgateway/route.ts`

## CRM Integration

The CRM uses a pluggable adapter pattern. Set `CRM_PROVIDER` in `.env.local`:

| Value        | Behaviour                                |
|-------------|------------------------------------------|
| `json`      | Local JSON file (default, dev/staging)   |
| `hubspot`   | HubSpot CRM API (requires `HUBSPOT_API_KEY`) |
| `salesforce` | Salesforce (stub — implement when ready) |

### Adding a new CRM

1. Implement the `CRMAdapter` interface in `lib/crm.ts`
2. Register it in the `getAdapter()` switch
3. Add env vars to `.env.example`

All adapters share the same `Lead` interface, so switching is a one-line env change. The JSON adapter is always used as a fallback if the external CRM API call fails.

## SEO Features

- Per-page `<title>` and `<meta description>` via Next.js Metadata API
- JSON-LD structured data (ProfessionalService schema) in root layout
- Dynamic `sitemap.xml` covering all static + dynamic routes
- Dynamic `robots.txt` with appropriate disallows
- Open Graph + Twitter Card meta tags
- Semantic HTML with proper heading hierarchy
- `text-wrap: balance` for headline readability
- Security headers (X-Frame-Options, CSP, etc.)

## Deployment (Vercel)

1. Push to GitHub
2. Import in Vercel
3. Add environment variables from `.env.example`
4. Set webhook endpoints:
   - Stripe: `https://yourdomain.com/api/webhooks/stripe`
   - Razorpay: `https://yourdomain.com/api/webhooks/razorpay`
5. Done — geo-detection headers are automatic on Vercel

## What's Next (Batch 3–4)

- [ ] Full Razorpay checkout test with live keys
- [ ] Real FX rate API (replace static approximations)
- [ ] HubSpot CRM live integration test
- [ ] Rewardful affiliate/referral tracking
- [ ] Blog posts as MDX with CMS
- [ ] Portal dashboard pages (file delivery, billing)
- [ ] Vercel Analytics + Speed Insights
- [ ] Email notification pipeline (new lead → team alert)
# VazgroLanding
