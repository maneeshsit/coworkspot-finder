
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
  "Lucknow", "Visakhapatnam", "Vizag", "Kanpur", "Indore", "Bhopal", "Navi Mumbai"
];

const SpacesList: React.FC = () => {
  const [filterText, setFilterText] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedAmenity, setSelectedAmenity] = useState('');
  const [showIndianOnly, setShowIndianOnly] = useState(false);

  // Extract unique locations and amenities for filters
  const uniqueLocations = [...new Set(coworkingSpaces.map(space => space.location))].sort();
  
  // Get all unique amenities across all spaces
  const allAmenities = coworkingSpaces.flatMap(space => space.amenities);
  const uniqueAmenities = [...new Set(allAmenities)].sort();
  
  // Filter spaces based on search and filters
  const filteredSpaces = coworkingSpaces.filter(space => {
    // Text search filter (name, location, description)
    const matchesText = !filterText || 
      space.name.toLowerCase().includes(filterText.toLowerCase()) ||
      space.location.toLowerCase().includes(filterText.toLowerCase()) ||
      space.description.toLowerCase().includes(filterText.toLowerCase()) ||
      space.amenities.some(amenity => amenity.toLowerCase().includes(filterText.toLowerCase()));
    
    // Location filter
    const matchesLocation = !selectedLocation || space.location === selectedLocation;
    
    // Amenity filter
    const matchesAmenity = !selectedAmenity || 
      space.amenities.some(amenity => amenity === selectedAmenity);
    
    // Indian cities filter
    const matchesIndian = !showIndianOnly || 
      indianCities.some(city => space.location.includes(city));
    
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
    </section>
  );
};

export default SpacesList;
