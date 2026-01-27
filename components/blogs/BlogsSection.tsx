"use client";

import Breadcrumb from "components/share/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "../motion/Reveal";

type ApiBlog = {
  title: string;
  slug: string;
  createdAt: string;
  excerpt?: string;
  featuredImage?: {
    image?: {
      url?: string;
    };
  };
};

type BlogUI = {
  title: string;
  date: string;
  image: string;
  href: string;
};

export default function BlogsSection({
  blogPost,
}: {
  blogPost: { data: ApiBlog[] };
}) {
  const ITEMS_PER_PAGE = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const posts: BlogUI[] = blogPost.data
    .filter((p) => p.slug)
    .map((p) => ({
      title: p.title,
      date: new Date(p.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      image:
        p.featuredImage?.image?.url ||
        "/images/home/blog/img1.png",
      href: `/blog/${p.slug}`,
    }));

  if (!posts.length) {
    return (
      <div className="text-center py-20 text-gray-500">
        No blogs found
      </div>
    );
  }

  const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentBlogs = posts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section className=" md:px-6 lg:px-8 py-8 bg-white md:pt-0 pt-0">
      <Breadcrumb
        title="Legal Insights Grounded in Strategy and Experience"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs" },
        ]}
      />

      <div className="max-w-[1640px] mx-auto">
        {/* HEADER */}
        <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
          <div className="max-w-3xl mx-auto text-center my-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4">
              Explore Our Latest Blogs
            </h2>
            <p className="text-gray-600">
              Stay informed with practical insights, legal updates, and guidance
              crafted to help you navigate your immigration journey with
              confidence.
            </p>
          </div>
        </Reveal>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentBlogs.map((blog) => (
            <Link
              key={blog.href}
              href={blog.href}
              className="group block cursor-pointer"
            >
              <article className="bg-white rounded-xl overflow-hidden h-full">
                
                {/* IMAGE */}
                <Reveal x={-100} opacityFrom={0} duration={3}>
                  <div className="relative overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={1000}
                      height={800}
                      className="object-cover w-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Reveal>

                {/* TEXT */}
                <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
                  <div className="py-6">
                    <p className="text-sm text-gray-400 mb-3">
                      {blog.date}
                    </p>

                    <h3 className="text-xl font-serif mb-6">
                      {blog.title}
                    </h3>

                    <span className="text-primary font-medium">
                      View Details →
                    </span>
                  </div>
                </Reveal>
              </article>
            </Link>
          ))}
        </div>

        {/* PAGINATION (unchanged) */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-16">
            <button
              onClick={() =>
                setCurrentPage((p) => Math.max(p - 1, 1))
              }
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded disabled:opacity-40"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded ${
                  currentPage === i + 1
                    ? "bg-primary text-white"
                    : "border"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((p) =>
                  Math.min(p + 1, totalPages)
                )
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
