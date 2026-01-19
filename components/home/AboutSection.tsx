"use client";

import Image from "next/image";
import Button from "@/components/shared/Button";
import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const wheelBuffer = useRef(0);

  const [activeBlock, setActiveBlock] = useState<0 | 1>(0);
  const [inside, setInside] = useState(false);

  const lockBody = () => {
    document.body.style.overflow = "hidden";
  };

  const unlockBody = () => {
    document.body.style.overflow = "";
  };

  /* ---------------- RESET WHEN SECTION ENTERS VIEW ---------------- */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // reset behaviour every time section appears
          setActiveBlock(0);
          setInside(false);
          wheelBuffer.current = 0;
          unlockBody();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /* ---------------- SCROLL LOGIC ---------------- */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onWheel = (e: WheelEvent) => {
      if (!inside) return;

      wheelBuffer.current += e.deltaY;

      // SCROLL DOWN
      if (wheelBuffer.current > 120) {
        if (activeBlock === 1) {
          unlockBody();
          setInside(false);
        } else {
          e.preventDefault();
          setActiveBlock(1);
        }
        wheelBuffer.current = 0;
      }

      // SCROLL UP
      if (wheelBuffer.current < -120) {
        if (activeBlock === 0) {
          unlockBody();
          setInside(false);
        } else {
          e.preventDefault();
          setActiveBlock(0);
        }
        wheelBuffer.current = 0;
      }
    };

    section.addEventListener("wheel", onWheel, { passive: false });

    return () => section.removeEventListener("wheel", onWheel);
  }, [inside, activeBlock]);

  /* ---------------- CLEANUP ---------------- */
  useEffect(() => {
    return () => unlockBody();
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseEnter={() => {
        setInside(true);
        lockBody();
      }}
      onMouseLeave={() => {
        setInside(false);
        unlockBody();
      }}
      onTouchStart={() => {
        setInside(true);
        lockBody();
      }}
      onTouchEnd={() => {
        setInside(false);
        unlockBody();
      }}
      className="px-4 md:px-6 lg:px-8 py-8 md:pt-16"
    >
      <div className="max-w-[1640px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* LEFT IMAGE */}
        <div className="hidden lg:block sticky top-24">
          <div className="relative h-[520px] rounded-[20px] overflow-hidden">
            <Image
              src="/images/home/about/img.png"
              alt="Trip Vien Law Team"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* MOBILE IMAGE */}
        <div className="lg:hidden relative h-[320px] sm:h-[420px] rounded-[20px] overflow-hidden">
          <Image
            src="/images/home/about/img.png"
            alt="Trip Vien Law Team"
            fill
            className="object-cover object-top"
          />
        </div>

        {/* CONTENT */}
        <div className="relative min-h-[520px] overflow-hidden">
          {/* BLOCK 1 */}
          <div
            className={`absolute inset-0 transition-all duration-700 ease-in-out
              ${
                activeBlock === 0
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-8 pointer-events-none"
              }`}
          >
            <span className="inline-block mb-4 border border-gray-400 rounded-full px-4 py-1">
              About Us
            </span>

            <h2 className="text-4xl lg:text-5xl xl:text-6xl mb-6">
              Dedicated to <br /> Making a Difference
            </h2>

            <p className="text-gray-700 mb-6">
              Outstanding immigration representation with humanity and trust.
            </p>

            <Button title="Read More" href="/about" />
          </div>

          {/* BLOCK 2 */}
          <div
            className={`absolute inset-0 transition-all duration-700 ease-in-out
              ${
                activeBlock === 1
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 pointer-events-none"
              }`}
          >
            <span className="inline-block mb-4 border border-gray-400 rounded-full px-4 py-1">
              Our Mission
            </span>

            <h3 className="text-3xl lg:text-4xl mb-6">
              Excellence Through Advocacy
            </h3>

            <p className="text-gray-700 mb-6">
              Built on trust, transparency, and results that change lives.
            </p>

            <Button title="Get Started" href="/contact" />
          </div>
        </div>
      </div>
    </section>
  );
}
