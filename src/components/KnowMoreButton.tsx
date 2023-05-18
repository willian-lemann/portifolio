"use client";

import { useRouter } from "next/navigation";

type KnowMoreButtonProps = { slug: string };

export function KnowMoreButton({ slug }: KnowMoreButtonProps) {
  const router = useRouter();

  function handleGoServiceDetail(slug: string) {
    router.push(`/services/${slug}`);
  }

  return (
    <button
      onClick={() => handleGoServiceDetail(slug)}
      className="self-end flex justify-end"
    >
      Know more
    </button>
  );
}
