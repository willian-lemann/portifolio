import { Hero } from "@/app/home/Hero";
import { Experience } from "@/app/home/Experience";
import { getHomeData } from "@/data/home";

export default async function Home() {
  const homedata: any = await getHomeData();

  return (
    <main className="bg-black flex flex-col">
      <Hero title={homedata.headline} description={homedata.description} />
      {/* @ts-expect-error */}
      <Experience />
    </main>
  );
}
