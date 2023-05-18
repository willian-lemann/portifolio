import { getServiceBySlug } from "@/data/services";
import { PageProps } from "@/utils/types/page-props";
import Image from "next/image";
import sanitize from "sanitize-html";

type ServiceDetailProps = PageProps<{ slug: string }>;

export default async function ServiceDetail({
  params: { slug },
}: ServiceDetailProps) {
  const service = await getServiceBySlug(slug);

  return (
    <div className="text-white">
      <div className="relative h-[300px] w-full">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          className="object-cover rounded-md"
          priority
        />
      </div>

      <h1 className="pt-4 text-xl">{service.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: service.description,
        }}
      />
    </div>
  );
}
