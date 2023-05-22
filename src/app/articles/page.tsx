import { EmptyBanner } from "@/components/EmptyBanner";
import { getArticles } from "@/data/articles";

import { Articles } from "./Articles";
import { getDefaultLanguage } from "@/utils/get-default-language";

export const metadata = {
  title: "Articles",
};

export const revalidate = 60;

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
};

export default async function ArticlesPage() {
  const articles = await getArticles();
  const defaultLanguage = getDefaultLanguage();

  const isEmpty = articles.length === 0;

  const labels = texts[defaultLanguage];

  return (
    <div>
      {isEmpty ? (
        <EmptyBanner />
      ) : (
        <div className="text-white">
          <div className="space-y-4 max-w-md">
            <h1 className="text-2xl">{labels.title}</h1>
            <p className="text-white/80">{labels.subtitle}</p>
          </div>

          <Articles articles={articles} />
        </div>
      )}
    </div>
  );
}
