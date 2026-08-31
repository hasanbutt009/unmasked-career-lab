import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { buildMetadata } from "@/lib/seo";
import { IMAGES, LEGAL_DISCLAIMER, SOCIAL_LINKS } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Tyler Suran - Unmasked Career Lab",
  description:
    "Anti-oppressive coaching for mental-health professionals and neurodivergent leaders by Unmasked Career Lab.",
  path: "/about",
  keywords: ["Tyler Suran", "unmasked career lab", "anti-oppressive coaching"],
});

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
      <Reveal>
        <h1 className="font-display text-5xl leading-tight md:text-6xl">
          We built this for the professionals who were told to change who they are to succeed.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--ink)]/85">
          Most career advice tells you burnout and imposter syndrome are your fault - something you need to fix. We know better. Unmasked Career Lab exists to help clinical experts and high-impact professionals step into leadership without sacrificing their identity, their health, or their values.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {[
          "1. Authenticity over masking. True authority comes from leading as your full self - not shrinking to fit someone else&apos;s script.",
          "2. Read the power dynamics. You can&apos;t navigate a game if you don&apos;t know the implicit rules.",
          "3. Burnout is systemic, not a badge of honor. Your well-being is a requirement for long-term success, not a luxury.",
          "4. Your clinical background is your superpower. We translate your deep mastery into the language of business and strategy.",
          "5. Human-centered leadership. High standards and deep emotional safety can - and must - coexist.",
          "6. No cliches. No toxic positivity. Real-world results that align with your ethics.",
        ].map((value, index) => (
          <Reveal key={value} className="rounded-2xl border border-[var(--teal)]/20 bg-[var(--bone)] p-5" delay={0.04 * index}>
            <p className="leading-relaxed">{value}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 rounded-2xl border border-[var(--clay)]/35 bg-[var(--sand)] p-6 text-sm leading-relaxed">
        <strong>Legal disclaimer:</strong> {LEGAL_DISCLAIMER}
      </Reveal>

      <Reveal className="mt-12 grid gap-6 rounded-3xl border border-[var(--teal)]/25 bg-[var(--bone)] p-6 md:grid-cols-[0.8fr_1.2fr]">
        <div className="relative overflow-hidden rounded-2xl">
          {/* TODO: swap after Tyler photoshoot Monday */}
          <Image src={IMAGES.portrait} alt="Tyler Suran portrait" width={800} height={1000} className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--teal)]">Founder</p>
          <h2 className="mt-2 font-display text-4xl">Tyler Suran, MA, APCC</h2>
          <p className="mt-4 leading-relaxed">
            Founder of Unmasked Career Lab. A first-generation professional, neurodivergent clinician, and PhD candidate in Counselor Education & Supervision, Tyler has launched, scaled, and directed high-acuity clinical operations (PHP/IOP) across Southern California, and worked on the front lines of dual-diagnosis care at Skid Row.
          </p>
          <p className="mt-4 border-l-2 border-[var(--clay)] pl-4 font-display text-2xl leading-snug">
            &quot;Breaking through invisible ceilings is exhausting when the system wasn&apos;t built for you. My mission is to clear the path for clinicians like me - transforming systemic hurdles into strategic power without sacrificing identity or well-being.&quot;
          </p>
          <Link href={SOCIAL_LINKS.founderBio} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-sm font-semibold text-[var(--teal)] underline underline-offset-4">
            Full bio
          </Link>
        </div>
      </Reveal>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Tyler Suran",
          honorificSuffix: "MA, APCC",
          jobTitle: "Founder, Unmasked Career Lab",
          url: SOCIAL_LINKS.linkedinPersonal,
        }}
      />
    </section>
  );
}
