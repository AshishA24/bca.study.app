import { createFileRoute, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/page-header";
import { QuizView } from "@/components/quiz-view";
import { Button } from "@/components/ui/button";
import { getSubject } from "@/data/catalog";
import { questionsFor } from "@/data/notes";
import { copy } from "@/data/ui-copy";
import { tx } from "@/data/t";
import { useAppStore } from "@/store/app-store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/practice/$subjectId")({
  component: PracticeSubject,
});

function PracticeSubject() {
  const { subjectId } = Route.useParams();
  const lang = useAppStore((s) => s.lang);
  const subject = getSubject(subjectId);
  if (!subject) throw notFound();
  const units = subject.units;

  const [unitIds, setUnitIds] = useState<string[]>(() => subject.units.map((u) => u.id));
  const [topicIds, setTopicIds] = useState<string[]>(() =>
    subject.units.flatMap((u) => u.topics.map((t) => t.id)),
  );
  const [started, setStarted] = useState(false);

  const questions = useMemo(() => questionsFor(topicIds), [topicIds]);

  function toggleUnit(id: string) {
    const unit = units.find((u) => u.id === id);
    if (!unit) return;
    const ids = unit.topics.map((t) => t.id);
    const on = unitIds.includes(id);
    setUnitIds((prev) => (on ? prev.filter((x) => x !== id) : [...prev, id]));
    setTopicIds((prev) => {
      if (on) return prev.filter((t) => !ids.includes(t));
      const next = new Set(prev);
      ids.forEach((t) => next.add(t));
      return [...next];
    });
  }

  function toggleTopic(id: string, unitId: string) {
    const on = topicIds.includes(id);
    const nextTopics = on ? topicIds.filter((t) => t !== id) : [...topicIds, id];
    setTopicIds(nextTopics);
    const unit = units.find((u) => u.id === unitId);
    if (!unit) return;
    const allOn = unit.topics.every((t) => nextTopics.includes(t.id));
    setUnitIds((prev) => {
      if (allOn) return prev.includes(unitId) ? prev : [...prev, unitId];
      return prev.filter((x) => x !== unitId);
    });
  }

  if (started) {
    return (
      <div>
        <PageHeader
          crumbs={[
            { label: tx(copy.practice, lang), to: "/practice" },
            { label: tx(subject.title, lang) },
          ]}
          title={tx(copy.practice, lang)}
        />
        <QuizView questions={questions} onExit={() => setStarted(false)} />
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        crumbs={[
          { label: tx(copy.practice, lang), to: "/practice" },
          { label: tx(subject.title, lang) },
        ]}
        kicker={subject.short}
        title={tx(subject.title, lang)}
        description={tx(copy.pickUnits, lang)}
      />
      <div className="space-y-3">
        {subject.units.map((unit) => {
          const unitOn = unitIds.includes(unit.id);
          return (
            <section key={unit.id} className="glass rounded-[24px] p-4 md:p-5">
              <button
                type="button"
                onClick={() => toggleUnit(unit.id)}
                className="flex min-h-11 w-full items-center justify-between gap-3 text-left"
              >
                <span className="font-display text-xl italic tracking-tight">
                  {tx(copy.unitLabel, lang)} {unit.index} — {tx(unit.title, lang)}
                </span>
                <span
                  className={cn(
                    "grid size-5 place-items-center rounded-[6px] glass-chip",
                    unitOn && "bg-accent",
                  )}
                >
                  {unitOn ? <span className="size-2 rounded-full bg-bg" /> : null}
                </span>
              </button>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {unit.topics.map((topic) => {
                  const on = topicIds.includes(topic.id);
                  return (
                    <li key={topic.id}>
                      <button
                        type="button"
                        onClick={() => toggleTopic(topic.id, unit.id)}
                        className={cn(
                          "flex min-h-11 w-full items-center rounded-[14px] px-3 text-left text-sm transition-colors duration-150",
                          on ? "bg-glass-strong text-fg" : "text-muted hover:text-fg",
                        )}
                      >
                        {tx(topic.title, lang)}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
      <div className="sticky bottom-20 mt-6 flex justify-end">
        <Button
          size="lg"
          disabled={topicIds.length === 0 || questions.length === 0}
          onClick={() => setStarted(true)}
        >
          {tx(copy.startPractice, lang)}
          <span className="tabular-nums opacity-70">({questions.length})</span>
        </Button>
      </div>
    </div>
  );
}
