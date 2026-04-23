import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Heart, Search, Phone } from 'lucide-react';
import { CATEGORIES } from '../constants';
import { useAppContext } from '../AppContext';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { cart, wishlist } = useAppContext();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#E8E1D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="text-2xl font-bold uppercase tracking-[0.2em] text-[#C5A059]">MM HOME DECOR</span>
            </Link>
            <div className="hidden lg:ml-10 lg:flex lg:gap-8 min-h-[1px]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`inline-flex items-center px-1 pt-1 text-[11px] uppercase tracking-[0.2em] font-medium transition-all ${
                    location.pathname === link.path ? 'text-[#C5A059] border-b border-[#C5A059]' : 'text-[#3D2B1F]/60 hover:text-[#C5A059]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 text-[#3D2B1F]/70">
              <button className="hover:text-[#C5A059] transition-colors"><Search size={20} /></button>
              <Link to="/wishlist" className="relative hover:text-[#C5A059] transition-colors">
                <Heart size={20} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#C5A059] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {wishlist.length}
                  </span>
                )}
              </Link>
              <Link to="/cart" className="relative hover:text-[#C5A059] transition-colors">
                <ShoppingCart size={20} />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#C5A059] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {cart.length}
                  </span>
                )}
              </Link>
            </div>
            <a 
              href="https://wa.me/911234567890" 
              target="_blank" 
              rel="noreferrer"
              className="bg-[#3D2B1F] text-[#FAF9F6] px-8 py-2.5 text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-[#C5A059] transition-all"
            >
              Enquire Now
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-primary inline-flex items-center justify-center p-2 rounded-md"
            >
              <X className={isOpen ? 'block' : 'hidden'} size={24} />
              <Menu className={isOpen ? 'hidden' : 'block'} size={24} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex items-center gap-6 px-3">
                <Link to="/wishlist" onClick={() => setIsOpen(false)} className="text-gray-500 relative">
                  <Heart size={24} />
                  {wishlist.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                      {wishlist.length}
                    </span>
                  )}
                </Link>
                <Link to="/cart" onClick={() => setIsOpen(false)} className="text-gray-500 relative">
                  <ShoppingCart size={24} />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
