
import React from 'react';
import Hero from '../components/Hero';
import SpacesList from '../components/SpacesList';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container max-w-6xl mx-auto px-4 sm:px-6 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-primary">CoWorkSpot</h1>
        </div>
        
        <nav className="hidden md:flex space-x-1">
          <a href="#" className="px-3 py-2 text-sm text-foreground hover:text-primary transition-colors">Spaces</a>
          <a href="#" className="px-3 py-2 text-sm text-foreground hover:text-primary transition-colors">About</a>
          <a href="#" className="px-3 py-2 text-sm text-foreground hover:text-primary transition-colors">Contact</a>
          <a href="#" className="ml-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">Sign In</a>
        </nav>
        
        {/* Mobile menu button */}
        <button className="block md:hidden rounded-md p-2 text-foreground hover:bg-secondary transition-colors">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>
      
      {/* Hero Section */}
      <Hero />
      
      {/* Spaces List Section */}
      <SpacesList />
      
      {/* Footer */}
      <footer className="bg-secondary/50 py-12">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold text-primary mb-4">CoWorkSpot</h2>
              <p className="text-muted-foreground mb-4">
                Discover and book the perfect co-working space tailored to your needs.
                Flexible terms, premium amenities, and inspiring environments.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Spaces</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground order-2 md:order-1">
              &copy; {new Date().getFullYear()} CoWorkSpot. All rights reserved.
            </p>
            <div className="flex space-x-6 mb-4 md:mb-0 order-1 md:order-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
