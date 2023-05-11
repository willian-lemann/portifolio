import { urlForImage } from "../../sanity/lib/image";
import { client } from "../../sanity/lib/client";
import { toPlainText } from "@/utils/to-plain-text";

export async function getArticles() {
  const articles: any[] = await client.fetch("*[_type == 'article']");

  const mappedArticles = articles.map((article) => {
    const { body, mainImage, ...rest } = article;

    const imageSrc = urlForImage(mainImage.asset).url();

    return {
      ...rest,
      description: toPlainText(body),
      image: {
        src: imageSrc,
        alt: mainImage.alt,
      },
    };
  });

  return mappedArticles;
}
