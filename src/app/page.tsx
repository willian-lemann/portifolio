import { headers } from "next/headers";
import { Hero } from "@/app/home/Hero";
import { getHomeData } from "@/data/home";

export default async function Home() {
  const homedata: any = await getHomeData();

  return (
    <main className="bg-black h-[calc(100vh-152px)]">
      <Hero title={homedata.headline} description={homedata.description} />
    </main>
  );
}
