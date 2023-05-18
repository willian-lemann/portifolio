import { urlForImage } from "../../sanity/lib/image";
import { client } from "../../sanity/lib/client";
import { Pricing } from "@/app/pricing/types/pricing";

function mappedPricing(pricing: any) {
  const { _key, ...rest } = pricing;

  const mappedServices = pricing.services.map((service: any) => {
    const { image, _key, ...restService } = service;

    const imageSrc = urlForImage(image.asset).url();

    return {
      ...restService,
      id: _key,
      image: { src: imageSrc, alt: image.alt },
    };
  });

  return { ...rest, services: mappedServices } as Pricing;
}

export async function getPricing() {
  const pricingData = await client.getDocument(
    "02aff5cd-eae0-4e52-b8fc-68461e492a8a"
  );

  return mappedPricing(pricingData);
}
