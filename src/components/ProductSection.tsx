import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Product } from '../types';
import { formatPrice } from '../lib/utils';
import { useAppContext } from '../AppContext';

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  bgColor?: string;
}

export const ProductSection: React.FC<ProductSectionProps> = ({ title, subtitle, products, bgColor = "bg-muted" }) => {
  const { addToCart, toggleWishlist, wishlist } = useAppContext();

  return (
    <section className={`py-24 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-light italic mb-4">{title}</h2>
            {subtitle && <p className="text-gray-500 max-w-xl font-sans text-sm">{subtitle}</p>}
          </div>
          <Link to="/shop" className="text-[11px] uppercase tracking-[0.2em] font-bold text-accent border-b border-accent pb-1">
            View All Products
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const isWishlisted = wishlist.some(i => i.id === product.id);
            
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-border-warm flex flex-col justify-between"
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale-[20%]"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button 
                      onClick={() => addToCart(product)}
                      className="w-10 h-10 rounded-full border border-primary flex items-center justify-center bg-white text-primary hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0"
                    >
                      <ShoppingCart size={18} />
                    </button>
                    <Link 
                      to={`/product/${product.id}`}
                      className="w-10 h-10 rounded-full border border-primary flex items-center justify-center bg-white text-primary hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 delay-75"
                    >
                      <Eye size={18} />
                    </Link>
                  </div>

                  {product.trending && (
                    <span className="absolute top-4 left-4 bg-accent text-white text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                      Trending
                    </span>
                  )}
                  {product.bestSeller && (
                    <span className="absolute top-4 left-4 bg-primary text-white text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                      Best Seller
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <p className="text-[9px] text-accent font-bold uppercase tracking-[0.3em] mb-2 font-sans">
                    {product.category}
                  </p>
                  <Link to={`/product/${product.id}`} className="block">
                    <h3 className="text-xl font-serif mb-2 group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-primary font-sans font-light text-lg">
                      {formatPrice(product.price)}
                    </p>
                    <button 
                      onClick={() => addToCart(product)}
                      className="w-8 h-8 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                    >
                      +
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
