
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "What is a coworking space?",
      answer: "A coworking space is a shared workplace where professionals from different companies and backgrounds work under the same roof. These spaces offer amenities like high-speed internet, meeting rooms, kitchen facilities, and more to create a productive work environment."
    },
    {
      question: "What are the benefits of using a coworking space?",
      answer: "Coworking spaces offer numerous benefits including flexible membership options, professional environments, networking opportunities, cost savings compared to traditional offices, and amenities like high-speed internet, meeting rooms, and refreshments."
    },
    {
      question: "How much does a coworking space cost?",
      answer: "Our coworking spaces are available at a standard rate of $150 per month. This price includes access to all basic amenities, high-speed internet, and common areas. Premium amenities or private offices may have additional costs."
    },
    {
      question: "Do I need to book in advance?",
      answer: "While walk-ins are welcome at many locations, we recommend booking in advance, especially if you need specific amenities or want to ensure availability during peak hours. Most spaces can be reserved through our platform with just a few clicks."
    },
    {
      question: "Can I use a coworking space for just one day?",
      answer: "Yes, many of our coworking spaces offer day passes for those who need temporary workspace. You can book a day pass through our platform, which gives you access to all the standard amenities for the day."
    },
    {
      question: "Are there private spaces available for meetings or calls?",
      answer: "Yes, most coworking spaces offer private meeting rooms, phone booths, or quiet zones that can be reserved for calls or meetings. These can typically be booked hourly or daily through our platform or at the space itself."
    },
    {
      question: "What amenities are typically available?",
      answer: "Common amenities include high-speed WiFi, printing facilities, meeting rooms, coffee and refreshments, kitchen facilities, comfortable workstations, and sometimes extras like gyms, nap rooms, or event spaces. Each listing details the specific amenities available."
    },
    {
      question: "How do I cancel my booking or membership?",
      answer: "Cancellation policies vary by location and membership type. Generally, day passes can be cancelled with 24 hours notice, while monthly memberships may require 30 days notice. Check the specific terms for your chosen space on our platform."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-background">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Can't find an answer to your question?
          </p>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-primary hover:underline"
          >
            Contact us directly
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
