import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SingleRicePacket } from '@/components/SingleRicePacket';
import { BackgroundTextureWatermark } from '@/components/BackgroundTextureWatermark';
import { CertificationBadges } from '@/components/CertificationBadges';
import { WhyChooseMiracle } from '@/components/WhyChooseMiracle';
import { ArrowRight } from 'lucide-react';
import OtherProductEnquiry from "@/components/OtherProductEnquiry";

export default function ProductsPage() {
  const official7Products = [
    {
      id: '1121-steam',
      variant: 'green' as const,
      code: '1121',
      name: 'Steam Basmati Rice',
      image: '/generated/pkg_green_1121.png'
    },
    {
      id: '1121-sella',
      variant: 'cream' as const,
      code: '1121',
      name: 'Sella Basmati Rice',
      image: '/generated/pkg_cream_1509.png'
    },
    {
      id: '1121-golden-sella',
      variant: 'gold' as const,
      code: '1121',
      name: 'Golden Sella Basmati Rice',
      image: '/generated/pkg_gold_sella.png'
    },
    {
      id: '1121-creamy-sella',
      variant: 'cream' as const,
      code: '1121',
      name: 'Creamy Sella Basmati Rice',
      image: '/generated/pkg_cream_1121_creamy.png'
    },
    {
      id: '1509-steam',
      variant: 'green' as const,
      code: '1509',
      name: 'Steam Basmati Rice',
      image: '/generated/pkg_green_parboiled.png'
    },
    {
      id: '1509-golden-sella',
      variant: 'gold' as const,
      code: '1509',
      name: 'Golden Sella Basmati Rice',
      image: '/generated/pkg_gold_1509_golden.png'
    },
    {
      id: '1509-creamy-sella',
      variant: 'cream' as const,
      code: '1509',
      name: 'Creamy Sella Basmati Rice',
      image: '/generated/pkg_cream_1509_creamy.png'
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#f4efe6] text-[#1a3d2e] font-sans antialiased">
      <BackgroundTextureWatermark />
      <Navbar />

      {/* PRODUCTS PAGE HEADER */}
      <section className="relative z-10 w-full pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-[#c9a227] text-xs font-semibold tracking-[0.25em] uppercase block">OUR PREMIUM COLLECTION</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#1a3d2e] mt-1">
            Basmati Rice Varieties
          </h1>
        </div>

        <CertificationBadges />

        {/* 7 PRODUCT CARDS GRID - 3 COLUMNS ON DESKTOP, 2 ON TABLET, 1 ON MOBILE */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-center">
          {official7Products.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col items-center text-center bg-white rounded-lg p-6 shadow-sm border border-stone-200 hover:shadow-md transition-all h-full"
            >
              <div className="relative aspect-[3/4] w-full max-w-[210px] rounded overflow-hidden mb-5 bg-[#fbf9f5] flex items-center justify-center p-2">
                <SingleRicePacket 
                  code={item.code}
                  name={item.name}
                  image={item.image}
                />
              </div>

              <div className="mt-auto space-y-1 w-full">
                <span className="font-serif text-base font-bold text-[#1a3d2e] block leading-tight">{item.code}</span>
                <span className="font-serif text-sm font-bold text-[#1a3d2e] block leading-tight">{item.name}</span>
                
                <div className="pt-3">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-[#1a3d2e] hover:underline"
                  >
                    <span>View Product</span>
                    <ArrowRight className="w-3 h-3 text-[#c9a227]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <WhyChooseMiracle />

        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center space-x-3 px-8 py-3.5 rounded bg-[#1a3d2e] text-[#f4efe6] font-bold text-xs uppercase tracking-widest hover:bg-[#122b20] transition-all shadow-md"
          >
            <span>REQUEST A QUOTE</span>
            <ArrowRight className="w-4 h-4 text-[#c9a227]" />
          </Link>
        </div>
      </section>
      <OtherProductEnquiry />

      <Footer />
    </div>
  );
}
