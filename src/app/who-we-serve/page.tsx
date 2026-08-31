import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Associate clinician licensure - Unmasked Career Lab",
  description:
    "Support for associate clinicians, burned-out clinical leaders, and neurodivergent professionals navigating career growth without masking.",
  path: "/who-we-serve",
  keywords: ["associate clinician licensure", "clinical leadership coaching", "ADHD executive function coaching"],
});

export default function WhoWeServePage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
      <Reveal>
        <h1 className="font-display text-5xl leading-tight md:text-6xl">We serve the professionals the system forgets.</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--ink)]/85">
          You&apos;re a clinician, a leader, or a professional living with ADHD. You&apos;re good at what you do - and exhausted by the performance around it. Here&apos;s how we meet you where you are.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <Reveal className="rounded-2xl border border-[var(--teal)]/20 bg-[var(--bone)] p-6">
          <h2 className="font-display text-3xl">For associate clinicians (AMFT, ASW, APCC).</h2>
          <p className="mt-4 leading-relaxed">
            The hours don&apos;t track themselves. The board doesn&apos;t call you back. The supervision relationship gets complicated. We turn the licensure gauntlet into a clear roadmap - so you launch your career without dropping out of the profession you fought to enter.
          </p>
        </Reveal>
        <Reveal className="rounded-2xl border border-[var(--teal)]/20 bg-[var(--bone)] p-6" delay={0.1}>
          <h2 className="font-display text-3xl">For clinicians ready to lead.</h2>
          <p className="mt-4 leading-relaxed">
            You&apos;re done glorifying burnout. Whether you&apos;re pivoting your practice, mastering the business side of mental health, or stepping into leadership, we help you claim the authority you&apos;ve already earned - and the compensation that goes with it.
          </p>
        </Reveal>
        <Reveal className="rounded-2xl border border-[var(--teal)]/20 bg-[var(--bone)] p-6" delay={0.15}>
          <h2 className="font-display text-3xl">For ADHD and autistic professionals.</h2>
          <p className="mt-4 leading-relaxed">
            Time blindness. Task paralysis. The I worked for ten hours and have nothing to show for it spiral. We reject neurotypical time-management advice. Together we build dynamic, visual systems that protect your hyperfocus and use your intensity as a strength.
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-12 rounded-2xl bg-[var(--sand)] p-8 text-center">
        <p className="text-lg">Not sure which fit? Book an intro call and we&apos;ll figure it out together.</p>
        <Link href="/book" className="mt-4 inline-block rounded-full bg-[var(--clay)] px-6 py-3 text-sm font-semibold text-[var(--bone)]">
          Book an intro call
        </Link>
      </Reveal>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Who we serve",
          serviceType: "Career coaching for clinicians and neurodivergent professionals",
        }}
      />
    </section>
  );
}
