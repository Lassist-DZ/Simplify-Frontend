import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './adminBoard/pages/dashboard';
import Login from './adminBoard/pages/login';
import Page404 from './adminBoard/pages/page404';
import Menu from './adminBoard/components/sidebar';
import Consultaitons from './adminBoard/pages/consultations';
import PricingModel from './adminBoard/pages/pricing';
import NewPricing from './adminBoard/pages/newPricing';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import NewConsultation from './adminBoard/pages/newConsultation';
import NewsletterSubs from './adminBoard/pages/newsletter_subs';
import NewSubscriber from './adminBoard/pages/newSubscriber';

const isLoggedIn = () => {
  return !!localStorage.getItem('token'); // Check for token in localStorage
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

          <Route
            path="/admin/*"
            element={
              <AdminRoute>
                <div className="flex min-h-screen bg-[#09090B]">
                  <Menu />
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/consultations" element={<Consultaitons />} />
                    <Route path="/pricings" element={<PricingModel />} />
                    <Route path="/pricings/new" element={<NewPricing />} />
                    <Route path="/consultations/new" element={<NewConsultation />} />
                    <Route path="/newsletter_subs" element={<NewsletterSubs />} />
                    <Route path="/newsletter_subs/new" element={<NewSubscriber />} />
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
