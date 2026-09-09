'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { RiceBagPackaging } from '@/components/RiceBagPackaging';
import { SingleRicePacket } from '@/components/SingleRicePacket';
import { GlobalMapGraphic } from '@/components/GlobalMapGraphic';
import { IconSetCollection } from '@/components/IconSetCollection';
import { BackgroundTextureWatermark } from '@/components/BackgroundTextureWatermark';
import { ArrowRight, Building2, ShoppingBag, Store, Utensils, Warehouse, ShoppingCart, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setSending(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setSubmitted(true);
        setSending(false);
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setSending(false);
        alert('Something went wrong. Please try again or contact us directly.');
      });
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

  const official7HomeProducts = [
    {
      id: '1121-steam',
      code: '1121',
      line1: 'Steam',
      line2: 'Basmati Rice',
      variant: 'green' as const,
      image: '/generated/pkg_green_1121.png',
    },
    {
      id: '1121-sella',
      code: '1121',
      line1: 'Sella',
      line2: 'Basmati Rice',
      variant: 'cream' as const,
      image: '/generated/pkg_cream_1509.png',
    },
    {
      id: '1121-golden-sella',
      code: '1121',
      line1: 'Golden Sella',
      line2: 'Basmati Rice',
      variant: 'gold' as const,
      image: '/generated/pkg_gold_sella.png',
    },
    {
      id: '1121-creamy-sella',
      code: '1121',
      line1: 'Creamy Sella',
      line2: 'Basmati Rice',
      variant: 'cream' as const,
      image: '/generated/pkg_cream_1121_creamy.png',
    },
    {
      id: '1509-steam',
      code: '1509',
      line1: 'Steam',
      line2: 'Basmati Rice',
      variant: 'green' as const,
      image: '/generated/pkg_green_parboiled.png',
    },
    {
      id: '1509-golden-sella',
      code: '1509',
      line1: 'Golden Sella',
      line2: 'Basmati Rice',
      variant: 'gold' as const,
      image: '/generated/pkg_gold_1509_golden.png',
    },
    {
      id: '1509-creamy-sella',
      code: '1509',
      line1: 'Creamy Sella',
      line2: 'Basmati Rice',
      variant: 'cream' as const,
      image: '/generated/pkg_cream_1509_creamy.png',
    }
  ];

  const packagingSizes = ['1 KG', '2 KG', '5 KG', '10 KG', '20 KG', '25 KG', '30 KG', '40 KG', '50 KG'];

  const buyerCategories = [
    { title: 'Importers', icon: <Building2 className="w-6 h-6 text-[#c9a227]" /> },
    { title: 'Distributors', icon: <ShoppingBag className="w-6 h-6 text-[#c9a227]" /> },
    { title: 'Wholesalers', icon: <Warehouse className="w-6 h-6 text-[#c9a227]" /> },
    { title: 'Supermarkets', icon: <Store className="w-6 h-6 text-[#c9a227]" /> },
    { title: 'Hypermarkets', icon: <ShoppingCart className="w-6 h-6 text-[#c9a227]" /> },
    { title: 'HORECA', icon: <Utensils className="w-6 h-6 text-[#c9a227]" /> }
  ];

  return (
    <div className="relative min-h-screen bg-[#f4efe6] text-[#1a3d2e] font-sans antialiased">
      <BackgroundTextureWatermark />

      {/* NAVBAR */}
      <Navbar />

      {/* 1. HERO BANNER */}
      <section className="relative w-full">
        <div className="relative w-full aspect-[21/9] min-h-[520px] sm:min-h-[620px] overflow-hidden shadow-xl">
          <Image 
            src="/generated/hero_banner.png" 
            alt="The Authentic Taste of Indian Basmati" 
            fill 
            className="object-cover object-center" 
            priority
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-[#f4efe6]/90 via-[#f4efe6]/40 to-transparent p-6 sm:p-12 md:p-20 flex flex-col justify-center max-w-3xl">
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#1a3d2e] leading-[1.1] mb-4 tracking-tight">
              THE AUTHENTIC TASTE OF <span className="text-[#1a3d2e] block mt-1">INDIAN BASMATI</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-stone-800 font-normal leading-relaxed mb-6 max-w-xl">
              Premium Basmati Rice, sourced from the heart of Karnal, Haryana and delivered to global markets with trust, quality & commitment.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="px-6 py-3.5 bg-[#1a3d2e] text-[#f4efe6] text-xs font-bold tracking-wider uppercase shadow-md hover:bg-[#122b20] transition-all flex items-center space-x-2 rounded"
              >
                <span>EXPLORE PRODUCTS</span>
                <ArrowRight className="w-4 h-4 text-[#c9a227]" />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3.5 bg-white border border-stone-300 text-[#1a3d2e] text-xs font-bold tracking-wider uppercase shadow-sm hover:bg-stone-50 transition-all rounded"
              >
                REQUEST A QUOTE
              </Link>
            </div>
          </div>

          <div className="absolute bottom-0 inset-x-0 bg-[#1a3d2e]/95 text-[#f4efe6] py-3 px-6 text-[11px] font-sans tracking-widest uppercase flex items-center justify-center space-x-6 overflow-x-auto whitespace-nowrap">
            <span>◆ KARNAL, INDIA</span>
            <span>◆ UAE / GCC</span>
            <span>◆ EUROPE</span>
            <span>◆ AFRICA</span>
            <span>◆ ASIA</span>
            <span>◆ NORTH AMERICA</span>
          </div>
        </div>
      </section>

      {/* 2. FROM THE HEART OF INDIA TO THE WORLD */}
      <section className="relative z-10 w-full py-16 sm:py-24 bg-[#f4efe6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[14/10] w-full rounded-xl overflow-hidden shadow-xl border border-stone-200">
              <Image 
                src="/generated/secondary_section_bowl.png" 
                alt="From the Heart of India to the World" 
                fill 
                className="object-cover" 
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#c9a227] text-xs font-serif italic tracking-widest block">FROM THE HEART OF INDIA</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a3d2e] leading-tight">
                TO THE WORLD
              </h2>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                Driven by our industry experience and commitment to quality, <strong>MIRACLE BUSINESS HUB</strong> connects premium Indian products with international markets through reliable sourcing, export coordination and global logistics.
              </p>
              
              <div className="pt-2">
                <span className="text-xs font-serif italic text-stone-500 block mb-1">Our Brand</span>
                <h3 className="font-serif text-2xl font-bold text-[#1a3d2e] tracking-wider flex items-center space-x-2">
                  <span>TASTE OF MIRACLE</span>
                  <span className="text-xs font-sans text-[#c9a227]">TM</span>
                </h3>
                <p className="text-xs text-stone-600 mt-1 font-sans">
                  Authentic taste. Exceptional aroma. Premium Indian Basmati.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded bg-[#1a3d2e] text-[#f4efe6] text-xs font-bold tracking-wider uppercase hover:bg-[#122b20] transition-all"
                >
                  <span>DISCOVER OUR STORY</span>
                  <ArrowRight className="w-4 h-4 text-[#c9a227]" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR PREMIUM COLLECTION */}
      <section className="relative z-10 w-full py-16 sm:py-24 bg-[#F8F5EC] border-y border-[#E7DDC9]/80 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#C9A24A] text-xs font-semibold tracking-[0.25em] uppercase block mb-1">OUR PREMIUM COLLECTION</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#12372A]">
              Basmati Rice Varieties
            </h2>
            
            <div className="flex items-center justify-center space-x-3 mt-4">
              <div className="w-12 h-[1px] bg-[#C9A24A]/70" />
              <div className="w-2.5 h-2.5 rotate-45 bg-[#C9A24A]" />
              <div className="w-12 h-[1px] bg-[#C9A24A]/70" />
            </div>
          </div>

          <div className="flex xl:grid xl:grid-cols-7 items-stretch justify-start xl:justify-center overflow-x-auto scrollbar-none space-x-4 xl:space-x-0 xl:gap-3 pb-6 pt-2 px-1">
            {official7HomeProducts.map((item) => (
              <div 
                key={item.id} 
                className="shrink-0 w-[170px] sm:w-[185px] xl:w-full bg-[#fcfaf5] rounded-xl p-3 sm:p-4 border border-[#E7DDC9] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between items-center text-center group"
              >
                <div className="w-full mb-3 flex items-center justify-center">
                  <SingleRicePacket
                    code={item.code}
                    name={`${item.line1} ${item.line2}`}
                    image={item.image}
                    compact
                  />
                </div>

                <div className="w-full space-y-1 mb-4 my-auto">
                  <span className="font-serif text-base sm:text-lg font-bold text-[#12372A] block leading-none">{item.code}</span>
                  <span className="font-serif text-xs font-bold text-[#12372A] block leading-tight">
                    {item.line1}<br />{item.line2}
                  </span>
                </div>

                <Link
                  href="/products"
                  className="w-full py-1.5 px-2 rounded border border-[#C9A24A]/60 bg-white text-[9.5px] font-bold text-[#12372A] hover:bg-[#F8F5EC] transition-colors flex items-center justify-center space-x-1 uppercase tracking-wider shadow-2xs"
                >
                  <span>VIEW PRODUCT</span>
                  <ArrowRight className="w-2.5 h-2.5 text-[#C9A24A]" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/products"
              className="inline-flex items-center space-x-3 px-8 py-3.5 rounded bg-[#12372A] text-[#f4efe6] font-bold text-xs uppercase tracking-widest hover:bg-[#0b241b] transition-all shadow-md"
            >
              <span>VIEW ALL PRODUCTS</span>
              <ArrowRight className="w-4 h-4 text-[#C9A24A]" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE TASTE OF MIRACLE™️ */}
      <section className="relative z-10 w-full py-16 sm:py-24 bg-[#1a3d2e] text-[#f4efe6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <IconSetCollection />
        </div>
      </section>

      {/* 5. PACKAGING DESIGNED AROUND YOUR MARKET */}
      <section className="relative z-10 w-full py-16 sm:py-24 bg-[#F8F5EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Text & Pill Buttons matching reference image */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#C9A24A] text-xs font-semibold tracking-[0.25em] uppercase block">PACKAGING DESIGNED AROUND</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#12372A] leading-tight">
                YOUR MARKET
              </h2>
              
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-600 mb-3">Available Sizes</h4>
                <div className="flex flex-wrap gap-2">
                  {packagingSizes.map((size) => (
                    <span key={size} className="px-3.5 py-1.5 rounded bg-white text-[#12372A] font-mono text-xs font-bold border border-[#e2d6be] shadow-2xs">
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#C9A24A]">PRIVATE LABEL & OEM SOLUTIONS</h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                  We offer customized packaging and private label solutions tailored to buyer requirements.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded bg-[#12372A] text-[#f4efe6] text-xs font-bold tracking-wider uppercase hover:bg-[#0b241b] transition-all shadow-md"
                >
                  <span>DISCUSS YOUR REQUIREMENTS</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A24A]" />
                </Link>
              </div>
            </div>

            {/* Right Column: Individual product packaging */}
            <div className="lg:col-span-7 flex items-center justify-center">
              <RiceBagPackaging />
            </div>

          </div>
        </div>
      </section>

      {/* 6. GLOBAL PRESENCE */}
      <section className="relative z-10 w-full py-12 sm:py-16 bg-[#1a3d2e] text-[#f4efe6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlobalMapGraphic />
        </div>
      </section>

      {/* 7. VISION / BUILDING A GLOBAL INDIAN RICE BRAND */}
      <section className="relative z-10 w-full py-16 sm:py-24 bg-[#f4efe6] border-y border-stone-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[#c9a227] text-xs font-semibold tracking-[0.25em] uppercase block">BUILDING A GLOBAL</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a3d2e]">
                INDIAN RICE BRAND
              </h2>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                Our vision is to establish TASTE OF MIRACLE™ as a trusted global Indian Basmati Rice brand by building a network of 1,000+ active international buyers and achieving ₹100 Crore+ in export business over the next 10 years.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-[#eae4d5] p-6 rounded text-center border border-stone-300 shadow-sm">
                <span className="font-serif text-3xl font-bold text-[#1a3d2e] block mb-1">1,000+</span>
                <span className="text-[11px] uppercase tracking-wider text-stone-600 font-semibold">International Buyers</span>
              </div>
              <div className="bg-[#eae4d5] p-6 rounded text-center border border-stone-300 shadow-sm">
                <span className="font-serif text-3xl font-bold text-[#1a3d2e] block mb-1">₹100 Cr+</span>
                <span className="text-[11px] uppercase tracking-wider text-stone-600 font-semibold">Export Business Goal</span>
              </div>
              <div className="bg-[#eae4d5] p-6 rounded text-center border border-stone-300 shadow-sm">
                <span className="font-serif text-3xl font-bold text-[#1a3d2e] block mb-1">10 Years</span>
                <span className="text-[11px] uppercase tracking-wider text-stone-600 font-semibold">Long-Term Vision</span>
              </div>
            </div>

          </div>

          <div className="mt-16 pt-12 border-t border-stone-300 text-center">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a227] block mb-8">BUILT FOR GLOBAL BUYERS</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {buyerCategories.map((cat, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-4 bg-[#eae4d5] rounded border border-stone-300">
                  <div className="mb-2">{cat.icon}</div>
                  <span className="font-serif text-xs font-bold text-[#1a3d2e]">{cat.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT / REQUEST A QUOTE SECTION */}
      <section className="relative z-10 w-full py-16 sm:py-24 bg-[#1a3d2e] text-[#f4efe6] px-4 sm:px-6 lg:px-8 border-t border-[#c9a227]/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#f4efe6] leading-tight">
                LET'S BUILD A
              </h1>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#f4efe6] leading-tight">
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
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                
                {/* Row 1: Your Name*, Company Name, Email* */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name *" 
                    className="w-full px-4 py-3 rounded bg-[#1a3d2e] border border-[#c9a227]/30 text-xs text-[#f4efe6] placeholder-[#f4efe6]/60 focus:outline-none focus:border-[#c9a227]" 
                    required
                  />
                  <input 
                    type="text" 
                    name="company"
                    placeholder="Company Name" 
                    className="w-full px-4 py-3 rounded bg-[#1a3d2e] border border-[#c9a227]/30 text-xs text-[#f4efe6] placeholder-[#f4efe6]/60 focus:outline-none focus:border-[#c9a227]" 
                  />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email *" 
                    className="w-full px-4 py-3 rounded bg-[#1a3d2e] border border-[#c9a227]/30 text-xs text-[#f4efe6] placeholder-[#f4efe6]/60 focus:outline-none focus:border-[#c9a227]" 
                    required
                  />
                </div>

                {/* Row 2: WhatsApp/Phone*, Country, Required Rice Variety */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input 
                    type="tel" 
                    name="whatsapp"
                    placeholder="WhatsApp / Phone *" 
                    className="w-full px-4 py-3 rounded bg-[#1a3d2e] border border-[#c9a227]/30 text-xs text-[#f4efe6] placeholder-[#f4efe6]/60 focus:outline-none focus:border-[#c9a227]" 
                    required
                  />
                  <input 
                    type="text" 
                    name="country"
                    placeholder="Country" 
                    className="w-full px-4 py-3 rounded bg-[#1a3d2e] border border-[#c9a227]/30 text-xs text-[#f4efe6] placeholder-[#f4efe6]/60 focus:outline-none focus:border-[#c9a227]" 
                  />
                  <select name="rice_variety" className="w-full px-4 py-3 rounded bg-[#1a3d2e] border border-[#c9a227]/30 text-xs text-[#f4efe6] focus:outline-none focus:border-[#c9a227]">
                    <option value="">Required Rice Variety</option>
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Row 3: Packing Size, Required Quantity, Destination Port */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <select name="packing_size" className="w-full px-4 py-3 rounded bg-[#1a3d2e] border border-[#c9a227]/30 text-xs text-[#f4efe6] focus:outline-none focus:border-[#c9a227]">
                    <option value="">Packing Size</option>
                    {packageSizes.map((sz) => (
                      <option key={sz} value={sz}>{sz}</option>
                    ))}
                  </select>
                  <input 
                    type="text" 
                    name="quantity"
                    placeholder="Required Quantity" 
                    className="w-full px-4 py-3 rounded bg-[#1a3d2e] border border-[#c9a227]/30 text-xs text-[#f4efe6] placeholder-[#f4efe6]/60 focus:outline-none focus:border-[#c9a227]" 
                  />
                  <input 
                    type="text" 
                    name="destination_port"
                    placeholder="Destination Port" 
                    className="w-full px-4 py-3 rounded bg-[#1a3d2e] border border-[#c9a227]/30 text-xs text-[#f4efe6] placeholder-[#f4efe6]/60 focus:outline-none focus:border-[#c9a227]" 
                  />
                </div>

                {/* Message Field & Submit Button */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end pt-2">
                  <div className="lg:col-span-8">
                    <textarea 
                      rows={2} 
                      name="message"
                      placeholder="Message" 
                      className="w-full px-4 py-3 rounded bg-[#1a3d2e] border border-[#c9a227]/30 text-xs text-[#f4efe6] placeholder-[#f4efe6]/60 focus:outline-none focus:border-[#c9a227]"
                    ></textarea>
                  </div>
                  <div className="lg:col-span-4">
                    <button 
                      type="submit" 
                      disabled={sending}
                      className="w-full py-3.5 rounded bg-[#c9a227] text-[#1a3d2e] font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center space-x-2 shadow-md hover:bg-[#d8b135] transition-colors disabled:opacity-60"
                    >
                      <span>{sending ? 'SENDING...' : 'REQUEST A QUOTE →'}</span>
                    </button>
                  </div>
                </div>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

