"use client";

import { usePathname } from "next/navigation";

export function EmptyBanner() {
  const router = usePathname();

  const resource = router.split("/")[1];

  return (
    <div className="w-full bg-white/5 flex justify-center p-10">
      <h1 className="text-white">No {resource} added yet.</h1>
    </div>
  );
}
