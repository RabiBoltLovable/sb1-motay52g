import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white md:hidden">
      <div className="p-4 flex justify-end">
        <button onClick={onClose}>
          <X className="h-6 w-6 text-gray-600" />
        </button>
      </div>
      <div className="flex flex-col items-center space-y-6 p-8">
        <a href="#home" className="text-gray-800 text-lg" onClick={onClose}>Home</a>
        <a href="#about" className="text-gray-800 text-lg" onClick={onClose}>About</a>
        <a href="#academics" className="text-gray-800 text-lg" onClick={onClose}>Academics</a>
        <a href="#facilities" className="text-gray-800 text-lg" onClick={onClose}>Facilities</a>
        <a href="#contact" className="text-gray-800 text-lg" onClick={onClose}>Contact</a>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
          Apply Now
        </button>
      </div>
    </div>
  );
}