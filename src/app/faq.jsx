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
      question: "Come faccio a sapere qual è l'allenamento più adatto a me?",
      answer: (
        <>
        <p>Un test dettagliato ti suggerirà l'allenamento più adatto a te prima dell'inizio della prova gratuita. Puoi fare il test <a href="https://app.traininpink.net/test-e-prova-gratuita" className='text-[#000000] underline hover:text-[#404040]' target="_blank" rel="noopener noreferrer">cliccando qui</a>. </p>
          <p>Hai dei dubbi sull'allenamento assegnato? Non preoccuparti, tutti gli allenamenti sono inclusi nell'abbonamento, puoi cambiare in qualsiasi momento.
          </p>
          <p>Se hai dubbi o domande in merito all'allenamento suggerito scrivici attraverso la funzione <a href="https://traininpink.zendesk.com/hc/it" className='text-[#000000] underline hover:text-[#404040]' target="_blank" rel="noopener noreferrer">Supporto</a> e saremo felici di aiutarti. Siamo disponibili 7 giorni su 7, festivi inclusi e garantiamo la risposta in 24 ore.
          </p>
          <p>Vuoi una consulenza personalizzata gratuita dal nostro team sulla tua situazione prima di iniziare? <a href="https://traininpink.zendesk.com/hc/it" className='text-[#000000] underline hover:text-[#404040]' target="_blank" rel="noopener noreferrer">Clicca qui</a> e saremo felici di consigliarti
          </p>
    </>
      )
    },
    {
      question: "Gli allenamenti sono tutti inclusi nell'abbonamento o devo sceglierne uno prima di iscrivermi?", 
      answer: (
        <>
        <p>Tutti gli allenamenti che trovi sull'app traininpink sono inclusi nell'abbonamento, puoi cambiare in qualsiasi momento.
          </p>
          <p>Il test iniziale ti suggerirà l'allenamento che riteniamo più adatto a te, ma questo suggerimento non è in alcun modo vincolante.
          </p>
          <p>Puoi cambiare il tuo allenamento in qualsiasi momento e provare anche le Classi (allenamenti singoli da abbinare al tuo allenamento, ne trovi più di 100) e le Sfide.
          </p>
    </>
      )
    },
    {
      question: "Esiste una prova gratuita?",
      answer: (
        <>
        <p>Sì, se è la prima volta che ti iscrivi a traininpink hai diritto ad una prova gratuita di 7 giorni prima di abbonarti.
          </p>
          <p>Se non sei convinta, ti basta disdire prima del termine della prova gratuita e non pagherai nulla!
          </p>
    </>
      )
    },
    {
      question: "Posso disdire quando voglio?",
      answer: (
        <>
                 <p>Assolutamente sì, non sei vincolata ad un periodo minimo di abbonamento, puoi disdire in qualsiasi momento dalla sezione Profilo {'->'}  Abbonamenti dell'app Traininpink
           </p>
    </>
      )
    },
    {
      question: "È vero che garantite i risultati? Come funziona la garanzia \"30 giorni soddisfatta o rimborsata\"?",
      answer: (
        <>
        <p>Grazie alla nostra esperienza con più di 157.000 donne che hanno raggiunto i loro obiettivi con noi, siamo così convinte che con traininpink otterrai risultati che offriamo a tutte le nostre nuove iscritte la garanzia "30 giorni soddisfatta o rimborsata": se non sei soddisfatta dei risultati raggiunti in un mese dall'iscrizione ti faremo il rimborso integrale di quanto hai pagato senza chiederti alcuna domanda.
          </p>
          <p>Ti basta scriverci attraverso la funzione <a href="https://traininpink.zendesk.com/hc/it" className='text-[#000000] underline hover:text-[#404040]' target="_blank" rel="noopener noreferrer">Supporto</a> e saremo felici di aiutarti. Siamo disponibili 7 giorni su 7, festivi inclusi e garantiamo la risposta in 24 ore.
          </p>
    </>
      )
    },
    {
      question: "Come funziona la Nutrizione? Si tratta di consigli o è un piano alimentare vero e proprio?",
        answer: (
        <>
        <p>Nel tuo abbonamento è incluso un piano alimentare personalizzato sulle tue esigenze con più di 4000 ricette facili, veloci e gustose, che cambiano ogni mese per rispettare la stagionalità degli ingredienti.
          </p>
          <p>Troverai piani onnivori, pescetariani, vegetariani o vegani, senza glutine e/o lattosio.
          </p>
          <p>Nella nutrizione, oltre al piano nutrizionale assegnato avrai accesso alle nutrizioniste del team traininpink per fare check-up, personalizzare ulteriormente il piano in caso di patologie o condizioni particolari e in caso di domande!
          </p>
    </>
      )
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-[84px] px-4 sm:px-8 lg:px-16 xl:px-[228px] flex flex-col items-center">
      <div className="w-full max-w-[984px] flex flex-col items-center gap-12 sm:gap-10 xl:gap-16 xxl:gap-[69px]">
        {/* Title */}
        <div className="flex flex-col items-center gap-3 sm:gap-[13px]">
          <h2 className="font-poppins text-2xl-up-custom lg:text-[28px] xxl:text-[36px] leading-tight tracking-[-0.15px] font-normal text-[#2D1E1D] text-center">
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
                className="w-full p-4 xl:p-6 flex cursor-grab items-center sm:items-center justify-between gap-8 sm:gap-8 lg:gap-[47px] hover:bg-[#F3EFEC] transition-colors duration-200"
              >
                <div className="flex flex-col items-start flex-1 min-w-0">
                  <h3 className="font-poppins text-lg sm:text-[18px] xxl:text-[22px] leading-[24px] sm:leading-[26px] lg:leading-[31px] tracking-[-0.05px] font-normal text-[#404040] text-left break-words">
                    {item.question}
                  </h3>
                </div>
                
                {/* Plus/Minus Icon */}
                <div className="bg-[#F3EFEC] rounded-full p-2 flex-shrink-0 transition-transform duration-300 ease-in-out">
                  <div className="w-4 h-4 sm:w-4 sm:h-4 relative flex items-center justify-center">
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
                    ? 'max-h-[500px] opacity-100 pb-4 sm:pb-6' 
                    : 'max-h-0 opacity-0 pb-0'
                }`}
              >
                <div className="px-4 sm:px-6">
                  <div className="border-t border-[#DFD1C9] pt-3 sm:pt-4">
                    <div className="font-['DM_Sans'] text-sm sm:text-base leading-5 sm:leading-6 text-[#404040] space-y-3">
                      {typeof item.answer === 'string' ? (
                        item.answer.split('\n\n').map((paragraph, paragraphIndex) => (
                          <p key={paragraphIndex}>
                            {paragraph}
                          </p>
                        ))
                      ) : (
                        item.answer
                      )}
                    </div>
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