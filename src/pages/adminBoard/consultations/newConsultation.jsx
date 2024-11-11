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
import FormControl from "../../../components/FormControl";
import createConsultation from "../../../functions/consultations/createConsultation";
import { Button } from "../../../shadcn/ui/button";

export default function NewConsultation() {
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
    { type: "text", attribute: "full_name", placeholder: "Enter full name" },
    { type: "email", attribute: "email", placeholder: "Enter email" },
    { type: "number", attribute: "phone_number", placeholder: "Enter phone number" },
    { type: "select", attribute: "plan", placeholder: "What type of plan are you interested in ?" },
    { type: "textarea", attribute: "why_interested", placeholder: "Why are you interested in consultation?" }
  ];

  return (
    <ContentLayout title="New Consultation">
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
              <Link to="/admin/consultations">Consultations</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>New</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-16">
        <FormControl
          formData={newConsultation}
          onInputChange={handleInputChange}
          fields={consultationFields}
          title="Consultation Details"
        />
        <div className="mt-6 flex justify-center">
          <Button onClick={() => createConsultation(setLoading,newConsultation, setError)} className="bg-[#f47e42] rounded-[10px] text-white" >
            {loading ? "Creating..." : "Create Consultation"}
          </Button>
        </div>
      </div>
    </ContentLayout>
  );
}
