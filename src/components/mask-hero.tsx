"use client";

import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { IMAGES } from "@/lib/site";

export function MaskHero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !imageRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section className="mx-auto mt-8 grid w-full max-w-6xl gap-10 px-4 pb-20 pt-12 md:grid-cols-[1.2fr_1fr] md:gap-14 md:px-6 md:pt-16">
      <div className="space-y-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--teal)]">UNMASKED CAREER LAB</p>
        <div className="space-y-4">
          <motion.h1
            className="font-display text-[clamp(2.75rem,6vw,5.3rem)] leading-[0.9] text-[var(--ink)]"
            initial={reducedMotion ? false : { clipPath: "inset(0 100% 0 0)" }}
            animate={reducedMotion ? undefined : { clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          >
            Drop the Mask.
          </motion.h1>
          <p className="max-w-xl text-lg leading-relaxed text-[var(--ink)]/90">
            Career coaching for mental-health professionals and neurodivergent leaders - advance your career without sacrificing who you are.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/book" className="rounded-full bg-[var(--clay)] px-5 py-3 text-sm font-semibold text-[var(--bone)]">
            Book an intro call
          </Link>
          <Link href="/the-unmasked-method" className="rounded-full border border-[var(--teal)] px-5 py-3 text-sm font-semibold text-[var(--teal)]">
            Explore The Method
          </Link>
        </div>
      </div>

      <div ref={imageRef} className="relative overflow-hidden rounded-3xl border border-[var(--sand)] bg-[var(--sand)]">
        {/* TODO: swap after Tyler photoshoot Monday */}
        <Image
          src={IMAGES.heroOffice}
          alt="Tyler Suran presenting in an office setting"
          width={900}
          height={1200}
          priority
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
