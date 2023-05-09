import { EmptyBanner } from "@/components/EmptyBanner";
import { getProjects } from "@/data/projects";
import { usePathname } from "next/navigation";

export const metadata = {
  title: "Projects",
};

export default async function Projects() {
  const projects = await getProjects();

  const isEmpty = projects.length === 0;

  return (
    <div className="h-screen text-white">
      {isEmpty ? <EmptyBanner /> : "no empty"}
    </div>
  );
}
