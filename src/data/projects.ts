import { urlForImage } from "../../sanity/lib/image";
import { client } from "../../sanity/lib/client";

export async function getProject() {
  const project: any = await client.getDocument(
    "7ae3c48d-b58e-4127-9416-8ca328768684"
  );

  const { icon, projects, ...rest } = project;

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
