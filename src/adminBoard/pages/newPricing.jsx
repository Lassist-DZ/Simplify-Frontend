import { useState } from "react";
import { Link } from "react-router-dom";
import { ContentLayout } from "../content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../shadcn/ui/breadcrumb";
import FormControl from "../components/FormControl";
import { Button } from "../../shadcn/ui/button";
import createNewModel from "../../functions/createPricingModel";

export default function NewPricing() {
  const [newPricingModel, setNewPricingModel] = useState({
    category: "",
    assistants_count: "",
    users_count: "",
    price_per_hour: "",
    services: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setNewPricingModel((prevModel) => ({
      ...prevModel,
      [field]: value,
    }));
  };

  const pricingFields = [
    { type: "text", attribute: "category", placeholder: "Enter plan category" },
    { type: "text", attribute: "assistants_count", placeholder: "How many assistants are provided for this plan?" },
    { type: "text", attribute: "users_count", placeholder: "How many users are allowed in this plan?" },
    { type: "number", attribute: "price_per_hour", placeholder: "Enter price per hour" },
    { type: "textarea", attribute: "services", placeholder: "Enter services included (comma-separated)" }
  ];

  return (
    <ContentLayout title="New Pricing Model">
      <Breadcrumb className="text-white fixed">
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

      <div className="mt-16">
        <FormControl
          formData={newPricingModel}
          onInputChange={handleInputChange}
          fields={pricingFields}
          title="Pricing Model Details"
        />
        <div className="mt-6 flex justify-center">
          <Button onClick={() => createNewModel(setLoading, newPricingModel, setError)} className="bg-blue-700 rounded text-white" isLoading={loading}>
            {loading ? "Creating..." : "Create Pricing Model"}
          </Button>
        </div>
      </div>
    </ContentLayout>
  );
}
