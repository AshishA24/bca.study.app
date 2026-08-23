import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { SubjectIcon } from "@/components/subject-icon";
import { subjects, topicCount } from "@/data/catalog";
import { copy } from "@/data/ui-copy";
import { tx } from "@/data/t";
import { useAppStore } from "@/store/app-store";

export const Route = createFileRoute("/practice/")({ component: PracticeHome });

function PracticeHome() {
  const lang = useAppStore((s) => s.lang);

  return (
    <div>
      <PageHeader
        kicker={tx(copy.practice, lang)}
        title={tx(copy.selectSubject, lang)}
        description={tx(copy.pickUnits, lang)}
      />
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject) => (
          <li key={subject.id}>
            <Link
              to="/practice/$subjectId"
              params={{ subjectId: subject.id }}
              className="glass flex min-h-[140px] flex-col rounded-[24px] p-5 no-underline transition-[box-shadow] duration-200 hover:shadow-glass-hover"
            >
              <span className="text-accent">
                <SubjectIcon id={subject.id} className="size-5" />
              </span>
              <h2 className="mt-4 font-display text-xl italic tracking-tight">
                {tx(subject.title, lang)}
              </h2>
              <p className="mt-auto pt-4 text-xs text-subtle">
                {topicCount(subject.id)} {tx(copy.topics, lang)}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
