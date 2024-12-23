import React from 'react';
import { Calendar as CalendarIcon, Check, X } from 'lucide-react';

interface AttendanceDay {
  date: string;
  present: boolean;
}

const attendance: AttendanceDay[] = [
  { date: '2024-03-01', present: true },
  { date: '2024-03-02', present: true },
  { date: '2024-03-03', present: false },
  // Add more dates...
];

export default function AttendanceCalendar() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <CalendarIcon className="h-5 w-5 mr-2 text-blue-600" />
        Attendance Record
      </h3>
      <div className="grid grid-cols-7 gap-2">
        {attendance.map((day, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg text-center ${
              day.present ? 'bg-green-100' : 'bg-red-100'
            }`}
          >
            <div className="text-xs text-gray-600">
              {new Date(day.date).getDate()}
            </div>
            {day.present ? (
              <Check className="h-4 w-4 mx-auto text-green-600" />
            ) : (
              <X className="h-4 w-4 mx-auto text-red-600" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}