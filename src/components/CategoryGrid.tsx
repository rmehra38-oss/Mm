import React from 'react';
import { motion } from 'motion/react';
import { CATEGORIES } from '../constants';
import { Link } from 'react-router-dom';

export const CategoryGrid: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Collections</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto">
            From artisanal curtains to plush rugs, explore our wide range of premium home decor categories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
                <div className="w-full aspect-[4/5] bg-secondary rounded-full overflow-hidden border-2 border-transparent group-hover:border-accent transition-all duration-500">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-[11px] uppercase tracking-[0.3em] font-sans font-bold">{category.name}</h3>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
