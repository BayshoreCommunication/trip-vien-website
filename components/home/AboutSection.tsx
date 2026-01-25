"use client";

import Image from "next/image";
import Button from "components/shared/Button";
import { useRef } from "react";
import Reveal from "../motion/Reveal";

export default function AboutSection() {
  const rightScrollRef = useRef<HTMLDivElement>(null);

  /* 🔑 Redirect wheel ONLY when hovering IMAGE */
  const handleImageWheel = (e: React.WheelEvent) => {
    if (!rightScrollRef.current) return;

    const el = rightScrollRef.current;

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

  return (
    <section className="relative h-[220vh] px-4 md:px-6 lg:px-8 py-8">
      <div className="max-w-[1640px] mx-auto h-full">
        <div className="sticky top-48 flex items-start">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
            
            {/* LEFT IMAGE */}
            <Reveal x={-100} opacityFrom={0} duration={3}>
              <div
                className="relative rounded-[20px] overflow-hidden"
                onWheel={handleImageWheel}
                onWheelCapture={handleImageWheel}
              >
                <Image
                  src="/images/home/about/img.png"
                  alt="About"
                  width={1000}
                  height={800}
                  priority
                  className="object-cover object-top w-full h-full"
                />
              </div>
            </Reveal>

            {/* RIGHT CONTENT */}
            <div
              ref={rightScrollRef}
              className="
                h-[450px]
                overflow-y-auto
                pr-4
                space-y-40
                no-scrollbar
              "
            >
              {/* BLOCK 1 */}
              <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
                <div>
                  <span className="inline-block mb-4 border border-gray-400 rounded-full px-4 py-1">
                    About Us
                  </span>

                  <h2 className="text-3xl md:text-4xl xl:text-6xl mb-6">
                    Dedicated to <br /> Making a Difference
                  </h2>

                  <p className="text-gray-700 mb-4">
                    At Trip Vien Law we set out to create a unique law firm where
                    outstanding representation and humanity go hand in hand.
                  </p>

                  <p className="text-gray-700 mb-6">
                    Our attorneys believe in integrity, compassion, and results.
                  </p>

                  <Button title="Read More" href="/about" />
                </div>
              </Reveal>

              {/* BLOCK 2 */}
              <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
                <div className="pb-[100px]">
                  <h2 className="text-3xl md:text-4xl xl:text-6xl mb-6">
                    Your advocate in <br /> injury & criminal cases
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700">
                    <div className="border-l pl-6 space-y-2">
                      <p>Citizenship</p>
                      <p>Naturalization</p>
                      <p>Family Immigration</p>
                    </div>
                    <div className="border-l pl-6 space-y-2">
                      <p>Removal Defense</p>
                      <p>Consular Processing</p>
                      <p>Criminal Defense</p>
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
