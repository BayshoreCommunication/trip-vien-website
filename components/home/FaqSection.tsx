"use client";

import { useState } from "react";
import Button from "components/shared/Button";
import Image from "next/image";

const faqData = [
  // {
  //   question: "What types of cases do you handle?",
  //   answer:
  //     "We handle immigration, criminal defense, personal injury, and related legal matters with experienced representation.",
  // },
  // {
  //   question: "How long have you been practicing law?",
  //   answer:
  //     "We have been practicing law for over [X] years, handling a wide range of cases with experience and dedication.",
  // },
  // {
  //   question: "How much experience do you have in cases like mine?",
  //   answer:
  //     "Our attorneys have extensive experience handling cases similar to yours and provide personalized legal strategies.",
  // },
  // {
  //   question: "Do you offer free consultations?",
  //   answer:
  //     "Yes, we offer free initial consultations to evaluate your case and discuss your legal options.",
  // },
  {
    question: "What should I do after a car accident?",
    answer:
      "Ensure your safety by moving to a secure location. Make sure everyone involved is okay. Call 911 to contact emergency medical services. Do not leave the scene of the accident. Wait for the police and help them file a police report. A police report is crucial for insurance claims and legal proceedings.",
  },
  {
    question: "What information should I exchange with the other driver?",
    answer:
      "Exchange names, addresses, phone numbers, and insurance information. Write down the other vehicle’s make, model, color, and license plate number. Get contact information from witnesses and take pictures of all vehicles and property damage.",
  },
  {
    question: "What is Florida's No Fault law?",
    answer:
      "A motorist involved in an accident must first file a claim with their own insurance company regardless of fault. If damages exceed what insurance pays, a personal injury claim may be filed against the at-fault driver.",
  },
  {
    question: "When am I required to file a police report?",
    answer:
      "A police report must be filed immediately when there is injury, death, property damage over $500, a hit-and-run, or drunk driving.",
  },
  {
    question:
      "What if the at-fault party does not have liability insurance coverage?",
    answer:
      "This creates a complex situation. Victims may face difficulty obtaining compensation. Drivers should explore UM/UIM insurance coverage to protect themselves if involved in an accident with an uninsured or underinsured driver.",
  },
  {
    question:
      "It’s been a few days after a car accident and I’m just now feeling pain. What should I do?",
    answer:
      "Go to the emergency room, urgent care, or see your doctor as soon as possible.",
  },
  {
    question: "What is Florida PIP law?",
    answer:
      "PIP covers medical expenses, lost wages, death benefits, and disability. It pays 80% of medical expenses up to $10,000 if treatment occurs within 14 days. If the injury is not an Emergency Medical Condition, coverage is limited to $2,500.",
  },
  {
    question:
      "Can I receive damages for pain and suffering after a Florida car crash?",
    answer:
      "Pain and suffering damages may be awarded in addition to medical expenses and are determined by a jury based on the circumstances of the case.",
  },
  {
    question: "When should I hire a lawyer for a car accident?",
    answer:
      "You should consult a lawyer as soon as possible. An attorney can handle insurance companies, protect your rights, and pursue fair compensation. Tripathy Vongsyprasom Law offers a free initial case evaluation.",
  },
  {
    question: "Is DUI a crime?",
    answer:
      "Yes. DUI involves operating a motor vehicle while intoxicated and is a criminal offense that appears on a defendant’s record.",
  },
  {
    question: "What is BAC?",
    answer:
      "Blood Alcohol Content (BAC) measures the amount of alcohol in the bloodstream. In Florida, a person is legally intoxicated at .08% BAC or higher.",
  },
  {
    question: "Should I blow into the breathalyzer?",
    answer:
      "Refusing a breathalyzer reduces evidence but results in an automatic 12-month license suspension and may be used against you in court.",
  },
  {
    question: "This is my first DUI in Florida. What will happen?",
    answer:
      "A first DUI conviction may result in fines up to $1,000, up to 6 months in jail, license suspension, and community service.",
  },
  {
    question: "Can you go to jail for DUI in Florida?",
    answer:
      "Yes. A first DUI conviction may result in up to 6 months in jail, or up to 9 months if BAC exceeds .15%. Multiple convictions may result in longer imprisonment.",
  },
  {
    question: "How long does a DUI conviction stay on your record?",
    answer:
      "A DUI conviction stays permanently on a criminal record and remains on a Florida driving record for 75 years.",
  },
  {
    question: "Do I have to hire a DUI lawyer?",
    answer:
      "You are not required to hire a lawyer, but it is highly recommended. DUI cases are complex, and an experienced attorney can help minimize penalties and consequences.",
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
              className="px-6 py-3 rounded-md border border-gray-400 font-medium hover:bg-gray-100 transition"
            >
              See More
            </button>
          </div>
        )}

        {/* CTA BUTTONS */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
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
        </div>

      </div>
    </section>
  );
}
