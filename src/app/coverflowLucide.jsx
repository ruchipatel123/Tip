"use client";
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
      title: "Warrior Pose",
      image: "/images/carouselleft1.png",
      description: "Build strength and stability"
    },
    {
      id: 2,
      title: "Mountain Pose",
      image: "/images/carouselleft2.jpeg",
      description: "Find your center and balance"
    },
    {
      id: 3,
      title: "Tree Pose",
      image: "/images/carouselcenter.jpg",
      description: "Connect with nature's energy"
    },
    {
      id: 4,
      title: "Lotus Position",
      image: "/images/carouselright1.png",
      description: "Achieve inner peace"
    },
    {
      id: 5,
      title: "Downward Dog",
      image: "/images/carouselright2.png",
      description: "Stretch and strengthen"
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
    
    let transform = '';
    let opacity = 1;
    let scale = 1;
    let zIndex = 0;

    if (diff === 0) {
      // Center slide
      transform = 'translateX(0%)';
      opacity = 1;
      scale = 1;
      zIndex = 10;
    } else if (diff === 1) {
      // Right slide (1st position)
      transform = 'translateX(80%)';
      opacity = 0.6;
      scale = 0.8;
      zIndex = 5;
    } else if (diff === -1) {
      // Left slide (1st position)
      transform = 'translateX(-80%)';
      opacity = 0.6;
      scale = 0.8;
      zIndex = 5;
    } else if (diff === 2) {
      // Far right slide (2nd position)
      transform = 'translateX(115%)';
      opacity = 0.4;
      scale = 0.7;
      zIndex = 2;
    } else if (diff === -2) {
      // Far left slide (2nd position)
      transform = 'translateX(-115%)';
      opacity = 0.4;
      scale = 0.7;
      zIndex = 2;
    } else {
      // Hidden slides
      if (diff > 0) {
        transform = 'translateX(190%)';
      } else {
        transform = 'translateX(-190%)';
      }
      opacity = 0;
      scale = 0.6;
      zIndex = 1;
    }

    return {
      transform: `${transform} scale(${scale})`,
      opacity,
      zIndex,
      transition: isAnimating ? 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
    };
  };

  return (
    <div className="relative w-full bg-white py-20 overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute inset-0"></div>
      
      {/* Main carousel container */}
      <div className="relative h-full flex items-center justify-center px-4">
        
        {/* Left chevron */}
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-3 transition-all duration-300 border border-white/20"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Carousel container */}
        <div
          ref={containerRef}
          className="relative w-full h-96 flex items-center justify-center perspective-1000"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ perspective: '1000px' }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="absolute w-80 h-full cursor-pointer preserve-3d"
              style={getSlideStyle(index)}
              onClick={() => goToSlide(index)}
            >
              <div className="w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden transform-gpu">
                {/* Image container */}
                <div className="relative h-2/3 overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-6 h-1/3 flex flex-col justify-center bg-white">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {slide.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right chevron */}
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-3 transition-all duration-300 border border-white/20"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white scale-125'
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Title overlay */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">Yoga Poses</h1>
        <p className="text-white/80">Discover mindful movement</p>
      </div>
    </div>
  );
};

export default CarouselCoverLucide;