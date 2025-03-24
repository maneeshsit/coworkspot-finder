
export interface CoworkingSpace {
  id: string;
  name: string;
  logo: string;
  location: string;
  rating: number;
  priceRange: string;
  amenities: string[];
  description: string;
}

// Alphabetically sorted co-working spaces
export const coworkingSpaces: CoworkingSpace[] = [
  {
    id: "amazon",
    name: "Amazon Workspace",
    logo: "https://placehold.co/100x50/f8f9fa/343a40?text=Amazon",
    location: "Seattle, WA",
    rating: 4.7,
    priceRange: "$$$",
    amenities: ["High-speed WiFi", "Conference Rooms", "Coffee Bar"],
    description: "Premium workspace solutions from Amazon with cutting-edge technology integration."
  },
  {
    id: "awfis",
    name: "Awfis",
    logo: "https://placehold.co/100x50/f8f9fa/343a40?text=Awfis",
    location: "Mumbai, India",
    rating: 4.2,
    priceRange: "$$",
    amenities: ["24/7 Access", "Meeting Rooms", "Cafeteria"],
    description: "India's largest network of collaborative co-working spaces with premium amenities."
  },
  {
    id: "cognizant",
    name: "Cognizant Collaborative",
    logo: "https://placehold.co/100x50/f8f9fa/343a40?text=Cognizant",
    location: "Teaneck, NJ",
    rating: 4.0,
    priceRange: "$$",
    amenities: ["IT Support", "Conference Rooms", "Cafeteria"],
    description: "Technology-focused workspaces designed for innovation and collaboration."
  },
  {
    id: "google",
    name: "Google Campus",
    logo: "https://placehold.co/100x50/f8f9fa/343a40?text=Google",
    location: "Mountain View, CA",
    rating: 4.9,
    priceRange: "$$$",
    amenities: ["Recreation Areas", "Gourmet Cafeteria", "Nap Pods"],
    description: "Experience the Google work environment with all the perks and amenities."
  },
  {
    id: "hcltech",
    name: "HCLTech Hub",
    logo: "https://placehold.co/100x50/f8f9fa/343a40?text=HCLTech",
    location: "Noida, India",
    rating: 4.1,
    priceRange: "$$",
    amenities: ["Technical Support", "Meeting Rooms", "Training Centers"],
    description: "Technologically advanced workspaces focused on innovation and collaboration."
  },
  {
    id: "infosys",
    name: "Infosys Workspace",
    logo: "https://placehold.co/100x50/f8f9fa/343a40?text=Infosys",
    location: "Bangalore, India",
    rating: 4.3,
    priceRange: "$$",
    amenities: ["Green Campus", "Recreation Facilities", "Food Court"],
    description: "Eco-friendly workspaces with a focus on sustainability and comfort."
  },
  {
    id: "meta",
    name: "Meta Connect",
    logo: "https://placehold.co/100x50/f8f9fa/343a40?text=Meta",
    location: "Menlo Park, CA",
    rating: 4.6,
    priceRange: "$$$",
    amenities: ["VR Rooms", "Creative Studios", "Gourmet Food"],
    description: "Forward-thinking workspaces designed for creativity and innovation."
  },
  {
    id: "microsoft",
    name: "Microsoft Hub",
    logo: "https://placehold.co/100x50/f8f9fa/343a40?text=Microsoft",
    location: "Redmond, WA",
    rating: 4.8,
    priceRange: "$$$",
    amenities: ["Tech Support", "Gaming Areas", "Collaborative Spaces"],
    description: "Technology-focused workspaces with premium amenities and support services."
  },
  {
    id: "netflix",
    name: "Netflix Creative Space",
    logo: "https://placehold.co/100x50/f8f9fa/343a40?text=Netflix",
    location: "Los Gatos, CA",
    rating: 4.5,
    priceRange: "$$$",
    amenities: ["Screening Rooms", "Media Labs", "Relaxation Areas"],
    description: "Creative workspaces designed for media professionals and content creators."
  },
  {
    id: "oracle",
    name: "Oracle Innovation Hub",
    logo: "https://placehold.co/100x50/f8f9fa/343a40?text=Oracle",
    location: "Austin, TX",
    rating: 4.4,
    priceRange: "$$$",
    amenities: ["Database Resources", "Training Centers", "Conference Facilities"],
    description: "Data-focused workspaces with cutting-edge technology and resources."
  },
  {
    id: "raheja",
    name: "Raheja Mindspace",
    logo: "https://placehold.co/100x50/f8f9fa/343a40?text=Raheja",
    location: "Hyderabad, India",
    rating: 4.2,
    priceRange: "$$",
    amenities: ["Business Center", "Food Court", "Fitness Center"],
    description: "Premium business park offering versatile workspace solutions in prime locations."
  },
  {
    id: "tcs",
    name: "TCS Workspace",
    logo: "https://placehold.co/100x50/f8f9fa/343a40?text=TCS",
    location: "Mumbai, India",
    rating: 4.3,
    priceRange: "$$",
    amenities: ["IT Support", "Training Facilities", "Cafeteria"],
    description: "Technology-focused workspaces with comprehensive IT infrastructure and support."
  },
  {
    id: "techmahindra",
    name: "Tech Mahindra Space",
    logo: "https://placehold.co/100x50/f8f9fa/343a40?text=TechM",
    location: "Pune, India",
    rating: 4.0,
    priceRange: "$$",
    amenities: ["Tech Labs", "Conference Rooms", "Recreation Areas"],
    description: "Innovation-focused workspaces with advanced technological infrastructure."
  },
  {
    id: "wework",
    name: "WeWork",
    logo: "https://placehold.co/100x50/f8f9fa/343a40?text=WeWork",
    location: "New York, NY",
    rating: 4.5,
    priceRange: "$$$",
    amenities: ["Networking Events", "Free Beverages", "Wellness Rooms"],
    description: "Beautifully designed workspaces where teams and businesses grow together."
  },
  {
    id: "wipro",
    name: "Wipro Workspace",
    logo: "https://placehold.co/100x50/f8f9fa/343a40?text=Wipro",
    location: "Bangalore, India",
    rating: 4.1,
    priceRange: "$$",
    amenities: ["Innovation Labs", "Meeting Rooms", "Cafeteria"],
    description: "Technology-focused workspaces with comprehensive facilities and support services."
  }
];
