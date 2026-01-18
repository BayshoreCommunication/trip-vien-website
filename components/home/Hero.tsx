import Image from "next/image";
import Button from "@/components/shared/Button";

export default function Hero() {
  return (
    <section className="px-4 md:px-6 lg:px-8 py-8 md:py-10">
      <div
        className="
          relative
          max-w-[1640px] mx-auto
          rounded-[20px]
          overflow-hidden
          flex items-center justify-center
          min-h-[420px] md:min-h-[520px] lg:min-h-[620px]
        "
      >
        {/* Background Image */}
        <Image
          src="/images/home/hero/bg.png"
          alt="Justice background"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Content */}
        <div className="relative z-10 w-full px-6 md:px-12 text-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight max-w-4xl mx-auto mb-8 md:mb-16">
            Empowering Legal Success With <br className="hidden md:block" />
            Results That Matter
          </h1>

          <p className="mt-6 text-gray-200 text-sm md:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            Where seasoned immigration attorneys blend federal experience,
            compassion, and integrity to deliver guidance clients can trust and
            results that truly make a difference.
          </p>

          <div className="mt-10 flex justify-center">
            <Button title="Practice Areas" href="/practice-areas" />
          </div>
        </div>
      </div>
    </section>
  );
}
