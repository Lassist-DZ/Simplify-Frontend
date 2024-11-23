import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../shadcn/ui/button";
import { ContentLayout } from "../../../components/adminDashboard/content-layout";
import { useState, useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator} from "../../../shadcn/ui/breadcrumb";
import { Pencil, Trash } from "lucide-react";
import TableLayout from "../../../components/adminDashboard/table-layout";
import { TableCell } from "../../../shadcn/ui/table";
import loggout from "../../../functions/loggout";
import fetchNewsletterSubs from "../../../functions/newsletter/fetchNewsletterSubscribers";
import deleteSubscriberByID from "../../../functions/newsletter/deleteSubscriberByID";
import deleteAllSubscribers from "../../../functions/newsletter/deleteAllSubscribers";

export default function NewsletterSubs() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  if (!token) {
   loggout(navigate)
  }
  useEffect(() => {
    fetchNewsletterSubs(setLoading, token, setEmails, navigate, setError)
  }, []);


  const renderRow = (email) => (
    <>
      <TableCell className="px-4 py-2 border border-gray-200">{email.email}</TableCell>
    </>
  );

  const renderActions = (sub) => (
    <>
    <Link to={"/admin/newsletter_subs/update"} state={{ sub: sub }}>
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
        onClick={() => deleteSubscriberByID(sub._id, setLoading, setError)}
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
    <ContentLayout title="Newsletter Subscribers">
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
              <Link to="/admin/newsletter_subs">Newsletter Subscribers</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-16">
        <div className="flex flex-wrap justify-end gap-4 pb-4">
        <Link to={"/admin/newsletter_subs/new"}>
        <Button className="bg-[#f47e42] rounded-[10px] text-white">
        Create New Subscriber
       </Button>
      </Link>
      <Button className="text-red-500 rounded-[10px] border border-red-500 bg-white" onClick={()=> deleteAllSubscribers(token, setLoading,setError)}>
         Delete All Subscribers
       </Button>
        </div>
        <TableLayout
        content_ar={emails}
        headers={["Email"]}
        renderRow={renderRow}
        actions={renderActions}
      />
      </div>
    </ContentLayout>
  );
}
