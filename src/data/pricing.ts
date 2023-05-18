import { urlForImage } from "../../sanity/lib/image";
import { client } from "../../sanity/lib/client";

function mappedPricing(pricing: any) {
  const { _key, ...rest } = pricing;

  const mappedServices = pricing.services.map((service: any) => {
    const { image, ...restService } = service;

    const imageSrc = urlForImage(image.asset).url();

    return { ...restService, image: { src: imageSrc, alt: image.alt } };
  });

  return { ...rest, id: _key, services: mappedServices };
}

export async function getPricing() {
  const pricingData = await client.getDocument(
    "02aff5cd-eae0-4e52-b8fc-68461e492a8a"
  );

  return mappedPricing(pricingData);
}
