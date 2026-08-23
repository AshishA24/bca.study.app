import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SubjectIcon } from "@/components/subject-icon";
import { subjects, topicCount } from "@/data/catalog";
import { copy } from "@/data/ui-copy";
import { tx } from "@/data/t";
import { useAppStore } from "@/store/app-store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const lang = useAppStore((s) => s.lang);
  const studied = useAppStore((s) => s.studied);

  return (
    <div>
      <PageHeader
        kicker={tx(copy.kicker, lang)}
        title={tx(copy.selectSubject, lang)}
        description={tx(copy.tagline, lang)}
      />
      <ul className="grid gap-3 md:grid-cols-2">
        {subjects.map((subject, i) => {
          const total = topicCount(subject.id);
          const done = subject.units
            .flatMap((u) => u.topics)
            .filter((t) => studied.includes(t.id)).length;
          return (
            <li key={subject.id}>
              <Link
                to="/study/$subjectId"
                params={{ subjectId: subject.id }}
                className="glass group flex min-h-[168px] flex-col rounded-[28px] p-5 no-underline transition-[box-shadow,transform] duration-200 ease-out hover:shadow-glass-hover md:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="glass-chip flex size-11 items-center justify-center rounded-[14px] text-accent">
                    <SubjectIcon id={subject.id} className="size-5" />
                  </span>
                  <span className="font-mono text-xs tabular-nums text-subtle">
                    0{i + 1}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-[1.65rem] leading-tight tracking-tight text-fg italic">
                  {tx(subject.title, lang)}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {tx(subject.blurb, lang)}
                </p>
                <div className="mt-5 flex items-center justify-between text-xs text-subtle">
                  <span>
                    {subject.units.length} {tx(copy.units, lang)} · {total}{" "}
                    {tx(copy.topics, lang)}
                    {done > 0 ? ` · ${done}/${total}` : ""}
                  </span>
                  <ArrowUpRight className="size-4 opacity-50 transition-opacity group-hover:opacity-100" />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
