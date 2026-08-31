import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { buildMetadata } from "@/lib/seo";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata = buildMetadata({
  title: "Blog - Unmasked Career Lab",
  description:
    "Evidence-informed writing on therapist burnout, clinical masking, ADHD at work, and leadership for mental-health professionals.",
  path: "/blog",
  keywords: ["therapist burnout", "clinical masking", "ADHD therapist burnout"],
});

export default function BlogPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
      <Reveal>
        <h1 className="font-display text-5xl md:text-6xl">Blog</h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--ink)]/85">
          Human-written, plain language, and academically grounded. Every article includes sources.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {BLOG_POSTS.map((post, index) => (
          <Reveal key={post.slug} className="rounded-3xl border border-[var(--teal)]/20 bg-[var(--bone)] p-4" delay={index * 0.04}>
            <Image src={post.image} alt={post.title} width={1200} height={700} className="h-48 w-full rounded-2xl object-cover" loading="lazy" />
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-[var(--teal)]">{new Date(post.date).toLocaleDateString()}</p>
            <h2 className="mt-2 font-display text-3xl leading-tight">{post.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]/85">{post.description}</p>
            <Link href={`/blog/${post.slug}`} className="mt-5 inline-block rounded-full border border-[var(--teal)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--teal)]">
              {post.isPlaceholder ? "Preview topic" : "Read article"}
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
