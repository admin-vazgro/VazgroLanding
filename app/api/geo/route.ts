import { NextRequest, NextResponse } from 'next/server';
import { getGeoFromRequest } from '@/lib/geo';

/**
 * GET /api/geo
 * Returns the user's detected country, currency, and preferred payment gateway.
 * Called client-side before showing payment options.
 */
export async function GET(req: NextRequest) {
  const geo = getGeoFromRequest(req.headers);
  return NextResponse.json(geo);
}
