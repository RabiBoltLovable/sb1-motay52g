import React, { useState } from 'react';
import { Book, Calendar, FileText, Clock } from 'lucide-react';
import LoginForm from './LoginForm';
import StudentDashboard from './StudentDashboard';

export default function StudentPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (credentials: { email: string; password: string }) => {
    // Simulate login
    setIsLoggedIn(true);
  };

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Student Portal</h2>
          <p className="mt-4 text-lg text-gray-600">Access your academic resources</p>
        </div>
        
        {isLoggedIn ? (
          <StudentDashboard />
        ) : (
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">Student Login</h3>
            <LoginForm onSubmit={handleLogin} />
          </div>
        )}
      </div>
    </div>
  );
}