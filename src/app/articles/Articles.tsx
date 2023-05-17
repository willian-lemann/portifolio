"use client";

import { date } from "@/lib/date";
import { useRouter } from "next/navigation";
import { Article } from "./types/article";

type ArticlesProps = {
  articles: Article[];
};

export function Articles({ articles }: ArticlesProps) {
  const router = useRouter();

  function handleGoArticleDetail(slug: string) {
    router.push(`/articles/${slug}`);
  }

  return (
    <ul className="mt-10 ml-6 relative">
      {articles.map((article) => (
        <li
          key={article.id}
          className="flex gap-6 mb-10 last:mb-10 before:content-[''] before:absolute before:h-full before:w-10 before:top-0 before:-left-6 before:border-l before:border-l-white/30"
        >
          <p>{date(article.publishedAt).format("DD MM YYYY")}</p>

          <div className="bg-gray-100/10 rounded-md py-4 px-6 ">
            <h2>{article.title}</h2>
            <p className="line-clamp-3 max-w-xl opacity-80">
              {article.description}
            </p>

            <button
              onClick={() => handleGoArticleDetail(article.slug)}
              className="opacity-80 hover:opacity-100 mt-4 cursor-pointer  transition"
            >
              Read
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
