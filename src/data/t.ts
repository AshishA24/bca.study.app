import type { Lang, Localized } from "./types";

export function L(en: string, hi: string, hinglish: string): Localized {
  return { en, hi, hinglish };
}

export function tx(text: Localized, lang: Lang): string {
  return text[lang] ?? text.en;
}
