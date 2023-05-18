import { getPricing } from "@/data/pricing";

export default async function PricingPage() {
  const pricing = await getPricing();

  return (
    <div className="text-white">
      <h1>Pricing</h1>

      <ul>
        {pricing.services.map((service: any) => (
          <div key={service.title}>
            {service.benefits.map((benefit: string) => (
              <li key={benefit}>
                <p>{benefit}</p>
              </li>
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
}
