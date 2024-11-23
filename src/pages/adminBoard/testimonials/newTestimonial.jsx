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
import createNewTestimonial from "../../../functions/testimonials/createTestimonial";
import FormControl from "../../../components/FormControl";

export default function NewTestimonial() {
  const [newTestimonial, setNewTestimonial] = useState({
    username: "",
    testimony_text: "",
    witness_image: null,
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setNewTestimonial((prevModel) => ({
      ...prevModel,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    const formData = new FormData();
    Object.entries(newTestimonial).forEach(([key, value]) => {
      formData.append(key, value);
    });
   
    createNewTestimonial(setLoading, formData, setError);
  };

  const testimonialFields = [
    { type: "file", attribute: "witness_image", placeholder: "Upload witness image" },
    { type: "text", attribute: "username", placeholder: "Enter username" },
    { type: "textarea", attribute: "testimony_text", placeholder: "Enter testimony text" },
  ];

  return (
    <ContentLayout title="New Testimonial">
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
              <Link to="/admin/testimonials">Testimonials</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>New</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-16 flex flex-col gap-8 items-center">
        <FormControl
          formData={newTestimonial}
          onInputChange={handleInputChange}
          fields={testimonialFields}
          title="Testimonial Details"
        />
        <div className="mt-6 flex justify-center">
          <Button onClick={handleSubmit} className="bg-[#f47e42] rounded-[10px] text-white" isLoading={loading}>
            {loading ? "Creating..." : "Create Testimonial"}
          </Button>
        </div>
      </div>
    </ContentLayout>
  );
}
