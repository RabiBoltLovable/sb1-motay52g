import React, { useEffect, useState } from 'react';
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface Application {
  id: string;
  student_name: string;
  grade_applying_for: string;
  status: string;
  created_at: string;
}

export default function ApplicationStatus({ email }: { email: string }) {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const { data, error } = await supabase
          .from('applications')
          .select('*')
          .eq('email', email)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setApplications(data || []);
      } catch (err) {
        console.error('Error fetching applications:', err);
        setError('Failed to load applications');
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, [email]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'approved':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'rejected':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  if (loading) {
    return <div className="text-center">Loading applications...</div>;
  }

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  if (applications.length === 0) {
    return <div className="text-gray-600">No applications found.</div>;
  }

  return (
    <div className="space-y-4">
      {applications.map((application) => (
        <div
          key={application.id}
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">{application.student_name}</h3>
              <p className="text-sm text-gray-600">
                Applying for: {application.grade_applying_for}
              </p>
              <p className="text-xs text-gray-500">
                Submitted: {new Date(application.created_at).toLocaleDateString()}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              {getStatusIcon(application.status)}
              <span className="text-sm font-medium capitalize">{application.status}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}