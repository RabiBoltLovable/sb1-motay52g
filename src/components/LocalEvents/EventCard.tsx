import React from 'react';
import { Calendar } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  description: string;
}

export default function EventCard({ title, date, description }: EventCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <Calendar className="h-6 w-6 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-blue-600 mb-2">{date}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}