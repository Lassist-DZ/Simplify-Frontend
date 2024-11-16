import { Mail, MoveUpRight } from "lucide-react";
import RightArrow from "../assets/icons/right-arrow";
import "../assets/styles/components/cta_button.css";

function CTA_Btn({ text, type, icon }) {
  if (type === "cta_hero") {
    return (
      <button className={`cta_hero p-6  gap-2 hidden lg:inline-flex`}>
        <RightArrow />
        <div className="label">{text}</div>
      </button>
    );
  } if (type === "cta_hero_mobile") {
    return (
      <button className={`cta_hero_mobile p-6  gap-2 lg:hidden`}>
        <RightArrow />
        <div className="label">{text}</div>
      </button>
    );
  }
  else if (type === "cta_about") {
    return (
      <button className="cta_about">
        <div>
          {text}
          <MoveUpRight size={24} />
        </div>
      </button>
    );
  } else if (type === "cta_jobs") {
    return (
      <button className="cta_jobs">
        <div>{text}</div>
      </button>
    );
  } else if (type === "cta_nav") {
    return (
<button className="cta_nav overflow-hidden h-[55px] px-5 py-6 rounded-[100px] bg-[#243A4E]">
<div className="justify-center flex flex-col items-center gap-5 overlow-hidden ">
       <div className="flex  justify-center items-center gap-2">
        <Mail size={22} color="white"/>
        <p className="text-white font-size-hyperlink">{text}</p>    
        </div>
       <div className="flex justify-center items-center gap-2">
        <Mail size={22} color="white"/>
        <p className="text-white font-size-hyperlink">{text}</p>     
        </div>
       </div>
       
        
     
      </button>
    );
  }
  else if (type === "cta_pricing") {
    return  <button className="cta_pricing rounded-[10px] font-size-paragraph px-14 py-3 w-fit">
    {text}
  </button>
  }
  else if (type === "cta_apply") {
   return <button className={` font-size-paragraph px-2  flex items-center gap-2 ${type} bg-[#3290C0] text-white rounded-[10px] px-6 py-2`}>
  <p>
  {text}
  </p>
</button>
  }
  else{
    return  <button className={` font-size-paragraph px-2  flex items-center gap-2 ${type}`}>
      {icon}
    <p className="lg:block hidden">
    {text}
    </p>
  </button>
  }
}

export default CTA_Btn;
