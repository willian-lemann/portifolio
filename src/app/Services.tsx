import { servicesOffer } from "../data/services";

export function Services() {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Since the beginning of my journey as a freelance designer and
          developer, I&apos;ve done remote work for
          <span className="text-teal-500"> agencies </span>
          consulted for <span className="text-teal-500">startups </span>
          and collaborated with talanted people to create digital products for
          both business and consumer use.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>

      <ul className="lg:flex gap-10">
        {servicesOffer.map((service) => (
          <li
            key={service.name}
            className="relative text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1"
          >
            <h3 className="text-lg font-medium pt-8 pb-2  ">{service.name}</h3>
            <p className="py-2">{service.description}</p>
            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
            {service.tools.map((tool) => (
              <p key={tool} className="text-gray-800 py-1">
                {tool}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </section>
  );
}
