import React from 'react';
import { Hero } from '../components/Hero';
import { CategoryGrid } from '../components/CategoryGrid';
import { ProductSection } from '../components/ProductSection';
import { InquiryForm } from '../components/InquiryForm';
import { Testimonials } from '../components/Testimonials';
import { PRODUCTS } from '../constants';

export const Home: React.FC = () => {
  const trendingProducts = PRODUCTS.filter(p => p.trending);
  const bestSellers = PRODUCTS.filter(p => p.bestSeller);

  return (
    <div className="flex flex-col">
      <Hero />
      <CategoryGrid />
      <ProductSection 
        title="Best Selling Products" 
        subtitle="Our most loved pieces, handpicked by our customers for their exceptional quality and timeless design."
        products={bestSellers} 
      />
      <section className="bg-[#3D2B1F] py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-light italic mb-8 leading-tight text-[#C5A059]">Bespoke Craft <br /> For Real Life</h2>
            <p className="text-white/60 text-base md:text-lg mb-10 max-w-md font-sans leading-relaxed">
              We believe every corner of your home should reflect your personal story. Our designers work tirelessly to bring you the finest textiles and furnishings.
            </p>
            <div className="flex gap-12">
              <div>
                <span className="text-4xl font-light text-[#C5A059] block italic">25+</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Years Heritage</span>
              </div>
              <div>
                <span className="text-4xl font-light text-[#C5A059] block italic">10k+</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Project Homes</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
             <div className="rounded-full overflow-hidden border border-white/10 aspect-[3/4] mt-12 bg-secondary">
               <img src="https://picsum.photos/seed/h1/400/500" alt="Home Decor" className="w-full h-full object-cover grayscale-[30%]" referrerPolicy="no-referrer" />
             </div>
             <div className="rounded-full overflow-hidden border border-white/10 aspect-[3/4] bg-secondary">
               <img src="https://picsum.photos/seed/h2/400/500" alt="Home Decor" className="w-full h-full object-cover grayscale-[10%]" referrerPolicy="no-referrer" />
             </div>
          </div>
        </div>
      </section>
      <ProductSection 
        title="Trending Decor Ideas" 
        subtitle="Stay ahead of the curve with our latest arrivals and seasonal trends."
        products={trendingProducts}
        bgColor="bg-white"
      />
      <Testimonials />
      <InquiryForm />
    </div>
  );
};
