import { getPricing } from "@/data/pricing";
import { PricingCard } from "./PricingCard";

export default async function PricingPage() {
  const pricing = await getPricing();

  return (
    <div className="text-white">
      <div className="max-w-lg space-y-2">
        <h1 className="text-xl">{pricing.title}</h1>
        <p>{pricing.description}</p>
      </div>

      <ul className="grid grid-cols-3 mt-4">
        {pricing.services.map((service) => (
          <PricingCard key={service.id} pricing={service} />
        ))}
      </ul>
    </div>
  );
}
