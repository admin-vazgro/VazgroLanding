import Link from 'next/link';
import { breadcrumbJsonLd, type BreadcrumbItem } from '@/lib/seo';

interface Props {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = '' }: Props) {
  const jsonLd = breadcrumbJsonLd(items);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className={`flex items-center gap-1.5 text-[11px] sm:text-[12px] ${className}`}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <span key={item.href} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-rule">/</span>}
              {isLast ? (
                <span className="text-muted font-medium" aria-current="page">{item.name}</span>
              ) : (
                <Link href={item.href} className="text-muted hover:text-ink no-underline transition-colors">
                  {item.name}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}
