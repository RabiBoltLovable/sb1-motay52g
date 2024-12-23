import React from 'react';
import { BookOpen, Clock, Award, Calendar } from 'lucide-react';

const stats = [
  { icon: BookOpen, label: 'Courses', value: '6' },
  { icon: Clock, label: 'Attendance', value: '92%' },
  { icon: Award, label: 'Grade', value: 'A' },
  { icon: Calendar, label: 'Study Days', value: '180' }
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <Icon className="h-8 w-8 text-blue-600" />
              <div className="ml-3">
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-xl font-semibold">{stat.value}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}