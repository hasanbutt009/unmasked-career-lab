import Link from "next/link";
import { BookForm } from "@/components/book-form";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { buildMetadata } from "@/lib/seo";
import { LEGAL_DISCLAIMER } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Book a call - Unmasked Career Lab",
  description:
    "Book a low-pressure intro call with Unmasked Career Lab and review FAQs for clinicians and neurodivergent leaders.",
  path: "/book",
  keywords: ["book career coaching", "clinical leadership coaching", "ADHD coaching for professionals"],
});

export default function BookPage() {
  const faqs = [
    {
      q: "Is this therapy?",
      a: "No. This is professional strategy and operational consulting - not clinical mental-health treatment. If you need a therapist, we can help you understand the difference.",
    },
    {
      q: "Who is this for?",
      a: "Mental-health professionals and neurodivergent leaders at any career stage - pre-licensed, mid-career, or executive.",
    },
    {
      q: "What does an intro call look like?",
      a: "A low-pressure conversation about where you are, what is in your way, and whether we are the right fit. No pitch, no pressure.",
    },
    {
      q: "How much does it cost?",
      a: "Transparent pricing, no hidden fees. See our Services page. We will always give you a clear quote before you commit.",
    },
    {
      q: "How do I book?",
      a: "Use the scheduler card below, or reach out through the contact form. We respond within one business day.",
    },
    {
      q: "What if I have ADHD and I have been burned by productivity hacks?",
      a: "Good - you are exactly who this was built for. We reject neurotypical advice and design around how your brain actually works.",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
      <Reveal>
        <h1 className="font-display text-5xl leading-tight md:text-6xl">Book your intro call.</h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--ink)]/85">
          A low-pressure conversation about where you are, what&apos;s in your way, and whether we&apos;re the right fit.
        </p>
      </Reveal>

      <Reveal className="mt-8 rounded-2xl border-2 border-[var(--clay)] bg-[var(--bone)] p-6">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--teal)]">Prominent legal scope</p>
        <p className="mt-3 text-base leading-relaxed">
          <strong>{LEGAL_DISCLAIMER}</strong>
        </p>
      </Reveal>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <Reveal className="rounded-3xl border border-[var(--teal)]/25 bg-gradient-to-br from-[var(--teal)] to-[#153f3d] p-8 text-[var(--bone)]">
          <p className="font-mono text-xs uppercase tracking-[0.14em]">Demo scheduler</p>
          <h2 className="mt-3 font-display text-4xl">Book an intro call</h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--bone)]/90">
            Calendly-style placeholder for this demo. Connect your real scheduler before launch.
          </p>
          <Link href="mailto:hello@unmaskedcareerlab.org" className="mt-6 inline-block rounded-full bg-[var(--clay)] px-5 py-3 text-sm font-semibold text-[var(--bone)]">
            Email to book now
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <BookForm />
        </Reveal>
      </div>

      <section className="mt-14">
        <Reveal>
          <h2 className="font-display text-4xl">FAQ</h2>
        </Reveal>
        <div className="mt-6 space-y-3">
          {faqs.map((faq, index) => (
            <Reveal key={faq.q} className="rounded-2xl border border-[var(--teal)]/20 bg-[var(--bone)] p-5" delay={0.03 * index}>
              <h3 className="text-lg font-semibold">{faq.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink)]/85">{faq.a}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }}
      />
    </section>
  );
}
