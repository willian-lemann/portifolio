"use client";

import { classnames } from "@/utils/classnames";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

type NavbarProps = {
  links: Array<{ label: string; link: string }>;
};

export function Navbar({ links }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((state) => !state);
  }

  return (
    <>
      <nav className="hidden md:flex items-center justify-center gap-4 list-none font-poppins">
        {links.map((link) => (
          <Link key={link.label} href={link.link}>
            {link.label}
          </Link>
        ))}
      </nav>

      {/* mobile */}
      <div className="md:hidden flex justify-end w-full px-8">
        <div>
          <Bars3Icon onClick={toggleMenu} className="h-10 w-10 text-white" />
        </div>

        <nav
          className={classnames(
            isMenuOpen ? "-translate-x-0" : "-translate-x-full",
            "transition pt-20 px-10 gap-4 flex flex-col bg-black fixed bottom-0 top-0 left-0 z-20"
          )}
        >
          <button onClick={toggleMenu}>
            <XMarkIcon className="absolute h-6 w-6 right-6 top-12" />
          </button>

          {links.map((link) => (
            <Link key={link.label} onClick={toggleMenu} href={link.link}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
