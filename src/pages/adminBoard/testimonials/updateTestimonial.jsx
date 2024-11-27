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
import updateTestimonial from "../../../functions/testimonials/updateTestimonial";
import { Button } from "../../../shadcn/ui/button";

export default function UpdateTestimonial() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  const { testimonial: passedTestimonial } = location.state || {};

  const [testimonial, setTestimonial] = useState(passedTestimonial || {});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setTestimonial((prevModel) => ({
      ...prevModel,
      [field]: value,
    }));
  };
  const handleSubmit = () => {
    const formData = new FormData();
    Object.entries(testimonial).forEach(([key, value]) => {
      formData.append(key, value);
    });
    updateTestimonial(testimonial._id, formData, setLoading, setError);
  };
  const testimonialFields = [
    { type: "file", attribute: "witness_image", placeholder: "Upload witness image" },
    { type: "text", attribute: "username", placeholder: "Enter username" },
    { type: "textarea", attribute: "testimony_text", placeholder: "Enter testimony text" },
  ];

  return (
    <ContentLayout title="Update Testimonial">
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
            <BreadcrumbPage>Update</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-16  flex flex-col gap-8 items-center">
      <div className="flex  items-start gap-4 ">
        <h5 className=" text-center w-fit text-gray-400 border-b border-b-gray-400">Preview:</h5>
        <div className="h-[100%] testimonial_slide flex flex-col lg:gap-4 gap-12 lg:items-start items-center max- w-[50vw]">
      <img src={!testimonial.witness_image ? Testimonial_image: testimonial.witness_image} alt="user testimonial profile" className='w-[6rem] h-[6rem] ' />
    <div className="flex flex-col gap-6">
  <blockquote className="font-size-paragraph-large">
      <em>" </em>{!testimonial.testimony_text ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit adipisci a repellat, officiis, excepturi incidunt cupiditate aspernatur ad quos dolore enim deleniti neque omnis dignissimos ea cum eligendi reprehenderit quasi?": testimonial.testimony_text}<em>"</em>
  </blockquote>
  <cite className='text-l'>@{!testimonial.username ? "John Doe": testimonial.username}</cite>
</div>
  </div>
        </div>
        <FormControl
          formData={testimonial}
          onInputChange={handleInputChange}
          fields={testimonialFields}
          title="Update Testimonial Details"
        />
        <div className="mt-6 flex justify-center">
          <Button
          onClick={handleSubmit}
            className="bg-[#f47e42] rounded-[10px] text-white"
          >
            {loading ? "Updating..." : "Update Testimonial"}
          </Button>
        </div>
        {error && <div className="text-red-500 mt-4 text-center">{error}</div>}
      </div>
    </ContentLayout>
  );
}
