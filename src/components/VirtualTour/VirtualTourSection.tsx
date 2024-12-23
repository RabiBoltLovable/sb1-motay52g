import React from 'react';
import VirtualTourCard from './VirtualTourCard';

const tourLocations = [
  {
    title: "Main Campus Building",
    description: "Explore our modern academic facilities and classrooms",
    videoUrl: "#",
    thumbnail: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
  },
  {
    title: "Sports Complex",
    description: "View our indoor and outdoor sports facilities",
    videoUrl: "#",
    thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80"
  },
  {
    title: "Science Labs",
    description: "Take a tour of our state-of-the-art laboratories",
    videoUrl: "#",
    thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80"
  }
];

export default function VirtualTourSection() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Virtual Campus Tour</h2>
          <p className="mt-4 text-lg text-gray-600">Experience our facilities from anywhere</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tourLocations.map((location, index) => (
            <VirtualTourCard key={index} {...location} />
          ))}
        </div>
      </div>
    </div>
  );
}