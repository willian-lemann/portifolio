"use client";

import { useDarkMode } from "@/stores/dark";
import { classnames } from "@/utils/classnames";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

import Link from "next/link";

type NavigationProps = {
  actionLabel: string;
};

export function Navigation() {
  const { toggle, darkMode } = useDarkMode((state) => state);

  function handleOpen() {
    window.open("/willian-lemann-profile.pdf");
  }

  return (
    <header className="container py-10 mb-12 flex justify-between items-center text-white">
      <nav className="flex items-center gap-4 list-none font-poppins">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/articles">Articles</Link>
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
