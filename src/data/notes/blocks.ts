import { L } from "../t";
import type { Localized, NoteBlock, QuizQuestion, TopicNotes } from "../types";

export function P(en: string, hi: string, hinglish: string): NoteBlock {
  return { type: "p", text: L(en, hi, hinglish) };
}

export function H(en: string, hi: string, hinglish: string): NoteBlock {
  return { type: "h2", text: L(en, hi, hinglish) };
}

export function UL(items: Array<[string, string, string]>): NoteBlock {
  return { type: "ul", items: items.map(([en, hi, hinglish]) => L(en, hi, hinglish)) };
}

export function OL(items: Array<[string, string, string]>): NoteBlock {
  return { type: "ol", items: items.map(([en, hi, hinglish]) => L(en, hi, hinglish)) };
}

export function EXAM(en: string, hi: string, hinglish: string): NoteBlock {
  return {
    type: "callout",
    tone: "exam",
    title: L("Exam focus", "परीक्षा फोकस", "Exam focus"),
    text: L(en, hi, hinglish),
  };
}

export function NOTE(en: string, hi: string, hinglish: string): NoteBlock {
  return {
    type: "callout",
    tone: "note",
    title: L("Note", "नोट", "Note"),
    text: L(en, hi, hinglish),
  };
}

export function D(id: string, en: string, hi: string, hinglish: string): NoteBlock {
  return { type: "diagram", id, caption: L(en, hi, hinglish) };
}

export function C(
  language: string,
  code: string,
  caption?: [string, string, string],
): NoteBlock {
  return {
    type: "code",
    language,
    code,
    caption: caption ? L(...caption) : undefined,
  };
}

export function TBL(
  headers: Array<[string, string, string]>,
  rows: Array<Array<[string, string, string]>>,
): NoteBlock {
  return {
    type: "table",
    headers: headers.map(([en, hi, hinglish]) => L(en, hi, hinglish)),
    rows: rows.map((row) => row.map(([en, hi, hinglish]) => L(en, hi, hinglish))),
  };
}

export function topic(id: string, blocks: NoteBlock[]): TopicNotes {
  return { id, blocks };
}

export function Q(
  id: string,
  topicId: string,
  question: [string, string, string],
  options: [[string, string, string], [string, string, string], [string, string, string], [string, string, string]],
  correctIndex: 0 | 1 | 2 | 3,
  explanation: [string, string, string],
): QuizQuestion {
  return {
    id,
    topicId,
    question: L(...question),
    options: options.map(([en, hi, hinglish]) => L(en, hi, hinglish)) as [
      Localized,
      Localized,
      Localized,
      Localized,
    ],
    correctIndex,
    explanation: L(...explanation),
  };
}
