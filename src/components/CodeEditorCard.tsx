import { AnimatePresence, motion } from "framer-motion";
import { Check, Clipboard, Code2, Image } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

type Language = "ts" | "js";

type CodeEditorCardProps = {
  view: "photo" | "code";
  onToggleView: () => void;
};

const codeSamples: Record<Language, string[]> = {
  ts: [
    `interface Profile {
  name: string;
  role: string;
  skills: string[];
}

const user: Profile = {
  name: "Ilyosxoja",
  role: "Frontend Developer",
  skills: ["React", "TypeScript", "Tailwind CSS"],
};`,
    `function fetchUser<T>(url: string): Promise<T> {
  return fetch(url).then((res) => res.json());
}

const profile = await fetchUser<Profile>("/api/profile");`,
    `function useThemeMode() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  return {
    mode,
    setMode,
  };
}`,
    `type Project = {
  title: string;
  url: string;
};

const projects: Project[] = [
  { title: "AdBlogger", url: "https://adblogger.uz" },
  { title: "Dugoba Resort", url: "https://dugoba.uz" },
];`,
  ],
  js: [
    `const profile = {
  name: "Ilyosxoja",
  role: "Frontend Developer",
  skills: ["React", "JavaScript", "Tailwind CSS"],
};

console.log(profile);`,
    `async function loadUser(url) {
  const res = await fetch(url);
  return res.json();
}

const user = await loadUser("/api/user");`,
    `const projects = [
  { title: "AdBlogger", url: "https://adblogger.uz" },
  { title: "Dugoba Resort", url: "https://dugoba.uz" },
];

projects.forEach((project) => console.log(project.title));`,
    `const createCard = (title) => ({
  title,
  tag: "Production ready",
});

const card = createCard("Homepage");
console.log(card);`,
  ],
};

const languageConfig: Record<
  Language,
  { label: string; file: string; metaKey: "home.hero.codeMeta.ts" | "home.hero.codeMeta.js" }
> = {
  ts: { label: "TypeScript", file: "ilyosxoja-usmonov.ts", metaKey: "home.hero.codeMeta.ts" },
  js: { label: "JavaScript", file: "ilyosxoja-usmonov.js", metaKey: "home.hero.codeMeta.js" },
};

const highlightRegex =
  /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\/\/.*|\b(?:interface|type|const|let|function|async|await|return|export|import|from|as|if|else|for|Promise)\b|[{}();,]|\[|\])/g;

function highlightCode(code: string) {
  const nodes: Array<JSX.Element | string> = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = highlightRegex.exec(code)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(code.slice(lastIndex, match.index));
    }
    const token = match[0];
    const style =
      token.startsWith('"') || token.startsWith("'")
        ? { color: "var(--primary-glow)" }
        : token.startsWith("//")
          ? { color: "var(--muted-foreground)" }
          : /^(interface|type|const|let|function|async|await|return|export|import|from|as|if|else|for|Promise)$/.test(
                token,
              )
            ? { color: "var(--primary)" }
            : { color: "var(--foreground)" };
    nodes.push(
      <span key={key++} style={style}>
        {token}
      </span>,
    );
    lastIndex = match.index + token.length;
  }
  if (lastIndex < code.length) {
    nodes.push(code.slice(lastIndex));
  }
  return nodes;
}

function getRandomSample(language: Language, exclude?: string) {
  const list = codeSamples[language];
  if (list.length <= 1) return list[0];
  let index = Math.floor(Math.random() * list.length);
  while (list[index] === exclude) {
    index = Math.floor(Math.random() * list.length);
  }
  return list[index];
}

export function CodeEditorCard({ view, onToggleView }: CodeEditorCardProps) {
  const { t } = useI18n();
  const showCode = view === "code";
  const [language, setLanguage] = useState<Language>("ts");
  const [sampleCode, setSampleCode] = useState(() => getRandomSample("ts"));
  const [typedCode, setTypedCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const typingTimeout = useRef<number>();
  const cursorInterval = useRef<number>();
  const copyTimeout = useRef<number>();

  useEffect(() => {
    if (!showCode) {
      setTypedCode("");
      return;
    }

    setSampleCode((currentSample) => getRandomSample(language, currentSample));
  }, [showCode, language]);

  useEffect(() => {
    if (!showCode) return;
    setTypedCode("");
    let index = 0;

    const typeNext = () => {
      const next = sampleCode[index];
      if (next == null) return;
      setTypedCode((prev) => prev + next);
      index += 1;
      const delay = next === "\n" ? 180 + Math.random() * 70 : 12 + Math.random() * 8;
      typingTimeout.current = window.setTimeout(typeNext, delay);
    };

    typeNext();

    return () => {
      if (typingTimeout.current) window.clearTimeout(typingTimeout.current);
    };
  }, [sampleCode, showCode]);

  useEffect(() => {
    if (!showCode) {
      setCursorVisible(true);
      return;
    }
    if (cursorInterval.current) window.clearInterval(cursorInterval.current);
    cursorInterval.current = window.setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => {
      if (cursorInterval.current) window.clearInterval(cursorInterval.current);
    };
  }, [showCode, typedCode]);

  useEffect(() => {
    return () => {
      if (typingTimeout.current) window.clearTimeout(typingTimeout.current);
      if (cursorInterval.current) window.clearInterval(cursorInterval.current);
      if (copyTimeout.current) window.clearTimeout(copyTimeout.current);
    };
  }, []);

  const currentConfig = languageConfig[language];
  const highlightedCode = useMemo(() => highlightCode(typedCode), [typedCode]);
  const metaText = t(currentConfig.metaKey);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(sampleCode);
      setCopied(true);
      copyTimeout.current = window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // silent
    }
  };

  return (
    <div className="relative w-full rounded-4xl aspect-square">
      <div className="absolute inset-0 rounded-4xl bg-card shadow-2xl shadow-primary/25" />
      <AnimatePresence mode="wait">
        {!showCode ? (
          <motion.div
            key="photo"
            className="absolute inset-0 overflow-hidden rounded-[2rem]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <img
              src="/ilyosxoja.png"
              alt="Ilyosxoja Usmonov"
              className="h-full w-full object-cover"
            />
          </motion.div>
        ) : (
          <motion.div
            key="code"
            className="absolute inset-0 flex flex-col overflow-hidden rounded-4xl bg-card/95"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between gap-3 border-b border-border/70 bg-card/90 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary-glow" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                </div>
                <div className="rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-medium text-muted-foreground flex items-center gap-2">
                  <Code2 className="h-3.5 w-3.5" />
                  <span>{currentConfig.file}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-semibold text-muted-foreground transition hover:border-primary/50 hover:text-primary"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-primary" />
                ) : (
                  <Clipboard className="h-3.5 w-3.5" />
                )}
              </button>
            </div>

            <div className="flex flex-wrap gap-2 px-4 pt-3">
              {(Object.keys(languageConfig) as Language[]).map((option) => {
                const active = option === language;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setLanguage(option)}
                    className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                      active
                        ? "border-primary bg-primary/15 text-primary"
                        : "border-border bg-card/70 text-muted-foreground"
                    }`}
                  >
                    {languageConfig[option].label}
                  </button>
                );
              })}
            </div>

            <div className="relative mx-4 mt-4 flex-1 overflow-hidden rounded-3xl border border-border bg-card p-4 text-[11px] leading-6 text-foreground">
              <pre className="h-full overflow-auto whitespace-pre-wrap break-words font-mono text-sm md:text-base">
                {highlightedCode}
                <span style={{ color: "var(--primary)" }}>{cursorVisible ? "▍" : " "}</span>
              </pre>
            </div>

            <div className="mt-3 flex items-center justify-between px-4 text-[11px] text-muted-foreground">
              <div className="truncate">Picture</div>
              <div className="truncate">{metaText}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={onToggleView}
        className="absolute right-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-3 py-2 text-xs font-semibold text-muted-foreground transition hover:border-primary/50 hover:text-primary"
      >
        {showCode ? <Image className="h-4 w-4" /> : <Code2 className="h-4 w-4" />}
        <span>{showCode ? "Show Image" : "Show Code"}</span>
      </button>

      <AnimatePresence>
        {!showCode ? (
          <motion.div
            key="hero-badge"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-4 -bottom-6 w-[calc(100%-1.5rem)] rounded-3xl border border-border bg-card-glass/95 p-4 shadow-xl shadow-primary/15 backdrop-blur-xl"
          >
            <Link
              to="/projects"
              className="group flex items-center justify-between gap-4 cursor-pointer rounded-3xl p-4 transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              <div className="flex items-center gap-3 text-sm font-semibold text-primary">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Code2 className="h-4 w-4" />
                </span>
                <span className="text-lg font-bold">25+</span>
              </div>
              <div className="text-right text-sm">
                <div className="font-semibold text-foreground">{t("home.stats.projects")}</div>
                <div className="text-xs text-muted-foreground">{t("home.hero.codeBadgeSub")}</div>
              </div>
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
