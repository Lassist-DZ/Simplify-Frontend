import CTA_Btn from "../cta_button"
import "../../assets/styles/components/home/pricing.css"
import { useEffect } from "react"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "../../shadcn/ui/card"
import { Check } from "lucide-react"
import { useState } from "react"
import fetchPricingModels from "../../functions/fetchPricings"
const Pricing = () => {
  const [pricingModels, setPricingModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchPricingModels(setLoading, setPricingModels, setError)
  }, []);
    return <section  className="pricing_section flex gap-16 flex-col lg:py-28 px-6 py-14 lg:px-16 items-center">
        <header className="pricing_header lg:w-[50%]  flex-col gap-4 items-center flex justify-center ">
        <h1 className="text-white">
        Discover our{" "}
        <span className="relative z-[1]">
          offers
          <svg className="absolute right-[19px] bottom-[-16px] z-[-1] w-[85%]"
           height="46" viewBox="0 0 125 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="-0.5" y="9.97168" width="123.142" height="36.8393" rx="12" transform="rotate(-5.11158 -0.5 9.97168)" fill="#799DFE"/>
</svg>
        </span>
      </h1>
      <p className="text-white font-size-paragraph2">We are dedicated to providing outstanding digital and design services meet the functional and aesthetic.</p>
</header>
  <div className="pricing_description grid lg:grid-cols-3 grid-cols-1 gap-8">
  {
    pricingModels.map((model) => {
      return <Card className="pricing_description_card w-[300px] relative bg-white h-auto rounded-[20px] px-7 py-8">
      {/* Special Offer Banner */}
      {model.special_offer && (
        <h4 className="absolute flex justify-center items-center top-0 left-1/2 transform -translate-x-1/2 h-[36px] w-[300px] bg-[#F47E42] text-white text-[1.25rem] font-medium text-base leading-[1.35] py-1 text-center rounded-t-[20px] border-t border-[#feda79]">
          {model.special_offer}
        </h4>
      )}
      <CardHeader className="flex items-center justify-center flex-row gap-2 ">
        <div dangerouslySetInnerHTML={{ __html: model.icon }} />
        <CardTitle className="text-black text-[1.25rem] font-medium text-base leading-[1.35]">
          {model.category}
        </CardTitle>
      </CardHeader>
    
      
      <CardDescription className="flex flex-col justify-center items-center gap-12">
        <p className="text-[1.25rem] font-semibold text-[#0F73EE] leading-[1.35]">
          {model.price_per_hour} Dz
        </p>
        <CTA_Btn text={"Select"} type={"cta_pricing"} />
        <ul className="pricing_offers flex flex-col gap-3 relative">
          <hr className="border-[#4A4947] w-[300px] absolute top-[-18px] left-[-40px]" />
          {model.services.split(',').map((service, index) => (
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
    
    })
   }
  </div>
   
   
   
    

</section>

   
}
export default Pricing