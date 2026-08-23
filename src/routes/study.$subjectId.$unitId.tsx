import { createFileRoute, Link, Outlet, notFound, useChildMatches } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { getSubject, getUnit } from "@/data/catalog";
import { copy } from "@/data/ui-copy";
import { tx } from "@/data/t";
import { useAppStore } from "@/store/app-store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/study/$subjectId/$unitId")({
  component: UnitPage,
});

function UnitPage() {
  const childMatches = useChildMatches();
  if (childMatches.length > 0) return <Outlet />;
  return <UnitIndex />;
}

function UnitIndex() {
  const { subjectId, unitId } = Route.useParams();
  const lang = useAppStore((s) => s.lang);
  const studied = useAppStore((s) => s.studied);
  const subject = getSubject(subjectId);
  const unit = getUnit(subjectId, unitId);
  if (!subject || !unit) throw notFound();

  return (
    <div>
      <PageHeader
        crumbs={[
          { label: tx(copy.subjects, lang), to: "/" },
          { label: tx(subject.title, lang), to: `/study/${subjectId}` },
          { label: tx(unit.title, lang) },
        ]}
        kicker={`${tx(copy.unitLabel, lang)} ${unit.index}`}
        title={tx(unit.title, lang)}
        description={tx(unit.summary, lang)}
      />
      <ol className="glass divide-y divide-line overflow-hidden rounded-[28px]">
        {unit.topics.map((topic, i) => {
          const done = studied.includes(topic.id);
          return (
            <li key={topic.id}>
              <Link
                to="/study/$subjectId/$unitId/$topicId"
                params={{ subjectId, unitId, topicId: topic.id }}
                className="flex min-h-14 items-center gap-4 px-4 py-3.5 no-underline transition-colors duration-150 hover:bg-glass md:px-5"
              >
                <span className="w-8 font-mono text-xs tabular-nums text-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1 text-sm text-fg md:text-[0.95rem]">
                  {tx(topic.title, lang)}
                </span>
                <span
                  className={cn(
                    "hidden size-1.5 rounded-full md:block",
                    done ? "bg-ok" : "bg-line-strong",
                  )}
                />
                <ChevronRight className="size-4 text-subtle" />
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
