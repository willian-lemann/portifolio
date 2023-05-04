"use client";

import { useDarkMode } from "@/stores/dark";
import { classnames } from "@/utils/classnames";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

import Link from "next/link";

export function Navigation() {
  const { toggle, darkMode } = useDarkMode((state) => state);

  function handleOpen() {
    window.open("/willian-lemann-profile.pdf");
  }

  return (
    <header className="container py-10 mb-12 flex justify-between items-center dark:text-white">
      <nav className="flex items-center gap-4 list-none font-poppins">
        <Link href="/">Home</Link>
        <Link href="projects">Projects</Link>
        <Link href="articles">Articles</Link>
        <Link href="articles">Services</Link>
        <Link href="about">About</Link>
      </nav>

      <ul className="flex items-center gap-4 list-none">
        <li>
          <MoonIcon
            onClick={() => toggle()}
            className={classnames(
              darkMode ? "hidden" : "block",
              "w-8 h-8 cursor-pointer text-2xl text-zinc-700 animate-fadeIn"
            )}
          />

          <SunIcon
            onClick={() => toggle()}
            className={classnames(
              darkMode ? "block" : "hidden",
              "w-8 h-8 cursor-pointer text-2xl text-yellow-500 animate-fadeIn"
            )}
          />
        </li>
      </ul>
    </header>
  );
}
