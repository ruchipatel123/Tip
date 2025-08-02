"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
const CarouselCoverLucide = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Sample data for the carousel - you can replace with your actual content
  const slides = [
    {
      id: 1,
      title: "Pilates Linfodrenante™",
      image: "/images/carouselleft1.png",
      description: "Build strength and stability",
    },
    {
      id: 2,
      title: "Pilates Linfodrenante™",
      image: "/images/carouselleft2.jpeg",
      description: "Find your center and balance",
    },
    {
      id: 3,
      title: "Pilates Linfodrenante™",
      image: "/images/carouselcenter.jpg",
      description: "Connect with nature's energy",
    },
    {
      id: 4,
      title: "Pilates Linfodrenante™",
      image: "/images/carouselright1.png",
      description: "Achieve inner peace",
    },
    {
      id: 5,
      title: "Pilates Linfodrenante™",
      image: "/images/carouselright2.png",
      description: "Stretch and strengthen",
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
    <div className="relative w-full bg-white py-20 overflow-hidden">
      <h1 className="text-center text-4xl font-normal">
        Allenamenti su misura per <br /> te per risultati garantiti
      </h1>
      {/* Main carousel container */}
      <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-3xl font-normal">
        <p>
          Tutti <span className="text-black align-super text-xl">10</span>
        </p>
        <p className="opacity-20 cursor-pointer">Pilates</p>
        <p className="opacity-20 cursor-pointer">Tonificazione</p>
        <p className="opacity-20 cursor-pointer">Cardio</p>
        <p className="opacity-20 cursor-pointer">Yoga</p>
        <p className="opacity-20 cursor-pointer">Pre e post parto</p>
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
              className="absolute w-100 h-full cursor-pointer rounded-2xl preserve-3d"
              style={getSlideStyle(index)}
              onClick={() => goToSlide(index)}
            >
              <div className="w-full h-full bg-white rounded-2xl overflow-hidden flex flex-col">
                {/* Image container */}
                <div className="relative flex-1 overflow-hidden">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover rounded-t-2xl"
                    width={483}
                    height={603}
                    style={{
                      filter: index !== currentIndex 
                        ? 'saturate(0.2) brightness(0.7) contrast(0.8)' 
                        : 'none'
                    }}
                  />
                  {/* White overlay for inactive cards */}
                  {index !== currentIndex && (
                    <div 
                      className="absolute inset-0 bg-white rounded-t-2xl"
                      style={{ 
                        mixBlendMode: 'overlay',
                        opacity: 0.6
                      }}
                    />
                  )}
                </div>

                {/* Content - only visible on active card */}
                {index === currentIndex && (
                  <div className="h-16 bg-[#F3EFEC] flex items-center justify-between px-4 rounded-b-2xl">
                    <h3 className="text-xl font-bold text-black">
                      {slide.title}
                    </h3>
                    <p className="text-black text-base flex items-center gap-2">
                      Details <FaArrowRight />
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 mt-8">
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className=" z-20 bg-[#F3EFEC] backdrop-blur-sm hover:bg-[#ece3dc] disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-3 transition-all duration-300"
          style={{ border: "1px solid #6847441A" }}
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className=" z-20 bg-[#F3EFEC] backdrop-blur-sm hover:bg-[#ece3dc] disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-3 transition-all duration-300 border border-white/20"
          style={{ border: "1px solid #6847441A" }}
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
      </div>
      
    </div>
  );
};

export default CarouselCoverLucide;
