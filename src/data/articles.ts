import { urlForImage } from "../../sanity/lib/image";
import { client } from "../../sanity/lib/client";
import { toPlainText } from "@/utils/to-plain-text";
import { Article } from "@/app/articles/types/article";
import { getHTMLFromBlocks } from "@/utils/block-to-html";
import { getDefaultLanguage } from "@/utils/get-default-language";

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
  const articleData = await client.fetch("*[_type == 'article']");

  const defaultLanguage = getDefaultLanguage();

  const articlesInPortuguese: Article[] = articleData.filter(
    (article: any) => article.__i18n_lang === "pt"
  );
  const articlesInEnglish: Article[] = articleData.filter(
    (article: any) => article.__i18n_lang !== "pt"
  );

  const data =
    defaultLanguage === "en-US" ? articlesInEnglish : articlesInPortuguese;

  return getMappedArticles(data);
}

export async function getArticleBySlug(slug: string) {
  const article: Article = await client.fetch(
    `*[_type == "article" && slug.current == $slug][0]`,
    { slug }
  );

  return getMappedArticle(article) as Article;
}
