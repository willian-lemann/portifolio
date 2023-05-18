"use client";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

export function Social() {
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
    <div className="text-5xl flex pt-4 w-40 h-40 gap-4 text-gray-600 dark:text-gray-400">
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
  );
}
