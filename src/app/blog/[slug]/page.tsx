import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { BLOG_POSTS, getBlogPost } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    return {};
  }

  return buildMetadata({
    title: `${post.keywords[0]} - Unmasked Career Lab`,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    type: "article",
    image: post.image,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto w-full max-w-4xl px-4 py-16 md:px-6">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--teal)]">{new Date(post.date).toLocaleDateString()}</p>
        <h1 className="mt-3 font-display text-5xl leading-tight md:text-6xl">{post.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--ink)]/85">{post.description}</p>
      </Reveal>

      <Image src={post.image} alt={post.title} width={1300} height={760} className="mt-8 h-auto w-full rounded-3xl border border-[var(--sand)] object-cover" priority />

      {post.isPlaceholder ? (
        <Reveal className="mt-10 rounded-2xl border border-[var(--teal)]/20 bg-[var(--bone)] p-6">
          <h2 className="font-display text-3xl">Planned post</h2>
          <p className="mt-3 leading-relaxed">
            This topic is queued for expansion after client review. It is included now so the site has all planned dynamic blog routes in place.
          </p>
          <h3 className="mt-6 text-lg font-semibold">Sources</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed">
            {post.sources.map((source) => (
              <li key={source}>{source}</li>
            ))}
          </ul>
          <Link href="/book" className="mt-5 inline-block rounded-full bg-[var(--clay)] px-5 py-3 text-sm font-semibold text-[var(--bone)]">
            Book an intro call
          </Link>
        </Reveal>
      ) : (
        <div className="mt-10 space-y-8">
          {post.sections.map((section, index) => (
            <Reveal key={section.heading} className="space-y-3" delay={index * 0.03}>
              <h2 className="font-display text-3xl">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-relaxed text-[var(--ink)]/88">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          ))}
          <Reveal className="rounded-2xl border border-[var(--teal)]/20 bg-[var(--sand)] p-6">
            <h2 className="font-display text-3xl">Sources</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
              {post.sources.map((source) => (
                <li key={source}>{source}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      )}

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          datePublished: post.date,
          author: {
            "@type": "Person",
            name: "Tyler Suran",
          },
          image: post.image,
          mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
          keywords: post.keywords.join(", "),
        }}
      />
    </article>
  );
}
