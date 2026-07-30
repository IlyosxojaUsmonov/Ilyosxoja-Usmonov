import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTheme } from "@/lib/theme";
import { useI18n } from "@/lib/i18n";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useI18n();
  const [pulse, setPulse] = useState(false);
  const isDark = theme === "dark";

  const handleToggle = () => {
    setPulse(true);
    toggleTheme();
    window.setTimeout(() => setPulse(false), 500);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={t("theme.toggle")}
      title={isDark ? t("theme.light") : t("theme.dark")}
      className="relative grid place-items-center h-9 w-9 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-colors overflow-hidden shrink-0"
    >
      <AnimatePresence>
        {pulse && (
          <motion.span
            key="pulse"
            initial={{ scale: 0.6, opacity: 0.6 }}
            animate={{ scale: 2.2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 rounded-full bg-primary/30 pointer-events-none"
          />
        )}
      </AnimatePresence>
      <motion.span
        initial={false}
        animate={{
          rotate: isDark ? 90 : 0,
          scale: isDark ? 0 : 1,
          opacity: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute"
      >
        <Sun className="h-4 w-4 text-primary" />
      </motion.span>
      <motion.span
        initial={false}
        animate={{
          rotate: isDark ? 0 : -90,
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute"
      >
        <Moon className="h-4 w-4 text-primary" />
      </motion.span>
    </button>
  );
}
