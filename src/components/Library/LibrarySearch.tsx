import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

interface LibrarySearchProps {
  onSearch: (query: string) => void;
  onFilter: (category: string) => void;
}

const categories = ['All', 'Science', 'Mathematics', 'Literature', 'History'];

export default function LibrarySearch({ onSearch, onFilter }: LibrarySearchProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <form onSubmit={handleSubmit} className="flex-1">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search books..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </form>
      <div className="flex gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onFilter(category)}
            className="px-3 py-1 rounded-full text-sm bg-gray-100 hover:bg-blue-100 hover:text-blue-600 transition-colors"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}