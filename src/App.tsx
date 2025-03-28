import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Instagram, Phone, Linkedin, Mail } from 'lucide-react';  // Ícones do Instagram, WhatsApp (Phone), LinkedIn e Email
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import Navbar from './components/Navbar';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <Router>
      <div className="min-h-screen bg-white text-black font-light">
        {/* Visible Navbar */}
        <Navbar scrolled={scrolled} />

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-6 md:mb-0">
                <p className="text-sm text-gray-500">© 2025 — Todos os Direitos Reservados para Flaeron</p>
              </div>
              <div className="flex space-x-4">
                {/* WhatsApp Icon */}
                <a target='blank' href="https://api.whatsapp.com/send/?phone=5577991488220&text=Ol%C3%A1%2C+tudo+bem%3F&type=phone_number&app_absent=0" className="text-gray-500 hover:text-black transition-colors" aria-label="WhatsApp">
                  <Phone size={20} />
                </a>
                {/* Instagram Icon */}
                <a target='blank' href="https://www.instagram.com/flaeron/" className="text-gray-500 hover:text-black transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
