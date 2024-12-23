import React from 'react';
import AlumniCard from './AlumniCard';

const alumni = [
  {
    name: "Priya Sharma",
    graduationYear: "2018",
    achievement: "Currently pursuing MBBS at TU Teaching Hospital",
    quote: "Ashokam International laid the foundation for my medical career",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    name: "Rajesh Kumar",
    graduationYear: "2019",
    achievement: "Software Engineer at Microsoft",
    quote: "The school's focus on technology helped shape my future",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
  },
  {
    name: "Anita Patel",
    graduationYear: "2020",
    achievement: "National Level Athlete",
    quote: "The sports program here nurtured my athletic abilities",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  }
];

export default function AlumniSection() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Alumni Success</h2>
          <p className="mt-4 text-lg text-gray-600">Meet our distinguished graduates</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {alumni.map((person, index) => (
            <AlumniCard key={index} {...person} />
          ))}
        </div>
      </div>
    </div>
  );
}