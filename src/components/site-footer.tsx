import Link from "next/link";
import { COMPANY_DETAILS, LEGAL_DISCLAIMER, SOCIAL_LINKS } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[var(--sand)] bg-[var(--sand)]/45">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:px-6">
        <div className="space-y-3">
          <p className="font-display text-2xl text-[var(--ink)]">Drop the Mask.</p>
          <p className="max-w-md text-sm text-[var(--ink)]/80">
            {COMPANY_DETAILS.name} - {COMPANY_DETAILS.streetAddress}, {COMPANY_DETAILS.city}, California {COMPANY_DETAILS.postalCode}
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href={SOCIAL_LINKS.linkedinCompany} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
              LinkedIn
            </Link>
            <Link href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
              Instagram
            </Link>
            <Link href="/legal" className="underline-offset-4 hover:underline">
              Legal disclaimer
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--teal)]">Newsletter signup</p>
          <form className="flex gap-2" aria-label="Newsletter signup form">
            <label htmlFor="newsletter-email" className="sr-only">
              Email
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-full border border-[var(--teal)]/30 bg-[var(--bone)] px-4 py-2 text-sm"
            />
            <button type="submit" className="rounded-full bg-[var(--teal)] px-4 py-2 text-sm font-semibold text-[var(--bone)]">
              Join
            </button>
          </form>
          <p className="rounded-xl border border-[var(--clay)]/35 bg-[var(--bone)] p-4 text-sm leading-relaxed text-[var(--ink)]">
            <span className="font-semibold">Important:</span> {LEGAL_DISCLAIMER}
          </p>
          <p className="text-xs text-[var(--ink)]/70">Copyright 2026 Unmasked Career Lab, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
