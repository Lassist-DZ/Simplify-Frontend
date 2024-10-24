import "../assets/styles/components/navbar.css"
import SimplifyLogo from "../assets/icons/simplify_logo"
import NavMenu from "./navmenu"
import CTA_Btn from "./cta_button"
export default function Navbar() {
    return <header className="nav-container flex items-center justify-between mx-16 h-[90px] py-5 px-12 rounded-[100px] bg-white bg-opacity-20">
     <div className="header-left flex justify-between w-[50%]">
            <SimplifyLogo/>
        <NavMenu/>
     </div>
     <div className="header-right flex w-[50%] justify-end gap-6">
          <CTA_Btn type={"cta_jobs"} text={"Find job"}/>
          <CTA_Btn type={"cta_nav"} text={"Book a Call"} />
     </div>
  </header>
}