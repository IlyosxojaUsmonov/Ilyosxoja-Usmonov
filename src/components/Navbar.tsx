import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n, LANGS } from "@/lib/i18n";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { to: "/", key: "nav.home" as const },
  { to: "/about", key: "nav.about" as const },
  { to: "/projects", key: "nav.projects" as const },
  { to: "/services", key: "nav.services" as const },
  { to: "/pricing", key: "nav.pricing" as const },
  { to: "/blog", key: "nav.blog" as const },
  { to: "/resume", key: "nav.resume" as const },
  { to: "/contact", key: "nav.contact" as const },
];

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 surface-glass border-b border-border/60 theme-transition">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg shrink-0">
          <img
            src="/ilyosxoja.png"
            alt="Ilyosxoja Usmonov"
            className="h-9 w-9 rounded-xl object-cover shadow-lg shadow-primary/30"
          />
          <span className="hidden sm:inline">Ilyosxoja Usmonov</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary bg-primary/10" }}
              className="px-3 py-2 rounded-full text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
            >
              {t(l.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="flex items-center rounded-full border border-border p-0.5 text-xs font-semibold">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full transition-colors ${lang === l ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-primary"}`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button className="lg:hidden p-2 rounded-lg hover:bg-primary/10" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="mx-auto max-w-7xl px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary bg-primary/10" }}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-foreground/80 hover:bg-primary/5"
              >
                {t(l.key)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
