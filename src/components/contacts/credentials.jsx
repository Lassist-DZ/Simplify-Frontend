import { Mail, MapPin, Phone } from "lucide-react"
import "../../assets/styles/components/contacts/credentials.css"
import { useState } from "react"
function Credentials() {
    return <div className={`contact_credentials justify-between items-center w-full gap-2 h-[48px] hidden lg:flex `}>
        <div className="link flex items-center gap-2" >
        <div className="bg-[#F47E42] p-2 rounded-[50%] text-white" ><MapPin size={24}/></div>
        <p>2214 bd de la Lironde, Parc Scientifique Agropolis</p>
        </div>
        <div className="link flex items-center gap-2">
        <div className="bg-[#F47E42] p-2 rounded-[50%] text-white"><Phone size={24}/></div>
        <p> +213000000000</p>
        </div>
        <div className="link flex items-center gap-2">
        <div className="bg-[#F47E42] p-2 rounded-[50%] text-white"><Mail size={24}/></div>
        <p>email.gmail@com</p>
        </div>
        
    </div>
}
export default Credentials