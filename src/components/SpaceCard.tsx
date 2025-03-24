
import React from 'react';
import { type CoworkingSpace } from '../lib/data';

interface SpaceCardProps {
  space: CoworkingSpace;
}

const SpaceCard: React.FC<SpaceCardProps> = ({ space }) => {
  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden h-full">
      <div className="p-4 border-t-4 border-blue-500">
        <h3 className="font-bold text-md mb-1">{space.name}</h3>
        <p className="text-xs text-gray-600 mb-1">Location: {space.location}</p>
        <p className="text-xs text-gray-600 mb-1">Price: {space.priceRange}/month</p>
        
        <div className="mt-2">
          <p className="text-xs text-gray-600">
            <span className="font-semibold">Amenities:</span> {space.amenities.slice(0, 2).join(', ')}
          </p>
        </div>
        
        <button className="mt-3 w-full py-1 px-2 bg-blue-500 text-white text-xs rounded-sm hover:bg-blue-600 transition-colors">
          Find Now
        </button>
      </div>
    </div>
  );
};

export default SpaceCard;
