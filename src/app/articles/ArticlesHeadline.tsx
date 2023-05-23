"use client";

import { Lang } from "@/utils/types/lang";

const texts = {
  "pt-BR": {
    title: "Explore mais sobre minha vida como desenvolvedor de software.",
    subtitle:
      "Escrevendo sobre minhas experiências na construção de software, tecnologias que utilizo, estratégias e muito mais. Aqui vou falar sobre meus projetos paralelos e as tecnologias e bibliotecas que utilizo.",
  },
  "en-US": {
    title: "Explore more about my life as a software developer",
    subtitle: `Writing about my experiences buiding software, techs I use,
     strategies, and much more. Here I am gonna talk about my side
     projects and the techs and libraries I use`,
  },
  "en-GB": {
    title: "Explore more about my life as a software developer",
    subtitle: `Writing about my experiences buiding software, techs I use,
    strategies, and much more. Here I am gonna talk about my side
    projects and the techs and libraries I use`,
  },
};

type ArticlesHeadlineProps = { language: Lang };

export function ArticlesHeadline({ language }: ArticlesHeadlineProps) {
  const labels = texts[language];

  return (
    <div className="space-y-4 max-w-md">
      <h1 className="text-2xl">{labels.title}</h1>
      <p className="text-white/80">{labels.subtitle}</p>
    </div>
  );
}
