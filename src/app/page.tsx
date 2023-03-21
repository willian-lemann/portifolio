import { Hero } from "./Hero";
import { Portifolio } from "./Portifolio";
import { Services } from "./Services";

export const metadata = {
  title: "Willian Lemann",
  description: "This is my portifolio",
};

export default function Home() {
  return (
    <main className=" bg-white px-10 dark:bg-zinc-900 md:px-20 lg:px-40">
      <Hero />

      <Services />

      <Portifolio />
    </main>
  );
}
