import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../shadcn/ui/button";
import { ContentLayout } from "../../components/adminDashboard/content-layout";
import { useState, useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../shadcn/ui/breadcrumb";
import { Pencil, Trash } from "lucide-react";
import TableLayout from "../../components/adminDashboard/table-layout";
import { TableCell } from "../../shadcn/ui/table";
import fetchPricingModels from "../../functions/fetchPricings";

export default function PricingModel() {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  if (!token) {
   localStorage.removeItem("token")
   navigate("/login")
  }
  const [pricingModels, setPricingModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    fetchPricingModels(setLoading, setPricingModels, setError)
  }, []);

  const handleModify = (id) => {
    console.log(`Modify pricing model with ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete pricing model with ID: ${id}`);
  };

  const renderRow = (model) => (
    <>
      <TableCell className="px-4 py-2 border border-gray-200">
  <div dangerouslySetInnerHTML={{ __html: model.icon }} />
</TableCell>
      <TableCell className="px-4 py-2 border border-gray-200">{model.special_offer}</TableCell>
      <TableCell className="px-4 py-2 border border-gray-200">{model.category}</TableCell>
      <TableCell className="px-4 py-2 border border-gray-200">{model.assistants_count}</TableCell>
      <TableCell className="px-4 py-2 border border-gray-200">{model.users_count}</TableCell>
      <TableCell className="px-4 py-2 border border-gray-200">{model.price_per_hour} DZD</TableCell>
      <TableCell className="px-4 py-2 border border-gray-200">
  <ul>
    {model.services.split(',').map((service, index) => (
      <li key={index}>{service.trim()}</li>
    ))}
  </ul>
</TableCell>


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
            <BreadcrumbPage>Pricing Models</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Link to={"/admin/pricings/new"}>
        <Button className="mb-4 bg-blue-800 rounded text-white" variant="outline">
          Create New Pricing Model
        </Button>
      </Link>

      <TableLayout
        content_ar={pricingModels}
        headers={["Icon", "Special Offer","Plan", "Provided Assistants", "Allowed Users", "Price Per Hour", "Offers"]}
        renderRow={renderRow}
        actions={renderActions}
      />
    </ContentLayout>
  );
}
