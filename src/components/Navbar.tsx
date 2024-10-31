import React, { useState } from 'react';
import { Code2, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-emerald-600" />
            <span className="ml-2 text-xl font-bold text-neutral-900">DevCraft</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-neutral-600 hover:text-emerald-600 transition-colors">Services</a>
            <a href="#projects" className="text-neutral-600 hover:text-emerald-600 transition-colors">Projects</a>
            <a href="#about" className="text-neutral-600 hover:text-emerald-600 transition-colors">About</a>
            <a href="#contact" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
              Contact Us
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <a href="#services" className="block px-3 py-2 text-neutral-600 hover:text-emerald-600">Services</a>
            <a href="#projects" className="block px-3 py-2 text-neutral-600 hover:text-emerald-600">Projects</a>
            <a href="#about" className="block px-3 py-2 text-neutral-600 hover:text-emerald-600">About</a>
            <a href="#contact" className="block px-3 py-2 text-emerald-600 font-medium">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;