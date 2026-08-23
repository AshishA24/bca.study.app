import type { QuizQuestion, TopicNotes } from "../types";
import { dmNotes, dmQuestions } from "./dm";
import { javaNotes, javaQuestions } from "./java";
import { rdmsNotes } from "./rdms";
import { seNotes, seQuestions } from "./se";
import { seMoreNotes } from "./se-more";
import { cyberNotes, cyberQuestions } from "./cyber-all";
import { rdmsMoreNotes, rdmsQuestions } from "./rdms-more";

export const notesById: Record<string, TopicNotes> = {
  ...seMoreNotes,
  ...seNotes,
  ...javaNotes,
  ...rdmsMoreNotes,
  ...rdmsNotes,
  ...cyberNotes,
  ...dmNotes,
};

export const allQuestions: QuizQuestion[] = [
  ...seQuestions,
  ...javaQuestions,
  ...rdmsQuestions,
  ...cyberQuestions,
  ...dmQuestions,
];

export function getNotes(topicId: string) {
  return notesById[topicId];
}

export function questionsFor(topicIds: string[]) {
  const set = new Set(topicIds);
  return allQuestions.filter((q) => set.has(q.topicId));
}
