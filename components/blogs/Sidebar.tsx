"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "components/shared/Button";

export default function Sidebar({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    router.push(`/blog?search=${query}`);
  };

  return (
    <aside className="space-y-10">

      {/* SEARCH */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          className="w-full border px-4 py-3 rounded-md"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      {/* OTHER BLOGS */}
      <div>
        <h3 className="font-serif text-lg mb-4 border-b pb-2">
          Others Blogs
        </h3>

        <ul className="space-y-3 text-sm">
          {MOCK_OTHER_BLOGS.filter(
            (b) => b.slug !== currentSlug
          ).map((blog) => (
            <li key={blog.slug}>
              <Link
                href={`/blog/${blog.slug}`}
                className="hover:text-primary"
              >
                {blog.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* BOOK APPOINTMENT */}
      <div className="bg-primary p-6 rounded-lg text-white">
        <h3 className="font-serif text-lg mb-4">
          Book An Appointment
        </h3>

        <form className="space-y-3">
          <input className="w-full px-3 py-2 rounded text-black" placeholder="Your Name" />
          <input className="w-full px-3 py-2 rounded text-black" placeholder="Phone Number" />
          <input className="w-full px-3 py-2 rounded text-black" placeholder="Email Address" />
          <textarea className="w-full px-3 py-2 rounded text-black" placeholder="Type your message" />

          <Button title="Send Request " href="#">
            
          </Button>
        </form>
      </div>
    </aside>
  );
}

const MOCK_OTHER_BLOGS = [
  { title: "Principle Of Precedent To Establish Consistency", slug: "precedent-consistency" },
  { title: "Common Law Systems Concept Decisions Courts", slug: "common-law-systems" },
  { title: "Precedents Are Decisions Made By Courts", slug: "precedents-decisions" },
];
