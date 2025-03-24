
import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

const SearchBox: React.FC = () => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would trigger the search here
    console.log('Searching for:', query, 'in location:', location);
    
    // Scroll to results section
    document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form 
        onSubmit={handleSearch}
        className="glass-card rounded-xl overflow-hidden shadow-lg p-1 sm:p-2 transition-all duration-300 hover:shadow-xl"
      >
        <div className="flex flex-col sm:flex-row items-center">
          {/* Search query input */}
          <div className="flex-1 w-full flex items-center px-3 py-3 border-b sm:border-b-0 sm:border-r border-gray-100">
            <Search className="h-5 w-5 text-muted-foreground mr-2 flex-shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for workspace or company..."
              className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
              aria-label="Search query"
            />
          </div>
          
          {/* Location input */}
          <div className="flex-1 w-full flex items-center px-3 py-3">
            <MapPin className="h-5 w-5 text-muted-foreground mr-2 flex-shrink-0" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Any location"
              className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
              aria-label="Location"
            />
          </div>
          
          {/* Search button */}
          <button
            type="submit"
            className="w-full sm:w-auto flex-shrink-0 rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 m-1"
            aria-label="Find Spaces"
          >
            Find Spaces
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
