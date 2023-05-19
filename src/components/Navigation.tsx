"use client";

import Link from "next/link";

export function Navigation() {
  return (
    <header className="py-10 mb-12 md:container flex md:justify-between justify-center items-center text-white">
      <nav className="flex items-center justify-center gap-4 list-none font-poppins">
        <Link href="/">Home</Link>
        <Link href="/pricing">Pricing Services</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/articles">Articles</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
