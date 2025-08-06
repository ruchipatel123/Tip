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
  const [windowHeight, setWindowHeight] = useState(0);
  const lastScrollY = useRef(0);

  const sections = [
    {
      id: 0,
      image: "/images/allenamento.jpg",
      alt: "allenamento",
      width: 1352,
      height: 598,
      title: "Allenamento",
      description:
        "Programmi di allenamento personalizzati per raggiungere i tuoi obiettivi",
      video: "https://res.cloudinary.com/dga6g9bws/video/upload/v1754478663/Homepage__cropped_bmbpww.mp4",
    },
    {
      id: 1,
      image: "/images/nutrizone.jpg",
      alt: "nutrizone",
      width: 888,
      height: 393,
      title: "Nutrizione",
      description:
        "Piani nutrizionali studiati per supportare il tuo percorso fitness",
      video: "https://res.cloudinary.com/dga6g9bws/video/upload/v1754478663/Nutrizione_cropped__szpdvx.mp4",
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
      video: "https://res.cloudinary.com/dga6g9bws/video/upload/v1754478662/Progress_Tracking_cropped_cqhtn5.mp4",
    },
  ];

  // Default video for homepage/initial state
  const defaultVideo = "https://res.cloudinary.com/dga6g9bws/video/upload/v1754478663/Homepage__cropped_bmbpww.mp4";

  // Function to get current video based on active section
  const getCurrentVideo = () => {
    // Note: currentSection === index+1 logic in this component
    const adjustedSection = currentSection - 1;
    if (adjustedSection >= 0 && adjustedSection < sections.length) {
      return sections[adjustedSection].video;
    }
    return defaultVideo;
  };

  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Handle hydration and window height
  useEffect(() => {
    setIsHydrated(true);
    setWindowHeight(window.innerHeight);

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle video source changes and loading with caching
  const [currentVideoSrc, setCurrentVideoSrc] = useState(defaultVideo);
  const [videoLoaded, setVideoLoaded] = useState(true); // Start as loaded for initial video
  const [loadedVideos, setLoadedVideos] = useState(new Set([defaultVideo])); // Cache loaded videos
  const [pendingVideoSrc, setPendingVideoSrc] = useState(null);
  const videoRef = useRef(null);
  
  useEffect(() => {
    if (!isHydrated) return;
    
    const newVideoSrc = getCurrentVideo();
    if (newVideoSrc !== currentVideoSrc) {
      // Check if video is already loaded
      if (loadedVideos.has(newVideoSrc)) {
        // Video already loaded, switch immediately
        setCurrentVideoSrc(newVideoSrc);
        setVideoLoaded(true);
      } else {
        // Video not loaded yet, need to load it
        setPendingVideoSrc(newVideoSrc);
        setVideoLoaded(false);
      }
    }
  }, [currentSection, isHydrated, currentVideoSrc, loadedVideos]);

  // Handle video loading events
  const handleVideoLoaded = () => {
    setVideoLoaded(true);
    // Add current video to loaded cache
    if (currentVideoSrc) {
      setLoadedVideos(prev => new Set(prev).add(currentVideoSrc));
    }
  };

  const handleVideoLoadStart = () => {
    // Only set loading to false if video is not already cached
    if (!loadedVideos.has(currentVideoSrc)) {
      setVideoLoaded(false);
    }
  };

  const handleVideoError = () => {
    setVideoLoaded(false);
    console.warn('Video failed to load:', pendingVideoSrc || currentVideoSrc);
  };

  // Effect to handle pending video changes
  useEffect(() => {
    if (pendingVideoSrc && pendingVideoSrc !== currentVideoSrc) {
      setCurrentVideoSrc(pendingVideoSrc);
      setPendingVideoSrc(null);
    }
  }, [pendingVideoSrc, currentVideoSrc, loadedVideos]);

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
      {/* Mobile iPhone Frame with Video */}
      <div className="block md:hidden sticky top-[10vh] z-[100] w-full mx-auto">
        <div 
          className="mx-auto flex items-center justify-center relative"
          style={{
            '--safe-width': 'min(348px, 85vw, calc(85vh / 2.05))',
            '--safe-height': 'min(714px, 85vh, calc(85vw * 2.05))',
            width: 'var(--safe-width)',
            height: 'var(--safe-height)'
          }}
        >
          {/* Background placeholder to prevent empty space */}
          <div 
            className="rounded-2xl rounded-t-[1.5rem] bg-[#F1EBE7] z-[0]"
            style={{
              width: '90%',
              height: '95%'
            }}
          />
          
          {/* Video Layer (above background) */}
          <video
            ref={videoRef}
            className={`rounded-2xl rounded-t-[1.5rem] object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1] transition-opacity duration-300 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{
              width: '90%',
              height: '95%'
            }}
            autoPlay
            muted
            loop
            playsInline
            src={currentVideoSrc}
            onLoadedData={handleVideoLoaded}
            onLoadStart={handleVideoLoadStart}
            onError={handleVideoError}
            onCanPlay={handleVideoLoaded}
          >
            Your browser does not support the video tag.
          </video>
          
          {/* Loading spinner when video is not loaded */}
          {!videoLoaded && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2] flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
            </div>
          )}
          
          {/* iPhone Frame Overlay (above) */}
          <div 
            className="absolute inset-0 pointer-events-none z-[3]"
            style={{
              backgroundImage: 'url("/iPhone bezel.png")',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </div>
      </div>

      <div ref={containerRef} className="md:mt-50 relative">
        {sections.map((section, index) => {
          const isActive = currentSection === index+1;
          const scaleValue = isActive ? 1 : 0.8; // All slides: 1 when active, 0.8 when inactive
          
          
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
                      className="absolute left-[50%] -translate-x-[50%] z-10"
                      style={{
                        bottom: windowHeight < 700 
                          ? '1rem'    // bottom-4
                          : windowHeight < 800 
                          ? '2rem'    // bottom-8
                          : windowHeight < 850 
                          ? '3rem'    // bottom-12
                          : '3.75rem' // bottom-15
                      }}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <h2 className="text-2xl md:text-3xl font-poppins font-normal text-white text-center text-nowrap">
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
