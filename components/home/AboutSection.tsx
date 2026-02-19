"use client";

import Image from "next/image";
import Button from "components/shared/Button";
import { useEffect, useRef } from "react";
import Reveal from "../motion/Reveal";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rightScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ❌ Disable on mobile
    if (window.innerWidth < 1024) return;

    const handleScroll = () => {
      if (!sectionRef.current || !rightScrollRef.current) return;

      const section = sectionRef.current;
      const content = rightScrollRef.current;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const totalScroll = section.offsetHeight - viewportHeight;
      if (totalScroll <= 0) return;

      // Scroll progress (0 → 1)
      const progress = Math.min(Math.max(-rect.top / totalScroll, 0), 1);

      const maxInnerScroll = content.scrollHeight - content.clientHeight;

      content.scrollTop = progress * maxInnerScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        px-4 md:px-6 lg:px-8
        h-auto lg:h-[220vh]
        py-6 
      "
    >
      {/* Sticky container */}
      <div className="lg:sticky lg:top-16 h-auto lg:h-screen flex items-center">
        <div className="max-w-[1640px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* IMAGE */}
            <Reveal x={-100} opacityFrom={0} duration={2}>
              <div className="relative rounded-[20px] overflow-hidden">
                <Image
                  src="/images/home/about/img.jpeg"
                  alt="About"
                  width={1000}
                  height={800}
                  priority
                  className="object-cover w-full h-full"
                />
              </div>
            </Reveal>

            {/* RIGHT CONTENT (SCROLLS VIA PAGE SCROLL ON DESKTOP) */}
            <div
              ref={rightScrollRef}
              className="
                h-auto lg:h-[450px]
                overflow-visible lg:overflow-hidden
                space-y-8
                lg:space-y-40
                pr-0 lg:pr-4
              "
            >
              {/* BLOCK 1 */}
              <Reveal y={100} opacityFrom={0} duration={2}>
                <div>
                  <span className="inline-block mb-4 border border-gray-400 rounded-full px-4 py-1">
                    About Us
                  </span>

                  <h2 className="text-3xl md:text-4xl xl:text-6xl mb-6">
                    Dedicated to <br /> Making a Difference
                  </h2>

                  <p className="text-gray-700 mb-4">
                    At Tripathi Vongsyprasom Law, P.A. we set out to create a
                    unique law firm where outstanding representation and
                    humanity go hand in hand.
                  </p>

                  <p className="text-gray-700 mb-6">
                    Our attorneys believe in integrity, compassion, and results.
                  </p>

                  <Button title="Read More" href="/about" />
                </div>
              </Reveal>

              {/* BLOCK 2 */}
              <Reveal y={100} opacityFrom={0} duration={2}>
                <div className="lg:pb-40">
                  <h2 className="text-3xl md:text-4xl xl:text-6xl mb-6">
                    Your advocate in personal injury, immigration, & DUI defense
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700">
                    <div className="border-l pl-6 space-y-2">
                      <p>Immigration & Nationality Law</p>
                      <p>Business & investor immigration</p>
                      <p>Employment visas & green cards</p>
                    </div>
                    <div className="border-l pl-6 space-y-2">
                      <p>Family immigration</p>
                      <p>Citizenship & naturalization</p>
                      <p>Deportation defense</p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <Button title="Get Started Today" href="/contact" />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
