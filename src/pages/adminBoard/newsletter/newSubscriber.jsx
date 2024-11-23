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
import FormControl from "../../../components/FormControl";
import { Button } from "../../../shadcn/ui/button";
import createSubscriber from "../../../functions/newsletter/createSubscriber";

export default function NewSubscriber() {
  const [newSubscriber, setNewSubscriber] = useState({
    email: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setNewSubscriber((prevModel) => ({
      ...prevModel,
      [field]: value,
    }));
  };

  const subscriberFields = [
    { type: "email", attribute: "email", placeholder: "Enter email" },
  ];

  return (
    <ContentLayout title="New Subscriber">
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
              <Link to="/admin/newsletter_subs">Newsletter Subscribers</Link>
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
          formData={newSubscriber}
          onInputChange={handleInputChange}
          fields={subscriberFields}
          title="Subscriber Details"
        />
        <div className="mt-6 flex justify-center">
          <Button onClick={() => createSubscriber(setLoading,newSubscriber, setError)} className="bg-[#f47e42] rounded-[10px] text-white" isLoading={loading}>
            {loading ? "Creating..." : "Add Subscriber"}
          </Button>
        </div>
      </div>
    </ContentLayout>
  );
}
