import Image from "next/image";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  src?: string;
}

export default function Breadcrumb({
  title,
  breadcrumbs,
  src,
}: BreadcrumbProps) {
  return (
    <section className="px-4 md:px-6 lg:px-8 pt-8">
      <div
        className="
          relative
          max-w-[1640px] mx-auto
          rounded-[20px]
          overflow-hidden
          flex items-center justify-center
          min-h-[420px] md:min-h-[420px] 
        "
      >
        {/* Background Image */}
        <Image
          src={src ? src : "/images/home/hero/bg.png"}
          alt="Justice background"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 md:px-12">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6">
            {title}
          </h1>

          {/* Breadcrumb */}
          <nav className="flex justify-center">
            <ol className="flex items-center gap-2 text-sm md:text-base">
              {breadcrumbs.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-yellow-400 transition"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-primary">{item.label}</span>
                  )}

                  {index < breadcrumbs.length - 1 && (
                    <span className="text-gray-400">/</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
