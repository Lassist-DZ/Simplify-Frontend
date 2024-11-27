import { useState } from "react";
import { Link } from "react-router-dom";
import Testimonial_image from "../../../assets/images/testimonial_person.jpg"
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
        <div className="flex  items-start gap-4 ">
        <h5 className=" text-center w-fit text-gray-400 border-b border-b-gray-400">Preview:</h5>
        <div className="h-[100%] testimonial_slide flex flex-col lg:gap-4 gap-12 lg:items-start items-center">
      <img src={!newTestimonial.witness_image ? Testimonial_image: newTestimonial.witness_image} alt="user testimonial profile" className='w-[6rem] h-[6rem] ' />
    <div className="flex flex-col gap-6">
  <blockquote className="font-size-paragraph-large">
      <em>" </em>{!newTestimonial.testimony_text ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit adipisci a repellat, officiis, excepturi incidunt cupiditate aspernatur ad quos dolore enim deleniti neque omnis dignissimos ea cum eligendi reprehenderit quasi?": newTestimonial.testimony_text}<em>"</em>
  </blockquote>
  <cite className='text-l'>@{!newTestimonial.username ? "John Doe": newTestimonial.username}</cite>
</div>
  </div>
        </div>
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
