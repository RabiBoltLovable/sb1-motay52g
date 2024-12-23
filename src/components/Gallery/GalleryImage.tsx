import React from 'react';

interface GalleryImageProps {
  url: string;
  title: string;
  description: string;
}

export default function GalleryImage({ url, title, description }: GalleryImageProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
      <img
        src={url}
        alt={title}
        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="text-gray-200 text-sm">{description}</p>
      </div>
    </div>
  );
}