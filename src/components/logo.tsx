import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn(
        "group flex min-w-0 flex-col justify-center gap-0.5 no-underline sm:flex-row sm:items-baseline sm:gap-2 md:gap-2.5",
        className,
      )}
      aria-label="Liquid Study by Ashish Patel"
    >
      <span className="font-display text-[1.45rem] leading-none tracking-[-0.03em] text-fg italic transition-colors group-hover:text-white md:text-[1.85rem]">
        Liquid Study
      </span>
      <span className="whitespace-nowrap text-[0.65rem] font-medium tracking-[0.07em] text-muted transition-colors group-hover:text-fg/85 sm:text-[0.72rem] md:text-[0.78rem]">
        by Ashish Patel
      </span>
    </Link>
  );
}
