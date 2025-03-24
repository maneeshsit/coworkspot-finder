
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBox: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', query);
    document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form 
        onSubmit={handleSearch}
        className="flex items-center"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or location"
          className="flex-1 py-1 px-3 rounded-l-md border-0 focus:ring-0 text-gray-800"
          aria-label="Search query"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-1 rounded-r-md hover:bg-blue-700"
          aria-label="Search"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
