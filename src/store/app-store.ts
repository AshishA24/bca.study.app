import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Lang } from "@/data/types";

type AppState = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  studied: string[];
  markStudied: (topicId: string) => void;
  lastSubjectId: string | null;
  setLastSubject: (id: string | null) => void;
};

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      lang: "en",
      setLang: (lang) => set({ lang }),
      studied: [],
      markStudied: (topicId) => {
        const { studied } = get();
        if (studied.includes(topicId)) return;
        set({ studied: [...studied, topicId] });
      },
      lastSubjectId: null,
      setLastSubject: (id) => set({ lastSubjectId: id }),
    }),
    { name: "liquid-study-v1" },
  ),
);
