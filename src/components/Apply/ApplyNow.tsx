import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import ApplicationForm from './ApplicationForm';
import ApplicationStatus from './ApplicationStatus';

export default function ApplyNow() {
  const [email, setEmail] = useState('');

  return (
    <div className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Apply to Ashokam International</h2>
          <p className="mt-4 text-lg text-gray-600">
            Start your journey towards excellence in education
          </p>
        </div>

        <Tabs defaultValue="new" className="space-y-6">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="new">New Application</TabsTrigger>
            <TabsTrigger value="status">Check Status</TabsTrigger>
          </TabsList>

          <TabsContent value="new">
            <ApplicationForm />
          </TabsContent>

          <TabsContent value="status">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">
                  Enter your email to check application status
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              {email && <ApplicationStatus email={email} />}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}