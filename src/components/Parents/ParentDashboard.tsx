import React from 'react';
import { Bell, MessageCircle, CreditCard, FileText } from 'lucide-react';

const notifications = [
  { title: 'PTM Schedule', message: 'Parent-Teacher Meeting scheduled for next week', date: '2024-03-25' },
  { title: 'Fee Due', message: 'Second term fee payment reminder', date: '2024-03-28' }
];

export default function ParentDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Bell className="h-5 w-5 mr-2 text-blue-600" />
            Notifications
          </h3>
          <div className="space-y-4">
            {notifications.map((notification, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-3">
                <h4 className="font-medium">{notification.title}</h4>
                <p className="text-sm text-gray-600">{notification.message}</p>
                <p className="text-xs text-gray-500 mt-1">{notification.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <CreditCard className="h-5 w-5 mr-2 text-blue-600" />
            Fee Status
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Total Fee</span>
              <span className="font-medium">₹50,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Paid</span>
              <span className="text-green-600 font-medium">₹30,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Due</span>
              <span className="text-red-600 font-medium">₹20,000</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <MessageCircle className="h-5 w-5 mr-2 text-blue-600" />
            Teacher Communications
          </h3>
          <div className="space-y-4">
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Schedule Meeting
            </button>
            <button className="w-full border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}