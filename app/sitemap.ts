import { MetadataRoute } from "next";
import { staticBlogs } from "../lib/staticBlogs";
import { PRACTICE_DATA } from "../lib/practice-data";

const BASE_URL = "https://www.tripvienlaw.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Static Pages
  const staticPages = [
    { url: `${BASE_URL}`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${BASE_URL}/disclaimer`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${BASE_URL}/investor`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${BASE_URL}/legal`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 },
  ];

  // 2. Dynamic Blogs (Static defined in lib)
  const staticBlogUrls = staticBlogs.map((blog) => ({
    url: `${BASE_URL}/blog/${blog.slug}`,
    lastModified: new Date(blog.createdAt || new Date()),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // 3. Dynamic Blogs (Fetched from API)
  let dynamicBlogUrls: any[] = [];
  try {
    const res = await fetch("https://backend-trip-vien-website.vercel.app/site/blog", {
      next: { revalidate: 3600 }
    });
    if (res.ok) {
      const data = await res.json();
      const blogs = Array.isArray(data) ? data : data.data ?? [];
      dynamicBlogUrls = blogs.map((blog: any) => ({
        url: `${BASE_URL}/blog/${blog.slug}`,
        lastModified: new Date(blog.createdAt || new Date()),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }));
    }
  } catch (error) {
    console.error("Failed to fetch dynamic blogs for sitemap generation:", error);
  }

  // 4. Practice Areas Categories
  const practiceAreaUrls = Object.keys(PRACTICE_DATA).map((slug) => ({
    url: `${BASE_URL}/practice-areas/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // 5. Services under Practice Areas
  const serviceUrls = Object.entries(PRACTICE_DATA).flatMap(([areaSlug, area]) =>
    area.services.map((service) => ({
      url: `${BASE_URL}/practice-areas/${areaSlug}/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }))
  );

  return [
    ...staticPages,
    ...staticBlogUrls,
    ...dynamicBlogUrls,
    ...practiceAreaUrls,
    ...serviceUrls,
  ];
}
