import { useMemo, useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { copy } from "@/data/ui-copy";
import { tx } from "@/data/t";
import type { QuizQuestion } from "@/data/types";
import { useAppStore } from "@/store/app-store";
import { cn } from "@/lib/utils";

export function QuizView({
  questions,
  onExit,
}: {
  questions: QuizQuestion[];
  onExit: () => void;
}) {
  const lang = useAppStore((s) => s.lang);
  const shuffled = useMemo(() => shuffle(questions).slice(0, 20), [questions]);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = shuffled[index];
  const total = shuffled.length;

  if (!q || total === 0) {
    return (
      <p className="text-muted">{tx(copy.noQuestions, lang)}</p>
    );
  }

  if (done) {
    return (
      <div className="glass mx-auto max-w-lg rounded-[28px] px-6 py-10 text-center">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent-strong">
          {tx(copy.score, lang)}
        </p>
        <p className="mt-4 font-display text-6xl italic tracking-tight tabular-nums">
          {score}
          <span className="text-3xl text-muted">/{total}</span>
        </p>
        <p className="mt-3 text-sm text-muted">{tx(copy.resultsLead, lang)}</p>
        <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <Button
            onClick={() => {
              setIndex(0);
              setPicked(null);
              setChecked(false);
              setScore(0);
              setDone(false);
            }}
          >
            {tx(copy.retry, lang)}
          </Button>
          <Button variant="glass" onClick={onExit}>
            {tx(copy.back, lang)}
          </Button>
        </div>
      </div>
    );
  }

  const isCorrect = picked === q.correctIndex;

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-5 flex items-end justify-between gap-3">
        <p className="text-sm text-muted">
          {tx(copy.question, lang)}{" "}
          <span className="tabular-nums text-fg">
            {index + 1} {tx(copy.of, lang)} {total}
          </span>
        </p>
        <p className="text-sm tabular-nums text-muted">
          {tx(copy.score, lang)} {score}
        </p>
      </div>
      <div className="mb-5 h-1 overflow-hidden rounded-full bg-glass">
        <div
          className="h-full bg-accent-strong transition-[width] duration-200"
          style={{ width: `${((index + (checked ? 1 : 0)) / total) * 100}%` }}
        />
      </div>
      <div className="glass rounded-[28px] p-5 md:p-7">
        <h2 className="font-display text-2xl tracking-tight text-fg italic md:text-[1.85rem]">
          {tx(q.question, lang)}
        </h2>
        <ul className="mt-6 space-y-2.5">
          {q.options.map((opt, i) => {
            const selected = picked === i;
            const reveal = checked && (i === q.correctIndex || selected);
            return (
              <li key={i}>
                <button
                  type="button"
                  disabled={checked}
                  onClick={() => setPicked(i)}
                  className={cn(
                    "flex min-h-12 w-full items-center gap-3 rounded-[16px] px-4 py-3 text-left text-sm transition-[background-color,box-shadow,color] duration-150",
                    "glass-chip",
                    selected && !checked && "bg-glass-strong text-fg",
                    reveal && i === q.correctIndex && "bg-ok/15 text-fg",
                    reveal && selected && i !== q.correctIndex && "bg-bad/15 text-fg",
                  )}
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full text-[0.7rem] font-medium text-muted">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="flex-1">{tx(opt, lang)}</span>
                  {checked && i === q.correctIndex ? (
                    <Check className="size-4 text-ok" strokeWidth={2} />
                  ) : null}
                  {checked && selected && i !== q.correctIndex ? (
                    <X className="size-4 text-bad" strokeWidth={2} />
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
        {checked ? (
          <div className="mt-5 rounded-[16px] bg-bg/40 px-4 py-3">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-accent-strong">
              {isCorrect ? tx(copy.correct, lang) : tx(copy.incorrect, lang)}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-fg/90">
              {tx(q.explanation, lang)}
            </p>
          </div>
        ) : null}
        <div className="mt-6 flex flex-wrap gap-2">
          {!checked ? (
            <Button disabled={picked === null} onClick={() => {
              if (picked === q.correctIndex) setScore((s) => s + 1);
              setChecked(true);
            }}>
              {tx(copy.check, lang)}
            </Button>
          ) : index + 1 < total ? (
            <Button
              onClick={() => {
                setIndex((i) => i + 1);
                setPicked(null);
                setChecked(false);
              }}
            >
              {tx(copy.nextQuestion, lang)}
            </Button>
          ) : (
            <Button onClick={() => setDone(true)}>{tx(copy.seeResults, lang)}</Button>
          )}
        </div>
      </div>
    </div>
  );
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j] as T, a[i] as T];
  }
  return a;
}
