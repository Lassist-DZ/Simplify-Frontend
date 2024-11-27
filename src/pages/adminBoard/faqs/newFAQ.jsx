import { useState } from "react";
import { Link } from "react-router-dom";
import { ContentLayout } from "../../../components/adminDashboard/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../shadcn/ui/breadcrumb";
import { AccordionItem, AccordionContent, AccordionTrigger, Accordion } from "../../../shadcn/ui/accordion";
import { Button } from "../../../shadcn/ui/button";
import createFAQ from "../../../functions/faqs/createFAQ";
import FormControl from "../../../components/FormControl";
export default function NewFAQ() {
  const [newFAQ, setNewFAQ] = useState({
   question: "",
   answer: ""
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = async (field, value) => {
    
      setNewFAQ((prevModel) => ({
        ...prevModel,
        [field]: value
      }));
    
  };

  const handleSubmit = () => {
    createFAQ(setLoading, newFAQ, setError);
  };
  
  const faqFields = [
    { type: "text", attribute: "question", placeholder: "Write the question here" },
    { type: "text", attribute: "answer", placeholder: "Write the answer here" },
  ];

  return (
    <ContentLayout title="New FAQ">
      <Breadcrumb className="text-[#2a2928] fixed">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/admin">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/admin/faqs">FAQa</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>New</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-16  flex flex-col gap-8 items-center ">
          <div className="relative">
          <h5 className="absolute top-0 -left-20 text-gray-400 border-b border-b-gray-400">Preview:</h5>
          <Accordion  collapsible className="flex flex-col lg:py-16 py-8lg:px-16 lg:px-12 px-6 lg:gap-7  gap-4 rounded-[18px] bg-[#E5F0FD]">
          <AccordionItem   value={`item-example`} className="bg-white lg:py-1 py-0 lg:px-6 px-4  rounded-[20px] w-[50vw]">
<AccordionTrigger className="hover:[&>svg]:rotate-90 [&[data-state=open]>svg]:rotate-90 transition-transform duration-200 font-size-paragraph text-black justify-between   w-full">
{!newFAQ.question ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam qui laudantium natus placeat quasi, harum consequuntur vel ?" : newFAQ.question}
        </AccordionTrigger>
        <AccordionContent className="lg:py-5 font-size-paragraph text-gray-700">
        {!newFAQ.answer ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam qui laudantium natus placeat quasi, harum consequuntur vel" : newFAQ.answer}

        </AccordionContent>
      </AccordionItem>
          </Accordion>
          </div>
          
        <FormControl
          formData={newFAQ}
          onInputChange={handleInputChange}
          fields={faqFields}
          title="FAQ Details"
        />
        <div className="mt-6 flex justify-center">
          <Button onClick={handleSubmit} className="bg-[#f47e42] rounded-[10px] text-white" isLoading={loading}>
            {loading ? "Creating..." : "Create FAQ"}
          </Button>
        </div>
      </div>
    </ContentLayout>
  );
}
