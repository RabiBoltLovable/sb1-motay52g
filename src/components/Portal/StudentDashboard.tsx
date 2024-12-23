import React from 'react';
import DashboardStats from './Dashboard/DashboardStats';
import UpcomingEvents from './Dashboard/UpcomingEvents';
import ResultsPortal from './Results/ResultsPortal';
import ResourceList from './CourseResources/ResourceList';

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      <DashboardStats />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <ResultsPortal />
          <UpcomingEvents />
        </div>
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Course Resources</h3>
            <ResourceList />
          </div>
        </div>
      </div>
    </div>
  );
}