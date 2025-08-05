"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside or on escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".hamburger-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    // Prevent body scroll when menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
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
        className={`absolute inset-0 w-full h-full min-h-screen object-cover transition-opacity duration-1000 ease-in-out ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          objectPosition: 'center center',
        }}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedData={() => setVideoLoaded(true)}
        onError={() => setVideoLoaded(false)}
        onCanPlay={() => setVideoLoaded(true)}
      >
        <source src="/videos/herovideo.mp4" type="video/mp4" />
      </video>

      {/* Loading Indicator */}
      

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/20 md:bg-transparent"></div>

      {/* Header Navigation */}
      <header
        className="relative z-20 px-2 sm:px-6 lg:px-10 pt-3 pb-6"
        style={{
          background:
            "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
        }}
      >
        {/* Mobile Header */}
        <nav className="lg:hidden flex items-center justify-between pt-2.5">
          {/* Mobile Logo */}
          <div className="h-12 w-32">
            <Link href="/" className="cursor-pointer">           
             <Image
              src="/logo-vector-2.svg"
              alt="TraininPink Logo"
              width={536}
              height={81}
              className="w-full h-full object-contain"
              priority
            />
            </Link>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
          <button className="w-fit bg-[#684744] cursor-grab border border-[rgba(243,239,236,0.20)] rounded-lg shadow-[0_2px_20px_0_rgba(0,0,0,0.15)] px-3 sm:px-4 py-3 text-white text-lg font-medium leading-snug h-12 hover:bg-[#7a5653] transition-colors flex items-center justify-center gap-3">
            <p className="font-dm-sans font-bold">Prova gratis</p>
             <FaArrowRight />
          </button>
          {/* Hamburger Menu Button */}
          <button
            className="hamburger-button cursor-grab flex items-center justify-center w-10 h-10 text-white z-30"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="relative w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out mt-1 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out mt-1 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
          </div>
        </nav>

        {/* Desktop Header */}
        <nav className="hidden lg:flex lg:items-start lg:justify-between gap-10 pt-2.5">
          {/* Logo and Tagline */}
          <div className="flex flex-col min-w-60 w-full max-w-lg">
            <div className="h-20 w-full">
            <Link href="/" className="cursor-pointer">           
              <Image
                src="/logo-vector-2.svg"
                alt="TraininPink Logo"
                width={536}
                height={81}
                className="object-contain"
                priority
              />
              </Link>
            </div>
            <p className="text-[#f3efec] font-poppins text-xl-custom font-normal leading-relaxed tracking-tight mt-4">
              L'app di Pilates e <br /> allenamento n. 1 in Italia
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-6 lg:gap-10 justify-between xl:w-[55%] flex-shrink-0">
            <div className="flex items-end gap-7 font-dm-sans text-white font-extrabold whitespace-nowrap">
              <div className="flex items-center gap-2 cursor-grab hover:opacity-80 transition-opacity">
                <span className="text-base">L'APP</span>
                <FaArrowRight />
              </div>
              <div className="flex items-center gap-2 cursor-grab hover:opacity-80 transition-opacity">
                <span className="text-base">PREZZI</span>
                <FaArrowRight />
              </div>
              <div className="flex items-center gap-2 cursor-grab hover:opacity-80 transition-opacity">
                <span className="text-base">BLOG</span>
                <FaArrowRight />
              </div>
            </div>

            {/* Desktop Login and CTA */}
            <div className="flex items-center gap-4 lg:gap-6 font-dm-sans flex-shrink-0">
              <div className="login-link border-b border-[#f3efec] pb-1 cursor-grab hover:opacity-80 transition-opacity">
                <span className="text-white text-lg font-bold tracking-tight leading-none">
                  Accedi
                </span>
              </div>
              <button className="cta-button cursor-grab flex items-center justify-center gap-3 bg-[#684744] border border-[rgba(243,239,236,0.20)] rounded-lg shadow-[0_2px_20px_0_rgba(0,0,0,0.15)] px-4 py-3 text-white text-xl font-medium leading-snug min-w-60 h-14 hover:bg-[#7a5653] transition-colors whitespace-nowrap">
                <span className="font-bold font-dm-sans">
                  Inizia la prova gratuita
                </span>
                <FaArrowRight size={15} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-40" />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden mobile-menu fixed top-0 right-0 h-full w-80 bg-[#553B39] z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
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
              className="text-white hover:text-gray-300 cursor-grab transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
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
        </div>
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-end justify-center pb-12 sm:pb-10 w-full z-10">
        <div className="text-center px-2  sm:px-6 w-full md:w-auto mx-auto">
          {/* Main Headline */}
          <div className="mb-8 sm:mb-10">
            <h1 className="text-white font-dm-sans text-lg sm:text-xl lg:text-xl max-w-[400px] mx-auto font-medium leading-6 sm:leading-7 ">
              <span className="font-bold hidden lg:block">
                Dal 2019 abbiamo aiutato 159.000 donne ad ottenere il corpo dei
                loro sogni
              </span>
              <span className="block text-[#F3EFEC] font-poppins lg:hidden text-2xl-up-custom leading-8 font-normal">
              L'app di Pilates e <br/> allenamento<br/>
              n. 1 in Italia
              </span>
            </h1>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
            {/* Primary CTA */}
            <button className="primary-cta font-dm-sans hidden cursor-grab lg:flex items-center justify-center gap-3 bg-[#f3efec] border border-[rgba(0,0,0,0.10)] rounded-lg shadow-[0_2px_20px_0_rgba(0,0,0,0.15)] px-4 py-[10px] text-[#684744] text-xl font-bold leading-[1.45em] h-[54px] whitespace-nowrap">
              <span className="font-bold text-center">
                Parlaci dei tuoi obiettivi
              </span>
              <FaArrowRight size={13.33} />
            </button>

            {/* OR Text */}
            <span className="text-white font-dm-sans hidden lg:block text-[18px] font-normal leading-[1.61em] opacity-90">
              oppure
            </span>

            {/* Secondary CTA */}
            <button className="secondary-cta flex items-center justify-center gap-3 bg-[#684744] border border-[rgba(243,239,236,0.20)] max-w-[358px] rounded-lg shadow-[0_2px_20px_0_rgba(0,0,0,0.15)] text-white text-lg md:text-xl font-medium leading-[1.45em] px-14 md:px-4 py-[10px] w-full lg:min-w-[273.33px] h-[54px]">
              <span className="font-bold font-dm-sans">Inizia la prova gratuita</span>
              <FaArrowRight size={13.33} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
