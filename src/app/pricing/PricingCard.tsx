import { CheckCircleIcon, CheckIcon } from "@heroicons/react/24/solid";
import { PricingService } from "./types/pricing";
import { moneyFormat } from "@/utils/money-format";

type PricingCardProps = {
  pricing: PricingService;
};

export function PricingCard({ pricing }: PricingCardProps) {
  return (
    <div className="rounded-md px-6 py-4 border border-zinc-800 divide-y divide-zinc-800">
      <p className="pb-4">{pricing.name}</p>

      <p className="py-4">{moneyFormat(pricing.price)}</p>

      <ul className="pt-4">
        {pricing.benefits.map((benefit) => (
          <li key={benefit} className="flex items-center gap-2 mb-2 last:mb-0">
            <CheckCircleIcon className="h-6 w-6 flex items-center text-green-500" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
