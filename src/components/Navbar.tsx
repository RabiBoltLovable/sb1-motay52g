import React from 'react';
import { GraduationCap, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Ashokam International</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#academics" className="text-gray-600 hover:text-blue-600">Academics</a>
            <a href="#facilities" className="text-gray-600 hover:text-blue-600">Facilities</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Apply Now
            </button>
          </div>
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
}