import React from 'react';
import { MonitorCheck, Book, Trophy, Bus, Coffee, BriefcaseMedical } from 'lucide-react';
import FacilityCard from './FacilityCard';

const facilities = [
  {
    icon: MonitorCheck,
    title: 'Computer Labs',
    description: 'Modern computer labs with high-speed internet',
    imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80'
  },
  {
    icon: Book,
    title: 'Library',
    description: 'Extensive collection of books and digital resources',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80'
  },
  {
    icon: Trophy,
    title: 'Sports Complex',
    description: 'Indoor and outdoor sports facilities',
    imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80'
  },
  {
    icon: Bus,
    title: 'Transportation',
    description: 'Safe and comfortable school bus service',
    imageUrl: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80'
  },
  {
    icon: Coffee,
    title: 'Cafeteria',
    description: 'Healthy and nutritious meals',
    imageUrl: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&q=80'
  },
  {
    icon: 'BriefcaseMedical',
    title: 'Medical Room',
    description: '24/7 medical assistance available',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80'
  }
];

export default function Facilities() {
  return (
    <div id="facilities" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Facilities</h2>
          <p className="mt-4 text-lg text-gray-600">Modern amenities for holistic development</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <FacilityCard key={index} {...facility} />
          ))}
        </div>
      </div>
    </div>
  );
}