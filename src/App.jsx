import Dashboard from './adminBoard/pages/dashboard'
import FormControl from './adminBoard/components/FormControl'
import Login from './adminBoard/pages/login'
import Page404 from './adminBoard/pages/page404'
import Menu from './adminBoard/components/sidebar'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Consultaitons from './adminBoard/pages/consultations'
import PricingModel from './adminBoard/pages/pricing'
import NewPricing from './adminBoard/pages/newPricing'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
  
  <div>
      <Router>
     <div className="flex bg-[#09090B] min-h-screen">
       <Menu />
         <Routes>
           <Route path="/" element={<Dashboard />} />
           <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/consultations" element={<Consultaitons />} />
           <Route path="/pricings" element={<PricingModel />} />
           <Route path="/pricings/new" element={<NewPricing />} />
         </Routes>
     </div>
   </Router>
  <ToastContainer />
</div>
  )
}

export default App
