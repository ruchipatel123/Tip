export default function PricingSection() {
  return (
    <section className="bg-[#F1EBE7] px-[163px] py-16 flex flex-col items-center">
      <div className="w-full max-w-[1114px] flex flex-col items-center gap-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6">
          <h2 className="text-[36px] leading-[47px] tracking-[-0.15px] font-normal text-black font-['Poppins']">
            Ti garantiamo i risultati:{' '}
            <br />
            soddisfatta o rimborsata
          </h2>
          <p className="font-['DM_Sans'] text-base leading-[26px] text-black w-[442px]">
            Un unico piano con accesso a tutti gli allenamenti e la nutrizione Traininpink™. Tutto incluso disdici quando vuoi.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex items-center gap-8 w-full">
          {/* Monthly Card */}
          <div className="w-[350px] bg-white rounded-2xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] border border-black/10 p-6">
            <div className="flex flex-col justify-between h-[278px] gap-14">
              <div className="flex flex-col gap-4 h-[151px]">
                <h3 className="font-['Poppins'] text-[28px] font-medium leading-[36px] tracking-[-0.1px] text-black">
                  Mensile
                </h3>
                <div className="text-[#684744]">
                  <span className="font-['Poppins'] text-[28px] leading-[36px] tracking-[-0.1px]">€23.99</span>
                  <span className="font-['Poppins'] text-[28px] leading-[36px] tracking-[-0.1px]"> / month</span>
                </div>
                <div className="font-['DM_Sans'] text-base leading-[26px] text-[#404040]">
                  dopo la <br />
                  <span className="font-medium">prova gratuita di 7 giorni</span>
                </div>
              </div>
              <button className="bg-[#F3EFEC] border border-black/10 shadow-[0px_2px_20px_0px_rgba(0,0,0,0.08)] rounded-lg py-[10px] px-4 flex items-center justify-center gap-3">
                <span className="font-['DM_Sans'] text-xl font-medium leading-[29px] text-[#684744]">
                  Inizia la prova gratuita
                </span>
                <svg width="13.33" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="#684744" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Semi-annual Card (Best Value) */}
          <div className="w-[350px] flex flex-col">
            {/* Best Value Badge */}
            <div 
              className="rounded-t-2xl shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)] px-2 py-3 flex items-center justify-center gap-2"
              style={{
                background: 'linear-gradient(90deg, #98685E 0%, #32221F 100%)'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L12.09 8.26L19 8.26L13.45 12.74L15.55 19L10 14.74L4.45 19L6.55 12.74L1 8.26L7.91 8.26L10 2Z" fill="white" stroke="white" strokeWidth="1.5"/>
              </svg>
              <span className="font-['DM_Sans'] text-base leading-[26px] text-white font-normal">
                BEST VALUE
              </span>
            </div>
            
            {/* Card Content */}
            <div className="bg-white rounded-b-2xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] border border-black/10 p-6 relative h-[430px]">
              <div className="flex flex-col justify-between h-full gap-14">
                <div className="flex flex-col gap-4">
                  <h3 className="font-['Poppins'] text-[28px] font-medium leading-[36px] tracking-[-0.1px] text-black">
                    Semestrale
                  </h3>
                  <div className="text-[#684744]">
                    <span className="font-['Poppins'] text-[28px] leading-[36px] tracking-[-0.1px]">€13.33</span>
                    <span className="font-['Poppins'] text-[28px] leading-[36px] tracking-[-0.1px]"> / month</span>
                  </div>
                  <div className="flex items-baseline gap-1.5 font-['DM_Sans'] text-sm leading-[21px]">
                    <span className="text-[#684744] opacity-40">€143.94 </span>
                    <span className="text-[#684744]">€89.99</span>
                    <span className="text-[#98685E]">billed half yearly</span>
                  </div>
                  <div className="font-['DM_Sans'] text-base leading-[26px] text-[#404040]">
                    dopo la <br />
                    <span className="font-medium">prova gratuita di 7 giorni</span>
                  </div>
                </div>
                <button className="bg-[#684744] border border-[rgba(243,239,236,0.2)] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.2)] rounded-lg py-[10px] px-4 flex items-center justify-center gap-3">
                  <span className="font-['DM_Sans'] text-xl font-medium leading-[29px] text-white">
                    Inizia la prova gratuita
                  </span>
                  <svg width="13.33" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              
              {/* Save Badge */}
              <div className="absolute top-7 right-[25px] bg-[#DFD1C9] rounded-full px-2 py-[9px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.15)] h-8 flex items-center">
                <span className="font-['DM_Sans'] text-xs font-semibold leading-6 tracking-[0.1px] text-[#553B39] uppercase">
                  RISPARMIA IL 37%
                </span>
              </div>
            </div>
          </div>

          {/* Annual Card */}
          <div className="w-[350px] bg-white rounded-2xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] border border-black/10 p-6 relative">
            <div className="flex flex-col justify-between h-[278px] gap-14">
              <div className="flex flex-col gap-4">
                <h3 className="font-['Poppins'] text-[28px] font-medium leading-[36px] tracking-[-0.1px] text-black">
                  Annuale
                </h3>
                <div className="text-[#684744]">
                  <span className="font-['Poppins'] text-[28px] leading-[36px] tracking-[-0.1px]">€13.33</span>
                  <span className="font-['Poppins'] text-[28px] leading-[36px] tracking-[-0.1px]"> / month</span>
                </div>
                <div className="flex items-baseline gap-1.5 font-['DM_Sans'] text-sm leading-[21px]">
                  <span className="text-[#684744]">€159.99</span>
                  <span className="text-[#98685E]">billed yearly</span>
                </div>
                <div className="font-['DM_Sans'] text-base leading-[26px] text-[#404040]">
                  dopo la <br />
                  <span className="font-medium">prova gratuita di 7 giorni</span>
                </div>
              </div>
              <button className="bg-[#F3EFEC] border border-black/10 shadow-[0px_2px_20px_0px_rgba(0,0,0,0.08)] rounded-lg py-[10px] px-4 flex items-center justify-center gap-3">
                <span className="font-['DM_Sans'] text-xl font-medium leading-[29px] text-[#684744]">
                  Inizia la prova gratuita
                </span>
                <svg width="13.33" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="#684744" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            {/* PayPal Badge */}
            <div className="absolute top-7 right-[25px] bg-[#DFD1C9] rounded-full px-2 py-[9px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.15)] flex items-center gap-1.5">
              <div className="w-3 h-[14px] relative">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" className="absolute inset-0">
                  <path d="M0 0.04H10.84V12.44H0V0.04Z" fill="#27346A"/>
                  <path d="M2.89 3.58H11.95V13.99H2.89V3.58Z" fill="#2790C3"/>
                  <path d="M3.75 3.71H10.78V8.88H3.75V3.71Z" fill="#1F264F"/>
                </svg>
              </div>
              <span className="font-['DM_Sans'] text-xs font-semibold leading-6 tracking-[0.1px] text-[#553B39] uppercase">
                Paga in 3 rate
              </span>
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="flex flex-col items-center gap-6 w-[273.33px]">
          <div className="flex items-center gap-[13px] w-full">
            <div className="w-[74px] h-[74px] relative flex-shrink-0 shadow-[0px_0px_20px_0px_rgba(160,115,101,0.25)]">
              {/* Star background with gradient */}
              <svg width="74" height="73" viewBox="0 0 74 73" fill="none" className="absolute inset-0">
                <defs>
                  <linearGradient id="starGradient" x1="0.5" y1="-0.026" x2="0.5" y2="2.103" gradientUnits="objectBoundingBox">
                    <stop offset="1" stopColor="#7E3207"/>
                  </linearGradient>
                </defs>
                <path d="M37 0L45.4 26.8L74 26.8L51.3 43.4L59.7 70.2L37 53.6L14.3 70.2L22.7 43.4L0 26.8L28.6 26.8L37 0Z" fill="url(#starGradient)" stroke="#684744" strokeWidth="1"/>
              </svg>
              
              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-['DM_Sans'] text-xl font-semibold leading-[30px] text-[#F3EFEC]">
                  30
                </span>
              </div>
              
              {/* Circular text paths */}
              <svg width="74" height="74" viewBox="0 0 74 74" className="absolute inset-0">
                <defs>
                  <path id="circle-path-1" d="M 37 14 A 23 23 0 0 1 37 60 A 23 23 0 0 1 37 14"/>
                  <path id="circle-path-2" d="M 37 37 A 23 23 0 0 1 37 60 A 23 23 0 0 1 37 14"/>
                </defs>
                <text className="font-['DM_Sans'] text-[8px] font-semibold tracking-[3px] uppercase fill-white stroke-white stroke-[1px]">
                  <textPath href="#circle-path-1" startOffset="0%">
                    GARANZIA
                  </textPath>
                </text>
                <text className="font-['DM_Sans'] text-[8px] font-semibold tracking-[3px] uppercase fill-white">
                  <textPath href="#circle-path-2" startOffset="50%">
                    GIORNI
                  </textPath>
                </text>
              </svg>
            </div>
            
            <div className="font-['DM_Sans'] text-base leading-6 text-[#684744]">
              <div className="font-normal">GARANZIA 30 GIORNI</div>
              <div className="font-normal">Soddisfata o rimborsata</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
