import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, IMAGES } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--sand)]/70 bg-[var(--bone)]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="inline-flex items-center gap-2" aria-label="Unmasked Career Lab home">
          <Image src={IMAGES.logo} alt="Unmasked Career Lab logo" width={132} height={40} priority />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-5 md:flex">
          {NAV_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link text-sm font-medium text-[var(--ink)]">
              {item.label}
            </Link>
          ))}
          <Link href="/book" className="rounded-full bg-[var(--clay)] px-4 py-2 text-sm font-semibold text-[var(--bone)]">
            Book a Call
          </Link>
        </nav>
        <Link href="/book" className="rounded-full bg-[var(--clay)] px-3 py-2 text-xs font-semibold text-[var(--bone)] md:hidden">
          Book
        </Link>
      </div>
    </header>
  );
}
