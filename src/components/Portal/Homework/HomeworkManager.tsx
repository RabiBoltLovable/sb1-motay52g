import React from 'react';
import { Book, Clock, CheckCircle } from 'lucide-react';

interface HomeworkItem {
  subject: string;
  title: string;
  dueDate: string;
  status: 'pending' | 'completed';
  description: string;
}

const homework: HomeworkItem[] = [
  {
    subject: 'Mathematics',
    title: 'Algebra Practice Set',
    dueDate: '2024-03-25',
    status: 'pending',
    description: 'Complete exercises 1-10 from Chapter 3'
  },
  {
    subject: 'Physics',
    title: 'Lab Report',
    dueDate: '2024-03-26',
    status: 'completed',
    description: 'Write up findings from today\'s experiment'
  }
];

export default function HomeworkManager() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Homework Tracker</h3>
      <div className="space-y-4">
        {homework.map((item, index) => (
          <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.subject}</p>
                <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-gray-400 mr-1" />
                <span className="text-sm text-gray-600">Due: {item.dueDate}</span>
              </div>
            </div>
            <div className="mt-2">
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                item.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {item.status === 'completed' ? (
                  <CheckCircle className="h-3 w-3 mr-1" />
                ) : (
                  <Clock className="h-3 w-3 mr-1" />
                )}
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}