import React from 'react';
import ProgramCard from './ProgramCard';

const programs = [
  {
    title: "Primary Years",
    description: "Foundation years following Nepal curriculum with international elements",
    grades: "Grades 1-5",
    curriculum: "Nepal National Curriculum + IPC"
  },
  {
    title: "Middle School",
    description: "Balanced program with Nepal and Cambridge curriculum",
    grades: "Grades 6-8",
    curriculum: "Nepal National + Cambridge Lower Secondary"
  },
  {
    title: "High School",
    description: "Preparation for Nepal board exams and international universities",
    grades: "Grades 9-12",
    curriculum: "Nepal National + Cambridge IGCSE"
  }
];

export default function Programs() {
  return (
    <div id="academics" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Academic Programs</h2>
          <p className="mt-4 text-lg text-gray-600">Blending Nepali and international education excellence</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </div>
  );
}