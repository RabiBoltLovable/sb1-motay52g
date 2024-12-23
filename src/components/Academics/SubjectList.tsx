import React from 'react';
import { Book, Globe, Calculator,FlaskConical, Music, Footprints } from 'lucide-react';

const subjects = [
  { icon: Book, name: 'Nepali', description: 'Native language and literature' },
  { icon: Globe, name: 'English', description: 'International communication' },
  { icon: Calculator, name: 'Mathematics', description: 'Advanced problem solving' },
  { icon: FlaskConical, name: 'Science', description: 'Practical and theoretical knowledge' },
  { icon: Music, name: 'Cultural Studies', description: 'Nepali traditions and values' },
  { icon: Footprints, name: 'Physical Education', description: 'Sports and wellness' }
];

export default function SubjectList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {subjects.map((subject, index) => {
        const Icon = subject.icon;
        return (
          <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm">
            <Icon className="h-6 w-6 text-blue-600 mt-1" />
            <div className="ml-4">
              <h3 className="font-semibold">{subject.name}</h3>
              <p className="text-sm text-gray-600">{subject.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}