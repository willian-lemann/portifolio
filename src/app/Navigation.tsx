"use client";

import { useDarkMode } from "@/stores/dark";
import { classnames } from "@/utils/classnames";
import { ChevronDownIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";

import Image from "next/image";

type NavigationProps = {
  actionLabel: string;
};

export function Navigation({ actionLabel }: NavigationProps) {
  const { toggle, darkMode } = useDarkMode((state) => state);

  function handleOpen() {
    window.open("/willian-lemann-profile.pdf");
  }

  return (
    <nav className="py-10 mb-12 flex justify-between items-center dark:text-white">
      <div className="flex items-center">
        <div className="relative h-10 w-10 rounded-full">
          <Image
            src="/avatar.jpeg"
            alt="avatar image"
            fill
            className="object-cover rounded-full"
          />
        </div>
        <h1 className="font-poppins text-xl pl-3">Willian Lemann</h1>
      </div>

      <ul className="flex items-center gap-4">
        <li>
          <div className="relative inline-block font-poppins">
            <select className="cursor-pointer text-zinc-600 appearance-none bg-white dark:bg-zinc-900 border dark:border-none px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option value="en">EN</option>
              <option value="br">BR</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <ChevronDownIcon className="text-gray-500 h-5 w-5" />
            </div>
          </div>
        </li>

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
            onClick={handleOpen}
          >
            {actionLabel}
          </a>
        </li>
      </ul>
    </nav>
  );
}
