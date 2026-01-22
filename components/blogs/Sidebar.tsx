"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "components/shared/Button";
import Swal from "sweetalert2";
import { send } from "emailjs-com";

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

export default function Sidebar({ currentSlug }: { currentSlug: string }) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  /* ---------------- SEARCH ---------------- */
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
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
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!form.name) errs.name = "Name is required!";
    if (!form.phone) errs.phone = "Phone number is required!";
    if (!form.email) errs.email = "Email is required!";
    else if (!regex.test(form.email)) errs.email = "Invalid email format!";
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

    send("service_etf0i4l", "template_8l7sxxf", form, "wTZ0rPZvEyuoCP8vU")
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
        <h3 className="font-serif text-lg mb-4 border-b pb-2">Others Blogs</h3>

        <ul className="space-y-3 text-sm">
          {MOCK_OTHER_BLOGS.filter((b) => b.slug !== currentSlug).map(
            (blog) => (
              <li key={blog.slug}>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="hover:text-primary"
                >
                  {blog.title}
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>

      {/* BOOK APPOINTMENT */}
      <div className="bg-primary p-6 rounded-lg text-white">
        <h3 className="font-serif text-lg mb-4">Book An Appointment</h3>

        <form className="space-y-3" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <input
              className="w-full px-3 py-2 rounded text-black"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && (
              <span className="text-red-200 text-xs">{errors.name}</span>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              className="w-full px-3 py-2 rounded text-black"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            {errors.phone && (
              <span className="text-red-200 text-xs">{errors.phone}</span>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              className="w-full px-3 py-2 rounded text-black"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && (
              <span className="text-red-200 text-xs">{errors.email}</span>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              className="w-full px-3 py-2 rounded text-black"
              placeholder="Type your message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            {errors.message && (
              <span className="text-red-200 text-xs">{errors.message}</span>
            )}
          </div>

          <Link
            href=""
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(e as any);
            }}
            className={`block text-center rounded-md ${
              loading ? "pointer-events-none opacity-60" : ""
            }`}
          >
            Send Request
          </Link>
        </form>
      </div>
    </aside>
  );
}

const MOCK_OTHER_BLOGS = [
  {
    title: "Principle Of Precedent To Establish Consistency",
    slug: "precedent-consistency",
  },
  {
    title: "Common Law Systems Concept Decisions Courts",
    slug: "common-law-systems",
  },
  {
    title: "Precedents Are Decisions Made By Courts",
    slug: "precedents-decisions",
  },
];
