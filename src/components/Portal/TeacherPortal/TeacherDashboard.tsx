import React from 'react';
import { Users, BookOpen, CheckSquare, MessageCircle } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Total Students', value: '120' },
  { icon: BookOpen, label: 'Classes', value: '4' },
  { icon: CheckSquare, label: 'Assignments', value: '15' },
  { icon: MessageCircle, label: 'Messages', value: '8' }
];

export default function TeacherDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <Icon className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Today's Classes</h3>
          <div className="space-y-4">
            {['9:00 AM - Class 10 Physics', '11:00 AM - Class 9 Science', '2:00 PM - Class 8 Mathematics'].map((cls, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <BookOpen className="h-5 w-5 text-blue-600 mr-3" />
                <span>{cls}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Pending Tasks</h3>
          <div className="space-y-4">
            {[
              'Grade Physics assignments',
              'Prepare test papers',
              'Update course material'
            ].map((task, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <CheckSquare className="h-5 w-5 text-blue-600 mr-3" />
                <span>{task}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}