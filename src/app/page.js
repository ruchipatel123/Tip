"use client";
import Image from "next/image";
import HeroSection from "./hero";
import CarouselCover from "./coverflowCarousel.jsx";
import CarouselCoverLucide from "./coverflowLucide";
import TestimonialsSection from "./testimonials";
import PricingSection from "./pricing";
import TrustPilotSection from "./trustpilot";
import FAQSection from "./faq";
import MilestonesSection from "./milestones";
import AppAvailabilitySection from "./app-availability";
import Footer from "./footer";
import MobileSection from "./mobileSection";
import BradStrip from "./bradStrip";
import MobileMock from "./mobileMock";
import CoverflowLucideTestimonial from "./coverflowLucideTestimonial";
import { FaApple, FaFacebook } from "react-icons/fa";
import { useState, useEffect } from "react";
import MobileSectionSnap from "./mobileSectionSnap";

export default function Home() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <main>
      <HeroSection />
      <BradStrip />
      {/* <MobileMock /> */}
      {isMobile ? <MobileTrustSection /> : null}
      {isMobile ? <MobileSectionSnap /> : <MobileSection />}
      <TestimonialsSection />
      {/* <CarouselCover /> */}
      <CarouselCoverLucide />
      <PricingSection />
      <TrustPilotSection />
      <FAQSection />
      <CoverflowLucideTestimonial />
      <MilestonesSection />
      <AppAvailabilitySection />
      <Footer />
    </main>
  );
}

const MobileTrustSection = () => {
  return (
    <div className="block md:hidden w-full bg-[#F1EBE7] py-10 relative">
      <div className="max-w-[477px] mx-auto flex flex-col gap-4">
        <h2 className="text-2xl-up-custom font-poppins font-normal leading-9 text-center">
          Ottieni i risultati <br /> che meriti
        </h2>
        <p className="text-lg text-center font-normal text-bold hidden md:block">
          Chi usa la nostra app è entusiasta: il 99,2% delle nostre utenti
          consiglierebbe Traininpink™ ad una propria amica.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 justify-center mt-10 px-2">
        <div className="flex flex-row gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo/wreath-left.svg.svg"
              alt="left wreath"
              width={30}
              height={100}
            />
            <div className="flex flex-col items-center">
              <FaApple className="text-4xl mb-2" color="#000" size={20} />
              <span className="text-sm font-dm-sans font-medium text-[#737373] text-center leading-5">
                4.8/5 stelle
                <br />
                1.500+ recensioni{" "}
              </span>
            </div>
            <Image
              src="/logo/wreath-left.svg.svg"
              alt="left wreath"
              width={30}
              height={100}
              className="scale-x-[-1]"
            />
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/logo/wreath-left.svg.svg"
              alt="left wreath"
              width={30}
              height={100}
            />
            <div className="flex flex-col items-center">
              <Image
                src="/logo/playstore.svg"
                alt="googlePlay"
                width={19}
                height={20}
                className=" mb-2"
              />
              <span className="text-sm font-dm-sans font-medium text-[#737373] text-center leading-5">
                5/5 stelle
                <br />
                1.500+ recensioni{" "}
              </span>
            </div>
            <Image
              src="/logo/wreath-left.svg.svg"
              alt="left wreath"
              width={30}
              height={100}
              className="scale-x-[-1]"
            />
          </div>
        </div>
        <div className="flex flex-row gap-4">
          
        <div className="flex items-center gap-2">
            <Image
              src="/logo/wreath-left.svg.svg"
              alt="left wreath"
              width={30}
              height={100}
            />
            <div className="flex flex-col items-center">
              <FaFacebook className="text-4xl mb-2" color="#1877F2" size={20} />
              <span className="text-sm font-dm-sans font-medium text-[#737373] text-center leading-5">
                4.9/5 stelle
                <br />
                150+ recensioni{" "}
              </span>
            </div>
            <Image
              src="/logo/wreath-left.svg.svg"
              alt="left wreath"
              width={30}
              height={100}
              className="scale-x-[-1]"
            />
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/logo/wreath-left.svg.svg"
              alt="left wreath"
              width={30}
              height={100}
            />
            <div className="flex flex-col items-center">
              <Image
                src="/trustpilotSvg.svg"
                alt="appStore"
                width={83}
                height={20}
                className=" mb-2 object-contain"
              />
              <span className="text-sm font-dm-sans font-medium text-[#737373] text-center leading-5">
                4.9/5 stelle
                <br />
                600+ recensioni{" "}
              </span>
            </div>
            <Image
              src="/logo/wreath-left.svg.svg"
              alt="left wreath"
              width={30}
              height={100}
              className="scale-x-[-1]"
            />
          </div>
        </div>
      </div>

      <div className="flex md:hidden flex-row-reverse sm:flex-row gap-4 items-center justify-center mt-10">
        <Image
          src="/logo/playStoreIcon.svg"
          alt="playStoreIcon"
          width={185}
          height={55}
          className="w-[140px] sm:w-[160px] lg:w-[185px] h-[41px]"
        />
        <Image
          src="/logo/appStoreIcon.svg"
          alt="appStoreIcon"
          width={185}
          height={55}
          className="w-[140px] sm:w-[160px] lg:w-[185px] h-[41px]"
        />
      </div>
      {/* <Image
        src="/logo/largeLine.svg"
        alt="largeLine"
        width={1}
        height={400}
        className="mx-auto absolute left-1/2 top-[180%]"
      /> */}
    </div>
  );
};
