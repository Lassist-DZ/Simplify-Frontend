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
import { Button } from "../../../shadcn/ui/button";
import createNewModel from "../../../functions/pricings/createPricingModel";
import FormControl from "../../../components/FormControl";
import PricingCard from "../../../components/home/pricing_card";
export default function NewPricing() {
  const [newPricingModel, setNewPricingModel] = useState({
    special_offer: "",
    icon: null, // Set initial value to null for the file
    category: "",
    assistants_count: "",
    users_count: "",
    price_per_hour: "",
    services: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = async (field, value) => {
    console.log(field, value)
    if (field === "icon" && value instanceof File) {
      const file = value;
      const svgContent = await file.text(); // Read SVG content as text
      setNewPricingModel((prevModel) => ({
        ...prevModel,
        [field]: svgContent // Store SVG content directly
      }));
    } else {
      setNewPricingModel((prevModel) => ({
        ...prevModel,
        [field]: value
      }));
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();
    Object.entries(newPricingModel).forEach(([key, value]) => {
      formData.append(key, value);
    });

    createNewModel(setLoading, newPricingModel, setError);
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
    <ContentLayout title="New Pricing Model">
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
              <Link to="/admin/pricings">Pricing Models</Link>
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
          <PricingCard model={newPricingModel} preview />
          </div>
          
        <FormControl
          formData={newPricingModel}
          onInputChange={handleInputChange}
          fields={pricingFields}
          title="Pricing Model Details"
        />
        <div className="mt-6 flex justify-center">
          <Button onClick={handleSubmit} className="bg-[#f47e42] rounded-[10px] text-white" isLoading={loading}>
            {loading ? "Creating..." : "Create Pricing Model"}
          </Button>
        </div>
      </div>
    </ContentLayout>
  );
}
