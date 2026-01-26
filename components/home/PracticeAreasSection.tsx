import Image from "next/image";
import Link from "next/link";
import { practiceAreas } from "lib/practiceAreas";
import Button from "../shared/Button";

export default function PracticeAreasSection() {
  return (
    <section className="px-4 md:px-6 lg:px-8 py-8" id="practice-areas">
      <div className="max-w-[1640px] mx-auto">
        <div className="flex flex-col items-start md:items-center text-left md:text-center mb-8">
          <span className="inline-block mb-4 border border-gray-400 rounded-full px-4 py-1 text-sm md:text-lg">
            Practice Areas
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4">
            Explore Our Practice Areas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/practice-areas/${area.slug}`}
              className="group relative aspect-[3/4] rounded-[20px] overflow-hidden"
            >
              <Image
                src={`${area.image}`}
                alt={area.title}
                fill
                className="object-cover group-hover:scale-110 transition"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl md:text-4xl font-serif">
                  {area.title}
                </h3>
                <p className="text-sm text-gray-200">{area.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex justify-start md:justify-center items-center">
          <Button title="Explore Our Practice Areas" href="/practice-areas" />
        </div>
      </div>
    </section>
  );
}
