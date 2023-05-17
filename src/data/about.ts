import { getHTMLFromBlocks } from "@/utils/block-to-html";
import { client } from "../../sanity/lib/client";

export async function getAbout() {
  const about: any = await client.getDocument(
    "ee3982d8-f540-44b9-b7c3-d9434b0895a8"
  );

  const { body, ...rest } = about;

  return {
    ...rest,
    description: getHTMLFromBlocks(body),
  };
}
