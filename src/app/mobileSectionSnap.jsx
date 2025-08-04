"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaApple, FaFacebook } from "react-icons/fa";

const SCROLL_THRESHOLD = 0.05; // 5% threshold for very responsive transitions

export default function MobileSectionSnap() {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const lastScrollY = useRef(0);

  const sections = [
    {
      id: 0,
      image: "/images/progresstracking.jpg",
      alt: "allenamento",
      width: 1352,
      height: 598,
      title: "Allenamento",
      description:
        "Programmi di allenamento personalizzati per raggiungere i tuoi obiettivi",
    },
    {
      id: 1,
      image: "/images/progresstracking.jpg",
      alt: "nutrizone",
      width: 888,
      height: 393,
      title: "Nutrizione",
      description:
        "Piani nutrizionali studiati per supportare il tuo percorso fitness",
    },
    {
      id: 2,
      image: "/images/progresstracking.jpg",
      alt: "progresstracking",
      width: 888,
      height: 393,
      title: "Progress Tracking",
      description:
        "Monitora i tuoi progressi e celebra ogni traguardo raggiunto",
    },
  ];

  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Handle hydration
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Handle custom scroll behavior with threshold
  useEffect(() => {
    // Don't run scroll logic until hydrated
    if (!isHydrated) return;
    let timeout;

    const handleScroll = () => {
      if (isScrolling || !isHydrated) return;

      // Safety check for browser APIs
      if (typeof window === 'undefined') return;

      const scrollTop = window.scrollY;
      const containerTop = containerRef.current?.offsetTop || 0;
      const sectionHeight = window.innerHeight;
      
      // Calculate when sticky mobile mockup becomes sticky (top-5 = 20px from top)
      // The sticky trigger should be when the section bg arrives and sticky element sticks
      const stickyTriggerPoint = containerTop - sectionHeight ; // Account for top-5
      
      // Only start section snapping when sticky element is in sticky position
      if (scrollTop < stickyTriggerPoint) {
        return;
      }
      
      // Calculate relative scroll from when sticky element becomes sticky
      const relativeScroll = scrollTop - stickyTriggerPoint;

      // Detect scroll direction
      const scrollDirection = scrollTop > lastScrollY.current ? "down" : "up";
      lastScrollY.current = scrollTop;

      // Calculate which section we're in and how far through it
      const sectionIndex = Math.floor(relativeScroll / sectionHeight);
      const sectionProgress = (relativeScroll % sectionHeight) / sectionHeight;

      // Debug logging
     

      // Immediately activate the correct section based on scroll position
      if (sectionIndex !== currentSection && sectionIndex >= 0 && sectionIndex < sections.length) {
         setCurrentSection(sectionIndex);
      }

      // Clear existing timeout
      clearTimeout(timeout);

      // Debounce scroll handling (reduced for smoother response)
      timeout = setTimeout(() => {
        if (sectionIndex >= 0 && sectionIndex < sections.length ) {
          let targetSection = currentSection; // Use current section state

          // Apply direction-based threshold logic
          if (
            scrollDirection === "down" &&
            sectionProgress > SCROLL_THRESHOLD &&
            currentSection < sections.length + 1
          ) {
            // Scrolling down - go to next section
            targetSection = currentSection + 1;
          } else if (
            scrollDirection === "up" &&
            sectionProgress < 0.9 &&
            currentSection > 3
          ) {
            // Scrolling up - go to previous section
            targetSection = currentSection - 1;
          }

          // Snap to target section if needed
          if (targetSection !== currentSection) {
            setIsScrolling(true);
            setCurrentSection(targetSection);

            const targetScroll = stickyTriggerPoint + targetSection * sectionHeight;
            window.scrollTo({
              top: targetScroll,
              behavior: "smooth",
            });

            // Reset scrolling flag after animation
            setTimeout(() => setIsScrolling(false), 600);
          }
        }
        // Handle case when scrolling back before first section
        else if (sectionIndex < 0 && currentSection !== 0) {
          setIsScrolling(true);
          setCurrentSection(0);
          
          window.scrollTo({
            top: stickyTriggerPoint,
            behavior: "smooth",
          });
          
          setTimeout(() => setIsScrolling(false), 600);
        }
      }, 25);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, [isScrolling, sections.length, currentSection, isHydrated]);

  return (
    <section className="bg-[#F1EBE7] md:pt-10">
      <div className="block md:hidden sticky top-15 left-[5%] xl:left-[18%] z-[100] w-full mx-auto ">
        <Image
          src="/images/mobileMockup.png"
          alt="mobileMockup"
          width={348}
          height={714}
          className=" w-[300px]  h-[648px] sm:w-[348px] top-5 left-0 z-[100]  sm:h-[714px]  mx-auto"
        />
      </div>

      <div ref={containerRef} className="md:mt-50 relative">
        {sections.map((section, index) => {
          const isActive = currentSection === index;
          const scaleValue = isActive ? 0.8 : 1; // All slides: 1 when active, 0.8 when inactive
          
          
          return (
            <motion.section
              key={section.id}
              className="h-screen flex flex-col justify-center items-center px-0 md:px-20 relative md:max-h-[850px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
        <Image src='/dotLineFour.svg' alt='dotLineFour' width={1} height={100} className="absolute block md:hidden left-1/2 -top-[0%]" />

              {/* Animated Image */}
              <motion.div
                className="relative z-20 w-full mx-auto max-w-[1360px] h-screen md:h-full"
                animate={{
                  scale: scaleValue,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="h-full md:h-auto"
                >
                  <div
                    className={`overflow-hidden rounded-lg mx-auto shadow-2xl relative h-full md:h-auto ${
                      section.width > 1000
                        ? isActive
                          ? "md:max-w-[1360px] md:max-h-[598px]"
                          : "md:max-w-5xl md:max-h-[480px]"
                        : isActive
                        ? "md:max-w-[1360px] md:max-h-[598px]"
                        : "md:max-w-5xl md:max-h-[480px]"
                    } w-full transition-all duration-600`}
                  >
                    <Image
                      src={section.image}
                      alt={section.alt}
                      width={section.width}
                      height={section.height}
                      className={`w-full h-screen md:h-full object-cover transition-all duration-600
                      ${
                        index === 0
                          ? "xl:object-[0px_-14rem]"
                          : index === 1
                          ? "xl:object-[0px_-32rem]"
                          : "xl:object-[0px_-32rem]"
                      }
                      ${isActive ? "blur-sm" : ""}
                      `}
                      priority={index === 0}
                    />

                    {/* Gradient overlay on all images */}
                    <div
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 85%)",
                      }}
                    />

                    {/* Color overlay for inactive images */}
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: "#DFD1C9",
                        mixBlendMode: "color",
                      }}
                      initial={{ opacity: 1 }}
                      animate={{
                        opacity: isActive ? 0 : 1,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: isActive ? 0.3 : 0,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Title text at bottom right */}
                    <motion.div
                      className="absolute bottom-10 left-[50%] -translate-x-[50%] z-10"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <h2 className="text-2xl md:text-3xl font-normal text-white text-right">
                        {section.title}
                      </h2>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.section>
          );
        })}
      </div>
    </section>
  );
}
