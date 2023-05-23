import { EmptyBanner } from "@/components/EmptyBanner";
import { getArticles } from "@/data/articles";

import { Articles } from "./Articles";
import { getDefaultLanguage } from "@/utils/get-default-language";
import { ArticlesHeadline } from "./ArticlesHeadline";

export const metadata = {
  title: "Articles",
};

export const revalidate = 60;

export default async function ArticlesPage() {
  const articles = await getArticles();
  const defaultLanguage = getDefaultLanguage();

  const isEmpty = articles.length === 0;

  console.log(defaultLanguage);
  return (
    <div>
      {isEmpty ? (
        <EmptyBanner />
      ) : (
        <div className="text-white">
          <ArticlesHeadline language={defaultLanguage} />

          <Articles articles={articles} />
        </div>
      )}
    </div>
  );
}
