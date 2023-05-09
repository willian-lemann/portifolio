import { urlForImage } from "../../sanity/lib/image";
import { client } from "../../sanity/lib/client";
import { toPlainText } from "@/utils/to-plain-text";

export async function getServices() {
  const services: any[] = await client.fetch("*[_type == 'service']");

  const mappedServices = services.map((service) => {
    const { body, image, ...rest } = service;

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

  return mappedServices;
}
