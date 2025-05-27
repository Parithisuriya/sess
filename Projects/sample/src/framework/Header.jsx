import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white flex items-center justify-between px-6 py-2 z-50 shadow-md h-16">
      
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/Alphonsalogo.png"
          alt="Alphonsa Logo"
          className="h-40 w-auto scale-125"
        />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 text-black font-bold text-xl">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-black">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white flex flex-col items-center py-4 shadow-md md:hidden">
          <Link to="/" className="py-2 text-black font-semibold text-lg" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/aboutus" className="py-2 text-black font-semibold text-lg" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" className="py-2 text-black font-semibold text-lg" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
