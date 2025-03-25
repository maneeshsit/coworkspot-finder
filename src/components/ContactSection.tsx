
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-secondary/30">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <p className="text-muted-foreground mb-8">
              Have questions about our coworking spaces or need help finding the perfect workspace? 
              Our team is here to help. Reach out through the form or using our contact details below.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">Address</h4>
                  <p className="text-sm text-muted-foreground">
                    123 Workspace Avenue<br />
                    Tech Hub District<br />
                    Bangalore, 560001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-sm text-muted-foreground">
                    info@coworkspot.com<br />
                    support@coworkspot.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-sm text-muted-foreground">
                    +91 (80) 1234 5678<br />
                    +91 9876 543 210
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium mb-3">Working Hours</h4>
              <p className="text-sm text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
          
          <div className="bg-background p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="Message subject" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Type your message here..."
                  rows={5}
                />
              </div>
              
              <Button type="submit" className="w-full">Send Message</Button>
              
              <p className="text-xs text-muted-foreground text-center mt-2">
                We'll get back to you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
