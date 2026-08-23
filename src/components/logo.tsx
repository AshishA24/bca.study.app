import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn(
        "group flex min-w-0 items-baseline gap-2 no-underline",
        className,
      )}
      aria-label="Liquid Study by Ashish Patel"
    >
      <span className="font-display text-[1.55rem] leading-none tracking-[-0.03em] text-fg italic md:text-[1.85rem]">
        Liquid Study
      </span>
      <span className="truncate text-[0.68rem] font-medium tracking-[0.06em] text-muted md:text-[0.78rem]">
        by Ashish Patel
      </span>
    </Link>
  );
}
