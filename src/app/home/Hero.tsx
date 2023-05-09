"use client";

import Image from "next/image";

import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";

type HeroProps = {
  title: string;
  description: string;
};

export function Hero({ title, description }: HeroProps) {
  function handleOpen(social: "linkedin" | "github" | "twitter") {
    function open(link: string) {
      window.open(link, "_blank");
    }

    if (social === "linkedin") {
      return open("https://www.linkedin.com/in/willian-lemann/");
    }

    if (social === "github") {
      return open("https://github.com/willian-lemann");
    }

    if (social === "twitter") {
      return open("https://twitter.com/LemannWillian");
    }
  }

  return (
    <section>
      <div className="text-start py-10 flex flex-col">
        <div className="relative h-20 w-20 rounded-full">
          <Image
            src="/avatar.jpeg"
            alt="avatar image"
            fill
            className="object-cover rounded-full"
          />
        </div>

        <h3 className="text-2xl pt-4 text-white md:text-3xl max-w-xl">
          {title}
        </h3>

        <p className="text-md pt-4 leading-8 text-gray-200 max-w-xl md:text-xl">
          {description}
        </p>

        <div className="text-5xl flex pt-4 w-40 h-40 gap-4 text-gray-400">
          <AiFillTwitterCircle
            className="cursor-pointer"
            onClick={() => handleOpen("twitter")}
          />
          <AiFillLinkedin
            className="cursor-pointer"
            onClick={() => handleOpen("linkedin")}
          />
          <AiFillGithub
            className="cursor-pointer"
            onClick={() => handleOpen("github")}
          />
        </div>
      </div>
    </section>
  );
}
