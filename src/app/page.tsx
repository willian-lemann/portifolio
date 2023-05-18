import { Hero } from "@/app/home/Hero";
import { Experience } from "@/app/home/Experience";
import { getHomeData } from "@/data/home";
import { Articles } from "./home/Articles";
import { getArticles } from "@/data/articles";

export default async function Home() {
  const homedata: any = await getHomeData();
  const articles = await getArticles();

  return (
    <main className="bg-black flex flex-col">
      <Hero title={homedata.headline} description={homedata.description} />

      <h1 className="text-xl text-white">Articles</h1>

      <div className="flex items-center justify-between text-white">
        <Articles articles={articles} />

        {/* @ts-expect-error */}
        <Experience />
      </div>
    </main>
  );
}
