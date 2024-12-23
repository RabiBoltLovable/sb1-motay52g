import React from 'react';
import { Book, Clock, CheckCircle } from 'lucide-react';

interface BookCardProps {
  title: string;
  author: string;
  available: boolean;
  dueDate?: string;
  category: string;
  coverUrl: string;
}

export default function BookCard({ title, author, available, dueDate, category, coverUrl }: BookCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={coverUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-gray-600">{author}</p>
            <p className="text-xs text-blue-600 mt-1">{category}</p>
          </div>
          <div className={`flex items-center ${available ? 'text-green-600' : 'text-amber-600'}`}>
            {available ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <Clock className="h-5 w-5" />
            )}
          </div>
        </div>
        {!available && dueDate && (
          <p className="text-sm text-gray-500 mt-2">Due: {dueDate}</p>
        )}
      </div>
    </div>
  );
}