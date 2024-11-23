import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../shadcn/ui/button";
import { ContentLayout } from "../../../components/adminDashboard/content-layout";
import { useState, useEffect } from "react";
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
import fetchPricingModels from "../../../functions/pricings/fetchPricings";
import deletePricingByID from "../../../functions/pricings/deletePricingByID";
import deleteAllPricings from "../../../functions/pricings/deleteAllPricings";

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
    
     <Link to={"/admin/pricings/update"} state={{ model: model }}>
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
        onClick={() => deletePricingByID(model._id, setLoading, setError)}
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
    <ContentLayout title="Pricing Models">
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
              <Link to="/admin/pricings">Pricings</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-16 ">
     
     <div className="flex  flex-wrap justify-end gap-4 pb-4">
       <Link to={"/admin/pricings/new"}>
       <Button className="bg-[#f47e42] rounded-[10px] text-white">
         Create New Pricing Model
       </Button>
     </Link>
     
       <Button className="text-red-500 rounded-[10px] border border-red-500 bg-white" onClick={()=> deleteAllPricings(setLoading,setError)}>
         Delete All Pricing Models
       </Button>
   </div>


   <TableLayout
        content_ar={pricingModels}
        headers={["Icon", "Special Offer","Plan", "Provided Assistants", "Allowed Users", "Price Per Hour", "Offers"]}
        renderRow={renderRow}
        actions={renderActions}
      />
     </div>
    </ContentLayout>
  );
}
