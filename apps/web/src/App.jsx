import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import FloatingPhone from './components/FloatingPhone';
import ExitIntentPopup from './components/ExitIntentPopup';
import LiveChatWidget from './components/LiveChatWidget';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <FloatingWhatsApp />
      <FloatingPhone />
      <ExitIntentPopup />
      <LiveChatWidget />
      <Toaster />
    </Router>
  );
}

export default App;
