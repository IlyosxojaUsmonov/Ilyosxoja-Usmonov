import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
// Use public image for deployment
import { ArrowRight, ArrowUpRight, Sparkles, Zap, Code2, MessageCircle } from "lucide-react";
import { CodeEditorCard } from "@/components/CodeEditorCard";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({ component: Home });

const techs = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Figma",
  "Git",
  "Vite",
  "Framer Motion",
  "REST APIs",
];
const featured = [
  {
    title: "AdBlogger.uz",
    tag: "Full-stack blog & CMS",
    url: "https://adblogger.uz",
    accent: "from-primary to-primary-glow",
    logo: "/adblogger.png",
    logoBg: "from-white via-red-50 to-red-100",
  },
  {
    title: "Dugoba Resort",
    tag: "Premium resort website",
    accent: "from-primary-glow to-primary",
    logo: "/dugoba.png",
    logoBg: "from-emerald-950 via-emerald-900 to-green-950",
  },
];

function Home() {
  const { t, lang } = useI18n();
  const stats = [
    { n: "3+", l: t("home.stats.projects") },
    { n: "2024", l: t("home.stats.since") },
    { n: "6+", l: t("home.stats.tech") },
    { n: "100%", l: t("home.stats.responsive") },
  ];
  const whys = [
    { i: Zap, k: "1" as const },
    { i: Sparkles, k: "2" as const },
    { i: Code2, k: "3" as const },
    { i: MessageCircle, k: "4" as const },
  ];
  const [heroView, setHeroView] = useState<"photo" | "code">("photo");

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full blue-blob" />
        <div className="absolute top-40 right-0 h-80 w-80 rounded-full blue-blob opacity-60" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 fade-up">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />{" "}
              {t("home.available")}
            </div>
            <h1 className="display-xl text-6xl sm:text-7xl md:text-8xl">
              Ilyosxoja
              <br />
              <span className="gradient-text">Usmonov.</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl font-medium text-foreground/80 max-w-2xl">
              {t("home.role")}
            </p>
            <p className="mt-4 text-base text-muted-foreground max-w-xl">{t("home.tagline")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/projects" className="btn-primary">
                {t("home.cta.projects")} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-outline">
                {t("home.cta.contact")}
              </Link>
            </div>
          </div>

          {/* Photo w/ creative frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm block">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-linear-to-br from-primary via-primary-glow to-primary opacity-30 blur-2xl" />
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-2xl bg-primary rotate-12 float-slow shadow-xl shadow-primary/40" />
              <div
                className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full border-8 border-primary/30 float-slow"
                style={{ animationDelay: "1.5s" }}
              />
              <CodeEditorCard
                view={heroView}
                onToggleView={() => setHeroView((prev) => (prev === "photo" ? "code" : "photo"))}
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="card-glass rounded-3xl p-6 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="display-xl text-4xl md:text-5xl gradient-text">{s.n}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TECH MARQUEE */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">{t("home.tech.title")}</h2>
          <p className="text-muted-foreground mt-2">{t("home.tech.sub")}</p>
        </div>
        <div className="relative overflow-hidden mask-[linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 marquee w-max">
            {[...techs, ...techs].map((tech, i) => (
              <div
                key={i}
                className="shrink-0 px-6 py-4 rounded-2xl border border-primary/20 bg-card text-primary font-semibold shadow-sm"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 section-pad pt-0">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">{t("home.featured.title")}</h2>
            <p className="text-muted-foreground mt-2">{t("home.featured.sub")}</p>
          </div>
          <Link
            to="/projects"
            className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
          >
            {t("home.featured.all")} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, rotateX: 4, rotateY: -4, scale: 1.02 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className={`group card-glass rounded-3xl p-6 ${i === 1 ? "md:translate-y-6" : ""}`}
            >
              <div
                className={`aspect-4/3 rounded-2xl bg-linear-to-br ${p.logoBg ?? p.accent} relative overflow-hidden`}
              >
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -inset-32 opacity-30"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent, rgba(255,255,255,0.4), transparent 40%)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                />
                {p.logo ? (
                  <motion.img
                    src={p.logo}
                    alt={`${p.title} logo`}
                    className="absolute inset-0 h-full w-full object-cover"
                    whileHover={{ scale: 1.03, rotate: 0.8 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center text-white/90 font-display text-3xl font-bold">
                    {p.title.split(".")[0]}
                  </div>
                )}
              </div>
              <div className="mt-5 flex items-start justify-between gap-3">
                <div>
                  <div className="font-display font-bold text-xl">{p.title}</div>
                  <div className="text-sm text-muted-foreground">{p.tag}</div>
                </div>
                <Link
                  to="/projects"
                  className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 section-pad pt-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">{t("home.why.title")}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whys.map(({ i: Icon, k }) => (
            <div
              key={k}
              className="rounded-3xl p-6 bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all"
            >
              <div className="grid place-items-center h-12 w-12 rounded-2xl bg-primary/10 text-primary mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <div className="font-display font-bold text-lg">{t(`home.why.${k}.t` as const)}</div>
              <p className="text-sm text-muted-foreground mt-2">{t(`home.why.${k}.d` as const)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-20">
        <div
          className="relative rounded-[2.5rem] overflow-hidden p-10 md:p-16 text-center"
          style={{ background: "linear-gradient(120deg, var(--primary), var(--primary-glow))" }}
        >
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-card/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-card/20 blur-3xl" />
          <h3 className="relative display-xl text-4xl md:text-5xl text-white">
            {t("home.closing.title")}
          </h3>
          <p className="relative mt-4 text-white/90 max-w-xl mx-auto">{t("home.closing.sub")}</p>
          <div className="relative mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-primary font-bold hover:scale-105 transition-transform shadow-xl"
            >
              {t("home.cta.contact")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
