import React from 'react';

interface SingleRicePacketProps {
  variant: 'green' | 'cream' | 'gold';
  code: string;
  name: string;
}

export const SingleRicePacket: React.FC<SingleRicePacketProps> = ({ variant, code, name }) => {
  const bgStyles = {
    green: 'from-[#173e2d] via-[#0f2d20] to-[#071911] text-[#f4efe6] border-[#c9a227]/60',
    cream: 'from-[#faf6ee] via-[#eee4d2] to-[#dfceb3] text-[#1a3d2e] border-[#c9a227]/70',
    gold: 'from-[#e2bc43] via-[#c9a227] to-[#94730e] text-[#1a3d2e] border-[#ebd78f]',
  };

  const accentColor = variant === 'green' ? 'text-[#c9a227]' : variant === 'gold' ? 'text-[#1a3d2e]' : 'text-[#c9a227]';
  const badgeBg = variant === 'green' ? 'bg-[#c9a227] text-[#173e2d]' : variant === 'gold' ? 'bg-[#1a3d2e] text-[#c9a227]' : 'bg-[#1a3d2e] text-[#f4efe6]';

  return (
    <div className={`relative w-full max-w-[170px] aspect-[3/4.5] rounded-t-2xl bg-gradient-to-b ${bgStyles[variant]} p-3 flex flex-col justify-between border-t border-l border-r shadow-xl select-none mx-auto overflow-hidden`}>
      {/* Specular curved plastic highlights */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/25 via-white/5 to-transparent pointer-events-none rounded-t-2xl" />
      <div className="absolute bottom-0 inset-x-0 h-8 bg-black/20 pointer-events-none" />

      {/* Top Spec Header */}
      <div className={`relative z-10 flex items-center justify-between text-[8px] font-mono font-bold tracking-wider uppercase border-b border-current/20 pb-1`}>
        <span>5 KG</span>
        <span>{code}</span>
      </div>

      {/* Brand Identity */}
      <div className="relative z-10 text-center my-auto space-y-1.5">
        <div className={`w-6 h-6 mx-auto rounded-full border border-current flex items-center justify-center ${accentColor} bg-black/10 shadow-sm`}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
            <path d="M12 2C11.5 5 9.5 7.5 7 9c2.5 1.5 4.5 4 5 7 0.5-3 2.5-5.5 5-7-2.5-1.5-4.5-4-5-7z" />
          </svg>
        </div>
        <p className="font-serif text-xs font-black tracking-widest leading-none uppercase">MIRACLE</p>
        <p className={`text-[7px] font-mono font-extrabold ${accentColor} tracking-wider`}>BASMATI RICE</p>

        {/* REALISTIC DETAILED WHITE BASMATI RICE GRAIN WINDOW */}
        <div className="relative w-16 h-10 mx-auto rounded-full bg-[#f4efe6] border border-current/40 shadow-inner flex items-center justify-center overflow-hidden p-0.5">
          {/* Detailed SVG Grains of Long-Grain Basmati Rice */}
          <svg viewBox="0 0 100 60" className="w-full h-full object-cover">
            <defs>
              <linearGradient id="riceGrainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#f7f4ec" />
                <stop offset="100%" stopColor="#e5dec9" />
              </linearGradient>
              <filter id="grainShadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0.5" dy="0.8" stdDeviation="0.4" floodColor="#1a3d2e" floodOpacity="0.25" />
              </filter>
            </defs>
            {/* Dark contrast rice bowl background */}
            <rect width="100" height="60" fill="#132b20" rx="30" />
            
            {/* Layered Detailed Basmati Grains */}
            <g filter="url(#grainShadow)">
              {/* Row 1 Grains */}
              <ellipse cx="20" cy="18" rx="14" ry="4" fill="url(#riceGrainGrad)" transform="rotate(-15 20 18)" />
              <ellipse cx="48" cy="14" rx="15" ry="4.5" fill="url(#riceGrainGrad)" transform="rotate(5 48 14)" />
              <ellipse cx="78" cy="20" rx="14" ry="4" fill="url(#riceGrainGrad)" transform="rotate(22 78 20)" />
              
              {/* Row 2 Grains */}
              <ellipse cx="15" cy="34" rx="13" ry="4" fill="url(#riceGrainGrad)" transform="rotate(25 15 34)" />
              <ellipse cx="36" cy="28" rx="16" ry="4.5" fill="url(#riceGrainGrad)" transform="rotate(-8 36 28)" />
              <ellipse cx="62" cy="30" rx="15" ry="4" fill="url(#riceGrainGrad)" transform="rotate(-18 62 30)" />
              <ellipse cx="85" cy="36" rx="12" ry="3.8" fill="url(#riceGrainGrad)" transform="rotate(10 85 36)" />
              
              {/* Row 3 Grains */}
              <ellipse cx="25" cy="46" rx="14" ry="4.2" fill="url(#riceGrainGrad)" transform="rotate(-5 25 46)" />
              <ellipse cx="50" cy="44" rx="15" ry="4.5" fill="url(#riceGrainGrad)" transform="rotate(14 50 44)" />
              <ellipse cx="75" cy="47" rx="13" ry="4" fill="url(#riceGrainGrad)" transform="rotate(-12 75 47)" />
            </g>
          </svg>
        </div>
      </div>

      <div className={`relative z-10 text-[7.5px] font-mono text-center font-bold py-0.5 rounded ${badgeBg}`}>
        {code} {name.split(' ')[0]}
      </div>
    </div>
  );
};
