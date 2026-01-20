"use client";

import Image from "next/image";
import Button from "@/components/shared/Button";
import { useEffect, useRef, useState } from "react";

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const animating = useRef(false);

  const [activeBlock, setActiveBlock] = useState<0 | 1>(0);
  const [sectionActive, setSectionActive] = useState(false);

  /* ---------------- SECTION VISIBILITY ---------------- */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionActive(true);
        } else {
          setSectionActive(false);
          setActiveBlock(0);
        }
      },
      { threshold: 0.65 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  /* ---------------- SCROLL CONTROL ---------------- */
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (!sectionActive) return;

      if (animating.current) {
        e.preventDefault();
        return;
      }

      // ↓ Block 1 → Block 2
      if (e.deltaY > 0 && activeBlock === 0) {
        e.preventDefault();
        animating.current = true;
        setActiveBlock(1);
        setTimeout(() => (animating.current = false), 900);
        return;
      }

      // ↑ Block 2 → Block 1
      if (e.deltaY < 0 && activeBlock === 1) {
        e.preventDefault();
        animating.current = true;
        setActiveBlock(0);
        setTimeout(() => (animating.current = false), 900);
        return;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [sectionActive, activeBlock]);

  return (
    <section
      ref={sectionRef}
      className="px-4 md:px-6 lg:px-8 py-8 md:py-16"
    >
      <div className="max-w-[1640px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE — TOP ON MOBILE, RIGHT ON DESKTOP */}
        <div className="order-1 lg:order-2 sticky lg:top-24">
          <div className="relative rounded-[20px] overflow-hidden">
            <Image
              src="/images/home/choose/img.png"
              alt="Why Choose Us"
              width={1000}
              height={800}
              priority
              className="object-cover object-center scale-[1.02]"
            />
          </div>
        </div>

        {/* CONTENT — BELOW IMAGE ON MOBILE, LEFT ON DESKTOP */}
        <div className="order-2 lg:order-1 relative h-[620px] overflow-hidden">

          {/* -------- BLOCK 1 -------- */}
          <div
            className={`
              absolute inset-0
              transition-all duration-[900ms]
              ease-[cubic-bezier(0.65,0,0.35,1)]
              ${
                activeBlock === 0
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-20 pointer-events-none"
              }
            `}
          >
            <span className="inline-block mb-4 border border-gray-400 rounded-full px-4 py-1 text-sm md:text-lg">
              Why Choose Us
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4">
              Delivering <br /> value you can rely on.
            </h2>

            <p className="text-gray-600 max-w-xl mb-8">
              We provide clear guidance, consistent support, and results that
              reflect the care and expertise behind every client relationship.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Image src="/images/home/choose/img1.png" alt="" width={40} height={40} />
                <div>
                  <h4 className="text-md md:text-xl font-bold">
                    Expert Legal Advice
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Experienced attorneys providing clear guidance and strong
                    representation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Image src="/images/home/choose/img2.png" alt="" width={40} height={40} />
                <div>
                  <h4 className="text-md md:text-xl font-bold">
                    Efficient Case Handling
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Careful, efficient handling for faster resolutions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Image src="/images/home/choose/img3.png" alt="" width={40} height={40} />
                <div>
                  <h4 className="text-md md:text-xl font-bold">
                    Cost-Effective
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Flexible fee structures with real value.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Button title="Get A Free Consultation" href="/contact" />
            </div>
          </div>

          {/* -------- BLOCK 2 -------- */}
          <div
            className={`
              absolute inset-0
              transition-all duration-[900ms]
              ease-[cubic-bezier(0.65,0,0.35,1)]
              ${
                activeBlock === 1
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20 pointer-events-none"
              }
            `}
          >
            <div className="space-y-8 text-gray-700">

              <div className="flex gap-4">
                <Image src="/images/home/choose/img4.png" alt="" width={40} height={40} />
                <div>
                  <h4 className="text-md md:text-xl font-bold">
                    Personalized Attention
                  </h4>
                  <p className="text-sm">
                    Dedicated focus on your case with a deep understanding of
                    your unique needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Image src="/images/home/choose/img5.png" alt="" width={40} height={40} />
                <div>
                  <h4 className="text-md md:text-xl font-bold">
                    Confidentiality and Trust
                  </h4>
                  <p className="text-sm">
                    Sensitive information handled with the highest level of
                    confidentiality.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Image src="/images/home/choose/img6.png" alt="" width={40} height={40} />
                <div>
                  <h4 className="text-md md:text-xl font-bold">
                    Proactive Legal Planning
                  </h4>
                  <p className="text-sm">
                    Strategic planning to prevent future legal challenges.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
