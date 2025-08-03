"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside or on escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.hamburger-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    // Prevent body scroll when menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={
        !videoLoaded
          ? { backgroundImage: "url('/images/heroBackground.png')" }
          : {}
      }
    >
      {/* Video Background */}
      <video
        className={`absolute inset-0 w-full h-full object-cover ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        onError={() => setVideoLoaded(false)}
      >
        <source src="/videos/herovideo.mp4" type="video/mp4" />
      </video>

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/20 md:bg-transparent"></div>

      {/* Header Navigation */}
      <header 
        className="relative z-20 px-4 sm:px-6 lg:px-10 pt-3 pb-6"
        style={{
          background: 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)'
        }}
      >
        {/* Mobile Header */}
        <nav className="lg:hidden flex items-center justify-between pt-2.5">
          {/* Mobile Login */}
          <div className="login-link border-b border-[#f3efec] pb-1">
            <span className="text-white text-sm font-bold tracking-tight leading-none">
              Accedi
            </span>
          </div>

          {/* Mobile Logo */}
          <div className="h-12 w-32">
            <Image
              src="/logo-vector-2.svg"
              alt="TraininPink Logo"
              width={536}
              height={81}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="hamburger-button flex items-center justify-center w-10 h-10 text-white z-30"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="relative w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out mt-1 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out mt-1 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </nav>

        {/* Desktop Header */}
        <nav className="hidden lg:flex lg:items-start lg:justify-between gap-10 pt-2.5">
          {/* Logo and Tagline */}
          <div className="flex flex-col min-w-60 w-full max-w-lg">
            <div className="h-20 w-full">
              <Image
                src="/logo-vector-2.svg"
                alt="TraininPink Logo"
                width={536}
                height={81}
                className="object-contain"
                priority
              />
            </div>
            <p className="text-[#f3efec] font-poppins text-xl font-normal leading-relaxed tracking-tight mt-4">
              L'app di Pilates e <br/> allenamento n. 1 in Italia
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-10 justify-between xl:w-[55%]">
          <div className="flex items-end gap-7 font-dm-sans text-white font-extrabold whitespace-nowrap">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <span className="text-base">L'APP</span>
              <FaArrowRight />
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <span className="text-base">PREZZI</span>
              <FaArrowRight />
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <span className="text-base">BLOG</span>
              <FaArrowRight />
            </div>
          </div>

          {/* Desktop Login and CTA */}
          <div className="flex items-center gap-6 font-dm-sans">
            <div className="login-link border-b border-[#f3efec] pb-1 cursor-pointer hover:opacity-80 transition-opacity">
              <span className="text-white text-lg font-bold tracking-tight leading-none">
                Accedi
              </span>
            </div>
            <button className="cta-button flex items-center justify-center gap-3 bg-[#684744] border border-[rgba(243,239,236,0.20)] rounded-lg shadow-[0_2px_20px_0_rgba(0,0,0,0.15)] px-4 py-3 text-white text-xl font-medium leading-snug min-w-60 h-14 hover:bg-[#7a5653] transition-colors">
              <span className="font-bold font-['DM Sans']">Inizia la prova gratuita</span>
              <FaArrowRight size={15} />
            </button>
          </div>
          </div>
        </nav>

        {/* Mobile Tagline */}
        <div className="lg:hidden text-center mt-4">
          <p className="text-[#f3efec] font-poppins text-sm font-normal leading-relaxed tracking-tight">
            L'app di Pilates e allenamento n. 1 in Italia
          </p>
        </div>

        {/* Mobile CTA Button */}
        <div className="lg:hidden mt-6">
          <button className="cta-button flex items-center justify-center gap-3 bg-[#684744] border border-[rgba(243,239,236,0.20)] rounded-lg shadow-[0_2px_20px_0_rgba(0,0,0,0.15)] px-4 py-3 text-white text-lg font-medium leading-snug w-full h-12 hover:bg-[#7a5653] transition-colors">
            <span className="font-bold">Inizia la prova gratuita</span>
            <FaArrowRight />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-40" />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden mobile-menu fixed top-0 right-0 h-full w-80 bg-[#553B39] z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="h-8 w-24">
              <Image
                src="/logo-vector-2.svg"
                alt="TraininPink Logo"
                width={536}
                height={81}
                className="w-full h-full object-contain"
              />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 py-6">
            <nav className="space-y-2">
              <a
                href="#"
                className="flex items-center justify-between px-6 py-4 text-white hover:bg-white/10 transition-colors font-dm-sans font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-lg">L'APP</span>
                <FaArrowRight />
              </a>
              <a
                href="#"
                className="flex items-center justify-between px-6 py-4 text-white hover:bg-white/10 transition-colors font-dm-sans font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-lg">PREZZI</span>
                <FaArrowRight />
              </a>
              <a
                href="#"
                className="flex items-center justify-between px-6 py-4 text-white hover:bg-white/10 transition-colors font-dm-sans font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-lg">BLOG</span>
                <FaArrowRight />
              </a>
            </nav>
          </div>

          {/* Menu Footer */}
          <div className="p-6 border-t border-white/10">
            <div className="space-y-4">
              <div className="text-center">
                <span className="text-white text-sm font-dm-sans">
                  L'app di Pilates e allenamento n. 1 in Italia
                </span>
              </div>
              <button className="w-full bg-[#684744] border border-[rgba(243,239,236,0.20)] rounded-lg shadow-[0_2px_20px_0_rgba(0,0,0,0.15)] px-4 py-3 text-white text-lg font-medium leading-snug h-12 hover:bg-[#7a5653] transition-colors flex items-center justify-center gap-3">
                <span className="font-bold">Inizia la prova gratuita</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-end justify-center pb-16 sm:pb-10 z-10">
        <div className="text-center max-w-4xl px-4 sm:px-6">
          {/* Main Headline */}
          <div className="mb-8 sm:mb-10">
            <h1 className="text-white font-dm-sans text-lg sm:text-xl lg:text-xl max-w-[400px] mx-auto font-medium leading-6 sm:leading-7 ">
              <span className="font-bold">
                Dal 2019 abbiamo aiutato 159.000 donne ad ottenere il corpo dei
                loro sogni
              </span>
            </h1>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8">
            {/* Primary CTA */}
            <button className="primary-cta flex items-center justify-center gap-3 bg-[#f3efec] border border-[rgba(0,0,0,0.10)] rounded-lg shadow-[0_2px_20px_0_rgba(0,0,0,0.15)] px-4 py-3 text-[#684744] text-lg sm:text-xl font-medium leading-snug w-full sm:min-w-60 sm:w-auto h-14">
              <span className="font-bold text-center">Parlaci dei tuoi obiettivi</span>
              <FaArrowRight size={15} />
            </button>

            {/* OR Text */}
            <span className="text-white font-dm-sans text-lg font-normal opacity-90">
              oppure
            </span>

            {/* Secondary CTA */}
            <button className="secondary-cta flex items-center justify-center gap-3 bg-[#684744] border border-[rgba(243,239,236,0.20)] rounded-lg shadow-[0_2px_20px_0_rgba(0,0,0,0.15)] px-4 py-3 text-white text-lg sm:text-xl font-medium leading-snug w-full sm:min-w-60 sm:w-auto h-14">
              <span className="font-bold">Inizia la prova gratuita</span>
              <FaArrowRight size={15} />
               
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
