import React from 'react';
import { MapPin, Bus, Clock } from 'lucide-react';

const routes = [
  {
    routeNumber: 'R1',
    driver: 'John Smith',
    status: 'on-route',
    nextStop: 'Gaur Market',
    estimatedTime: '5 mins'
  },
  {
    routeNumber: 'R2',
    driver: 'Raj Kumar',
    status: 'arrived',
    nextStop: 'School',
    estimatedTime: '0 mins'
  }
];

export default function BusTracker() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <Bus className="h-6 w-6 text-blue-600 mr-2" />
        Bus Tracking
      </h3>
      <div className="space-y-4">
        {routes.map((route) => (
          <div key={route.routeNumber} className="border-l-4 border-blue-600 pl-4 py-2">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">Route {route.routeNumber}</h4>
                <p className="text-sm text-gray-600">Driver: {route.driver}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                route.status === 'on-route' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
              }`}>
                {route.status}
              </span>
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-1" />
              Next Stop: {route.nextStop}
              <Clock className="h-4 w-4 ml-4 mr-1" />
              ETA: {route.estimatedTime}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}