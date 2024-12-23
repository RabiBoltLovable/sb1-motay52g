import React from 'react';
import QuizCard from './QuizCard';

const assessments = [
  {
    subject: 'Mathematics',
    title: 'Algebra Mid-Term',
    duration: '45 mins',
    totalQuestions: 30,
    dueDate: '2024-03-25',
    status: 'upcoming' as const
  },
  {
    subject: 'Physics',
    title: 'Forces and Motion',
    duration: '30 mins',
    totalQuestions: 20,
    dueDate: '2024-03-20',
    status: 'completed' as const,
    score: 85
  }
];

export default function AssessmentCenter() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Online Assessments</h3>
      <div className="space-y-4">
        {assessments.map((assessment, index) => (
          <QuizCard key={index} {...assessment} />
        ))}
      </div>
    </div>
  );
}