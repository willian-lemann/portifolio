import { urlForImage } from "../../sanity/lib/image";
import { client } from "../../sanity/lib/client";
import { toPlainText } from "@/utils/to-plain-text";

export async function getProjects() {
  const projects: any[] = await client.fetch("*[_type == 'project']");

  const mappedProjects = projects.map((project) => {
    const { body, image, ...rest } = project;

    const imageSrc = urlForImage(image.asset).url();

    return {
      ...rest,
      description: toPlainText(body),
      image: {
        src: imageSrc,
        alt: image.alt,
      },
    };
  });

  return mappedProjects;
}
