import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

const terms = [
  {
    name: 'First Term',
    startDate: 'April 14, 2024',
    endDate: 'July 15, 2024',
    events: ['Nepali New Year Celebration', 'First Term Exams']
  },
  {
    name: 'Second Term',
    startDate: 'July 16, 2024',
    endDate: 'October 15, 2024',
    events: ['Dashain Break', 'Sports Week']
  },
  {
    name: 'Third Term',
    startDate: 'October 16, 2024',
    endDate: 'March 30, 2025',
    events: ['Annual Function', 'Final Exams']
  }
];

export default function AcademicCalendar() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <CalendarIcon className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-2xl font-bold">Academic Calendar 2024-25</h2>
      </div>
      <div className="space-y-6">
        {terms.map((term, index) => (
          <div key={index} className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-semibold text-lg">{term.name}</h3>
            <p className="text-sm text-gray-600 mb-2">
              {term.startDate} - {term.endDate}
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {term.events.map((event, idx) => (
                <li key={idx}>{event}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}