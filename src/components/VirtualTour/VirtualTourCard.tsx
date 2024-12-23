import React from 'react';
import { Video, ExternalLink } from 'lucide-react';

interface VirtualTourCardProps {
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
}

export default function VirtualTourCard({ title, description, videoUrl, thumbnail }: VirtualTourCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative group">
        <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-white">
            <Video className="h-8 w-8 mr-2" />
            <span>Watch Tour</span>
          </a>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 mt-3 hover:text-blue-700">
          <span className="mr-1">Take Virtual Tour</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}