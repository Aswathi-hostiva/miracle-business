// import React from 'react';

// export const GlobalMapGraphic: React.FC = () => {
//   return (
//     <div className="relative w-full bg-[#1a3d2e] text-[#f4efe6] py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
//         {/* Left Side: Header & Markets List EXACT RECREATION OF REFERENCE */}
//         <div className="lg:col-span-4 space-y-7 text-center lg:text-left">
//           <div>
//             <h2 className="font-serif text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight text-[#f4efe6]">
//               FROM INDIA.
//             </h2>
//             <h2 className="font-serif text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight text-[#f4efe6]">
//               CONNECTED TO THE WORLD.
//             </h2>
//           </div>

//           <div className="space-y-4 pt-2 flex flex-col items-center lg:items-start">
//             {[
//               'GCC',
//               'Europe',
//               'Africa',
//               'Asia',
//               'North America'
//             ].map((market) => (
//               <div key={market} className="flex items-center space-x-3 text-sm sm:text-base lg:text-lg font-medium text-[#f4efe6]">
//                 <div className="w-6 h-6 rounded-full border border-[#c9a227] flex items-center justify-center text-[#c9a227] shrink-0 bg-[#122b20]">
//                   <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
//                     <path d="M12 2C11.5 5 9.5 7.5 7 9c2.5 1.5 4.5 4 5 7 0.5-3 2.5-5.5 5-7-2.5-1.5-4.5-4-5-7z" />
//                   </svg>
//                 </div>
//                 <span>{market}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Side: Map graphic with exact Head Office and Control Office pins */}
//         <div className="lg:col-span-8 relative w-full aspect-[16/12] sm:aspect-[21/12] lg:aspect-[21/10] min-h-[280px] sm:min-h-[320px] flex items-center justify-center">
//           <svg viewBox="0 0 1000 450" className="w-full h-full object-contain">
//             {/* World Map Continents Silhouette */}
//             <g fill="#24523e" stroke="#2c634b" strokeWidth="1" opacity="0.9">
//               <path d="M 120,80 Q 200,60 260,110 T 240,200 Q 180,240 140,180 Z" />
//               <path d="M 270,230 Q 330,250 310,340 T 240,360 Q 230,290 270,230 Z" />
//               <path d="M 460,70 Q 540,60 560,110 T 500,160 Q 450,130 460,70 Z" />
//               <path d="M 460,170 Q 560,170 570,260 T 500,350 Q 440,280 460,170 Z" />
//               <path d="M 580,70 Q 780,50 850,140 T 720,240 Q 620,200 580,70 Z" />
//               <path d="M 780,280 Q 860,270 880,340 T 800,370 Q 760,330 780,280 Z" />
//             </g>

//             {/* Glowing Flight Paths */}
//             <g stroke="#c9a227" strokeWidth="1.5" fill="none" strokeDasharray="5 5" opacity="0.8">
//               <path d="M 660 190 Q 620 185 590 200" strokeWidth="2.5" stroke="#f5d77f" strokeDasharray="none" />
//               <path d="M 660 190 Q 560 100 500 110" />
//               <path d="M 660 190 Q 560 240 520 280" />
//               <path d="M 660 190 Q 740 160 800 180" />
//               <path d="M 660 190 Q 400 30 200 120" />
//               <path d="M 660 190 L 700 132" stroke="#f5d77f" strokeWidth="1.25" />
//             </g>

//             {/* Target Ports Markers */}
//             <g fill="#c9a227">
//               <circle cx="500" cy="110" r="4" />
//               <circle cx="520" cy="280" r="4" />
//               <circle cx="800" cy="180" r="4" />
//               <circle cx="200" cy="120" r="4" />
//             </g>

//             {/* Head Office Pin: Kerala, India - larger, bolder text for mobile legibility */}
//             <g transform="translate(660, 190)">
//               <circle cx="0" cy="0" r="10" fill="#c9a227" opacity="0.3" className="animate-ping" />
//               <circle cx="0" cy="0" r="5" fill="#c9a227" />
//               <text x="12" y="4" fill="#f4efe6" fontSize="14" fontWeight="bold" fontFamily="serif">Head Office</text>
//               <text x="12" y="19" fill="#c9a227" fontSize="12" fontFamily="sans-serif">Kerala, India</text>
//             </g>

//             {/* Manufacturing Unit Pin: Karnal, Haryana */}
//             <g transform="translate(700, 132)">
//               <circle cx="0" cy="0" r="8" fill="#c9a227" opacity="0.3" className="animate-ping" />
//               <circle cx="0" cy="0" r="4" fill="#c9a227" />
//               <text x="12" y="4" fill="#c9a227" fontSize="13" fontWeight="bold" fontFamily="sans-serif">MANUFACTURING UNIT</text>
//               <text x="12" y="19" fill="#f4efe6" fontSize="11" fontFamily="sans-serif">Karnal, Haryana</text>
//             </g>

//             {/* Control Office Pin: Sohar, Oman - larger, bolder text for mobile legibility */}
//             <g transform="translate(590, 200)">
//               <circle cx="0" cy="0" r="8" fill="#c9a227" opacity="0.3" className="animate-ping" />
//               <circle cx="0" cy="0" r="4" fill="#c9a227" />
//               <text x="-150" y="16" fill="#c9a227" fontSize="13" fontWeight="bold" fontFamily="sans-serif">OMAN</text>
//               <text x="-150" y="30" fill="#f4efe6" fontSize="11" fontFamily="sans-serif">Control Office: Sohar, Oman</text>
//             </g>
//           </svg>
//         </div>

//       </div>
//     </div>
//   );
// };
import React from 'react';

export const GlobalMapGraphic: React.FC = () => {
  return (
    <div className="relative w-full bg-[#1a3d2e] text-[#f4efe6] py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        
        {/* Left Side: Header & Markets List */}
        <div className="lg:col-span-4 space-y-4 sm:space-y-7 text-center lg:text-left">
          <div>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-4xl font-bold leading-tight text-[#f4efe6]">
              FROM INDIA.
            </h2>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-4xl font-bold leading-tight text-[#f4efe6]">
              CONNECTED TO THE WORLD.
            </h2>
          </div>

         <div className="grid grid-cols-2 sm:flex sm:flex-col gap-3 sm:gap-4 pt-1 sm:pt-2 justify-items-start px-8 sm:px-0 sm:items-center lg:items-start">
            {[
              'GCC',
              'Europe',
              'Africa',
              'Asia',
              'North America'
            ].map((market) => (
              <div key={market} className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base lg:text-lg font-medium text-[#f4efe6]">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-[#c9a227] flex items-center justify-center text-[#c9a227] shrink-0 bg-[#122b20]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 sm:w-3.5 sm:h-3.5">
                    <path d="M12 2C11.5 5 9.5 7.5 7 9c2.5 1.5 4.5 4 5 7 0.5-3 2.5-5.5 5-7-2.5-1.5-4.5-4-5-7z" />
                  </svg>
                </div>
                <span>{market}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Map graphic */}
<div className="lg:col-span-8 relative w-full -mx-4 sm:mx-0 aspect-[4/3] sm:aspect-[21/12] lg:aspect-[21/10] min-h-[420px] sm:min-h-[320px] flex items-center justify-center">
        <svg viewBox="180 70 700 320" className="w-full h-full object-contain">
            {/* World Map Continents Silhouette */}
            <g fill="#24523e" stroke="#2c634b" strokeWidth="1" opacity="0.9">
              <path d="M 120,80 Q 200,60 260,110 T 240,200 Q 180,240 140,180 Z" />
              <path d="M 270,230 Q 330,250 310,340 T 240,360 Q 230,290 270,230 Z" />
              <path d="M 460,70 Q 540,60 560,110 T 500,160 Q 450,130 460,70 Z" />
              <path d="M 460,170 Q 560,170 570,260 T 500,350 Q 440,280 460,170 Z" />
              <path d="M 580,70 Q 780,50 850,140 T 720,240 Q 620,200 580,70 Z" />
              <path d="M 780,280 Q 860,270 880,340 T 800,370 Q 760,330 780,280 Z" />
            </g>

            {/* Glowing Flight Paths */}
            <g stroke="#c9a227" strokeWidth="1.5" fill="none" strokeDasharray="5 5" opacity="0.8">
              <path d="M 660 190 Q 620 185 590 200" strokeWidth="2.5" stroke="#f5d77f" strokeDasharray="none" />
              <path d="M 660 190 Q 560 100 500 110" />
              <path d="M 660 190 Q 560 240 520 280" />
              <path d="M 660 190 Q 740 160 800 180" />
              <path d="M 660 190 Q 400 30 200 120" />
              <path d="M 660 190 L 700 132" stroke="#f5d77f" strokeWidth="1.25" />
            </g>

            {/* Target Ports Markers */}
            <g fill="#c9a227">
              <circle cx="500" cy="110" r="4" />
              <circle cx="520" cy="280" r="4" />
              <circle cx="800" cy="180" r="4" />
              <circle cx="200" cy="120" r="4" />
            </g>

            {/* Head Office Pin: Kerala, India */}
            <g transform="translate(660, 190)">
              <circle cx="0" cy="0" r="10" fill="#c9a227" opacity="0.3" className="animate-ping" />
              <circle cx="0" cy="0" r="5" fill="#c9a227" />
              <text x="12" y="4" fill="#f4efe6" fontSize="20" fontWeight="bold" fontFamily="serif">Head Office</text>
<text x="12" y="22" fill="#c9a227" fontSize="16" fontFamily="sans-serif">Kerala, India</text>
            </g>

            {/* Manufacturing Unit Pin: Karnal, Haryana */}
            <g transform="translate(700, 132)">
  <circle cx="0" cy="0" r="8" fill="#c9a227" opacity="0.3" className="animate-ping" />
  <circle cx="0" cy="0" r="4" fill="#c9a227" />
  <text x="-95" y="-10" fill="#c9a227" fontSize="14" fontWeight="bold" fontFamily="sans-serif" textAnchor="end">MANUFACTURING UNIT</text>
  <text x="-95" y="6" fill="#f4efe6" fontSize="12" fontFamily="sans-serif" textAnchor="end">Karnal, Haryana</text>
</g>

            {/* Control Office Pin: Sohar, Oman */}
            <g transform="translate(590, 200)">
              <circle cx="0" cy="0" r="8" fill="#c9a227" opacity="0.3" className="animate-ping" />
              <circle cx="0" cy="0" r="4" fill="#c9a227" />
              <text x="-150" y="16" fill="#c9a227" fontSize="14" fontWeight="bold" fontFamily="sans-serif">OMAN</text>
              <text x="-150" y="32" fill="#f4efe6" fontSize="12" fontFamily="sans-serif">Control Office: Sohar, Oman</text>
            </g>
          </svg>
        </div>

      </div>
    </div>
  );
};