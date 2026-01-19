import Image from "next/image";
import Button from "@/components/shared/Button";

export default function AboutSection() {
  return (
    <section className="px-4 md:px-6 lg:px-8 py-8  md:pt-16">
      <div
        className="
          max-w-[1640px] mx-auto
          grid grid-cols-1 lg:grid-cols-2
          gap-10 lg:gap-16
          items-center
        "
      >
        {/* IMAGE (Top on Mobile, Left on Desktop) */}
        <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px] rounded-[20px] overflow-hidden">
          <Image
            src="/images/home/about/img.png" // replace with your image
            alt="Trip Vien Law Team"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* CONTENT */}
        <div>
          {/* Small Label */}
          <span
            className="
              inline-block mb-4
              border border-gray-400
              rounded-full
              px-4 py-1
              text-sm md:text-lg
            "
          >
            About us
          </span>

          {/* Heading */}
          <h2
            className="
              text-3xl md:text-4xl lg:text-5xl xl:text-6xl
              leading-tight
              mb-6
            "
          >
            Dedicated to <br className="hidden sm:block" />
            Making a Difference
          </h2>

          {/* Paragraphs */}
          <div className="space-y-4 text-gray-700 leading-relaxed">
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
              Trip Vien Law at this moment is the home to some of the most
              experienced lawyers. Trip Vien Law has turned into a leader in
              the field of immigration law. The growth of Trip Vien Law was
              fueled by excellence, integrity, and a hard-earned reputation
              for quality.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Button title="Read More" href="/about" />
          </div>
        </div>
      </div>
    </section>
  );
}
