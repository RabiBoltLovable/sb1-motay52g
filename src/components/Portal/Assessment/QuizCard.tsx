import React from 'react';
import { Timer, Award } from 'lucide-react';

interface QuizCardProps {
  subject: string;
  title: string;
  duration: string;
  totalQuestions: number;
  dueDate: string;
  status: 'upcoming' | 'completed';
  score?: number;
}

export default function QuizCard({
  subject,
  title,
  duration,
  totalQuestions,
  dueDate,
  status,
  score
}: QuizCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-blue-600">{subject}</p>
          <h4 className="font-medium mt-1">{title}</h4>
          <div className="flex items-center mt-2 space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Timer className="h-4 w-4 mr-1" />
              {duration}
            </div>
            <div>{totalQuestions} questions</div>
          </div>
        </div>
        {status === 'completed' && score !== undefined && (
          <div className="flex items-center bg-green-100 px-3 py-1 rounded-full">
            <Award className="h-4 w-4 text-green-600 mr-1" />
            <span className="text-green-600 font-medium">{score}%</span>
          </div>
        )}
      </div>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm text-gray-500">Due: {dueDate}</span>
        <button
          className={`px-4 py-1 rounded-md text-sm font-medium ${
            status === 'upcoming'
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-100 text-gray-600'
          }`}
          disabled={status === 'completed'}
        >
          {status === 'upcoming' ? 'Start Quiz' : 'Completed'}
        </button>
      </div>
    </div>
  );
}