"use client";

import { useEffect, useState } from 'react';

export default function TrustPilotSection() {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Check if script is already loaded
    const existingScript = document.querySelector('script[src*="trustpilot"]');
    if (existingScript) {
      setIsLoading(false);
      return;
    }

    // Load Trustpilot script
    const script = document.createElement('script');
    script.src = 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
    script.async = true;
    
    script.onload = () => {
      // The Trustpilot script automatically initializes widgets
      // Just wait a moment and set loading to false
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    };
    
    script.onerror = () => {
      console.warn('Failed to load Trustpilot script');
      setIsLoading(false);
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [isClient]);

  if (!isClient) {
    // Server-side render: show placeholder
    return (
      <section className="bg-white w-full h-[528px] border-b border-black/10 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="flex items-center justify-center">
            <h2 className="font-['Poppins'] text-[36px] leading-[47px] tracking-[-0.15px] font-normal text-[#2D1E1D]">
              Trust Pilot
              <br />
              <div className="min-h-[200px] flex items-center justify-center">
                <p className="text-gray-500">Loading reviews...</p>
              </div>
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white w-full h-[528px] border-b border-black/10 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center text-center gap-8">
        <div className="flex items-center justify-center">
          <h2 className="font-['Poppins'] text-[36px] leading-[47px] tracking-[-0.15px] font-normal text-[#2D1E1D]">
            Trust Pilot
            <br />
            {isLoading ? (
              <div className="min-h-[200px] flex items-center justify-center">
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-48 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-40"></div>
                </div>
              </div>
            ) : (
              <div 
                className="trustpilot-widget" 
                data-locale="it-IT" 
                data-template-id="5613c9cde69ddc09340c6beb" 
                data-businessunit-id="66b9ddf5eb620c5977da2f27" 
                data-style-height="100%" 
                data-style-width="100%" 
                data-token="89c5cf24-bd35-40d9-8e13-59c1947515d3"
              >
                <a href="https://it.trustpilot.com/review/traininpink.net" target="_blank" rel="noopener">
                  Trustpilot
                </a>
              </div>
            )}
          </h2>
        </div>
      </div>
    </section>
  );
} 