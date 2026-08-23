import { createFileRoute, Link, Outlet, notFound, useChildMatches } from "@tanstack/react-router";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PageHeader, SurfaceCard } from "@/components/page-header";
import { getSubject } from "@/data/catalog";
import { copy } from "@/data/ui-copy";
import { tx } from "@/data/t";
import { useAppStore } from "@/store/app-store";

export const Route = createFileRoute("/study/$subjectId")({
  component: SubjectPage,
});

function SubjectPage() {
  const childMatches = useChildMatches();
  if (childMatches.length > 0) return <Outlet />;
  return <SubjectIndex />;
}

function SubjectIndex() {
  const { subjectId } = Route.useParams();
  const lang = useAppStore((s) => s.lang);
  const setLastSubject = useAppStore((s) => s.setLastSubject);
  const studied = useAppStore((s) => s.studied);
  const subject = getSubject(subjectId);
  if (!subject) throw notFound();

  useEffect(() => {
    setLastSubject(subjectId);
  }, [subjectId, setLastSubject]);

  return (
    <div>
      <PageHeader
        crumbs={[
          { label: tx(copy.subjects, lang), to: "/" },
          { label: tx(subject.title, lang) },
        ]}
        kicker={subject.short}
        title={tx(subject.title, lang)}
        description={tx(subject.blurb, lang)}
        actions={
          <Button asChild variant="glass">
            <Link to="/practice/$subjectId" params={{ subjectId }}>
              {tx(copy.practiceThis, lang)}
            </Link>
          </Button>
        }
      />
      <ul className="grid gap-3">
        {subject.units.map((unit) => {
          const done = unit.topics.filter((t) => studied.includes(t.id)).length;
          return (
            <li key={unit.id}>
              <Link
                to="/study/$subjectId/$unitId"
                params={{ subjectId, unitId: unit.id }}
                className="block no-underline"
              >
                <SurfaceCard className="flex flex-col gap-3 transition-[box-shadow] duration-200 hover:shadow-glass-hover md:flex-row md:items-center md:gap-6">
                  <span className="font-mono text-xs tabular-nums text-subtle">
                    {tx(copy.unitLabel, lang)} {String(unit.index).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="font-display text-2xl tracking-tight text-fg italic">
                      {tx(unit.title, lang)}
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {tx(unit.summary, lang)}
                    </p>
                  </div>
                  <span className="text-xs text-subtle">
                    {done}/{unit.topics.length} {tx(copy.topics, lang)}
                  </span>
                </SurfaceCard>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
