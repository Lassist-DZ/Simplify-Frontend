import {Link} from "react-router-dom";
import { Button } from "../../shadcn/ui/button";
import { ContentLayout } from "../content-layout";
import { useState, useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "../../shadcn/ui/breadcrumb";
import { Pencil, Trash } from "lucide-react";
import axios from "axios";
export default function PricingModel() {
    const [pricingModels, setPricingModels] = useState([]); // State to store pricing models
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error if any

  // Function to fetch pricing models from the API
  const fetchPricingModels = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/pricing/get_pricing_all');
      
      if (response.statusText === "OK") {
        setPricingModels(response.data.data); 
      }
      
      console.log(pricingModels)
      setLoading(false);
    } catch (err) {
      setError('Error fetching pricing models');
      setLoading(false);
    }
  };

  // Fetch pricing models when the component mounts
  useEffect(() => {
    fetchPricingModels();
  }, []);
      const handleModify = (id) => {
        console.log(`Modify pricing model with ID: ${id}`);
      };
    
      const handleDelete = (id) => {
        console.log(`Delete pricing model with ID: ${id}`);
      };
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
      <Link to={"/pricings/new"}>
      <Button className="mb-4 bg-blue-800 rounded text-white" variant="outline">
        Create New Pricing Model
      </Button>
      </Link>

      {/* Pricing Table */}
     <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-200 text-left">Plan</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Provided Assistants</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Allowed Users</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Price Per Hour</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Offers</th>
            </tr>
          </thead>
          <tbody>
            {pricingModels.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-4 py-2 border border-gray-200 text-center">
                  No pricing models available
                </td>
              </tr>
            ) : (
              pricingModels.map((model) => (
                <tr key={model.id} className="bg-transparent text-white">
                  <td className="px-4 py-2 border border-gray-200">{model.category}</td>
                  <td className="px-4 py-2 border border-gray-200">{model.assistants_count}</td>
                  <td className="px-4 py-2 border border-gray-200">{model.users_count}</td>
                  <td className="px-4 py-2 border border-gray-200">{model.price_per_hour} DZD</td>
                  <td className="px-4 py-2 border border-gray-200">{model.services}</td>
                  <td className="px-4 py-2 border border-gray-200 flex space-x-2">
                    {/* Modify Button */}
                    <Button
                      onClick={() => handleModify(model.id)}
                      variant="secondary"
                      size="small"
                      className="flex items-center space-x-1"
                    >
                      <Pencil className="w-4 h-4" />
                      <span>Modify</span>
                    </Button>

                    {/* Delete Button */}
                    <Button
                      onClick={() => handleDelete(model.id)}
                      variant="danger"
                      size="small"
                      className="flex items-center space-x-1"
                    >
                      <Trash className="w-4 h-4" />
                      <span>Delete</span>
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
   
    </ContentLayout>
  );
}
