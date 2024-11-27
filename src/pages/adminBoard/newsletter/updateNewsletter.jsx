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
import { Button } from "../../../shadcn/ui/button";
import axios from "axios";
import updateSubscriber from "../../../functions/newsletter/updateSubscriber";

export default function UpdateNewsletter() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const { sub: passedSubscriber } = location.state || {};

  const [subscriber, setNewSubscriber] = useState(passedSubscriber || {});
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
    <ContentLayout title="Update Subscriber">
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
            <BreadcrumbPage>Update</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-16">
        <FormControl
          formData={subscriber}
          onInputChange={handleInputChange}
          fields={subscriberFields}
          title="Update Subscriber Details"
        />
        <div className="mt-6 flex justify-center">
          <Button
            onClick={async () => {
              await updateSubscriber(subscriber._id, subscriber, setLoading, setError);
              navigate("/admin/newsletter_subs");
            }}
            className="bg-[#f47e42] rounded-[10px] text-white"
          >
            {loading ? "Updating..." : "Update Subscriber"}
          </Button>
        </div>
        {error && <div className="text-red-500 mt-4 text-center">{error}</div>}
      </div>
    </ContentLayout>
  );
}
