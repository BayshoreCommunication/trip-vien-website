import Image from "next/image";
import Link from "next/link";
import Button from "components/shared/Button";
import { PRACTICE_DATA } from "lib/practice-data";
import Breadcrumb from "components/share/Breadcrumb";

type PageProps = {
  params: {
    slug: string;
    service: string;
  };
};

export default function ServiceDetailPage({ params }: PageProps) {
  const area = PRACTICE_DATA[params.slug];
  const service = area?.services.find((s) => s.slug === params.service);

  if (!area || !service) {
    return (
      <section className="px-4 py-20 text-center">
        <h2 className="text-3xl">Service not found</h2>
        <Link href={`/practice-areas/${params.slug}`} className="underline">
          ← Back
        </Link>
      </section>
    );
  }

  return (
    <div>
      <Breadcrumb
        src="/images/home/hero/bg.png"
        title="Practice Overview"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: " Services Details" },
        ]}
      />
      <section className="px-4 md:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-[1640px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-2">
            {/* TITLE */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
              {service.title}
            </h1>

            {/* IMAGE */}
            <div className="relative w-full  rounded-xl overflow-hidden mb-4">
              <Image
                src={service.details_img}
                alt={service.title}
                width={1000}
                height={800}
                className="object-cover w-full h-auto"
              />
            </div>

            {/* DATE */}
            {/* <p className="text-sm text-gray-500 mb-8">July 25, 2023</p> */}

            {/* CONTENT */}
            <div className="space-y-6 text-gray-700 leading-relaxed my-8 whitespace-pre-line">
              {service.content}
            </div>

            {/* CTA */}
            <Button title="Get A Free Consultation" href="/contact" />
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <aside className="space-y-8">
            {area.services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <div
                  key={s.slug}
                  className="
                  bg-white
                  rounded-xl
                  border border-gray-100
                  p-6
                  shadow-sm
                "
                >
                  <div className="flex items-center gap-3">
                    {/* ICON */}
                    {/* <div className="mb-4">
                      <Image
                        src={s.image}
                        alt={s.title}
                        width={28}
                        height={28}
                      />
                    </div> */}

                    {/* TITLE */}
                    <h4 className="font-semibold mb-3 text-lg md:text-2xl">
                      {s.title}
                    </h4>
                  </div>

                  {/* GOLD DIVIDER */}
                  <div className="w-full h-[2px] bg-[#E7B540] mb-4" />

                  {/* DESCRIPTION */}
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {s.description}
                  </p>

                  {/* CTA */}
                  <Link
                    href={`/practice-areas/${params.slug}/${s.slug}`}
                    className="
                    inline-flex items-center gap-2
                    bg-primary
                    px-4 py-2
                    text-sm font-medium
                    rounded
                    hover:opacity-90
                    transition
                  "
                  >
                    Explore
                    <span>↗</span>
                  </Link>
                </div>
              ))}
          </aside>
        </div>
      </section>
    </div>
  );
}
