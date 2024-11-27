import { useEffect, useState } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { ContentLayout } from "../../../components/adminDashboard/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../shadcn/ui/breadcrumb";
import { Accordion, AccordionTrigger, AccordionContent, AccordionItem } from "../../../shadcn/ui/accordion";
import FormControl from "../../../components/FormControl";
import updateFAQ from "../../../functions/faqs/updateFAQ";
import { Button } from "../../../shadcn/ui/button";
import axios from "axios";

export default function UpdateFAQ() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  const { faq: passedFAQ } = location.state || {};

  const [faq, setFaq] = useState(passedFAQ || {});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = async (field, value) => {
    
      setFaq((prevModel) => ({
        ...prevModel,
        [field]: value
      }));
  
  }
  const faqFields = [
    { type: "text", attribute: "question", placeholder: "Write the question here" },
    { type: "text", attribute: "answer", placeholder: "Write the answer here" },
  ];

  return (
    <ContentLayout title="Update FAQ">
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
              <Link to="/admin/faqs">FAQs</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Update</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-16  flex flex-col gap-8 items-center">
      <div className="relative">
          <h5 className="absolute top-0 -left-20 text-gray-400 border-b border-b-gray-400">Preview:</h5>
          <Accordion  collapsible className="flex flex-col lg:py-16 py-8lg:px-16 lg:px-12 px-6 lg:gap-7  gap-4 rounded-[18px] bg-[#E5F0FD]">
          <AccordionItem   value={`item-example`} className="bg-white lg:py-1 py-0 lg:px-6 px-4  rounded-[20px] w-[50vw]">
<AccordionTrigger className="hover:[&>svg]:rotate-90 [&[data-state=open]>svg]:rotate-90 transition-transform duration-200 font-size-paragraph text-black justify-between   w-full">
{!faq.question ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam qui laudantium natus placeat quasi, harum consequuntur vel ?" : faq.question}
        </AccordionTrigger>
        <AccordionContent className="lg:py-5 font-size-paragraph text-gray-700">
        {!faq.answer ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam qui laudantium natus placeat quasi, harum consequuntur vel" : faq.answer}

        </AccordionContent>
      </AccordionItem>
          </Accordion>
          </div>
        <FormControl
          formData={faq}
          onInputChange={handleInputChange}
          fields={faqFields}
          title="Update FAQ Details"
        />
        <div className="mt-6 flex justify-center">
          <Button
            onClick={async () => {
              await updateFAQ(faq._id, faq, setLoading, setError);
              navigate("/admin/faqs");
            }}
            className="bg-[#f47e42] rounded-[10px] text-white"
          >
            {loading ? "Updating..." : "Update FAQ"}
          </Button>
        </div>
        {error && <div className="text-red-500 mt-4 text-center">{error}</div>}
      </div>
    </ContentLayout>
  );
}
