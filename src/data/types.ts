export type Lang = "en" | "hi" | "hinglish";

export type Localized = Record<Lang, string>;

export type NoteBlock =
  | { type: "h2"; text: Localized }
  | { type: "p"; text: Localized }
  | { type: "ul"; items: Localized[] }
  | { type: "ol"; items: Localized[] }
  | { type: "code"; language: string; code: string; caption?: Localized }
  | { type: "diagram"; id: string; caption: Localized }
  | {
      type: "callout";
      tone: "exam" | "note";
      title: Localized;
      text: Localized;
    }
  | { type: "table"; headers: Localized[]; rows: Localized[][] };

export type Topic = {
  id: string;
  title: Localized;
};

export type Unit = {
  id: string;
  index: number;
  title: Localized;
  summary: Localized;
  topics: Topic[];
};

export type Subject = {
  id: string;
  short: string;
  title: Localized;
  blurb: Localized;
  units: Unit[];
};

export type TopicNotes = {
  id: string;
  blocks: NoteBlock[];
};

export type QuizQuestion = {
  id: string;
  topicId: string;
  question: Localized;
  options: [Localized, Localized, Localized, Localized];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: Localized;
};
