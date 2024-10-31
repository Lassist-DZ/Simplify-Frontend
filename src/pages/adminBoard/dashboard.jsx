
import { Card, CardContent } from '../../shadcn/ui/card'
import {Link, useNavigate} from "react-router-dom";
import { ContentLayout } from '../../components/adminDashboard/content-layout';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "../../shadcn/ui/breadcrumb";

const Dashboard = () => {
  const navigate = useNavigate()
 const token = localStorage.getItem("token")
 if (!token) {
  localStorage.removeItem("token")
  navigate("/login")
 }
  // const progressGroupExample1 = [
  //   { title: 'Monday', value1: 34, value2: 78 },
  //   { title: 'Tuesday', value1: 56, value2: 94 },
  //   { title: 'Wednesday', value1: 12, value2: 67 },
  //   { title: 'Thursday', value1: 43, value2: 91 },
  //   { title: 'Friday', value1: 22, value2: 73 },
  //   { title: 'Saturday', value1: 53, value2: 82 },
  //   { title: 'Sunday', value1: 9, value2: 69 },
  // ]

  // const progressGroupExample2 = [
  //   { title: 'Male', icon: Users, value: 53 },
  //   { title: 'Female', icon: Users, value: 43 },
  // ]

  // const progressGroupExample3 = [
  //   { title: 'Organic Search', icon: Globe, percent: 56, value: '191,235' },
  //   { title: 'Facebook', icon: Globe, percent: 15, value: '51,223' },
  //   { title: 'Twitter', icon: Globe, percent: 11, value: '37,564' },
  //   { title: 'LinkedIn', icon: Globe, percent: 8, value: '27,319' },
  // ]

  const tableExample = [
    {
      avatar: { src: "", status: 'green' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'USA', flag: '/path/to/usa-flag.svg' },
      usage: {
        value: 50,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'green',
      },
      payment: { name: 'Mastercard', icon: 'credit-card' },
      activity: '10 sec ago',
    },
  ]

  return (
    <ContentLayout title="Dashboard">
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Dashboard</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
    here will be the latest notifications about the ones who subscribed to the newsletter, the latest ones who filled the form and asked for consultation, a button that takes to all content creation buttons
    <Card className="mb-4">
          <CardContent>
          <div className='col' xs={6}>
                <div className="border-l-4 border-blue-500 p-3">
                  <p className="text-gray-500">New Clients</p>
                  <p className="text-xl font-semibold">9,123</p>
                </div>
              </div>
           

           
          </CardContent>
        </Card>
  </ContentLayout>
  )
}

export default Dashboard




