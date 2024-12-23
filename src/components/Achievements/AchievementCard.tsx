import React from 'react';
import { Trophy, Calendar } from 'lucide-react';

interface AchievementCardProps {
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
}

export default function AchievementCard({ title, date, category, description, image }: AchievementCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center mb-2">
          <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
          <span className="text-sm font-medium text-yellow-500">{category}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-gray-500 text-sm">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}