import { EmptyBanner } from "@/components/EmptyBanner";
import { getAbout } from "@/data/about";

export const metadata = {
  title: "About",
};

export default async function About() {
  const about = await getAbout();

  const noContent = !about;

  return (
    <div className="h-screen">
      {noContent ? <EmptyBanner /> : <div>{about.headline}</div>}
    </div>
  );
}
