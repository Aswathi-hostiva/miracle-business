import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-20 bg-[#122b20] text-[#f4efe6] pt-12 sm:pt-16 pb-10 sm:pb-12 border-t border-[#c9a227]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-[#c9a227]/20">
          
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-1">
              <Image
                src="/images/miracle_png.png"
                alt="Taste of Miracle logo"
                width={200}
                height={200}
                className="h-32 sm:h-36 w-auto shrink-0 object-contain -mr-3"
              />
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#c9a227] tracking-wider">TASTE OF MIRACLE™️</h3>
                <p className="text-[10px] sm:text-xs text-[#f4efe6]/70 uppercase tracking-widest font-mono">MIRACLE BUSINESS HUB</p>
              </div>
            </div>
            <p className="text-xs text-[#f4efe6]/80 leading-relaxed max-w-md mx-auto md:mx-0">
              Connecting premium Indian agricultural products with international markets. Our Basmati rice is carefully sourced, processed, and packed in Karnal, Haryana, India.
            </p>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-6 space-y-3 font-sans text-center md:text-left">
            <h4 className="font-serif text-sm font-bold text-[#c9a227] uppercase tracking-wider">Export Contact Information</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#f4efe6]/85">
              <div>
                <p className="font-bold text-[#f4efe6]">India Contact:</p>
                <p className="font-mono text-[#c9a227]">+91 97447 59329</p>
                <p className="mt-2 font-bold text-[#f4efe6]">Middle East Contact:</p>
                <p className="font-mono text-[#c9a227]">+968 93843 669</p>
              </div>
              <div>
                <p className="font-bold text-[#f4efe6]">Official Emails:</p>
                <p className="text-[#c9a227] break-all">info@miraclebusinesshub.com</p>
                <p className="text-[#c9a227] break-all">miraclegulfbusiness@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#f4efe6]/60 gap-3 sm:gap-4 text-center">
          <p>© {new Date().getFullYear()} MIRACLE BUSINESS HUB. Brand: TASTE OF MIRACLE™️. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-6 items-center">
            <span>Kerala, India (Head Office)</span>
            <span>Sohar, Sultanate of Oman (Control Office)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};