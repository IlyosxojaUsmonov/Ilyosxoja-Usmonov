import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Full-screen intro loader: user's photo spins inside a gradient ring,
 * name reveals underneath. Shown once on initial mount.
 */
export function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background overflow-hidden"
          style={{ perspective: 1200 }}
        >
          {/* soft animated background orbs */}
          <motion.div
            aria-hidden
            className="absolute -top-32 -left-32 h-96 w-96 rounded-full"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--primary) 40%, transparent), transparent 70%)",
              filter: "blur(40px)",
            }}
            animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--primary-glow, #60a5fa) 40%, transparent), transparent 70%)",
              filter: "blur(40px)",
            }}
            animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative flex flex-col items-center">
            {/* Rotating gradient ring around the photo */}
            <div className="relative" style={{ width: 200, height: 200 }}>
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, var(--primary), var(--primary-glow, #60a5fa), transparent 70%, var(--primary))",
                  filter: "blur(1px)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
              />
              {/* Outer dashed ring counter-rotating */}
              <motion.div
                className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/40"
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              {/* Inner white gap */}
              <div
                className="absolute rounded-full bg-background"
                style={{ inset: 8 }}
              />
              {/* Photo */}
              <motion.img
                src="/ilyosxoja.png"
                alt="Ilyosxoja Usmonov"
                className="absolute rounded-full object-cover shadow-2xl shadow-primary/40"
                style={{ inset: 14 }}
                initial={{ scale: 0.6, opacity: 0, rotate: -20 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
              {/* Orbiting dot */}
              <motion.div
                className="absolute left-1/2 top-1/2 h-3 w-3 -mt-1.5 -ml-1.5 rounded-full bg-primary shadow-[0_0_20px_var(--primary)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "50% 110px" }}
              />
            </div>

            {/* Name reveal */}
            <motion.div
              className="mt-8 text-center"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.5 } },
              }}
            >
              <div className="flex justify-center gap-1 font-display font-bold text-3xl md:text-4xl tracking-tight">
                {"Ilyosxoja Usmonov".split("").map((ch, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { y: 24, opacity: 0 },
                      show: { y: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className={ch === " " ? "w-2" : "bg-gradient-to-b from-foreground to-primary bg-clip-text text-transparent"}
                  >
                    {ch === " " ? "\u00A0" : ch}
                  </motion.span>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="mt-2 text-xs uppercase tracking-[0.35em] text-primary/80 font-semibold"
              >
                Junior yangi boshlovchi
              </motion.div>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="mt-6 h-1 w-56 rounded-full bg-primary/10 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-primary-glow"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.1, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
