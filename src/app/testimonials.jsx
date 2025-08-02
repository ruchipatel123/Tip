'use client';

import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PiSpeakerXLight } from "react-icons/pi";
import { PiSpeakerHighThin } from "react-icons/pi";
export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const testimonials = [
    {
      id: 1,
      title: "Cinzia lost 37kg with Traininpink",
      leftImage: "/testimonials/cinzia-testimonial-1bc664.png",
      rightImage: "/testimonials/phone-testimonial-1c9257.png",
      video: "/videos/testimonialone.mp4",
      type: "video",
      hasUnmute: true
    },
    {
      id: 2,
      title: "From our Inbox",
      leftImage: "/testimonials/cinzia-testimonial-1bc664.png",
      rightImage: "/testimonials/instatemplateOne.png",
      video: "/videos/testimonialtwo.mp4",
      type: "message",
      hasUnmute: false
    },
    {
      id: 3,
      title: "Success Story",
      leftImage: "/testimonials/cinzia-testimonial-1bc664.png",
      rightImage: "/testimonials/phone-testimonial-1c9257.png",
      video: "/videos/testimonialthree.mp4",
      type: "video",
      hasUnmute: false
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const currentTestimonial = testimonials[currentSlide];

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

      {/* Dynamic Testimonial Titles */}
      <div className="absolute top-[452px] left-[163px] w-[437px] h-[36px] z-10">
        <h3 className="font-['Poppins'] text-[28px] leading-[36px] tracking-[-0.1px] font-normal text-[#553B39] text-center">
          {currentSlide === 0 ? currentTestimonial.title : testimonials[0].title}
        </h3>
      </div>

      <div className="absolute top-[452px] right-[277px] w-[207px] h-[36px] z-10">
        <h3 className="font-['Poppins'] text-[28px] leading-[36px] tracking-[-0.1px] font-normal text-[#553B39] text-center">
          {currentSlide === 1 ? "From our Inbox" : "From our Inbox"}
        </h3>
      </div>

      {/* Left Testimonial Card - Intro Video */}
      <div className="absolute top-[511px] left-[48px] w-[667px] h-[830px] rounded-2xl overflow-hidden">
        <div className="relative w-full h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted={isMuted}
            playsInline
            loop
          >
            <source src="/videos/videoInro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Mute/Unmute button */}
          <div className="absolute bottom-[80px] left-1/2 transform -translate-x-1/2">
            <button 
              onClick={toggleMute}
              className="bg-[#553B39] border border-white/20 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] rounded-full px-4 py-3 flex items-center gap-3 hover:bg-[#6a544f] transition-colors"
            >
              {isMuted ? (
                <PiSpeakerXLight color='white' size={20}/>
              ) : (
                <PiSpeakerHighThin color='white' size={20}/>
              )}
              <span className="font-['DM_Sans'] text-base leading-[26px] text-white">
                {isMuted ? 'Tap to unmute' : 'Tap to mute'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Testimonial Card - Carousel */}
      <div className="absolute top-[511px] right-[48px] w-[667px] h-[830px] rounded-2xl overflow-hidden bg-[#F3EFEC]">
        <div className="relative w-full h-full flex items-center gap-10 justify-center">
          {/* Phone mockup container */}
          <button 
              onClick={prevSlide}
              className="w-14 h-14 bg-white border border-[rgba(104,71,68,0.1)] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.08)] rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <IoIosArrowBack />
            </button>
          <div className="relative w-[318px] h-[621px]">
            <div className="w-full h-full bg-white rounded-2xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] overflow-hidden">
              <video
                key={currentTestimonial.video} // Force re-render when video changes
                className="w-full h-full object-contain"
                autoPlay
                muted
                playsInline
                onEnded={(e) => e.target.pause()} // Stop when video ends
              >
                <source src={currentTestimonial.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <button 
              onClick={nextSlide}
              className="w-14 h-14 bg-white border border-[rgba(104,71,68,0.1)] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.08)] rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
            <IoIosArrowForward />
            </button>
 
          {/* Pagination dots */}
          <div className="absolute bottom-[83px] left-1/2 transform -translate-x-1/2 flex items-center gap-1">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-6 h-0.5 transition-colors ${
                  index === currentSlide ? 'bg-[#98685E]' : 'bg-black/10'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
} 