"use client";

import { useDarkMode } from "@/stores/dark";
import { classnames } from "@/utils/classnames";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export function Navigation() {
  const { toggle, darkMode } = useDarkMode((state) => state);

  return (
    <nav className="py-10 mb-12 flex justify-between items-center dark:text-white">
      <h1 className="font-poppins text-xl ">Willian Leman</h1>
      <ul className="flex items-center">
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
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
            href="#"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
