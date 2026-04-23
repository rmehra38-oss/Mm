import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../constants';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3D2B1F] text-[#FAF9F6] pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-bold tracking-[0.2em] text-[#C5A059] uppercase italic">MM HOME DECOR</Link>
            <p className="text-white/60 text-[11px] uppercase tracking-widest leading-relaxed">
              Bespoke curtains, upholstery, and fine bedding crafted for the modern Indian home.
            </p>
            <div className="flex gap-6 items-center opacity-80">
              <a href="#" className="hover:text-[#C5A059] transition-colors">IG</a>
              <a href="#" className="hover:text-[#C5A059] transition-colors">FB</a>
              <a href="#" className="hover:text-[#C5A059] transition-colors">PN</a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C5A059] mb-8">Quick Links</h4>
            <ul className="space-y-4 text-[10px] uppercase tracking-[0.2em] text-white/70">
              <li><Link to="/" className="hover:text-[#C5A059] transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-[#C5A059] transition-colors">Shop</Link></li>
              <li><Link to="/about" className="hover:text-[#C5A059] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#C5A059] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C5A059] mb-8">Collections</h4>
            <ul className="space-y-4 text-[10px] uppercase tracking-[0.2em] text-white/70">
              {CATEGORIES.slice(0, 4).map(cat => (
                <li key={cat.id}>
                  <Link to={`/shop?category=${cat.id}`} className="hover:text-[#C5A059] transition-colors">{cat.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C5A059] mb-8">Store Location</h4>
            <ul className="space-y-4 text-[10px] uppercase tracking-[0.2em] text-white/70">
              <li className="flex gap-3">
                <span className="text-lg opacity-100">📍</span>
                <span>Kalanaur, Rohtak, Haryana</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lg opacity-100">📞</span>
                <span>+91 86073 73573</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-white/40 gap-4">
          <p>© 2026 MM Home Decor. All rights reserved.</p>
          <a href="https://wa.me/918607373573" target="_blank" rel="noreferrer" className="flex gap-6 bg-[#25D366] px-4 py-1.5 rounded-full text-white font-bold cursor-pointer hover:scale-105 transition-transform">
             <span className="text-sm">💬</span> WhatsApp Chat
          </a>
        </div>
      </div>
    </footer>
  );
};
