import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/adminBoard/dashboard';
import Page404 from './pages/page404';
import Consultations from './pages/adminBoard/consultations/consultations';
import NewConsultation from './pages/adminBoard/consultations/newConsultation';
import PricingModel from './pages/adminBoard/pricing';
import NewPricing from './pages/adminBoard/newPricing';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import NewsletterSubs from './pages/adminBoard/newsletter_subs';
import NewSubscriber from './pages/adminBoard/newSubscriber';
import Home from './pages/home';
import Login from './pages/adminBoard/login';
import Testimonials from './pages/adminBoard/testimonials';
import Contacts from './pages/contacts';
import About from './pages/about';
const isLoggedIn = () => {
  return !!localStorage.getItem("token"); 
};

const AdminRoute = ({ children }) => {
  return isLoggedIn() ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <div>
      <Router>
        <Routes>  
          <Route path="/login" element={<Login />} />
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/contact_us' element={<Contacts/>}/>
          <Route path='/about' element={<About/>}/>
          <Route
            path="/admin/*"
            element={
              <AdminRoute>
                <div className="flex min-h-screen">
                 
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/consultations" element={<Consultations />} />
                    <Route path="/pricings" element={<PricingModel />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/pricings/new" element={<NewPricing />} />
                    <Route
                      path="/consultations/new"
                      element={<NewConsultation />}
                    />
                    <Route
                      path="/newsletter_subs"
                      element={<NewsletterSubs />}
                    />
                    <Route
                      path="/newsletter_subs/new"
                      element={<NewSubscriber />}
                    />
                  </Routes>
                </div>
              </AdminRoute>
            }
          />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>

      <ToastContainer />
    </div>
  );
}

export default App;
