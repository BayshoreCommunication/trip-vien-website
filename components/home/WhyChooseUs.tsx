"use client";

import Image from "next/image";
import Button from "components/shared/Button";
import { useRef } from "react";

export default function WhyChooseUs() {
  const contentRef = useRef<HTMLDivElement>(null);

  /* IMAGE WHEEL → LEFT CONTENT SCROLL (DESKTOP ONLY) */
  const handleImageWheel = (e: React.WheelEvent) => {
    if (!contentRef.current) return;

    const el = contentRef.current;
    const atTop = el.scrollTop === 0;
    const atBottom =
      el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

    // content start/end → allow page scroll
    if (
      (e.deltaY < 0 && atTop) ||
      (e.deltaY > 0 && atBottom)
    ) {
      return;
    }

    e.preventDefault();

    el.scrollBy({
      top: e.deltaY,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-4 md:px-6 lg:px-8 py-16">
      <div className="max-w-[1640px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start min-h-[900px]">

        {/* IMAGE — TOP ON MOBILE, RIGHT ON DESKTOP */}
        <div
          onWheel={handleImageWheel}
          className="
            order-1
            lg:order-2
            lg:sticky lg:top-48
          "
        >
          <div className="relative rounded-[20px] overflow-hidden w-full max-w-[600px] mx-auto lg:mx-0">
            <Image
              src="/images/home/choose/img.png"
              alt="Why Choose Us"
              width={1000}
              height={800}
              priority
              className="object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* CONTENT — BELOW IMAGE ON MOBILE */}
        <div
          ref={contentRef}
          className="
            order-2
            lg:order-1
            h-auto
            lg:h-[620px]
            overflow-visible
            lg:overflow-y-auto
            pr-0
            lg:pr-6
            space-y-24
            scroll-smooth
            no-scrollbar
          "
        >
          {/* BLOCK 1 */}
          <div>
            <span className="inline-block mb-4 border border-gray-400 rounded-full px-4 py-1">
              Why Choose Us
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4">
              Delivering <br /> value you can rely on.
            </h2>

            <p className="text-gray-600 max-w-xl mb-10">
              We provide clear guidance, consistent support, and results that
              reflect the care and expertise behind every client relationship.
            </p>

            <div className="space-y-6">
              {[
                {
                  img: "img1",
                  title: "Expert Legal Advice",
                  text: "Experienced attorneys providing clear guidance and strong representation.",
                },
                {
                  img: "img2",
                  title: "Efficient Case Handling",
                  text: "Careful, efficient handling for faster resolutions.",
                },
                {
                  img: "img3",
                  title: "Cost-Effective",
                  text: "Flexible fee structures with real value.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <Image
                    src={`/images/home/choose/${item.img}.png`}
                    alt=""
                    width={40}
                    height={40}
                  />
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button title="Get A Free Consultation" href="/contact" />
            </div>
          </div>

          {/* BLOCK 2 */}
          <div className="space-y-8 text-gray-700">
            {[
              {
                img: "img4",
                title: "Personalized Attention",
                text: "Dedicated focus on your case.",
              },
              {
                img: "img5",
                title: "Confidentiality & Trust",
                text: "Handled with the highest confidentiality.",
              },
              {
                img: "img6",
                title: "Proactive Legal Planning",
                text: "Strategic planning to prevent issues.",
              },
            ].map((item) => (
              <div key={item.title} className="flex  gap-4">
                <Image
                  src={`/images/home/choose/${item.img}.png`}
                  alt=""
                  width={40}
                  height={40}
                />
                <div>
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
