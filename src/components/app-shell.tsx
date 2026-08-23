import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, PenLine } from "lucide-react";
import { Logo } from "@/components/logo";
import { LangSwitch } from "@/components/lang-switch";
import { copy } from "@/data/ui-copy";
import { tx } from "@/data/t";
import { useAppStore } from "@/store/app-store";
import { cn } from "@/lib/utils";

export function AppShell({ children }: { children: ReactNode }) {
  const lang = useAppStore((s) => s.lang);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onPractice = pathname.startsWith("/practice");

  return (
    <div lang={lang === "hi" ? "hi" : "en"} className="relative min-h-dvh">
      <div className="liquid-bg" aria-hidden="true" />
      <header className="sticky top-0 z-40 px-3 pt-3 md:px-6 md:pt-4">
        <div className="glass mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-3 rounded-xl px-3 py-3 md:grid-cols-[1fr_auto_1fr] md:px-5">
          <Logo className="px-1 py-1" />
          <div className="flex items-center justify-end md:order-3">
            <LangSwitch />
          </div>
          <nav
            aria-label="Mode"
            className="glass-chip col-span-2 flex h-11 w-full rounded-full p-1 md:order-2 md:col-span-1 md:w-auto md:min-w-[280px]"
          >
            <TabLink
              to="/"
              active={!onPractice}
              icon={<BookOpen className="size-4" strokeWidth={1.75} />}
            >
              {tx(copy.study, lang)}
            </TabLink>
            <TabLink
              to="/practice"
              active={onPractice}
              icon={<PenLine className="size-4" strokeWidth={1.75} />}
            >
              {tx(copy.practice, lang)}
            </TabLink>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-3 pb-24 pt-6 md:px-6 md:pt-8">
        {children}
      </main>
    </div>
  );
}

function TabLink({
  to,
  active,
  icon,
  children,
}: {
  to: "/" | "/practice";
  active: boolean;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "flex h-9 flex-1 items-center justify-center gap-2 rounded-full text-sm font-medium transition-[background-color,color,box-shadow] duration-150",
        active
          ? "bg-accent text-bg shadow-[0_1px_2px_rgb(0_0_0_/_0.25)]"
          : "text-muted hover:text-fg",
      )}
    >
      {icon}
      {children}
    </Link>
  );
}
