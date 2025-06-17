// components/Footer.jsx
import React from 'react';
import { Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* School Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Darul-muttaqqin</h3>
          <p className="text-sm text-gray-300">
            A center of excellence nurturing the next generation of confident, knowledgeable, and God-conscious leaders.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#admissions" className="hover:text-white transition">Admissions</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> 123 Knowledge Way, Cityville
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> + (234) 567-8901
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> info@allmutaqqin.edu
            </li>
          </ul>


          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} All-Mutaqqin School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
