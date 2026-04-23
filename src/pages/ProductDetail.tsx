import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingCart, Heart, Phone, ArrowLeft, Check, Star, Share2 } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { formatPrice } from '../lib/utils';
import { useAppContext } from '../AppContext';

export const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, wishlist } = useAppContext();
  const product = PRODUCTS.find(p => p.id === id);
  
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="py-24 text-center">Product not found</div>;
  }

  const isWishlisted = wishlist.some(i => i.id === product.id);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft size={18} />
          Back to Shop
        </button>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Gallery */}
          <div className="lg:w-1/2 space-y-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-square rounded-full overflow-hidden bg-secondary border border-[#E8E1D9] p-4"
            >
              <img
                src={product.images[activeImage] || product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-full grayscale-[10%]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            {product.images.length > 1 && (
              <div className="flex justify-center gap-6">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-16 h-16 rounded-full overflow-hidden border-2 transition-all p-1 ${activeImage === idx ? 'border-[#C5A059]' : 'border-transparent'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover rounded-full" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="lg:w-1/2">
            <div className="mb-12">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#C5A059] mb-6">
                <span className="border-b border-accent pb-1">{product.category}</span>
                {product.bestSeller && <span className="bg-[#3D2B1F] text-white px-3 py-1 rounded-full text-[8px]">Best Seller</span>}
              </div>
              <h1 className="text-4xl md:text-5xl font-light italic mb-6">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="flex gap-0.5 text-[#C5A059]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="text-[11px] uppercase tracking-widest text-[#3D2B1F]/40 font-bold">Verified Organic Craft</span>
              </div>

              <p className="text-3xl font-light font-sans text-[#3D2B1F] mb-10">{formatPrice(product.price)}</p>
              <p className="text-[#3D2B1F]/60 leading-relaxed text-sm font-sans mb-10">{product.description}</p>
              
              <div className="space-y-4 mb-12">
                {product.features.map(f => (
                  <div key={f} className="flex items-center gap-3 text-[11px] uppercase tracking-widest font-bold text-[#3D2B1F]/80">
                    <Check size={14} className="text-[#C5A059]" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center bg-[#FAF9F6] border border-[#E8E1D9] rounded-full px-4 py-2">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-lg px-4 hover:text-accent">-</button>
                  <span className="font-bold w-10 text-center text-sm">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="text-lg px-4 hover:text-accent">+</button>
                </div>
                
                <button 
                  onClick={() => addToCart(product)}
                  className="flex-grow bg-[#3D2B1F] text-[#FAF9F6] px-10 py-4 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-[#C5A059] transition-all shadow-xl shadow-[#3D2B1F]/10"
                >
                  Add to Cart
                </button>
              </div>

              <div className="mt-10 flex items-center gap-8">
                <button 
                  onClick={() => toggleWishlist(product)}
                  className={`flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold transition-colors ${isWishlisted ? 'text-accent' : 'text-gray-400 hover:text-primary'}`}
                >
                  <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
                  {isWishlisted ? 'Saved' : 'Wishlist'}
                </button>
              </div>
            </div>

            <div className="bg-[#FAF9F6] border border-[#E8E1D9] p-10 rounded-[40px]">
              <h3 className="font-serif italic text-2xl mb-4">Interior Consultation</h3>
              <p className="text-[11px] uppercase tracking-widest text-gray-500 mb-8 font-medium leading-relaxed">
                Expert advice for your bespoke home
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://wa.me/911234567890" 
                  className="bg-[#25D366] text-white flex items-center gap-3 px-8 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold hover:scale-105 transition-transform"
                >
                  WhatsApp Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
