import { EmptyBanner } from "@/components/EmptyBanner";
import { getAbout } from "@/data/about";

export const metadata = {
  title: "About",
};

export const revalidate = 60;

export default async function About() {
  const about = await getAbout();

  const noContent = !about;

  return (
    <div>
      {noContent ? (
        <EmptyBanner />
      ) : (
        <div className="text-white">
          <h1 className="text-xl">{about.headline}</h1>

          <div
            className="py-8 leading-[180%] text-white/90 text-base"
            dangerouslySetInnerHTML={{
              __html: about.description,
            }}
          />
        </div>
      )}
    </div>
  );
}
