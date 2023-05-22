import { getDefaultLanguage } from "@/utils/get-default-language";
import { Article } from "../articles/types/article";
import { ReadButton } from "@/components/ReadButton";

type ArticlesProps = { articles: Article[] };

export function Articles({ articles }: ArticlesProps) {
  const defaultLanguage = getDefaultLanguage();

  const buttonLabel = defaultLanguage === "en-US" ? "Read" : "Ler mais";

  return (
    <ul className="ml-6 relative">
      {articles.map((article) => (
        <li
          key={article.id}
          className="flex max-w-md gap-6 mb-10 last:mb-10 before:content-[''] before:absolute before:h-full before:w-10 before:top-0 before:-left-6 before:border-l before:border-l-white/30"
        >
          <div className="bg-gray-100/10 rounded-md py-4 px-6">
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
