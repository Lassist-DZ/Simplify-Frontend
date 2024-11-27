import "../../assets/styles/components/home/faq.css"
import { useEffect } from "react"
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  } from "../../shadcn/ui/accordion"
import { Check, ChevronDownCircle } from "lucide-react"
import { useState } from "react"
import fetchFAQs from "../../functions/faqs/fetchFAQ"
const FAQ = () => {
  const [FAQs, setFAQs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchFAQs(setLoading, setFAQs, setError)
  }, []);
    return <section  className="faq_section  flex gap-16 flex-col lg:py-20 lg:px-16 px-6 py-12 lg:px-[176px] lg:pb-[150px] pb-20 items-center bg-[#F7F7FB]">
        <header className="faq_header lg:w-[80%]  flex-col items-center flex justify-center ">
        <small className="font-size-paragraph">FAQ</small>
        <h1 className="text-center">
            Ask us Anything
      </h1>
      <p className="font-size-paragraph2 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, incidunt</p>
</header>
  <div className="faq_description  w-full z-[2] relative">
  <Accordion  collapsible className="flex flex-col lg:py-16 py-8lg:px-16 lg:px-12 px-6 lg:gap-7  gap-4 rounded-[18px] bg-[#E5F0FD]">
  {
    FAQs.length !== 0 && FAQs.map((faq, index) => {
      return <AccordionItem value={`item-${index}`} className="bg-white lg:py-1 py-0 lg:px-6 px-4  rounded-[20px]">
<AccordionTrigger className="hover:[&>svg]:rotate-90 [&[data-state=open]>svg]:rotate-90 transition-transform duration-200 font-size-paragraph text-black justify-between   w-full">
{faq.question}
        </AccordionTrigger>
        <AccordionContent className="lg:py-5 font-size-paragraph text-gray-700">
          {faq.answer}
        </AccordionContent>
      </AccordionItem>
   
    
    })
   }
  </Accordion>
  </div>
   
   
   
    

</section>

   
}
export default FAQ