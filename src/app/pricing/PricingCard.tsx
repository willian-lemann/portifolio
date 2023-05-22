import {
  CheckCircleIcon,
  CheckIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { PricingService } from "./types/pricing";
import { moneyFormat } from "@/utils/money-format";
import { ContactMe } from "./ContactMe";
import { getDefaultLanguage } from "@/utils/get-default-language";

type PricingCardProps = {
  pricing: PricingService;
};

export function PricingCard({ pricing }: PricingCardProps) {
  const defaultLanguage = getDefaultLanguage();

  const label = defaultLanguage === "pt-BR" ? "Entre em contato" : "Contact me";

  return (
    <div className="rounded-md px-6 py-4 border border-zinc-800 divide-y divide-zinc-800">
      <p className="pb-4">{pricing.name}</p>

      <div className="py-4">
        {pricing.price ? (
          <span>{moneyFormat(pricing.price)}</span>
        ) : (
          <ContactMe label={label} />
        )}
      </div>

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
