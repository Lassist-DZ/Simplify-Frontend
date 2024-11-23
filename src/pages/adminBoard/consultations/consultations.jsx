import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../shadcn/ui/button";
import { ContentLayout } from "../../../components/adminDashboard/content-layout";
import { useState, useEffect } from "react";
import fetchConsultations from "../../../functions/consultations/fetchConsultations";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator} from "../../../shadcn/ui/breadcrumb";
import { Pencil, Trash } from "lucide-react";
import TableLayout from "../../../components/adminDashboard/table-layout"
import { TableCell } from "../../../shadcn/ui/table";
import loggout from "../../../functions/loggout";
import deleteAllConsultations from "../../../functions/consultations/deleteAllConsultations";
import deleteConsultationByID from "../../../functions/consultations/deleteConsultationByID";

export default function Consultations() {
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  if (!token) {
   loggout(navigate)
  }
  useEffect(() => {
    fetchConsultations(setLoading, token, setConsultations, navigate, setError)
  }, []);

  const renderRow = (consultation) => (
    <>
      <TableCell className="px-4 py-2 border border-gray-200">{consultation.full_name}</TableCell>
      <TableCell className="px-4 py-2 border border-gray-200">{consultation.email}</TableCell>
      <TableCell className="px-4 py-2 border border-gray-200">{consultation.phone_number}</TableCell>
      <TableCell className="px-4 py-2 border border-gray-200">{consultation.plan}</TableCell>
      <TableCell className="px-4 py-2 border border-gray-200">{consultation.why_interested}</TableCell>
    </>
  );

  const renderActions = (consultation) => (
    <>
     <Link to={"/admin/consultations/update"} state={{ consultation: consultation }}>
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
        onClick={() => deleteConsultationByID(consultation._id, setLoading, setError)}
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
    <ContentLayout title="Consultations">
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
              <Link to="/admin/consultations">Consultations</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-16 ">
     
      <div className="flex  flex-wrap justify-end gap-4 pb-4">
        <Link to={"/admin/consultations/new"}>
        <Button className="bg-[#f47e42] rounded-[10px] text-white">
          Create New Consultation
        </Button>
      </Link>
      
        <Button className="text-red-500 rounded-[10px] border border-red-500 bg-white" onClick={()=> deleteAllConsultations(setLoading,setError)}>
          Delete All Consultations
        </Button>
    </div>


      <TableLayout
        content_ar={consultations}
        headers={["Full Name", "Email", "Phone Number","Plan", "Why Interested"]}
        renderRow={renderRow}
        actions={renderActions}
      />
      </div>
    </ContentLayout>
  );
}
