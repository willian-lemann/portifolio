import Image from "next/image";
import { getServices } from "@/data/services";
import { EmptyBanner } from "@/components/EmptyBanner";
import { KnowMoreButton } from "@/components/KnowMoreButton";

export const metadata = {
  title: "Services",
};

export const revalidate = 60;

export default async function Services() {
  const services = await getServices();

  const isEmpty = services.length === 0;

  return (
    <section className="h-screen">
      {isEmpty ? (
        <EmptyBanner />
      ) : (
        <>
          <div>
            <h3 className="text-3xl py-1 text-white">Services I Offer</h3>
          </div>

          <ul className="md:grid grid-cols-3 gap-x-8">
            {services.map((service: any) => (
              <li
                key={service._id}
                className="relative shadow-lg  rounded-xl my-10  text-white flex-1"
              >
                <div className="relative aspect-square rounded-t-xl">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                </div>

                <div className="pb-10">
                  <h3 className="text-xl font-medium pt-8 pb-2 text-white">
                    {service.title}
                  </h3>

                  <p>{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
