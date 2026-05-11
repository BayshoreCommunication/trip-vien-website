export type StaticBlog = {
  title: string;
  slug: string;
  createdAt: string;
  excerpt: string;
  featuredImage: {
    image: {
      url: string;
    };
  };
};

export const staticBlogs: StaticBlog[] = [
  {
    title: "Who Is Liable in a Slip and Fall Accident in Florida?",
    slug: "slip-and-fall-accident",
    createdAt: "2026-05-10T00:00:00.000Z",
    excerpt:
      "Understand property owner responsibility under Florida premises liability law, including business invitee protections, constructive knowledge, and filing deadlines.",
    featuredImage: {
      image: {
        url: "/images/static-blogs/slip-and-fall-accident.jpg",
      },
    },
  },
];

export function getStaticBlogBySlug(slug: string) {
  return staticBlogs.find((blog) => blog.slug === slug);
}
