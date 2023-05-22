import { urlForImage } from "../../sanity/lib/image";
import { client } from "../../sanity/lib/client";
import { getDefaultLanguage } from "@/utils/get-default-language";

export async function getExperiences() {
  const defaultLanguage = getDefaultLanguage();

  const homedata = await client.fetch('*[_type == "home"]');

  const homeDataInEnglish = homedata[0];
  const homeDataInPortuguese = homedata[1];

  let data =
    defaultLanguage === "pt-BR" ? homeDataInPortuguese : homeDataInEnglish;

  defaultLanguage === "pt-BR" ? homeDataInPortuguese : homeDataInEnglish;

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

  return {
    items: experiences.reverse(),
    title: data.headerExperiences,
  };
}
