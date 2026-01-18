import Image from "next/image";
import Button from "@/components/shared/Button";

export default function WhyChooseUs() {
  return (
    <section>
      <div className="max-w-[1640px] mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE (TOP ON MOBILE) */}
          <div className="order-1 lg:order-2 relative rounded-[20px] overflow-hidden">
            <Image
              src="/images/home/choose/img.png"
              alt="Office meeting"
              width={1000}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* CONTENT (BOTTOM ON MOBILE) */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <span className="inline-block mb-4 border border-gray-400 rounded-full px-4 py-1 text-sm md:text-lg">
              Why Choose Us
            </span>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif leading-tight mb-4">
              Delivering <br /> value you can rely on.
            </h2>

            {/* Intro */}
            <p className="text-gray-600 max-w-xl mb-8">
              We provide clear guidance, consistent support, and results that
              reflect the care and expertise behind every client relationship.
            </p>

            {/* FEATURES */}
            <div className="space-y-6">
              {/* Item */}
              <div className="flex gap-4">
                <Image
                  src="/images/home/choose/img1.png"
                  alt="Expert Advice"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <div>
                  <h4 className="text-md md:text-xl font-bold">
                    Expert Legal Advice
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Where experienced attorneys deliver clear guidance and
                    strong representation for every immigration goal.
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="flex gap-4">
                <Image
                  src="/images/home/choose/img2.png"
                  alt="Case Handling"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <div>
                  <h4 className="text-md md:text-xl font-bold">
                    Efficient Case Handling
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We handle your legal matters with care and efficiency,
                    helping you reach a faster, more effective resolution.
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="flex gap-4">
                <Image
                  src="/images/home/choose/img3.png"
                  alt="Cost Effective"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <div>
                  <h4 className="text-md md:text-xl font-bold">
                    Cost-Effective
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We offer flexible fee structures, providing cost-effective
                    legal solutions compared to larger firms.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Button title="Get A Free Consultation" href="/contact" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
