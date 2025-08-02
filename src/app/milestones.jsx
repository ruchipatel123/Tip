'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function MilestonesSection() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1)
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + sectionHeight)));
      
      // Cards start moving when 20% through section, complete at 80%
      const cardProgress = Math.max(0, Math.min(1, (progress - 0.2) / 0.6));
      
      setScrollProgress(cardProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCardTransform = (index) => {
    const baseY = scrollProgress * -200; // Cards move up 200px
    const stagger = index * 20; // Slight stagger between cards
    return `translateY(${baseY - stagger}px)`;
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-[1095px] overflow-hidden border-t border-black/10"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/tipModelParallax.jpg"
          alt="Woman in workout attire"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Center Content */}
      <div className="absolute top-[456px] left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-8 w-[455px]">
          {/* Logo */}
          <div className="flex flex-col items-center pb-[9px]">
            <div className="w-[224px] h-[43px] flex items-center justify-center">
              <span className="text-white text-2xl font-light tracking-wider">
                traininpink
              </span>
            </div>
          </div>
          
          {/* Tagline */}
          <p className="font-['DM_Sans'] text-xl font-medium leading-[29px] text-[#F3EFEC] text-center w-[379px]">
            Milestones from women like you.
          </p>
          
          {/* CTA Button */}
          <button className="bg-[#684744] border border-[rgba(243,239,236,0.2)] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.2)] rounded-lg py-[10px] px-4 flex items-center justify-center gap-3 w-[251px] h-[54px]">
            <span className="font-['DM_Sans'] text-lg leading-[29px] text-white">
              Inizia la prova gratuita
            </span>
            <svg width="13.33" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Floating Stats Cards */}
      {/* Left Card - 40 thousand+ */}
      <div 
        className="absolute top-[558px] left-[66px] w-[430px] z-10 transition-transform duration-75 ease-out"
        style={{ transform: getCardTransform(0) }}
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-[32px] p-10 h-full">
          <div className="flex flex-col gap-[60px] h-full">
            <div className="flex items-end gap-[14px] pb-[25px] border-b border-white/16">
              <span className="font-['Poppins'] text-[80px] font-medium leading-[88px] tracking-[-4px] text-[#F3EFEC]">
                40
              </span>
              <span className="font-['Poppins'] text-[48px] font-medium leading-[66px] tracking-[-1.2px] text-[#F3EFEC] pb-2">
                thousand+
              </span>
            </div>
            <div className="h-[66px]">
              <p className="font-['Poppins'] text-[28px] leading-[36px] tracking-[-0.1px] text-white">
                Currently<br />
                subscribed users
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Right Card - 4.3 months */}
      <div 
        className="absolute top-[31px] right-[42px] w-[430px] z-10 transition-transform duration-75 ease-out"
        style={{ transform: getCardTransform(1) }}
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-[32px] p-10 h-[319px]">
          <div className="flex flex-col gap-[60px] h-full">
            <div className="flex items-end gap-[14px] pb-[25px] border-b border-[rgba(22,42,65,0.16)]">
              <span className="font-['Poppins'] text-[80px] font-medium leading-[88px] tracking-[-4px] text-white">
                4.3
              </span>
              <span className="font-['Poppins'] text-[48px] font-medium leading-[66px] tracking-[-1.2px] text-white pb-2">
                months
              </span>
            </div>
            <div className="h-[66px]">
              <p className="font-['Poppins'] text-[28px] leading-[36px] tracking-[-0.1px] text-white">
                High loyalty<br />
                retention rate
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Right Card - 117 thousand */}
      <div 
        className="absolute top-[776px] right-[162px] w-[430px] z-10 transition-transform duration-75 ease-out"
        style={{ transform: getCardTransform(2) }}
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-[32px] p-10 h-[319px]">
          <div className="flex flex-col gap-[60px] h-full">
            <div className="flex items-end gap-[14px] pb-[25px] border-b border-[rgba(22,42,65,0.16)]">
              <span className="font-['Poppins'] text-[80px] font-medium leading-[88px] tracking-[-4px] text-white">
                117
              </span>
              <span className="font-['Poppins'] text-[48px] font-medium leading-[66px] tracking-[-1.2px] text-white pb-2">
                thousand
              </span>
            </div>
            <div className="h-[66px]">
              <p className="font-['Poppins'] text-[28px] leading-[36px] tracking-[-0.1px] text-white">
                Followers on<br />
                social media
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 