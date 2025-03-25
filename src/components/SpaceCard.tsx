
import React from 'react';
import { type CoworkingSpace } from '../lib/data';
import { Card, CardContent } from './ui/card';
import { useToast } from '../hooks/use-toast';

interface SpaceCardProps {
  space: CoworkingSpace;
}

const SpaceCard: React.FC<SpaceCardProps> = ({ space }) => {
  const { toast } = useToast();
  
  const handleFindNow = () => {
    toast({
      title: "Space Selected",
      description: `You've selected ${space.name}. Booking details will be sent to your email.`,
    });
  };
  
  return (
    <Card className="h-full border-t-4 border-blue-500 hover:shadow-md transition-all duration-200">
      <CardContent className="p-4">
        <h3 className="font-bold text-md mb-1 truncate">{space.name}</h3>
        <p className="text-xs text-gray-600 mb-1 truncate">Location: {space.location}</p>
        <p className="text-xs text-gray-600 mb-1">Price: $150/month</p>
        
        <div className="mt-2">
          <p className="text-xs text-gray-600 line-clamp-2">
            <span className="font-semibold">Amenities:</span> {space.amenities.join(', ')}
          </p>
        </div>
        
        <button 
          className="mt-3 w-full py-1 px-2 bg-blue-500 text-white text-xs rounded-sm hover:bg-blue-600 transition-colors"
          onClick={handleFindNow}
        >
          Find Now
        </button>
      </CardContent>
    </Card>
  );
};

export default SpaceCard;
