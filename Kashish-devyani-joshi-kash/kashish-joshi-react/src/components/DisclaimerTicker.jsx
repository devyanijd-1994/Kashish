import { useEffect, useRef, useState } from 'react';

const MSG = "Investing and trading in the securities market are subject to market risks. Kashish Joshi Research (Research Analyst) does not provide assured/guaranteed returns, profit-sharing services, or any services not listed on our website. Please act only on our official SMS/communications and always use a proper stop-loss. We never ask for your Demat details. If anyone offers such services or asks for these details, please report it to us at +91 91717 18451.";

function TickerBar({ fixed, paused, onToggle }) {
  return (
    <div 
    style={{ backgroundColor: '#193366ff', ...(fixed ? { position: 'fixed', bottom: '0', left: 0, right: 0, zIndex: 50 } : {}) }}
    className={`${fixed ? '' : 'relative z-10'} bg-[#031031] border-t-2 border-[#00A651] overflow-hidden py-2`}>
      <div className="flex items-center gap-3">
        {/* Green dot + label */}
        <div className="flex items-center gap-2 shrink-0 ml-4">
          <span className="w-4 h-4 rounded-full bg-[#00A651] inline-block"></span>
          <span className="bg-[#00A651] text-white text-md font-bold px-3 py-1 uppercase tracking-wider rounded-sm whitespace-nowrap">
            Disclaimer
          </span>
        </div>

        {/* Scrolling text */}
        <div className="overflow-hidden flex-1 p-2">
          <span
            className="text-xl text-white font-medium whitespace-nowrap inline-block"
            style={{ animation: `ticker 150s linear infinite`, animationPlayState: paused ? 'paused' : 'running' }}
          >
            {MSG}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{MSG}
          </span>
        </div>

        {/* <div className="hidden lg:block">
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#00A651] text-white text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full hover:bg-[#b8943e] transition-colors"
          >
            Enquiry
          </button>
        </div> */}

        {/* Pause / Resume button */}
        {/* <button
          onClick={onToggle}
          className="shrink-0 text-xs font-bold border border-gray-500 text-gray-200 hover:border-[#00A651] hover:text-[#00A651] px-3 py-1 rounded transition-colors whitespace-nowrap"
        >
          {paused ? 'Resume' : 'Pause'}
        </button> */}

        {/* Call link */}
        {/* <a href="tel:+919171718451" className="shrink-0 mr-4 text-xs font-bold bg-[#1a3a6e] text-gray-200 border border-gray-600 px-3 py-1 rounded hover:text-[#00A651] hover:border-[#00A651] transition-colors whitespace-nowrap">
          +91 91717 18451
        </a> */}
      </div>
    </div>
  );
}

export default function DisclaimerTicker() {
  const inlineRef = useRef(null);
  const [showFixed, setShowFixed] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowFixed(!entry.isIntersecting),
      { threshold: 0 }
    );
    if (inlineRef.current) observer.observe(inlineRef.current);
    return () => observer.disconnect();
  }, []);

  const toggle = () => setPaused(p => !p);

  return (
    <>
      <div ref={inlineRef}>
        <TickerBar fixed={false} paused={paused} onToggle={toggle} />
      </div>
      {showFixed && <TickerBar fixed={true} paused={paused} onToggle={toggle} />}
    </>
  );
}
