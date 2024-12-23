import React from 'react';
import { Image as ImageIcon } from 'lucide-react';
import GalleryImage from './GalleryImage';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?auto=format&fit=crop&q=80',
    title: 'School Building',
    description: 'Main campus building'
  },
  {
    url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80',
    title: 'Science Lab',
    description: 'Modern laboratory facilities'
  },
  {
    url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80',
    title: 'Sports Ground',
    description: 'Outdoor sports facilities'
  }
];

export default function PhotoGallery() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ImageIcon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900">Campus Gallery</h2>
          <p className="mt-4 text-lg text-gray-600">Take a visual tour of our facilities</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <GalleryImage key={index} {...image} />
          ))}
        </div>
      </div>
    </div>
  );
}