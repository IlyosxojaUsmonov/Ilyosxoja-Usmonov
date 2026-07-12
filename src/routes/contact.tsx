import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PageHeader } from "@/components/PageHeader";
import { useState } from "react";
import { Mail, Send, Github, ArrowRight, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact — Ilyosxoja Usmonov" },
    { name: "description", content: "Get in touch with Ilyosxoja Usmonov for frontend and full-stack web development projects." },
    { property: "og:title", content: "Contact — Ilyosxoja Usmonov" },
    { property: "og:description", content: "Available for freelance frontend and full-stack projects." },
    { property: "og:url", content: "/contact" },
  ], links: [{ rel: "canonical", href: "/contact" }] }),
  component: Contact,
});

function Contact() {
  const { t, lang } = useI18n();
  const [sent, setSent] = useState(false);

  const steps = [
    { uz: "24 soat ichida javob beraman", en: "I'll respond within 24 hours" },
    { uz: "Loyihani muhokama qilamiz", en: "We'll discuss your project" },
    { uz: "Taklif va vaqt jadvalini yuboraman", en: "You'll get a proposal & timeline" },
  ];

  return (
    <>
      <PageHeader kicker={lang === "uz" ? "Yozing" : "Say hello"} title={t("contact.title")} sub={t("contact.sub")}>
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-700 text-sm font-semibold border border-green-500/20">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" /> {t("contact.available")}
        </div>
      </PageHeader>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-5 gap-8">
        {/* Contact info */}
        <div className="lg:col-span-2 space-y-4">
          <a href="mailto:frontend.usmonov@gmail.com" className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all">
            <div className="grid place-items-center h-12 w-12 rounded-xl bg-primary/10 text-primary"><Mail className="h-5 w-5" /></div>
            <div className="min-w-0">
              <div className="text-xs text-muted-foreground">Email</div>
              <div className="font-semibold truncate">frontend.usmonov@gmail.com</div>
            </div>
          </a>
          <a href="https://t.me/ilyosxoja_usmonov" className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all">
            <div className="grid place-items-center h-12 w-12 rounded-xl bg-primary/10 text-primary"><Send className="h-5 w-5" /></div>
            <div>
              <div className="text-xs text-muted-foreground">Telegram</div>
              <div className="font-semibold">@ilyosxoja_usmonov</div>
            </div>
          </a>
          <a href="https://t.me/usmonov_stack" className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all">
            <div className="grid place-items-center h-12 w-12 rounded-xl bg-primary/10 text-primary"><MessageSquare className="h-5 w-5" /></div>
            <div>
              <div className="text-xs text-muted-foreground">{lang === "uz" ? "Telegram kanal" : "Telegram channel"}</div>
              <div className="font-semibold">@usmonov_stack</div>
            </div>
          </a>
          <a href="https://github.com/IlyosxojaUsmonov" className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all">
            <div className="grid place-items-center h-12 w-12 rounded-xl bg-primary/10 text-primary"><Github className="h-5 w-5" /></div>
            <div>
              <div className="text-xs text-muted-foreground">GitHub</div>
              <div className="font-semibold">IlyosxojaUsmonov</div>
            </div>
          </a>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl bg-white border border-border p-6 md:p-8 space-y-4"
          >
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-primary">{t("contact.form.name")}</label>
              <input required className="mt-2 w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-primary">{t("contact.form.email")}</label>
              <input required type="email" className="mt-2 w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-primary">{t("contact.form.message")}</label>
              <textarea required rows={5} className="mt-2 w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none" />
            </div>
            <button type="submit" className="btn-primary w-full">
              {t("contact.form.send")} <ArrowRight className="h-4 w-4" />
            </button>
            {sent && <div className="text-sm text-green-700 bg-green-500/10 border border-green-500/20 rounded-xl p-3 text-center">{t("contact.form.sent")}</div>}
          </form>
        </div>
      </section>

      {/* What happens next */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 section-pad">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{t("contact.next")}</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="relative rounded-3xl p-6 bg-white border border-border">
              <div className="display-xl text-4xl gradient-text">0{i + 1}</div>
              <div className="mt-2 font-semibold">{s[lang]}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-[2.5rem] p-10 md:p-14 text-center" style={{ background: "linear-gradient(120deg, var(--primary), var(--primary-glow))" }}>
          <p className="display-xl text-3xl md:text-4xl text-white">{t("contact.closing")}</p>
        </div>
      </section>
    </>
  );
}
