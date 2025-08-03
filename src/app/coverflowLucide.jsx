"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
const CarouselCoverLucide = () => {
  // Create extended slides array with clones for infinite effect
  const originalSlides = [
    {
      id: 1,
      title: "Pilates Linfodrenante™",
      image: "/images/carouselleft1.png",
      description:
        "L'esclusivo Pilates per eliminare la ritenzione, migliorare la cricolazione e tonificare",
      duration: "5-25",
      frequency: "3 volte a settimana",
      level: "principiante",
      objectives: "ritenzione, sgonfiare, tonificare",
      equipment: "nessun attrezzo richiesto",
    },
    {
      id: 2,
      title: "Pilates Tonificante™",
      image: "/images/carouselleft2.jpeg",
      description:
        "Pilates intensivo per sviluppare forza muscolare e definizione corporea",
      duration: "15-30",
      frequency: "4 volte a settimana",
      level: "intermedio",
      objectives: "tonificare, rinforzare, definire",
      equipment: "elastici, pesi leggeri",
    },
    {
      id: 3,
      title: "Pilates Cardio™",
      image: "/images/carouselcenter.jpg",
      description:
        "Combinazione dinamica di Pilates e cardio per bruciare calorie e migliorare la resistenza",
      duration: "20-40",
      frequency: "3-4 volte a settimana",
      level: "avanzato",
      objectives: "dimagrire, resistenza, energia",
      equipment: "tappetino, palla pilates",
    },
    {
      id: 4,
      title: "Pilates Posturale™",
      image: "/images/carouselright1.png",
      description:
        "Esercizi mirati per migliorare la postura e alleviare tensioni della colonna vertebrale",
      duration: "10-20",
      frequency: "5 volte a settimana",
      level: "principiante",
      objectives: "postura, flessibilità, benessere",
      equipment: "cuscino, rullo foam",
    },
    {
      id: 5,
      title: "Pilates Pre/Post Parto™",
      image: "/images/carouselright2.png",
      description:
        "Programma specializzato per supportare il corpo durante e dopo la gravidanza",
      duration: "15-25",
      frequency: "2-3 volte a settimana",
      level: "adattato",
      objectives: "forza core, recupero, benessere",
      equipment: "palla, fasce elastiche",
    },
  ];

  // Create infinite slides by cloning first and last slides
  const slides = [
    // Clone last 2 slides at the beginning
    { ...originalSlides[originalSlides.length - 2], id: `clone-${originalSlides[originalSlides.length - 2].id}-start-2` },
    { ...originalSlides[originalSlides.length - 1], id: `clone-${originalSlides[originalSlides.length - 1].id}-start-1` },
    // Original slides
    ...originalSlides,
    // Clone first 2 slides at the end
    { ...originalSlides[0], id: `clone-${originalSlides[0].id}-end-1` },
    { ...originalSlides[1], id: `clone-${originalSlides[1].id}-end-2` },
  ];

  const [currentIndex, setCurrentIndex] = useState(2 + 2); // Start at original slide index 2 + 2 clones at start
  const [isAnimating, setIsAnimating] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const containerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const videoRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const [activeCard, setActiveCard] = useState("Tutti");

  // Close accordion when slide changes
  useEffect(() => {
    setExpandedCard(null);
  }, [currentIndex]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
    
    setTimeout(() => {
      setIsAnimating(false);
      // Check if we're at a cloned slide and need to reset
      if (currentIndex + 1 >= slides.length - 2) {
        // We're at the end clones, jump to beginning of original slides
        setIsTransitioning(false);
        setCurrentIndex(2); // First original slide (after 2 clones)
        setTimeout(() => setIsTransitioning(true), 50);
      }
    }, 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
    
    setTimeout(() => {
      setIsAnimating(false);
      // Check if we're at a cloned slide and need to reset
      if (currentIndex - 1 <= 1) {
        // We're at the start clones, jump to end of original slides
        setIsTransitioning(false);
        setCurrentIndex(slides.length - 3); // Last original slide (before 2 clones)
        setTimeout(() => setIsTransitioning(true), 50);
      }
    }, 600);
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    
    // Calculate current position in original slides (0-4)
    const totalSlides = originalSlides.length;
    const currentOriginalIndex = ((currentIndex - 2) + totalSlides) % totalSlides;
    const targetOriginalIndex = index;
    
    if (currentOriginalIndex === targetOriginalIndex) return;
    
    // Calculate shortest path distances
    const forwardDistance = (targetOriginalIndex - currentOriginalIndex + totalSlides) % totalSlides;
    const backwardDistance = (currentOriginalIndex - targetOriginalIndex + totalSlides) % totalSlides;
    
    // Create a navigation queue to smoothly animate to target
    let steps;
    let navigationFunction;
    
    if (forwardDistance <= backwardDistance) {
      steps = forwardDistance;
      navigationFunction = nextSlide;
    } else {
      steps = backwardDistance;
      navigationFunction = prevSlide;
    }
    
    // Execute navigation steps with proper timing
    const executeNavigation = (remainingSteps) => {
      if (remainingSteps > 0) {
        navigationFunction();
        // Wait for current animation to complete before next step
        setTimeout(() => executeNavigation(remainingSteps - 1), 650);
      }
    };
    
    executeNavigation(steps);
  };

  const handleDetailsClick = (e, slideId) => {
    e.stopPropagation(); // Prevent slide navigation

    if (expandedCard === slideId) {
      // Close accordion
      setExpandedCard(null);
    } else {
      // Open accordion and play video
      setExpandedCard(slideId);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, 300); // Wait for accordion animation to start
    }
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const getSlideStyle = (index) => {
    const diff = index - currentIndex;
    const absIndex = Math.abs(diff);

    let transform = "";
    let opacity = 1;
    let scale = 1;
    let zIndex = 0;
    let boxShadow = "";

    if (diff === 0) {
      // Center slide
      transform = "translateX(0%)";
      opacity = 1;
      scale = 1;
      zIndex = 10;
      boxShadow = "none"; // No shadow for active card
    } else if (diff === 1) {
      // Right slide (1st position)
      transform = "translateX(80%)";
      // opacity = 0.6;
      scale = 0.8;
      zIndex = 5;
      boxShadow = "0px 4px 10px 0px #00000026";
    } else if (diff === -1) {
      // Left slide (1st position)
      transform = "translateX(-80%)";
      // opacity = 0.6;
      scale = 0.8;
      zIndex = 5;
      boxShadow = "0px 4px 10px 0px #00000026";
    } else if (diff === 2) {
      // Far right slide (2nd position)
      transform = "translateX(115%)";
      // opacity = 0.4;
      scale = 0.7;
      zIndex = 2;
      boxShadow = "0px 4px 10px 0px #00000026";
    } else if (diff === -2) {
      // Far left slide (2nd position)
      transform = "translateX(-115%)";
      // opacity = 0.4;
      scale = 0.7;
      zIndex = 2;
      boxShadow = "0px 4px 10px 0px #00000026";
    } else {
      // Hidden slides
      if (diff > 0) {
        transform = "translateX(190%)";
      } else {
        transform = "translateX(-190%)";
      }
      opacity = 0;
      scale = 0.6;
      zIndex = 1;
      boxShadow = "0px 4px 10px 0px #00000026";
    }

    return {
      transform: `${transform} scale(${scale})`,
      opacity,
      zIndex,
      boxShadow,
      transition: isTransitioning && (isAnimating || diff === 0)
        ? "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        : "none",
    };
  };

  return (
    <div className="relative w-full bg-white py-20 overflow-hidden">
      
      <h1 className="text-center relative font-poppins text-2xl-up-custom leading-10 md:text-4xl font-normal max-w-[290px] md:max-w-[479px] mx-auto">
        Allenamenti su misura per <br className="hidden md:block" /> te per
        risultati garantiti
        <Image
        src="/dotLineSeven.svg"
        alt="dotLineSeven"
        width={348}
        height={106}
        className="absolute -top-30 left-1/2 hidden md:block"
      />
      </h1>
      {/* Main carousel container */}
      <div className="flex flex-wrap items-center justify-between md:justify-center gap-2 sm:gap-6 mt-10 text-xl font-poppins md:text-3xl font-normal px-4">
        <p
          className={`${
            activeCard === "Tutti" ? "text-black" : "opacity-20"
          } cursor-grab`}
          onClick={() => setActiveCard("Tutti")}
        >
          Tutti <span className="text-black align-super text-xl">10</span>
        </p>
        <p
          className={`${
            activeCard === "Pilates" ? "text-black" : "opacity-20"
          } cursor-grab`}
          onClick={() => setActiveCard("Pilates")}
        >
          Pilates
        </p>
        <p
          className={`${
            activeCard === "Tonificazione" ? "text-black" : "opacity-20"
          } cursor-grab`}
          onClick={() => setActiveCard("Tonificazione")}
        >
          Tonificazione
        </p>
        <p
          className={`${
            activeCard === "Cardio" ? "text-black" : "opacity-20"
          } cursor-grab`}
          onClick={() => setActiveCard("Cardio")}
        >
          Cardio
        </p>
        <p
          className={`${
            activeCard === "Yoga" ? "text-black" : "opacity-20"
          } cursor-grab`}
          onClick={() => setActiveCard("Yoga")}
        >
          Yoga
        </p>
        <p
          className={`${
            activeCard === "Pre e post parto" ? "text-black" : "opacity-20"
          } cursor-grab`}
          onClick={() => setActiveCard("Pre e post parto")}
        >
          Pre e post parto
        </p>
      </div>
      <div className="relative h-full flex items-center justify-center px-4 mt-10">
        {/* Carousel container */}
        <div
          ref={containerRef}
          className="relative w-full h-[603px] flex rounded-2xl items-center justify-center perspective-1000"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ perspective: "1000px" }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="absolute w-80 md:w-100 h-[90%] md:h-full  cursor-grab rounded-2xl preserve-3d"
              style={getSlideStyle(index)}
              onClick={() => {
                // For cloned slides, calculate the equivalent original slide index
                if (slide.id.toString().includes('clone')) {
                  const originalId = parseInt(slide.id.split('-')[1]);
                  const originalIndex = originalSlides.findIndex(s => s.id === originalId);
                  goToSlide(originalIndex);
                } else {
                  const originalIndex = originalSlides.findIndex(s => s.id === slide.id);
                  goToSlide(originalIndex);
                }
              }}
            >
              <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden">
                {/* Get the original slide ID for comparison */}
                {(() => {
                  const originalSlideId = slide.id.toString().includes('clone') 
                    ? parseInt(slide.id.split('-')[1]) 
                    : slide.id;
                  const isExpanded = expandedCard === originalSlideId && index === currentIndex;
                  
                  return (
                    <>
                      {/* Video container - shows in top 50% when accordion is expanded */}
                      {isExpanded && (
                        <div className="absolute bg-[#F3EFEC] top-0 left-0 w-full h-[50%] md:h-1/2 overflow-hidden z-20 flex items-center justify-center">
                          <video
                            ref={videoRef}
                            className="w-full h-full object-cover md:rounded-t-2xl"
                            autoPlay
                            muted
                            loop
                            playsInline
                          >
                            <source src="/videos/herovideo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      )}

                      {/* Image container - always present, but hidden when accordion is expanded */}
                      <div
                        className={`relative w-full h-full transition-all duration-700 ease-in-out ${
                          isExpanded ? "opacity-0" : "opacity-100"
                        }`}
                      >
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover rounded-t-2xl"
                          width={483}
                          height={603}
                        />
                        {/* White overlay for inactive cards */}
                        {index !== currentIndex && (
                          <div
                            className="absolute inset-0 bg-white rounded-t-2xl"
                            style={{
                              mixBlendMode: "lighten",
                              opacity: 0.6,
                            }}
                          />
                        )}
                      </div>

                      {/* Content - only visible on active card when NOT expanded */}
                      {index === currentIndex && !isExpanded && (
                        <div
                          className="absolute bottom-0 left-0 w-full h-16 bg-[#F3EFEC] flex items-center justify-between px-4 rounded-b-2xl cursor-grab transition-all duration-300 hover:bg-[#ece3dc] z-30"
                          onClick={(e) => handleDetailsClick(e, originalSlideId)}
                        >
                          <h3 className="font-poppins text-[18px] font-medium leading-[1.41em] tracking-[-0.23%] text-black">
                            {slide.title}
                          </h3>
                          <p className="text-black font-dm-sans text-base font-normal leading-[1.625em] flex items-center gap-2">
                            <span className="hidden md:block">Details</span>
                            <FaArrowRight />
                          </p>
                        </div>
                      )}

                      {/* Expanded Accordion - slides up from bottom as overlay */}
                      <div
                        className={`absolute bottom-0 left-0 w-full bg-[#F3EFEC] rounded-b-2xl transition-all duration-500 ease-in-out z-25 ${
                          isExpanded
                            ? "h-1/2 translate-y-0 opacity-100"
                            : "h-0 translate-y-full opacity-0"
                        }`}
                      >
                        {isExpanded && (
                    <div className="h-full flex flex-col">
                      {/* Header with title and close button - now at top of accordion */}
                          <div
                            className="h-14 bg-[#F3EFEC] flex items-center justify-between px-4 cursor-grab transition-all duration-300 hover:bg-[#ece3dc] flex-shrink-0"
                            onClick={(e) => handleDetailsClick(e, originalSlideId)}
                          >
                            <h3 className="font-poppins text-[22px] font-medium leading-[1.41em] tracking-[-0.23%] text-black">
                              {slide.title}
                            </h3>
                            <p className="text-black font-dm-sans text-base font-normal leading-[1.625em] flex items-center gap-2">
                              Details
                              <FaArrowRight className="rotate-90" />
                            </p>
                          </div>

                          {/* Accordion content below the header */}
                          <div className="flex-1 p-5 pt-0 overflow-y-auto">
                            <div className="space-y-6">
                              {/* Description */}
                              <p className="text-black mb-2 font-dm-sans text-base leading-[1.625em] max-w-[342px]">
                                {slide.description}
                              </p>

                              {/* Content grid with vertical divider */}
                              <div className="relative">
                                {/* Vertical divider line */}

                                {/* Left Column */}
                                <div className="flex justify-between border-b border-[#DBD7D4]">
                                  {/* Allenamenti Section */}
                                  <div className="w-1/2 py-2">
                                    <h4 className="text-black font-dm-sans text-sm font-normal leading-[1.5em] opacity-40">
                                      Allenamenti
                                    </h4>
                                    <div className="flex items-baseline gap-2">
                                      <span className="text-black font-dm-sans text-base font-normal leading-[1.625em] text-center">
                                        {slide.duration}
                                      </span>
                                      <span className="text-black font-dm-sans text-xs font-normal leading-[1.5em] tracking-[0.83%] text-center">
                                        minuti
                                      </span>
                                    </div>
                                    <p className="text-black font-dm-sans text-sm font-normal leading-[1.5em]">
                                      {slide.frequency}
                                    </p>
                                  </div>

                                  {/* Livello Section */}
                                  <div className="w-1/2 py-2 border-l border-[#DBD7D4] pl-4">
                                    <h4 className="text-black font-dm-sans text-sm font-normal leading-[1.5em] opacity-40">
                                      Livello
                                    </h4>
                                    <p className="text-black font-dm-sans text-base font-normal leading-[1.625em]">
                                      {slide.level}
                                    </p>
                                  </div>
                                </div>

                                {/* Right Column */}
                                <div className="flex justify-between">
                                  {/* Obiettivi Section */}
                                  <div className="w-1/2 py-2">
                                    <h4 className="text-black font-dm-sans text-sm font-normal leading-[1.5em] opacity-40">
                                      Obiettivi
                                    </h4>
                                    <p className="text-black font-dm-sans text-base font-normal leading-[1.625em] max-w-[155px]">
                                      {slide.objectives}
                                    </p>
                                  </div>
                                  {/* Attrezzi Section */}
                                  <div className="w-1/2 py-2 border-l border-[#DBD7D4] pl-4">
                                    <h4 className="text-black font-dm-sans text-sm font-normal leading-[1.5em] opacity-40">
                                      Attrezzi
                                    </h4>
                                    <p className="text-black font-dm-sans text-base font-normal leading-[1.625em] max-w-[117px]">
                                      {slide.equipment}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        )}
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 mt-12">
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className=" z-20 bg-[#F3EFEC] cursor-grab backdrop-blur-sm hover:bg-[#ece3dc] disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-3 transition-all duration-300"
          style={{ border: "1px solid #6847441A" }}
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className=" z-20 bg-[#F3EFEC] cursor-grab backdrop-blur-sm hover:bg-[#ece3dc] disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-3 transition-all duration-300 border border-white/20"
          style={{ border: "1px solid #6847441A" }}
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
      </div>
      <div className="flex flex-col bg-white z-10 mt-12 lg:flex-row items-center justify-center gap-6 sm:gap-8 relative px-4">
        {/* Primary CTA */}
        <button className="primary-cta cursor-grab flex items-center justify-center gap-3 bg-[#f3efec] border border-[rgba(0,0,0,0.10)] rounded-lg shadow-[0_2px_20px_0_rgba(0,0,0,0.15)] px-4 py-3 text-[#684744] text-lg sm:text-xl font-medium leading-snug w-full sm:min-w-60 sm:w-auto h-14">
          <span className="font-bold text-center font-dm-sans">
            Parlaci dei tuoi obiettivi
          </span>
          <FaArrowRight size={15} />
        </button>

        {/* OR Text */}
        <span className="text-black font-dm-sans text-lg font-normal opacity-90">
          oppure
        </span>

        {/* Secondary CTA */}
        <button className="secondary-cta cursor-grab flex items-center justify-center gap-3 bg-[#684744] border border-[rgba(243,239,236,0.20)] rounded-lg shadow-[0_2px_20px_0_rgba(0,0,0,0.15)] px-4 py-3 text-white text-lg sm:text-xl font-medium leading-snug w-full sm:min-w-60 sm:w-auto h-14">
          <span className="font-bold font-dm-sans">
            Inizia la prova gratuita
          </span>
          <FaArrowRight size={15} />
        </button>
        <Image
          src="/dotLineSix.svg"
          alt="dotLineSix"
          width={270}
          height={207}
          className="absolute bottom-13 left-[51%] hidden md:block"
        />
        <Image
          src="/dotLineFour.svg"
          alt="dotLineSeven"
          width={2}
          height={50}
          className="absolute -bottom-30 left-[51%] hidden md:block"
        />
      </div>
    </div>
  );
};

export default CarouselCoverLucide;
