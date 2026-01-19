import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    title:
      "Special Immigration Relief: U Visas, VAWA, And T Visas As Forms Of Deportation Defense",
    date: "January 8, 2026",
    image: "/images/home/blog/img1.png",
    href: "/blog/special-immigration-relief",
  },
  {
    title:
      "Deportation Defense For Families: Best Practices When Loved Ones Are At Risk",
    date: "April 18, 2025",
    image: "/images/home/blog/img2.png",
    href: "/blog/deportation-defense-families",
  },
  {
    title:
      "What Is The Process For Obtaining A Green Card Through Marriage To An American Citizen?",
    date: "April 28, 2025",
    image: "/images/home/blog/img3.png",
    href: "/blog/green-card-marriage",
  },
];

export default function LatestBlogs() {
  return (
    <section className="px-4 md:px-6 lg:px-8 py-8 md:py-16">
      <div className="max-w-[1640px] mx-auto">
        {/* HEADER */}
        <div className="text-left md:text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4">
            Explore Our Latest Blogs
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Stay informed with practical insights, legal updates, and guidance
            crafted to help you navigate your immigration journey with
            confidence.
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <article key={index} className="group">
              {/* IMAGE */}
              <div className="relative w-full h-[220px] rounded-[16px] overflow-hidden mb-5">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* DATE */}
              <p className="text-sm text-gray-400 mb-2">{blog.date}</p>

              {/* TITLE */}
              <h3 className="text-lg md:text-xl font-serif leading-snug mb-4">
                {blog.title}
              </h3>

              {/* LINK */}
              <Link
                href={blog.href}
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                View Details
                <span><Image src="/images/btn-arrow.png" alt="arrow" width={24} height={24} /></span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
