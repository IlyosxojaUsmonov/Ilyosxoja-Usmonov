import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n, type Lang } from "@/lib/i18n";
import { PageHeader } from "@/components/PageHeader";
import { Check, X } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [
    { title: "Pricing — Ilyosxoja Usmonov" },
    { name: "description", content: "Transparent pricing for landing pages, business websites, and premium web applications." },
    { property: "og:title", content: "Pricing — Ilyosxoja Usmonov" },
    { property: "og:description", content: "Starter, Growth and Premium packages for frontend development projects." },
    { property: "og:url", content: "/pricing" },
  ], links: [{ rel: "canonical", href: "/pricing" }] }),
  component: Pricing,
});

type Tier = {
  name: string;
  positioning: Record<Lang, string>;
  price: string;
  popular?: boolean;
  features: Record<Lang, string[]>;
};

const tiers: Tier[] = [
  {
    name: "Starter",
    positioning: { uz: "Bir sahifali marketing sayti uchun ideal.", en: "Best for a single-page marketing site.", ru: "Идеально для одностраничного маркетингового сайта." },
    price: "$—",
    features: {
      uz: ["1 landing sahifa", "Responsive dizayn", "2 ta qayta ko'rib chiqish", "5–7 kunda yetkazish", "14 kun qo'llab-quvvatlash"],
      en: ["1 landing page", "Responsive design", "2 rounds of revisions", "5–7 day delivery", "14 days support"],
      ru: ["1 landing-страница", "Адаптивный дизайн", "2 раунда правок", "Сдача за 5–7 дней", "14 дней поддержки"],
    },
  },
  {
    name: "Growth",
    positioning: { uz: "Kompaniya yoki shaxsiy brend uchun ko'p sahifali sayt.", en: "Multi-page company or personal brand site.", ru: "Многостраничный сайт для компании или личного бренда." },
    price: "$—",
    popular: true,
    features: {
      uz: ["5–7 sahifagacha", "Responsive va animatsiyalar", "3 ta qayta ko'rib chiqish", "2–3 haftada yetkazish", "30 kun qo'llab-quvvatlash", "Aloqa formasi"],
      en: ["Up to 5–7 pages", "Responsive + animations", "3 rounds of revisions", "2–3 week delivery", "30 days support", "Contact form"],
      ru: ["До 5–7 страниц", "Адаптивность + анимации", "3 раунда правок", "Сдача за 2–3 недели", "30 дней поддержки", "Форма обратной связи"],
    },
  },
  {
    name: "Premium",
    positioning: { uz: "Full-stack ilova va dashboard tizimlari uchun.", en: "Full-stack apps with backend or dashboard needs.", ru: "Full-stack приложения с backend или dashboard." },
    price: "$—",
    features: {
      uz: ["Cheksiz sahifalar", "Backend + API integratsiya", "Cheksiz qayta ko'rib chiqish", "4+ haftada yetkazish", "60 kun qo'llab-quvvatlash", "Autentifikatsiya", "Dashboard interfeys"],
      en: ["Unlimited pages", "Backend + API integration", "Unlimited revisions", "4+ week delivery", "60 days support", "Authentication", "Dashboard interface"],
      ru: ["Неограниченное число страниц", "Backend + API интеграция", "Неограниченные правки", "Сдача за 4+ недели", "60 дней поддержки", "Аутентификация", "Dashboard интерфейс"],
    },
  },
];

const compareRows: { label: Record<Lang, string>; values: (string | boolean)[] }[] = [
  { label: { uz: "Sahifalar soni", en: "Pages", ru: "Страницы" }, values: ["1", "5–7", "∞"] },
  { label: { uz: "Responsive", en: "Responsive", ru: "Адаптивность" }, values: [true, true, true] },
  { label: { uz: "Animatsiyalar", en: "Animations", ru: "Анимации" }, values: [false, true, true] },
  { label: { uz: "Backend integratsiya", en: "Backend integration", ru: "Backend интеграция" }, values: [false, false, true] },
  { label: { uz: "Qo'llab-quvvatlash", en: "Support period", ru: "Период поддержки" }, values: ["14d", "30d", "60d"] },
  { label: { uz: "Qayta ko'rib chiqish", en: "Revisions", ru: "Правки" }, values: ["2", "3", "∞"] },
];

function Pricing() {
  const { t, lang } = useI18n();
  return (
    <>
      <PageHeader kicker={t("pricing.kicker")} title={t("pricing.title")} sub={t("pricing.sub")} />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-3 gap-5">
        {tiers.map((tier) => (
          <div key={tier.name} className={`relative rounded-3xl p-8 border transition-all theme-transition ${tier.popular ? "bg-gradient-to-br from-primary to-primary-glow text-white border-primary shadow-2xl shadow-primary/30 md:-translate-y-4" : "bg-card border-border"}`}>
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white text-primary text-xs font-bold shadow-lg">{t("pricing.popular")}</div>
            )}
            <div className={`text-sm font-semibold uppercase tracking-wider ${tier.popular ? "text-white/80" : "text-primary"}`}>{tier.name}</div>
            <p className={`mt-1 text-sm ${tier.popular ? "text-white/85" : "text-muted-foreground"}`}>{tier.positioning[lang]}</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className={`display-xl text-5xl ${tier.popular ? "text-white" : "gradient-text"}`}>{tier.price}</span>
              <span className={tier.popular ? "text-white/70" : "text-muted-foreground"}>/{t("pricing.perProject")}</span>
            </div>
            <ul className="mt-6 space-y-2.5">
              {tier.features[lang].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className={`h-4 w-4 mt-0.5 shrink-0 ${tier.popular ? "text-white" : "text-primary"}`} />{f}
                </li>
              ))}
            </ul>
            <Link to="/contact" className={`mt-8 w-full inline-flex items-center justify-center px-5 py-3 rounded-full font-semibold transition-all ${tier.popular ? "bg-white text-primary hover:scale-105" : "btn-primary"}`}>
              {t("pricing.choose")}
            </Link>
          </div>
        ))}
      </section>

      {/* Comparison */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 section-pad">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{t("pricing.compare")}</h2>
        <div className="overflow-x-auto rounded-3xl border border-border bg-card theme-transition">
          <table className="w-full text-sm">
            <thead className="bg-primary/5">
              <tr>
                <th className="text-left p-4 font-semibold">Feature</th>
                {tiers.map((t) => <th key={t.name} className="p-4 font-semibold text-primary">{t.name}</th>)}
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row, i) => (
                <tr key={i} className="border-t border-border">
                  <td className="p-4 font-medium">{row.label[lang]}</td>
                  {row.values.map((v, j) => (
                    <td key={j} className="p-4 text-center">
                      {typeof v === "boolean" ? (v ? <Check className="inline h-4 w-4 text-primary" /> : <X className="inline h-4 w-4 text-muted-foreground/50" />) : v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 sm:px-8 pb-16">
        <div className="rounded-3xl p-8 md:p-10 text-center bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
          <h3 className="display-xl text-3xl md:text-4xl">{t("pricing.custom")}</h3>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">{t("pricing.custom.body")}</p>
          <Link to="/contact" className="mt-6 btn-primary">{t("nav.contact")}</Link>
        </div>
      </section>
    </>
  );
}
