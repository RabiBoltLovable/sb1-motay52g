import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FacilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  imageUrl: string;
}

export default function FacilityCard({ icon: Icon, title, description, imageUrl }: FacilityCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative h-48">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-blue-600 p-2 rounded-full">
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}