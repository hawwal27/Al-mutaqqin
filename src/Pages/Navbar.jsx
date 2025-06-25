import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const linkClass = "cursor-pointer text-gray-700 hover:text-green-600 transition";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <img src={logo} alt="School Logo" className="h-10 mr-3 rounded-full" />
            <span className="text-2xl font-bold text-green-600">Darul-muttaqqin</span>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            <Link to="hero" smooth={true} duration={500} className={linkClass}>Home</Link>
            <Link to="about" smooth={true} duration={500} className={linkClass}>AboutUs</Link>
            <Link to="contact" smooth={true} duration={500} className={linkClass}>Contact</Link>
            <Link to="testimonial" smooth={true} duration={500} className={linkClass}>Testimonials</Link>

            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-green-600 transition">
                Academics <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdownOpen && (
                <div className="absolute mt-2 bg-white shadow-lg rounded-md p-2 w-48 z-10">
                  <Link to="curriculum" smooth={true} duration={500} className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Curriculum</Link>
                  <Link to="staff" smooth={true} duration={500} className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Our Staff</Link>
                  <Link to="calendar" smooth={true} duration={500} className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Academic Calendar</Link>
                  <Link to="Admission" smooth={true} duration={500} className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Admissions</Link>
                </div>
              )}
            </div>

            <Link to="faq" smooth={true} duration={500} className={linkClass}>Faq</Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          <Link to="hero" smooth={true} duration={500} onClick={() => setMobileOpen(false)} className="block py-2 text-gray-700 hover:text-green-600 cursor-pointer">Home</Link>
          <Link to="about" smooth={true} duration={500} onClick={() => setMobileOpen(false)} className="block py-2 text-gray-700 hover:text-green-600 cursor-pointer">AboutUs</Link>
          <Link to="curriculum" smooth={true} duration={500} onClick={() => setMobileOpen(false)} className="block py-2 text-gray-700 hover:text-green-600 cursor-pointer">Curriculum</Link>
          <Link to="staff" smooth={true} duration={500} onClick={() => setMobileOpen(false)} className="block py-2 text-gray-700 hover:text-green-600 cursor-pointer">Our Staff</Link>
          <Link to="calendar" smooth={true} duration={500} onClick={() => setMobileOpen(false)} className="block py-2 text-gray-700 hover:text-green-600 cursor-pointer">Academic Calendar</Link>
          <Link to="Admission" smooth={true} duration={500} onClick={() => setMobileOpen(false)} className="block py-2 text-gray-700 hover:text-green-600 cursor-pointer">Admissions</Link>
          <Link to="contact" smooth={true} duration={500} onClick={() => setMobileOpen(false)} className="block py-2 text-gray-700 hover:text-green-600 cursor-pointer">Contact</Link>
          <Link to="faq" smooth={true} duration={500} onClick={() => setMobileOpen(false)} className="block py-2 text-gray-700 hover:text-green-600 cursor-pointer">Faq</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
