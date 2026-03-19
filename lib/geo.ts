/**
 * Geo-detection utility
 *
 * Determines user's country from request headers (Vercel/Cloudflare),
 * then maps to the appropriate payment gateway and currency.
 *
 * Fallback chain: Vercel header → Cloudflare header → Accept-Language → GB default
 */

export interface GeoInfo {
  country: string;        // ISO 3166-1 alpha-2 (e.g. 'GB', 'IN', 'US')
  currency: string;       // ISO 4217 (e.g. 'GBP', 'INR', 'USD')
  currencySymbol: string; // Display symbol
  gateway: 'stripe' | 'razorpay';
}

/* Countries where Razorpay is the preferred gateway */
const RAZORPAY_COUNTRIES = new Set([
  'IN',  // India
]);

/* Currency map — top markets */
const CURRENCY_MAP: Record<string, { currency: string; symbol: string }> = {
  GB: { currency: 'GBP', symbol: '£' },
  US: { currency: 'USD', symbol: '$' },
  CA: { currency: 'CAD', symbol: 'C$' },
  AU: { currency: 'AUD', symbol: 'A$' },
  IN: { currency: 'INR', symbol: '₹' },
  EU: { currency: 'EUR', symbol: '€' },
  // EU member states
  DE: { currency: 'EUR', symbol: '€' },
  FR: { currency: 'EUR', symbol: '€' },
  IT: { currency: 'EUR', symbol: '€' },
  ES: { currency: 'EUR', symbol: '€' },
  NL: { currency: 'EUR', symbol: '€' },
  BE: { currency: 'EUR', symbol: '€' },
  AT: { currency: 'EUR', symbol: '€' },
  IE: { currency: 'EUR', symbol: '€' },
  PT: { currency: 'EUR', symbol: '€' },
  FI: { currency: 'EUR', symbol: '€' },
  GR: { currency: 'EUR', symbol: '€' },
  // Others
  AE: { currency: 'AED', symbol: 'د.إ' },
  SG: { currency: 'SGD', symbol: 'S$' },
  JP: { currency: 'JPY', symbol: '¥' },
  NZ: { currency: 'NZD', symbol: 'NZ$' },
  ZA: { currency: 'ZAR', symbol: 'R' },
  SE: { currency: 'SEK', symbol: 'kr' },
  NO: { currency: 'NOK', symbol: 'kr' },
  DK: { currency: 'DKK', symbol: 'kr' },
  CH: { currency: 'CHF', symbol: 'CHF' },
};

const DEFAULT_GEO: GeoInfo = {
  country: 'GB',
  currency: 'GBP',
  currencySymbol: '£',
  gateway: 'stripe',
};

/**
 * Detect country from request headers
 */
export function detectCountry(headers: Headers): string {
  // Vercel sets this automatically on deployment
  const vercel = headers.get('x-vercel-ip-country');
  if (vercel) return vercel.toUpperCase();

  // Cloudflare
  const cf = headers.get('cf-ipcountry');
  if (cf && cf !== 'XX') return cf.toUpperCase();

  // Fallback: parse Accept-Language for best guess
  const lang = headers.get('accept-language');
  if (lang) {
    // e.g. "en-GB,en;q=0.9" → "GB"
    const match = lang.match(/[a-z]{2}-([A-Z]{2})/);
    if (match) return match[1];
  }

  return 'GB';
}

/**
 * Get full geo info from country code
 */
export function getGeoInfo(country: string): GeoInfo {
  const c = country.toUpperCase();
  const curr = CURRENCY_MAP[c] || CURRENCY_MAP['GB'];

  // Check if Razorpay is available and preferred for this country
  const razorpayAvailable = !!(process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET);
  const gateway: 'stripe' | 'razorpay' =
    razorpayAvailable && RAZORPAY_COUNTRIES.has(c) ? 'razorpay' : 'stripe';

  return {
    country: c,
    currency: curr.currency,
    currencySymbol: curr.symbol,
    gateway,
  };
}

/**
 * Get geo info from request headers (convenience wrapper)
 */
export function getGeoFromRequest(headers: Headers): GeoInfo {
  const country = detectCountry(headers);
  return getGeoInfo(country);
}

/**
 * Convert GBP price to local currency (approximate — use a real FX API in production)
 * These are rough static rates for display purposes.
 */
const GBP_RATES: Record<string, number> = {
  GBP: 1,
  USD: 1.27,
  EUR: 1.16,
  CAD: 1.72,
  AUD: 1.94,
  INR: 105.5,
  AED: 4.67,
  SGD: 1.71,
  JPY: 190.5,
  NZD: 2.12,
  ZAR: 23.8,
  SEK: 13.2,
  NOK: 13.5,
  DKK: 8.65,
  CHF: 1.12,
};

export function convertFromGBP(gbpAmount: number, targetCurrency: string): number {
  const rate = GBP_RATES[targetCurrency] || 1;
  return Math.round(gbpAmount * rate);
}
