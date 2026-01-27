import { PRACTICE_DATA } from "lib/practice-data";
import Link from "next/link";
import Image from "next/image";
import Button from "components/shared/Button";
import Breadcrumb from "components/share/Breadcrumb";

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
    <div>
      <Breadcrumb
        src="/images/home/hero/bg.png"
        title="Our Practice Areas"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Practice Areas" },
        ]}
      />
      ;
      <section className="px-4 md:px-6 lg:px-8 py-8 md:py-8 ">
        <div className="max-w-[1640px] mx-auto">
          {/* HEADER */}
          <div className="text-center mb-16">
            <span className="inline-block mb-4 border border-gray-400 rounded-full px-4 py-1 text-sm md:text-lg">
              Practice Area
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              {area.title}
            </h1>
          </div>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {area.services.map((service) => (
              <div
                key={service.slug}
                className="
                bg-white rounded-xl
                border border-gray-100
                p-8
                shadow-sm
                hover:shadow-md
                transition
              "
              >
                <div className="flex items-center gap-3">
                  {/* ICON */}
                  {/* <div className="mb-5">
                    <Image
                      src={service.image} // replace if needed
                      alt={service.title}
                      width={40}
                      height={40}
                    />
                  </div> */}

                  {/* TITLE */}
                  <h3 className="text-xl md:text-2xl font-semibold mb-3">
                    {service.title}
                  </h3>
                </div>

                {/* DIVIDER */}
                <div className="w-full h-[2px] bg-[#E7B540]/20 mb-4" />

                {/* DESCRIPTION */}
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* CTA */}
                <Button
                  title="Explore"
                  href={`/practice-areas/${params.slug}/${service.slug}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
