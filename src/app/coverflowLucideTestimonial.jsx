"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
const coverflowLucideTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Sample data for the carousel - you can replace with your actual content
  const slides = [
    {
      id: 1,
      name: "Giulia S.",
      userName:"@_giuliasarno_",
      image: "/images/testimonialCarouselOne.png",
      description: "Ho perso circa 6kg e mezzo ma la cosa più bella è che mi aiuta molto anche con la gestione del lipedema,  ho migliorato tantissimo la postura ed eliminato la diastasi (ho partorito a ottobre 2023)",
      profile: "/images/carouselDp.png",
    },
    {
      id: 2,
      name: "Valentina C.",
      userName:"@vale_corno92",
      image: "/images/testimonialCarouselTwo.png",
      description: "Testimonial TBC + picture",
      profile: "/images/carouselDpTwo.png",
    },
    {
      id: 3,
      name: "Pilates Linfodrenante™",
      userName:"test",
      image: "/images/testimonialCarouselThree.jpeg",
      description: "Ho perso circa 6kg e mezzo ma la cosa più bella è che mi aiuta molto anche con la gestione del lipedema,  ho migliorato tantissimo la postura ed eliminato la diastasi (ho partorito a ottobre 2023)",
      profile: "/images/carouselDp.png",
    },
    {
      id: 4,
      name: "Pilates Linfodrenante™",
      userName:"test",
      image: "/images/testimonialCarouselFour.png",
      description: "Ho perso circa 6kg e mezzo ma la cosa più bella è che mi aiuta molto anche con la gestione del lipedema,  ho migliorato tantissimo la postura ed eliminato la diastasi (ho partorito a ottobre 2023)",
      profile: "/images/carouselDp.png",
    },
    {
      id: 5,
      name: "Pilates Linfodrenante™",
      userName:"test",
      image: "/images/testimonialCarouselFive.png",
      description: "Ho perso circa 6kg e mezzo ma la cosa più bella è che mi aiuta molto anche con la gestione del lipedema,  ho migliorato tantissimo la postura ed eliminato la diastasi (ho partorito a ottobre 2023)",
      profile: "/images/carouselDp.png",
    },
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
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
      transition: isAnimating
        ? "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        : "none",
    };
  };

  return (
    <div className="relative w-full bg-[#F3EFEC] py-20 overflow-hidden">
      <h1 className="text-center text-2xl-up-custom font-normal font-poppins">
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
              onClick={() => goToSlide(index)}
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
                          src={slide.image}
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
          style={{ border: "1px solid #6847441A" }}
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className=" z-20 bg-white backdrop-blur-sm hover:bg-[#ece3dc] disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-3 transition-all duration-300 border border-white/20"
          style={{ border: "1px solid #6847441A" }}
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
      </div>
        
    </div>
  );
};

export default coverflowLucideTestimonial;
