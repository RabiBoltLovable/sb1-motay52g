import React from 'react';
import { Award } from 'lucide-react';

interface ResultCardProps {
  subject: string;
  marks: number;
  grade: string;
  term: string;
}

export default function ResultCard({ subject, marks, grade, term }: ResultCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium">{subject}</h4>
          <p className="text-sm text-gray-600">{term}</p>
        </div>
        <div className="text-right">
          <div className="flex items-center">
            <span className="text-lg font-semibold">{marks}%</span>
            <Award className="h-5 w-5 text-yellow-500 ml-2" />
          </div>
          <p className="text-sm font-medium text-blue-600">Grade: {grade}</p>
        </div>
      </div>
    </div>
  );
}