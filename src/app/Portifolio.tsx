import Image from "next/image";

type PortifolioProps = {
  title: string;
  description: string;
  portifolios: Array<{
    image: string;
  }>;
};

export function Portifolio({
  title,
  description,
  portifolios,
}: PortifolioProps) {
  return (
    <section className="py-10">
      <div>
        <h3 className="text-3xl py-1 dark:text-white ">{title}</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          {description}
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1">
          {/* <div className="relative w-full h-[400px]">
            <Image className="rounded-lg object-cover" fill alt="" src={} />
          </div> */}
        </div>
      </div>
    </section>
  );
}
