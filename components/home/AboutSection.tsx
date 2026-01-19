"use client";

import Image from "next/image";
import Button from "@/components/shared/Button";
import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
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
          setActiveBlock(0); // reset when leaving
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

      // animation running → lock
      if (animating.current) {
        e.preventDefault();
        return;
      }

      // scroll down
      if (e.deltaY > 0) {
        if (activeBlock === 0) {
          e.preventDefault();
          animating.current = true;
          setActiveBlock(1);
          setTimeout(() => (animating.current = false), 900);
          return;
        }
        // block 2 finished → allow body scroll
        return;
      }

      // scroll up
      if (e.deltaY < 0) {
        if (activeBlock === 1) {
          e.preventDefault();
          animating.current = true;
          setActiveBlock(0);
          setTimeout(() => (animating.current = false), 900);
          return;
        }
        // block 1 finished → allow body scroll
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
        {/* LEFT IMAGE */}
        <div className="hidden lg:block sticky top-24">
          <div className="relative h-[520px] rounded-[20px] overflow-hidden">
            <Image
              src="/images/home/about/img.png"
              alt="About"
              fill
              priority
              className="object-cover scale-[1.02] transition-transform duration-[1200ms]"
            />
          </div>
        </div>

        {/* MOBILE IMAGE */}
        <div className="lg:hidden relative h-[320px] rounded-[20px] overflow-hidden">
          <Image
            src="/images/home/about/img.png"
            alt="About"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative h-[520px] overflow-hidden">
          {/* -------- BLOCK 1 -------- */}
          <div
            className={`
              absolute inset-0
              transition-all duration-[900ms]
              ease-[cubic-bezier(0.65,0,0.35,1)]
              will-change-transform will-change-opacity
              ${
                activeBlock === 0
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 -translate-y-20 blur-sm"
              }
            `}
          >
            <span className="inline-block mb-4 border border-gray-400 rounded-full px-4 py-1">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6">
              Dedicated to <br className="hidden sm:block" />
              Making a Difference
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                At Trip Vien Law we set out to create a unique law firm where
                outstanding immigration representation and a deep commitment
                to humanity go hand in hand.
              </p>

              <p>
                Attorney Hardam Tripathi was a former legal professional in the
                federal government. Attorney Yongsyprasom believes in providing
                honest, compassionate, and results-driven representation.
              </p>

              <p>
                Trip Vien Law has turned into a leader in the field of
                immigration law, fueled by excellence, integrity, and a
                hard-earned reputation for quality.
              </p>
            </div>

            <div className="mt-8">
              <Button title="Read More" href="/about" />
            </div>
          </div>

          {/* -------- BLOCK 2 -------- */}
          <div
            className={`
              absolute inset-0
              transition-all duration-[900ms]
              ease-[cubic-bezier(0.65,0,0.35,1)]
              will-change-transform will-change-opacity
              ${
                activeBlock === 1
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-20 blur-sm"
              }
            `}
          >
            <h2 className="text-4xl xl:text-5xl font-serif leading-tight mb-10">
              Your advocate in <br />
              injury and criminal cases
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700">
              <div className="border-l border-gray-300 pl-6 space-y-3">
                <p>Citizenship</p>
                <p>Naturalization Services</p>
                <p>Family-Based Immigration</p>
              </div>

              <div className="border-l border-gray-300 pl-6 space-y-3">
                <p>Removal Defense</p>
                <p>Consular Processing</p>
                <p>Criminal Defense Practice Group</p>
              </div>
            </div>

            <div className="mt-12">
              <Button title="Get Started Today" href="/contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
