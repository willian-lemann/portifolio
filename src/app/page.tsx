import { headers } from "next/headers";

import { Hero } from "@/app/home/Hero";
import { Experience } from "@/app/home/Experience";
import { getHomeData } from "@/data/home";
import { Articles } from "./home/Articles";
import { getArticles } from "@/data/articles";
import { Lang } from "@/utils/types/lang";

export default async function Home() {
  const homedata: any = await getHomeData();
  const articles = await getArticles();

  return (
    <main className="bg-black flex flex-col">
      <Hero title={homedata.headline} description={homedata.description} />

      <h1 className="md:text-white text-xl pb-8">My Articles</h1>

      <div className="flex items-start md:flex-row flex-col justify-between text-white gap-20 md:gap-0 mb-20 md:mb-0">
        <Articles articles={articles} />

        {/* @ts-expect-error */}
        <Experience />
      </div>
    </main>
  );
}
