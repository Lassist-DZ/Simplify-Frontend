import { useState } from "react";
import { Link } from "react-router-dom";
import { ContentLayout } from "../content-layout";
import { Bounce, toast } from 'react-toastify';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../shadcn/ui/breadcrumb";
import FormControl from "../components/FormControl";
import axios from "axios";
import { Button } from "../../shadcn/ui/button";
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

  // Function to handle form submission
  const createNewModel = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.post(
        "http://localhost:5000/api/pricing/create_pricing",
        newPricingModel
      );
      toast.success(response.data.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
      setLoading(false);
      window.location.href = '/pricings'; 
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
      setError(err.response.data.message);
      setLoading(false);
    }
  };

  // Update function to modify the state object
  const handleInputChange = (field, value) => {
    setNewPricingModel((prevModel) => ({
      ...prevModel,
      [field]: value,
    }));
  };

  return (
    <ContentLayout title="New Pricing Model">
      <Breadcrumb className="text-white fixed">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/pricings">Pricing Models</Link>
             
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>New</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
     
      {/* Form Section */}
      <div className="mt-16">

        {/* Form Control for Category */}
        <FormControl pricingData={newPricingModel} onInputChange={handleInputChange} />

       
        <div className="mt-6 flex justify-center">
          <Button onClick={createNewModel} className=" bg-blue-700 rounded text-white" isLoading={loading}>
            {loading ? "Creating..." : "Create Pricing Model"}
          </Button>
        </div>
      </div>
    </ContentLayout>
  );
}
