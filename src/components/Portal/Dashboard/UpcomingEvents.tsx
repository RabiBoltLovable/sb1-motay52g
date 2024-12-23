import React from 'react';
import { Calendar } from 'lucide-react';

const events = [
  {
    title: 'Physics Test',
    date: '2024-03-25',
    time: '10:00 AM'
  },
  {
    title: 'Mathematics Assignment Due',
    date: '2024-03-27',
    time: '3:00 PM'
  },
  {
    title: 'Science Project Presentation',
    date: '2024-03-30',
    time: '11:30 AM'
  }
];

export default function UpcomingEvents() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex items-start">
            <Calendar className="h-5 w-5 text-blue-600 mt-1" />
            <div className="ml-3">
              <p className="font-medium">{event.title}</p>
              <p className="text-sm text-gray-600">
                {new Date(event.date).toLocaleDateString()} at {event.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}