import { headers } from "next/headers";
import { Lang } from "./types/lang";

export function getDefaultLanguage() {
  const defaultLanguage = headers()
    .get("Accept-language")
    ?.split(",")[0] as Lang;

  return defaultLanguage;
}
