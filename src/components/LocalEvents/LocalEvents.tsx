import React from 'react';
import EventCard from './EventCard';

const events = [
  {
    title: "Dashain Cultural Program",
    date: "October 15, 2024",
    description: "Annual cultural celebration featuring traditional Nepali performances"
  },
  {
    title: "Science & Technology Fair",
    date: "November 5, 2024",
    description: "Student projects showcasing innovation and scientific thinking"
  },
  {
    title: "Parents' Day",
    date: "December 1, 2024",
    description: "Annual gathering to celebrate student achievements with parents"
  }
];

export default function LocalEvents() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
          <p className="mt-4 text-lg text-gray-600">Join us for these special occasions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
}