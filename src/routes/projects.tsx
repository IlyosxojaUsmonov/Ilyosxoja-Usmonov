import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useI18n, type Lang } from "@/lib/i18n";
import { PageHeader } from "@/components/PageHeader";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: "Projects — Ilyosxoja Usmonov" },
    { name: "description", content: "Selected projects by Ilyosxoja Usmonov: AdBlogger.uz full-stack blog and Dugoba Resort premium website." },
    { property: "og:title", content: "Projects — Ilyosxoja Usmonov" },
    { property: "og:description", content: "Case studies: AdBlogger.uz and Dugoba Resort." },
    { property: "og:url", content: "/projects" },
  ], links: [{ rel: "canonical", href: "/projects" }] }),
  component: Projects,
});

type P = {
  name: string;
  type: Record<Lang, string>;
  overview: Record<Lang, string>;
  challenge: Record<Lang, string>;
  features: Record<Lang, string[]>;
  tech: string[];
  result: Record<Lang, string>;
  url?: string;
  accent: string;
  logo?: string;
  logoBg?: string;
};

const projects: P[] = [
  {
    name: "AdBlogger.uz",
    type: { uz: "Full-stack blog va CMS platformasi", en: "Full-stack blog & CMS platform" },
    overview: {
      uz: "Dinamik kontent boshqaruvi va backend integratsiyasiga ega zamonaviy blog va CMS platforma.",
      en: "Modern blog and CMS platform with dynamic content management and backend integration.",
    },
    challenge: {
      uz: "Kontent yaratuvchilarga postlarni oson boshqarishni ta'minlash kerak edi. React interfeys backend API va ma'lumotlar bazasi bilan bog'landi.",
      en: "Content creators needed an easy way to publish and manage posts. Solved with a clean React interface connected to a backend API and database.",
    },
    features: {
      uz: ["Postlarni yaratish/boshqarish", "Dinamik ma'lumotlar", "Responsive UI", "Backend API integratsiya", "Ma'lumotlar bazasi", "Tez va silliq UX"],
      en: ["Create & manage blog posts", "Dynamic data handling", "Responsive modern UI", "Backend API integration", "Database handling", "Fast smooth UX"],
    },
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Backend API", "Database"],
    result: { uz: "Frontend va backendni birlashtirgan kengaytiriladigan platforma.", en: "A scalable full-stack blog platform combining frontend and backend." },
    url: "https://adblogger.uz",
    accent: "from-primary via-primary-glow to-primary",
    logo: "/adblogger.png",
    logoBg: "from-white via-red-50 to-red-100",
  },
  {
    name: "Dugoba Resort",
    type: { uz: "Premium dam olish maskani sayti", en: "Premium resort website" },
    overview: {
      uz: "Kottejlar, xizmatlar va galereyani professional ko'rsatadigan lyuks dam olish maskani sayti.",
      en: "Modern website for a premium resort, showcasing cottages, services, and gallery professionally.",
    },
    challenge: {
      uz: "Brendning lyuks pozitsiyasiga mos raqamli mavjudlik kerak edi. Figma dizayn asosida elegant hero, kottej ko'rgazma va galereya yaratildi.",
      en: "The resort needed a digital presence matching its luxury positioning — built from a custom Figma design with premium hero, cottage showcase and gallery.",
    },
    features: {
      uz: ["Premium hero bo'lim", "Kottej ko'rgazmasi", "Galereya tizimi", "Bron qilish bo'limi", "Mobile responsive", "Zamonaviy UI/UX"],
      en: ["Premium hero section", "Cottage showcase", "Gallery system", "Booking section", "Mobile responsive", "Modern UI/UX"],
    },
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Figma"],
    result: { uz: "Brendni professional aks ettiruvchi lyuks sayt.", en: "A luxury-style website professionally representing the resort brand." },
    accent: "from-primary-glow to-primary",
    logo: "/dugoba.png",
    logoBg: "from-emerald-950 via-emerald-900 to-green-950",
  },
];

function Projects() {
  const { t, lang } = useI18n();
  return (
    <>
      <PageHeader kicker={lang === "uz" ? "Ish portfeli" : "Selected work"} title={t("projects.title")} sub={t("projects.intro")} />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 space-y-24 pb-16">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`grid lg:grid-cols-12 gap-8 items-start ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="lg:col-span-6">
              <motion.div
                whileHover={{ y: -6, rotate: -0.5 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className={`group relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-gradient-to-br ${p.logoBg ?? p.accent} shadow-2xl shadow-primary/20`}
              >
                {/* animated shimmer */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -inset-40 opacity-30"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent, rgba(255,255,255,0.35), transparent 40%)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0">
                  {p.logo ? (
                    <motion.img
                      src={p.logo}
                      alt={`${p.name} logo`}
                      className="absolute inset-0 h-full w-full object-cover"
                      initial={{ scale: 1.05, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ scale: 1.02, rotate: 0.5 }}
                    />
                  ) : (
                    <div className="h-full w-full grid place-items-center text-white/95 text-center">
                      <div className="display-xl text-5xl md:text-6xl">{p.name.split(".")[0]}</div>
                      <div className="mt-2 text-white/80 text-sm uppercase tracking-widest">{p.type[lang]}</div>
                    </div>
                  )}
                </div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-white/60" />
                  <span className="h-3 w-3 rounded-full bg-white/60" />
                  <span className="h-3 w-3 rounded-full bg-white/60" />
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-6">
              <div className="text-xs uppercase tracking-widest text-primary font-semibold">0{i + 1} · {p.type[lang]}</div>
              <h2 className="mt-2 display-xl text-4xl md:text-5xl">{p.name}</h2>
              <p className="mt-4 text-lg text-foreground/80">{p.overview[lang]}</p>

              <div className="mt-6">
                <div className="text-sm font-semibold text-primary uppercase tracking-wider">{t("projects.challenge")}</div>
                <p className="mt-2 text-foreground/80">{p.challenge[lang]}</p>
              </div>

              <div className="mt-6">
                <div className="text-sm font-semibold text-primary uppercase tracking-wider">{t("projects.features")}</div>
                <ul className="mt-2 grid sm:grid-cols-2 gap-2">
                  {p.features[lang].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <div className="text-sm font-semibold text-primary uppercase tracking-wider">{t("projects.tech")}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/8 text-primary border border-primary/20">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl p-4 bg-primary/5 border border-primary/15">
                <div className="text-xs uppercase font-semibold text-primary tracking-widest">{t("projects.result")}</div>
                <p className="mt-1 font-medium">{p.result[lang]}</p>
              </div>

              {p.url && (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-6 btn-primary">
                  {t("projects.visit")} <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-8">
        <div className="rounded-3xl p-10 text-center border-2 border-dashed border-primary/30 bg-primary/[0.03]">
          <div className="text-sm uppercase tracking-widest text-primary font-semibold">Coming Soon</div>
          <h3 className="mt-2 display-xl text-3xl md:text-4xl">{t("projects.more.title")}</h3>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">{t("projects.more.sub")}</p>
        </div>
      </section>
    </>
  );
}
