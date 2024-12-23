import React from 'react';
import { MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=80"
          alt="School campus with Himalayan backdrop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Excellence in Education</h1>
          <p className="text-xl mb-2">Nurturing minds, Building futures at Ashokam International School</p>
          <div className="flex items-center text-lg mb-8">
            <MapPin className="h-5 w-5 mr-2" />
            <span>Gaur, Nepal</span>
          </div>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-gray-900">
              Virtual Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}