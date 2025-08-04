"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowLeft, Phone, Video, Info, Mic, Camera, Smile, Plus } from "lucide-react"
import Image from "next/image"
import { GoChevronLeft } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { LuVideo } from "react-icons/lu";
import { HiOutlineFlag } from "react-icons/hi2";
import { FaCamera } from "react-icons/fa";
import { BsMic } from "react-icons/bs";
import { HiOutlinePhotograph } from "react-icons/hi";
import { RiEmojiStickerLine } from "react-icons/ri";
import { FiPlusCircle } from "react-icons/fi";

import { LuSignalHigh } from "react-icons/lu";
import { IoIosWifi } from "react-icons/io";
import { IoIosBatteryFull } from "react-icons/io";

export default function InstaMessage({ triggerAnimation = false, isActive = false, testimonial }) {
  const [animationsStarted, setAnimationsStarted] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showFirstMessage, setShowFirstMessage] = useState(false);
  const [showSecondMessage, setShowSecondMessage] = useState(false);
  const [shouldScrollUp, setShouldScrollUp] = useState(false);
  const containerRef = useRef(null);
  const messagesContainerRef = useRef(null);

  // Default testimonial data
  const defaultTestimonial = {
    user: {
      name: "Irene Diresta",
      username: "irene_diresta",
      profileImage: "/images/carouselDpTwo.png"
    },
    postImage: "/images/testimonialCarouseltwo.png",
    messages: [
      {
        type: "received",
        text: "Grazie per avermi accompagnata 💗"
      },
      {
        type: "sent", 
        text: "Bravissima! ✨"
      }
    ]
  };

  const currentTestimonial = testimonial || defaultTestimonial;

  // Reset animations when triggerAnimation changes
  useEffect(() => {
    if (triggerAnimation && isActive) {
      setAnimationsStarted(true);
      setShowImage(false);
      setShowFirstMessage(false);
      setShowSecondMessage(false);
      setShouldScrollUp(false);
      
      // Start animation sequence
      const timer1 = setTimeout(() => setShowImage(true), 300);
      const timer2 = setTimeout(() => setShowFirstMessage(true), 1000);
      const timer3 = setTimeout(() => setShowSecondMessage(true), 1600);
      const timer4 = setTimeout(() => setShouldScrollUp(true), 2200); // Scroll after all messages are shown
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    }
  }, [triggerAnimation, isActive]);

  // Reset when not active
  useEffect(() => {
    if (!isActive) {
      setAnimationsStarted(false);
      setShowImage(false);
      setShowFirstMessage(false);
      setShowSecondMessage(false);
      setShouldScrollUp(false);
    }
  }, [isActive]);

  // Scroll up animation effect
  useEffect(() => {
    if (shouldScrollUp && messagesContainerRef.current) {
      const container = messagesContainerRef.current;
      const isOverflowing = container.scrollHeight > container.clientHeight;
      
      if (isOverflowing) {
        // Smooth scroll to bottom to show the latest message
        setTimeout(() => {
          container.scrollTo({
            top: container.scrollHeight - container.clientHeight,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [shouldScrollUp]);

  // Intersection Observer for scroll-based trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && isActive && !animationsStarted) {
          setAnimationsStarted(true);
          setShowImage(false);
          setShowFirstMessage(false);
          setShowSecondMessage(false);
          
          // Start animation sequence
          const timer1 = setTimeout(() => setShowImage(true), 300);
          const timer2 = setTimeout(() => setShowFirstMessage(true), 1000);
          const timer3 = setTimeout(() => setShowSecondMessage(true), 1600);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isActive, animationsStarted]);

  return (
    <div ref={containerRef} className="bg-white h-full rounded-lg shadow-xl overflow-hidden max-w-sm mx-auto flex flex-col relative">
      {/* Status Bar */}
      <div className="bg-white px-6 py-2 flex justify-between items-center text-black font-semibold">
        <span className="text-[13px] pl-2">9:41</span>
        <div className="flex items-center gap-1">
          
          <LuSignalHigh className="text-[#14191D]" size={20} />
          <IoIosWifi className="text-[#14191D]" size={20} />
          <IoIosBatteryFull className="text-[#14191D]" size={20} />
        
        </div>
      </div>

      {/* Chat Header */}
      <div className="bg-white border-b border-gray-100 px-4 py-2 pt-0 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GoChevronLeft className="text-black" size={20} />
          <div className="w-7 h-7 rounded-full overflow-hidden">
            <Image src={currentTestimonial.user.profileImage} alt={currentTestimonial.user.name} width={28} height={28} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col items-start">
            <h2 className="font-semibold text-black text-[13px]">{currentTestimonial.user.name}</h2>
            <p className="text-gray-500 text-[10px]">{currentTestimonial.user.username}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <IoCallOutline className="text-black" size={20} />
          <LuVideo className="text-black" size={22} />
          <HiOutlineFlag className="text-black" size={20} />
        </div>
      </div>

      {/* Chat Content */}
      <div 
        ref={messagesContainerRef}
        className="bg-white px-2 py-6 flex flex-col overflow-y-auto scrollbar-hide chat-scroll flex-1"
        style={{
          minHeight: '350px',
          maxHeight: '450px'
        }}
      >
        {/* Shared Photo */}
        <div className="mb-4">
          <div 
            className={`rounded-2xl overflow-hidden transition-all duration-700 ease-out ${
              showImage 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-2'
            }`}
          >
            <Image 
              src={currentTestimonial.postImage}
              alt="Shared photo"
              width={361}
              height={413}
              className="w-[80%] h-[300px] object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Messages */}
        {currentTestimonial.messages.map((message, index) => (
          <div key={index}>
            {message.type === 'received' ? (
              <div 
                className={`flex items-end gap-2 mb-4 transition-all duration-500 ease-out ${
                  (index === 0 && showFirstMessage) || (index === 1 && showSecondMessage)
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-5'
                }`}
              >
                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={currentTestimonial.user.profileImage} alt={currentTestimonial.user.name} width={28} height={28} className="w-full h-full object-cover" />
                </div>
                <div className="max-w-[75%] w-fit bg-[#F3F5F7] rounded-2xl p-2">
                  <p className="text-black text-[13px] text-start">{message.text}</p>
                </div>
              </div>
            ) : (
              <div 
                className={`flex items-end justify-end gap-2 mb-4 transition-all duration-500 ease-out ${
                  (index === 0 && showFirstMessage) || (index === 1 && showSecondMessage)
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-5'
                }`}
              >
                <div className="max-w-[75%] w-fit bg-[#5251FF] rounded-2xl p-2">
                  <p className="text-white text-[13px] text-start">{message.text}</p>
                </div>
              </div>
            )}
          </div>
        ))}
        
        {/* Bottom padding for scroll space */}
        <div className="h-4"></div>

      </div>

      {/* Message Input */}
      <div className="bg-white px-2 py-3 mt-auto flex-shrink-0">
        <div className="flex items-center bg-[#F6F6F6] rounded-3xl px-1">
          <div className="w-8 h-8 rounded-full bg-[#5251FF] flex items-center justify-center flex-shrink-0">
            <FaCamera className="text-white" size={20} />
          </div>
          <div className="flex-1 relative">
            <input
              placeholder="Messaggio..."
              disabled
              className="w-full  rounded-full px-4 pl-2 py-2 pr-12 text-base"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
              <BsMic className="text-[#14191D]" size={18} />
              <HiOutlinePhotograph className="text-[#14191D]" size={20} />
              <RiEmojiStickerLine className="text-[#14191D]" size={20} />
              <FiPlusCircle className="text-[#14191D]" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
