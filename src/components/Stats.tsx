import React from 'react';

const stats = [
  { number: '1000+', label: 'Students' },
  { number: '100+', label: 'Expert Teachers' },
  { number: '50+', label: 'Years of Excellence' },
  { number: '100%', label: 'Success Rate' }
];

export default function Stats() {
  return (
    <div className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}