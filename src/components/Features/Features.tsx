import React from 'react';
import { BookOpen, Users, Trophy, Palette, Globe, Mountain } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: BookOpen,
    title: 'Academic Excellence',
    description: 'Comprehensive curriculum following Nepal and international standards'
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    description: 'Experienced Nepali and international educators'
  },
  {
    icon: Trophy,
    title: 'Sports & Activities',
    description: 'Traditional Nepali and modern sports facilities'
  },
  {
    icon: Palette,
    title: 'Cultural Arts',
    description: 'Celebrating Nepali heritage through arts and culture'
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'International exposure while maintaining local values'
  },
  {
    icon: Mountain,
    title: 'Mountain Adventure',
    description: 'Unique outdoor education programs in the Himalayas'
  }
];

export default function Features() {
  return (
    <div id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Ashokam International?</h2>
          <p className="mt-4 text-lg text-gray-600">Discover what makes our school unique in Gaur, Nepal</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}