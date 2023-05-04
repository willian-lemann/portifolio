import { headers } from "next/headers";
import Image from "next/image";
import { Locale, getDictionary } from "../dictionaries";

export default async function Services() {
  const headerlist = headers();

  const lang = headerlist.get("accept-language")?.split(",")[1].split(";")[0];

  const dict = await getDictionary(lang as Locale);

  return (
    <section id="services">
      <div>
        <h3 className="text-3xl py-1 dark:text-white">{dict.services.title}</h3>
      </div>

      <ul className="lg:flex gap-10">
        {dict.services.services.map((service) => (
          <li
            key={service.name}
            className="relative shadow-lg  rounded-xl my-10  dark:bg-white flex-1"
          >
            <div className="relative aspect-square rounded-t-xl">
              <Image
                src={service.image}
                alt="service image"
                fill
                className="object-cover rounded-t-xl"
              />
            </div>
            <div className="px-10 pb-10">
              <h3 className="text-xl font-medium pt-8 pb-2">{service.name}</h3>
              <p className="py-6">{service.description}</p>
              {service.tools?.length > 0 ? (
                <h4 className="py-4 text-teal-600">Tools I use</h4>
              ) : null}
              {service.tools?.map((tool) => (
                <p key={tool} className="text-gray-800 py-1">
                  {tool}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
