import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { QuoteSwipe } from "@/components/quote-swipe";
import { Reveal } from "@/components/reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Unmasking at work - Unmasked Career Lab",
  description:
    "The Unmasked Method is an anti-burnout framework for neurodivergent and clinical professionals ready to stop performing and start leading.",
  path: "/the-unmasked-method",
  keywords: ["unmasking at work", "neurodivergent career coaching", "anti-burnout framework"],
});

export default function MethodPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
      <Reveal>
        <h1 className="font-display text-5xl leading-tight md:text-6xl">The Unmasked Method.</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--ink)]/85">
          Stop performing a version of yourself that&apos;s quietly burning you out. The Unmasked Method is a framework for building a career on your actual strengths - your clinical depth, your neurodivergence, your values - instead of shrinking them to fit someone else&apos;s script.
        </p>
      </Reveal>

      <QuoteSwipe>
        <p className="font-display text-3xl md:text-4xl">Why just try harder fails</p>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed">
          If your brain runs on an interest-based nervous system, rigid career templates become a burnout trap. This method is designed to account for that instead of punishing it.
        </p>
      </QuoteSwipe>

      {/* TODO: Client confirmation required for exact Unmasked Method step names and philosophy. */}
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {[
          ["Step 1 - See the System.", "Read the power dynamics and unwritten rules so you stop taking broken-system failures personally."],
          ["Step 2 - Drop the Mask.", "Identify where you&apos;re masking and code-switching, and what it&apos;s costing you."],
          ["Step 3 - Build Your Map.", "A concrete, practical plan - not a vague vision board - for the career you want with longevity."],
          ["Step 4 - Lead Unmasked.", "Show up as your full, authentic self and negotiate for the power, pay, and boundaries you&apos;ve earned."],
        ].map(([title, body], index) => (
          <Reveal key={title} className="rounded-2xl border border-[var(--teal)]/20 bg-[var(--bone)] p-6" delay={index * 0.05}>
            <h2 className="font-display text-3xl">{title}</h2>
            <p className="mt-3 leading-relaxed">{body}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 rounded-2xl border border-[var(--clay)]/25 bg-[var(--sand)] p-8">
        <h2 className="font-display text-3xl">Outcomes</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Walk away with: clarity on the system you&apos;re in, a plan that matches your brain and your values, and the confidence to stop folding in.
        </p>
        <Link href="/book" className="mt-5 inline-block rounded-full bg-[var(--clay)] px-6 py-3 text-sm font-semibold text-[var(--bone)]">
          Book an intro call
        </Link>
      </Reveal>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "The Unmasked Method",
          serviceType: "Anti-burnout framework for clinicians and neurodivergent professionals",
        }}
      />
    </section>
  );
}
