import React from 'react';
import ResultCard from './ResultCard';
import { ChartArea } from 'lucide-react';

const results = [
  { subject: 'Mathematics', marks: 92, grade: 'A+', term: 'First Term' },
  { subject: 'Physics', marks: 88, grade: 'A', term: 'First Term' },
  { subject: 'Chemistry', marks: 85, grade: 'A', term: 'First Term' }
];

export default function ResultsPortal() {
  const average = results.reduce((acc, curr) => acc + curr.marks, 0) / results.length;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Academic Results</h3>
        <div className="flex items-center text-blue-600">
          <ChartArea className="h-5 w-5 mr-2" />
          <span>Average: {average.toFixed(1)}%</span>
        </div>
      </div>
      <div className="space-y-4">
        {results.map((result, index) => (
          <ResultCard key={index} {...result} />
        ))}
      </div>
    </div>
  );
}