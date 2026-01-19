import Image from "next/image";
import Button from "@/components/shared/Button";

export default function RequestConsultation() {
  return (
    <section className="">
      <div className="relative w-screen overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <Image
          src="/images/home/request/img.png" 
          alt="Request a free consultation"
          fill
          priority
          className="object-cover object-center"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#181818] via-black/60 to-[#181818" />

        {/* CONTENT */}
        <div className="max-w-[1640px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center min-h-[280px] md:min-h-[340px] px-6 md:px-12 py-10">

          {/* LEFT CONTENT */}
          <div className="text-white max-w-4xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4">
              Request A Free Consultation
            </h2>

            <p className="text-gray-200 mb-8 leading-relaxed">
              Connect with our team for a clear, thoughtful review of your case
              and guidance on the best path forward.
            </p>

            <Button title="Free Consultancy" href="/contact" />
          </div>

          {/* RIGHT IMAGE SPACE (visual balance only) */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
