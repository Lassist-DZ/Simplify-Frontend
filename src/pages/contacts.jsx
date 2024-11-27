import { useState } from "react";
import Navbar from "../components/navbar";
import ContactForm from "../components/contacts/contact_form";
import Footer from "../components/footer";
const Contacts = () =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return <div className="bg-red-200">
                <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <ContactForm/>
        <Footer/>
    </div>
}
export default Contacts
{/* <main className="min-w-screen">
        
    </main> */}