import { headers } from "next/headers";
import { Hero } from "./Hero";
import { Portifolio } from "./Portifolio";
import { Services } from "./Services";
import { Locale, getDictionary } from "./dictionaries";

export const metadata = {
  title: "Willian Lemann",
  description: "This is my portifolio",
};

type HomeProps = {
  params: { lang: Locale };
};

export default async function Home() {
  const headerlist = headers();

  const lang = headerlist.get("accept-language")?.split(",")[1].split(";")[0];

  const dict = await getDictionary(lang as Locale);

  return (
    <main className="bg-white px-10 dark:bg-zinc-900 md:px-20 lg:px-40">
      <Hero
        title={dict.hero.title}
        description={dict.hero.description}
        actionLabel={dict.navigation["action-button"]}
      />
      <Services services={dict.services} />
    </main>
  );
}
