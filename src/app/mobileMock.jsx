import Image from "next/image";
import React from "react";

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
          <p className="text-lg text-center">
            Chi usa la nostra app è entusiasta: il 99,2% delle nostre utenti
            consiglierebbe Traininpink™ ad una propria amica.
          </p>
        </div>
      </div>
    </section>
  );
}
