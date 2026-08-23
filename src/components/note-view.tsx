import { useEffect } from "react";
import { BookmarkCheck } from "lucide-react";
import { Diagram } from "@/components/diagrams";
import { copy } from "@/data/ui-copy";
import { tx } from "@/data/t";
import type { Lang, NoteBlock, TopicNotes } from "@/data/types";
import { useAppStore } from "@/store/app-store";
import { cn } from "@/lib/utils";

export function NoteView({ notes }: { notes: TopicNotes }) {
  const lang = useAppStore((s) => s.lang);
  const markStudied = useAppStore((s) => s.markStudied);
  const studied = useAppStore((s) => s.studied.includes(notes.id));

  useEffect(() => {
    markStudied(notes.id);
  }, [notes.id, markStudied]);

  return (
    <article className="space-y-5">
      {studied ? (
        <p className="flex items-center gap-2 text-xs font-medium tracking-wide text-ok">
          <BookmarkCheck className="size-3.5" strokeWidth={1.75} />
          {tx(copy.marked, lang)}
        </p>
      ) : null}
      {notes.blocks.map((block, i) => (
        <Block key={`${notes.id}-${i}`} block={block} lang={lang} />
      ))}
    </article>
  );
}

function Block({ block, lang }: { block: NoteBlock; lang: Lang }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="pt-2 font-display text-2xl tracking-tight text-fg italic md:text-[1.7rem]">
          {tx(block.text, lang)}
        </h2>
      );
    case "p":
      return (
        <p className="max-w-[68ch] text-[0.98rem] leading-[1.7] text-fg/90">{tx(block.text, lang)}</p>
      );
    case "ul":
      return (
        <ul className="max-w-[68ch] space-y-2.5 pl-0">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-[0.95rem] leading-relaxed text-fg/90">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-strong" />
              <span>{tx(item, lang)}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="max-w-[68ch] list-decimal space-y-2.5 pl-5 text-[0.95rem] leading-relaxed text-fg/90">
          {block.items.map((item, i) => (
            <li key={i}>{tx(item, lang)}</li>
          ))}
        </ol>
      );
    case "code":
      return (
        <figure className="overflow-hidden rounded-[20px]">
          <div className="glass-chip flex items-center justify-between px-4 py-2 text-[0.7rem] uppercase tracking-[0.14em] text-muted">
            <span>{block.language}</span>
          </div>
          <pre className="overflow-x-auto bg-bg-elevated/80 px-4 py-4 text-[0.82rem] leading-relaxed text-accent">
            <code className="font-mono">{block.code}</code>
          </pre>
          {block.caption ? (
            <figcaption className="px-1 pt-2 text-xs text-muted">
              {tx(block.caption, lang)}
            </figcaption>
          ) : null}
        </figure>
      );
    case "diagram":
      return (
        <figure className="glass overflow-hidden rounded-[24px] p-3 md:p-4">
          <div className="rounded-[16px] bg-bg/40 px-2 py-3">
            <Diagram id={block.id} />
          </div>
          <figcaption className="px-2 pt-3 text-xs tracking-wide text-muted">
            {tx(block.caption, lang)}
          </figcaption>
        </figure>
      );
    case "callout":
      return (
        <aside
          className={cn(
            "glass rounded-[22px] px-4 py-4 md:px-5",
            block.tone === "exam" ? "shadow-glass" : "",
          )}
        >
          <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-accent-strong">
            {tx(block.title, lang)}
          </p>
          <p className="max-w-[68ch] text-sm leading-relaxed text-fg/90">{tx(block.text, lang)}</p>
        </aside>
      );
    case "table":
      return (
        <div className="glass overflow-x-auto rounded-[20px]">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead>
              <tr className="border-b border-line">
                {block.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 font-medium text-muted">
                    {tx(h, lang)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="border-b border-line last:border-0">
                  {row.map((cell, c) => (
                    <td key={c} className="px-4 py-3 text-fg/90">
                      {tx(cell, lang)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}
