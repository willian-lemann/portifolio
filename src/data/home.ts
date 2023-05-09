import { client } from "../../sanity/lib/client";

export async function getHomeData() {
  const home = await client.getDocument("e0b4f374-b7cb-4339-9080-6b71c36cce90");
  return home;
}
