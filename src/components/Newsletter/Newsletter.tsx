import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setEmail('');
    // Here you would typically handle the newsletter subscription
  };

  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Stay Updated</h2>
          <p className="mt-4 text-lg text-gray-300">Subscribe to our newsletter for latest updates</p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 flex items-center"
            >
              <Send className="h-4 w-4 mr-2" />
              Subscribe
            </button>
          </div>
          {status === 'success' && (
            <p className="text-green-400 mt-2 text-center">Thank you for subscribing!</p>
          )}
        </form>
      </div>
    </div>
  );
}