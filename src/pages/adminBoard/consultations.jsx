import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../shadcn/ui/button";
import { ContentLayout } from "../../components/adminDashboard/content-layout";
import { useState, useEffect } from "react";
import fetchConsultations from "../../functions/fetchConsultations";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator} from "../../shadcn/ui/breadcrumb";
import { Pencil, Trash } from "lucide-react";
import TableLayout from "../../adminBoard/table-layout";
import { TableCell } from "../../shadcn/ui/table";
import loggout from "../../functions/loggout";

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

  const handleModify = (id) => {
    console.log(`Modify consultation with ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete consultation with ID: ${id}`);
  };

  const renderRow = (consultation) => (
    <>
      <TableCell className="px-4 py-2 border border-gray-200">{consultation.full_name}</TableCell>
      <TableCell className="px-4 py-2 border border-gray-200">{consultation.email}</TableCell>
      <TableCell className="px-4 py-2 border border-gray-200">{consultation.phone_number}</TableCell>
      <TableCell className="px-4 py-2 border border-gray-200">{consultation.why_interested}</TableCell>
    </>
  );

  const renderActions = (consultation) => (
    <>
      <Button
        onClick={() => handleModify(consultation.id)}
        variant="secondary"
        size="small"
        className="flex items-center space-x-1"
      >
        <Pencil className="w-4 h-4" />
        <span>Modify</span>
      </Button>

      <Button
        onClick={() => handleDelete(consultation.id)}
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
    <ContentLayout title="Consultations">
      <Breadcrumb className="text-white sticky">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/admin">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Consultations</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Link to={"/admin/consultations/new"}>
        <Button className="mb-4 bg-blue-800 rounded text-white" variant="outline">
          Create New Consultation
        </Button>
      </Link>

      <TableLayout
        content_ar={consultations}
        headers={["Full Name", "Email", "Phone Number", "Why Interested"]}
        renderRow={renderRow}
        actions={renderActions}
      />
    </ContentLayout>
  );
}
