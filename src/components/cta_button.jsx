import { MoveUpRight } from "lucide-react"
import RightArrow from "../assets/icons/right-arrow"
import "../assets/styles/components/cta_button.css"

function CTA_Btn({text, type, onClick}) {
  if (type === "cta_hero") {
    return (
        <button className="cta_hero p-6  gap-2">
        <RightArrow/>
       <div className="label">
       {text}
       </div>
      </button>
    )
  }
  else if (type === "cta_about"){
    return <button className="cta_about">
      <div>
      {text}
      <MoveUpRight size={24}/>
      </div>
        </button>
  }
  else if (type === "cta_jobs"){
    return <button className="cta_jobs">
      <div>
      {text}
      </div>
        </button>
  }
  else if (type === "cta_nav") {
  return  <button className="bg-black rounded-2xl p-4 w-fit text-white">
    {text}
  </button>
  }
  }
  
  export default CTA_Btn