export const metadata = {
  title: "Services",
};

import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { schema } from "../../../sanity/schema";
import { urlForImage } from "../../../sanity/lib/image";
import { toPlainText } from "@/utils/to-plain-text";

export default async function Services() {
  const services = await client.fetch("*[_type == 'service']");

  console.log(services[0]);
  return (
    <section className="h-screen">
      <div>
        <h3 className="text-3xl py-1 text-white">Services I Offer</h3>
      </div>

      <ul className="md:grid grid-cols-3">
        {services.map((service: any) => (
          <li
            key={service._id}
            className="relative shadow-lg  rounded-xl my-10  text-white flex-1"
          >
            <div className="relative aspect-square rounded-t-xl">
              <Image
                src={urlForImage(service.mainImage).url()}
                alt={service.mainImage.alt}
                fill
                className="object-cover rounded-t-xl"
              />
            </div>

            <div className="pb-10">
              <h3 className="text-xl font-medium pt-8 pb-2 text-white">
                {service.title}
              </h3>
              <p className="py-6">{toPlainText(service.body)}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
