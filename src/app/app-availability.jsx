import Image from "next/image";

export default function AppAvailabilitySection() {
  return (
    <section className="bg-white relative w-full h-[1173px] overflow-hidden">
      {/* Header Content */}
      <div className="absolute top-[84px] left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-[13px]">
          <h2 className="font-['Poppins'] text-[36px] leading-[47px] tracking-[-0.15px] font-normal text-black text-center">
            Available on your TV, iPhone, or<br />
            Android—wherever you train.
          </h2>
        </div>
      </div>

      {/* App Store Buttons */}
      <div className="absolute top-[226px] left-1/2 transform -translate-x-1/2 z-20">
         
          <div className="flex gap-4 items-center justify-center mt-10">
            <Image
              src="/logo/playStoreIcon.svg"
              alt="playStoreIcon"
              width={185}
              height={55}
            />
            <Image
              src="/logo/appStoreIcon.svg"
              alt="appStoreIcon"
              width={185}
              height={55}
            />
        </div>
      </div>

      {/* Main Background Image - Samsung TV */}
      <div className="absolute top-[329px] left-[93px] w-[1254px] h-[719px]">
        <div className="relative w-full h-full">
          <Image
            src="/mockup/samsung-tv-6050db.png"
            alt="Woman doing yoga on TV"
            fill
            className="object-cover"
            priority
          />
          
          
        </div>
      </div>

      {/* Device Mockups */}
      {/* iPad Silver - Top Right */}
      <div className="absolute top-[717px] left-[954px] w-[285px] h-[372px] drop-shadow-lg">
        <div className="relative w-full h-full">
          <Image
            src="/mockup/ipad-silver-56586a.png"
            alt="iPad mockup"
            fill
            className="object-contain"
          />
          {/* iPad Screen Content */}
          <div className="absolute top-[13px] left-[12px] w-[261px] h-[348px] overflow-hidden rounded-lg">
            <Image
              src="/mockup/ipad-screen-content-56586a.png"
              alt="iPad app content"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Phone Mockup - Bottom Center Right */}
      <div className="absolute top-[850px] left-[1096px] w-[110px] h-[234px] drop-shadow-lg">
        <div className="relative w-full h-full">
          <Image
            src="/mockup/phone-mockup-56586a.png"
            alt="Phone mockup"
            fill
            className="object-contain"
          />
          {/* Phone Screen Content */}
          <div className="absolute top-[5px] left-[5px] w-[100px] h-[224px] overflow-hidden rounded-lg">
            <Image
              src="/mockup/phone-screen-content-56586a.png"
              alt="Phone app content"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* iPhone Space Black - Bottom Right */}
      <div className="absolute top-[867px] left-[1184px] w-[109px] h-[222px] drop-shadow-lg">
        <div className="relative w-full h-full">
          <Image
            src="/mockup/iphone-space-black-56586a.png"
            alt="iPhone Space Black mockup"
            fill
            className="object-contain"
          />
          {/* iPhone Screen Content */}
          <div className="absolute top-[5px] left-[6px] w-[98px] h-[212px] overflow-hidden rounded-xl">
            <Image
              src="/mockup/iphone-screen-content-56586a.png"
              alt="iPhone app content"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 