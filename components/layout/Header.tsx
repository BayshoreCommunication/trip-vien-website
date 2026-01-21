"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "../shared/Button";

/* ---------------- SVG FLAGS ---------------- */

type FlagProps = { className?: string };

const USFlag = ({ className }: FlagProps) => (
  <svg viewBox="0 0 640 480" className={className}>
    <rect width="640" height="480" fill="#b22234" />
    {[...Array(6)].map((_, i) => (
      <rect key={i} y={40 + i * 80} width="640" height="40" fill="#fff" />
    ))}
    <rect width="280" height="200" fill="#3c3b6e" />
  </svg>
);

const ESFlag = ({ className }: FlagProps) => (
  <svg viewBox="0 0 640 480" className={className}>
    <rect width="640" height="480" fill="#aa151b" />
    <rect y="120" width="640" height="240" fill="#f1bf00" />
  </svg>
);

const FRFlag = ({ className }: FlagProps) => (
  <svg viewBox="0 0 640 480" className={className}>
    <rect width="213" height="480" fill="#0055a4" />
    <rect x="213" width="213" height="480" fill="#fff" />
    <rect x="426" width="214" height="480" fill="#ef4135" />
  </svg>
);

/* ---------------- HEADER ---------------- */

export default function Header() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const langRef = useRef<HTMLDivElement | null>(null);

  const closeAll = () => {
    setOpen(false);
    setLangOpen(false);
    setMobileLangOpen(false);
  };

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close language dropdown on outside click */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langRef.current &&
        !langRef.current.contains(event.target as Node)
      ) {
        setLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Service", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={`sticky z-50 transition-all duration-300 ${
        scrolled ? "top-0" : "top-4"
      } px-4 lg:px-8 py-2`}
    >
      <div className="max-w-[1640px] mx-auto">
        <nav className="bg-black rounded-[20px] px-4 md:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* LOGO */}
            <Link href="/" onClick={closeAll}>
              <Image
                src="/images/nav-logo.png"
                alt="Logo"
                width={1000}
                height={800}
                className="w-[140px] md:w-[200px] h-auto"
              />
            </Link>

            {/* DESKTOP MENU */}
            <ul className="hidden md:flex items-center gap-8 text-lg font-bold">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={
                      pathname === link.href
                        ? "text-primary"
                        : "text-gray-200 hover:text-primary"
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* DESKTOP RIGHT */}
            <div className="hidden md:flex items-center gap-4">

              {/* LANGUAGE DROPDOWN */}
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setLangOpen((v) => !v)}
                  className="flex items-center gap-2 text-white hover:text-primary"
                >
                  <USFlag className="w-5 h-3 rounded-sm" />
                  En <span className="text-sm">▾</span>
                </button>

                {langOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg overflow-hidden">
                    <button
                      onClick={() => {
                        setLangOpen(false);
                        closeAll();
                      }}
                      className="flex items-center gap-3 px-4 py-2 w-full hover:bg-gray-100"
                    >
                      <USFlag className="w-5 h-3" /> English
                    </button>
                    <button
                      onClick={() => {
                        setLangOpen(false);
                        closeAll();
                      }}
                      className="flex items-center gap-3 px-4 py-2 w-full hover:bg-gray-100"
                    >
                      <ESFlag className="w-5 h-3" /> Español
                    </button>
                    <button
                      onClick={() => {
                        setLangOpen(false);
                        closeAll();
                      }}
                      className="flex items-center gap-3 px-4 py-2 w-full hover:bg-gray-100"
                    >
                      <FRFlag className="w-5 h-3" /> Français
                    </button>
                  </div>
                )}
              </div>

              {/* CTA */}
              <Button title="Request A Quote" href="/quote" />
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white text-2xl"
            >
              ☰
            </button>
          </div>

          {/* MOBILE MENU */}
          {open && (
            <div className="md:hidden mt-4 bg-black rounded-xl">
              <ul className="flex flex-col text-gray-200">
                {navLinks.map((link) => (
                  <li key={link.href} className="border-b border-gray-700">
                    <Link
                      href={link.href}
                      onClick={closeAll}
                      className="block px-5 py-3"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}

                {/* MOBILE LANGUAGE */}
                <li className="border-b border-gray-700 px-5 py-3">
                  <button
                    onClick={() =>
                      setMobileLangOpen((v) => !v)
                    }
                    className="flex items-center justify-between w-full"
                  >
                    <span className="flex items-center gap-2">
                      <USFlag className="w-5 h-3" /> En
                    </span>
                    <span>▾</span>
                  </button>

                  {mobileLangOpen && (
                    <div className="mt-3 space-y-2">
                      <button onClick={closeAll} className="flex items-center gap-2">
                        <USFlag className="w-5 h-3" /> English
                      </button>
                      <button onClick={closeAll} className="flex items-center gap-2">
                        <ESFlag className="w-5 h-3" /> Español
                      </button>
                      <button onClick={closeAll} className="flex items-center gap-2">
                        <FRFlag className="w-5 h-3" /> Français
                      </button>
                    </div>
                  )}
                </li>

                {/* MOBILE CTA */}
                <li className="px-5 py-4">
                  <Button title="Request A Quote" href="/quote" />
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
