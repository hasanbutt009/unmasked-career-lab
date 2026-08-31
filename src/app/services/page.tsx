import Link from "next/link";
import Image from "next/image";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { buildMetadata } from "@/lib/seo";
import { IMAGES } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Executive coaching for clinicians - Unmasked Career Lab",
  description:
    "Transparent career coaching pricing for pre-licensed clinicians, clinical leaders, and ADHD professionals.",
  path: "/services",
  keywords: ["executive coaching for clinicians", "ADHD coaching for professionals", "career coaching pricing"],
});

const services = [
  {
    name: "Licensure & Associate Clinical Services",
    price: "from $200",
    audience: "Pre-licensed Associate Clinicians (AMFT, ASW, APCC) and early-career mental-health professionals.",
    included:
      "State board licensure roadmapping, hours-tracking strategy, board exam prep, supervision navigation, post-licensure career design.",
    why: "Bureaucratic friction during licensure causes early-career drop-off. Structured pathways to launch a clinical career.",
    image: "https://images.squarespace-cdn.com/content/v1/69d4830ea379e80d337987ea/da3051d4-03d8-48b7-aec6-e1607c6c1389/2.png",
  },
  {
    name: "Executive Leadership Program",
    price: "from $250",
    audience: "Mid-level to C-suite executives, healthcare directors, transitioning clinicians.",
    included:
      "Strategic career mapping, executive branding, 1:1 leadership coaching, interview and negotiation strategy, The Unmasked Method frameworks.",
    why: "Traditional career advice ignores the nuances of clinical expertise plus authentic leadership. Bridges technical mastery with executive presence.",
    image: "https://images.squarespace-cdn.com/content/v1/69d4830ea379e80d337987ea/ba8e2286-163f-44c2-b5e4-74ded05479bf/33.png",
  },
  {
    name: "PsychoEd Workshops & Resources",
    price: "$29-$99 digital toolkits / $150 per attendee",
    audience: "Enterprise teams, academic programs, self-directed learners.",
    included:
      "Digital toolkits, asynchronous learning modules, live professional-development workshops, continuing-education content.",
    why: "Democratize high-impact clinical and career frameworks at scale.",
    image: IMAGES.mobileLogo,
  },
  {
    name: "Neurodivergent & Skill-Affirmative Coaching",
    price: "$950 (4-session package)",
    audience: "ADHD professionals, autistic leaders, neurodivergent executives.",
    included:
      "Executive-functioning toolkits, workplace-accommodations consulting, unmasking strategies, strength-aligned workflow design.",
    why: "Standard corporate environments penalize non-linear thinkers. Build sustainable systems that work with cognitive strengths, not against them.",
    image: "https://images.squarespace-cdn.com/content/v1/69d4830ea379e80d337987ea/43512d3a-1333-4699-b6b4-2d6ee2c968e8/1.png",
  },
];

export default function ServicesPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
      <Reveal>
        <h1 className="font-display text-5xl leading-tight md:text-6xl">Coaching built for every stage of your clinical career.</h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed">
          From your first licensure form to the C-suite - and everywhere your ADHD brain takes you in between. No vague packages. No hidden costs. Just clear, honest coaching that meets you where you are.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {services.map((service, index) => (
          <Reveal key={service.name} className="rounded-3xl border border-[var(--teal)]/20 bg-[var(--bone)] p-6" delay={index * 0.05}>
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-display text-3xl leading-tight">{service.name}</h2>
              <Image src={service.image} alt={`${service.name} icon`} width={56} height={56} className="h-14 w-14 object-contain" />
            </div>
            <p className="mt-3 font-mono text-sm uppercase tracking-[0.12em] text-[var(--clay)]">{service.price}</p>
            <p className="mt-4 text-sm leading-relaxed">
              <strong>Target audience:</strong> {service.audience}
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              <strong>Included:</strong> {service.included}
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              <strong>Why it exists:</strong> {service.why}
            </p>
            <Link href="/book" className="mt-5 inline-block rounded-full border border-[var(--teal)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--teal)]">
              Book an intro call
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 rounded-2xl bg-[var(--sand)] p-8 text-center">
        <p className="text-lg">Not sure which service fits? Book an intro call and we&apos;ll point you to the right one - no pressure, no obligation.</p>
      </Reveal>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((service, index) => ({
            "@type": "Service",
            position: index + 1,
            name: service.name,
            offers: {
              "@type": "Offer",
              priceSpecification: service.price,
            },
          })),
        }}
      />
    </section>
  );
}
