import Credentials from "./credentials";
import "../../assets/styles/components/contacts/contact_form.css"
import InputField from "../inputField";
import FormControl from "../../adminBoard/components/FormControl";
import { Button } from "../../shadcn/ui/button";
import createConsultation from "../../functions/createConsultation";
import { useState } from "react";
export default function ContactForm() {
    const [newConsultation, setNewConsultation] = useState({
        full_name: "",
        email: "",
        phone_number: "",
        why_interested: "",
        plan: ""
      });
    
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(false);
    
      const handleInputChange = (field, value) => {
        setNewConsultation((prevModel) => ({
          ...prevModel,
          [field]: value,
        }));
      };
    const consultationFields = [
        { type: "text", attribute: "full_name", label: "Full Name" },
        { type: "email", attribute: "email", label: "Email" },
        { type: "number", attribute: "phone_number", label: "Phone Number" },
        { type: "select", attribute: "plan"},
        { type: "textarea", attribute: "why_interested", label: "Why are you interested in our services ?", placeholder: "write your message..." }
      ];
    return   <section className="w-screen contacts-section h-auto py-[134px] lg:px-[156px] px-6">
      <div className="bg-white rounded-[10px] ">
       <div className="relative lg:left-[-40px] lg:top-0 top-[-48px] flex items-center lg:flex-row flex-col gap-8 lg:py-20 lg:px-0  px-4  ">
       <header className="flex flex-col lg:w-[50%] lg:px-12 px-2  lg:py-6 py-3 items-center gap-8 rounded-[10px] bg-[#243A4E] lg:shadow-none shadow-md"
        style={{border: "11px solid #FFF"}}>
            <h1 className="text-white lg:text-left text-center">Book Your Call</h1>
            <p className="font-size-paragraph text-white lg:text-left text-center">Schedule a short <strong>20-minute consultation</strong> with us today to discuss if we're the right fit for your organization.</p>
            <Credentials/>
        </header>
        <div className="description flex flex-col items-start  gap-0  ">
            <h4>Please fill the form so that we can understand your needs</h4>
            <FormControl
          formData={newConsultation}
          onInputChange={handleInputChange}
          fields={consultationFields}
        />
         
        <div className="w-full px-5">
        <Button onClick={() => createConsultation(setLoading,newConsultation, setError)} className="bg-[#243A4E] rounded-[10px] py-2 w-full text-white font-size-hyperlink" isLoading={loading}>
            {loading ? "Scheduling..." : "Schedule Meeting"}
          </Button>
        </div>
       
        </div>
       </div>
  </div>
    </section>
}