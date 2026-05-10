"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { send } from "emailjs-com";

/* ---------------- TYPES ---------------- */

type Blog = {
  title: string;
  slug: string;
};

type AppointmentFormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

type AppointmentFormErrors = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

/* ---------------- COMPONENT ---------------- */

export default function Sidebar({
  currentSlug,
  blogs = [],
}: {
  currentSlug: string;
  blogs?: Blog[];
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  /* ---------------- SEARCH ---------------- */
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/blog?search=${query}`);
  };

  /* ---------------- FORM STATE ---------------- */
  const [form, setForm] = useState<AppointmentFormState>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<AppointmentFormErrors>({});
  const [loading, setLoading] = useState(false);

  /* ---------------- VALIDATION ---------------- */
  const validate = () => {
    const errs: AppointmentFormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!form.name) errs.name = "Name is required!";
    if (!form.phone) errs.phone = "Phone number is required!";
    if (!form.email) errs.email = "Email is required!";
    else if (!emailRegex.test(form.email))
      errs.email = "Invalid email format!";
    if (!form.message) errs.message = "Message is required!";

    return errs;
  };

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length !== 0) {
      setLoading(false);
      return;
    }

    send(
      "service_etf0i4l",
      "template_8l7sxxf",
      form,
      "wTZ0rPZvEyuoCP8vU"
    )
      .then(() => {
        Swal.fire({
          icon: "success",
          text: "Your request has been sent successfully.",
          confirmButtonColor: "#131b2a",
        });

        setForm({
          name: "",
          phone: "",
          email: "",
          message: "",
        });

        setErrors({});
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          text: "Something went wrong! Please try again.",
        });
      })
      .finally(() => setLoading(false));
  };

  /* ---------------- UI ---------------- */

  return (
    <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
      {/* SEARCH */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-[3px] border border-[#273244] bg-[#273244] px-4 py-3 text-sm text-white placeholder:text-[#9aa7ba] outline-none transition focus:border-primary"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      {/* OTHER BLOGS (REAL DATA) */}
      <div className="bg-[#F3F3F3] p-4">
        <h3 className="mb-4 inline-block border-b border-primary pb-2 font-serif text-lg md:text-xl">
          Others Blogs
        </h3>

        {blogs.length > 0 ? (
          <ul className="space-y-3 text-sm leading-relaxed">
            {blogs
              .filter(
                (b) =>
                  b?.slug &&
                  b.slug !== currentSlug
              )
              .slice(0, 6)
              .map((blog) => (
                <li key={blog.slug}>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="text-[#06142c] transition hover:text-primary"
                  >
                    {blog.title}
                  </Link>
                </li>
              ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-400">
            No other blogs available.
          </p>
        )}
      </div>

      {/* BOOK APPOINTMENT */}
      <div className="rounded-md bg-primary p-5 text-white">
        <h3 className="mb-4 font-serif text-lg">
          Book An Appointment
        </h3>

        <form className="space-y-3" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <input
              className="w-full rounded-[3px] bg-[#273244] px-3 py-2 text-sm text-white placeholder:text-[#b8c4d6] outline-none focus:ring-1 focus:ring-white/70"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
            {errors.name && (
              <span className="text-red-200 text-xs">
                {errors.name}
              </span>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              className="w-full rounded-[3px] bg-[#273244] px-3 py-2 text-sm text-white placeholder:text-[#b8c4d6] outline-none focus:ring-1 focus:ring-white/70"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />
            {errors.phone && (
              <span className="text-red-200 text-xs">
                {errors.phone}
              </span>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              className="w-full rounded-[3px] bg-[#273244] px-3 py-2 text-sm text-white placeholder:text-[#b8c4d6] outline-none focus:ring-1 focus:ring-white/70"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
            {errors.email && (
              <span className="text-red-200 text-xs">
                {errors.email}
              </span>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              className="min-h-[88px] w-full rounded-[3px] bg-[#273244] px-3 py-2 text-sm text-white placeholder:text-[#b8c4d6] outline-none focus:ring-1 focus:ring-white/70"
              placeholder="Type your message"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
            />
            {errors.message && (
              <span className="text-red-200 text-xs">
                {errors.message}
              </span>
            )}
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-[4px] bg-white py-2 text-sm font-medium text-black transition hover:bg-[#f4f4f4] ${
              loading
                ? "opacity-60 cursor-not-allowed"
                : ""
            }`}
          >
            {loading ? "Sending..." : "Send Request"}
          </button>
        </form>
      </div>
    </aside>
  );
}
