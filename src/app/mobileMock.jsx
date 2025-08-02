import Image from "next/image";
import React from "react";
import { FaApple, FaFacebook } from "react-icons/fa";

export default function MobileMock() {
  return (
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
          <p className="text-lg text-center font-normal text-bold">
            Chi usa la nostra app è entusiasta: il 99,2% delle nostre utenti
            consiglierebbe Traininpink™ ad una propria amica.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center mt-10">
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
              <FaFacebook className="text-4xl mb-2" color="#1877F2" size={20} />
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

        <div>
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
      </div>
    </section>
  );
}
