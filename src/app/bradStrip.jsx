import Image from "next/image";
import React from "react";

export default function BradStrip() {
  const logos = [
    { src: "/logo/fiveLogo.svg", width: 69, height: 58 },
    { src: "/logo/Vanity_Fair_Logo2.svg", width: 174, height: 38 },
    { src: "/logo/Forbes_logo 1.svg", width: 141, height: 38 },
    { src: "/logo/corriere_della.svg", width: 428, height: 33 },
    { src: "/logo/graza.svg", width: 124, height: 38 },
    { src: "/logo/il-fatto-quotidiano.svg", width: 156, height: 59 },
    { src: "/logo/la-repubblica.svg", width: 186, height: 35 },
    { src: "/logo/cliomakeup.svg", width: 186, height: 35 },
    { src: "/logo/chi.svg", width: 64, height: 64 },
    { src: "/logo/huffpost.svg", width: 400, height: 47 },
    { src: "/logo/io-donna.svg", width: 64, height: 64 },
    { src: "/logo/novelaIcon.svg", width: 140, height: 64 },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-5 md:py-12">
      {/* Infinite scrolling container */}
      <div className="flex animate-marquee will-change-transform">
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 mx-8 md:mx-[52.5px] flex items-center justify-center"
            style={{ minWidth: '80px' }}
          >
            <Image
              src={logo.src}
              alt="brand logo"
              width={logo.width}
              height={logo.height}
              className=" w-auto object-contain opacity-100 hover:opacity-100 transition-all duration-300"
              priority={index < 6}
            />
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 mx-8 md:mx-[52.5px] flex items-center justify-center"
            style={{ minWidth: '80px' }}
          >
            <Image
              src={logo.src}
              alt="brand logo"
              width={logo.width}
              height={logo.height}
              className="h-8 w-auto object-contain opacity-100 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>


    </section>
  );
}
