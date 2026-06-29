"use client";

import { useEffect, useState } from "react";

const links = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? "scale-95" : "scale-100"
      }`}
    >
      <nav
        className="
        nav-glass
        flex
        items-center
        justify-between
        gap-8
        px-8
        py-4
        shadow-2xl
      "
      >
        {/* Logo */}

        <a
          href="#hero"
          className="text-lg font-semibold tracking-tight hover:opacity-100"
        >
          THE CAT GUY
        </a>

        {/* Navigation */}

        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
              text-sm
              text-neutral-300
              hover:text-white
              transition-all
              duration-300
            "
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}

        <a
          href="#contact"
          className="
          rounded-full
          border
          border-white/10
          bg-white/5
          px-5
          py-2
          text-sm
          transition-all
          duration-300
          hover:bg-white
          hover:text-black
        "
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
