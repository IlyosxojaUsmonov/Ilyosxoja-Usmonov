import { createFileRoute } from "@tanstack/react-router";
import { useI18n, type Lang } from "@/lib/i18n";
import { PageHeader } from "@/components/PageHeader";
import { Download, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Ilyosxoja Usmonov" },
      {
        name: "description",
        content:
          "Digital resume of Ilyosxoja Usmonov: Frontend Developer with React, Tailwind CSS, and freelance experience since 2024.",
      },
      { property: "og:title", content: "Resume — Ilyosxoja Usmonov" },
      {
        property: "og:description",
        content: "Frontend developer resume, education, skills, freelance experience.",
      },
      { property: "og:url", content: "/resume" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: Resume,
});

const skills: { g: Record<Lang, string>; list: string[] }[] = [
  { g: { uz: "Tillar", en: "Languages" }, list: ["HTML5", "CSS3", "JavaScript (ES6+)"] },
  {
    g: { uz: "Frameworklar / Kutubxonalar", en: "Frameworks / Libraries" },
    list: ["React", "Tailwind CSS", "Framer Motion"],
  },
  { g: { uz: "Asboblar", en: "Tools" }, list: ["Figma", "Git", "Vite", "REST APIs"] },
];

const experience: {
  title: Record<Lang, string>;
  org: Record<Lang, string>;
  date: string;
  bullets: Record<Lang, string[]>;
}[] = [
  {
    title: { uz: "Frilanser Frontend Developer", en: "Freelance Frontend Developer" },
    org: { uz: "Mustaqil", en: "Independent" },
    date: "2024 — present",
    bullets: {
      uz: [
        "AdBlogger.uz — full-stack blog va CMS platformasini yaratdim (React + backend API).",
        "Dugoba Resort — premium dam olish maskani sayti (HTML/CSS/JS, Figma dizayndan).",
        "",
      ],
      en: [
        "AdBlogger.uz — built a full-stack blog & CMS platform (React + backend API).",
        "Dugoba Resort — premium resort website (HTML/CSS/JS from Figma design).",
        "",
      ],
    },
  },
];

function Resume() {
  const { t, lang } = useI18n();
  const resumeDocxUrl = "/files/Ilyosxoja%20Usmonov%20rezume.docx";

  return (
    <>
      <PageHeader kicker="CV" title={t("resume.title")}>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={resumeDocxUrl}
            download
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="h-4 w-4" /> {t("resume.download")}
          </a>
          <a href={resumeDocxUrl} className="btn-outline" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" /> {lang === "uz" ? "Ochib ko'rish" : "Open preview"}
          </a>
        </div>
      </PageHeader>

      <div className="mx-auto max-w-5xl px-5 sm:px-8 grid gap-6 pb-16">
        {/* Summary */}
        <section className="rounded-3xl bg-card border border-border p-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="display-xl text-3xl">Ilyosxoja Usmonov</div>
              <div className="text-primary font-semibold mt-1">Frontend Developer</div>
              <div className="text-sm text-muted-foreground mt-2">Tashkent, Uzbekistan</div>
              <div className="text-sm text-muted-foreground">frontend.usmonov@gmail.com</div>
              <div className="text-sm text-muted-foreground">@ilyosxoja_usmonov</div>
            </div>
            <div className="md:col-span-2">
              <div className="text-xs uppercase tracking-widest text-primary font-semibold">
                {t("resume.summary")}
              </div>
              <p className="mt-2 text-foreground/85">{t("resume.summary.body")}</p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="rounded-3xl bg-card border border-border p-8">
          <h2 className="text-xs uppercase tracking-widest text-primary font-semibold">
            {t("resume.education")}
          </h2>
          <div className="mt-4 flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div className="font-display font-bold text-lg">Mars IT School</div>
              <div className="text-muted-foreground">Frontend Developer track</div>
            </div>
            <div className="text-sm text-muted-foreground">
              2024 — {lang === "uz" ? "hozirgi" : "present"}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="rounded-3xl bg-card border border-border p-8">
          <h2 className="text-xs uppercase tracking-widest text-primary font-semibold">
            {t("resume.skills")}
          </h2>
          <div className="mt-4 grid sm:grid-cols-3 gap-6">
            {skills.map((s, i) => (
              <div key={i}>
                <div className="font-semibold mb-2">{s.g[lang]}</div>
                <div className="flex flex-wrap gap-1.5">
                  {s.list.map((it) => (
                    <span
                      key={it}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/8 text-primary border border-primary/15"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="rounded-3xl bg-card border border-border p-8">
          <h2 className="text-xs uppercase tracking-widest text-primary font-semibold">
            {t("resume.exp")}
          </h2>
          {experience.map((e, i) => (
            <div key={i} className="mt-4">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div className="font-display font-bold text-lg">{e.title[lang]}</div>
                  <div className="text-muted-foreground">{e.org[lang]}</div>
                </div>
                <div className="text-sm text-muted-foreground">{e.date}</div>
              </div>
              <ul className="mt-3 space-y-1.5">
                {e.bullets[lang].map((b) => (
                  <li key={b} className="flex gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Languages */}
        <section className="rounded-3xl bg-card border border-border p-8">
          <h2 className="text-xs uppercase tracking-widest text-primary font-semibold">
            {t("resume.lang")}
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <div className="px-4 py-2 rounded-full bg-primary/8 text-primary border border-primary/20 font-medium">
              O'zbekcha — Native
            </div>
            <div className="px-4 py-2 rounded-full bg-primary/8 text-primary border border-primary/20 font-medium">
              English — Professional
            </div>
          </div>
        </section>

        {/* Testimonials (sample) */}
        <section className="rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 p-8">
          <h2 className="text-xs uppercase tracking-widest text-primary font-semibold">
            {lang === "uz" ? "Mijozlar fikri (namuna)" : "Testimonials (sample)"}
          </h2>
          <div className="mt-5 grid md:grid-cols-2 gap-5">
            {[1, 2].map((i) => (
              <blockquote key={i} className="rounded-2xl bg-card p-5 border border-border">
                <p className="text-sm italic text-foreground/80">
                  "
                  {lang === "uz"
                    ? "Loyiha vaqtida yetkazildi, natija kutganimdan yaxshi chiqdi."
                    : "Delivered on time and the result exceeded expectations."}
                  "
                </p>
                <div className="mt-3 text-xs text-muted-foreground">
                  — {lang === "uz" ? "Namuna mijoz" : "Sample client"} #{i}
                </div>
              </blockquote>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
