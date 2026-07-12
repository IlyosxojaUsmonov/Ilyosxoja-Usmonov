import { motion, AnimatePresence } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

/**
 * 3D-style page transition wrapper.
 * Uses AnimatePresence keyed by pathname to animate route changes:
 * new page swoops in with rotateX + translateY, old page fades/tilts out.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div style={{ perspective: 1400 }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 40, rotateX: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, rotateX: 6, scale: 0.98 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformStyle: "preserve-3d", transformOrigin: "top center" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
