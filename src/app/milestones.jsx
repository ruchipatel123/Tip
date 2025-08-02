'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";

export default function MilestonesSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [isLocked, setIsLocked] = useState(false);
  const [scrollPhase, setScrollPhase] = useState(0); // 0: before lock, 1: locked, 2: after lock
  const [windowHeight, setWindowHeight] = useState(800);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform values for smooth transitions
  const cardsProgress = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const sectionY = useTransform(scrollYProgress, [0.8, 1], [0, -windowHeight]);

  useEffect(() => {
    // Set window height on client side
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight);
      
      const handleResize = () => {
        setWindowHeight(window.innerHeight);
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      if (progress >= 0 && progress < 0.8) {
        setScrollPhase(1); // Locked phase
        setIsLocked(true);
      } else if (progress >= 0.8) {
        setScrollPhase(2); // Transition out phase
        setIsLocked(false);
      } else {
        setScrollPhase(0); // Before lock
        setIsLocked(false);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  // Card animation transforms - increased travel distance
  const getCardTransform = (index) => {
    return useTransform(cardsProgress, [0, 1], [0, -500 - (index * 80)]);
  };

  const card1Y = getCardTransform(0);
  const card2Y = getCardTransform(1);
  const card3Y = getCardTransform(2);

  return (
    <div ref={containerRef} className="relative" style={{ height: '300vh' }}>
      <motion.section 
        ref={sectionRef}
        className="sticky top-0 w-full h-screen overflow-hidden border-t border-black/10"
        style={{ y: scrollPhase === 2 ? sectionY : 0 }}
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
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
            <button className="bg-[#684744] border border-[rgba(243,239,236,0.2)] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.2)] rounded-lg py-[10px] px-4 flex items-center justify-center gap-3 w-[251px] h-[54px] hover:bg-[#7a5653] transition-colors">
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
        <motion.div 
          className="absolute top-[60%] left-[66px] w-[430px] z-10"
          style={{ y: card1Y }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-[32px] p-10 h-[319px]">
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
        </motion.div>

        {/* Top Right Card - 4.3 months */}
        <motion.div 
          className="absolute top-[15%] right-[42px] w-[430px] z-10"
          style={{ y: card2Y }}
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
        </motion.div>

        {/* Bottom Right Card - 117 thousand */}
        <motion.div 
          className="absolute top-[80%] right-[162px] w-[430px] z-10"
          style={{ y: card3Y }}
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
        </motion.div>
      </motion.section>
    </div>
  );
}