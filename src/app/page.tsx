import { headers } from "next/headers";
import { Hero } from "@/app/home/Hero";

import { Locale, getDictionary } from "@/app/dictionaries";

export default async function Home() {
  const dict = await getDictionary("en" as Locale);

  return (
    <main className="bg-black h-[calc(100vh-152px)]">
      <Hero
        title={dict.hero.title}
        description={dict.hero.description}
        actionLabel={dict.navigation["action-button"]}
      />
    </main>
  );
}
