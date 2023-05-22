"use client";

import Link from "next/link";

type NavbarProps = {
  links: Array<{ label: string; link: string }>;
};

export function Navbar({ links }: NavbarProps) {
  return (
    <nav className="flex items-center justify-center gap-4 list-none font-poppins">
      {links.map((link) => (
        <Link key={link.label} href={link.link}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
