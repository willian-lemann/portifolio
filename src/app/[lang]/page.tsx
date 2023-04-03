import { Hero } from "../Hero";
import { Portifolio } from "../Portifolio";
import { Services } from "../Services";
import { Locale, getDictionary } from "./dictionaries";

export const metadata = {
  title: "Willian Lemann",
  description: "This is my portifolio",
};

type HomeProps = {
  params: { lang: Locale };
};

export default async function Home({ params: { lang } }: HomeProps) {
  const dict = await getDictionary(lang);

  return (
    <main className=" bg-white px-10 dark:bg-zinc-900 md:px-20 lg:px-40">
      <Hero
        title={dict.hero.title}
        description={dict.hero.description}
        actionLabel={dict.navigation["action-button"]}
      />
      <Services services={dict.services} />
      <Portifolio />
    </main>
  );
}
