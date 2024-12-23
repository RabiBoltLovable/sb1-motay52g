import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  image: string;
}

export default function TestimonialCard({ content, author, role, image }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Quote className="h-8 w-8 text-blue-600 mb-4" />
      <p className="text-gray-600 mb-4">{content}</p>
      <div className="flex items-center">
        <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover" />
        <div className="ml-4">
          <p className="font-semibold text-gray-800">{author}</p>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}