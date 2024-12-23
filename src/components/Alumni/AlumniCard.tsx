import React from 'react';
import { Award } from 'lucide-react';

interface AlumniCardProps {
  name: string;
  graduationYear: string;
  achievement: string;
  quote: string;
  image: string;
}

export default function AlumniCard({ name, graduationYear, achievement, quote, image }: AlumniCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover" />
        <div className="ml-4">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-gray-600 text-sm">Class of {graduationYear}</p>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center text-blue-600 mb-2">
          <Award className="h-5 w-5 mr-2" />
          <span className="font-medium">{achievement}</span>
        </div>
        <p className="text-gray-600 italic">"{quote}"</p>
      </div>
    </div>
  );
}