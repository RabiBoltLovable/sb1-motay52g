import React from 'react';
import ResourceCard from './ResourceCard';
import { Book, Video, FileText } from 'lucide-react';

const resources = [
  {
    title: 'Physics Notes - Chapter 1',
    type: 'pdf' as const,
    subject: 'Physics',
    url: '#',
    size: '2.3 MB'
  },
  {
    title: 'Chemistry Lab Manual',
    type: 'pdf' as const,
    subject: 'Chemistry',
    url: '#',
    size: '4.1 MB'
  },
  {
    title: 'Mathematics Video Lecture',
    type: 'video' as const,
    subject: 'Mathematics',
    url: '#'
  }
];

export default function ResourceList() {
  return (
    <div className="space-y-4">
      {resources.map((resource, index) => (
        <ResourceCard key={index} {...resource} />
      ))}
    </div>
  );
}