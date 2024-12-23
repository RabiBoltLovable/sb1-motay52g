import React from 'react';
import AdmissionForm from './AdmissionForm';
import AdmissionSteps from './AdmissionSteps';

export default function AdmissionSection() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Admission Process</h2>
          <p className="mt-4 text-lg text-gray-600">Join our academic community</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">How to Apply</h3>
            <AdmissionSteps />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Application Form</h3>
            <AdmissionForm />
          </div>
        </div>
      </div>
    </div>
  );
}