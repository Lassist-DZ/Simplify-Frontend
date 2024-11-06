import { useState } from "react";
import Navbar from "../components/navbar";
import ContactForm from "../components/contacts/contact_form";
const Contacts = () =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return <div className="bg-red-200">
                <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <ContactForm/>
    </div>
}
export default Contacts
{/* <main className="min-w-screen">
        
    </main> */}