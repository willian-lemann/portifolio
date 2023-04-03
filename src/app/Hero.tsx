import Image from "next/image";

import deved from "../../public/dev-ed-wave.png";

import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";
import { Navigation } from "./Navigation";

export function Hero() {
  return (
    <section className="min-h-screen">
      <Navigation />

      <div className="text-center p-10 py-10">
        <h2 className="text-4xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
          Willian Lemann
        </h2>

        <h3 className="text-2xl py-2 dark:text-white text-zinc-600 md:text-3xl">
          Frontend Engineer | E-commerce | Web systems for automation
        </h3>

        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
          Turning ideas into digital solutions: Explore my portfolio of software
          development and take a look at the services I provide. Join me down
          below!
        </p>

        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <AiFillTwitterCircle className="cursor-pointer" />
          <AiFillLinkedin className="cursor-pointer" />
          <AiFillGithub className="cursor-pointer" />
        </div>

        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
          <Image
            src={deved}
            alt="willian lemann avatar"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
