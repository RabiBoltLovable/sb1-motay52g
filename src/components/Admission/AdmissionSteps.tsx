import React from 'react';
import { ClipboardCheck, FileText, Users, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Submit Application',
    description: 'Fill out the online application form with required documents'
  },
  {
    icon: ClipboardCheck,
    title: 'Entrance Test',
    description: 'Take the entrance assessment test'
  },
  {
    icon: Users,
    title: 'Interview',
    description: 'Parent and student interview with school administration'
  },
  {
    icon: CheckCircle,
    title: 'Admission',
    description: 'Receive admission decision and complete enrollment'
  }
];

export default function AdmissionSteps() {
  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex items-start mb-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}