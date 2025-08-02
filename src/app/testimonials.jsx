'use client';

import Image from "next/image";
import { useState } from "react";

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      title: "Cinzia lost 37kg with Traininpink",
      image: "/testimonials/cinzia-testimonial-1bc664.png",
      type: "video",
      hasUnmute: true
    },
    {
      id: 2,
      title: "From our Inbox",
      image: "/testimonials/phone-testimonial-1c9257.png",
      type: "message",
      hasUnmute: false
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-white relative w-full h-[1423px] overflow-hidden">
      {/* Header Section */}
      <div className="absolute top-[84px] left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-6 w-[403px]">
          <div className="flex flex-col items-center gap-6 w-full">
            <h2 className="font-['Poppins'] text-[36px] leading-[47px] tracking-[-0.15px] font-normal text-black text-center">
              I risultati delle<br />
              nostre donne
            </h2>
            <p className="font-['DM_Sans'] text-lg leading-[29px] text-black text-center w-[313px]">
              Più di 180.000 donne sono felici nel proprio corpo grazie a Traininpink™
            </p>
          </div>
          
          {/* CTA Button */}
          <button className="bg-[#684744] border border-[rgba(243,239,236,0.2)] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.2)] rounded-lg py-[10px] px-4 flex items-center justify-center gap-3 w-[273px] h-[54px]">
            <span className="font-['DM_Sans'] text-xl font-medium leading-[29px] text-white">
              Inizia la prova gratuita
            </span>
            <svg width="13.33" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Testimonial Cards */}
      <div className="absolute top-[452px] left-[163px] w-[437px] h-[36px] z-10">
        <h3 className="font-['Poppins'] text-[28px] leading-[36px] tracking-[-0.1px] font-normal text-[#553B39] text-center">
          {testimonials[0].title}
        </h3>
      </div>

      <div className="absolute top-[452px] right-[277px] w-[207px] h-[36px] z-10">
        <h3 className="font-['Poppins'] text-[28px] leading-[36px] tracking-[-0.1px] font-normal text-[#553B39] text-center">
          From our Inbox
        </h3>
      </div>

      {/* Left Testimonial Card */}
      <div className="absolute top-[511px] left-[48px] w-[667px] h-[830px] rounded-2xl overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/testimonials/cinzia-testimonial-1bc664.png"
            alt="Cinzia transformation testimonial"
            fill
            className="object-cover"
          />
          
          {/* Tap to unmute button */}
          <div className="absolute bottom-[80px] left-1/2 transform -translate-x-1/2">
            <div className="bg-[#553B39] border border-white/20 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] rounded-full px-4 py-3 flex items-center gap-3">
              <svg width="27" height="24" viewBox="0 0 27 24" fill="none">
                <path d="M14 2L14 22" stroke="white" strokeWidth="1.1" strokeLinecap="round"/>
                <path d="M18 6C20 8 20 16 18 18" stroke="white" strokeWidth="1.1" strokeLinecap="round"/>
                <path d="M22 9.5C24 11.5 24 12.5 22 14.5" stroke="white" strokeWidth="1.1" strokeLinecap="round"/>
                <path d="M32 15C33 16 33 16 32 17" stroke="white" strokeWidth="1.1" strokeLinecap="round"/>
              </svg>
              <span className="font-['DM_Sans'] text-base leading-[26px] text-white">
                Tap to unmute
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Testimonial Card */}
      <div className="absolute top-[511px] right-[48px] w-[667px] h-[830px] rounded-2xl overflow-hidden bg-[#F3EFEC]">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Phone mockup container */}
          <div className="relative w-[326px] h-[621px]">
            <div className="w-full h-full bg-white rounded-2xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] overflow-hidden">
              <Image
                src="/testimonials/phone-testimonial-1c9257.png"
                alt="Message testimonial from inbox"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="absolute right-[82px] top-1/2 transform -translate-y-1/2 flex items-center gap-2">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 bg-white border border-[rgba(104,71,68,0.1)] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.08)] rounded-full flex items-center justify-center"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="w-14 h-14 bg-white border border-[rgba(104,71,68,0.1)] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.08)] rounded-full flex items-center justify-center"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Pagination dots */}
          <div className="absolute bottom-[83px] left-1/2 transform -translate-x-1/2 flex items-center gap-1">
            {[0, 1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                className={`w-6 h-0.5 ${
                  index === 0 ? 'bg-[#98685E]' : 'bg-black/10'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
} 