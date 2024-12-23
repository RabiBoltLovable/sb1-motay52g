import React from 'react';
import FacultyCard from './FacultyCard';

const faculty = [
  {
    name: "Dr. Ram Prasad Sharma",
    position: "Principal",
    qualification: "Ph.D. in Education",
    experience: "20+ years",
    email: "principal@ashokam.edu.np",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
  },
  {
    name: "Ms. Sita Adhikari",
    position: "Head of Sciences",
    qualification: "M.Sc. Physics",
    experience: "15+ years",
    email: "science@ashokam.edu.np",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    name: "Mr. Bikash Thapa",
    position: "Mathematics Lead",
    qualification: "M.Sc. Mathematics",
    experience: "12+ years",
    email: "math@ashokam.edu.np",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  }
];

export default function FacultySection() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Faculty</h2>
          <p className="mt-4 text-lg text-gray-600">Meet our experienced educators</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {faculty.map((member, index) => (
            <FacultyCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}