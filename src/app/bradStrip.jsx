import Image from "next/image";
import React from "react";

export default function BradStrip() {
  const logos = [
    "/logo/fiveLogo.svg",
    "/logo/Vanity_Fair_Logo2.svg",
    "/logo/Forbes_logo 1.svg",
    "/logo/corriere_della.svg",
    "/logo/graza.svg",
  ];
  return (
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
  );
}
