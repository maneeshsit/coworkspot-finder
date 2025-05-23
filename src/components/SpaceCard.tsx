
import React from 'react';
import { type CoworkingSpace } from '../lib/data';
import { Card, CardContent } from './ui/card';
import { useToast } from '../hooks/use-toast';
import { MapPin } from 'lucide-react';

interface SpaceCardProps {
  space: CoworkingSpace;
}

// Define Indian cities (kept for reference but not used for special styling anymore)
const indianCities = [
  "Hyderabad", "Pune", "Mumbai", "Bengaluru", "Noida", 
  "Lucknow", "Visakhapatnam", "Kanpur", "Indore", "Bhopal", "Navi Mumbai",
  "Chennai", "Kolkata", "Coimbatore", "Kochi",
  
  // Added IT company locations
  "Gurgaon", "Delhi", "Ahmedabad", "Chandigarh", "Jaipur", 
  "Trivandrum", "Bhubaneswar", "Mysore", "Nagpur", "Guwahati",
  "Mangalore", "Vadodara", "Thiruvananthapuram", "Gandhinagar",
  
  // Added Capgemini India locations
  "Airoli", "Hinjawadi", "Whitefield", "Talawade"
];

// City name normalization map (same as in SpacesList for consistency)
const cityNameMap: Record<string, string> = {
  "Bangalore": "Bengaluru",
  "Thiruvananthapuram": "Trivandrum"
};

const SpaceCard: React.FC<SpaceCardProps> = ({ space }) => {
  const { toast } = useToast();
  
  // Normalize location for consistency
  const normalizeLocationName = (location: string): string => {
    const cityName = location.split(',')[0].trim();
    return cityNameMap[cityName] ? 
      location.replace(cityName, cityNameMap[cityName]) : 
      location;
  };
  
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
        
        <div className="flex items-center text-xs text-gray-600 mb-1">
          <MapPin className="h-3 w-3 mr-1" />
          <p className="truncate">
            {space.location}
          </p>
        </div>
        
        <p className="text-xs text-gray-600 mb-1">Price: $150/month</p>
        
        <div className="mt-2">
          <p className="text-xs text-gray-600 line-clamp-2">
            <span className="font-semibold">Amenities:</span> {space.amenities.join(', ')}
          </p>
        </div>
        
        <button 
          className="mt-3 w-full py-1 px-2 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded-sm transition-colors"
          onClick={handleFindNow}
        >
          Find Now
        </button>
      </CardContent>
    </Card>
  );
};

export default SpaceCard;
