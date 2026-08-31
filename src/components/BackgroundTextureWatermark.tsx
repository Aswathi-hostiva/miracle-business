import React from 'react';

export const BackgroundTextureWatermark: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.035] overflow-hidden flex items-center justify-center">
      <svg 
        viewBox="0 0 500 800" 
        className="w-full h-full object-cover max-w-4xl text-[#1a3d2e]"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        {/* Central Stem */}
        <path d="M 250 750 Q 245 400 250 50" />
        
        {/* Left Side Grains */}
        <path d="M 250 600 C 200 580 180 540 220 530 C 240 525 248 560 250 580" />
        <path d="M 250 500 C 190 480 170 440 210 430 C 230 425 248 460 250 480" />
        <path d="M 250 400 C 180 380 160 340 200 330 C 220 325 248 360 250 380" />
        <path d="M 250 300 C 170 280 150 240 190 230 C 210 225 248 260 250 280" />
        <path d="M 250 200 C 170 180 160 140 200 130 C 220 125 248 160 250 180" />
        
        {/* Right Side Grains */}
        <path d="M 250 550 C 300 530 320 490 280 480 C 260 475 252 510 250 530" />
        <path d="M 250 450 C 310 430 330 390 290 380 C 270 375 252 410 250 430" />
        <path d="M 250 350 C 320 330 340 290 300 280 C 280 275 252 310 250 330" />
        <path d="M 250 250 C 330 230 350 190 310 180 C 290 175 252 210 250 230" />
        <path d="M 250 150 C 330 130 340 90 300 80 C 280 75 252 110 250 130" />

        {/* Top Awn / Whiskers */}
        <path d="M 250 50 Q 230 20 210 10" />
        <path d="M 250 50 Q 250 15 250 0" />
        <path d="M 250 50 Q 270 20 290 10" />
      </svg>
    </div>
  );
};
