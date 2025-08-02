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
        <div className="flex items-center gap-5">
          {/* App Store Button */}
          <a href="#" className="hover:opacity-80 transition-opacity">
            <div className="w-[165px] h-[55px] bg-black rounded-lg flex items-center justify-center">
              <svg width="165" height="55" viewBox="0 0 165 55" fill="none">
                <rect width="165" height="55" rx="8" fill="black"/>
                <text x="20" y="18" className="font-['SF_Pro_Display'] text-[10px] text-white">Scarica su</text>
                <text x="20" y="40" className="font-['SF_Pro_Display'] text-[22px] font-semibold text-white">App Store</text>
                <g transform="translate(115, 12)">
                  <path d="M25 19C24 17 22 16 20 16C18.5 16 17 16.8 16 18C15 19.2 14.7 20.8 14.7 22.4C14.7 24.5 15.4 26.4 16.7 27.7C18 29 19.9 29.7 22 29.7C24.1 29.7 26 29 27.3 27.7C28.6 26.4 29.3 24.5 29.3 22.4C29.3 20.8 29 19.2 28 18C27 16.8 25.5 16 24 16C22 16 20 17 19 19L25 19Z" fill="white"/>
                </g>
              </svg>
            </div>
          </a>
          
          {/* Google Play Button */}
          <a href="#" className="hover:opacity-80 transition-opacity">
            <div className="w-[186px] h-[55px] bg-black rounded-lg flex items-center justify-center">
              <svg width="186" height="55" viewBox="0 0 186 55" fill="none">
                <rect width="186" height="55" rx="8" fill="black"/>
                <text x="60" y="16" className="font-['Roboto'] text-[9px] text-white">DISPONIBILE SU</text>
                <text x="60" y="36" className="font-['Roboto'] text-[18px] font-medium text-white">Google Play</text>
                <g transform="translate(15, 16)">
                  <path d="M3 0L19 8L19 16L3 24L3 0Z" fill="#EB4335"/>
                  <path d="M19 8L25 12L19 16L19 8Z" fill="#FABC13"/>
                  <path d="M3 0L19 8L15 12L3 4L3 0Z" fill="#547DBF"/>
                  <path d="M3 24L19 16L15 12L3 20L3 24Z" fill="#30A851"/>
                </g>
              </svg>
            </div>
          </a>
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
          
          {/* Traininpink Logo Overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-white text-4xl md:text-6xl font-light tracking-wider">
              traininpink
            </div>
          </div>
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