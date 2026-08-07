import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

/**
 * 3D tilt on hover. Wrap any element (image, card) to get a subtle
 * perspective tilt that follows the cursor.
 */
export function Tilt3D({
  children,
  className,
  style,
  max = 12,
  glare = true,
  disabled = false,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  max?: number;
  glare?: boolean;
  disabled?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), { stiffness: 200, damping: 20 });
  const gx = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const gy = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);
  const glareBackground = useTransform(
    [gx, gy],
    ([lx, ly]) => `radial-gradient(circle at ${lx} ${ly}, rgba(255,255,255,0.35), transparent 55%)`,
  );

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (disabled) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    if (disabled) return;
    x.set(0);
    y.set(0);
  }

  useEffect(() => {
    if (disabled) {
      x.set(0);
      y.set(0);
    }
  }, [disabled, x, y]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
        ...style,
      }}
    >
      <motion.div
        style={{
          rotateX: disabled ? 0 : rx,
          rotateY: disabled ? 0 : ry,
          transformStyle: "preserve-3d",
          position: "relative",
        }}
      >
        {children}
        {glare && (
          <motion.div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              borderRadius: "inherit",
              background: glareBackground,
              mixBlendMode: "overlay",
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
