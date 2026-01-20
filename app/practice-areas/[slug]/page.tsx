import { PRACTICE_DATA } from "@/lib/practice-data";
import Link from "next/link";


type PageProps = {
  params: {
    slug: string;
  };
};

export default function PracticeAreaPage({ params }: PageProps) {
  const area = PRACTICE_DATA[params.slug];

  if (!area) {
    return (
      <section className="px-4 py-20 text-center">
        <h2 className="text-3xl">Page not found</h2>
        <Link href="/practice-areas" className="underline">
          ← Back to Practice Areas
        </Link>
      </section>
    );
  }

  return (
    <section className="px-4 md:px-6 lg:px-8 py-8 md:py-16">
      <div className="max-w-[1640px] mx-auto">

        {/* HEADER */}
        <div className="text-left md:text-center mb-14">
          <span className="inline-block mb-4 border border-gray-400 rounded-full px-4 py-1 text-sm">
            Practice Area
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif">
            {area.title}
          </h1>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {area.services.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-sm text-gray-600 mb-6">
                {service.description}
              </p>

              <Link
                href={`/practice-areas/${params.slug}/${service.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary"
              >
                Explore ↗
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
