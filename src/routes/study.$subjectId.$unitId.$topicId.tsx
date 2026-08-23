import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { NoteView } from "@/components/note-view";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { getNotes } from "@/data/notes";
import { getSubject, getTopic, getUnit } from "@/data/catalog";
import { copy } from "@/data/ui-copy";
import { tx } from "@/data/t";
import { useAppStore } from "@/store/app-store";

export const Route = createFileRoute("/study/$subjectId/$unitId/$topicId")({
  component: TopicPage,
});

function TopicPage() {
  const { subjectId, unitId, topicId } = Route.useParams();
  const lang = useAppStore((s) => s.lang);
  const subject = getSubject(subjectId);
  const unit = getUnit(subjectId, unitId);
  const topic = getTopic(subjectId, unitId, topicId);
  if (!subject || !unit || !topic) throw notFound();

  const notes = getNotes(topicId);
  const flat = subject.units.flatMap((u) =>
    u.topics.map((t) => ({ unitId: u.id, topic: t })),
  );
  const idx = flat.findIndex((x) => x.topic.id === topicId);
  const prev = idx > 0 ? flat[idx - 1] : undefined;
  const next = idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : undefined;

  return (
    <div>
      <PageHeader
        crumbs={[
          { label: tx(copy.subjects, lang), to: "/" },
          { label: tx(subject.title, lang), to: `/study/${subjectId}` },
          { label: tx(unit.title, lang), to: `/study/${subjectId}/${unitId}` },
          { label: tx(topic.title, lang) },
        ]}
        kicker={`${tx(copy.unitLabel, lang)} ${unit.index}`}
        title={tx(topic.title, lang)}
      />
      <div className="glass rounded-[28px] p-5 md:p-8">
        {notes ? (
          <NoteView notes={notes} />
        ) : (
          <p className="text-muted">{tx(copy.note, lang)}</p>
        )}
      </div>
      <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-between">
        {prev ? (
          <Button asChild variant="glass">
            <Link
              to="/study/$subjectId/$unitId/$topicId"
              params={{ subjectId, unitId: prev.unitId, topicId: prev.topic.id }}
            >
              {tx(copy.prevTopic, lang)}
            </Link>
          </Button>
        ) : (
          <span />
        )}
        {next ? (
          <Button asChild>
            <Link
              to="/study/$subjectId/$unitId/$topicId"
              params={{ subjectId, unitId: next.unitId, topicId: next.topic.id }}
            >
              {tx(copy.nextTopic, lang)}
            </Link>
          </Button>
        ) : null}
      </div>
    </div>
  );
}
