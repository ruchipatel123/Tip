export default function TrustPilotSection() {
  return (
    <>
    <section className="bg-white w-full h-[528px] border-b border-black/10 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center text-center gap-8">
        <div className="flex items-center justify-center">
          <h2 className="font-['Poppins'] text-[36px] leading-[47px] tracking-[-0.15px] font-normal text-[#2D1E1D]">
            Trust Pilot
            <br />
            <div className="trustpilot-widget" data-locale="it-IT" data-template-id="5613c9cde69ddc09340c6beb" data-businessunit-id="66b9ddf5eb620c5977da2f27" data-style-height="100%" data-style-width="100%" data-token="89c5cf24-bd35-40d9-8e13-59c1947515d3">
              <a href="https://it.trustpilot.com/review/traininpink.net" target="_blank" rel="noopener">Trustpilot</a>
            </div>
          </h2>
        </div>
        
        {/* <div className="flex items-center justify-center">
          <p className="font-['Poppins'] text-[36px] leading-[47px] tracking-[-0.15px] font-normal text-[#2D1E1D]">
            ✅ Carousel chosen
          </p>
        </div> */}
      </div>
    </section>
    <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
    </>
  );
} 