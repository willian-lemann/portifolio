"use client";

import Link from "next/link";

export function Navigation() {
  return (
    <header className="md:container py-10 mb-12 flex md:justify-between justify-center items-center text-white">
      <nav className="flex items-center justify-center gap-4 list-none font-poppins">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/articles">Articles</Link>
        <Link href="/services">Services I Offer</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
