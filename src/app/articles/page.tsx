import { EmptyBanner } from "@/components/EmptyBanner";
import { getArticles } from "@/data/articles";

export const metadata = {
  title: "Articles",
};

export default async function Articles() {
  const articles = await getArticles();

  const isEmpty = articles.length === 0;

  return (
    <div className="h-screen">
      {isEmpty ? <EmptyBanner /> : <div>my articles</div>}
    </div>
  );
}
