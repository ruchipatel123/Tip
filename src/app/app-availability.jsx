import Image from "next/image";

export default function AppAvailabilitySection() {
  return (
    <section className="bg-white w-full py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Header Content */}
      <div className="flex flex-col items-center gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-16">
        <h2 className="font-poppins leading-9 text-2xl-up-custom sm:text-[28px] lg:text-[36px]  tracking-[-0.15px] font-normal text-black text-center  max-w-[316px] md:max-w-4xl mx-auto px-2">
          Available on your TV, iPhone, or <br className="hidden md:block"/>
          Android—wherever you train.
        </h2>

        {/* App Store Buttons */}
        <div className="hidden md:flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Image
            src="/logo/playStoreIcon.svg"
            alt="playStoreIcon"
            width={185}
            height={55}
            className="w-[140px] sm:w-[160px] lg:w-[185px] h-auto"
          />
          <Image
            src="/logo/appStoreIcon.svg"
            alt="appStoreIcon"
            width={185}
            height={55}
            className="w-[140px] sm:w-[160px] lg:w-[185px] h-auto"
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block relative px-4 sm:px-6 lg:px-8">
        {/* Main Background Image - Samsung TV */}
        <div className="relative mx-auto max-w-7xl">
          <div className="relative w-full aspect-[16/9] max-w-[1254px] mx-auto">
            <Image
              src="/mockup/samsung-tv-6050db.png"
              alt="Woman doing yoga on TV"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* Device Mockups */}
          {/* iPad Silver - Top Right */}
          <div className="absolute -bottom-5 right-[10%] w-[285px] h-[372px] drop-shadow-lg">
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
          <div className="absolute -bottom-5 right-[6%] w-[110px] h-[234px] drop-shadow-lg">
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
          <div className="absolute -bottom-5 right-[2.5%] w-[109px] h-[222px] drop-shadow-lg">
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
        </div>
      </div>

      {/* Mobile Layout - Integrated Image */}
      <div className="md:hidden px-4 sm:px-6">
        <div className="relative w-full max-w-md mx-auto">
          <Image
            src="/images/mockupTvDevices.png"
            alt="TV and mobile devices mockup"
            width={360}
            height={217}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
      <div className="flex md:hidden flex-row sm:flex-row gap-4 items-center justify-center mt-10">
          <Image
            src="/logo/playStoreIcon.svg"
            alt="playStoreIcon"
            width={185}
            height={55}
            className="w-[140px] sm:w-[160px] lg:w-[185px] h-auto"
          />
          <Image
            src="/logo/appStoreIcon.svg"
            alt="appStoreIcon"
            width={185}
            height={55}
            className="w-[140px] sm:w-[160px] lg:w-[185px] h-auto"
          />
        </div>
    </section>
  );
} 