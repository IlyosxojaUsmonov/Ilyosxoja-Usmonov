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
  { icon: LayoutGrid, title: { uz: "Landing sahifa", en: "Landing Page Development", ru: "Landing-страница" }, desc: { uz: "Marketing yo'naltirilgan, tezkor va konvertatsion landing sahifalar.", en: "Marketing-focused, fast, high-converting landing pages.", ru: "Маркетинговые, быстрые и конверсионные landing-страницы." }, items: { uz: ["Maxsus dizayn", "Mobil optimallashtirish", "Tez yuklanish", "SEO-do'st tuzilma"], en: ["Custom design", "Mobile optimization", "Fast load speed", "SEO-friendly structure"], ru: ["Индивидуальный дизайн", "Мобильная оптимизация", "Быстрая загрузка", "SEO-структура"] } },
  { icon: Globe, title: { uz: "Professional web sayt", en: "Professional Website", ru: "Профессиональный сайт" }, desc: { uz: "Kompaniyalar va shaxsiy brendlar uchun ko'p sahifali saytlar.", en: "Multi-page websites for companies and personal brands.", ru: "Многостраничные сайты для компаний и личных брендов." }, items: { uz: ["Bir nechta sahifalar", "Navigatsiya tuzilmasi", "Kontent bo'limlari", "Aloqa integratsiyasi"], en: ["Multiple pages", "Navigation structure", "Content sections", "Contact integration"], ru: ["Несколько страниц", "Структура навигации", "Контентные разделы", "Интеграция контактов"] } },
  { icon: Server, title: { uz: "Full-Stack web ilova", en: "Full-Stack Web App", ru: "Full-Stack веб-приложение" }, desc: { uz: "Frontend + backend integratsiyasi, API va dinamik web ilovalar.", en: "Frontend + backend integration, APIs, dynamic web apps.", ru: "Frontend + backend интеграция, API и динамические веб-приложения." }, items: { uz: ["React frontend", "Backend API", "DB integratsiya", "Autentifikatsiya (agar kerak bo'lsa)"], en: ["React frontend", "Backend API connection", "Database integration", "Authentication if needed"], ru: ["React frontend", "Backend API", "Интеграция БД", "Аутентификация при необходимости"] } },
  { icon: ShoppingBag, title: { uz: "E-commerce sayt", en: "E-commerce Website", ru: "E-commerce сайт" }, desc: { uz: "Onlayn do'kon interfeyslari, mahsulot katalogi, checkout.", en: "Online store interfaces, product catalogs, checkout systems.", ru: "Интерфейсы интернет-магазинов, каталоги товаров, checkout." }, items: { uz: ["Mahsulot ro'yxati", "Savat / checkout UI", "Responsive galereya"], en: ["Product listing pages", "Cart / checkout UI", "Responsive galleries"], ru: ["Страницы товаров", "Корзина / checkout UI", "Адаптивные галереи"] } },
  { icon: BarChart3, title: { uz: "Dashboard va ilovalar", en: "Dashboards & Apps", ru: "Dashboard и приложения" }, desc: { uz: "Admin panellar, statistika tizimlari, boshqaruv interfeyslari.", en: "Admin panels, analytics, management interfaces.", ru: "Админ-панели, аналитика, интерфейсы управления." }, items: { uz: ["Ma'lumotlar vizualizatsiyasi", "Admin boshqaruv", "Foydalanuvchi-do'st tuzilma"], en: ["Data visualization", "Admin controls", "User-friendly layouts"], ru: ["Визуализация данных", "Админ-управление", "Удобная структура"] } },
  { icon: Paintbrush, title: { uz: "UI/UX va Frontend", en: "UI/UX & Frontend", ru: "UI/UX и Frontend" }, desc: { uz: "Figma dizaynlarni kodga aylantirish, animatsiyalar, responsive.", en: "Figma to code, animations, responsive design.", ru: "Figma в код, анимации, адаптивный дизайн." }, items: { uz: ["Piksel-aniq implementatsiya", "Framer Motion animatsiyalari", "Barcha qurilmalarda test"], en: ["Pixel-perfect implementation", "Framer Motion animations", "Cross-device testing"], ru: ["Пиксель-перфект реализация", "Анимации Framer Motion", "Тестирование на всех устройствах"] } },
];

const process = [
  { uz: "Konsultatsiya va talablar", en: "Consultation & requirements", ru: "Консультация и требования" },
  { uz: "Dizayn va wireframe", en: "Design & wireframing", ru: "Дизайн и wireframe" },
  { uz: "Ishlab chiqish", en: "Development", ru: "Разработка" },
  { uz: "Test va tuzatishlar", en: "Testing & revisions", ru: "Тестирование и правки" },
  { uz: "Yetkazish va qo'llab-quvvatlash", en: "Delivery & support", ru: "Сдача и поддержка" },
];

const faqs: { q: Record<Lang, string>; a: Record<Lang, string> }[] = [
  { q: { uz: "Loyiha qancha vaqt oladi?", en: "How long does a project take?", ru: "Сколько времени занимает проект?" }, a: { uz: "Landing — 3–7 kun, ko'p sahifali sayt — 2–3 hafta, murakkab ilova — 4+ hafta.", en: "Landing pages: 3–7 days. Multi-page sites: 2–3 weeks. Complex apps: 4+ weeks.", ru: "Landing — 3–7 дней, многостраничный сайт — 2–3 недели, сложное приложение — 4+ недели." } },
  { q: { uz: "Qo'llab-quvvatlash beriladimi?", en: "Do you provide ongoing support?", ru: "Предоставляете ли поддержку?" }, a: { uz: "Ha, yetkazib berilgandan so'ng 30 kun bepul texnik yordam beraman.", en: "Yes — every project ships with 30 days of free technical support.", ru: "Да — каждый проект включает 30 дней бесплатной технической поддержки." } },
  { q: { uz: "Boshlash uchun nima kerak?", en: "What do you need from me to start?", ru: "Что нужно для начала?" }, a: { uz: "Loyiha maqsadi, mavjud materiallar (logo, matn, rasm) va yoqadigan misollar.", en: "The project goal, existing assets (logo, copy, images), and a few references you like.", ru: "Цель проекта, имеющиеся материалы (логотип, текст, изображения) и примеры, которые нравятся." } },
  { q: { uz: "Xalqaro mijozlar bilan ishlaysizmi?", en: "Do you work with international clients?", ru: "Работаете с международными клиентами?" }, a: { uz: "Albatta. Ingliz tilida muloqot qilaman va turli vaqt zonalari bilan moslashaman.", en: "Absolutely. I communicate in English and adapt to different time zones.", ru: "Конечно. Общаюсь на английском и адаптируюсь к разным часовым поясам." } },
  { q: { uz: "To'lov qanday amalga oshiriladi?", en: "How do payments work?", ru: "Как происходит оплата?" }, a: { uz: "50% avans, 50% loyiha yakunida. Katta loyihalarda bosqichli to'lov mumkin.", en: "50% upfront, 50% at delivery. Milestone-based payments for larger projects.", ru: "50% предоплата, 50% при сдаче. Для крупных проектов — поэтапная оплата." } },
];

function Services() {
  const { t, lang } = useI18n();
  const [openIdx, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHeader kicker={t("services.kicker")} title={t("services.title")} sub={t("services.sub")} />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-2 gap-5">
        {services.map((s, i) => (
          <div key={i} className="group relative rounded-3xl p-7 bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all overflow-hidden">
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
            <div key={i} className="rounded-2xl bg-card border border-border overflow-hidden">
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
