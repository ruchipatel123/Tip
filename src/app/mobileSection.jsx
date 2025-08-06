"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaApple, FaFacebook } from "react-icons/fa";
import Link from "next/link";

const SCROLL_THRESHOLD = 0.05; // 5% threshold for very responsive transitions

export default function MobileSection() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
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
      video: "https://res.cloudinary.com/dga6g9bws/video/upload/v1754514976/Allenamento_New__nvpk58.mp4",
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
  const defaultVideo = "https://res.cloudinary.com/dga6g9bws/video/upload/v1754478662/Progress_Tracking_cropped_cqhtn5.mp4";

  // Function to get current video based on active section
  const getCurrentVideo = () => {
    if (currentSection >= 0 && currentSection < sections.length) {
      return sections[currentSection].video;
    }
    return defaultVideo;
  };

  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Handle hydration
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Handle video source changes and loading with caching
  const [currentVideoSrc, setCurrentVideoSrc] = useState(defaultVideo);
  const [videoLoaded, setVideoLoaded] = useState(true); // Start as loaded for initial video
  const [loadedVideos, setLoadedVideos] = useState(new Set([defaultVideo])); // Cache loaded videos
  const [pendingVideoSrc, setPendingVideoSrc] = useState(null);
  
  // State for rotation animation
  const [isRotated, setIsRotated] = useState(false);
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);
  
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

  // Handle video time tracking and rotation logic
  const handleVideoTimeUpdate = () => {
    if (videoRef.current && currentSection === 1) { // Only for Nutrizione section (id: 1)
      const currentTime = videoRef.current.currentTime;
      setVideoCurrentTime(currentTime);
      
      // Rotate at 24 seconds
      if (currentTime >= 24 && !isRotated) {
        setIsRotated(true);
      }
      
      // Reset rotation when video ends (or loops)
      if (currentTime < 24 && isRotated) {
        setIsRotated(false);
      }
    }
  };

  // Reset rotation when changing sections or when not on Nutrizone section
  useEffect(() => {
    if (currentSection !== 1 && isRotated) {
      setIsRotated(false);
    }
  }, [currentSection, isRotated]);

  // Handle video end event to reset rotation
  const handleVideoEnded = () => {
    if (currentSection === 1) {
      setIsRotated(false);
    }
  };

  // Handle custom scroll behavior with threshold
  useEffect(() => {
    // Don't run scroll logic until hydrated
    if (!isHydrated) return;
    let timeout;

    const handleScroll = () => {
      if (isScrolling || !isHydrated) return;

      // Safety check for browser APIs
      if (typeof window === "undefined") return;

      const scrollTop = window.scrollY;
      const containerTop = containerRef.current?.offsetTop || 0;
      const sectionHeight = window.innerHeight;

      // Calculate when sticky mobile mockup becomes sticky (top-20 = 80px from top)
      // The sticky trigger should be when the section bg arrives and sticky element sticks
      const stickyTriggerPoint = containerTop - sectionHeight; // Account for top-20

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
      if (
        sectionIndex !== currentSection &&
        sectionIndex >= 0 &&
        sectionIndex < sections.length
      ) {
        setCurrentSection(sectionIndex);
      }

      // Clear existing timeout
      clearTimeout(timeout);

      // Debounce scroll handling (reduced for smoother response)
      timeout = setTimeout(() => {
        if (sectionIndex >= 0 && sectionIndex < sections.length) {
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

            const targetScroll =
              stickyTriggerPoint + targetSection * sectionHeight;
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
    <section className="bg-[#F1EBE7] pt-10">
      <div className={`hidden md:block sticky top-12 z-[100] w-1/2 transition-all duration-1000 ease-in-out ${
        isRotated ? 'md:left-1/2 md:-translate-x-1/2 xl:left-[18%] xl:translate-x-0' : 'left-[5%] xl:left-[18%]'
      }`}>
        <div 
          className={`relative w-[240px] lg:w-[348px] transition-transform duration-1000 ease-in-out origin-center ${
            isRotated ? 'rotate-[-90deg]' : 'rotate-0'
          }`}
        >
          <Image
            src="/iPhone bezel.png"
            alt="mobileMockup"
            width={348}
            height={714}
            className="w-[240px] h-[500px]
             lg:w-[354px] lg:h-[720px]  top-10 left-0 z-[102] relative mobileMockup"
          />
          <video
            ref={videoRef}
            className={`
            w-[210px] h-[480px] lg:w-[318px] lg:h-[688px]
            rounded-3xl
            rounded-t-[2rem]
            lg:rounded-t-[3rem]
            object-cover absolute top-12 left-4 lg:top-14 lg:left-4 z-[100]
            transition-opacity duration-300
            ${videoLoaded ? 'opacity-100' : 'opacity-0'}
            `}
            autoPlay
            muted
            loop
            playsInline
            src={currentVideoSrc}
            onLoadedData={handleVideoLoaded}
            onLoadStart={handleVideoLoadStart}
            onError={handleVideoError}
            onCanPlay={handleVideoLoaded}
            onTimeUpdate={handleVideoTimeUpdate}
            onEnded={handleVideoEnded}
          >
            Your browser does not support the video tag.
          </video>
          
          {/* Background placeholder to prevent empty space */}
          <div className="
            w-[210px] h-[480px] lg:w-[318px] lg:h-[684px]
            rounded-3xl
            rounded-t-[2rem]
            lg:rounded-t-[3rem]
            absolute top-12 left-4 lg:top-14 lg:left-4 z-[99]
            bg-[#F1EBE7]
          " />
          
          {/* Loading spinner when video is not loaded */}
          {!videoLoaded && (
            <div className="
              w-[210px] h-[480px] lg:w-[318px] lg:h-[684px]
              rounded-3xl
              rounded-t-[2rem]
              lg:rounded-t-[3rem]
              absolute top-12 left-4 lg:top-14 lg:left-4 z-[101]
              flex items-center justify-center
            ">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
            </div>
          )}
          {/* <Image
            src="/dotLineFour.svg"
            alt="dotLineFour"
            width={2}
            height={20}
            className={`absolute hidden md:block -bottom-24 left-[51%] md:left-[51%] lg:block md:sticky:hidden ${
              isScrolling ? "hidden" : ""
            }`}
          /> */}
        </div>
      </div>

      <div ref={containerRef} className="mt-10 md:mt-50 relative">
        <div className="hidden md:block w-full md:w-1/2 absolute md:-top-155 lg:-top-200 right-0 md:right-20 z-[101]">
          <div className="max-w-[477px] mx-auto flex flex-col gap-4">
            <h2 className="text-4xl font-normal text-center font-poppins">
              Ottieni i risultati <br /> che meriti
            </h2>
            <p className="text-lg text-center font-normal text-bold hidden md:block font-dm-sans">
              Chi usa la nostra app è entusiasta: il 99,2% delle nostre utenti
              consiglierebbe Traininpink™ ad una propria amica.
            </p>
          </div>
          <div className="flex lg:flex-wrap gap-4 justify-center relative z-1 mt-10">
            <div className="flex md:flex-col gap-2 md:gap-8">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo/wreath-left.svg.svg"
                  alt="left wreath"
                  width={30}
                  height={100}
                />
                <div className="flex flex-col w-full items-center">
                  <FaApple className="text-4xl mb-2" color="#000" size={20} />
                  <span className="text-[14px] lg:text-[17.5px] text-[#737373] font-medium text-center leading-5   font-dm-sans">
                    4.8/5 stelle
                    <br />
                    1.500+ recensioni{" "}
                  </span>
                </div>
                <Image
                  src="/logo/wreath-left.svg.svg"
                  alt="left wreath"
                  width={30}
                  height={100}
                  className="scale-x-[-1]"
                />
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/logo/wreath-left.svg.svg"
                  alt="left wreath"
                  width={30}
                  height={100}
                />
                <div className="flex flex-col w-full items-center">
                  <FaFacebook
                    className="text-4xl mb-2"
                    color="#1877F2"
                    size={20}
                  />
                  <span className="text-[14px] lg:text-[17.5px] text-[#737373] font-medium text-center leading-5 font-dm-sans">
                    4.9/5 stelle
                    <br />
                    150+ recensioni{" "}
                  </span>
                </div>
                <Image
                  src="/logo/wreath-left.svg.svg"
                  alt="left wreath"
                  width={30}
                  height={100}
                  className="scale-x-[-1]"
                />
              </div>
            </div>
            <div className="flex md:flex-col gap-2 md:gap-8">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo/wreath-left.svg.svg"
                  alt="left wreath"
                  width={30}
                  height={100}
                />
                <div className="flex flex-col w-full items-center">
                  <Image
                    src="/logo/playstore.svg"
                    alt="googlePlay"
                    width={19}
                    height={20}
                    className=" mb-2"
                  />
                  <span className="text-[14px] lg:text-[17.5px] text-[#737373] font-medium text-center leading-5 font-dm-sans">
                    5/5 stelle
                    <br />
                    1.500+ recensioni{" "}
                  </span>
                </div>
                <Image
                  src="/logo/wreath-left.svg.svg"
                  alt="left wreath"
                  width={30}
                  height={100}
                  className="scale-x-[-1]"
                />
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/logo/wreath-left.svg.svg"
                  alt="left wreath"
                  width={30}
                  height={100}
                />
                <div className="flex flex-col w-full items-center">
                  <Image
                    src="/trustpilotSvg.svg"
                    alt="appStore"
                    width={83}
                    height={20}
                    className=" mb-2"
                  />
                  <span className="text-[14px] lg:text-[17.5px] text-[#737373] font-medium text-center leading-5 font-dm-sans">
                    4.9/5 stelle
                    <br />
                    600+ recensioni{" "}
                  </span>
                </div>
                <Image
                  src="/logo/wreath-left.svg.svg"
                  alt="left wreath"
                  width={30}
                  height={100}
                  className="scale-x-[-1]"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-10">
              <Link
                href="https://apps.apple.com/us/app/traininpink-fitness-femminile/id1641650616"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/logo/appStoreIcon.svg"
                  alt="appStoreIcon"
                  width={185}
                  height={55}
                  className="object-contain h-[55px]"
                />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.traininpink.mobile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/logo/playStoreIcon.svg"
                  alt="playStoreIcon"
                  width={185}
                  height={55}
                  className="object-contain h-[55px]"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="block md:hidden w-full px-5">
          <div className="max-w-[477px] mx-auto flex flex-col gap-4">
            <h2 className="text-4xl font-normal text-center font-poppins">
              Ottieni i risultati <br /> che meriti
            </h2>
            <p className="text-lg text-center font-normal text-bold hidden md:block font-dm-sans">
              Chi usa la nostra app è entusiasta: il 99,2% delle nostre utenti
              consiglierebbe Traininpink™ ad una propria amica.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <div className="flex md:flex-col gap-1 md:gap-8">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo/wreath-left.svg.svg"
                  alt="left wreath"
                  width={30}
                  height={100}
                />
                <div className="flex flex-col w-full items-center">
                  <FaApple className="text-4xl mb-2" color="#000" size={20} />
                  <span className="text-[14px] lg:text-[17.5px] text-[#737373] font-medium text-center leading-5 font-dm-sans">
                    4.8/5 stelle
                    <br />
                    1.500+ recensioni{" "}
                  </span>
                </div>
                <Image
                  src="/logo/wreath-left.svg.svg"
                  alt="left wreath"
                  width={30}
                  height={100}
                  className="scale-x-[-1]"
                />
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/logo/wreath-left.svg.svg"
                  alt="left wreath"
                  width={30}
                  height={100}
                />
                <div className="flex flex-col w-full items-center">
                  <FaFacebook
                    className="text-4xl mb-2"
                    color="#1877F2"
                    size={20}
                  />
                  <span className="text-[14px] lg:text-[17.5px] text-[#737373] font-medium text-center leading-5 font-dm-sans">
                    4.8/5 stelle
                    <br />
                    1.500+ recensioni{" "}
                  </span>
                </div>
                <Image
                  src="/logo/wreath-left.svg.svg"
                  alt="left wreath"
                  width={30}
                  height={100}
                  className="scale-x-[-1]"
                />
              </div>
            </div>
            <div className="flex md:flex-col gap-1 md:gap-8">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo/wreath-left.svg.svg"
                  alt="left wreath"
                  width={30}
                  height={100}
                />
                <div className="flex flex-col w-full items-center">
                  <Image
                    src="/logo/playstore.svg"
                    alt="googlePlay"
                    width={19}
                    height={20}
                    className=" mb-2"
                  />
                  <span className="text-[14px] lg:text-[17.5px] text-[#737373] font-medium text-center leading-5 font-dm-sans">
                    4.8/5 stelle
                    <br />
                    1.500+ recensioni{" "}
                  </span>
                </div>
                <Image
                  src="/logo/wreath-left.svg.svg"
                  alt="left wreath"
                  width={30}
                  height={100}
                  className="scale-x-[-1]"
                />
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/logo/wreath-left.svg.svg"
                  alt="left wreath"
                  width={30}
                  height={100}
                />
                <div className="flex flex-col w-full items-center">
                  <Image
                    src="/trustpilotSvg.svg"
                    alt="appStore"
                    width={83}
                    height={20}
                    className=" mb-2"
                  />
                  <span className="text-[14px] lg:text-[17.5px] text-[#737373] font-medium text-center leading-5 font-dm-sans">
                    4.8/5 stelle
                    <br />
                    1.500+ recensioni{" "}
                  </span>
                </div>
                <Image
                  src="/logo/wreath-left.svg.svg"
                  alt="left wreath"
                  width={30}
                  height={100}
                  className="scale-x-[-1]"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-row gap-4 items-center justify-center my-10">
              <Link
                href="https://play.google.com/store/apps/details?id=com.traininpink.mobile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/logo/playStoreIcon.svg"
                  alt="playStoreIcon"
                  width={185}
                  height={55}
                  className="object-contain w-[140px] sm:w-[160px] lg:w-[185px] h-[44px]  md:h-[55px]"
                />
              </Link>
              <Link
                href="https://apps.apple.com/us/app/traininpink-fitness-femminile/id1641650616"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/logo/appStoreIcon.svg"
                  alt="appStoreIcon"
                  width={185}
                  height={55}
                  className="object-contain w-[140px] sm:w-[160px] lg:w-[185px] h-[44px]  md:h-[55px]"
                />
              </Link>
            </div>
          </div>
        </div>
        <Image
          src="/images/mobileMockup.png"
          alt="mobileMockup"
          width={348}
          height={714}
          className="w-[348px] z-[100] block md:hidden h-[714px] sticky top-20 mx-auto"
        />

        {sections.map((section, index) => {
          const isActive = currentSection === index;
          const scaleValue = isActive ? 0.8 : 1; // All slides: 0.8 when active, 1 when inactive

          // Debug logging for scale

          return (
            <motion.section
              key={section.id}
              className="h-screen flex flex-col justify-center items-center px-4 md:px-20 relative max-h-[850px]"
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {index === 2 && (
                <Image
                  src="/dotLineFour.svg"
                  alt="dotLineFour"
                  width={2}
                  height={184}
                  className="absolute hidden md:block bottom-0 left-[50%]"
                />
              )}
              {/* Animated Image */}
              <motion.div
                className="relative z-20 w-full mx-auto max-w-[1360px]"
                animate={{
                  scale: scaleValue,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                {/* Section Indicator */}
                {index === 0 && (
                  <Image
                    src="/dotLineOneUpdated.svg"
                    alt="dotLineOne"
                    width={412}
                    height={184}
                    className="absolute hidden md:block -top-[88%] left-[42%] -translate-x-[42%]"
                  />
                )}

                {index === 0 && (
                  <Image
                    src="/dotLineTwo.svg"
                    alt="dotLineTwo"
                    width={612}
                    height={184}
                    className="absolute hidden md:block top-[100%] left-[20%] -translate-x-[20%]"
                  />
                )}
                {index === 1 && (
                  <Image
                    src="/dotLineThree.svg"
                    alt="dotLineThree"
                    width={612}
                    height={184}
                    className="absolute hidden md:block top-[85%] -right-12"
                  />
                )}

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`overflow-hidden rounded-lg mx-auto shadow-2xl relative ${
                      section.width > 1000
                        ? isActive
                          ? "max-w-5xl max-h-[480px]"
                          : "max-w-[1360px] max-h-[598px]"
                        : isActive
                        ? "max-w-5xl max-h-[480px]"
                        : "max-w-[1360px] max-h-[598px]"
                    } w-full h-auto transition-all duration-600`}
                  >
                    <Image
                      src={section.image}
                      alt={section.alt}
                      width={section.width}
                      height={section.height}
                      className={`w-full h-full object-cover
                      ${
                        index === 0
                          ? "xl:object-[0px_-14rem]"
                          : index === 1
                          ? "xl:object-[0px_-32rem]"
                          : "xl:object-[0px_-32rem]"
                      }
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
                      className="absolute bottom-4 right-4 z-10"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <h2 className="text-2xl md:text-4xl font-poppins font-normal text-white text-right">
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
