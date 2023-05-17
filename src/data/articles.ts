import { urlForImage } from "../../sanity/lib/image";
import { client } from "../../sanity/lib/client";
import { toPlainText } from "@/utils/to-plain-text";
import { Article } from "@/app/articles/types/article";
import { getHTMLFromBlocks } from "@/utils/block-to-html";

function getMappedArticles(articles: any[]) {
  const mappedArticles = articles.map((article) => {
    const {
      body,
      mainImage,
      _key,
      slug: { current },
      ...rest
    } = article;

    const imageSrc = urlForImage(mainImage.asset).url();

    return {
      ...rest,
      id: _key,
      slug: current,
      description: toPlainText(body),
      image: {
        src: imageSrc,
        alt: mainImage.alt,
      },
    };
  });

  return mappedArticles;
}

function getMappedArticle(article: any) {
  const {
    body,
    mainImage,
    _key,
    slug: { current },
    ...rest
  } = article;

  const imageSrc = urlForImage(mainImage.asset).url();

  return {
    ...rest,
    id: _key,
    slug: current,
    description: getHTMLFromBlocks(body),
    image: {
      src: imageSrc,
      alt: mainImage.alt,
    },
  };
}

export async function getArticles() {
  const articles: any[] = await client.fetch("*[_type == 'article']");
  return getMappedArticles(articles);
}

export async function getArticleBySlug(slug: string) {
  const article: Article = await client.fetch(
    `*[_type == "article" && slug.current == $slug][0]`,
    { slug }
  );

  return getMappedArticle(article) as Article;
}
