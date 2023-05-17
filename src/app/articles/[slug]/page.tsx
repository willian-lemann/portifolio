import { getArticleBySlug } from "@/data/articles";
import { PageProps } from "@/utils/types/page-props";
import Image from "next/image";

type ArticleDetailProps = PageProps<{ slug: string }>;

export async function generateMetadata({ params }: ArticleDetailProps) {
  const article = await getArticleBySlug(params.slug);

  return {
    title: article.title,
  };
}

export default async function ArticleDetail({ params }: ArticleDetailProps) {
  const article = await getArticleBySlug(params.slug);

  return (
    <div className="text-white mb-10">
      <h1 className="text-xl pb-4">{article.title}</h1>

      <div className="relative aspect-video h-[400px]">
        <Image
          src={article.image.src}
          alt="article image"
          fill
          className="object-cover"
        />
      </div>

      <div
        className="pt-4 text-base leading-[150%]"
        dangerouslySetInnerHTML={{
          __html: article.description,
        }}
      />
    </div>
  );
}
