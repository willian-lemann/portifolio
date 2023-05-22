import { urlForImage } from "../../sanity/lib/image";
import { client } from "../../sanity/lib/client";
import { getDefaultLanguage } from "@/utils/get-default-language";

export async function getProject() {
  const defaultLanguage = getDefaultLanguage();

  const projectData = await client.fetch('*[_type == "project"]');

  const homeDataInEnglish = projectData[0];
  const homeDataInPortuguese = projectData[1];

  const data = defaultLanguage === "pt-BR" ? homeDataInPortuguese : homeDataInEnglish;

  const { icon, projects, ...rest } = data;

  const mappedProjects = projects.map(({ logo, _key, ...restProject }: any) => {
    const imageSrc = urlForImage(logo.asset).url();

    return {
      ...restProject,
      id: _key,
      logo: {
        src: imageSrc,
        alt: logo.alt,
      },
    };
  });

  return {
    ...rest,
    projects: mappedProjects,
  };
}
