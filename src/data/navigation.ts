import { getDefaultLanguage } from "@/utils/get-default-language";
import { client } from "../../sanity/lib/client";

export async function getNavigation() {
  const defaultLanguage = getDefaultLanguage();

  const navigationData = await client.fetch('*[_type == "navigation"]');

  const navigationInEnglish = navigationData[0].navigation;
  const navigationInPortuguese = navigationData[1].navigation;

  return defaultLanguage === "pt-BR"
    ? navigationInPortuguese
    : navigationInEnglish;
}
