'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SuccessContent() {
  const params = useSearchParams();
  const gateway = params.get('gateway') || 'stripe';
  const isRazorpay = gateway === 'razorpay';

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 sm:px-6 py-16 bg-cream">
      <div className="text-center w-full max-w-[500px]">
        <div className="text-[52px] mb-5">🎉</div>
        <h1 className="type-h2 text-[28px] sm:text-[34px] mb-3 text-ink">
          Payment confirmed!
        </h1>
        <p className="type-body text-muted mb-8 max-w-[420px] mx-auto">
          Thank you for choosing Vazgro. You will receive a confirmation email shortly, and your dedicated PM will be in touch within 4 business hours to kick things off.
        </p>

        {/* Gateway-specific info */}
        <div className="bg-white border border-rule rounded-xl p-4 sm:p-5 mb-5 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full bg-sage-lt text-sage border border-[rgba(26,107,84,0.15)]">
              {isRazorpay ? 'Razorpay' : 'Stripe'}
            </span>
            <span className="text-[12px] text-muted">Payment processed securely</span>
          </div>
          <p className="text-[13px] text-muted leading-relaxed">
            {isRazorpay
              ? 'Your payment via Razorpay has been confirmed. A receipt has been sent to your email. For any payment queries, reference your Razorpay order ID from your email confirmation.'
              : 'Your Stripe payment has been processed. A receipt has been sent to your email automatically.'}
          </p>
        </div>

        <div className="bg-white border border-rule rounded-xl p-5 sm:p-7 mb-7 text-left">
          <div className="font-bold text-[14px] sm:text-[15px] mb-4 text-ink">What happens next</div>
          <div className="flex flex-col gap-3">
            {[
              'Confirmation email sent to your inbox',
              'PM assigned — you will hear from them within 4 hours',
              'Project kick-off call scheduled within 24 hours',
              'Work begins — all progress tracked in your client portal',
            ].map((s, i) => (
              <div key={s} className="flex items-start gap-3 text-[13px] sm:text-[14px] text-ink-2">
                <span className="w-5 h-5 rounded-full bg-sage text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {s}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-ink text-cream font-bold rounded-lg text-[14px] hover:bg-ink-2 transition-colors no-underline text-center"
          >
            Back to Home →
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-rule text-muted font-semibold rounded-lg text-[14px] hover:border-ink hover:text-ink transition-colors no-underline text-center"
          >
            Contact Us
          </Link>
        </div>

        <p className="text-[12px] text-muted mt-6">
          Questions? Email{' '}
          <a href="mailto:hello@vazgro.com" className="text-blue no-underline hover:underline">
            hello@vazgro.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
        <div className="text-[52px]">🎉</div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
