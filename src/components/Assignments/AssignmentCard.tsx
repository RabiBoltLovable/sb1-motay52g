import React from 'react';
import { Calendar, Clock, FileText } from 'lucide-react';

interface AssignmentCardProps {
  title: string;
  subject: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
  grade?: string;
}

export default function AssignmentCard({ title, subject, dueDate, status, grade }: AssignmentCardProps) {
  const statusColors = {
    pending: 'text-amber-600',
    submitted: 'text-blue-600',
    graded: 'text-green-600'
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{subject}</p>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-1" />
            <span>Due: {dueDate}</span>
          </div>
        </div>
        <div className={`${statusColors[status]} text-sm font-medium`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
          {grade && <span className="block text-center mt-1">{grade}</span>}
        </div>
      </div>
    </div>
  );
}