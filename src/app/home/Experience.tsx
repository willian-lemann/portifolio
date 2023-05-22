import { getExperiences } from "@/data/experiences";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import { date } from "@/lib/date";

export async function Experience() {
  const experiences = await getExperiences();

  return (
    <div className="w-full text-white md:self-end border border-white/20 p-8 mb-10 md:w-fit rounded-md">
      <section className="flex items-center gap-2">
        <BriefcaseIcon className="h-6 w-6 text-white/50" />
        <h1>{experiences.title}</h1>
      </section>

      <ul className="mt-4">
        {experiences.items.map((experience: any, index, list) => (
          <li
            key={experience._key}
            className="flex items-center justify-between mb-4 last:mb-0"
          >
            <div className="flex items-center gap-4">
              <div className="relative w-10 h-10 rounded-full">
                <Image
                  src={experience.image.src}
                  alt={experience.image.alt}
                  fill
                  className="object-contain rounded-full"
                />
              </div>

              <div className="text-sm flex items-end justify-between w-full gap-10">
                <div>
                  <strong>{experience.name}</strong>
                  <p>{experience.role}</p>
                </div>

                <div>
                  <span>{date(experience.from).get("year")}</span>
                  <span className="px-2">-</span>
                  <span>
                    {index === 0 ? "present" : date(experience.to).get("year")}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
