import React from 'react';
import AchievementCard from './AchievementCard';

const achievements = [
  {
    title: "National Science Olympiad Winners",
    date: "March 2024",
    category: "Academic Excellence",
    description: "Our students secured first place in the National Science Olympiad, demonstrating exceptional scientific knowledge.",
    image: "https://images.unsplash.com/photo-1567306301408-9b74779a11af?auto=format&fit=crop&q=80"
  },
  {
    title: "Regional Sports Championship",
    date: "February 2024",
    category: "Sports",
    description: "School team won the Regional Football Championship for the third consecutive year.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80"
  },
  {
    title: "Cultural Heritage Award",
    date: "January 2024",
    category: "Cultural Achievement",
    description: "Recognized for outstanding contribution to preserving and promoting Nepali cultural heritage.",
    image: "https://images.unsplash.com/photo-1604842585455-e1d9bb0c90c9?auto=format&fit=crop&q=80"
  }
];

export default function AchievementsSection() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">School Achievements</h2>
          <p className="mt-4 text-lg text-gray-600">Celebrating our successes and milestones</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>
      </div>
    </div>
  );
}