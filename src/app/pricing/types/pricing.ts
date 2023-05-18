export type PricingService = {
  id: string;
  price: number;
  image: { src: string; alt: string };
  name: string;
  benefits: string[];
};

export type Pricing = {
  title: string;
  description: string;
  services: Array<PricingService>;
};
