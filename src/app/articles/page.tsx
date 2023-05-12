import { EmptyBanner } from "@/components/EmptyBanner";
import { getArticles } from "@/data/articles";

import { date } from "@/lib/date";

export const metadata = {
  title: "Articles",
};

export const revalidate = 60;

export default async function Articles() {
  const articles = await getArticles();

  const isEmpty = articles.length === 0;

  return (
    <div className="">
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

          <ul className="mt-10 ml-6 relative">
            {articles.map((article) => (
              <>
                <li
                  key={article._key}
                  className="flex gap-6 mb-10 last:mb-10 before:content-[''] before:absolute before:h-full before:w-10 before:top-0 before:-left-6 before:border-l before:border-l-white/30"
                >
                  <p>{date(article.publishedAt).format("DD MM YYYY")}</p>

                  <div className="bg-gray-100/10 rounded-md py-4 px-6 ">
                    <h2>{article.title}</h2>
                    <p className="line-clamp-3 max-w-xl opacity-80">
                      {article.description}
                    </p>

                    <button className="opacity-80 hover:opacity-100 mt-4 cursor-pointer  transition">
                      Read
                    </button>
                  </div>
                </li>
                <li
                  key={article._key}
                  className="flex gap-6 mb-10 last:mb-10 before:content-[''] before:absolute before:h-full before:w-10 before:top-0 before:-left-6 before:border-l before:border-l-white/30"
                >
                  <p>{date(article.publishedAt).format("DD MM YYYY")}</p>

                  <div className="bg-gray-100/10 rounded-md py-4 px-6 ">
                    <h2>{article.title}</h2>
                    <p className="line-clamp-3 max-w-xl opacity-80">
                      {article.description}
                    </p>

                    <button className="opacity-80 hover:opacity-100 mt-4 cursor-pointer  transition">
                      Read
                    </button>
                  </div>
                </li>
                <li
                  key={article._key}
                  className="flex gap-6 mb-10 last:mb-10 before:content-[''] before:absolute before:h-full before:w-10 before:top-0 before:-left-6 before:border-l before:border-l-white/30"
                >
                  <p>{date(article.publishedAt).format("DD MM YYYY")}</p>

                  <div className="bg-gray-100/10 rounded-md py-4 px-6 ">
                    <h2>{article.title}</h2>
                    <p className="line-clamp-3 max-w-xl opacity-80">
                      {article.description}
                    </p>

                    <button className="opacity-80 hover:opacity-100 mt-4 cursor-pointer  transition">
                      Read
                    </button>
                  </div>
                </li>
                <li
                  key={article._key}
                  className="flex gap-6 mb-10 last:mb-10 before:content-[''] before:absolute before:h-full before:w-10 before:top-0 before:-left-6 before:border-l before:border-l-white/30"
                >
                  <p>{date(article.publishedAt).format("DD MM YYYY")}</p>

                  <div className="bg-gray-100/10 rounded-md py-4 px-6 ">
                    <h2>{article.title}</h2>
                    <p className="line-clamp-3 max-w-xl opacity-80">
                      {article.description}
                    </p>

                    <button className="opacity-80 hover:opacity-100 mt-4 cursor-pointer  transition">
                      Read
                    </button>
                  </div>
                </li>
              </>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
