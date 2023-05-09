import { urlForImage } from "../../sanity/lib/image";
import { client } from "../../sanity/lib/client";

export async function getExperiences() {
  const data: any = await client.getDocument(
    "e0b4f374-b7cb-4339-9080-6b71c36cce90"
  );

  const experiences: any[] = data.experiences.map((experience: any) => {
    const { logo, ...rest } = experience;

    const imageSrc = urlForImage(logo.asset).url();

    return {
      ...rest,
      image: {
        src: imageSrc,
        alt: logo.alt,
      },
    };
  });

  return experiences.reverse();
}
