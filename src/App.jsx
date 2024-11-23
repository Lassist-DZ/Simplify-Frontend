import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Page404 from './pages/page404';
import Consultations from './pages/adminBoard/consultations/consultations';
import NewConsultation from './pages/adminBoard/consultations/newConsultation';
import UpdateConsultation from './pages/adminBoard/consultations/updateConsultation';

import PricingModel from './pages/adminBoard/pricing/pricing';
import NewPricing from './pages/adminBoard/pricing/newPricing';
import UpdatePricing from './pages/adminBoard/pricing/updatePricing';

import NewsletterSubs from './pages/adminBoard/newsletter/newsletter_subs';
import NewSubscriber from './pages/adminBoard/newsletter/newSubscriber';
import UpdateNewsletter from './pages/adminBoard/newsletter/updateNewsletter';

import Testimonials from './pages/adminBoard/testimonials/testimonials';
import NewTestimonial from './pages/adminBoard/testimonials/newTestimonial';
import UpdateTestimonial from './pages/adminBoard/testimonials/updateTestimonial';

import FAQs from './pages/adminBoard/faqs/faqs';
import NewFAQ from './pages/adminBoard/faqs/newFAQ';
import UpdateFAQ from './pages/adminBoard/faqs/updateFAQ';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './pages/home';
import Login from './pages/adminBoard/login';
import Contacts from './pages/contacts';
import About from './pages/about';
import Jobs from './pages/jobs';
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
          <Route path='/jobs' element={<Jobs/>}/>
          <Route
            path="/admin/*"
            element={
              <AdminRoute>
                <div className="flex min-h-screen">
                 
                  <Routes>
                    <Route path="/" element={<Consultations />} />
                    <Route path="/consultations" element={<Consultations />} />
                    <Route
                      path="/consultations/new"
                      element={<NewConsultation />}
                    />
                    <Route
                      path="/consultations/update"
                      element={<UpdateConsultation />}
                    />

                    <Route path="/pricings" element={<PricingModel />} />
                    <Route path="/pricings/new" element={<NewPricing />} />
                    <Route path="/pricings/update" element={<UpdatePricing />} />
                   
                    <Route
                      path="/newsletter_subs"
                      element={<NewsletterSubs />}
                    />
                    <Route
                      path="/newsletter_subs/new"
                      element={<NewSubscriber />}
                    />
                    <Route
                      path="/newsletter_subs/update"
                      element={<UpdateNewsletter />}
                    />
                    



                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/testimonials/new" element={<NewTestimonial />} />
                    <Route path="/testimonials/update" element={<UpdateTestimonial />} />

                    <Route path="/faqs" element={<FAQs />} />
                    <Route path="/faqs/new" element={<NewFAQ />} />
                    <Route path="/faqs/update" element={<UpdateFAQ />} />
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
