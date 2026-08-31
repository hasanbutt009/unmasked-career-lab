"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type QuoteSwipeProps = {
  children: ReactNode;
};

export function QuoteSwipe({ children }: QuoteSwipeProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className="rounded-2xl bg-[var(--sand)] p-6 md:p-8">{children}</div>;
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--sand)] p-6 md:p-8">
      <motion.span
        aria-hidden
        className="absolute inset-0 origin-left bg-[var(--clay)]/25"
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
