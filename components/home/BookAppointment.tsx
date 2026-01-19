"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

export default function BookAppointment() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY",
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          formRef.current?.reset();
        },
        (error) => {
          console.error(error);
          setLoading(false);
        },
      );
  };

  return (
    <section>
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-8">
        {/* HEADER */}
        <div className="text-left md:text-center mb-10">
          <span className="inline-block mb-4 border border-gray-400 rounded-full px-4 py-1 text-lg">
            Book An Appointment
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            We&apos;re ready when you are. Book Now.
          </h2>
        </div>

        {/* FORM CARD */}
        <div className="bg-[#1c1c1c] rounded-[24px] p-6 md:p-10 lg:p-14">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* INPUTS */}
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="input"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              required
              className="input"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="input"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
            />

            <input
              type="text"
              name="nationality"
              placeholder="What is your nationality?"
              className="input"
            />

            <input
              type="text"
              name="dob"
              placeholder="When are you born?"
              className="input"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = "text";
              }}
            />

            <input
              type="text"
              name="origin_country"
              placeholder="What country did you come from?"
              className="input"
            />

            <input
              type="text"
              name="arrival_date"
              placeholder="When did you come here?"
              className="input"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = "text";
              }}
            />

            {/* TEXTAREA */}
            <textarea
              name="message"
              placeholder="Type your case details here"
              rows={6}
              className="input md:col-span-2 resize-none"
            />

            {/* BUTTON */}
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
      transition-colors duration-300
      group
      disabled:opacity-60 disabled:cursor-not-allowed
    "
              >
                {/* Sliding background */}
                <span
                  className="
        absolute inset-0
        bg-primary
        transform -translate-x-full
        transition-transform duration-300 ease-out
        group-hover:translate-x-0
      "
                />

                {/* Content */}
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

            {/* SUCCESS MESSAGE */}
            {success && (
              <p className="md:col-span-2 text-center text-green-400 mt-4">
                Your request has been sent successfully.
              </p>
            )}
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
