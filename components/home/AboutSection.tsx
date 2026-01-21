"use client";

import Image from "next/image";
import Button from "@/components/shared/Button";
import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const animating = useRef(false);
  const touchStartY = useRef<number | null>(null);

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
          setActiveBlock(0); // reset on leave
        }
      },
      { threshold: 0.65 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  /* ---------------- MOUSE WHEEL (DESKTOP) ---------------- */
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (!sectionActive || animating.current) return;

      // Scroll down → block 1 → block 2
      if (e.deltaY > 0 && activeBlock === 0) {
        e.preventDefault();
        animating.current = true;
        setActiveBlock(1);
        setTimeout(() => (animating.current = false), 900);
        return;
      }

      // Scroll up → block 2 → block 1
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

  /* ---------------- TOUCH (MOBILE) ---------------- */
  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (
        !sectionActive ||
        animating.current ||
        touchStartY.current === null
      )
        return;

      const currentY = e.touches[0].clientY;
      const diff = touchStartY.current - currentY;

      // Swipe up → block 1 → block 2
      if (diff > 40 && activeBlock === 0) {
        animating.current = true;
        setActiveBlock(1);
        setTimeout(() => (animating.current = false), 900);
        touchStartY.current = null;
      }

      // Swipe down → block 2 → block 1
      if (diff < -40 && activeBlock === 1) {
        animating.current = true;
        setActiveBlock(0);
        setTimeout(() => (animating.current = false), 900);
        touchStartY.current = null;
      }
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [sectionActive, activeBlock]);

  return (
    <section ref={sectionRef} className="px-4 md:px-6 lg:px-8 py-8">
      <div className="max-w-[1640px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE (TOP ON MOBILE, LEFT ON DESKTOP) */}
        <div className="relative rounded-[20px] overflow-hidden lg:sticky ">
          <Image
            src="/images/home/about/img.png"
            alt="About"
            width={1000}
            height={800}
            priority
            className="object-cover object-top scale-[1.02]"
          />
        </div>

        {/* CONTENT */}
        <div className="relative h-[570px] overflow-hidden">

          {/* -------- BLOCK 1 -------- */}
          <div
            className={`
              absolute inset-0
              transition-all duration-[900ms]
              ease-[cubic-bezier(0.65,0,0.35,1)]
              ${
                activeBlock === 0
                  ? "opacity-100 translate-y-0 blur-0 pointer-events-auto"
                  : "opacity-0 -translate-y-20 blur-sm pointer-events-none"
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
                outstanding immigration representation and a deep commitment to
                humanity go hand in hand.
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
              ${
                activeBlock === 1
                  ? "opacity-100 translate-y-0 blur-0 pointer-events-auto"
                  : "opacity-0 translate-y-20 blur-sm pointer-events-none"
              }
            `}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6">
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
