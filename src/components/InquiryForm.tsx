import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';

export const InquiryForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Interior Consultation',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-12 text-center shadow-xl border border-gray-100 flex flex-col items-center justify-center min-h-[400px]">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6"
        >
          <CheckCircle size={40} />
        </motion.div>
        <h3 className="text-3xl font-serif mb-4">Thank You!</h3>
        <p className="text-gray-500 max-w-sm mx-auto">
          We've received your request. One of our decor experts will contact you within 24 hours.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-8 text-primary font-medium underline underline-offset-4"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <section className="py-24 overflow-hidden relative bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-[#E8E1D9]">
          <div className="lg:w-1/2 p-12 md:p-16 bg-[#3D2B1F] text-white flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-light italic mb-8 leading-tight">
              Let's Design Your <br />
              Interior Story
            </h2>
            <p className="text-white/70 mb-12 text-sm leading-relaxed font-sans uppercase tracking-[0.2em] font-medium">
              Expert advice for your bespoke home
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Personalized Curation</h4>
                  <p className="text-white/60 text-sm">We find pieces that match your specific style and budget.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Quality Assurance</h4>
                  <p className="text-white/60 text-sm">Every element is sourced from premium artisans across India.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-12 md:p-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Full Name</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-muted border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Phone Number</label>
                  <input
                    required
                    type="tel"
                    className="w-full bg-muted border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Email Address</label>
                <input
                  required
                  type="email"
                  className="w-full bg-muted border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400">How can we help?</label>
                <select
                  className="w-full bg-muted border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option>Interior Consultation</option>
                  <option>Product Inquiry</option>
                  <option>Bulk/Project Requirement</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-muted border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white font-bold h-16 rounded-xl hover:bg-accent transition-all flex items-center justify-center gap-3 shadow-lg hover:translate-y-[-2px] active:translate-y-0"
              >
                Submit Inquiry
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
