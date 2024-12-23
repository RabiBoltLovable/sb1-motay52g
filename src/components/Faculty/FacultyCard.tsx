import React from 'react';
import { GraduationCap, Mail } from 'lucide-react';

interface FacultyCardProps {
  name: string;
  position: string;
  qualification: string;
  experience: string;
  email: string;
  image: string;
}

export default function FacultyCard({ name, position, qualification, experience, email, image }: FacultyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col items-center mb-4">
        <img src={image} alt={name} className="w-24 h-24 rounded-full object-cover mb-4" />
        <h3 className="text-xl font-semibold text-center">{name}</h3>
        <p className="text-blue-600 font-medium text-sm">{position}</p>
      </div>
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center">
          <GraduationCap className="h-4 w-4 mr-2" />
          <span>{qualification}</span>
        </div>
        <p>Experience: {experience}</p>
        <a href={`mailto:${email}`} className="flex items-center text-blue-600 hover:text-blue-700">
          <Mail className="h-4 w-4 mr-2" />
          <span>{email}</span>
        </a>
      </div>
    </div>
  );
}