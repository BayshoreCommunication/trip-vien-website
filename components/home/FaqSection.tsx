"use client";

import { useState } from "react";
import Button from "components/shared/Button";
import Image from "next/image";

const faqData = [
  // =========================
  // PERSONAL INJURY (PI) — LAWYER
  // =========================
  {
    question: "What should I do after a car accident?",
    answer:
      "Ensure your safety by moving to a secure location. Make sure everyone involved is okay.  Call 911 to contact emergency medical services.  Do not leave the scene of the accident.  Wait for the police and help them file a police report. A police report is crucial for insurance claims and legal proceedings.",
  },
  {
    question: "What information should I exchange with the other driver? ",
    answer:
      "Next, exchange information with the other party/ies; names, addresses, phone numbers, and insurance information.  It is helpful to write down the other vehicle's make, model, color, and license plate number.  Get contact information from any witnesses to the accident.  Take pictures of all vehicles involved, especially of the property damages.",
  },
  {
    question: " What is Florida's No Fault law?",
    answer:
      " A motorist involved in an accident must first file a claim with their own insurance company, no matter if you are at fault or not.    If the damages is more than what your insurance company offers to pay, you can then file a personal injury case against the at fault driver.",
  },
  {
    question: "When am I required to file a police report?",
    answer:
      "A police report must be filed immediately when there are: injury, death, property damage over $500, in a hit-and-run, and when drunk driving is involved.",
  },
  {
    question:
      "What if the at-fault party does not have liability insurance coverage when the accident happened?",
    answer:
      "This creates a complex and challenging situation for all parties involved.  Victims may face difficulties obtaining compensation for their losses, and the at-fault driver may encounter legal and financial consequences.  All drivers should explore their own insurance coverage options, including UM/UIM coverage, to protect themselves in case they are involved in an accident with an uninsured or underinsured driver.",
  },
  {
    question:
      " It's been a few days after I was in a car accident and I am just now starting to feel pain.  What should I do?",
    answer: "Go to the ER, urgent care, or your doctor as soon as possible. ",
  },
  {
    question: "What is Florida PIP law?",
    answer:
      " PIP covers medical expenses that result from an accident and also provides benefits for lost wages, death benefits, and disability.  80% of your actual expenses for medical treatment, hospitalization, transport, and medical tests are covered up to $10,000, as long as treatment is within 14 days of the accident.  If treatment is not considered an Emergency Medical Condition (EMC), the limitation on coverage is only $2,500.  An EMC is defined as any injury, which, if left untreated, would reasonably be expected to cause serious jeopardy to the person's health, serious impairment of any bodily function, or serious dysfunction of a body part or organ.",
  },
  {
    question:
      "Can I receive damages for pain and suffering after a Florida car crash?",
    answer:
      " Pain and suffering is the legal term for an additional amount of damages that are paid on top of medical and disability costs, and it's up to a jury to decide how much should be awarded in each case. ",
  },
  {
    question: "When should I hire a lawyer for a car accident?",
    answer:
      " A good personal injury lawyer can explain your legal rights and also give you practical, strategic advice about your case.  A lawyer will deal with the insurance company for you and will handle all the administrative and procedural work that is required in a car accident case.  Most of the time, victims who have legal representation are usually more fairly compensated than unrepresented victims.It is a good idea to consult a lawyer promptly after a car accident.  The other driver's insurance company will not waste time getting to work to reduce their financial exposure.  Our attorneys at Tripathy Vongsyprasom Law, offer a free initial case evaluation so you can find out more about your rights and your options.",
  },

  // =========================
  // DUI — LAWYER
  // =========================
  {
    question: "Is DUI a crime?",
    answer:
      "Yes, because DUI typically involve a defendant operating a motor vehicle while intoxication, DUI is a crime that goes on a defendant's criminal record.",
  },
  {
    question: " What is BAC?",
    answer:
      "Blood alcohol content (BAC) refers to the percentage of alcohol in a person's blood stream.  A BAC of .10% means that an individual's blood supply contains one part of alcohol for every 1000 parts blood.  In Florida, a personal is legally intoxicated if they have a BAC of .08% or higher.",
  },
  {
    question: " Should I blow into the breathalyzer?",
    answer:
      " Whether or not to blow into the breathalyzer after a DUI arrest in Florida is a personal decision, and it's important to consider the potential consequences carefully.  If you do not submit to the test, then there will be less evidence and the less evidence the prosecution has is usually a good thing for the accused.  However, there are downsides to not blowing into a breathalyzer such as an automatic driver's license suspension for the next 12 months and the decision to not blow can be used as evidence against you.",
  },
  {
    question: "This is my first DUI in Florida, what will happen to me?",
    answer:
      "A first-time conviction for DUI in Florida can cost up to $1,000, up to 6 months in jail, loss of driver's license for up to 6 months, and 50 hours of community service.",
  },
  {
    question: "Can you go to jail for DUI in Florida?",
    answer:
      "A first-time misdemeanor for a driving under the influence (DUI) conviction in Florida is punishable by up to 9 months in jail.  Typically, a first conviction will not result in more than 6 months of imprisonment.  However, if the BAC is above .15%, the imprisonment could be for as many as 9 months.  Multiple convictions can result in periods of imprisonment greater than 9 months as well as permanent license suspension.",
  },
  {
    question: " How long does a DUI conviction stay on your record in Florida?",
    answer:
      "A DUI conviction in Florida will stay on a defendant's criminal history forever and cannot be expunged or sealed.  In addition, the DUI conviction will also stay on a Florida driver's license and record for 75 years.",
  },
  {
    question: "Do I have to hire a DUI lawyer?",
    answer:
      "You don't have to hire an attorney to handle your DUI case, but it is highly recommended that you do.  DUI proceedings can be overwhelming and confusing.  An experienced Florida DUI attorney will have the knowledge needed to plead your case best, ensuring you have the greatest chase of getting the least conviction and penalties possible.",
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
