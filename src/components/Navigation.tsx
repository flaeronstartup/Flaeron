import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NavigationProps {
  showNav: boolean;
  toggleNav: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ showNav, toggleNav }) => {
  return (
    <div 
      className={`fixed inset-0 bg-black text-white z-40 transition-all duration-500 ease-in-out ${
        showNav ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="container mx-auto px-6 py-24 h-full flex flex-col justify-center">
        <nav className="mb-16">
          <ul className="space-y-8">
            <li>
              <a 
                href="#" 
                className="text-4xl md:text-6xl font-light hover:pl-4 transition-all duration-300 flex items-center group"
                onClick={(e) => {
                  e.preventDefault();
                  toggleNav();
                }}
              >
                Home
                <ArrowRight className="ml-4 opacity-0 group-hover:opacity-100 transition-all" size={24} />
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-4xl md:text-6xl font-light hover:pl-4 transition-all duration-300 flex items-center group"
              >
                About
                <ArrowRight className="ml-4 opacity-0 group-hover:opacity-100 transition-all" size={24} />
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-4xl md:text-6xl font-light hover:pl-4 transition-all duration-300 flex items-center group"
              >
                Services
                <ArrowRight className="ml-4 opacity-0 group-hover:opacity-100 transition-all" size={24} />
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-4xl md:text-6xl font-light hover:pl-4 transition-all duration-300 flex items-center group"
              >
                Projects
                <ArrowRight className="ml-4 opacity-0 group-hover:opacity-100 transition-all" size={24} />
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-4xl md:text-6xl font-light hover:pl-4 transition-all duration-300 flex items-center group"
              >
                Contact
                <ArrowRight className="ml-4 opacity-0 group-hover:opacity-100 transition-all" size={24} />
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <p className="text-gray-500 mb-4">Get in touch</p>
          <a href="mailto:contact@flaeron.com" className="text-xl hover:underline">contact@flaeron.com</a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;