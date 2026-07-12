import { Link } from "@tanstack/react-router";
import { Mail, Send, Github } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="mt-32 border-t border-border/60 bg-[color-mix(in_oklab,white_85%,transparent)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-display font-bold text-2xl">Ilyosxoja Usmonov</div>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">{t("footer.tag")}</p>
          <div className="mt-4 flex gap-3">
            <a href="mailto:frontend.usmonov@gmail.com" className="grid place-items-center h-10 w-10 rounded-full border border-border hover:border-primary hover:text-primary transition-colors" aria-label="Email"><Mail className="h-4 w-4" /></a>
            <a href="https://t.me/ilyosxoja_usmonov" className="grid place-items-center h-10 w-10 rounded-full border border-border hover:border-primary hover:text-primary transition-colors" aria-label="Telegram"><Send className="h-4 w-4" /></a>
            <a href="https://github.com/IlyosxojaUsmonov" className="grid place-items-center h-10 w-10 rounded-full border border-border hover:border-primary hover:text-primary transition-colors" aria-label="GitHub"><Github className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">{t("nav.home")}</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">{t("nav.about")}</Link></li>
            <li><Link to="/projects" className="hover:text-primary">{t("nav.projects")}</Link></li>
            <li><Link to="/services" className="hover:text-primary">{t("nav.services")}</Link></li>
            <li><Link to="/pricing" className="hover:text-primary">{t("nav.pricing")}</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">{t("nav.contact")}</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>frontend.usmonov@gmail.com</li>
            <li>@ilyosxoja_usmonov</li>
            <li>@usmonov_stack</li>
            <li><a className="hover:text-primary" href="https://github.com/IlyosxojaUsmonov">github.com/IlyosxojaUsmonov</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ilyosxoja Usmonov · {t("footer.rights")}
      </div>
    </footer>
  );
}
