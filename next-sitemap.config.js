const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://unmaskedcareerlab.org";

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/server-sitemap.xml"],
};
