import type { ReactNode } from "react";
import { useRouter } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; to?: string };

export function PageHeader({
  kicker,
  title,
  description,
  crumbs,
  actions,
}: {
  kicker?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  actions?: ReactNode;
}) {
  return (
    <header className="mb-8 space-y-4">
      {crumbs && crumbs.length > 0 ? (
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-xs text-muted">
          {crumbs.map((c, i) => (
            <span key={`${c.label}-${i}`} className="flex items-center gap-1">
              {i > 0 ? <ChevronRight className="size-3.5 opacity-60" /> : null}
              {c.to ? <CrumbLink to={c.to}>{c.label}</CrumbLink> : (
                <span className="text-fg/80">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
      ) : null}
      {kicker ? (
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-accent-strong">
          {kicker}
        </p>
      ) : null}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="min-w-0">
          <h1 className="font-display text-[2.05rem] leading-[1.1] tracking-[-0.03em] text-fg italic md:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-muted md:text-[0.95rem]">
              {description}
            </p>
          ) : null}
        </div>
        {actions ? <div className="flex shrink-0 flex-wrap gap-2">{actions}</div> : null}
      </div>
    </header>
  );
}

function CrumbLink({ to, children }: { to: string; children: ReactNode }) {
  const router = useRouter();
  return (
    <a
      href={to}
      className="hover:text-fg"
      onClick={(e) => {
        e.preventDefault();
        router.history.push(to);
      }}
    >
      {children}
    </a>
  );
}

export function SurfaceCard({
  children,
  className,
  as: Comp = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}) {
  return <Comp className={cn("glass rounded-[28px] p-4 md:p-5", className)}>{children}</Comp>;
}
