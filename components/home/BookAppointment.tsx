"use client";

import { useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import { send } from "emailjs-com";
import Reveal from "components/motion/Reveal";

type FormState = {
  user_name: string;
  user_email: string;
  phone: string;
  subject: string;
  nationality: string;
  dob: string;
  origin_country: string;
  arrival_date: string;
  message: string;
};

type FormErrors = {
  user_name?: string;
  user_email?: string;
  phone?: string;
  message?: string;
};

export default function BookAppointment() {
  const [form, setForm] = useState<FormState>({
    user_name: "",
    user_email: "",
    phone: "",
    subject: "",
    nationality: "",
    dob: "",
    origin_country: "",
    arrival_date: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  /* ---------------- VALIDATION ---------------- */
  const validate = () => {
    const errs: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!form.user_name) errs.user_name = "Name is required!";
    if (!form.user_email) errs.user_email = "Email is required!";
    else if (!emailRegex.test(form.user_email))
      errs.user_email = "Invalid email format!";
    if (!form.phone) errs.phone = "Phone number is required!";
    if (!form.message) errs.message = "Case details are required!";

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

    send("service_etf0i4l", "template_nbw8fo7", form, "wTZ0rPZvEyuoCP8vU")
      .then(() => {
        Swal.fire({
          icon: "success",
          text: "Your request has been sent successfully.",
          confirmButtonColor: "#131b2a",
        });

        setForm({
          user_name: "",
          user_email: "",
          phone: "",
          subject: "",
          nationality: "",
          dob: "",
          origin_country: "",
          arrival_date: "",
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
    <section>
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-8">
        {/* HEADER */}
        <div className="text-left md:text-center mb-10">
          <span className="inline-block mb-4 border border-gray-400 rounded-full px-4 py-1 text-lg">
            Book An Appointment
          </span>
          <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              We&apos;re ready when you are. Book Now.
            </h2>
          </Reveal>
        </div>

        {/* FORM CARD */}
        <div className="bg-[#1A1A1A] rounded-[24px] p-6 md:p-10 lg:p-14">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="input"
                value={form.user_name}
                onChange={(e) =>
                  setForm({ ...form, user_name: e.target.value })
                }
              />
              {errors.user_name && (
                <span className="text-red-500 text-sm">{errors.user_name}</span>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="input"
                value={form.user_email}
                onChange={(e) =>
                  setForm({ ...form, user_email: e.target.value })
                }
              />
              {errors.user_email && (
                <span className="text-red-500 text-sm">
                  {errors.user_email}
                </span>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="input"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">{errors.phone}</span>
              )}
            </div>

            {/* Subject */}
            <input
              type="text"
              placeholder="Subject"
              className="input"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            />

            {/* Nationality */}
            <input
              type="text"
              placeholder="What is your nationality?"
              className="input"
              value={form.nationality}
              onChange={(e) =>
                setForm({ ...form, nationality: e.target.value })
              }
            />

            {/* DOB */}
            <input
              type="text"
              placeholder="When are you born?"
              className="input"
              value={form.dob}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = "text";
              }}
              onChange={(e) => setForm({ ...form, dob: e.target.value })}
            />

            {/* Origin Country */}
            <input
              type="text"
              placeholder="What country did you come from?"
              className="input"
              value={form.origin_country}
              onChange={(e) =>
                setForm({ ...form, origin_country: e.target.value })
              }
            />

            {/* Arrival Date */}
            <input
              type="text"
              placeholder="When did you come here?"
              className="input"
              value={form.arrival_date}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = "text";
              }}
              onChange={(e) =>
                setForm({ ...form, arrival_date: e.target.value })
              }
            />

            {/* Message */}
            <div className="md:col-span-2">
              <textarea
                rows={6}
                placeholder="Type your case details here"
                className="input resize-none"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              {errors.message && (
                <span className="text-red-500 text-sm">{errors.message}</span>
              )}
            </div>

            {/* Submit */}
            <div className="md:col-span-2 flex justify-center mt-6">
              <button
                type="submit"
                disabled={loading}
                className="
                  relative inline-flex items-center gap-2
                  px-8 py-3 rounded-md
                  font-medium text-black
                  bg-white
                  overflow-hidden
                  disabled:opacity-60
                "
              >
                <span className="relative z-10">
                  {loading ? "Sending..." : "Send Request"}
                </span>

                <Image
                  src="/images/btn-arrow.png"
                  alt="arrow right"
                  width={24}
                  height={24}
                  className="relative z-10"
                />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* INPUT STYLES */}
      <style jsx>{`
        .input {
          background: white;
          padding: 14px 16px;
          border-radius: 6px;
          font-size: 14px;
          outline: none;
          width: 100%;
        }
        .input:focus {
          outline: 2px solid #e7b540;
        }
      `}</style>
    </section>
  );
}
