import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../shadcn/ui/button";
import { ContentLayout } from "../../../components/adminDashboard/content-layout";
import { useState, useEffect } from "react";
import fetchTestimonials from "../../../functions/testimonials/fetchTestimonials";
import deleteTestimonialByID from "../../../functions/testimonials/deleteTestimonialByID";
import deleteAllTestimonials from "../../../functions/testimonials/deleteAllTestimonials";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../shadcn/ui/breadcrumb";
import { Pencil, Trash } from "lucide-react";
import TableLayout from "../../../components/adminDashboard/table-layout";
import { TableCell } from "../../../shadcn/ui/table";

export default function Testimonials() {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  if (!token) {
   localStorage.removeItem("token")
   navigate("/login")
  }
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    fetchTestimonials(setLoading, setTestimonials, setError)
  }, []);


  const renderRow = (testimonial) => (
    <>
      <TableCell className="px-4 py-2 border border-gray-200"><img src={testimonial.witness_image} className="w-[6rem] h-[6rem] rounded-[50%]" alt="" /></TableCell>
      <TableCell className="px-4 py-2 border border-gray-200">{testimonial.username}</TableCell>
      <TableCell className="px-4 py-2 border border-gray-200">{testimonial.testimony_text}</TableCell>
    </>
  );

  const renderActions = (testimonial) => (
    <>
     <Link to={"/admin/testimonials/update"} state={{ testimonial: testimonial }}>
     <Button
        variant="secondary"
        size="small"
        className="flex items-center gap-2 text-[#d9b220]  w-full "
      >
        <Pencil className="w-4 h-4" />
        <span>Modify</span>
      </Button>
     </Link>
     <Button
        onClick={() => deleteTestimonialByID(testimonial._id, setLoading, setError)}
        variant="danger"
        size="small"
        className="flex items-center gap-2 text-red-500 "
      >
        <Trash className="w-4 h-4" />
        <span>Delete</span>
      </Button>
    </>
  );

  return (
    <ContentLayout title="Testimonials">
      <Breadcrumb className="text-[#2a2928] fixed">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/admin">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
          <BreadcrumbLink asChild>
              <Link to="/admin/testimonials">Testimonials</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-16">
      <div className="flex  flex-wrap justify-end gap-4 pb-4">
      <Link to={"/admin/testimonials/new"}>
        <Button className="bg-[#f47e42] rounded-[10px] text-white">
          Create New Testimonial
        </Button>
      </Link>
      <Button className="text-red-500 rounded-[10px] border border-red-500 bg-white" onClick={()=> deleteAllTestimonials(setLoading,setError)}>
         Delete All Testimonials
       </Button>
      </div>
      <TableLayout
        content_ar={testimonials}
        headers={["Image", "Username", "Testimony"]}
        renderRow={renderRow}
        actions={renderActions}
      />
      </div>
    

     
    </ContentLayout>
  );
}
