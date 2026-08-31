import React from 'react';

interface RealisticRicePacketProps {
  variant: 'green' | 'cream' | 'gold';
  code: string;
  name: string;
}

export const RealisticRicePacket: React.FC<RealisticRicePacketProps> = ({ variant, code, name }) => {
  const packetGradients = {
    green: 'from-[#12372A] via-[#0b261c] to-[#061710] text-[#f4efe6] border-[#C9A24A]/60 shadow-emerald-950/30',
    cream: 'from-[#faf6ee] via-[#efe4d2] to-[#ded0b6] text-[#12372A] border-[#C9A24A]/70 shadow-amber-950/10',
    gold: 'from-[#dfb73e] via-[#c9a227] to-[#8f6f0c] text-[#12372A] border-[#ebd68d] shadow-amber-950/20',
  };

  const accentText = variant === 'green' ? 'text-[#C9A24A]' : 'text-[#12372A]';
  const badgeBg = variant === 'green' ? 'bg-[#C9A24A] text-[#12372A]' : variant === 'gold' ? 'bg-[#12372A] text-[#C9A24A]' : 'bg-[#12372A] text-[#f4efe6]';

  return (
    <div className="relative w-full flex flex-col items-center select-none pt-1 pb-2">
      
      {/* 1. STANDING UPRIGHT TASTE OF MIRACLE™ RICE PACKET */}
      <div className={`relative w-[100px] xs:w-[115px] sm:w-[130px] aspect-[3/4.6] rounded-t-2xl bg-gradient-to-b ${packetGradients[variant]} p-2.5 sm:p-3 flex flex-col justify-between border-t border-l border-r shadow-xl overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1`}>
        
        {/* Specular Curved Metallic Highlight */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/30 via-white/10 to-transparent pointer-events-none rounded-t-2xl" />
        <div className="absolute bottom-0 inset-x-0 h-8 bg-black/25 pointer-events-none" />

        {/* Top Header Branding */}
        <div className="relative z-10 text-center border-b border-current/20 pb-1.5">
          <div className="w-5 h-5 mx-auto text-[#C9A24A] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 2C11.5 5 9.5 7.5 7 9c2.5 1.5 4.5 4 5 7 0.5-3 2.5-5.5 5-7-2.5-1.5-4.5-4-5-7z" />
            </svg>
          </div>
          <p className="font-serif text-[7px] sm:text-[7.5px] font-extrabold tracking-widest leading-none mt-1 uppercase">TASTE OF</p>
          <p className="font-serif text-[9px] sm:text-[10px] font-black tracking-widest leading-none uppercase">MIRACLE</p>
          <p className={`text-[5.5px] sm:text-[6px] font-mono font-bold ${accentText} tracking-widest mt-0.5`}>BASMATI RICE</p>
        </div>

        {/* Transparent Rice Grain Preview Window (Raw long-grain white basmati rice inside package) */}
        <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full bg-[#f4efe6] border border-current/40 shadow-inner flex items-center justify-center overflow-hidden p-0.5 my-auto">
          <svg viewBox="0 0 100 100" className="w-full h-full object-cover">
            <defs>
              <linearGradient id="rawGrainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#f8f4ea" />
                <stop offset="100%" stopColor="#e2d8c3" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="48" fill="#0f261b" />
            <g>
              <ellipse cx="30" cy="25" rx="16" ry="4" fill="url(#rawGrainGrad)" transform="rotate(-20 30 25)" />
              <ellipse cx="68" cy="28" rx="17" ry="4.5" fill="url(#rawGrainGrad)" transform="rotate(15 68 28)" />
              <ellipse cx="25" cy="48" rx="15" ry="4" fill="url(#rawGrainGrad)" transform="rotate(30 25 48)" />
              <ellipse cx="52" cy="46" rx="18" ry="4.8" fill="url(#rawGrainGrad)" transform="rotate(-5 52 46)" />
              <ellipse cx="80" cy="52" rx="14" ry="4" fill="url(#rawGrainGrad)" transform="rotate(-25 80 52)" />
              <ellipse cx="34" cy="72" rx="16" ry="4.2" fill="url(#rawGrainGrad)" transform="rotate(-10 34 72)" />
              <ellipse cx="66" cy="74" rx="17" ry="4.5" fill="url(#rawGrainGrad)" transform="rotate(18 66 74)" />
            </g>
          </svg>
        </div>

        {/* Variety Printed Label on Packet Bottom */}
        <div className={`relative z-10 text-[6.5px] sm:text-[7px] font-mono text-center font-bold py-0.5 rounded ${badgeBg} uppercase tracking-wider`}>
          {code} {name.split(' ')[0]}
        </div>
      </div>

      {/* 2. REALISTIC SHALLOW WOODEN BOWL FILLED WITH WHITE BASMATI RICE IN FRONT */}
      <div className="relative -mt-5 sm:-mt-6 z-20 w-24 xs:w-28 sm:w-32 flex flex-col items-center pointer-events-none">
        
        {/* Natural Basmati Rice Stalks framing the bowl */}
        <div className="absolute -top-3 inset-x-0 flex justify-between px-1 opacity-90">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A24A] transform -rotate-45 drop-shadow-xs">
            <path d="M12 2C11.5 5 9.5 7.5 7 9c2.5 1.5 4.5 4 5 7 0.5-3 2.5-5.5 5-7-2.5-1.5-4.5-4-5-7z" />
          </svg>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A24A] transform rotate-45 drop-shadow-xs">
            <path d="M12 2C11.5 5 9.5 7.5 7 9c2.5 1.5 4.5 4 5 7 0.5-3 2.5-5.5 5-7-2.5-1.5-4.5-4-5-7z" />
          </svg>
        </div>

        {/* Shallow Teak Wood Bowl filled with a generous mound of long-grain white basmati rice */}
        <div className="relative w-20 xs:w-24 sm:w-26 aspect-[2.3/1] rounded-b-full bg-gradient-to-b from-[#a88a62] via-[#7d613e] to-[#4e3a22] p-1 border-t-2 border-[#d0be9f] shadow-2xl flex items-center justify-center overflow-hidden">
          <div className="w-full h-full rounded-b-full bg-gradient-to-b from-[#ffffff] via-[#f7f4ed] to-[#e4d7be] flex items-center justify-center relative overflow-hidden shadow-inner">
            <svg viewBox="0 0 100 50" className="w-full h-full object-cover">
              <defs>
                <linearGradient id="cookedRiceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="60%" stopColor="#f8f5ec" />
                  <stop offset="100%" stopColor="#e3d6bc" />
                </linearGradient>
                <filter id="riceShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0.4" dy="0.6" stdDeviation="0.3" floodColor="#4e3a22" floodOpacity="0.25" />
                </filter>
              </defs>
              <g filter="url(#riceShadow)">
                <ellipse cx="18" cy="14" rx="12" ry="3.5" fill="url(#cookedRiceGrad)" transform="rotate(-15 18 14)" />
                <ellipse cx="42" cy="10" rx="14" ry="4" fill="url(#cookedRiceGrad)" transform="rotate(8 42 10)" />
                <ellipse cx="70" cy="12" rx="13" ry="3.8" fill="url(#cookedRiceGrad)" transform="rotate(20 70 12)" />
                <ellipse cx="14" cy="28" rx="11" ry="3.5" fill="url(#cookedRiceGrad)" transform="rotate(22 14 28)" />
                <ellipse cx="32" cy="24" rx="14" ry="4" fill="url(#cookedRiceGrad)" transform="rotate(-6 32 24)" />
                <ellipse cx="58" cy="26" rx="13" ry="3.8" fill="url(#cookedRiceGrad)" transform="rotate(-18 58 26)" />
                <ellipse cx="82" cy="30" rx="11" ry="3.5" fill="url(#cookedRiceGrad)" transform="rotate(12 82 30)" />
                <ellipse cx="24" cy="38" rx="12" ry="3.8" fill="url(#cookedRiceGrad)" transform="rotate(-4 24 38)" />
                <ellipse cx="48" cy="36" rx="14" ry="4" fill="url(#cookedRiceGrad)" transform="rotate(14 48 36)" />
                <ellipse cx="72" cy="40" rx="12" ry="3.5" fill="url(#cookedRiceGrad)" transform="rotate(-10 72 40)" />
              </g>
            </svg>
          </div>
        </div>

        {/* Soft Natural Drop Shadow under Bowl */}
        <div className="w-16 sm:w-20 h-2 bg-black/25 blur-sm rounded-full mt-0.5" />
      </div>

    </div>
  );
};