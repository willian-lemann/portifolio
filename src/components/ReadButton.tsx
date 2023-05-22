"use client";

import { useRouter } from "next/navigation";

type ReadButtonProps = { slug: string; buttonLabel: string };

export function ReadButton({ slug, buttonLabel }: ReadButtonProps) {
  const router = useRouter();

  function handleGoArticleDetail(slug: string) {
    router.push(`/articles/${slug}`);
  }

  return (
    <button
      onClick={() => handleGoArticleDetail(slug)}
      className="opacity-80 hover:opacity-100 mt-4 cursor-pointer  transition"
    >
      {buttonLabel}
    </button>
  );
}
