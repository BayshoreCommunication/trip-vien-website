"use client";

import { useState } from "react";
import Button from "@/components/shared/Button";
import Image from "next/image";

const faqs = [
  {
    question: "What types of cases do you handle?",
    answer:
      "We handle immigration, criminal defense, personal injury, and related legal matters with experienced representation.",
  },
  {
    question: "How long have you been practicing law?",
    answer:
      "We have been practicing law for over [X] years, handling a wide range of cases with experience and dedication.",
  },
  {
    question: "How much experience do you have in cases like mine?",
    answer:
      "Our attorneys have extensive experience handling cases similar to yours and provide personalized legal strategies.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes, we offer free initial consultations to evaluate your case and discuss your legal options.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

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
        <div className="max-w-[1320px] mx-auto bg-[#FFF7E3] rounded-[20px] overflow-hidden">
          {faqs.map((faq, index) => {
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
                    isOpen ? "max-h-40 pb-5" : "max-h-0"
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

        {/* CTA BUTTONS */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button title="Find More Answer" href="/faq" />

          {/* Secondary Button with SAME hover effect */}
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
            <span className="relative z-10">Get Started</span>
            <Image
              src="/images/btn-arrow.png"
              alt="arrow"
              width={24}
              height={24}
              className="relative z-10"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
