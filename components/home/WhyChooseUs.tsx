"use client";

import Image from "next/image";
import Button from "components/shared/Button";
import { useRef } from "react";

export default function WhyChooseUs() {
  const contentRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);

  /* 🖱️ IMAGE WHEEL → CONTENT SCROLL */
  const handleImageWheel = (e: React.WheelEvent) => {
    if (!contentRef.current) return;

    const el = contentRef.current;

    const atTop = el.scrollTop === 0;
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

    if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) {
      return;
    }

    e.preventDefault();

    el.scrollBy({
      top: e.deltaY,
      behavior: "smooth",
    });
  };

  /* 📱 IMAGE SWIPE → CONTENT SCROLL */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!contentRef.current) return;

    const currentY = e.touches[0].clientY;
    const deltaY = touchStartY.current - currentY;
    const el = contentRef.current;

    const atTop = el.scrollTop === 0;
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

    if ((deltaY < 0 && atTop) || (deltaY > 0 && atBottom)) {
      return;
    }

    e.preventDefault();

    el.scrollBy({ top: deltaY });
    touchStartY.current = currentY;
  };

  return (
    <section className="relative h-[220vh] px-4 md:px-6 lg:px-8 py-16">
      <div className="max-w-[1640px] mx-auto h-full">
        {/* STICKY WRAPPER — SAME AS ABOUT SECTION */}
        <div className="sticky top-48">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* IMAGE — FIXED UNTIL CONTENT ENDS */}
            <div
              onWheel={handleImageWheel}
              onWheelCapture={handleImageWheel}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              className="order-1 lg:order-2 touch-pan-y"
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

            {/* CONTENT — SCROLL TARGET */}
            <div
              ref={contentRef}
              className="
                order-2
                lg:order-1
                h-[620px]
                overflow-y-auto
                pr-0
                lg:pr-6
                space-y-24
                scroll-smooth
                no-scrollbar
                touch-none
              "
            >
              {/* BLOCK 1 */}
              <div className="md:pb-[400px]">
                <span className="inline-block mb-4 border border-gray-400 rounded-full px-4 py-1">
                  Why Choose Us
                </span>

                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4">
                  Delivering <br /> value you can rely on.
                </h2>

                <p className="text-gray-600 max-w-xl mb-10">
                  We provide clear guidance, consistent support, and results
                  that reflect the care and expertise behind every client
                  relationship.
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
              <div className="space-y-8 text-gray-700 h-[100px] md:h-[620px]">
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
                  <div key={item.title} className="flex gap-4">
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
        </div>
      </div>
    </section>
  );
}
