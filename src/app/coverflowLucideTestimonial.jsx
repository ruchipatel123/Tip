"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
const coverflowLucideTestimonial = () => {
  // Create extended slides array with clones for infinite effect
  const originalSlides = [
    {
      id: 1,
      name: "Giulia S.",
      userName:"_giuliasarno_",
      image: "/images/testimonials/gulia.png",
      description: "Ho perso circa 6kg e mezzo ma la cosa più bella è che mi aiuta molto anche con la gestione del lipedema,  ho migliorato tantissimo la postura ed eliminato la diastasi (ho partorito a ottobre 2023)",
      profile: "/images/testimonials/giulia-s-profile.png",
    },
    {
      id: 2,
      name: "Veronica G.",
      userName:"vero.ni.c.ag",
      image: "/images/testimonials/victoria.png",
      description: "Ho rimesso oggi un pantalone della scorsa estate... Ecco la differenza... Dorvò donarlo... Ora è davvero troppo largo! Pronta x linfodrenante refomer!",
      profile: "/images/testimonials/veronica-g-profile.png",
    },
    {
      id: 3,
      name: "Chiara",
      userName:"chiaraga27",
      image: "/images/testimonials/chitra.png",
      description: "1 mese di Pilates e alimentazione sana senza troppe rinunce 🍃🧘‍♀️",
      profile: "/images/testimonials/chitra-profile.png",
    },
    {
      id: 4,
      name: "Maria",
      userName:"mariapalmi29",
      image: "/images/testimonials/marina.png",
      description: "Pilates, prima Sculpt ora Linfodrenante… mai avuto un addome così. Grazie!!! 😅🔝",
      profile: "/images/testimonials/maria.png",
    },
    {
      id: 5,
      name: "Maria",
      userName:"mariapalmi29",
      image: "/images/testimonials/image_3.png",
      description: "Carlotta scusa, ma che magia mi hai combinato? 💀 Ero scettica sul pilates linfodrenante, ma ti chiedo umilmente perdono!!!",
      profile: "/images/testimonials/maria-2.png",
    },
    {
      id: 6,
      name: "Federica",
      userName:"federicalove12",
      image: "/images/testimonials/febrica.png",
      description: "1 mese di pilates ti ringrazio sono rinata tosto ma finalmente mi sento più sgonfia 🙏",
      profile: "/images/testimonials/febrica-profile.png",
    },
    {
      id: 7,
      name: "Sandy S.",
      userName:"sandyspurrey",
      image: "/images/testimonials/sandy.png",
      description: "- 5 cm in vita, - 3 in tutto il resto. 💜☀️",
      profile: "/images/testimonials/sandy-profile.png",
    },
    {
      id: 8,
      name: "Lilo S.",
      userName:"lilosnowbubble",
      image: "/images/testimonials/lilosnowbubble.webp.png",
      description: "Traininpink mi ha cambiato la vita.",
      profile: "/images/testimonials/lilo-profile.png",
    },
    {
      id: 9,
      name: "Giulia M.",
      userName:"giulia.murolo",
      image: "/images/testimonials/giulia-murolo.webp.png",
      description: "A distanza di 9 mesi ho perso 28 chili. Ci tenevo a ringraziarti anche perché grazie a Traininpink ho iniziato ad amare l'allenamento!",
      profile: "/images/testimonials/giulia-profile.png",
    },
    {
      id: 10,
      name: "Giulia M.",
      userName:"_angj_",
      image: "/images/testimonials/angj.webp.png",
      description: "Eccomi bellissima nel mio abito da sposa grazie a Traininpink! Sono quasi 3 anni che mi alleno con te: quasi 30 kg in meno e tantissima autostima in più! Grazie Traininpink!",
      profile: "/images/testimonials/angela.png",
    },
    {
      id: 11,
      name: "Elisa Z.",
      userName:"elisazadro",
      image: "/images/testimonials/elisazadro.webp.png",
      description: "Traininpink mi ha cambiata dentro, e di conseguenza mi ha cambiato la vita, non ti ringrazierò mai abbastanza!",
      profile: "/images/testimonials/angela.png",
    }
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
  const containerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

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
    <div className="relative w-full bg-[#F3EFEC] py-20 overflow-hidden">
      <h1 className="text-center text-2xl-up-custom leading-10 md:text-4xl font-normal font-poppins">
        Le loro storie,
        <br />
        la tua ispirazione.
      </h1>
      {/* Main carousel container */}
      
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
              className="absolute w-80 md:w-100 h-full cursor-grab rounded-2xl preserve-3d"
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
              <div className="relative w-full h-full bg-white rounded-2xl ">
                {/* Image container - full height */}
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={slide.image}
                    alt={'testimonial image ' + index}
                    className="w-full h-full object-cover rounded-2xl"
                    width={483}
                    height={603}
                     
                  />
                  {/* White overlay for inactive cards */}
                  {index !== currentIndex && (
                    <div
                      className="absolute inset-0 bg-white rounded-2xl"
                      style={{
                        mixBlendMode: "lighten",
                        opacity: 0.6,
                      }}
                    />
                  )}
                </div>

                {/* Content - only visible on active card */}
                {index === currentIndex && (
                  <div className="absolute top-130 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl p-4 shadow-lg max-w-[90%] w-[350px]">
                    {/* Image with name and user */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                        <Image
                          src={slide.profile}
                          alt={slide.userName}
                          className="w-full h-full object-cover"
                          width={48}
                          height={48}
                        />
                      </div>
                      <div className="flex flex-row gap-1">
                        <h4 className="text-base font-dm-sans font-normal text-black">{slide.name}</h4>
                        <p className="text-base font-dm-sans text-[#8C8C8C]">@{slide.userName}</p>
                      </div>
                    </div>
                    
                    {/* Description text */}
                    <div className="pt-3">
                      <p className="text-sm text-[#171717] font-dm-sans font-normal leading-relaxed">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 mt-45">
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className=" z-20 bg-white backdrop-blur-sm cursor-grab hover:bg-[#ece3dc] disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-3 transition-all duration-300"
          style={{ border: "1px solid #6847441A", boxShadow: "0px 2px 20px 0px #00000026" }}
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className=" z-20 bg-white backdrop-blur-sm hover:bg-[#ece3dc] disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-3 transition-all duration-300 border border-white/20"
          style={{ border: "1px solid #6847441A", boxShadow: "0px 2px 20px 0px #00000026" }}
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
      </div>
        
    </div>
  );
};

export default coverflowLucideTestimonial;
