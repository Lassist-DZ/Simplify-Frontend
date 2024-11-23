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
import fetchFAQs from "../../../functions/faqs/fetchFAQ";
import deleteAllFAQs from "../../../functions/faqs/deleteAllFAQs";
import deleteFaqByID from "../../../functions/faqs/deleteFAQByID";

export default function FAQs() {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  if (!token) {
   localStorage.removeItem("token")
   navigate("/login")
  }
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    fetchFAQs(setLoading, setFaqs, setError)
  }, []);

  const renderRow = (faq) => (
    <>
      <TableCell className="px-4 py-2 border border-gray-200">{faq.question}</TableCell>
      <TableCell className="px-4 py-2 border border-gray-200">{faq.answer}</TableCell>
    </>
  );

  const renderActions = (faq) => (
    <>
    
     <Link to={"/admin/faqs/update"} state={{ faq: faq }}>
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
        onClick={() => deleteFaqByID(faq._id, setLoading, setError)}
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
    <ContentLayout title="FAQs">
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
              <Link to="/admin/faqs">Pricings</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-16 ">
     
     <div className="flex  flex-wrap justify-end gap-4 pb-4">
       <Link to={"/admin/faqs/new"}>
       <Button className="bg-[#f47e42] rounded-[10px] text-white">
         Create FAQ
       </Button>
     </Link>
     
       <Button className="text-red-500 rounded-[10px] border border-red-500 bg-white" onClick={()=> deleteAllFAQs(setLoading,setError)}>
         Delete All FAQs
       </Button>
   </div>


   <TableLayout
        content_ar={faqs}
        headers={["Question", "Answer"]}
        renderRow={renderRow}
        actions={renderActions}
      />
     </div>
    </ContentLayout>
  );
}
