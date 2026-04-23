import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Award, Leaf, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6]">
      {/* Hero */}
      <section className="bg-[#E8E1D9] py-32 border-b border-[#3D2B1F]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-light italic mb-10 text-[#3D2B1F]"
          >
            A Heritage of <br /> Artisanal Living
          </motion.h1>
          <p className="text-[#3D2B1F]/60 max-w-2xl mx-auto text-sm uppercase tracking-[0.25em] font-bold leading-relaxed">
            Crafting premium home furnishing solutions <br /> for the modern Indian landscape.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2">
            <div className="rounded-full overflow-hidden aspect-[3/4] border border-[#E8E1D9] p-8 bg-white shadow-2xl">
              <img 
                src="https://picsum.photos/seed/about/800/1000" 
                alt="Our Story" 
                className="w-full h-full object-cover rounded-full grayscale-[20%]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="lg:w-1/2 space-y-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#C5A059] mb-4 block">Est. 1995</span>
              <h2 className="text-5xl font-light italic">The MM Home Journey</h2>
            </div>
            <p className="text-[#3D2B1F]/50 leading-relaxed text-sm font-sans italic tracking-wide">
              "We didn't just want to sell decor; we wanted to provide a soul to every room we touched."
            </p>
            <p className="text-[#3D2B1F]/70 leading-relaxed font-sans text-sm">
              Founded in 1995, MM Home Decor started as a boutique textile shop in the heart of Delhi. Over three decades, we have evolved into a full-service home furnishing destination, providing customized curtains, blinds, and upholstery to thousands of homes across India.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
              <div className="space-y-4">
                <Award size={28} className="text-[#C5A059]" />
                <h4 className="text-[11px] uppercase tracking-[0.25em] font-bold">Award Winning Design</h4>
                <p className="text-xs text-[#3D2B1F]/50 leading-relaxed uppercase tracking-wider">Recognized for excellence in Indian furnishings.</p>
              </div>
              <div className="space-y-4">
                <Leaf size={28} className="text-[#C5A059]" />
                <h4 className="text-[11px] uppercase tracking-[0.25em] font-bold">Sustainable Roots</h4>
                <p className="text-xs text-[#3D2B1F]/50 leading-relaxed uppercase tracking-wider">Committed to ethical labor and organic sourcing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-32 border-y border-[#E8E1D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-light italic mb-4">Values that Define Us</h2>
            <div className="w-24 h-0.5 bg-[#C5A059] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: 'Exquisite Craft', desc: 'Working with master artisans to ensure every stitch and weave is perfect.', icon: <Award size={32} /> },
              { title: 'Personalized Touch', desc: 'Because every home is unique, our decor is tailored strictly to your vision.', icon: <Users size={32} /> },
              { title: 'Timeless Style', desc: 'Designs that remain relevant and beautiful as the seasons pass by.', icon: <CheckCircle size={32} /> }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-8 text-[#C5A059] group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="text-[12px] uppercase tracking-[0.3em] font-bold mb-6">{value.title}</h3>
                <p className="text-[#3D2B1F]/50 leading-relaxed text-xs uppercase tracking-wider px-4">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
