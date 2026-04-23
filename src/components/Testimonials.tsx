import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Anita Sharma',
    role: 'Homeowner, Delhi',
    content: 'The quality of the curtains and upholstery from MM Home Decor is unparalleled. They completely transformed my living room into a royal suite.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=anita'
  },
  {
    name: 'Vikram Malhotra',
    role: 'Interior Designer',
    content: 'As an architect, I always look for pieces that tell a story. MM Home Decor offers that perfect blend of traditional Indian soul and modern functionality.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=vikram'
  },
  {
    name: 'Priya Iyer',
    role: 'Tech Professional, Bangalore',
    content: 'I ordered their bedding set and some rugs. The delivery was fast, and the packaging was excellent. Highly recommended for premium home decor!',
    rating: 4,
    image: 'https://i.pravatar.cc/150?u=priya'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-muted p-10 rounded-[32px] relative flex flex-col h-full"
            >
              <Quote className="absolute top-8 right-8 text-primary/10" size={60} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < t.rating ? "currentColor" : "none"} 
                    className={i < t.rating ? "text-accent" : "text-gray-300"}
                  />
                ))}
              </div>

              <p className="text-gray-600 mb-8 italic leading-relaxed flex-grow">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-primary">{t.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
