import { urlForImage } from "../../sanity/lib/image";
import { client } from "../../sanity/lib/client";
import { toPlainText } from "@/utils/to-plain-text";

export async function getHomeData() {
  const home = await client.getDocument("e0b4f374-b7cb-4339-9080-6b71c36cce90");
  return home;
}
