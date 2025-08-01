import Image from "next/image";
import HeroSection from "./hero";
import CarouselCover from "./coverflowCarousel.jsx";
import CarouselCoverLucide from "./coverflowLucide";
import PricingSection from "./pricing";
import TrustPilotSection from "./trustpilot";
import FAQSection from "./faq";
import Footer from "./footer";

export default function Home() {
  const logos = [
    "/logo/fiveLogo.svg",
    "/logo/Vanity_Fair_Logo2.svg",
    "/logo/Forbes_logo 1.svg",
    "/logo/corriere_della.svg",
    "/logo/graza.svg",
  ];
  return (
    <main>
      <HeroSection />
      <section className="flex flex-wrap gap-10 justify-between items-center p-10 max-w-[1328px] mx-auto">
        {logos?.map((logo, index) => {
          return (
            <div key={index}>
              <Image
                src={logo}
                alt="logo"
                width={200}
                height={38}
                className="w-full h-full object-contain"
              />
            </div>
          );
        })}
      </section>
      <section className="flex bg-[#F1EBE7] justify-betwen items-center p-20">
        <div className="w-1/2 flex justify-center">
          <Image
            src="/images/mobileMockup.png"
            alt="mobileMockup"
            width={348}
            height={714}
            className="w-full h-full object-contain max-w-[348px] max-h-[714px]"
          />
        </div>
        <div className="w-1/2">
          <div className="max-w-[477px] mx-auto flex flex-col gap-4">
            <h2 className="text-4xl font-normal text-center">
              Ottieni i risultati <br /> che meriti
            </h2>
            <p className="text-lg text-center">
              Chi usa la nostra app è entusiasta: il 99,2% delle nostre utenti
              consiglierebbe Traininpink™ ad una propria amica.
            </p>
          </div>
        </div>
      </section>
      {/* <CarouselCover /> */}
      <CarouselCoverLucide />
      <PricingSection />
      <TrustPilotSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
