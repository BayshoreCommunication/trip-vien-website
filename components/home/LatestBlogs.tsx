import Image from "next/image";
import Link from "next/link";
import { getAllPostData } from "lib/GetPostData";
import Reveal from "../motion/Reveal";

/* ---------------- API TYPE ---------------- */
type ApiBlog = {
  title: string;
  slug: string;
  createdAt: string;
  featuredImage?: {
    image?: {
      url?: string;
    };
  };
};

/* ---------------- UI TYPE ---------------- */
type BlogCard = {
  title: string;
  date: string;
  image: string;
  href: string;
};

/* ---------------- SLUGIFY ---------------- */
function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/:/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export default async function LatestBlogs() {
  const blogPost = await getAllPostData();

  const blogs: BlogCard[] =
    blogPost.data?.slice(0, 3).map((blog: ApiBlog) => ({
      title: blog.title,
      date: new Date(blog.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      image:
        blog.featuredImage?.image?.url ||
        "/images/home/blog/img1.png",
      href: `/blog/${slugify(blog.slug)}`,
    })) || [];

  if (!blogs.length) return null;

  return (
    <section className="px-4 py-8 md:py-16">
      <div className="max-w-[1640px] mx-auto">

        {/* HEADER */}
        <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
          <div className="text-left md:text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4">
              Explore Our Latest Blogs
            </h2>
            <p className="text-gray-600">
              Stay informed with practical insights and legal updates.
            </p>
          </div>
        </Reveal>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <Link
              key={blog.href}
              href={blog.href}
              className="group block hover:-translate-y-1 transition"
            >
              <article>
                <Reveal x={-100} opacityFrom={0} duration={3}>
                  <div className="relative w-full rounded-[16px] overflow-hidden mb-5">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={1000}
                      height={800}
                      className="object-cover w-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Reveal>

                <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
                  <p className="text-sm text-gray-400 mb-2">
                    {blog.date}
                  </p>
                </Reveal>

                <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
                  <h3 className="text-lg md:text-xl font-serif leading-snug mb-4">
                    {blog.title}
                  </h3>
                </Reveal>

                <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
                  <span className="inline-flex items-center gap-2 text-primary font-medium">
                    View Details
                    <Image
                      src="/images/btn-arrow.png"
                      alt="arrow"
                      width={24}
                      height={24}
                    />
                  </span>
                </Reveal>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
