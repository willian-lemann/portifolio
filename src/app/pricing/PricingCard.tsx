import { CheckCircleIcon, CheckIcon } from "@heroicons/react/24/solid";
import { PricingService } from "./types/pricing";

type PricingCardProps = {
  pricing: PricingService;
};

export function PricingCard({ pricing }: PricingCardProps) {
  return (
    <div className="bg-zinc-800 rounded-md px-6 py-4">
      <p>{pricing.name}</p>

      <p>{pricing.price}</p>

      <ul className="pt-4">
        {pricing.benefits.map((benefit) => (
          <li key={benefit} className="flex items-center gap-2">
            <CheckCircleIcon className="h-6 w-6 flex items-center text-green-500" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
