import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground sm:text-sm">
        <li>
          <Link
            href="/"
            className="inline-flex items-center gap-1 hover:text-brand-emerald"
            aria-label="Home"
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={`${item.label}-${idx}`} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-brand-bronze/60" aria-hidden="true" />
            {item.href ? (
              <Link href={item.href} className="hover:text-brand-emerald">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-brand-emerald">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
