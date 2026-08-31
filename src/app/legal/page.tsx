import { buildMetadata } from "@/lib/seo";
import { COMPANY_DETAILS, LEGAL_DISCLAIMER } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Legal disclaimer - Unmasked Career Lab",
  description: "Scope of services and disclaimer for Unmasked Career Lab consulting engagements.",
  path: "/legal",
});

export default function LegalPage() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-16 md:px-6">
      <h1 className="font-display text-5xl">Legal disclaimer</h1>
      <p className="mt-6 rounded-2xl border border-[var(--clay)]/35 bg-[var(--sand)] p-6 text-lg leading-relaxed">{LEGAL_DISCLAIMER}</p>
      <p className="mt-8 text-sm text-[var(--ink)]/80">
        {COMPANY_DETAILS.name} - {COMPANY_DETAILS.streetAddress}, {COMPANY_DETAILS.city}, {COMPANY_DETAILS.region} {COMPANY_DETAILS.postalCode}
      </p>
    </section>
  );
}
