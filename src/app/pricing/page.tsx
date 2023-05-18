import { getPricing } from "@/data/pricing";
import { PricingCard } from "./PricingCard";

export default async function PricingPage() {
  const pricing = await getPricing();

  return (
    <div className="text-white">
      <h1>{pricing.title}</h1>
      <p>{pricing.description}</p>

      <ul className="grid grid-cols-3 mt-10">
        {pricing.services.map((service) => (
          <PricingCard key={service.id} pricing={service} />
        ))}
      </ul>
    </div>
  );
}
