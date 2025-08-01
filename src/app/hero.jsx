"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);

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
      <div className="absolute "></div>

      {/* Header Navigation */}
      <header 
        className="relative z-10 px-6 sm:px-10 pt-3 pb-6"
        style={{
          background: 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)'
        }}
      >
        <nav className="flex flex-wrap items-start justify-between gap-10 pt-2.5">
          {/* Logo and Tagline */}
          <div className="flex flex-col min-w-60 w-full max-w-lg">
            <div className="h-20 w-full">
              <Image
                src="/logo-vector-2.svg"
                alt="TraininPink Logo"
                width={536}
                height={81}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <p className="text-[#f3efec] font-poppins text-lg sm:text-xl font-normal leading-relaxed tracking-tight mt-4">
              L'app di Pilates e allenamento n. 1 in Italia
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-end gap-9 font-dm-sans text-white font-extrabold whitespace-nowrap">
            <div className="flex items-center gap-2">
              <span className="text-base">L'APP</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base">PREZZI</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base">BLOG</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>

          {/* Login and CTA */}
          <div className="flex items-center gap-4 sm:gap-6 font-dm-sans">
            <div className="login-link border-b border-[#f3efec] pb-1">
              <span className="text-white text-lg font-bold tracking-tight leading-none">
                Accedi
              </span>
            </div>
            <button className="cta-button flex items-center justify-center gap-3 bg-[#684744] border border-[rgba(243,239,236,0.20)] rounded-lg shadow-[0_2px_20px_0_rgba(0,0,0,0.15)] px-4 py-3 text-white text-xl font-medium leading-snug min-w-60 h-14">
              <span className="font-bold">Inizia la prova gratuita</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-end justify-center pb-20 z-10">
        <div className="text-center max-w-4xl px-6">
          {/* Main Headline */}
          <div className="mb-10">
            <h1 className="text-white font-dm-sans text-xl font-medium leading-7 max-w-96 mx-auto">
              <span className="font-bold">
                Dal 2019 abbiamo aiutato 159.000 donne ad ottenere il corpo dei
                loro sogni
              </span>
            </h1>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-8">
            {/* Primary CTA */}
            <button className="primary-cta flex items-center justify-center gap-3 bg-[#f3efec] border border-[rgba(0,0,0,0.10)] rounded-lg shadow-[0_2px_20px_0_rgba(0,0,0,0.15)] px-4 py-3 text-[#684744] text-xl font-medium leading-snug min-w-60 h-14">
              <span className="font-bold">Parlaci dei tuoi obiettivi</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>

            {/* OR Text */}
            <span className="text-white font-dm-sans text-lg font-normal opacity-90">
              oppure
            </span>

            {/* Secondary CTA */}
            <button className="secondary-cta flex items-center justify-center gap-3 bg-[#684744] border border-[rgba(243,239,236,0.20)] rounded-lg shadow-[0_2px_20px_0_rgba(0,0,0,0.15)] px-4 py-3 text-white text-xl font-medium leading-snug min-w-60 h-14 flex-grow max-w-xs">
              <span className="font-bold">Inizia la prova gratuita</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
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
    </section>
  );
}
