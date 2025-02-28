import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen); // Alterna o estado do menu
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false); // Fecha o menu ao clicar em um link
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Rolar para o topo sempre que a rota mudar
  useEffect(() => {
    window.scrollTo(0, 0); // Rola até o topo da página
  }, [location]); // Só vai rodar quando a localização mudar

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-medium flex items-center">
            <img src={logo} alt="Flaeron Logo" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  to="/" 
                  className={`relative pb-1 transition-all ${isActive('/') ? 'text-black' : 'text-gray-500 hover:text-black'}`}
                >
                  <span>Início</span>
                  {isActive('/') && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></span>
                  )}
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`relative pb-1 transition-all ${isActive('/about') ? 'text-black' : 'text-gray-500 hover:text-black'}`}
                >
                  <span>Sobre</span>
                  {isActive('/about') && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></span>
                  )}
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className={`relative pb-1 transition-all ${isActive('/services') ? 'text-black' : 'text-gray-500 hover:text-black'}`}
                >
                  <span>Serviços</span>
                  {isActive('/services') && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></span>
                  )}
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  className={`relative pb-1 transition-all ${isActive('/projects') ? 'text-black' : 'text-gray-500 hover:text-black'}`}
                >
                  <span>Projetos</span>
                  {isActive('/projects') && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></span>
                  )}
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`relative pb-1 transition-all ${isActive('/contact') ? 'text-black' : 'text-gray-500 hover:text-black'}`}
                >
                  <span>Contato</span>
                  {isActive('/contact') && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></span>
                  )}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden p-2 focus:outline-none z-50"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-6 py-24 h-full flex flex-col">
          <nav>
            <ul className="space-y-8">
              <li>
                <Link 
                  to="/" 
                  className={`text-3xl font-light block ${isActive('/') ? 'text-black' : 'text-gray-500'}`}
                  onClick={closeMobileMenu}
                >
                  Início
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`text-3xl font-light block ${isActive('/about') ? 'text-black' : 'text-gray-500'}`}
                  onClick={closeMobileMenu}
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className={`text-3xl font-light block ${isActive('/services') ? 'text-black' : 'text-gray-500'}`}
                  onClick={closeMobileMenu}
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  className={`text-3xl font-light block ${isActive('/projects') ? 'text-black' : 'text-gray-500'}`}
                  onClick={closeMobileMenu}
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`text-3xl font-light block ${isActive('/contact') ? 'text-black' : 'text-gray-500'}`}
                  onClick={closeMobileMenu}
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
