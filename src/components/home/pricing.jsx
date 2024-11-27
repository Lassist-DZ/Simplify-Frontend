import { useEffect, useState } from "react";
import fetchPricingModels from "../../functions/pricings/fetchPricings";
import PricingCard from "./pricing_card";
import "../../assets/styles/components/home/pricing.css"

const Pricing = () => {
  const [pricingModels, setPricingModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPricingModels(setLoading, setPricingModels, setError);
  }, []);

  return (
    <section className="pricing_section flex gap-16 flex-col lg:py-28 px-6 py-14 lg:px-16 items-center">
      <header className="pricing_header lg:w-[50%] flex-col gap-4 items-center flex justify-center text-center ">
        <h1 className="text-white">
          Discover our{" "}
          <span className="relative z-[1]">
            offers
            <svg className="absolute right-[19px] bottom-[-16px] z-[-1] w-[85%]" height="46" viewBox="0 0 125 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="-0.5" y="9.97168" width="123.142" height="36.8393" rx="12" transform="rotate(-5.11158 -0.5 9.97168)" fill="#799DFE" />
            </svg>
          </span>
        </h1>
        <p className="text-white font-size-paragraph2">
          We are dedicated to providing outstanding digital and design services that meet both functional and aesthetic needs.
        </p>
      </header>
      <div className="pricing_description grid lg:grid-cols-3 grid-cols-1 gap-8 h-fit">
        {pricingModels.map((model) => (
          <PricingCard key={model.id} model={model} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
