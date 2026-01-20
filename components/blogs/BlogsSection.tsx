"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
  // duplicate data for demo
  ...Array(21)
    .fill(null)
    .map((_, i) => ({
      title: `Sample Blog Post ${i + 4}`,
      date: "April 28, 2025",
      image: "/images/home/blog/img1.png",
      href: "/blog/sample",
    })),
];

export default function BlogsSection() {
  const ITEMS_PER_PAGE = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentBlogs = blogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="px-4 md:px-6 lg:px-10 py-8  bg-white">
      <div className="max-w-[1640px] mx-auto">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif mb-5">
            Explore Our Latest Blogs
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Stay informed with practical insights, legal updates, and guidance
            crafted to help you navigate your immigration journey with
            confidence.
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentBlogs.map((blog, index) => (
            <article
              key={index}
              className="group bg-white rounded-xl overflow-hidden transition-all duration-300"
            >
              <div className="relative h-[230px] overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="py-6">
                <p className="text-sm text-gray-400 mb-3">{blog.date}</p>

                <h3 className="text-lg md:text-xl font-serif leading-snug mb-6 text-gray-900">
                  {blog.title}
                </h3>

                <Link
                  href={blog.href}
                  className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
                >
                  View Details
                  <Image
                    src="/images/btn-arrow.png"
                    alt="arrow"
                    width={22}
                    height={22}
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-16">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded-lg text-sm disabled:opacity-40 hover:bg-gray-100"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-lg text-sm font-medium transition
                  ${
                    currentPage === i + 1
                      ? "bg-primary text-white"
                      : "border hover:bg-gray-100"
                  }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded-lg text-sm disabled:opacity-40 hover:bg-gray-100"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
