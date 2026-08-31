'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BackgroundTextureWatermark } from '@/components/BackgroundTextureWatermark';
import { Send, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const productOptions = [
    '1121 Steam Basmati Rice',
    '1121 Sella Basmati Rice',
    '1121 Golden Sella Basmati Rice',
    '1121 Creamy Sella Basmati Rice',
    '1509 Steam Basmati Rice',
    '1509 Golden Sella Basmati Rice',
    '1509 Creamy Sella Basmati Rice'
  ];

  const packageSizes = [
    '1 KG', '2 KG', '5 KG', '10 KG', '20 KG', '25 KG', '30 KG', '40 KG', '50 KG', 'Custom Private Label OEM'
  ];

  return (
    <div className="relative min-h-screen bg-[#1a3d2e] text-[#f4efe6] font-sans antialiased">
      <BackgroundTextureWatermark />
      <Navbar />

      {/* EXACT RECREATION OF REFERENCE CONTACT INQUIRY SECTION */}
      <section className="relative z-10 w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Contact Details */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#f4efe6] leading-tight">
                LET'S BUILD A
              </h1>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#f4efe6] leading-tight">
                GLOBAL PARTNERSHIP
              </h1>
            </div>

            <p className="text-xs sm:text-sm text-[#f4efe6]/80 leading-relaxed font-sans">
              Tell us what you need and our export team will prepare a competitive quotation based on your requirements.
            </p>

            <div className="space-y-4 pt-4 text-xs sm:text-sm text-[#f4efe6]">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full border border-[#c9a227] flex items-center justify-center text-[#c9a227] bg-[#10291e] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="font-mono text-xs">
                  <p>+91 97447 59329</p>
                  <p>+968 93843 669</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full border border-[#c9a227] flex items-center justify-center text-[#c9a227] bg-[#10291e] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <p>info@miraclebusinesshub.com</p>
                  <p>miraclegulfbusiness@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full border border-[#c9a227] flex items-center justify-center text-[#c9a227] bg-[#10291e] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <p>Kerala, India | Sohar, Oman</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3x3 Exact Reference Form Layout */}
          <div className="lg:col-span-8 bg-[#10291e] p-6 sm:p-8 rounded-lg border border-[#c9a227]/30 shadow-2xl">
            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#c9a227] mx-auto" />
                <h3 className="font-serif text-xl font-bold text-[#f4efe6]">Quotation Request Received</h3>
                <p className="text-xs text-[#f4efe6]/80">
                  Our export team will send the official CIF/FOB quotation to your email shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-[#c9a227] text-[#1a3d2e] font-bold text-xs rounded uppercase"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Row 1: Your Name*, Company Name*, Email* */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input 
                    type="text" 
                    placeholder="Your Name *" 
                    className="w-full px-4 py-3 rounded bg-[#1a3d2e] border border-[#c9a227]/30 text-xs text-[#f4efe6] placeholder-[#f4efe6]/60 focus:outline-none focus:border-[#c9a227]" 
                    required
                  />
                  <input 
                    type="text" 
                    placeholder="Company Name *" 
                    className="w-full px-4 py-3 rounded bg-[#1a3d2e] border border-[#c9a227]/30 text-xs text-[#f4efe6] placeholder-[#f4efe6]/60 focus:outline-none focus:border-[#c9a227]" 
                    required
                  />
                  <input 
                    type="email" 
                    placeholder="Email *" 
                    className="w-full px-4 py-3 rounded bg-[#1a3d2e] border border-[#c9a227]/30 text-xs text-[#f4efe6] placeholder-[#f4efe6]/60 focus:outline-none focus:border-[#c9a227]" 
                    required
                  />
                </div>

                {/* Row 2: WhatsApp/Phone*, Country*, Required Rice Variety* */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input 
                    type="tel" 
                    placeholder="WhatsApp / Phone *" 
                    className="w-full px-4 py-3 rounded bg-[#1a3d2e] border border-[#c9a227]/30 text-xs text-[#f4efe6] placeholder-[#f4efe6]/60 focus:outline-none focus:border-[#c9a227]" 
                    required
                  />
                  <input 
                    type="text" 
                    placeholder="Country *" 
                    className="w-full px-4 py-3 rounded bg-[#1a3d2e] border border-[#c9a227]/30 text-xs text-[#f4efe6] placeholder-[#f4efe6]/60 focus:outline-none focus:border-[#c9a227]" 
                    required
                  />
                  <select className="w-full px-4 py-3 rounded bg-[#1a3d2e] border border-[#c9a227]/30 text-xs text-[#f4efe6] focus:outline-none focus:border-[#c9a227]">
                    <option value="">Required Rice Variety *</option>
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Row 3: Packing Size*, Required Quantity*, Destination Port* */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <select className="w-full px-4 py-3 rounded bg-[#1a3d2e] border border-[#c9a227]/30 text-xs text-[#f4efe6] focus:outline-none focus:border-[#c9a227]">
                    <option value="">Packing Size *</option>
                    {packageSizes.map((sz) => (
                      <option key={sz} value={sz}>{sz}</option>
                    ))}
                  </select>
                  <input 
                    type="text" 
                    placeholder="Required Quantity *" 
                    className="w-full px-4 py-3 rounded bg-[#1a3d2e] border border-[#c9a227]/30 text-xs text-[#f4efe6] placeholder-[#f4efe6]/60 focus:outline-none focus:border-[#c9a227]" 
                    required
                  />
                  <input 
                    type="text" 
                    placeholder="Destination Port *" 
                    className="w-full px-4 py-3 rounded bg-[#1a3d2e] border border-[#c9a227]/30 text-xs text-[#f4efe6] placeholder-[#f4efe6]/60 focus:outline-none focus:border-[#c9a227]" 
                    required
                  />
                </div>

                {/* Message Field & Submit Button */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end pt-2">
                  <div className="lg:col-span-8">
                    <textarea 
                      rows={2} 
                      placeholder="Message" 
                      className="w-full px-4 py-3 rounded bg-[#1a3d2e] border border-[#c9a227]/30 text-xs text-[#f4efe6] placeholder-[#f4efe6]/60 focus:outline-none focus:border-[#c9a227]"
                    ></textarea>
                  </div>
                  <div className="lg:col-span-4">
                    <button 
                      type="submit" 
                      className="w-full py-3.5 rounded bg-[#c9a227] text-[#1a3d2e] font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center space-x-2 shadow-md hover:bg-[#d8b135] transition-colors"
                    >
                      <span>REQUEST A QUOTE →</span>
                    </button>
                  </div>
                </div>

              </form>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
