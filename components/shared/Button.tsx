import Link from "next/link";
import Image from "next/image";

type ButtonProps = {
  title: string;
  href: string;
};

export default function Button({ title, href }: ButtonProps) {
  return (
    <Link
      href={href}
      className="
        relative inline-flex items-center gap-2
        px-5 py-3 rounded-md
        font-medium text-black
        bg-primary
        overflow-hidden
        transition-colors duration-300
        group
      "
    >
      {/* Sliding background */}
      <span
        className="
          absolute inset-0
          bg-yellow-400
          transform -translate-x-full
          transition-transform duration-300 ease-out
          group-hover:translate-x-0
        "
      />

      {/* Content (keep above background) */}
      <span className="relative z-10">{title}</span>
      <Image
        src="/images/btn-arrow.png"
        alt="arrow right"
        width={24}
        height={24}
        className="relative z-10"
      />
    </Link>
  );
}
