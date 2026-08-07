import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PageHeader } from "@/components/PageHeader";
import { useState } from "react";
import { Mail, Send, Github, ArrowRight, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ilyosxoja Usmonov" },
      {
        name: "description",
        content:
          "Get in touch with Ilyosxoja Usmonov for frontend and full-stack web development projects.",
      },
      { property: "og:title", content: "Contact — Ilyosxoja Usmonov" },
      {
        property: "og:description",
        content: "Available for freelance frontend and full-stack projects.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
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
      <PageHeader
        kicker={lang === "uz" ? "Yozing" : "Say hello"}
        title={t("contact.title")}
        sub={t("contact.sub")}
      >
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-700 text-sm font-semibold border border-green-500/20">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />{" "}
          {t("contact.available")}
        </div>
      </PageHeader>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-5 gap-8">
        {/* Contact info */}
        <div className="lg:col-span-2 space-y-4">
          <a
            href="mailto:frontend.usmonov@gmail.com"
            className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all"
          >
            <div className="grid place-items-center h-12 w-12 rounded-xl bg-primary/10 text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-muted-foreground">Email</div>
              <div className="font-semibold truncate">frontend.usmonov@gmail.com</div>
            </div>
          </a>
          <a
            href="https://t.me/ilyosxoja_usmonov"
            className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all"
          >
            <div className="grid place-items-center h-12 w-12 rounded-xl bg-primary/10 text-primary">
              <Send className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Telegram</div>
              <div className="font-semibold">@ilyosxoja_usmonov</div>
            </div>
          </a>
          <a
            href="https://t.me/usmonov_stack"
            className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all"
          >
            <div className="grid place-items-center h-12 w-12 rounded-xl bg-primary/10 text-primary">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">
                {lang === "uz" ? "Telegram kanal" : "Telegram channel"}
              </div>
              <div className="font-semibold">@usmonov_stack</div>
            </div>
          </a>
          <a
            href="https://github.com/IlyosxojaUsmonov"
            className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all"
          >
            <div className="grid place-items-center h-12 w-12 rounded-xl bg-primary/10 text-primary">
              <Github className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">GitHub</div>
              <div className="font-semibold">IlyosxojaUsmonov</div>
            </div>
          </a>
        </div>
      </section>

      {/* What happens next */}
    </>
  );
}
