import { client } from "../../sanity/lib/client";
import { getDefaultLanguage } from "@/utils/get-default-language";

export async function getHomeData() {
  const defaultLanguage = getDefaultLanguage();

  const homedata = await client.fetch('*[_type == "home"]');

  const homeDataInEnglish = homedata[0];
  const homeDataInPortuguese = homedata[1];

  return defaultLanguage === "pt-BR" ? homeDataInPortuguese : homeDataInEnglish;
}
