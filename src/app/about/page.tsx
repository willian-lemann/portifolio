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
          <div className="space-y-2">
            <h1 className="text-xl">{about.headline}</h1>
            <p>{about.description}</p>
          </div>

          <div
            className="py-8 leading-[150%] text-white/90 text-base"
            dangerouslySetInnerHTML={{
              __html: about.body,
            }}
          />
        </div>
      )}
    </div>
  );
}
