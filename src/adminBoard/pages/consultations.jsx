import {Link} from "react-router-dom";

import { ContentLayout } from "../content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "../../shadcn/ui/breadcrumb";

export default function Consultaitons() {
  return (
    <ContentLayout title="Consultations">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
         
          <BreadcrumbItem>
            <BreadcrumbPage>Consultations</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      here will be the display of a UI demo to how the service is displayed, a table that has the current services content, button to create a service and buttons to modify or delete a service
    </ContentLayout>
  );
}
