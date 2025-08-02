"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SCROLL_THRESHOLD = 0.05; // 5% threshold for very responsive transitions

export default function MobileSection() {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const lastScrollY = useRef(0);
  
  const sections = [
    {
      id: 0,
      image: "/images/allenamento.jpg",
      alt: "allenamento",
      width: 1352,
      height: 598,
      title: "Allenamento",
      description: "Programmi di allenamento personalizzati per raggiungere i tuoi obiettivi"
    },
    {
      id: 1,
      image: "/images/nutrizone.jpg", 
      alt: "nutrizone",
      width: 888,
      height: 393,
      title: "Nutrizione",
      description: "Piani nutrizionali studiati per supportare il tuo percorso fitness"
    },
    {
      id: 2,
      image: "/images/progresstracking.jpg",
      alt: "progresstracking", 
      width: 888,
      height: 393,
      title: "Progress Tracking",
      description: "Monitora i tuoi progressi e celebra ogni traguardo raggiunto"
    }
  ];

  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Handle custom scroll behavior with threshold
  useEffect(() => {
    let timeout;
    
         const handleScroll = () => {
       if (isScrolling) return;
       
       const scrollTop = window.scrollY;
       const containerTop = containerRef.current?.offsetTop || 0;
       const relativeScroll = scrollTop - containerTop;
       const sectionHeight = window.innerHeight;
       
       // Detect scroll direction
       const scrollDirection = scrollTop > lastScrollY.current ? 'down' : 'up';
       lastScrollY.current = scrollTop;
       
       // Calculate which section we're in and how far through it
       const sectionIndex = Math.floor(relativeScroll / sectionHeight);
       const sectionProgress = (relativeScroll % sectionHeight) / sectionHeight;
       
       // Clear existing timeout
       clearTimeout(timeout);
       
       // Debounce scroll handling (reduced for smoother response)
       timeout = setTimeout(() => {
         if (sectionIndex >= 0 && sectionIndex < sections.length) {
           let targetSection = currentSection; // Use current section state
           
           // Apply direction-based threshold logic
           if (scrollDirection === 'down' && sectionProgress > SCROLL_THRESHOLD && currentSection < sections.length - 1) {
             // Scrolling down - go to next section
             targetSection = currentSection + 1;
           } else if (scrollDirection === 'up' && sectionProgress < 0.9 && currentSection > 0) {
             // Scrolling up - go to previous section  
             targetSection = currentSection - 1;
           }
           
           // Snap to target section if needed
           if (targetSection !== currentSection) {
             setIsScrolling(true);
             setCurrentSection(targetSection);
             
             const targetScroll = containerTop + (targetSection * sectionHeight);
             window.scrollTo({
               top: targetScroll,
               behavior: 'smooth'
             });
             
             // Reset scrolling flag after animation
             setTimeout(() => setIsScrolling(false), 600);
           }
         }
         }, 25);
     };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, [isScrolling, sections.length]);

  return (
    <div ref={containerRef} className="bg-[#F1EBE7]">
      {sections.map((section, index) => {
        const isActive = currentSection === index;
        
        return (
          <motion.section
            key={section.id}
            className="h-screen flex flex-col justify-center items-center px-4 md:px-20 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            

            {/* Animated Image */}
            <motion.div
              className="relative z-20"
              animate={{
                scale: isActive ? 1 : 0.8,
              }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`overflow-hidden rounded-lg shadow-2xl relative ${
                  section.width > 1000 
                    ? (isActive ? 'max-w-[1360px] max-h-[598px]' : 'max-w-5xl max-h-[480px]')
                    : (isActive ? 'max-w-[1360px] max-h-[598px]' : 'max-w-5xl max-h-[480px]')
                } w-full h-auto transition-all duration-600`}>
                  <Image
                    src={section.image}
                    alt={section.alt}
                    width={section.width}
                    height={section.height}
                    className="w-full h-full object-cover"
                    priority={index === 0}
                  />
                  
                  {/* Gradient overlay on all images */}
                  <div 
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 85%)'
                    }}
                  />
                  
                  {/* Color overlay for inactive images */}
                  <motion.div 
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: '#DFD1C9',
                      mixBlendMode: 'color'
                    }}
                    initial={{ opacity: 1 }}
                    animate={{ 
                      opacity: isActive ? 0 : 1
                    }}
                    transition={{ 
                      duration: 0.6,
                      delay: isActive ? 0.3 : 0,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Title text at bottom right */}
                  <motion.div
                    className="absolute bottom-4 right-4 z-10"
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

            {/* Section Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {sections.map((_, dotIndex) => (
                <motion.div
                  key={dotIndex}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    dotIndex === currentSection ? 'bg-gray-800 w-8' : 'bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </motion.div>
          </motion.section>
        );
      })}
    </div>
  );
}
