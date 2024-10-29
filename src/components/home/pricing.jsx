import CTA_Btn from "../cta_button"
import "../../assets/styles/components/home/pricing.css"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../../shadcn/ui/card"
import RatingStars from "../../assets/icons/rating_stars"
import { Check } from "lucide-react"
import { useState } from "react"
const Pricing = () => {
    const [special_banner, setSpecialBanner] = useState(true)
    return <section  className="pricing_section flex gap-16 flex-col lg:py-28 px-6 py-14 lg:px-16 items-center">
        <header className="pricing_header lg:w-[50%]  flex-col gap-4 items-center flex justify-center">
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
  <div className="pricing_description  grid lg:grid-cols-3 grid-cols-1 gap-8">
   
    <Card className={`${special_banner && "bg-[#F47E42]"} pricing_description_card w-[300px] rounded-[20px] `}>
    <h4 className="text-white text-[1.25rem] font-medium text-base leading-[1.35] py-1 text-center">Basic Plan</h4>
      <div className="flex flex-col items-center px-7 rounded-[20px] bg-white py-12 gap-15">
      <CardHeader className="flex items-center gap-2">
            <RatingStars stars={1}/>
            <CardTitle className="text-black text-[1.25rem] font-medium text-base leading-[1.35] ">Basic Plan</CardTitle>
        </CardHeader>
        <CardDescription className="flex flex-col justify-center items-center gap-12">
            <p className="text-[1.25rem] font-semibold text-[#0F73EE] leading-[1.35]">20000 Dz</p>
            <CTA_Btn text={"Select"} type={"cta_pricing"}/>
            <div className="pricing_offers flex flex-col gap-3 relative">
            <hr className="border-[#4A4947] w-[300px] absolute top-[-18px] left-[-55px]" />
                <p className="flex gap-1 items-center">
                    <Check color="#008000" size={24}/>
                    Access to all brand assets
                    </p>
                <p className="flex gap-1 items-center">
                    <Check color="#008000" size={24}/>
                    Access to all brand assets
                    </p>
                <p className="flex gap-1 items-center">
                    <Check color="#008000" size={24}/>
                    Access to all brand assets
                    </p>
                
            </div>
        </CardDescription>
      </div>
    </Card>
    <Card className={`${special_banner && "bg-[#F47E42]"} pricing_description_card w-[300px] rounded-[20px] `}>
    <h4 className="text-white text-[1.25rem] font-medium text-base leading-[1.35] py-1 text-center">Basic Plan</h4>
      <div className="flex flex-col items-center px-7 rounded-[20px] bg-white py-12 gap-15">
      <CardHeader className="flex items-center gap-2">
            <RatingStars stars={1}/>
            <CardTitle className="text-black text-[1.25rem] font-medium text-base leading-[1.35] ">Basic Plan</CardTitle>
        </CardHeader>
        <CardDescription className="flex flex-col justify-center items-center gap-12">
            <p className="text-[1.25rem] font-semibold text-[#0F73EE] leading-[1.35]">20000 Dz</p>
            <CTA_Btn text={"Select"} type={"cta_pricing"}/>
            <div className="pricing_offers flex flex-col gap-3 relative">
            <hr className="border-[#4A4947] w-[300px] absolute top-[-18px] left-[-55px]" />
                <p className="flex gap-1 items-center">
                    <Check color="#008000" size={24}/>
                    Access to all brand assets
                    </p>
                <p className="flex gap-1 items-center">
                    <Check color="#008000" size={24}/>
                    Access to all brand assets
                    </p>
                <p className="flex gap-1 items-center">
                    <Check color="#008000" size={24}/>
                    Access to all brand assets
                    </p>
                
            </div>
        </CardDescription>
      </div>
    </Card>
    <Card className={`${special_banner && "bg-[#F47E42]"} pricing_description_card w-[300px] rounded-[20px] `}>
    <h4 className="text-white text-[1.25rem] font-medium text-base leading-[1.35] py-1 text-center">Basic Plan</h4>
      <div className="flex flex-col items-center px-7 rounded-[20px] bg-white py-12 gap-15">
      <CardHeader className="flex items-center gap-2">
            <RatingStars stars={1}/>
            <CardTitle className="text-black text-[1.25rem] font-medium text-base leading-[1.35] ">Basic Plan</CardTitle>
        </CardHeader>
        <CardDescription className="flex flex-col justify-center items-center gap-12">
            <p className="text-[1.25rem] font-semibold text-[#0F73EE] leading-[1.35]">20000 Dz</p>
            <CTA_Btn text={"Select"} type={"cta_pricing"}/>
            <div className="pricing_offers flex flex-col gap-3 relative">
            <hr className="border-[#4A4947] w-[300px] absolute top-[-18px] left-[-55px]" />
                <p className="flex gap-1 items-center">
                    <Check color="#008000" size={24}/>
                    Access to all brand assets
                    </p>
                <p className="flex gap-1 items-center">
                    <Check color="#008000" size={24}/>
                    Access to all brand assets
                    </p>
                <p className="flex gap-1 items-center">
                    <Check color="#008000" size={24}/>
                    Access to all brand assets
                    </p>
                
            </div>
        </CardDescription>
      </div>
    </Card>
    
  </div>
</section>

   
}
export default Pricing