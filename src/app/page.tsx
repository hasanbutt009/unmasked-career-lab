import Link from "next/link";
import { MaskHero } from "@/components/mask-hero";
import { OrganicDivider } from "@/components/organic-divider";
import { QuoteSwipe } from "@/components/quote-swipe";
import { Reveal } from "@/components/reveal";
import { ToolkitForm } from "@/components/toolkit-form";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Career coaching for mental health professionals - Unmasked Career Lab",
  description:
    "Career coaching for mental-health professionals and neurodivergent leaders. Name the hidden curriculum, stop masking, and move forward unmasked.",
  path: "/",
  keywords: ["career coaching for mental health professionals", "neurodivergent career coaching", "therapist burnout"],
});

export default function Home() {
  return (
    <>
      <MaskHero />
      <OrganicDivider />

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 md:grid-cols-[1.4fr_0.6fr] md:px-6">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            You weren&apos;t failing. You were fighting a system that was never built for you.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--ink)]/85">
            Grad school taught you the clinical work. It never taught you the hidden curriculum - the unwritten rules, the unspoken power dynamics, the hoops nobody warns you about. So you learned to mask. To code-switch. To perform an exhausted version of yourself until the burnout felt normal.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[var(--ink)]/85">
            Nearly half of practicing mental-health professionals experience severe clinical burnout. You are not the problem. The system is. And we help you move through it - unmasked.
          </p>
        </Reveal>
        <Reveal className="rounded-2xl border border-[var(--teal)]/20 bg-[var(--sand)] p-6" delay={0.1}>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--teal)]">Burnout data point</p>
          <p className="mt-2 font-display text-6xl text-[var(--clay)]">48.2%</p>
          <p className="mt-3 text-sm">of practicing mental-health professionals report severe clinical burnout.</p>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl">Who we serve</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            "Pre-licensed clinicians. Licensure is a maze built on friction. Get your hours tracked, your board exam mapped, and a clear path from associate to licensed - without burning out on the way. (Licensure & Associate Services)",
            "Mid-career clinicians. You have mastered the clinical work. Now the business side - leadership, positioning, negotiating your worth - feels like a different language. We translate. (Executive Leadership Program)",
            "Neurodivergent & ADHD professionals. Just use a planner has never worked for you - because your brain runs on an interest-based nervous system, not a to-do list. Build systems that work with you, not against you. (Neurodivergent Coaching)",
          ].map((card, index) => (
            <Reveal key={card} className="rounded-2xl border border-[var(--teal)]/20 bg-[var(--bone)] p-6" delay={0.07 * index}>
              <p className="text-base leading-relaxed text-[var(--ink)]/90">{card}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6">
        <QuoteSwipe>
          <h2 className="font-display text-4xl md:text-5xl">There&apos;s a method to dropping the mask.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed">
            Most coaching hands you a script for someone else&apos;s life. The Unmasked Method starts from who you already are - your clinical depth, your neurodivergence, your values - and builds outward.
          </p>
          <Link href="/the-unmasked-method" className="mt-6 inline-block rounded-full border border-[var(--teal)] px-5 py-3 text-sm font-semibold text-[var(--teal)]">
            See how it works
          </Link>
        </QuoteSwipe>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6">
        <Reveal className="rounded-2xl border border-[var(--clay)]/30 bg-[var(--bone)] p-6">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--teal)]">Social proof</p>
          <p className="mt-3 text-base md:text-lg">
            <strong>MA, APCC</strong> - <strong>PhD Candidate, Counselor Education & Supervision</strong> - <strong>Former PHP/IOP Director</strong> - <strong>Certified Drug & Alcohol Counselor</strong>
          </p>
        </Reveal>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-7 px-4 py-14 md:grid-cols-2 md:px-6">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl">Get &quot;The Unmasked Career&quot; - free.</h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--ink)]/85">
            A toolkit for neurodivergent professionals who are done shrinking to fit.
          </p>
          <div className="mt-6 max-w-xl">
            <ToolkitForm />
          </div>
        </Reveal>
        <Reveal className="rounded-3xl border border-[var(--teal)]/20 bg-gradient-to-br from-[var(--teal)] to-[#194745] p-8 text-[var(--bone)]" delay={0.1}>
          <p className="font-display text-3xl">Video coming soon - stay tuned.</p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--bone)]/90">
            Tyler has a channel placeholder only. We are keeping this space intentional until launch-ready video is available.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-8 pt-12 md:px-6">
        <Reveal className="rounded-2xl border border-[var(--clay)]/25 bg-[var(--sand)] p-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl">Ready to stop folding in?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg">
            Book an intro call. Come as you are - messy, imperfect, unmasked.
          </p>
          <Link href="/book" className="mt-6 inline-block rounded-full bg-[var(--clay)] px-6 py-3 text-sm font-semibold text-[var(--bone)]">
            Book a call
          </Link>
        </Reveal>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Career coaching for mental health professionals",
          provider: {
            "@type": "ProfessionalService",
            name: "Unmasked Career Lab",
            url: SITE_URL,
          },
          areaServed: "United States",
        }}
      />
    </>
  );
}
