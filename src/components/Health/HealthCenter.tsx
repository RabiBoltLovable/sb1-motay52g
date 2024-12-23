import React from 'react';
import { Heart, Activity, Calendar } from 'lucide-react';

interface HealthRecord {
  date: string;
  checkupType: string;
  doctor: string;
  notes: string;
}

const healthRecords: HealthRecord[] = [
  {
    date: '2024-03-15',
    checkupType: 'Regular Checkup',
    doctor: 'Dr. Sharma',
    notes: 'All parameters normal'
  },
  {
    date: '2024-02-20',
    checkupType: 'Dental Checkup',
    doctor: 'Dr. Patel',
    notes: 'Regular cleaning done'
  }
];

export default function HealthCenter() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <Heart className="h-6 w-6 text-red-500 mr-2" />
        Health Records
      </h3>
      <div className="space-y-4">
        {healthRecords.map((record, index) => (
          <div key={index} className="border-l-4 border-red-500 pl-4 py-2">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">{record.checkupType}</h4>
                <p className="text-sm text-gray-600">Doctor: {record.doctor}</p>
                <p className="text-sm text-gray-500 mt-1">{record.notes}</p>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                <span className="text-sm text-gray-600">{record.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}