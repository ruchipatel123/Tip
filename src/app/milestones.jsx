"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

export default function MilestonesSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [isLocked, setIsLocked] = useState(false);
  const [scrollPhase, setScrollPhase] = useState(0); // 0: before lock, 1: locked, 2: after lock
  const [isDesktop, setIsDesktop] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform values for smooth transitions - only on desktop
  const cardsProgress = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  useEffect(() => {
    // Detect desktop on client side
    if (typeof window !== "undefined") {
      setIsDesktop(window.innerWidth >= 1024);

      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 1024);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    // Only apply scroll locking behavior on desktop
    if (!isDesktop) return;

    const unsubscribe = scrollYProgress.onChange((progress) => {
      if (progress >= 0 && progress <= 0.8) {
        setScrollPhase(1); // Locked phase
        setIsLocked(true);
      } else {
        setScrollPhase(0); // Not locked
        setIsLocked(false);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, isDesktop]);

  // Card animation transforms - increased travel distance by 60%
  const getCardTransform = (index) => {
    return useTransform(cardsProgress, [0, 1], [0, -800 - index * 128]);
  };

  const card1Y = getCardTransform(0);
  const card2Y = getCardTransform(1);
  const card3Y = getCardTransform(2);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: isDesktop ? "200vh" : "auto" }}
    >
      <motion.section
        ref={sectionRef}
        className={`w-full h-screen overflow-hidden border-t border-black/10 ${
          isDesktop ? "sticky top-0" : "relative"
        }`}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          {/* Mobile Background Image */}
          <Image
            src="/images/parallaxBottomImage.jpg"
            alt="Woman in workout attire"
            fill
            className="object-cover lg:hidden"
            priority
          />
          {/* Tablet and Desktop Background Image */}
          <Image
            src="/images/tipModelParallax.jpg"
            alt="Woman in workout attire"
            fill
            className="object-cover hidden lg:block"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Center Content */}
        <div className="absolute top-40 left-1/2 md:top-1/2 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 px-4 sm:px-6 w-full md:w-fit">
          <div className="flex flex-col items-center gap-6 sm:gap-4 w-full md:max-w-lg">
            {/* Logo */}
            <div className="flex flex-col items-center pb-2 sm:pb-[9px]">
              <div className="w-full max-w-[224px] h-[32px] sm:h-[43px] flex items-center justify-center">
                <Image
                  src="/logo/trainPinkLogoParallax.svg"
                  alt="traininpinkLogo"
                  width={224}
                  height={43}
                />
              </div>
            </div>

            {/* Tagline */}
            <p className="font-dm-sans text-lg sm:text-xl font-medium leading-[26px] sm:leading-[29px] text-[#F3EFEC] text-center max-w-sm lg:max-w-[379px]">
              Milestones from <br className="block md:hidden"/> women like you.
            </p>

            {/* CTA Button */}
            <button className="md:bg-[#684744] bg-[#F3EFEC] border border-[rgba(243,239,236,0.2)] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.2)] rounded-lg py-3 px-4 sm:py-[10px] sm:px-2 flex items-center justify-center gap-3 w-full sm:max-w-[251px] h-12 sm:h-[54px]  transition-colors">
              <span className="font-dm-sans font-bold text-lg sm:text-lg leading-[24px] sm:leading-[29px] md:text-white text-[#684744]">
                Inizia la prova gratuita
              </span>
              <div className="arrow-container">
                <FaArrowRight size={15} className="md:text-white text-[#684744] arrow-slide" />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Stats Cards - Horizontal Scrollable */}
        <div className="lg:hidden absolute bottom-12 left-0 right-0 z-10 px-4">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">
            {/* Card 1 - 40 thousand+ */}
            <div className="bg-white/10  rounded-2xl p-10 py-12 min-w-[280px] snap-start flex-shrink-0">
              <div className="flex flex-col gap-7">
                <div className="flex items-end gap-2 pb-5 border-b border-white/16">
                  <span className="font-poppins text-5xl font-medium leading-[44px] tracking-[-2px] text-white">
                    4.3
                  </span>
                  <span className="font-poppins text-xl font-medium leading-[32px] tracking-[-0.6px] text-white pb-1">
                    months
                  </span>
                </div>
                <p className="font-poppins text-lg leading-[22px] tracking-[-0.05px] text-white">
                  High loyalty
                  <br />
                  retention rate
                </p>
              </div>
            </div>
           

            {/* Card 2 - 4.3 months */}
            

            {/* Card 3 - 117 thousand */}
            <div className="bg-white/10  rounded-2xl p-10 py-12 min-w-[280px] snap-start flex-shrink-0">
              <div className="flex flex-col gap-7">
                <div className="flex items-end gap-2 pb-5 border-b border-white/16">
                  <span className="font-poppins text-5xl font-medium leading-[44px] tracking-[-2px] text-white">
                    117
                  </span> 
                  <span className="font-poppins text-[24px] font-medium leading-[32px] tracking-[-0.6px] text-white pb-1">
                    thousand
                  </span>
                </div>
                <p className="font-poppins text-[16px] leading-[22px] tracking-[-0.05px] text-white">
                  Followers on
                  <br />
                  social media
                </p>
              </div>
            </div>
            <div className="bg-white/10  rounded-2xl p-10 py-12 min-w-[280px] snap-start flex-shrink-0">
              <div className="flex flex-col gap-7">
                <div className="flex items-end gap-2 pb-5 border-b border-white/16">
                  <span className="font-poppins text-5xl font-medium leading-[44px] tracking-[-2px] text-[#F3EFEC]">
                    40
                  </span>
                  <span className="font-poppins text-[24px] font-medium leading-[32px] tracking-[-0.6px] text-[#F3EFEC] pb-1">
                    thousand+
                  </span>
                </div>
                <p className="font-poppins text-[16px] leading-[22px] tracking-[-0.05px] text-white">
                  Currently
                  <br />
                  subscribed users
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Floating Stats Cards */}
        {/* Left Card - 40 thousand+ */}
        <motion.div
          className="hidden lg:block absolute top-[60%] left-[66px] w-[300px] xl:w-[430px] z-10"
          style={{ y: isDesktop ? card1Y : 0 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-[32px] p-4 xl:p-10 h-[319px]">
            <div className="flex flex-col gap-[20px] xl:gap-[60px] h-full">
              <div className="flex flex-wrap xl:flex-nowrap items-end xl:gap-[14px] pb-[25px] border-b border-white/16">
                <span className="font-poppins text-[80px] font-medium leading-[88px] tracking-[-4px] text-[#F3EFEC]">
                  40
                </span>
                <span className="font-poppins text-[48px] font-medium leading-[66px] tracking-[-1.2px] text-[#F3EFEC] pb-2">
                  thousand+
                </span>
              </div>
              <div className="h-[66px]">
                <p className="font-poppins text-[28px] leading-[36px] tracking-[-0.1px] text-white">
                  Currently
                  <br />
                  subscribed users
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Top Right Card - 4.3 months */}
        <motion.div
          className="hidden lg:block absolute top-[15%] right-[42px] w-[300px] xl:w-[430px] z-10"
          style={{ y: isDesktop ? card2Y : 0 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-[32px] p-4 xl:p-10 h-[319px]">
            <div className="flex flex-col gap-[20px] xl:gap-[60px] h-full">
              <div className="flex flex-wrap xl:flex-nowrap items-end xl:gap-[14px] pb-[25px] border-b border-[rgba(22,42,65,0.16)]">
                <span className="font-poppins text-[80px] font-medium leading-[88px] tracking-[-4px] text-white">
                  4.3
                </span>
                <span className="font-poppins text-[48px] font-medium leading-[66px] tracking-[-1.2px] text-white pb-2">
                  months
                </span>
              </div>
              <div className="h-[66px]">
                <p className="font-poppins text-[28px] leading-[36px] tracking-[-0.1px] text-white">
                  High loyalty
                  <br />
                  retention rate
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Right Card - 117 thousand */}
        <motion.div
          className="hidden lg:block absolute top-[80%] right-[4%] w-[300px] xl:w-[430px] z-10"
          style={{ y: isDesktop ? card3Y : 0 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-[32px] p-4 xl:p-10 h-[319px]">
            <div className="flex flex-col gap-[20px] xl:gap-[60px] h-full">
              <div className="flex flex-wrap xl:flex-nowrap items-end xl:gap-[14px] pb-[25px] border-b border-[rgba(22,42,65,0.16)]">
                <span className="font-poppins text-[80px] font-medium leading-[88px] tracking-[-4px] text-white">
                  117
                </span>
                <span className="font-poppins text-[48px] font-medium leading-[66px] tracking-[-1.2px] text-white pb-2">
                  thousand
                </span>
              </div>
              <div className="h-[66px]">
                <p className="font-poppins text-[28px] leading-[36px] tracking-[-0.1px] text-white">
                  Followers on
                  <br />
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
