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

export default function Home() {
  
  return (
    <main>
      <HeroSection />
      <BradStrip />
      <MobileMock />
      <MobileSection />
      <TestimonialsSection />
      {/* <CarouselCover /> */}
      <CarouselCoverLucide />
      <PricingSection />
      <TrustPilotSection />
      <FAQSection />
      <CarouselCoverLucide />
      <MilestonesSection />
      <AppAvailabilitySection />
      <Footer />
    </main>
  );
}
