import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../shadcn/ui/button";
import { ContentLayout } from "../content-layout";
import { useState, useEffect } from "react";
import fetchTestimonials from "../../functions/fetchTestimonials";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../shadcn/ui/breadcrumb";
import { Pencil, Trash } from "lucide-react";
import TableLayout from "../table-layout";
import { TableCell } from "../../shadcn/ui/table";

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

  const handleModify = (id) => {
    console.log(`Modify pricing model with ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete pricing model with ID: ${id}`);
  };

  const renderRow = (testimonial) => (
    <>
      <TableCell className="px-4 py-2 border border-gray-200">{testimonial.witness_image}</TableCell>
      <TableCell className="px-4 py-2 border border-gray-200">{testimonial.username}</TableCell>
      <TableCell className="px-4 py-2 border border-gray-200">{testimonial.testimony_text}</TableCell>
    </>
  );

  const renderActions = (model) => (
    <>
      <Button
        onClick={() => handleModify(model.id)}
        variant="secondary"
        size="small"
        className="flex items-center space-x-1"
      >
        <Pencil className="w-4 h-4" />
        <span>Modify</span>
      </Button>

      <Button
        onClick={() => handleDelete(model.id)}
        variant="danger"
        size="small"
        className="flex items-center space-x-1"
      >
        <Trash className="w-4 h-4" />
        <span>Delete</span>
      </Button>
    </>
  );

  return (
    <ContentLayout title="Pricing Models">
      <Breadcrumb className="text-white sticky">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Testimonials</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Link to={"/admin/testimonials/new"}>
        <Button className="mb-4 bg-blue-800 rounded text-white" variant="outline">
          Create New Testimonial
        </Button>
      </Link>

      <TableLayout
        content_ar={testimonials}
        headers={["Image", "Username", "Testimony"]}
        renderRow={renderRow}
        actions={renderActions}
      />
    </ContentLayout>
  );
}
