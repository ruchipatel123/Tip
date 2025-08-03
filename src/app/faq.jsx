'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqItems = [
    {
      question: "Come faccio a sapere qual è il programma più adatto a me?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
    {
      question: "Gli allenamenti sono tutti inclusi nell'abbonamento o devo sceglierne uno prima di iscrivermi?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "Esiste una prova gratuita?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
      question: "Posso disdire quando voglio?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    },
    {
      question: "È vero che garantite i risultati? Come funziona la garanzia \"30 giorni soddisfatta o rimborsata\"?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
    },
    {
      question: "Come funziona la Nutrizione? Si tratta di consigli o è un piano alimentare vero e proprio?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
    }
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-[84px] px-4 sm:px-8 lg:px-16 xl:px-[228px] flex flex-col items-center">
      <div className="w-full max-w-[984px] flex flex-col items-center gap-12 sm:gap-16 lg:gap-[69px]">
        {/* Title */}
        <div className="flex flex-col items-center gap-3 sm:gap-[13px]">
          <h2 className="font-poppins text-2xl-up-custom sm:text-[28px] lg:text-[36px] leading-[32px] sm:leading-[38px] lg:leading-[47px] tracking-[-0.15px] font-normal text-[#2D1E1D] text-center">
            Domande Frequenti
          </h2>
        </div>

        {/* Accordion Items */}
        <div className="flex flex-col w-full">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`bg-[#F8F5F4] ${
                index === 0 
                  ? 'rounded-t-2xl' 
                  : index === faqItems.length - 1 
                    ? 'rounded-b-2xl' 
                    : ''
              } ${
                index !== faqItems.length - 1 ? 'border-b border-[#DFD1C9]' : ''
              } overflow-hidden transition-all duration-300 ease-in-out`}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-4 sm:p-6 flex items-center sm:items-center justify-between gap-4 sm:gap-8 lg:gap-[47px] hover:bg-[#F3EFEC] transition-colors duration-200"
              >
                <div className="flex flex-col items-start flex-1 min-w-0">
                  <h3 className="font-poppins text-lg sm:text-[18px] lg:text-[22px] leading-[24px] sm:leading-[26px] lg:leading-[31px] tracking-[-0.05px] font-normal text-[#404040] text-left break-words">
                    {item.question}
                  </h3>
                </div>
                
                {/* Plus/Minus Icon */}
                <div className="bg-[#F3EFEC] rounded-full p-2 flex-shrink-0 transition-transform duration-300 ease-in-out">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 relative flex items-center justify-center">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 14 14"
                      fill="none"
                      className={`transition-transform duration-300 ease-in-out ${
                        openItems[index] ? 'rotate-45' : 'rotate-0'
                      }`}
                    >
                      {/* Horizontal line */}
                      <path
                        d="M1 7H13"
                        stroke="#404040"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      {/* Vertical line - hidden when rotated (becomes X) */}
                      <path
                        d="M7 1V13"
                        stroke="#404040"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        className={`transition-opacity duration-200 ${
                          openItems[index] ? 'opacity-100' : 'opacity-100'
                        }`}
                      />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems[index] 
                    ? 'max-h-96 opacity-100 pb-4 sm:pb-6' 
                    : 'max-h-0 opacity-0 pb-0'
                }`}
              >
                <div className="px-4 sm:px-6">
                  <div className="border-t border-[#DFD1C9] pt-3 sm:pt-4">
                    <p className="font-['DM_Sans'] text-sm sm:text-base leading-5 sm:leading-6 text-[#404040]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 