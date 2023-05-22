import { date } from "@/lib/date";
import { Article } from "./types/article";
import { ReadButton } from "@/components/ReadButton";
import { getDefaultLanguage } from "@/utils/get-default-language";

type ArticlesProps = {
  articles: Article[];
};

export function Articles({ articles }: ArticlesProps) {
  const defaultLanguage = getDefaultLanguage();

  const buttonLabel = defaultLanguage === "en" ? "Read" : "Ler mais";

  return (
    <ul className="mt-10 mb-40 ml-6 relative">
      {articles.map((article) => (
        <li
          key={article.id}
          className="flex gap-6 mb-10 justify-between md:justify-start last:mb-10 before:content-[''] before:absolute before:h-full before:w-10 before:top-0 before:-left-6 before:border-l before:border-l-white/30"
        >
          <p>{date(article.publishedAt).format("DD MM YYYY")}</p>

          <div className="bg-gray-100/10 rounded-md py-4 px-6 max-w-[60vw]">
            <h2>{article.title}</h2>
            <p className="line-clamp-3 max-w-xl opacity-80">
              {article.description}
            </p>

            <ReadButton slug={article.slug} buttonLabel={buttonLabel} />
          </div>
        </li>
      ))}
    </ul>
  );
}
