"use client"
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [showChatMessage, setShowChatMessage] = useState(true);
  return (
    <footer className="bg-[#553B39] text-white relative">
      {/* Main Footer Content */}
      <div className="flex flex-wrap justify-center gap-8 pt-20 pb-10 px-8">
        {/* Left Section - Logo and Social Media */}
        <div className="flex flex-col gap-[14px] w-[354px]">
          {/* Logo */}
          <div className="w-[166px] h-8">
            <Image
              src="/logo-vector-2.svg"
              alt="traininpink"
              width={166}
              height={32}
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-1">
            {/* Instagram */}
            <a
              href="#"
              className="p-1 opacity-90 hover:opacity-100 transition-opacity"
            >
              <div className="w-[25px] h-[25px] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
                </svg>
              </div>
            </a>

            {/* TikTok */}
            <a
              href="#"
              className="p-1 opacity-90 hover:opacity-100 transition-opacity"
            >
              <div className="w-[25px] h-[25px] flex items-center justify-center">
                <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
                  <path
                    d="M16.5 8.5C16.5 8.5 14.5 7.5 12.5 8.5V16.5C12.5 18.5 10.5 20.5 8.5 20.5C6.5 20.5 4.5 18.5 4.5 16.5C4.5 14.5 6.5 12.5 8.5 12.5V9.5C5 9.5 2 12.5 2 16.5C2 20.5 5 23.5 8.5 23.5C12 23.5 15 20.5 15 16.5V12C16.5 13 18.5 13 18.5 13V9.5C18.5 9.5 17.5 8.5 16.5 8.5Z"
                    fill="white"
                  />
                </svg>
              </div>
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="p-1 opacity-90 hover:opacity-100 transition-opacity"
            >
              <div className="w-[25px] h-[25px] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>

            {/* Twitter */}
            <a
              href="#"
              className="p-1 opacity-90 hover:opacity-100 transition-opacity"
            >
              <div className="w-[25px] h-[25px] flex items-center justify-center">
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
                  <path
                    d="M23 3.01006C23 3.01006 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 23 3.01006 23 3.01006Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>

            {/* YouTube */}
            <a
              href="#"
              className="p-1 opacity-90 hover:opacity-100 transition-opacity"
            >
              <div className="w-[25px] h-[25px] flex items-center justify-center">
                <svg width="24" height="17" viewBox="0 0 24 17" fill="none">
                  <path
                    d="M22.54 2.88C22.54 2.88 22.32 1.44 21.67 0.79C20.84 -0.14 19.91 -0.14 19.48 -0.19C16.28 -0.42 12.01 -0.42 12.01 -0.42C12.01 -0.42 7.74 -0.14 4.54 -0.19C4.11 -0.14 3.18 -0.14 2.35 0.79C1.7 1.44 1.48 2.88 1.48 2.88C1.48 2.88 1.25 4.61 1.25 6.34V7.92C1.25 9.65 1.48 11.38 1.48 11.38C1.48 11.38 1.7 12.82 2.35 13.47C3.18 14.4 4.27 14.37 4.76 14.46C6.5 14.63 12.01 14.68 12.01 14.68C12.01 14.68 16.28 14.64 19.48 14.41C19.91 14.36 20.84 14.36 21.67 13.43C22.32 12.78 22.54 11.34 22.54 11.34C22.54 11.34 22.77 9.61 22.77 7.88V6.3C22.77 4.57 22.54 2.88 22.54 2.88ZM9.68 10.32V4.15L15.65 7.24L9.68 10.32Z"
                    fill="white"
                  />
                </svg>
              </div>
            </a>

            {/* Spotify */}
            <a
              href="#"
              className="p-1 opacity-90 hover:opacity-100 transition-opacity"
            >
              <div className="w-[25px] h-[25px] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 14.5C10 13.5 14 13.5 16 14.5M7 11.5C10 10.5 14 10.5 17 11.5M6.5 8.5C10.5 7.5 13.5 7.5 17.5 8.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Middle Section - Traininpink Links */}
        <div className="flex flex-col gap-2 w-[313px]">
          <h3 className="font-['DM_Sans'] text-[15.75px] font-bold leading-[22px] text-white">
            Traininpink
          </h3>
          <div className="flex flex-col">
            <a
              href="#"
              className="font-['DM_Sans'] text-base leading-[22px] text-white pb-[10px] hover:opacity-80 transition-opacity"
            >
              Buoni regalo Traininpink
            </a>
            <a
              href="#"
              className="font-['DM_Sans'] text-base leading-[22px] text-white pb-[10px] hover:opacity-80 transition-opacity"
            >
              Contattaci
            </a>
          </div>
        </div>

        {/* Resources Section */}
        <div className="flex flex-col gap-2 w-[325px]">
          <h3 className="font-['DM_Sans'] text-[15.875px] font-bold leading-[22px] text-white">
            Risorse
          </h3>
          <div className="flex flex-col">
            <a
              href="#"
              className="font-['DM_Sans'] text-base leading-[22px] text-white pb-[10px] hover:opacity-80 transition-opacity"
            >
              Gestire il tuo account
            </a>
            <a
              href="#"
              className="font-['DM_Sans'] text-base leading-[22px] text-white pb-[10px] hover:opacity-80 transition-opacity"
            >
              Centro di supporto
            </a>
            <a
              href="#"
              className="font-['DM_Sans'] text-base leading-[22px] text-white pb-[10px] hover:opacity-80 transition-opacity"
            >
              Privacy and cookie policy
            </a>
            <a
              href="#"
              className="font-['DM_Sans'] text-base leading-[22px] text-white pb-[10px] hover:opacity-80 transition-opacity"
            >
              Termini e Condizioni
            </a>
          </div>
        </div>

        {/* Right Section - App Store Buttons */}
        <div className="flex flex-col items-end gap-1.5 pb-1.5">
          {/* App Store */}
          <Image
            src="/logo/appStoreLogoDark.svg"
            alt="appStoreIcon"
            width={185}
            height={55}
          />
          <Image
            src="/logo/playStoreLogoDark.svg"
            alt="playStoreIcon"
            width={185}
            height={55}
          />
        </div>
      </div>

      {/* Help Chat Button - Positioned Absolutely */}
     

      {/* Chat Icon - Bottom Right */}
      <div className="fixed flex flex-col bottom-8 gap-4 right-8 items-end justify-center">
        {showChatMessage && (
          <div className="flex items-end gap-2">
            {/* Close Button */}
            <div 
              className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-white/90 transition-colors"
              onClick={() => setShowChatMessage(false)}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M12 4L4 12M4 4L12 12"
                  stroke="black"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Help Button */}
            <div className="bg-white rounded-[20px] px-3 py-3 shadow-lg">
              <span className="font-['DM_Sans'] text-sm text-black">
                Come possiamo aiutarti?
              </span>
            </div>
          </div>
        )}
      <div className="w-16 h-16 bg-[#98685E] rounded-[32px] flex items-center justify-center shadow-lg hover:bg-[#8a5d56] transition-colors cursor-pointer">
        <Image
          src="/logo/footerChatIcon.svg"
          alt="chatIcon"
          width={32}
          height={26}
        />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-white/10 py-6 flex justify-center">
        <p className="font-['DM_Sans'] text-sm leading-5 text-white">
          © 2024 Traininpink | Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
