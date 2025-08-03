"use client";

import Image from "next/image";
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
      hasUnmute: true,
    },
    {
      id: 2,
      title: "From our Inbox",
      leftImage: "/testimonials/cinzia-testimonial-1bc664.png",
      rightImage: "/testimonials/instatemplateOne.png",
      video: "/videos/testimonialtwo.mp4",
      type: "message",
      hasUnmute: false,
    },
    {
      id: 3,
      title: "Success Story",
      leftImage: "/testimonials/cinzia-testimonial-1bc664.png",
      rightImage: "/testimonials/phone-testimonial-1c9257.png",
      video: "/videos/testimonialthree.mp4",
      type: "video",
      hasUnmute: false,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section className="bg-white w-full py-12 sm:py-16 lg:py-20 overflow-hidden relative">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
        <div className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-lg relative">
          <Image
            src="/dotLineFive.svg"
            alt="dotLineFive"
            width={361}
            height={413}
            className="absolute -top-20 -left-[20%] hidden md:block"
          />
          <h2 className="font-poppins text-2xl-up-custom sm:text-[32px] lg:text-[36px] leading-[32px] sm:leading-[42px] lg:leading-[47px] tracking-[-0.15px] font-normal text-black text-center">
            I risultati delle
            <br />
            nostre donne
          </h2>
          <p className="font-dm-sans text-lg sm:text-lg leading-[24px] sm:leading-[29px] text-black text-center max-w-sm sm:max-w-md">
            Più di 180.000 donne sono felici nel proprio corpo grazie a
            Traininpink™
          </p>
        </div>

        {/* CTA Button */}
        <button className="bg-[#684744] border border-[rgba(243,239,236,0.2)] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.2)] rounded-lg py-3 px-6 flex items-center justify-center gap-3 w-full max-w-xs sm:max-w-sm h-12 sm:h-[54px]">
          <span className="font-['DM_Sans'] text-lg sm:text-xl font-medium leading-[24px] sm:leading-[29px] text-white">
            Inizia la prova gratuita
          </span>
          <svg
            width="13.33"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            className="flex-shrink-0"
          >
            <path
              d="M1 5H13M13 5L9 1M13 5L9 9"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:flex-row lg:gap-8 xl:gap-12 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto">
        {/* Left Testimonial Card - Intro Video */}
        <div className="flex-1 max-w-2xl">
          <div className="mb-6">
            <h3 className="font-poppins text-[24px] lg:text-[28px] leading-[32px] lg:leading-[36px] tracking-[-0.1px] font-normal text-[#553B39] text-center">
              Cinzia lost 37kg with Traininpink
            </h3>
          </div>
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-black">
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
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <button
                  onClick={toggleMute}
                  className="bg-[#553B39] border border-white/20 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] rounded-full px-4 py-3 flex items-center gap-3 hover:bg-[#6a544f] transition-colors"
                >
                  {isMuted ? (
                    <PiSpeakerXLight color="white" size={20} />
                  ) : (
                    <PiSpeakerHighThin color="white" size={20} />
                  )}
                  <span className="font-['DM_Sans'] text-base leading-[26px] text-white">
                    {isMuted ? "Tap to unmute" : "Tap to mute"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Testimonial Card - Carousel */}
        <div className="flex-1 max-w-2xl">
          <div className="mb-6">
            <h3 className="font-['Poppins'] text-[24px] lg:text-[28px] leading-[32px] lg:leading-[36px] tracking-[-0.1px] font-normal text-[#553B39] text-center">
              From our Inbox
            </h3>
          </div>
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#F3EFEC]">
            <div className="relative w-full h-full flex items-center justify-center gap-6">
              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="w-10 h-10 lg:w-14 lg:h-14 bg-white border border-[rgba(104,71,68,0.1)] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.08)] rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
              >
                <IoIosArrowBack />
              </button>

              {/* Phone Mockup */}
              <div className="relative flex-1 max-w-[330px]">
                <div className="w-full h-full bg-white rounded-2xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] overflow-hidden">
                  <video
                    key={currentTestimonial.video}
                    className="w-full h-full object-contain"
                    autoPlay
                    muted
                    playsInline
                    onEnded={(e) => e.target.pause()}
                  >
                    <source src={currentTestimonial.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              <button
                onClick={nextSlide}
                className="w-10 h-10 lg:w-14 lg:h-14 bg-white border border-[rgba(104,71,68,0.1)] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.08)] rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
              >
                <IoIosArrowForward />
              </button>

              {/* Pagination dots */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-1">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-6 h-0.5 transition-colors ${
                      index === currentSlide ? "bg-[#98685E]" : "bg-black/10"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden px-2 sm:px-6 space-y-8 sm:space-y-12">
        {/* Mobile Intro Video */}
        <div className="w-full">
          <div className="mb-4 sm:mb-6">
            <h3 className="font-poppins text-2xl max-w-[186px] mx-auto sm:text-[24px] leading-[28px] sm:leading-[32px] tracking-[-0.1px] font-normal text-[#553B39] text-center">
              Cinzia lost 37kg with Traininpink
            </h3>
          </div>
          <div className="max-w-md mx-auto rounded-2xl overflow-hidden bg-black">
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
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <button
                  onClick={toggleMute}
                  className="bg-[#553B39] border border-white/20 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] rounded-full px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3 hover:bg-[#6a544f] transition-colors"
                >
                  {isMuted ? (
                    <PiSpeakerXLight color="white" size={18} />
                  ) : (
                    <PiSpeakerHighThin color="white" size={18} />
                  )}
                  <span className="font-dm-sans text-[15px] sm:text-base leading-[20px] sm:leading-[26px] text-white">
                    {isMuted ? "Tap to unmute" : "Tap to mute"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Testimonial Carousel */}
        <div className="w-full">
          <div className="mb-4 sm:mb-6">
            <h3 className="font-poppins text-2xl max-w-[186px] mx-auto sm:text-[24px] leading-[28px] sm:leading-[32px] tracking-[-0.1px] font-normal text-[#553B39] text-center">
              From our Inbox
            </h3>
          </div>
          <div className="mx-auto py-10 rounded-2xl overflow-hidden bg-[#F3EFEC]">
            <div className="relative w-full h-full flex items-center justify-center gap-4">
              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="w-10 h-10 hidden md:flex bg-white border border-[rgba(104,71,68,0.1)] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.08)] rounded-full  items-center justify-center hover:bg-gray-50 transition-colors z-10"
              >
                <IoIosArrowBack size={16} />
              </button>

              {/* Phone Mockup */}
              <div className="relative max-w-[325px] mx-auto">
                <div className="w-[90%] h-[90%] sm:w-full sm:h-full mx-auto bg-white rounded-2xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] overflow-hidden">
                  <video
                    key={currentTestimonial.video}
                    className="w-[90%] h-[90%] sm:w-full sm:h-full object-contain"
                    autoPlay
                    muted
                    playsInline
                    onEnded={(e) => e.target.pause()}
                  >
                    <source src={currentTestimonial.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              <button
                onClick={nextSlide}
                className="w-10 h-10 hidden md:flex bg-white border border-[rgba(104,71,68,0.1)] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.08)] rounded-full  items-center justify-center hover:bg-gray-50 transition-colors z-10"
              >
                <IoIosArrowForward size={16} />
              </button>

              {/* Pagination dots */}
            </div>
            <div className="flex items-center gap-1 justify-center my-5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-6 h-[2px]  md:w-4 md:h-0.5 transition-colors ${
                    index === currentSlide ? "bg-[#98685E]" : "bg-black/10"
                  }`}
                />
              ))}
            </div>
            <div className="flex flex-row gap-2 justify-center">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-white border border-[rgba(104,71,68,0.1)] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.08)] rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
              >
                <IoIosArrowBack size={16} />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-white border border-[rgba(104,71,68,0.1)] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.08)] rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
              >
                <IoIosArrowForward size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Image
        src="/dotLineFour.svg"
        alt="dotLineFour"
        width={1.1}
        height={70}
        className="absolute -bottom-0 left-[71.8%]"
      /> */}
    </section>
  );
}
