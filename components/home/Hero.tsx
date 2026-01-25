"use client";

import Image from "next/image";
import Reveal from "../motion/Reveal";

import { useTypewriter } from "@/hooks/useTypewriter";
import Button from "components/shared/Button";

export default function Hero() {
  const { displayedText, isDone } = useTypewriter(
    "Empowering Legal Success with Results That Matter",
    {
      speed: 60,
      startDelay: 300,
    }
  );

  return (
    <section className="px-4 md:px-6 lg:px-8 py-8 md:py-10">
      <div className="relative max-w-[1640px] mx-auto rounded-[20px] overflow-hidden min-h-[520px] flex items-center justify-center">
        
        {/* IMAGE */}
        
          <Image
            src="/images/home/hero/bg.png"
            alt="Justice background"
            fill
            priority
            className="object-cover"
          />

        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 text-center px-6 w-full max-w-5xl">
          
          {/* TEXT */}
          <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 text-white whitespace-pre-line">
              {displayedText}
              {!isDone && <span className="animate-pulse"></span>}
            </h1>
          </Reveal>

          <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
            <p className="text-white/80 max-w-2xl mx-auto my-8">
              Where seasoned immigration attorneys blend federal experience,
              compassion, and integrity to deliver guidance clients can trust
              and results that truly make a difference.
            </p>
          </Reveal>

          <div className="mt-10">
            <Button title="Practice Areas" href="/practice-areas" />
          </div>
        </div>
      </div>
    </section>
  );
}
