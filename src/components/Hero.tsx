
import React from 'react';
import SearchBox from './SearchBox';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute -top-[30%] -left-[10%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-[20%] right-[5%] h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>
      
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Small label above main heading */}
        <div className="inline-block animate-fade-in opacity-0 mb-3 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
          <span className="font-medium">Find your perfect space</span>
        </div>
        
        {/* Main heading */}
        <h1 className="animate-fade-in opacity-0 stagger-1 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6">
          <span className="block">Discover & Book</span>
          <span className="block bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
            Premium Workspaces
          </span>
        </h1>
        
        {/* Subheading */}
        <p className="animate-fade-in opacity-0 stagger-2 text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 md:mb-10">
          Find and book the perfect co-working space tailored to your needs. 
          Flexible terms, premium amenities, and inspiring environments.
        </p>
        
        {/* Search Box */}
        <div className="animate-fade-in opacity-0 stagger-3">
          <SearchBox />
        </div>
      </div>
    </section>
  );
};

export default Hero;
