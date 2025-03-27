
import React, { useState, useEffect } from 'react';
import { coworkingSpaces } from '../lib/data';
import SpaceCard from './SpaceCard';
import { Search, Filter, MapPin } from 'lucide-react';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';

// Define Indian cities for filter section
const indianCities = [
  "Hyderabad", "Pune", "Mumbai", "Bangalore", "Noida", 
  "Lucknow", "Visakhapatnam", "Kanpur", "Indore", "Bhopal", "Navi Mumbai", 
  "Chennai", "Kolkata", "Coimbatore", "Kochi",
  
  "Gurgaon", "Delhi", "Ahmedabad", "Chandigarh", "Jaipur", 
  "Trivandrum", "Bhubaneswar", "Mysore", "Nagpur", "Guwahati",
  "Mangalore", "Vadodara", "Thiruvananthapuram", "Gandhinagar",
  
  "Airoli", "Bengaluru", "Hinjawadi", "Whitefield", "Talawade"
];

// City name normalization map
const cityNameMap: Record<string, string> = {
  "Bengaluru": "Bangalore",
  "Thiruvananthapuram": "Trivandrum"
};

const SpacesList: React.FC = () => {
  const [filterText, setFilterText] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedAmenity, setSelectedAmenity] = useState('');
  const [showIndianOnly, setShowIndianOnly] = useState(false);

  // Normalize location names for consistency
  const normalizeLocationName = (location: string): string => {
    // Extract city name from location (e.g., "Mumbai, India" -> "Mumbai")
    const cityName = location.split(',')[0].trim();
    
    // Check if this city has a normalized name
    return cityNameMap[cityName] ? 
      location.replace(cityName, cityNameMap[cityName]) : 
      location;
  };

  // Extract unique locations and amenities for filters with normalization
  const uniqueLocationsMap = new Map();
  coworkingSpaces.forEach(space => {
    const normalizedLocation = normalizeLocationName(space.location);
    uniqueLocationsMap.set(normalizedLocation, normalizedLocation);
  });
  const uniqueLocations = Array.from(uniqueLocationsMap.values()).sort();
  
  // Get all unique amenities across all spaces
  const allAmenities = coworkingSpaces.flatMap(space => space.amenities);
  const uniqueAmenities = [...new Set(allAmenities)].sort();
  
  // Filter spaces based on search and filters with normalization
  const filteredSpaces = coworkingSpaces.filter(space => {
    // Normalize current space location
    const normalizedSpaceLocation = normalizeLocationName(space.location);
    
    // Text search filter (name, location, description)
    const matchesText = !filterText || 
      space.name.toLowerCase().includes(filterText.toLowerCase()) ||
      normalizedSpaceLocation.toLowerCase().includes(filterText.toLowerCase()) ||
      space.description.toLowerCase().includes(filterText.toLowerCase()) ||
      space.amenities.some(amenity => amenity.toLowerCase().includes(filterText.toLowerCase()));
    
    // Location filter (using normalized location names)
    const matchesLocation = !selectedLocation || normalizedSpaceLocation === selectedLocation;
    
    // Amenity filter
    const matchesAmenity = !selectedAmenity || 
      space.amenities.some(amenity => amenity === selectedAmenity);
    
    // Indian cities filter
    const matchesIndian = !showIndianOnly || 
      indianCities.some(city => normalizedSpaceLocation.includes(city));
    
    return matchesText && matchesLocation && matchesAmenity && matchesIndian;
  });

  // Sort spaces alphabetically by name
  const sortedSpaces = [...filteredSpaces].sort((a, b) => 
    a.name.localeCompare(b.name)
  );

  // Reset all filters
  const resetFilters = () => {
    setFilterText('');
    setSelectedLocation('');
    setSelectedAmenity('');
    setShowIndianOnly(false);
  };

  // Quick filter for Indian locations
  const handleShowIndianOnly = () => {
    setShowIndianOnly(!showIndianOnly);
    setSelectedLocation(''); // Clear location filter when using the Indian filter
  };

  return (
    <section id="results" className="py-8 bg-gradient-to-b from-background to-secondary/30">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* Advanced search and filters */}
        <div className="mb-8 space-y-4">
          <h2 className="text-2xl font-bold text-center mb-6">Find Your Perfect Workspace</h2>
          
          {/* Search input */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <Input
              type="text"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              placeholder="Search by name, location or amenities..."
              className="pl-10 pr-3 w-full"
            />
          </div>
          
          {/* Indian locations quick filter */}
          <div className="flex justify-center mb-4">
            <Button
              variant={showIndianOnly ? "default" : "outline"}
              onClick={handleShowIndianOnly}
              className="flex items-center gap-2"
            >
              <MapPin className="h-4 w-4" />
              {showIndianOnly ? "Showing Indian Locations" : "Show Indian Locations Only"}
            </Button>
          </div>
          
          {/* Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {/* Location filter */}
            <div>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by location" />
                </SelectTrigger>
                <SelectContent>
                  {uniqueLocations.map(location => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {/* Amenity filter */}
            <div>
              <Select value={selectedAmenity} onValueChange={setSelectedAmenity}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by amenity" />
                </SelectTrigger>
                <SelectContent>
                  {uniqueAmenities.map(amenity => (
                    <SelectItem key={amenity} value={amenity}>
                      {amenity}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {/* Reset filters button */}
            <div className="flex items-center">
              <Button 
                onClick={resetFilters}
                variant="outline"
                className="w-full"
              >
                Reset Filters
              </Button>
            </div>
          </div>
          
          {/* Results count */}
          <div className="mb-4 text-sm text-muted-foreground">
            <p>{sortedSpaces.length} spaces found</p>
          </div>
          
          {/* Spaces grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {sortedSpaces.map((space) => (
              <div key={space.id}>
                <SpaceCard space={space} />
              </div>
            ))}
            
            {sortedSpaces.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-muted-foreground">
                  No spaces found matching your criteria
                </p>
                <Button 
                  onClick={resetFilters}
                  className="mt-4"
                  variant="outline"
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpacesList;
