
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-8">About CoWorkSpot</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-muted-foreground mb-6">
              At CoWorkSpot, we're on a mission to transform how professionals work by connecting them with 
              inspiring workspaces that foster productivity, collaboration, and wellbeing.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Our Story</h3>
            <p className="text-muted-foreground mb-6">
              Founded in 2023, CoWorkSpot emerged from a simple observation: modern professionals need 
              flexible, accessible, and inspiring places to work. Our platform curates the best coworking 
              spaces across major cities, making it easy to discover your perfect workspace.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Access to premium coworking spaces from leading providers</li>
              <li>Transparent pricing with no hidden fees</li>
              <li>Flexible booking options - daily, weekly, or monthly plans</li>
              <li>Verified reviews from real members</li>
              <li>Dedicated customer support to assist with your needs</li>
            </ul>
          </div>
          
          <div className="bg-muted p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Community First</h4>
                <p className="text-sm text-muted-foreground">
                  We believe in the power of community and connection. Our spaces foster meaningful 
                  interactions and collaborative opportunities.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Quality Spaces</h4>
                <p className="text-sm text-muted-foreground">
                  We carefully vet each space for amenities, comfort, and productivity features to 
                  ensure you have everything you need to do your best work.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Flexibility</h4>
                <p className="text-sm text-muted-foreground">
                  Work is evolving, and we embrace flexibility. Our platform offers options for 
                  every work style and schedule.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Sustainability</h4>
                <p className="text-sm text-muted-foreground">
                  We prioritize environmentally conscious workspaces and practices, contributing 
                  to a more sustainable future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
