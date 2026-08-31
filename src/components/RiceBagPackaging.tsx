import React from 'react';

export const RiceBagPackaging: React.FC = () => {
  return (
    <div className="relative w-full max-w-[650px] mx-auto pt-6 pb-6 px-2 select-none overflow-visible">
      {/* Studio Ground Shadows */}
      <div className="absolute bottom-2 inset-x-4 h-10 bg-[#12372A]/25 blur-2xl rounded-full pointer-events-none" />

      {/* 4 Standing Rice Packages Composition - scrolls horizontally on very small screens instead of breaking layout */}
      <div className="relative flex items-end justify-start sm:justify-center space-x-1 sm:space-x-2 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0">
        
        {/* BAG 1: 1 KG Dark Green Package (Smallest on left) */}
        <div className="relative shrink-0 w-16 sm:w-24 lg:w-28 aspect-[3/4.5] rounded-t-xl bg-gradient-to-b from-[#12372A] via-[#0d2a1f] to-[#071912] text-[#f4efe6] p-2 sm:p-2.5 flex flex-col justify-between border-t border-l border-r border-[#C9A24A]/40 shadow-xl transform translate-y-2">
          {/* Specular sheen */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white/20 via-white/5 to-transparent pointer-events-none rounded-t-xl" />
          <div className="absolute bottom-0 inset-x-0 h-6 bg-black/30 pointer-events-none" />

          {/* Top Logo & Gold Emblem */}
          <div className="relative z-10 text-center space-y-0.5 mt-1">
            <div className="w-5 h-5 mx-auto text-[#C9A24A]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 2C11.5 5 9.5 7.5 7 9c2.5 1.5 4.5 4 5 7 0.5-3 2.5-5.5 5-7-2.5-1.5-4.5-4-5-7z" />
              </svg>
            </div>
            <p className="font-serif text-[6.5px] sm:text-[8.5px] font-black text-[#C9A24A] tracking-widest leading-none uppercase">TASTE OF</p>
            <p className="font-serif text-[8px] sm:text-[10px] font-black text-[#f4efe6] tracking-widest leading-none uppercase">MIRACLE™</p>
            <p className="text-[5px] sm:text-[6.5px] font-mono text-[#C9A24A] font-bold tracking-wider">BASMATI RICE</p>
            <p className="text-[4.5px] sm:text-[5px] text-stone-300">أرز بسمتي فاخر</p>
          </div>

          {/* Half-oval bowl with white cooked rice & gold wheat ears */}
          <div className="relative z-10 w-12 sm:w-16 h-7 sm:h-8 mx-auto -mb-1 flex items-end justify-center">
            <div className="relative w-full h-6 sm:h-7 rounded-b-full bg-gradient-to-b from-[#e3d7c3] via-[#bfae91] to-[#806f52] p-0.5 border-t border-[#C9A24A]/60 shadow-md overflow-hidden">
              <div className="w-full h-full rounded-b-full bg-gradient-to-b from-[#ffffff] via-[#f7f4ed] to-[#ede3d1] flex items-center justify-center">
                <div className="w-full h-full opacity-90 bg-[radial-gradient(#12372a_1px,transparent_1px)] [background-size:3px_3px]" />
              </div>
            </div>
          </div>

          {/* Gold Weight Pill Box at Bottom */}
          <div className="relative z-10 text-[6px] sm:text-[8px] font-mono text-center font-bold bg-[#C9A24A] text-[#12372A] py-0.5 rounded shadow-xs">
            1 KG
          </div>
        </div>

        {/* BAG 2: 5 KG Cream / Off-White Package */}
        <div className="relative shrink-0 w-20 sm:w-28 lg:w-32 aspect-[3/4.5] rounded-t-xl bg-gradient-to-b from-[#fbf8f0] via-[#f3ebe0] to-[#e4d6c4] text-[#12372A] p-2.5 sm:p-3 flex flex-col justify-between border-t border-l border-r border-[#C9A24A]/60 shadow-2xl z-10 transform -translate-y-1">
          <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-white/40 via-white/10 to-transparent pointer-events-none rounded-t-xl" />
          <div className="absolute bottom-0 inset-x-0 h-6 bg-stone-900/15 pointer-events-none" />

          {/* Top Logo & Gold Emblem */}
          <div className="relative z-10 text-center space-y-0.5 mt-1">
            <div className="w-6 h-6 mx-auto text-[#C9A24A]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 2C11.5 5 9.5 7.5 7 9c2.5 1.5 4.5 4 5 7 0.5-3 2.5-5.5 5-7-2.5-1.5-4.5-4-5-7z" />
              </svg>
            </div>
            <p className="font-serif text-[7.5px] sm:text-[9.5px] font-black text-[#C9A24A] tracking-widest leading-none uppercase">TASTE OF</p>
            <p className="font-serif text-[9px] sm:text-[11px] font-black text-[#12372A] tracking-widest leading-none uppercase">MIRACLE™</p>
            <p className="text-[5.5px] sm:text-[7.5px] font-mono text-[#C9A24A] font-bold tracking-wider">BASMATI RICE</p>
            <p className="text-[5px] sm:text-[5.5px] text-stone-600">أرز بسمتي فاخر</p>
          </div>

          {/* Half-oval bowl with white cooked rice & gold wheat ears */}
          <div className="relative z-10 w-14 sm:w-20 h-8 sm:h-9 mx-auto -mb-1 flex items-end justify-center">
            <div className="relative w-full h-7 sm:h-8 rounded-b-full bg-gradient-to-b from-[#e3d7c3] via-[#bfae91] to-[#806f52] p-0.5 border-t border-[#C9A24A]/60 shadow-md overflow-hidden">
              <div className="w-full h-full rounded-b-full bg-gradient-to-b from-[#ffffff] via-[#f7f4ed] to-[#ede3d1] flex items-center justify-center">
                <div className="w-full h-full opacity-90 bg-[radial-gradient(#12372a_1px,transparent_1px)] [background-size:3px_3px]" />
              </div>
            </div>
          </div>

          {/* Gold Weight Pill Box at Bottom */}
          <div className="relative z-10 text-[6.5px] sm:text-[8.5px] font-mono text-center font-bold bg-[#C9A24A] text-[#12372A] py-0.5 rounded shadow-xs">
            5 KG
          </div>
        </div>

        {/* BAG 3: 10 KG Dark Green Package */}
        <div className="relative shrink-0 w-24 sm:w-32 lg:w-36 aspect-[3/4.5] rounded-t-xl bg-gradient-to-b from-[#12372A] via-[#0b251c] to-[#051710] text-[#f4efe6] p-3 sm:p-3.5 flex flex-col justify-between border-t border-l border-r border-[#C9A24A]/50 shadow-2xl z-20 transform -translate-y-2">
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/20 via-white/5 to-transparent pointer-events-none rounded-t-xl" />
          <div className="absolute bottom-0 inset-x-0 h-8 bg-black/40 pointer-events-none" />

          {/* Top Logo & Gold Emblem */}
          <div className="relative z-10 text-center space-y-0.5 mt-1">
            <div className="w-7 h-7 mx-auto text-[#C9A24A]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 2C11.5 5 9.5 7.5 7 9c2.5 1.5 4.5 4 5 7 0.5-3 2.5-5.5 5-7-2.5-1.5-4.5-4-5-7z" />
              </svg>
            </div>
            <p className="font-serif text-[8px] sm:text-[10px] font-black text-[#C9A24A] tracking-widest leading-none uppercase">TASTE OF</p>
            <p className="font-serif text-[10px] sm:text-[12px] font-black text-[#f4efe6] tracking-widest leading-none uppercase">MIRACLE™</p>
            <p className="text-[6px] sm:text-[8px] font-mono text-[#C9A24A] font-bold tracking-wider">BASMATI RICE</p>
            <p className="text-[5.5px] sm:text-[6px] text-stone-300">أرز بسمتي فاخر</p>
          </div>

          {/* Half-oval bowl with white cooked rice & gold wheat ears */}
          <div className="relative z-10 w-16 sm:w-24 h-9 sm:h-10 mx-auto -mb-1 flex items-end justify-center">
            <div className="relative w-full h-8 sm:h-9 rounded-b-full bg-gradient-to-b from-[#e3d7c3] via-[#bfae91] to-[#806f52] p-0.5 border-t border-[#C9A24A]/60 shadow-md overflow-hidden">
              <div className="w-full h-full rounded-b-full bg-gradient-to-b from-[#ffffff] via-[#f7f4ed] to-[#ede3d1] flex items-center justify-center">
                <div className="w-full h-full opacity-90 bg-[radial-gradient(#12372a_1px,transparent_1px)] [background-size:3px_3px]" />
              </div>
            </div>
          </div>

          {/* Gold Weight Pill Box at Bottom */}
          <div className="relative z-10 text-[7px] sm:text-[9px] font-mono text-center font-bold bg-[#C9A24A] text-[#12372A] py-0.5 rounded shadow-xs">
            10 KG
          </div>
        </div>

        {/* BAG 4: 20 KG YOUR BRAND Golden Package (Tallest on Right) */}
        <div className="relative shrink-0 w-28 sm:w-36 lg:w-44 aspect-[3/4.5] rounded-t-xl bg-gradient-to-b from-[#dcb43b] via-[#c49c25] to-[#8c6d0d] text-[#12372A] p-3.5 sm:p-4 flex flex-col justify-between border-t border-l border-r border-[#ebd68d] shadow-2xl z-30 transform -translate-y-4">
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/35 via-white/10 to-transparent pointer-events-none rounded-t-xl" />
          <div className="absolute bottom-0 inset-x-0 h-10 bg-black/25 pointer-events-none" />

          {/* Top Logo & Gold Emblem */}
          <div className="relative z-10 text-center space-y-1 mt-1">
            <div className="w-8 h-8 mx-auto text-[#12372A]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 2C11.5 5 9.5 7.5 7 9c2.5 1.5 4.5 4 5 7 0.5-3 2.5-5.5 5-7-2.5-1.5-4.5-4-5-7z" />
              </svg>
            </div>
            <p className="font-serif text-xs sm:text-lg font-black text-[#12372A] tracking-widest leading-none uppercase">YOUR</p>
            <p className="font-serif text-xs sm:text-lg font-black text-[#12372A] tracking-widest leading-none uppercase">BRAND</p>
            <p className="text-[6.5px] sm:text-[8.5px] font-mono text-[#12372A] font-extrabold tracking-wider">BASMATI RICE</p>
            <p className="text-[5.5px] sm:text-[6.5px] text-[#12372A]/80 font-bold">أرز بسمتي فاخر</p>
          </div>

          {/* Half-oval bowl with white cooked rice & gold wheat ears */}
          <div className="relative z-10 w-20 sm:w-28 h-10 sm:h-11 mx-auto -mb-1 flex items-end justify-center">
            <div className="relative w-full h-9 sm:h-10 rounded-b-full bg-gradient-to-b from-[#e3d7c3] via-[#bfae91] to-[#806f52] p-0.5 border-t border-[#12372A]/40 shadow-md overflow-hidden">
              <div className="w-full h-full rounded-b-full bg-gradient-to-b from-[#ffffff] via-[#f7f4ed] to-[#ede3d1] flex items-center justify-center">
                <div className="w-full h-full opacity-90 bg-[radial-gradient(#12372a_1px,transparent_1px)] [background-size:3px_3px]" />
              </div>
            </div>
          </div>

          {/* Gold Weight Pill Box at Bottom */}
          <div className="relative z-10 text-[7.5px] sm:text-[9.5px] font-mono text-center font-bold bg-[#12372A] text-[#C9A24A] py-0.5 rounded shadow-xs">
            20 KG
          </div>
        </div>

      </div>

      {/* Realistic Shallow Teak Wooden Bowl sitting naturally in front of group on right side */}
      <div className="hidden sm:flex absolute -bottom-1 right-2 sm:right-6 z-40 w-20 sm:w-24 aspect-square rounded-full bg-stone-950/70 p-1 border border-[#C9A24A]/50 shadow-2xl items-center justify-center overflow-hidden">
        <div className="relative w-full h-full rounded-full bg-gradient-to-b from-[#e3d7c3] via-[#bfae91] to-[#806f52] p-0.5 border border-stone-800 shadow-inner">
          <div className="w-full h-full rounded-full bg-gradient-to-b from-[#ffffff] via-[#f7f4ed] to-[#ede3d1] flex items-center justify-center shadow-inner relative overflow-hidden">
            <svg viewBox="0 0 100 50" className="w-full h-full object-cover">
              <defs>
                <linearGradient id="refBowlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="60%" stopColor="#f8f5ec" />
                  <stop offset="100%" stopColor="#e3d6bc" />
                </linearGradient>
              </defs>
              <g>
                <ellipse cx="20" cy="15" rx="12" ry="3.5" fill="url(#refBowlGrad)" transform="rotate(-15 20 15)" />
                <ellipse cx="45" cy="12" rx="14" ry="4" fill="url(#refBowlGrad)" transform="rotate(8 45 12)" />
                <ellipse cx="75" cy="15" rx="13" ry="3.8" fill="url(#refBowlGrad)" transform="rotate(20 75 15)" />
                <ellipse cx="35" cy="28" rx="14" ry="4" fill="url(#refBowlGrad)" transform="rotate(-6 35 28)" />
                <ellipse cx="65" cy="30" rx="13" ry="3.8" fill="url(#refBowlGrad)" transform="rotate(-18 65 30)" />
                <ellipse cx="50" cy="42" rx="14" ry="4" fill="url(#refBowlGrad)" transform="rotate(14 50 42)" />
              </g>
            </svg>
          </div>
        </div>
      </div>

    </div>
  );
};