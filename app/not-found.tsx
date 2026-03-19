import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-5 py-16 bg-cream">
      <div className="text-center max-w-[440px]">
        <div className="serif-italic text-[80px] sm:text-[120px] text-rule leading-none mb-4">404</div>
        <h1 className="type-h3 text-[24px] sm:text-[32px] mb-3">
          Page not <span className="serif-italic">found.</span>
        </h1>
        <p className="text-[14px] sm:text-[15px] text-muted leading-relaxed mb-7">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn btn-dark btn-md rounded-full justify-center">
            Back to Home →
          </Link>
          <Link href="/contact" className="btn btn-outline btn-md rounded-full justify-center">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
