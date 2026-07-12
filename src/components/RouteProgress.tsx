import { motion, AnimatePresence } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";

/**
 * Top progress bar that shows while the router is transitioning between pages.
 */
export function RouteProgress() {
  const isLoading = useRouterState({
    select: (s) => s.isLoading || s.isTransitioning,
  });

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="rp"
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 0.85, opacity: 1 }}
          exit={{ scaleX: 1, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            transformOrigin: "left center",
            background:
              "linear-gradient(90deg, var(--primary), var(--primary-glow, #60a5fa), var(--primary))",
          }}
          className="fixed top-0 left-0 right-0 z-[90] h-[3px] shadow-[0_0_10px_var(--primary)]"
        />
      )}
    </AnimatePresence>
  );
}
