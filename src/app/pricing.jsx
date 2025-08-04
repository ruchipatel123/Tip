import Image from "next/image";

export default function PricingSection() {
  return (
    <section className="bg-[#F1EBE7] px-4 sm:px-8 lg:px-16 xl:px-[163px] py-8 sm:py-12 lg:py-16 flex flex-col items-center">
      <div className="w-full max-w-[1114px] flex flex-col items-center gap-8 sm:gap-10 lg:gap-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 sm:gap-6">
          <h2 className="text-2xl-up-custom  lg:text-[36px] leading-[32px] sm:leading-[38px] lg:leading-[47px] tracking-[-0.15px] font-normal text-black font-poppins px-2">
            Ti garantiamo i risultati:{' '}
            <br className="hidden md:block"/>
            soddisfatta o rimborsata
          </h2>
          <p className="font-dm-sans text-lg sm:text-base leading-[22px] sm:leading-[26px] text-black max-w-md lg:max-w-[442px] px-4">
            Un unico piano con accesso a tutti gli allenamenti e la nutrizione Traininpink™. Tutto incluso disdici quando vuoi.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 w-full max-w-[1200px]">
          {/* Monthly Card */}
          <div className="w-full max-w-sm lg:w-[350px] bg-white rounded-2xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] border border-black/10 p-4 sm:p-6  max-h-[326px]">
            <div className="flex flex-col justify-between gap-8 sm:gap-10 h-full max-h-[326px]">
              <div className="flex flex-col gap-3 sm:gap-4">
                <h3 className="font-poppins text-lg sm:text-[28px] font-medium leading-[32px] sm:leading-[36px] tracking-[-0.1px] text-black">
                  Mensile
                </h3>
                <div className="text-[#684744]">
                  <span className="font-poppins text-lg sm:text-xl-custom leading-[32px] sm:leading-[36px] tracking-[-0.1px]">€23.99</span>
                  <span className="font-dm-sans text-[15px] sm:text-base  leading-[32px] sm:leading-[36px] tracking-[-0.1px]"> / month</span>
                </div>
                <div className="font-dm-sans text-sm sm:text-base leading-[20px] sm:leading-[26px] text-[#404040]">
                  dopo la <b>prova</b><br />
                  <span className="font-bold"> gratuita di 7 giorni</span>
                </div>
              </div>
              <button className="bg-[#F3EFEC] border border-black/10 shadow-[0px_2px_20px_0px_rgba(0,0,0,0.08)] rounded-lg py-[10px] px-4 flex items-center justify-center gap-3 w-full h-12 sm:h-auto">
                <span className="font-dm-sans text-lg sm:text-xl font-bold leading-[24px] sm:leading-[29px] text-[#684744]">
                  Inizia la prova gratuita
                </span>
                <svg width="13.33" height="10" viewBox="0 0 14 10" fill="none" className="flex-shrink-0">
                  <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="#684744" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Semi-annual Card (Best Value) */}
          <div className="w-full max-w-sm lg:w-[350px] flex flex-col">
            {/* Best Value Badge */}
            <div 
              className="rounded-t-2xl shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)] px-2 py-3 flex items-center justify-center gap-2"
              style={{
                background: 'linear-gradient(270deg, #98685E 36%, #32221F 100%)'
              }}
            >
              <Image src='/logo/Sparkle.svg' alt='starIcon' width={20} height={20} />
              <span className="font-dm-sans text-[15px] sm:text-base leading-[20px] sm:leading-[26px] text-white font-bold">
                BEST VALUE
              </span>
            </div>
            
            {/* Card Content */}
            <div className="bg-white rounded-b-2xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] border border-black/10 p-4 sm:p-6 relative md:min-h-[380px] md:h-[430px]">
              <div className="flex flex-col justify-between h-full gap-8">
                <div className="flex flex-col gap-3 sm:gap-4">
                  <h3 className="font-poppins text-lg sm:text-[28px] font-medium leading-[32px] sm:leading-[36px] tracking-[-0.1px] text-black">
                    Semestrale
                  </h3>
                  <div className="text-[#684744]">
                    <span className="font-poppins text-lg sm:text-xl-custom leading-[32px] sm:leading-[36px] tracking-[-0.1px]">€13.33</span>
                    <span className="font-dm-sans text-[15px] sm:text-base leading-[32px] sm:leading-[36px] tracking-[-0.1px]"> / month</span>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-1.5 font-dm-sans text-[15px] sm:text-sm leading-[18px] sm:leading-[21px]">
                    <span className="text-[#684744] opacity-40 line-through">€143.94 </span>
                    <span className="text-[#684744]">€89.99</span>
                    <span className="text-[#98685E] italic">billed half yearly</span> 
                  </div>
                  <div className="font-dm-sans text-[15px] sm:text-base leading-[20px] sm:leading-[26px] text-[#404040]">
                    dopo la <br />
                    <span className="font-bold">prova gratuita di 7 giorni</span>
                  </div>
                </div>
                <button className="bg-[#684744] border border-[rgba(243,239,236,0.2)] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.2)] rounded-lg py-[10px] px-4 flex items-center justify-center gap-3 w-full h-12 sm:h-auto">
                  <span className="font-dm-sans text-lg sm:text-xl font-bold leading-[24px] sm:leading-[29px] text-white">
                    Inizia la prova gratuita
                  </span>
                  <svg width="13.33" height="10" viewBox="0 0 14 10" fill="none" className="flex-shrink-0">
                    <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              
              {/* Save Badge */}
              <div className="absolute top-4 sm:top-7 right-4 sm:right-[25px] bg-[#DFD1C9] rounded-full px-2 py-2 sm:py-[9px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.15)] h-7 sm:h-8 flex items-center">
                <span className="font-dm-sans text-[12px] sm:text-xs font-semibold leading-4 sm:leading-6 tracking-[0.1px] text-[#553B39] uppercase">
                  RISPARMIA IL 37%
                </span>
              </div>
            </div>
          </div>

          {/* Annual Card */}
          <div className="w-full max-w-sm lg:w-[350px] bg-white rounded-2xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] border border-black/10 p-4 sm:p-6 relative max-h-[326px]">
            <div className="flex flex-col justify-between gap-8 sm:gap-10 h-full max-h-[326px]">
              <div className="flex flex-col gap-3 sm:gap-4">
                <h3 className="font-poppins text-lg sm:text-[28px] font-medium leading-[32px] sm:leading-[36px] tracking-[-0.1px] text-black">
                  Annuale
                </h3>
                <div className="text-[#684744]">
                  <span className="font-poppins text-lg sm:text-xl-custom leading-[32px] sm:leading-[36px] tracking-[-0.1px]">€13.33</span>
                  <span className="font-dm-sans text-[15px] sm:text-base leading-[32px] sm:leading-[36px] tracking-[-0.1px]"> / month</span>
                </div>
                <div className="flex flex-wrap items-baseline gap-1.5 font-dm-sans text-[15px] sm:text-sm leading-[18px] sm:leading-[21px]">
                  <span className="text-[#684744]">€159.99</span>
                  <span className="text-[#98685E] italic">billed yearly</span>
                </div>
                <div className="font-dm-sans text-[15px] sm:text-base leading-[20px] sm:leading-[26px] text-[#404040]">
                  dopo la <br />
                  <span className="font-bold">prova gratuita di 7 giorni</span>
                </div>
              </div>
              <button className="bg-[#F3EFEC] border border-black/10 shadow-[0px_2px_20px_0px_rgba(0,0,0,0.08)] rounded-lg py-[10px] px-4 flex items-center justify-center gap-3 w-full h-12 sm:h-auto">
                <span className="font-dm-sans text-lg sm:text-xl font-bold leading-[24px] sm:leading-[29px] text-[#684744]">
                  Inizia la prova gratuita
                </span>
                <svg width="13.33" height="10" viewBox="0 0 14 10" fill="none" className="flex-shrink-0">
                  <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="#684744" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            {/* PayPal Badge */}
            <div className="absolute top-4 sm:top-7 right-4 sm:right-[25px] bg-[#DFD1C9] rounded-full px-2 py-2 sm:py-[9px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.15)] flex items-center gap-1.5 h-7 sm:h-8">
              <div className="w-2 sm:w-3 h-[10px] sm:h-[14px] relative">
                <Image src='/logo/paypal.svg' alt='paypal' width={100} height={100} />
              </div>
              <span className="font-dm-sans text-[12px] sm:text-xs font-semibold leading-4 sm:leading-6 tracking-[0.1px] text-[#553B39] uppercase">
                Paga in 3 rate
              </span>
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 w-full max-w-xs lg:max-w-[273.33px]">
          <div className="flex items-center gap-3 sm:gap-[13px] w-full justify-center">
            <Image src='/logo/guarateeICon.svg' alt='starIcon' width={60} height={60} className="sm:w-[74px] sm:h-[74px]" style={{ filter: 'drop-shadow(0px 0px 20px #A0736540)' }} />
            <div className="font-dm-sans text-[16px] sm:text-base leading-5 sm:leading-6 text-[#684744]">
              <div className="font-bold w-fit">GARANZIA 30 GIORNI</div>
              <div className="font-normal w-fit">Soddisfata o rimborsata</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
