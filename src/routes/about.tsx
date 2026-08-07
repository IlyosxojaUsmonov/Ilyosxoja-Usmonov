import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PageHeader } from "@/components/PageHeader";
// Use public image for deployment
import { GraduationCap, Compass, Layers, PackageCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ilyosxoja Usmonov" },
      {
        name: "description",
        content:
          "About Ilyosxoja Usmonov, a Frontend Developer at Mars IT School building modern web experiences with React and Tailwind CSS.",
      },
      { property: "og:title", content: "About — Ilyosxoja Usmonov" },
      {
        property: "og:description",
        content: "Frontend Developer at Mars IT School. React, Tailwind CSS, clean scalable code.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const skillGroups = [
  { title: "Languages & Core", items: ["HTML5", "CSS3", "JavaScript (ES6+)"] },
  { title: "Frameworks & Libraries", items: ["React", "Tailwind CSS", "Framer Motion"] },
  { title: "Tools & Workflow", items: ["Figma", "Git", "Vite", "REST APIs"] },
];

const steps = [
  {
    i: Compass,
    t: { uz: "Aniqlash", en: "Discover", ru: "Анализ" },
    d: {
      uz: "Maqsad va talablarni birga aniqlaymiz.",
      en: "Understand goals & requirements together.",
      ru: "Вместе определяем цели и требования.",
    },
  },
  {
    i: Layers,
    t: { uz: "Dizayn", en: "Design", ru: "Дизайн" },
    d: {
      uz: "Wireframe va vizual dizayn tayyorlanadi.",
      en: "Wireframes and visual design come to life.",
      ru: "Wireframe и визуальный дизайн оживают.",
    },
  },
  {
    i: PackageCheck,
    t: { uz: "Ishlab chiqish", en: "Develop", ru: "Разработка" },
    d: {
      uz: "Toza kod, responsive va tez.",
      en: "Clean, responsive, fast code.",
      ru: "Чистый, адаптивный и быстрый код.",
    },
  },
  {
    i: GraduationCap,
    t: { uz: "Yetkazish", en: "Deliver", ru: "Сдача" },
    d: {
      uz: "Test, tuzatishlar va ishga tushirish.",
      en: "Testing, revisions, and launch.",
      ru: "Тестирование, правки и запуск.",
    },
  },
];

function About() {
  const { t, lang } = useI18n();
  return (
    <>
      <PageHeader kicker={t("about.kicker")} title={t("about.title")} sub={t("about.p1")} />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] blue-blob opacity-70" />
            <img
              src="/ilyosxoja.png"
              alt="Ilyosxoja Usmonov"
              className="relative rounded-[2rem] w-full aspect-[4/5] object-cover shadow-xl"
            />
            <div className="absolute -bottom-5 -right-5 card-glass rounded-2xl p-4">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Mars IT School
              </div>
              <div className="font-bold">Frontend Developer</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 space-y-5 text-lg leading-relaxed text-foreground/85">
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
          <p>{t("about.p4")}</p>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 section-pad">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{t("about.skills")}</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {skillGroups.map((g) => (
            <div key={g.title} className="rounded-3xl p-6 bg-card border border-border">
              <div className="text-sm font-semibold text-primary uppercase tracking-wider">
                {g.title}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="px-3 py-1.5 rounded-full bg-primary/8 text-primary text-sm font-medium border border-primary/15"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education timeline */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{t("about.edu")}</h2>
        <ol className="relative border-l-2 border-primary/30 pl-8 space-y-8">
          <li>
            <span className="absolute -left-[11px] h-5 w-5 rounded-full bg-primary ring-4 ring-primary/20" />
            <div className="text-sm text-muted-foreground">2024 — {t("about.present")}</div>
            <div className="font-display font-bold text-xl mt-1">
              Mars IT School — Frontend Developer track
            </div>
            <p className="text-muted-foreground mt-1">{t("about.edu.desc")}</p>
          </li>
          <li>
            <span className="absolute -left-[11px] h-5 w-5 rounded-full bg-primary/40 ring-4 ring-primary/10" />
            <div className="text-sm text-muted-foreground">2024</div>
            <div className="font-display font-bold text-xl mt-1">{t("about.freelance.start")}</div>
            <p className="text-muted-foreground mt-1">{t("about.freelance.desc")}</p>
          </li>
          <li>
            <span className="absolute -left-[11px] h-5 w-5 rounded-full border-2 border-primary" />
            <div className="text-sm text-muted-foreground">{t("about.next")}</div>
            <div className="font-display font-bold text-xl mt-1">{t("about.fullstack")}</div>
          </li>
        </ol>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{t("about.process")}</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="relative rounded-3xl p-6 bg-card border border-border">
              <div className="absolute top-4 right-5 text-5xl font-display font-bold text-primary/10">
                0{i + 1}
              </div>
              <s.i className="h-8 w-8 text-primary" />
              <div className="mt-3 font-display font-bold text-lg">{s.t[lang]}</div>
              <p className="text-sm text-muted-foreground mt-1">{s.d[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Personal */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-4">
        <div className="rounded-3xl p-8 md:p-12 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
          <div className="text-sm uppercase tracking-widest text-primary font-semibold">
            {t("about.personal")}
          </div>
          <p className="mt-3 text-xl md:text-2xl font-display max-w-3xl">
            "{t("about.personal.body")}"
          </p>
        </div>
      </section>
    </>
  );
}
