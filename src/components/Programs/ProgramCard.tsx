import React from 'react';
import { BookOpen } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  description: string;
  grades: string;
  curriculum: string;
}

export default function ProgramCard({ title, description, grades, curriculum }: ProgramCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="border-t pt-4">
        <p className="text-sm text-gray-600"><strong>Grades:</strong> {grades}</p>
        <p className="text-sm text-gray-600"><strong>Curriculum:</strong> {curriculum}</p>
      </div>
    </div>
  );
}