import React, { useState } from 'react';
import { User, FileText, Loader } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface ApplicationFormData {
  studentName: string;
  dateOfBirth: string;
  gradeApplyingFor: string;
  parentName: string;
  email: string;
  phone: string;
  address: string;
  previousSchool: string;
}

const initialFormData: ApplicationFormData = {
  studentName: '',
  dateOfBirth: '',
  gradeApplyingFor: '',
  parentName: '',
  email: '',
  phone: '',
  address: '',
  previousSchool: ''
};

export default function ApplicationForm() {
  const [formData, setFormData] = useState<ApplicationFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('applications').insert([{
        student_name: formData.studentName,
        date_of_birth: formData.dateOfBirth,
        grade_applying_for: formData.gradeApplyingFor,
        parent_name: formData.parentName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        previous_school: formData.previousSchool
      }]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData(initialFormData);
    } catch (error) {
      console.error('Application submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const grades = ['Nursery', 'LKG', 'UKG', ...Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`)];

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Student Name</label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Grade Applying For</label>
          <select
            name="gradeApplyingFor"
            value={formData.gradeApplyingFor}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select Grade</option>
            {grades.map(grade => (
              <option key={grade} value={grade}>{grade}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Parent/Guardian Name</label>
          <input
            type="text"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Previous School (if any)</label>
          <input
            type="text"
            name="previousSchool"
            value={formData.previousSchool}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-md p-4 mt-4">
          <p className="text-green-700">Application submitted successfully! We will contact you soon.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 mt-4">
          <p className="text-red-700">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 disabled:bg-blue-400"
      >
        {isSubmitting ? (
          <>
            <Loader className="animate-spin h-5 w-5 mr-2" />
            Submitting...
          </>
        ) : (
          <>
            <FileText className="h-5 w-5 mr-2" />
            Submit Application
          </>
        )}
      </button>
    </form>
  );
}