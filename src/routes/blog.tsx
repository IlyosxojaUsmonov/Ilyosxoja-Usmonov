import { createFileRoute } from "@tanstack/react-router";
import { useI18n, type Lang } from "@/lib/i18n";
import { PageHeader } from "@/components/PageHeader";
import { useState } from "react";
import { Send } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [
    { title: "Blog — Ilyosxoja Usmonov" },
    { name: "description", content: "Notes and tutorials on frontend development, JavaScript, React, and career lessons from Ilyosxoja Usmonov." },
    { property: "og:title", content: "Blog — Ilyosxoja Usmonov" },
    { property: "og:description", content: "Frontend, JavaScript and React articles." },
    { property: "og:url", content: "/blog" },
  ], links: [{ rel: "canonical", href: "/blog" }] }),
  component: Blog,
});

type Post = { title: Record<Lang, string>; excerpt: Record<Lang, string>; cat: string; min: number };

const posts: Post[] = [
  { cat: "React", min: 6, title: { uz: "React hookslarini ishlatishning 5 ta amaliy usuli", en: "5 Practical Ways I Use React Hooks Every Week" }, excerpt: { uz: "useState, useEffect va custom hooklardan real loyihalarda foydalanish.", en: "Real-project patterns for useState, useEffect and custom hooks." } },
  { cat: "HTML/CSS", min: 4, title: { uz: "Har bir loyihada ishlataman: 5 ta Tailwind hiylasi", en: "5 Tailwind CSS Tricks I Use in Every Project" }, excerpt: { uz: "Utility klasslarni tez va toza yozishning kichik yo'llari.", en: "Small tricks to write utility classes faster and cleaner." } },
  { cat: "Career", min: 8, title: { uz: "Birinchi full-stack blog qurishda o'rgangan narsalarim", en: "What I Learned Building My First Full-Stack Blog" }, excerpt: { uz: "AdBlogger.uz misolida frontend + backend jarayoni.", en: "The AdBlogger.uz story: from frontend to backend." } },
  { cat: "JavaScript", min: 5, title: { uz: "ES6 xususiyatlari: kod uchun kichik ammo kuchli", en: "ES6 Features That Quietly Made My Code Better" }, excerpt: { uz: "Destructuring, optional chaining va boshqa oddiy super-vositalar.", en: "Destructuring, optional chaining and other quiet superpowers." } },
  { cat: "React", min: 7, title: { uz: "Framer Motion bilan silliq animatsiyalar", en: "Smooth Animations with Framer Motion" }, excerpt: { uz: "Kichik hover va sahifa o'tishlarini animatsiyalash.", en: "Micro-interactions and page transitions made simple." } },
  { cat: "HTML/CSS", min: 6, title: { uz: "Responsive dizayn: mobile-first yondashuv", en: "Responsive Design: A Mobile-First Approach" }, excerpt: { uz: "Kichik ekrandan katta ekranga to'g'ri o'sish.", en: "Scaling up cleanly from small screens to large." } },
];

const cats = ["All", "HTML/CSS", "JavaScript", "React", "Career"];

function Blog() {
  const { t, lang } = useI18n();
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? posts : posts.filter((p) => p.cat === cat);
  return (
    <>
      <PageHeader kicker={lang === "uz" ? "Yozuvlar" : "Writing"} title={t("blog.title")} sub={t("blog.sub")} />

      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${cat === c ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30" : "bg-white border border-border hover:border-primary text-foreground/70"}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <article key={i} className="group rounded-3xl overflow-hidden bg-white border border-border hover:border-primary/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all">
              <div className="aspect-video bg-gradient-to-br from-primary/20 via-primary-glow/30 to-primary/20 relative">
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white text-primary text-xs font-bold">{p.cat}</div>
                <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/20 backdrop-blur text-white text-xs">{p.min} {t("blog.min")}</div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-lg leading-tight group-hover:text-primary transition-colors">{p.title[lang]}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt[lang]}</p>
                <button className="mt-4 text-sm font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">{t("blog.read")} →</button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl p-8 md:p-10 bg-gradient-to-br from-primary to-primary-glow text-white text-center">
          <h3 className="display-xl text-3xl">@usmonov_stack</h3>
          <p className="mt-2 text-white/85 max-w-lg mx-auto">{lang === "uz" ? "Yangi maqolalar va coding kunlik yozuvlar uchun Telegram kanalimga qo'shiling." : "Join my Telegram channel for new articles and daily coding notes."}</p>
          <a href="https://t.me/usmonov_stack" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary font-bold hover:scale-105 transition-transform">
            <Send className="h-4 w-4" /> {t("blog.subscribe")}
          </a>
        </div>
      </section>
    </>
  );
}
