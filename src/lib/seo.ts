import type { Metadata } from "next";
import { IMAGES, SITE_NAME, SITE_URL } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  image?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
  image = IMAGES.socialOg,
}: MetadataInput): Metadata {
  const fullUrl = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      title,
      description,
      siteName: SITE_NAME,
      url: fullUrl,
      images: [{ url: image, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
