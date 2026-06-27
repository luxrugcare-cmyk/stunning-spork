import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface RelatedLink {
  label: string;
  href: string;
  description: string;
}

export default function RelatedLinks({
  heading,
  items,
}: {
  heading?: string;
  items: RelatedLink[];
}) {
  return (
    <section className="bg-gradient-to-b from-background via-brand-emerald/[0.02] to-background py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-brand-emerald sm:text-3xl">
          {heading ?? "Related Services & Resources"}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Explore more from JHB Curtain Cleaning — services, sectors, and local-area guides that pair with this topic.
        </p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex h-full flex-col rounded-xl border border-brand-bronze/20 bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-emerald/40 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bronze focus-visible:ring-offset-2"
            >
              <h3 className="font-heading text-base font-bold text-brand-emerald group-hover:text-brand-bronze">
                {item.label}
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{item.description}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-emerald">
                Read more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
