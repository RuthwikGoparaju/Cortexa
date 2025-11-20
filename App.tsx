import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SolutionSection from './components/SolutionSection';
import LiveDemo from './components/LiveDemo';
import SecuritySection from './components/SecuritySection';
import InternshipSection from './components/InternshipSection';
import CtoSection from './components/CtoSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';

export default function App() {
  const [adminOpen, setAdminOpen] = useState(false);
  const [formContext, setFormContext] = useState({ subject: 'Pilot Access', title: 'Request Pilot Access' });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const updateFormContext = (subject: string, title: string) => {
    setFormContext({ subject, title });
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 antialiased selection:bg-black selection:text-white">
      <Navbar onScrollTo={scrollToSection} onContactClick={() => updateFormContext('Pilot Access', 'Request Pilot Access')} />
      
      <main className="flex-grow">
        <Hero onContactClick={() => updateFormContext('Pilot Access', 'Request Pilot Access')} onDemoClick={() => scrollToSection('demo')} />
        <SolutionSection />
        <LiveDemo />
        <SecuritySection />
        <InternshipSection onApplyClick={() => updateFormContext('Internship Application', 'Internship Application')} />
        <CtoSection onApplyClick={() => updateFormContext('CTO Application', 'CTO Application')} />
        <ContactForm context={formContext} />
      </main>

      <Footer 
        onScrollTo={scrollToSection} 
        onContactClick={() => updateFormContext('Pilot Access', 'Request Pilot Access')} 
        onOpenAdmin={() => setAdminOpen(true)}
      />

      {adminOpen && <AdminDashboard onClose={() => setAdminOpen(false)} />}
    </div>
  );
}