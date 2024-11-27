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
import updatePricing from "../../../functions/pricings/updatePricing";
import { Button } from "../../../shadcn/ui/button";
import axios from "axios";
import PricingCard from "../../../components/home/pricing_card";

export default function UpdateTestimonial() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  const { model: passedPricing } = location.state || {};

  const [pricing, setPricing] = useState(passedPricing || {});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = async (field, value) => {
    console.log(field, value)
    if (field === "icon" && value instanceof File) {
      const file = value;
      const svgContent = await file.text(); // Read SVG content as text
      setPricing((prevModel) => ({
        ...prevModel,
        [field]: svgContent 
      }));
    } else {
      setPricing((prevModel) => ({
        ...prevModel,
        [field]: value
      }));
    }
  };

  const pricingFields = [
    { type: "file", attribute: "icon", placeholder: "Upload your preferred icon" },
    { type: "text", attribute: "special_offer", placeholder: "If it's a special offer, enter the label of it" },
    { type: "text", attribute: "category", placeholder: "Enter plan category" },
    { type: "text", attribute: "assistants_count", placeholder: "How many assistants are provided for this plan?" },
    { type: "text", attribute: "users_count", placeholder: "How many users are allowed in this plan?" },
    { type: "number", attribute: "price_per_hour", placeholder: "Enter price per hour" },
    { type: "textarea", attribute: "services", placeholder: "Enter services included (comma-separated)" }
  ];

  return (
    <ContentLayout title="Update Pricing">
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
              <Link to="/admin/pricings">Pricings</Link>
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
          <PricingCard model={pricing} preview />
          </div>
        <FormControl
          formData={pricing}
          onInputChange={handleInputChange}
          fields={pricingFields}
          title="Update Pricing Details"
        />
        <div className="mt-6 flex justify-center">
          <Button
            onClick={async () => {
              await updatePricing(pricing._id, pricing, setLoading, setError);
              navigate("/admin/pricings");
            }}
            className="bg-[#f47e42] rounded-[10px] text-white"
          >
            {loading ? "Updating..." : "Update Pricing"}
          </Button>
        </div>
        {error && <div className="text-red-500 mt-4 text-center">{error}</div>}
      </div>
    </ContentLayout>
  );
}
