import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    content: "The teachers at Ashokam International have been instrumental in shaping my child's future. The personalized attention and care they provide is exceptional.",
    author: "Sarah Johnson",
    role: "Parent",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    content: "The school's focus on holistic development has helped my daughter excel not just in academics, but in sports and arts as well.",
    author: "Rajesh Patel",
    role: "Parent",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    content: "As an alumnus, I can confidently say that Ashokam International prepared me well for university and beyond.",
    author: "Priya Singh",
    role: "Alumni",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  }
];

export default function Testimonials() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">What Parents Say</h2>
          <p className="mt-4 text-lg text-gray-600">Hear from our school community</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}