import { MoveUpRight } from "lucide-react";
import RightArrow from "../assets/icons/right-arrow";
import "../assets/styles/components/cta_button.css";

function CTA_Btn({ text, type }) {
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
      <button className="cta_nav flex flex-col rounded-2xl p-3  w-fit text-white">
       <div className="container flex flex-col gap-3">
       <div>
        {text}    
        </div>
        <div>
        {text}
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
}

export default CTA_Btn;
