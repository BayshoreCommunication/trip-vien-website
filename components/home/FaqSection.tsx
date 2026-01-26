"use client";

import { useState } from "react";
import Button from "components/shared/Button";
import Image from "next/image";

const faqData = [
  // =========================
  // PERSONAL INJURY (PI) — LAWYER
  // =========================
  {
    question: "When should I hire a personal injury lawyer?",
    answer:
      "You should contact a personal injury lawyer as soon as possible after an accident. An attorney can protect your rights, preserve evidence, and handle insurance companies on your behalf.",
  },
  {
    question: "How can a personal injury lawyer help maximize my compensation?",
    answer:
      "A personal injury lawyer evaluates the full value of your claim, including medical expenses, lost wages, future care, and pain and suffering, and negotiates aggressively with insurance companies.",
  },
  {
    question:
      "Do I still need a lawyer if the insurance company offers a settlement?",
    answer:
      "Yes. Initial settlement offers are often lower than what a case is worth. A lawyer can review the offer and determine whether it fairly compensates you for your injuries.",
  },
  {
    question: "What if my personal injury case goes to court?",
    answer:
      "If a fair settlement cannot be reached, a personal injury lawyer can file a lawsuit and represent you in court to pursue the compensation you deserve.",
  },

  // =========================
  // DUI — LAWYER
  // =========================
  {
    question: "Why should I hire a DUI lawyer?",
    answer:
      "DUI charges carry serious consequences, including jail time, fines, and license suspension. A DUI lawyer understands the law, identifies defenses, and works to reduce or dismiss charges.",
  },
  {
    question: "Can a DUI lawyer help me keep my driver’s license?",
    answer:
      "Yes. A DUI lawyer can request a formal review hearing, challenge the suspension, and pursue options such as a hardship license when available.",
  },
  {
    question: "Can a DUI charge be reduced or dismissed?",
    answer:
      "In some cases, DUI charges may be reduced or dismissed due to issues with evidence, traffic stops, breath or blood tests, or procedural errors. A lawyer evaluates these factors carefully.",
  },
  {
    question: "What happens if I do not hire a DUI lawyer?",
    answer:
      "Without legal representation, you risk facing the full penalties of a DUI conviction. A lawyer helps protect your rights and navigate the complex criminal justice process.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [visibleCount, setVisibleCount] = useState(5); // ✅ show 5 initially

  const visibleFaqs = faqData.slice(0, visibleCount);

  return (
    <section className="px-4 md:px-6 lg:px-8 py-8 md:py-16">
      <div className="max-w-[1640px] mx-auto">
        {/* HEADER */}
        <div className="text-left md:text-center mb-12">
          <span className="inline-block mb-4 border border-gray-400 rounded-full px-4 py-1 text-sm md:text-lg">
            Frequently Asked Questions
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif mb-4">
            Need answers? We&apos;ve got you covered.
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re always here to guide you—send us your questions and
            we&apos;ll help you right away.
          </p>
        </div>

        {/* ACCORDION */}
        <div className="max-w-[1320px] mx-auto bg-[#FFF7E3] rounded-[20px] overflow-hidden px-4 py-2">
          {visibleFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b last:border-none border-[#E5D6A8]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-medium text-sm md:text-lg">
                    {index + 1}. {faq.question}
                  </span>

                  <span className="text-2xl font-light">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-60 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="px-6 text-gray-700 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* SEE MORE BUTTON */}
        {visibleCount < faqData.length && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 5)}
              className="
      inline-flex items-center justify-center
      px-8 py-3 bg-primary
      text-sm font-medium text-black
      transition-all duration-300 ease-out
      hover:bg-yellow-500 hover:text-white hover:border-black
      focus:outline-none
    "
            >
              See More
            </button>
          </div>
        )}

        {/* CTA BUTTONS */}
        {/* <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button title="Find More Answer" href="/faq" />

          <a
            href="/contact"
            className="
              relative inline-flex items-center gap-2
              px-6 py-3 rounded-md
              border border-gray-400
              font-medium text-black
              overflow-hidden
              transition-colors duration-300
              group
            "
          >
            <span
              className="
                absolute inset-0
                bg-primary
                transform -translate-x-full
                transition-transform duration-300 ease-out
                group-hover:translate-x-0
              "
            />
            <span className="relative z-10">Get Started</span>
            <Image
              src="/images/btn-arrow.png"
              alt="arrow"
              width={24}
              height={24}
              className="relative z-10"
            />
          </a>
        </div> */}
      </div>
    </section>
  );
}
