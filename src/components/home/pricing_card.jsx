import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from "../../shadcn/ui/card";
import { Check } from "lucide-react";
import CTA_Btn from "../cta_button";
import "../../assets/styles/components/home/pricing_card.css"
const PricingCard = ({ model, preview }) => {
  return (
    <Card className={`pricing_description_card w-[300px] relative min-h-full bg-white rounded-b-[20px] ${!model.special_offer ? "rounded-t-[20px]": "rounded-t-[20px] lg:rounded-t-[0px]"} h-auto   px-7 py-6`}>
      {/* Special Offer Banner */}
      {model.special_offer && (
        <h4 className="absolute flex justify-center  items-center lg:-top-[36px] -top-0 left-1/2 transform -translate-x-1/2 h-[36px] w-[300px] bg-[#F47E42] text-white text-[1.25rem] font-medium text-base leading-[1.35] py-1 text-center rounded-t-[20px] border-t border-[#feda79]">
          {model.special_offer}
        </h4>
      )}

      <CardHeader className="flex items-center justify-center flex-row gap-2 ">
        {model.icon ? (
    <div dangerouslySetInnerHTML={{ __html: model.icon }} className='icon'/>
  ) : (
    <div className="placeholder-icon">/Icon/</div>
  )}
        <CardTitle className="text-black text-[1.25rem] font-medium text-base leading-[1.35]">
          {preview && model.category === "" ? "(Exp: Teams)": model.category}
        </CardTitle>
      </CardHeader>

      <CardDescription className="flex flex-col justify-center items-center gap-4">
        <p className="text-[1.25rem] font-semibold text-[#0F73EE] leading-[1.35]">
          {preview && model.price_per_hour === "" ? "(Exp: 2000)": model.price_per_hour} DZD/H
        </p>
        
             <CTA_Btn text={"Select"} type={"cta_pricing"} disabled={preview}/>
        
          <hr className="border-[#4A4947] w-[300px] mt-2" />
        <ul className="pricing_offers flex flex-col  gap-3 w-full relative ">
          <li>
              <p className="flex gap-1 items-center">
                <Check color="#008000" size={24} />
                {preview && model.assistants_count === "" ? "(Exp: 2 to 3)": model.assistants_count} Asisstants
              </p>
            </li>
          <li>
              <p className="flex gap-1 items-center">
                <Check color="#008000" size={24} />
                {preview && model.users_count === "" ? "(Exp: 2 to 3)": model.users_count} Allowed Users
              </p>
            </li>
          {model.services.length === 0 ? "service 1, service2, service 3, ...".split(',').map((service, index) => (
            <li key={index}>
              <p className="flex gap-1 items-center">
                <Check color="#008000" size={24} />
                {service.trim()}
              </p>
            </li>
          )) : model.services.split(',').map((service, index) => (
            <li key={index}>
              <p className="flex gap-1 items-center">
                <Check color="#008000" size={24} />
                {service.trim()}
              </p>
            </li>
          ))}
        </ul>
      </CardDescription>
    </Card>
  );
};

export default PricingCard;
