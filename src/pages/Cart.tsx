import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Trash2, ArrowRight, Minus, Plus } from 'lucide-react';
import { formatPrice } from '../lib/utils';
import { useAppContext } from '../AppContext';
import { Link } from 'react-router-dom';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useAppContext();
  
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 10000 ? 0 : 500;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <div className="bg-muted w-32 h-32 rounded-full flex items-center justify-center mb-8">
           <ShoppingCart size={48} className="text-gray-300" />
        </div>
        <h1 className="text-3xl md:text-5xl font-serif mb-6">Your cart is empty</h1>
        <p className="text-gray-500 mb-10 text-center max-w-sm">Looks like you haven't added anything to your cart yet. Let's find something beautiful for your home.</p>
        <Link to="/shop" className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-accent transition-all">
          Explore Best Sellers
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-light italic mb-16">Your Bag</h1>
        
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Items */}
          <div className="lg:w-2/3 space-y-8">
            {cart.map(item => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-[40px] border border-[#E8E1D9] flex flex-col sm:flex-row gap-10 items-center"
              >
                <div className="w-32 h-40 rounded-full overflow-hidden bg-[#E8E1D9]/30 flex-shrink-0 p-2">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-full" referrerPolicy="no-referrer" />
                </div>
                
                <div className="flex-grow text-center sm:text-left">
                  <p className="text-[9px] text-[#C5A059] font-bold uppercase tracking-[0.3em] mb-2">{item.category}</p>
                  <h3 className="text-2xl font-serif mb-2">
                    <Link to={`/product/${item.id}`} className="hover:text-[#C5A059] transition-colors">{item.name}</Link>
                  </h3>
                  <p className="text-[#3D2B1F]/60 font-sans text-sm mb-4">{formatPrice(item.price)}</p>
                </div>

                <div className="flex items-center bg-[#FAF9F6] border border-[#E8E1D9] rounded-full px-4 py-2">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:text-[#C5A059]"><Minus size={16} /></button>
                  <span className="font-bold w-12 text-center text-sm">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:text-[#C5A059]"><Plus size={16} /></button>
                </div>

                <div className="text-right hidden sm:block min-w-[100px]">
                  <p className="font-bold text-lg text-[#3D2B1F]">{formatPrice(item.price * item.quantity)}</p>
                </div>

                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-300 hover:text-red-500 transition-colors p-2"
                >
                  <Trash2 size={22} />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white p-12 rounded-[40px] border border-[#E8E1D9] sticky top-32 shadow-xl shadow-[#3D2B1F]/5">
              <h2 className="text-2xl font-serif italic mb-10 border-b border-[#E8E1D9] pb-6">Order Summary</h2>
              
              <div className="space-y-6 mb-10 text-[11px] uppercase tracking-[0.2em] font-bold">
                <div className="flex justify-between text-[#3D2B1F]/40">
                  <span>Subtotal</span>
                  <span className="text-[#3D2B1F]">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-[#3D2B1F]/40">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? <span className="text-green-600">Free</span> : formatPrice(shipping)}</span>
                </div>
                <div className="pt-8 border-t border-[#E8E1D9] flex justify-between text-xl font-serif text-[#3D2B1F]">
                  <span className="italic font-light">Total</span>
                  <span className="font-bold">{formatPrice(total)}</span>
                </div>
              </div>

              <button className="w-full bg-[#3D2B1F] text-white h-16 rounded-full text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-[#C5A059] transition-all shadow-xl shadow-[#3D2B1F]/10 mb-8">
                Proceed to Checkout
              </button>
              
              <div className="text-center">
                 <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">Secure Payment Options</p>
                 <div className="flex justify-center gap-4 opacity-30 grayscale">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" referrerPolicy="no-referrer" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" referrerPolicy="no-referrer" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard" className="h-4" referrerPolicy="no-referrer" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
