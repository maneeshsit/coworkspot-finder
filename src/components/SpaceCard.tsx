
import React from 'react';
import { type CoworkingSpace } from '../lib/data';

interface SpaceCardProps {
  space: CoworkingSpace;
}

const SpaceCard: React.FC<SpaceCardProps> = ({ space }) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden hover-scale opacity-0 animate-fade-in">
      <div className="p-5">
        {/* Card header with logo and name */}
        <div className="flex items-center mb-4">
          <div className="h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 rounded overflow-hidden border border-gray-100">
            <img 
              src={space.logo} 
              alt={`${space.name} logo`} 
              className="h-full w-full object-cover"
            />
          </div>
          <div className="ml-3">
            <h3 className="font-semibold text-lg">{space.name}</h3>
            <p className="text-sm text-muted-foreground">{space.location}</p>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4">
          {space.description}
        </p>
        
        {/* Rating and price */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="flex items-center">
              {/* Star rating */}
              <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="ml-1 text-sm font-medium">{space.rating.toFixed(1)}</span>
            </div>
          </div>
          <div>
            <span className="text-sm font-medium">{space.priceRange}</span>
          </div>
        </div>
        
        {/* Amenities */}
        <div className="flex flex-wrap gap-2">
          {space.amenities.slice(0, 3).map((amenity, index) => (
            <span 
              key={index} 
              className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
            >
              {amenity}
            </span>
          ))}
        </div>
        
        {/* Button */}
        <button className="mt-5 w-full rounded-lg bg-secondary hover:bg-secondary/80 px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};

export default SpaceCard;
