import React from 'react';

export const IconSetCollection: React.FC = () => {
  const featureItems = [
    {
      title: 'Premium Indian Basmati Rice',
      description: 'Finest quality rice for global markets',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-[#c9a227]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8m0 0l-3-3m3 3l3-3m-3-5V3" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      )
    },
    {
      title: 'Authentic Karnal Origin',
      description: 'Sourced from the world-renowned Karnal region',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-[#c9a227]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      )
    },
    {
      title: 'Superior Aroma & Long Grain',
      description: 'Exceptional aroma with extra-long grain quality',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-[#c9a227]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385c.116.488-.42.879-.844.628l-4.733-2.81a.563.563 0 00-.57 0l-4.733 2.81c-.424.251-.96-.14-.844-.628l1.285-5.385a.563.563 0 00-.182-.557l-4.204-3.602c-.38-.325-.178-.948.32-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      )
    },
    {
      title: 'Export-Standard Processing',
      description: 'Hygienic processing & quality control',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-[#c9a227]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Reliable Global Logistics',
      description: 'Direct sea and land logistics & freight forwarding',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-[#c9a227]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.75 18.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 4.5h1.5l2.25 12h12l1.5-6h-15" />
        </svg>
      )
    },
    {
      title: 'Long-Term Partnerships',
      description: 'Built on trust, transparency & timely delivery',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-[#c9a227]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full text-[#f4efe6]">
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 px-2">
        <span className="text-[#c9a227] text-xs uppercase tracking-[0.25em] font-mono font-semibold block">WHY CHOOSE</span>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mt-1 text-[#f4efe6]">
          TASTE OF MIRACLE<span className="text-xs font-sans text-[#c9a227] align-top">TM</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 text-center px-2 sm:px-0">
        {featureItems.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center justify-between p-4 sm:p-6 rounded bg-[#10291e] border border-[#c9a227]/20 hover:border-[#c9a227] transition-all">
            <div className="mb-3 sm:mb-4">{item.icon}</div>
            <h3 className="font-serif text-xs sm:text-sm font-bold text-[#f4efe6] mb-2 leading-snug">{item.title}</h3>
            <p className="text-[10px] sm:text-[11px] text-[#f4efe6]/70 leading-relaxed font-sans">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};