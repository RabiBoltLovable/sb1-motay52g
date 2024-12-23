import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">Get in touch with us for any inquiries</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+977 123 456 789</p>
          </div>
          <div className="text-center p-6">
            <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">info@ashokam.edu.np</p>
          </div>
          <div className="text-center p-6">
            <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-gray-600">Gaur, Rautahat District, Nepal</p>
          </div>
        </div>
      </div>
    </div>
  );
}