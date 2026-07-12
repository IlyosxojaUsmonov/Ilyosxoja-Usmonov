import { createFileRoute } from "@tanstack/react-router";
import { useI18n, type Lang } from "@/lib/i18n";
import { PageHeader } from "@/components/PageHeader";
import { useState } from "react";
import { LayoutGrid, Globe, Server, ShoppingBag, BarChart3, Paintbrush, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Services — Ilyosxoja Usmonov" },
    { name: "description", content: "Frontend development services: landing pages, multi-page websites, full-stack apps, e-commerce, dashboards, and UI/UX implementation." },
    { property: "og:title", content: "Services — Ilyosxoja Usmonov" },
    { property: "og:description", content: "Landing pages, websites, full-stack apps, e-commerce, dashboards, UI/UX." },
    { property: "og:url", content: "/services" },
  ], links: [{ rel: "canonical", href: "/services" }] }),
  component: Services,
});

type S = { icon: typeof Globe; title: Record<Lang, string>; desc: Record<Lang, string>; items: Record<Lang, string[]> };

const services: S[] = [
  { icon: LayoutGrid, title: { uz: "Landing sahifa", en: "Landing Page Development" }, desc: { uz: "Marketing yo'naltirilgan, tezkor va konvertatsion landing sahifalar.", en: "Marketing-focused, fast, high-converting landing pages." }, items: { uz: ["Maxsus dizayn", "Mobil optimallashtirish", "Tez yuklanish", "SEO-do'st tuzilma"], en: ["Custom design", "Mobile optimization", "Fast load speed", "SEO-friendly structure"] } },
  { icon: Globe, title: { uz: "Professional web sayt", en: "Professional Website" }, desc: { uz: "Kompaniyalar va shaxsiy brendlar uchun ko'p sahifali saytlar.", en: "Multi-page websites for companies and personal brands." }, items: { uz: ["Bir nechta sahifalar", "Navigatsiya tuzilmasi", "Kontent bo'limlari", "Aloqa integratsiyasi"], en: ["Multiple pages", "Navigation structure", "Content sections", "Contact integration"] } },
  { icon: Server, title: { uz: "Full-Stack web ilova", en: "Full-Stack Web App" }, desc: { uz: "Frontend + backend integratsiyasi, API va dinamik web ilovalar.", en: "Frontend + backend integration, APIs, dynamic web apps." }, items: { uz: ["React frontend", "Backend API", "DB integratsiya", "Autentifikatsiya (agar kerak bo'lsa)"], en: ["React frontend", "Backend API connection", "Database integration", "Authentication if needed"] } },
  { icon: ShoppingBag, title: { uz: "E-commerce sayt", en: "E-commerce Website" }, desc: { uz: "Onlayn do'kon interfeyslari, mahsulot katalogi, checkout.", en: "Online store interfaces, product catalogs, checkout systems." }, items: { uz: ["Mahsulot ro'yxati", "Savat / checkout UI", "Responsive galereya"], en: ["Product listing pages", "Cart / checkout UI", "Responsive galleries"] } },
  { icon: BarChart3, title: { uz: "Dashboard va ilovalar", en: "Dashboards & Apps" }, desc: { uz: "Admin panellar, statistika tizimlari, boshqaruv interfeyslari.", en: "Admin panels, analytics, management interfaces." }, items: { uz: ["Ma'lumotlar vizualizatsiyasi", "Admin boshqaruv", "Foydalanuvchi-do'st tuzilma"], en: ["Data visualization", "Admin controls", "User-friendly layouts"] } },
  { icon: Paintbrush, title: { uz: "UI/UX va Frontend", en: "UI/UX & Frontend" }, desc: { uz: "Figma dizaynlarni kodga aylantirish, animatsiyalar, responsive.", en: "Figma to code, animations, responsive design." }, items: { uz: ["Piksel-aniq implementatsiya", "Framer Motion animatsiyalari", "Barcha qurilmalarda test"], en: ["Pixel-perfect implementation", "Framer Motion animations", "Cross-device testing"] } },
];

const process = [
  { uz: "Konsultatsiya va talablar", en: "Consultation & requirements" },
  { uz: "Dizayn va wireframe", en: "Design & wireframing" },
  { uz: "Ishlab chiqish", en: "Development" },
  { uz: "Test va tuzatishlar", en: "Testing & revisions" },
  { uz: "Yetkazish va qo'llab-quvvatlash", en: "Delivery & support" },
];

const faqs: { q: Record<Lang, string>; a: Record<Lang, string> }[] = [
  { q: { uz: "Loyiha qancha vaqt oladi?", en: "How long does a project take?" }, a: { uz: "Landing — 3–7 kun, ko'p sahifali sayt — 2–3 hafta, murakkab ilova — 4+ hafta.", en: "Landing pages: 3–7 days. Multi-page sites: 2–3 weeks. Complex apps: 4+ weeks." } },
  { q: { uz: "Qo'llab-quvvatlash beriladimi?", en: "Do you provide ongoing support?" }, a: { uz: "Ha, yetkazib berilgandan so'ng 30 kun bepul texnik yordam beraman.", en: "Yes — every project ships with 30 days of free technical support." } },
  { q: { uz: "Boshlash uchun nima kerak?", en: "What do you need from me to start?" }, a: { uz: "Loyiha maqsadi, mavjud materiallar (logo, matn, rasm) va yoqadigan misollar.", en: "The project goal, existing assets (logo, copy, images), and a few references you like." } },
  { q: { uz: "Xalqaro mijozlar bilan ishlaysizmi?", en: "Do you work with international clients?" }, a: { uz: "Albatta. Ingliz tilida muloqot qilaman va turli vaqt zonalari bilan moslashaman.", en: "Absolutely. I communicate in English and adapt to different time zones." } },
  { q: { uz: "To'lov qanday amalga oshiriladi?", en: "How do payments work?" }, a: { uz: "50% avans, 50% loyiha yakunida. Katta loyihalarda bosqichli to'lov mumkin.", en: "50% upfront, 50% at delivery. Milestone-based payments for larger projects." } },
];

function Services() {
  const { t, lang } = useI18n();
  const [openIdx, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHeader kicker={lang === "uz" ? "Nima taklif qilaman" : "What I offer"} title={t("services.title")} sub={t("services.sub")} />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-2 gap-5">
        {services.map((s, i) => (
          <div key={i} className="group relative rounded-3xl p-7 bg-white border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all overflow-hidden">
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
            <div className="relative flex items-start gap-4">
              <div className="grid place-items-center h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-white shadow-lg shadow-primary/30 shrink-0"><s.icon className="h-6 w-6" /></div>
              <div className="min-w-0">
                <h3 className="font-display font-bold text-xl">{s.title[lang]}</h3>
                <p className="text-muted-foreground mt-1">{s.desc[lang]}</p>
              </div>
            </div>
            <div className="mt-5 pt-5 border-t border-border">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">{t("services.includes")}</div>
              <ul className="mt-2 grid sm:grid-cols-2 gap-1.5 text-sm">
                {s.items[lang].map((it) => <li key={it} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" />{it}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 section-pad">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">{t("services.process")}</h2>
        <div className="grid md:grid-cols-5 gap-4 relative">
          {process.map((p, i) => (
            <div key={i} className="relative rounded-2xl p-5 bg-gradient-to-br from-white to-primary/5 border border-primary/15">
              <div className="display-xl text-4xl gradient-text">0{i + 1}</div>
              <div className="mt-2 font-semibold">{p[lang]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 sm:px-8 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{t("services.faq")}</h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-2xl bg-white border border-border overflow-hidden">
              <button onClick={() => setOpen(openIdx === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold hover:bg-primary/5 transition-colors">
                <span>{f.q[lang]}</span>
                <ChevronDown className={`h-5 w-5 text-primary shrink-0 transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
              </button>
              {openIdx === i && <div className="px-5 pb-5 text-muted-foreground">{f.a[lang]}</div>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
