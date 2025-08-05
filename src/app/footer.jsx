"use client";
import Image from "next/image";
import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaSpotify,
  FaTiktok,

  FaYoutube,
} from "react-icons/fa";
import { FaRegCopyright,FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  const [showChatMessage, setShowChatMessage] = useState(true);
  return (
    <footer className="bg-[#553B39] text-white relative">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout */}
          <div className="xl:hidden space-y-8">
            {/* Logo and Social Media */}
            <div className="flex flex-col items-center lg:items-start xl:items-center gap-6">
              <div className="w-[160px] sm:w-[166px] h-7 sm:h-8">
                <Image
                  src="/logo-vector-2.svg"
                  alt="traininpink"
                  width={166}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Social Media Icons */}
             
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {/* Traininpink Links */}
              <div className="flex flex-col items-center lg:items-start gap-3">
                <h3 className="font-dm-sans text-base font-bold leading-[22px] text-white">
                  Traininpink
                </h3>
                <div className="flex flex-col items-center lg:items-start gap-2">
                  <a
                    href="#"
                    className="font-dm-sans text-base sm:text-base leading-[20px] sm:leading-[22px] text-white hover:opacity-80 transition-opacity"
                  >
                    Buoni regalo Traininpink
                  </a>
                  <a
                    href="#"
                    className="font-dm-sans text-base sm:text-base leading-[20px] sm:leading-[22px] text-white hover:opacity-80 transition-opacity"
                  >
                    Contattaci
                  </a>
                </div>
              </div>

              {/* Resources Section */}
              <div className="flex flex-col items-center lg:items-start gap-3">
                <h3 className="font-dm-sans text-base font-bold leading-[22px] text-white">
                  Risorse
                </h3>
                <div className="flex flex-col items-center lg:items-start gap-2">
                  <a
                    href="#"
                    className="font-dm-sans text-base sm:text-base leading-[20px] sm:leading-[22px] text-white hover:opacity-80 transition-opacity"
                  >
                    Gestire il tuo account
                  </a>
                  <a
                    href="#"
                    className="font-dm-sans text-base sm:text-base leading-[20px] sm:leading-[22px] text-white hover:opacity-80 transition-opacity"
                  >
                    Centro di supporto
                  </a>
                  <a
                    href="#"
                    className="font-dm-sans text-base sm:text-base leading-[20px] sm:leading-[22px] text-white hover:opacity-80 transition-opacity"
                  >
                    Privacy and cookie policy
                  </a>
                  <a
                    href="#"
                    className="font-dm-sans text-base sm:text-base leading-[20px] sm:leading-[22px] text-white hover:opacity-80 transition-opacity"
                  >
                    Termini e Condizioni
                  </a>
                </div>
              </div>

              {/* App Store Buttons - Desktop and Tablet */}
              <div className="col-span-full hidden  lg:col-span-2 md:flex flex-col lg:flex-row items-center lg:justify-center gap-3 lg:gap-4">
                <Image
                  src="/logo/appStoreLogoDark.svg"
                  alt="appStoreIcon"
                  width={185}
                  height={55}
                  className="w-[160px] sm:w-[185px] h-auto"
                />
                <Image
                  src="/logo/playStoreLogoDark.svg"
                  alt="playStoreIcon"
                  width={185}
                  height={55}
                  className="w-[160px] sm:w-[185px] h-auto"
                />
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden xl:flex xl:flex-wrap xl:justify-center xl:gap-8">
            {/* Left Section - Logo and Social Media */}
            <div className="flex flex-col gap-[14px] flex-1 max-w-[354px]">
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
                  <FaInstagram size={20} />
                </a>

                {/* TikTok */}
                <a
                  href="#"
                  className="p-1 opacity-90 hover:opacity-100 transition-opacity"
                >
                  <FaTiktok size={20} />
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  className="p-1 opacity-90 hover:opacity-100 transition-opacity"
                >
                  <FaFacebook size={20} />
                </a>

                {/* Twitter */}
                <a
                  href="#"
                  className="p-1 opacity-90 hover:opacity-100 transition-opacity"
                >
                  <FaXTwitter size={20} />
                </a>

                {/* YouTube */}
                <a
                  href="#"
                  className="p-1 opacity-90 hover:opacity-100 transition-opacity"
                >
                  <FaYoutube size={20} />
                </a>

                {/* Spotify */}
                <a
                  href="#"
                  className="p-1 opacity-90 hover:opacity-100 transition-opacity"
                >
                  <FaSpotify size={20} />
                </a>
              </div>
            </div>

            {/* Middle Section - Traininpink Links */}
            <div className="flex flex-col gap-2 flex-1 max-w-[313px]">
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
            <div className="flex flex-col gap-2 flex-1 max-w-[325px]">
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
                width={132}
                height={44}
              />
              <Image
                src="/logo/playStoreLogoDark.svg"
                alt="playStoreIcon"
                width={132}
                height={44}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Help Chat Button - Positioned Absolutely */}

      {/* Chat Icon - Bottom Right */}
      <div className="fixed flex flex-col bottom-4 sm:bottom-6 lg:bottom-8 gap-3 sm:gap-4 right-4 sm:right-6 lg:right-8 items-end justify-center z-50">
        {showChatMessage && (
          <div className="flex items-end gap-2">
            {/* Close Button */}
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg cursor-grab hover:bg-white/90 transition-colors"
              onClick={() => setShowChatMessage(false)}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                className="sm:w-4 sm:h-4"
              >
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
            <div className="bg-white rounded-[16px] sm:rounded-[20px] px-2 py-2 sm:px-3 sm:py-3 shadow-lg max-w-[200px] sm:max-w-none">
              <span className="font-['DM_Sans'] text-xs sm:text-sm text-black">
                Come possiamo aiutarti?
              </span>
            </div>
          </div>
        )}
        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#98685E] rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] flex items-center justify-center shadow-lg hover:bg-[#8a5d56] transition-colors cursor-grab">
          <Image
            src="/logo/footerChatIcon.svg"
            alt="chatIcon"
            width={32}
            height={26}
            className="w-6 h-5 sm:w-7 sm:h-6 lg:w-8 lg:h-7"
          />
        </div>
      </div>



      {/* Copyright Section */}
      <div className="flex xl:hidden items-center justify-center gap-1 mt-10">
                {/* Instagram */}
                <a
                  href="#"
                  className="p-1 opacity-90 hover:opacity-100 transition-opacity"
                >
                  <FaFacebook size={25} />
                </a>
                <a
                  href="#"
                  className="p-1 opacity-90 hover:opacity-100 transition-opacity"
                >
                  <FaInstagram size={25} />
                </a>

                {/* TikTok */}
              

                {/* Facebook */}
              

                {/* Twitter */}
                <a
                  href="#"
                  className="p-1 opacity-90 hover:opacity-100 transition-opacity"
                >
                  <FaXTwitter size={25} />
                </a>
                <a
                  href="#"
                  className="p-1 opacity-90 hover:opacity-100 transition-opacity"
                >
                  <FaTiktok size={25} />
                </a>
                {/* YouTube */}
                <a
                  href="#"
                  className="p-1 opacity-90 hover:opacity-100 transition-opacity"
                >
                  <FaYoutube size={25} />
                </a>

                {/* Spotify */}
                <a
                  href="#"
                  className="p-1 opacity-90 hover:opacity-100 transition-opacity"
                >
                  <FaSpotify size={25} />
                </a>
              </div>
      <div className="py-4 sm:py-6 flex justify-center px-4">
      
        <p className="font-dm-sans text-sm sm:text-sm leading-4 sm:leading-5 text-white text-center flex items-center gap-2">
          <FaRegCopyright />
          2025 Traininpink | Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
