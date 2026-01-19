import Image from "next/image";
import Link from "next/link";
import Button from "@/components/shared/Button";
import { PRACTICE_DATA } from "@/lib/practice-data";

type PageProps = {
  params: {
    slug: string;
    service: string;
  };
};

export default function ServiceDetailPage({ params }: PageProps) {
  const area = PRACTICE_DATA[params.slug];
  const service = area?.services.find(
    (s) => s.slug === params.service
  );

  if (!area || !service) {
    return (
      <section className="px-4 py-20 text-center">
        <h2 className="text-3xl">Service not found</h2>
        <Link
          href={`/practice-areas/${params.slug}`}
          className="underline"
        >
          ← Back
        </Link>
      </section>
    );
  }

  return (
    <section className="px-4 md:px-6 lg:px-8 py-8 md:py-16">
      <div className="max-w-[1640px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
            {service.title}
          </h1>

          <div className="relative w-full h-[420px] rounded-xl overflow-hidden mb-8">
            <Image
              src="/images/services/default.jpg"
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>

          <p className="text-gray-700 leading-relaxed mb-10">
            {service.description}
          </p>

          <Button title="Get A Free Consultation" href="/contact" />
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-6">
          {area.services
            .filter((s) => s.slug !== service.slug)
            .map((s) => (
              <div
                key={s.slug}
                className="border rounded-xl p-5 bg-white"
              >
                <h4 className="font-semibold mb-2">{s.title}</h4>
                <p className="text-sm text-gray-600 mb-4">
                  {s.description}
                </p>
                <Link
                  href={`/practice-areas/${params.slug}/${s.slug}`}
                  className="text-primary text-sm font-medium"
                >
                  Explore ↗
                </Link>
              </div>
            ))}
        </aside>

      </div>
    </section>
  );
}
