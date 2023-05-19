import { EmptyBanner } from "@/components/EmptyBanner";
import { getArticles } from "@/data/articles";

import { Articles } from "./Articles";

export const metadata = {
  title: "Articles",
};

export const revalidate = 60;

export default async function ArticlesPage() {
  const articles = await getArticles();

  const isEmpty = articles.length === 0;

  return (
    <div>
      {isEmpty ? (
        <EmptyBanner />
      ) : (
        <div className="text-white">
          <div className="space-y-4 max-w-md">
            <h1 className="text-2xl">
              Explore more about my life as a software developer
            </h1>
            <p className="text-white/80">
              Writing about my experiences buiding software, techs I use,
              strategies, and much more. Here I am gonna talk about my side
              projects and the techs and libraries I use
            </p>
          </div>

          <Articles articles={articles} />
        </div>
      )}
    </div>
  );
}
