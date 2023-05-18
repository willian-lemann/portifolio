import { urlForImage } from "../../sanity/lib/image";
import { client } from "../../sanity/lib/client";
import { toPlainText } from "@/utils/to-plain-text";
import { Service } from "@/app/services/types/service";
import { getHTMLFromBlocks } from "@/utils/block-to-html";

export async function getServices() {
  const services: any[] = await client.fetch("*[_type == 'service']");

  const mappedServices = services.map((service) => {
    const {
      body,
      image,
      slug: { current },
      ...rest
    } = service;

    const imageSrc = urlForImage(image.asset).url();

    return {
      ...rest,
      slug: current,
      description: toPlainText(body),
      image: {
        src: imageSrc,
        alt: image.alt,
      },
    };
  });

  return mappedServices;
}

function mappedService(service: any) {
  const {
    body,
    image,
    _key,
    slug: { current },
    ...rest
  } = service;

  const imageSrc = urlForImage(image.asset).url();

  return {
    ...rest,
    id: _key,
    image: {
      src: imageSrc,
      alt: image.alt,
    },
    description: getHTMLFromBlocks(body),
    slug: current,
  } as Service;
}

export async function getServiceBySlug(slug: string) {
  const service = await client.fetch(
    `*[_type == "service" && slug.current == $slug][0]`,
    { slug }
  );

  return mappedService(service);
}
