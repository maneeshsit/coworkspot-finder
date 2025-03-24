
import React, { useState, useEffect } from 'react';
import { coworkingSpaces } from '../lib/data';
import SpaceCard from './SpaceCard';
import { Search } from 'lucide-react';

const SpacesList: React.FC = () => {
  const [filterText, setFilterText] = useState('');
  const [staggeredSpaces, setStaggeredSpaces] = useState(coworkingSpaces);

  // Filter spaces based on search
  const filteredSpaces = filterText
    ? coworkingSpaces.filter(space => 
        space.name.toLowerCase().includes(filterText.toLowerCase()) ||
        space.location.toLowerCase().includes(filterText.toLowerCase()) ||
        space.description.toLowerCase().includes(filterText.toLowerCase())
      )
    : coworkingSpaces;

  // Set up staggered animation on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setStaggeredSpaces(coworkingSpaces);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="results" className="py-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Available Spaces</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our curated selection of premium co-working spaces from industry leaders.
          </p>
          
          {/* Filter input */}
          <div className="relative max-w-md mx-auto mt-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              placeholder="Filter spaces..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none"
            />
          </div>
        </div>
        
        {/* Spaces grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpaces.map((space, index) => (
            <div 
              key={space.id} 
              className={`opacity-0 animate-fade-in stagger-${(index % 5) + 1}`}
              style={{ animationDelay: `${100 + index * 50}ms` }}
            >
              <SpaceCard space={space} />
            </div>
          ))}
          
          {filteredSpaces.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-muted-foreground">
                No spaces found matching "{filterText}"
              </p>
              <button 
                onClick={() => setFilterText('')}
                className="mt-4 px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
              >
                Clear filter
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SpacesList;
