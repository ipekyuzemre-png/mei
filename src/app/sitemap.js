export const dynamic = "force-static";
import { blogPosts } from "@/data/blog";
import { seoLocations, seoProfessions } from "@/data/pseo";

export default function sitemap() {
  const baseUrl = "https://www.renginyazilim.com";

  // 1. Get all blog post URLs
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // 2. Generate all pSEO URLs (900 Local SEO Pages)
  const pseoUrls = [];
  seoLocations.forEach((location) => {
    seoProfessions.forEach((profession) => {
      const slug = `diyarbakir-${location.id}-${profession.id}-web-sitesi-yapimi`;
      pseoUrls.push({
        url: `${baseUrl}/cozumler/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly", // They don't change daily
        priority: 0.9, // High priority for local SEO
      });
    });
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/sektorel-cozumler`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...blogUrls,
    ...pseoUrls,
  ];
}
