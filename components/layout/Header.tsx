"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "../shared/Button";

/* ---------------- HEADER ---------------- */

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Service", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="sticky top-4 z-50 px-4 lg:px-8 py-2">
      {/* OUTER CONTAINER */}
      <div className="max-w-[1640px] mx-auto">
        {/* NAV BAR */}
        <nav className="bg-black rounded-[20px] px-4 md:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link href="/" onClick={closeMenu}>
              <Image
                src="/images/nav-logo.png"
                alt="Logo"
                width={1000}
                height={800}
                className="max-w-[140px] md:max-w-[150px]"
              />
            </Link>

            {/* Desktop Menu */}
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

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button title="Request A Quote" href="/quote" />
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white text-2xl"
            >
              ☰
            </button>
          </div>

          {/* ---------------- MOBILE MENU ---------------- */}
          {open && (
            <div className="md:hidden mt-4 bg-black rounded-xl">
              <ul className="flex flex-col text-gray-200">

                {navLinks.map((link) => (
                  <li key={link.href} className="border-b border-gray-700">
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="block px-5 py-3"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}

                {/* Mobile CTA */}
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
