import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '@/app/components/Header';
import HeroSection from '@/app/components/HeroSection';
import ServicesSection from '@/app/components/ServicesSection';
import SolutionsSection from '@/app/components/SolutionsSection';
import IndustriesSection from '@/app/components/IndustriesSection';
import ProcessSection from '@/app/components/ProcessSection';
import CaseStudiesSection from '@/app/components/CaseStudiesSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import AboutSection from '@/app/components/AboutSection';
import Footer from '@/app/components/Footer';
import AdminLogin from '@/app/pages/AdminLogin';
import AdminDashboard from '@/app/pages/AdminDashboard';

function HomePage() {
  return (
    <div className="size-full min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <SolutionsSection />
      <IndustriesSection />
      <ProcessSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/get-in" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
