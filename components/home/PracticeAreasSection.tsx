import Image from "next/image";
import Button from "@/components/shared/Button";

const practiceAreas = [
  {
    title: "Personal Injury",
    description:
      "We stand beside injury victims, fighting for fair compensation, accountability, and the justice you deserve during difficult recovery periods.",
    image: "/images/home/practice/img1.png",
  },
  {
    title: "Immigration",
    description:
      "Guiding individuals and families through immigration processes, protecting rights, and building secure futures with trusted legal support worldwide.",
    image: "/images/home/practice/img2.png",
  },
  {
    title: "Criminal Defense",
    description:
      "Protecting your rights with strategic defense, experienced advocacy, and unwavering commitment when freedom and reputation are at stake.",
    image: "/images/home/practice/img3.png",
  },
];

export default function PracticeAreasSection() {
  return (
    <section>
      <div className="max-w-[1640px] mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block mb-4 border border-gray-400 rounded-full px-4 py-1 text-sm md:text-lg">
            Practice Areas
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif">
            Explore Our Practice Areas
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area) => (
            <div
              key={area.title}
              className="
                relative w-full
                aspect-[3/4]
                rounded-[20px]
                overflow-hidden
                group
              "
            >
              {/* Background Image */}
              <Image
                src={area.image}
                alt={area.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl md:text-4xl font-serif mb-3">
                  {area.title}
                </h3>
                <p className="text-sm md:text-md leading-relaxed text-gray-200">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Button title="Explore Our Practice Areas" href="/practice-areas" />
        </div>
      </div>
    </section>
  );
}
