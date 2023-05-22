import { EmptyBanner } from "@/components/EmptyBanner";
import { getProject } from "@/data/projects";
import { LinkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export const metadata = {
  title: "Projects",
};

export const revalidate = 60;

export default async function Projects() {
  const project = await getProject();

  const isEmpty = project.length === 0;

  return (
    <div className="text-white">
      {isEmpty ? (
        <EmptyBanner />
      ) : (
        <div>
          <section>
            <div className="space-y-2 max-w-lg">
              <h1 className="text-xl">{project.title}</h1>

              <div className="text-zinc-300">
                <p>{project.description}</p>
              </div>
            </div>
          </section>

          <ul className="grid md:grid-cols-3 grid-cols-1 gap-8 mt-10">
            {project.projects.map((project: any) => (
              <li
                key={project.id}
                className="space-y-4 text-zinc-300  border border-zinc-800 p-6 rounded-md"
              >
                <div className="relative h-10 w-10">
                  <Image
                    src={project.logo.src}
                    alt={project.logo.alt}
                    fill
                    className="object-cover"
                  />
                </div>

                <h2>{project.name}</h2>

                <p>{project.description}</p>

                <div className="flex items-center gap-2">
                  <LinkIcon className="h-6 w-6" />
                  <a href={project.link}>
                    github.com/willian-lemann/1indicacao
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
