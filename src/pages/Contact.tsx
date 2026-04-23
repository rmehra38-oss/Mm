import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { InquiryForm } from '../components/InquiryForm';

export const Contact: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6]">
      {/* Header */}
      <section className="bg-white py-32 border-b border-[#E8E1D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-light italic mb-8">Contact Us</h1>
          <p className="text-[#3D2B1F]/50 max-w-2xl mx-auto text-[10px] uppercase tracking-[0.3em] font-bold">
            Visit our flagship showroom or connect with our designers online.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          <div className="p-10 rounded-[40px] bg-white border border-[#E8E1D9] flex flex-col items-center text-center">
             <div className="w-14 h-14 rounded-full bg-[#3D2B1F] text-white flex items-center justify-center mb-8">
                <Phone size={24} />
             </div>
             <h3 className="font-serif italic text-2xl mb-2">Phone</h3>
             <p className="text-[#3D2B1F]/60 text-sm mb-6">+91 98765 43210</p>
             <a href="tel:+919876543210" className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#C5A059] border-b border-[#C5A059] pb-1">Call Now</a>
          </div>

          <div className="p-10 rounded-[40px] bg-white border border-[#E8E1D9] flex flex-col items-center text-center">
             <div className="w-14 h-14 rounded-full bg-[#C5A059] text-white flex items-center justify-center mb-8">
                <Mail size={24} />
             </div>
             <h3 className="font-serif italic text-2xl mb-2">Email</h3>
             <p className="text-[#3D2B1F]/60 text-sm mb-6">hello@mmhomedecor.com</p>
             <a href="mailto:hello@mmhomedecor.com" className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#C5A059] border-b border-[#C5A059] pb-1">Write Us</a>
          </div>

          <div className="p-10 rounded-[40px] bg-white border border-[#E8E1D9] flex flex-col items-center text-center">
             <div className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center mb-8">
                <MessageCircle size={24} />
             </div>
             <h3 className="font-serif italic text-2xl mb-2">WhatsApp</h3>
             <p className="text-[#3D2B1F]/60 text-sm mb-6">Expert chat support</p>
             <a href="https://wa.me/911234567890" className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#C5A059] border-b border-[#C5A059] pb-1">Chat Now</a>
          </div>

          <div className="p-10 rounded-[40px] bg-white border border-[#E8E1D9] flex flex-col items-center text-center">
             <div className="w-14 h-14 rounded-full bg-secondary text-[#3D2B1F] flex items-center justify-center mb-8">
                <Clock size={24} />
             </div>
             <h3 className="font-serif italic text-2xl mb-2">Hours</h3>
             <div className="text-[10px] uppercase tracking-widest text-[#3D2B1F]/50 space-y-1">
                <p>Mon - Sat: 10am - 8pm</p>
                <p>Sun: By Appointment</p>
             </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-24 items-start">
          <div className="lg:w-2/3">
             <InquiryForm />
          </div>
          <div className="lg:w-1/3 w-full">
            <div className="bg-[#E8E1D9]/30 rounded-[40px] overflow-hidden p-10 h-full border border-[#E8E1D9] text-center flex flex-col items-center justify-center">
               <MapPin size={48} className="text-[#C5A059] mb-8" />
               <h3 className="text-3xl font-serif italic mb-4">Our Flagship</h3>
               <p className="text-sm text-[#3D2B1F]/60 leading-relaxed font-sans mb-10">
                 124 Design Hub, <br /> MG Road, New Delhi, <br /> 110001, India
               </p>
               <a 
                 href="https://goo.gl/maps/placeholder" 
                 target="_blank" 
                 rel="noreferrer"
                 className="bg-[#3D2B1F] text-white px-10 py-3 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-[#C5A059] transition-all"
               >
                 View on Maps
               </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
