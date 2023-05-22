import { getHTMLFromBlocks } from "@/utils/block-to-html";
import { client } from "../../sanity/lib/client";
import { getDefaultLanguage } from "@/utils/get-default-language";

export async function getAbout() {
  const aboutData = await client.fetch("*[_type == 'about']");
  const defaultLanguage = getDefaultLanguage();

  const data = defaultLanguage === "en" ? aboutData[0] : aboutData[1];

  const { body, ...rest } = data;

  return {
    ...rest,
    body: getHTMLFromBlocks(body),
  };
}
