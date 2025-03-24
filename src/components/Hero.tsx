
import React from 'react';
import SearchBox from './SearchBox';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-6 bg-blue-500 text-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Main heading */}
        <h1 className="text-2xl font-bold text-center mb-4">
          Co-Working Space Finder
        </h1>
        
        {/* Search Box */}
        <div className="max-w-md mx-auto">
          <SearchBox />
        </div>
      </div>
    </section>
  );
};

export default Hero;
