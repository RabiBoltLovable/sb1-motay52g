import React from 'react';
import { Calendar } from 'lucide-react';

interface NewsCardProps {
  title: string;
  date: string;
  summary: string;
  imageUrl: string;
}

export default function NewsCard({ title, date, summary, imageUrl }: NewsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center text-sm text-blue-600 mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          {date}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{summary}</p>
      </div>
    </div>
  );
}