"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { send } from "emailjs-com";

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ContactFormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const ContactSection = () => {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [loading, setLoading] = useState(false);

  /* ---------------- VALIDATION ---------------- */
  const validate = () => {
    const errs: ContactFormErrors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!form.name) errs.name = "Name is required!";
    if (!form.email) errs.email = "Email is required!";
    else if (!regex.test(form.email))
      errs.email = "Invalid email format!";
    if (!form.phone) errs.phone = "Phone number is required!";
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
          text: "Thank you for reaching out. We will respond shortly.",
          confirmButtonColor: "#131b2a",
        });

        setForm({
          name: "",
          email: "",
          phone: "",
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
    <section className="px-4 md:px-6 lg:px-8 py-16">
      <div className="max-w-[1640px] mx-auto">
        <div className="bg-[#FFF6E5] rounded-[28px] p-6 md:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            {/* LEFT: FORM */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
                Get In Touch
              </h2>

              <p className="text-gray-600 max-w-md mb-8">
                We’re always here to guide you—send us your questions and we’ll
                help you right away.
              </p>

              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm">
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    placeholder="Type your message"
                    rows={5}
                    className="w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                  {errors.message && (
                    <span className="text-red-500 text-sm">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full rounded-xl bg-[#E8B949] py-4 text-white font-semibold tracking-wide transition ${
                    loading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-[#d7aa3f]"
                  }`}
                >
                  {loading ? "Sending..." : "SEND"}
                </button>
              </form>
            </div>

            {/* RIGHT: MAP */}
            <div className="relative rounded-2xl overflow-hidden min-h-[420px] lg:min-h-full">
              <iframe
                src="https://www.google.com/maps?q=Common%20Ground%20Playground&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
