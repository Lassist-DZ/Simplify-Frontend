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
import FormControl from "../../../components/FormControl";
import updateConsultation from "../../../functions/consultations/updateConsultation";
import { Button } from "../../../shadcn/ui/button";
import axios from "axios";

export default function UpdateConsultation() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const { consultation: passedConsultation } = location.state || {};

  const [consultation, setConsultation] = useState(passedConsultation || {});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

 

  const handleInputChange = (field, value) => {
    setConsultation((prevModel) => ({
      ...prevModel,
      [field]: value,
    }));
  };

  const consultationFields = [
    { type: "text", attribute: "full_name", placeholder: "Enter full name" },
    { type: "email", attribute: "email", placeholder: "Enter email" },
    { type: "number", attribute: "phone_number", placeholder: "Enter phone number" },
    { type: "select", attribute: "plan", placeholder: "What type of plan are you interested in?" },
    { type: "textarea", attribute: "why_interested", placeholder: "Why are you interested in consultation?" },
  ];

  return (
    <ContentLayout title="Update Consultation">
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
            <BreadcrumbPage>Update</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-16">
        <FormControl
          formData={consultation}
          onInputChange={handleInputChange}
          fields={consultationFields}
          title="Update Consultation Details"
        />
        <div className="mt-6 flex justify-center">
          <Button
            onClick={async () => {
              await updateConsultation(consultation._id, consultation, setLoading, setError);
              navigate("/admin/consultations");
            }}
            className="bg-[#f47e42] rounded-[10px] text-white"
          >
            {loading ? "Updating..." : "Update Consultation"}
          </Button>
        </div>
        {error && <div className="text-red-500 mt-4 text-center">{error}</div>}
      </div>
    </ContentLayout>
  );
}
