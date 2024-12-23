import React, { useState } from 'react';
import { LogIn } from 'lucide-react';

interface LoginFormProps {
  onSubmit: (credentials: { email: string; password: string }) => void;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(credentials);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={credentials.email}
          onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          value={credentials.password}
          onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        <LogIn className="w-4 h-4 mr-2" />
        Sign In
      </button>
    </form>
  );
}