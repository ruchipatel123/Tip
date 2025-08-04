"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaApple, FaFacebook } from "react-icons/fa";

const SCROLL_THRESHOLD = 0.05; // 5% threshold for very responsive transitions

export default function MobileSection() {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const lastScrollY = useRef(0);

  const sections = [
    {
      id: 0,
      image: "/images/allenamento.jpg",
      alt: "allenamento",
      width: 1352,
      height: 598,
      title: "Allenamento",
      description:
        "Programmi di allenamento personalizzati per raggiungere i tuoi obiettivi",
    },
    {
      id: 1,
      image: "/images/nutrizone.jpg",
      alt: "nutrizone",
      width: 888,
      height: 393,
      title: "Nutrizione",
      description:
        "Piani nutrizionali studiati per supportare il tuo percorso fitness",
    },
    {
      id: 2,
      image: "/images/progresstracking.jpg",
      alt: "progresstracking",
      width: 888,
      height: 393,
      title: "Progress Tracking",
      description:
        "Monitora i tuoi progressi e celebra ogni traguardo raggiunto",
    },
  ];

  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Handle custom scroll behavior with threshold
  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      if (isScrolling) return;

      const scrollTop = window.scrollY;
      const containerTop = containerRef.current?.offsetTop || 0;
      const relativeScroll = scrollTop - containerTop;
      const sectionHeight = window.innerHeight;

      // Detect scroll direction
      const scrollDirection = scrollTop > lastScrollY.current ? "down" : "up";
      lastScrollY.current = scrollTop;

      // Calculate which section we're in and how far through it
      const sectionIndex = Math.floor(relativeScroll / sectionHeight);
      const sectionProgress = (relativeScroll % sectionHeight) / sectionHeight;

      // Clear existing timeout
      clearTimeout(timeout);

      // Debounce scroll handling (reduced for smoother response)
      timeout = setTimeout(() => {
        if (sectionIndex >= 0 && sectionIndex < sections.length) {
          let targetSection = currentSection; // Use current section state

          // Apply direction-based threshold logic
          if (
            scrollDirection === "down" &&
            sectionProgress > SCROLL_THRESHOLD &&
            currentSection < sections.length - 1
          ) {
            // Scrolling down - go to next section
            targetSection = currentSection + 1;
          } else if (
            scrollDirection === "up" &&
            sectionProgress < 0.9 &&
            currentSection > 0
          ) {
            // Scrolling up - go to previous section
            targetSection = currentSection - 1;
          }

          // Snap to target section if needed
          if (targetSection !== currentSection) {
            setIsScrolling(true);
            setCurrentSection(targetSection);

            const targetScroll = containerTop + targetSection * sectionHeight;
            window.scrollTo({
              top: targetScroll,
              behavior: "smooth",
            });

            // Reset scrolling flag after animation
            setTimeout(() => setIsScrolling(false), 600);
          }
        }
      }, 25);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, [isScrolling, sections.length]);

  return (
    <section className="bg-[#F1EBE7] pt-10">
      <div className="hidden md:block sticky top-10 left-[5%] xl:left-[18%] z-[100] w-1/2 ">
        <Image
          src="/images/mobileMockup.png"
          alt="mobileMockup"
          width={348}
          height={714}
          className="w-[240px] h-[5`0px] lg:w-[348px] top-10 left-0 z-[100] lg:h-[714px] "
        />
      </div>

      <div ref={containerRef} className="mt-10 md:mt-50 relative">
        <div className="hidden md:block w-full md:w-1/2 absolute md:-top-155 lg:-top-200 right-0 md:right-20">
          <div className="max-w-[477px] mx-auto flex flex-col gap-4">
            <h2 className="text-4xl font-normal text-center">
              Ottieni i risultati <br /> che meriti
            </h2>
            <p className="text-lg text-center font-normal text-bold hidden md:block">
              Chi usa la nostra app è entusiasta: il 99,2% delle nostre utenti
              consiglierebbe Traininpink™ ad una propria amica.
            </p>
          </div>
          <div className="flex lg:flex-wrap gap-4 justify-center mt-10">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo/wreath-left.svg.svg"
                  alt="left wreath"
                  width={30}
                  height={100}
                />
                <div className="flex flex-col items-center">
                  <FaApple className="text-4xl mb-2" color="#000" size={20} />
                  <span className="text-[17.5px] text-[#737373] font-bold text-center leading-5">
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
                  <FaFacebook
                    className="text-4xl mb-2"
                    color="#1877F2"
                    size={20}
                  />
                  <span className="text-[17.5px] text-[#737373] font-bold text-center leading-5">
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
            </div>
            <div className="flex flex-col gap-8">
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
                  <span className="text-[17.5px] text-[#737373] font-bold text-center leading-5">
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
                    src="/logo/trustPilotLogo.png"
                    alt="appStore"
                    width={83}
                    height={20}
                    className=" mb-2"
                  />
                  <span className="text-[17.5px] text-[#737373] font-bold text-center leading-5">
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
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-10">
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
        </div>

        
        <div className="block md:hidden w-full">
          <div className="max-w-[477px] mx-auto flex flex-col gap-4">
            <h2 className="text-4xl font-normal text-center">
              Ottieni i risultati <br /> che meriti
            </h2>
            <p className="text-lg text-center font-normal text-bold hidden md:block">
              Chi usa la nostra app è entusiasta: il 99,2% delle nostre utenti
              consiglierebbe Traininpink™ ad una propria amica.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo/wreath-left.svg.svg"
                  alt="left wreath"
                  width={30}
                  height={100}
                />
                <div className="flex flex-col items-center">
                  <FaApple className="text-4xl mb-2" color="#000" size={20} />
                  <span className="text-[17.5px] text-[#737373] font-bold text-center leading-5">
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
                  <FaFacebook
                    className="text-4xl mb-2"
                    color="#1877F2"
                    size={20}
                  />
                  <span className="text-[17.5px] text-[#737373] font-bold text-center leading-5">
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
            </div>
            <div className="flex flex-col gap-8">
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
                  <span className="text-[17.5px] text-[#737373] font-bold text-center leading-5">
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
                    src="/logo/trustPilotLogo.png"
                    alt="appStore"
                    width={83}
                    height={20}
                    className=" mb-2"
                  />
                  <span className="text-[17.5px] text-[#737373] font-bold text-center leading-5">
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
            </div>
          </div>

          <div>
            <div className="flex flex-row gap-4 items-center justify-center my-10">
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
        </div>
        <Image
          src="/images/mobileMockup.png"
          alt="mobileMockup"
          width={348}
          height={714}
          className="w-[348px] z-[100] block md:hidden h-[714px] sticky top-10 mx-auto"
        />

        {sections.map((section, index) => {
          const isActive = currentSection === index;

          return (
            <motion.section
              key={section.id}
              className="h-screen flex flex-col justify-center items-center px-4 md:px-20 relative max-h-[850px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {index === 2 && (
                <Image
                  src="/dotLineFour.svg"
                  alt="dotLineFour"
                  width={2}
                  height={184}
                  className="absolute hidden md:block bottom-0 left-[50%]"
                />
              )}
              {/* Animated Image */}
              <motion.div
                className="relative z-20 w-full mx-auto max-w-[1360px]"
                animate={{
                  scale: isActive ? 1 : 0.8,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                {/* Section Indicator */}
                {index === 0 && (
                  <Image
                    src="/dotLineOne.svg"
                    alt="dotLineOne"
                    width={412}
                    height={184}
                    className="absolute hidden md:block -top-[35%] left-[42%] -translate-x-[42%]"
                  />
                )}

                {index === 0 && (
                  <Image
                    src="/dotLineTwo.svg"
                    alt="dotLineTwo"
                    width={612}
                    height={184}
                    className="absolute hidden md:block top-[110%] left-[20%] -translate-x-[20%]"
                  />
                )}
                {index === 1 && (
                  <Image
                    src="/dotLineThree.svg"
                    alt="dotLineThree"
                    width={612}
                    height={184}
                    className="absolute hidden md:block top-[80%] -right-12"
                  />
                )}

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`overflow-hidden rounded-lg mx-auto shadow-2xl relative ${
                      section.width > 1000
                        ? isActive
                          ? "max-w-[1360px] max-h-[598px]"
                          : "max-w-5xl max-h-[480px]"
                        : isActive
                        ? "max-w-[1360px] max-h-[598px]"
                        : "max-w-5xl max-h-[480px]"
                    } w-full h-auto transition-all duration-600`}
                  >
                    <Image
                      src={section.image}
                      alt={section.alt}
                      width={section.width}
                      height={section.height}
                      className={`w-full h-full object-cover
                      ${
                        index === 0
                          ? "xl:object-[0px_-14rem]"
                          : index === 1
                          ? "xl:object-[0px_-32rem]"
                          : "xl:object-[0px_-32rem]"
                      }
                      `}
                      priority={index === 0}
                    />

                    {/* Gradient overlay on all images */}
                    <div
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 85%)",
                      }}
                    />

                    {/* Color overlay for inactive images */}
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: "#DFD1C9",
                        mixBlendMode: "color",
                      }}
                      initial={{ opacity: 1 }}
                      animate={{
                        opacity: isActive ? 0 : 1,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: isActive ? 0.3 : 0,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Title text at bottom right */}
                    <motion.div
                      className="absolute bottom-4 right-4 z-10"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <h2 className="text-2xl md:text-3xl font-normal text-white text-right">
                        {section.title}
                      </h2>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.section>
          );
        })}
      </div>
    </section>
  );
}
