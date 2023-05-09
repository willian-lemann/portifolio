import { urlForImage } from "../../sanity/lib/image";
import { client } from "../../sanity/lib/client";

export async function getAbout() {
  const about: any = await client.getDocument(
    "4bed0786-07a0-46d4-a9bf-1bc3097144aa"
  );

  return about;
}
