import React from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  type: 'pdf' | 'video' | 'link';
  subject: string;
  url: string;
  size?: string;
}

export default function ResourceCard({ title, type, subject, url, size }: ResourceCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-blue-600 mb-1">{subject}</p>
          <h4 className="font-medium mb-2">{title}</h4>
          {size && <p className="text-sm text-gray-500">Size: {size}</p>}
        </div>
        <div className="ml-4">
          {type === 'pdf' ? (
            <Download className="h-5 w-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
          ) : (
            <ExternalLink className="h-5 w-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
          )}
        </div>
      </div>
    </div>
  );
}