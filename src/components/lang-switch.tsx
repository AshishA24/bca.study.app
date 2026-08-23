import { langLabels } from "@/data/ui-copy";
import type { Lang } from "@/data/types";
import { useAppStore } from "@/store/app-store";
import { cn } from "@/lib/utils";

const langs: Lang[] = ["en", "hi", "hinglish"];

export function LangSwitch() {
  const lang = useAppStore((s) => s.lang);
  const setLang = useAppStore((s) => s.setLang);

  return (
    <div
      role="radiogroup"
      aria-label="Language"
      className="glass-chip flex h-11 items-center rounded-full p-1"
    >
      {langs.map((id) => (
        <button
          key={id}
          type="button"
          role="radio"
          aria-checked={lang === id}
          onClick={() => setLang(id)}
          className={cn(
            "h-9 min-w-11 rounded-full px-2.5 text-[0.72rem] font-medium tracking-wide transition-[background-color,color,box-shadow] duration-150 md:px-3 md:text-[0.78rem]",
            lang === id
              ? "bg-accent text-bg shadow-[0_1px_2px_rgb(0_0_0_/_0.25)]"
              : "text-muted hover:text-fg",
          )}
        >
          {langLabels[id]}
        </button>
      ))}
    </div>
  );
}
