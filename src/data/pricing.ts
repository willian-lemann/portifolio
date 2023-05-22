import { urlForImage } from "../../sanity/lib/image";
import { client } from "../../sanity/lib/client";
import { Pricing } from "@/app/pricing/types/pricing";
import { getDefaultLanguage } from "@/utils/get-default-language";

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
  const pricingData = await client.fetch('*[_type == "pricing"]');

  const defaultLanguage = getDefaultLanguage();

  
  const pricingInEnglish = pricingData[0];
  const pricingInPortuguese = pricingData[1];

  let data =
    defaultLanguage === "pt-BR" ? pricingInPortuguese : pricingInEnglish;

  return mappedPricing(data);
}
