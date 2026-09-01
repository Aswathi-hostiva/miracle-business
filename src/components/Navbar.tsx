'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f4efe6]/95 backdrop-blur-md border-b border-stone-200 h-20 overflow-visible text-[#1a3d2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        
        {/* Brand Logo - Miracle Business Hub */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/images/miracle_png.png"
            alt="Miracle Business Hub"
            width={480}
            height={240}
            className="h-32 sm:h-60 md:h-[17rem] w-auto object-contain -my-6 sm:-my-20 md:-my-[4.5rem]"
            priority
          />
        </Link>

        {/* 3 Main Navigation Links Only */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-xs uppercase tracking-[0.2em] font-semibold transition-colors py-1 ${
                  isActive ? 'text-[#1a3d2e] font-bold' : 'text-[#1a3d2e]/80 hover:text-[#1a3d2e]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c9a227] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Dark Green Button - Matching Reference "REQUEST A QUOTE →" */}
        <div className="relative z-10 flex items-center space-x-4">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center space-x-2 px-6 py-3 rounded bg-[#1a3d2e] text-[#f4efe6] font-bold text-xs uppercase tracking-wider hover:bg-[#122b20] transition-colors shadow-sm"
          >
            <span>REQUEST A QUOTE</span>
            <ArrowRight className="w-4 h-4 text-[#c9a227]" />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded text-[#1a3d2e] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f4efe6] border-b border-stone-300 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-serif tracking-wider py-2 border-b border-stone-200 flex items-center justify-between ${
                  pathname === link.href ? 'text-[#1a3d2e] font-bold' : 'text-[#1a3d2e]/80'
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-[#c9a227]" />
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full mt-4 py-3 rounded bg-[#1a3d2e] text-[#f4efe6] font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center space-x-2"
          >
            <span>REQUEST A QUOTE</span>
            <ArrowRight className="w-4 h-4 text-[#c9a227]" />
          </Link>
        </div>
      )}
    </header>
  );
};
