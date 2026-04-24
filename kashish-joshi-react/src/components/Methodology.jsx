import { useState, useEffect, useRef } from 'react';

const STEPS = [
  {
    icon: 'fa-bullseye',
    title: 'Goal & Risk Assessment',
    desc: 'We begin with a comprehensive consultation to understand your investment capital, risk tolerance, and trading preferences across Equity, Options, Index, Commodity, or HNI segments.',
  },
  {
    icon: 'fa-chart-line',
    title: 'Strategic Segment Selection',
    desc: 'Based on your detailed profile analysis, we recommend the most suitable trading plan, provide sample performance reports, and guide you through the selection process.',
  },
  {
    icon: 'fa-chess',
    title: 'Comprehensive Trade Planning',
    desc: "We establish precise entry points, stop-loss levels, and profit targets with calculated position sizing and risk-reward ratios. Complete transparency in our trading methodology.",
  },
  {
    icon: 'fa-rocket',
    title: 'Disciplined Trade Execution',
    desc: 'Real-time trading alerts delivered via SMS, WhatsApp, and mobile app during market hours. We maintain strict discipline, avoid overtrading, and focus on high-probability setups.',
  },
  {
    icon: 'fa-handshake',
    title: 'Performance Review & Support',
    desc: 'Continuous performance monitoring with detailed weekly and monthly reviews, comprehensive post-trade analysis, and dedicated support for long-term partnership success.',
  },
];

export default function Methodology() {
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.dataset.stepIndex);
            setVisibleSteps(prev => new Set([...prev, stepIndex]));
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ 
      background: 'linear-gradient(135deg, #f0f8f4 0%, #f7fafc 100%)', 
      padding: '3rem 1rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        zIndex: 0
      }} />
      
      <div className="max-w-4xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ 
          marginBottom: '2.5rem',
          textAlign: 'center',
          animation: 'fadeInUp 0.8s ease-out'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: '0.8rem', 
            marginBottom: '0.8rem' 
          }}>
            <div style={{ 
              width: '35px', 
              height: '3px', 
              background: 'linear-gradient(90deg, #22c55e, #16a34a)',
              borderRadius: '2px'
            }} />
            <span style={{ 
              fontSize: '0.7rem', 
              fontWeight: 700, 
              color: '#16a34a', 
              letterSpacing: '0.2em', 
              textTransform: 'uppercase',
              textShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}>
              OUR PROVEN METHODOLOGY
            </span>
            <div style={{ 
              width: '35px', 
              height: '3px', 
              background: 'linear-gradient(90deg, #16a34a, #22c55e)',
              borderRadius: '2px'
            }} />
          </div>
          <h2 style={{ 
            fontFamily: 'system-ui, -apple-system, sans-serif', 
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
            fontWeight: 600, 
            color: '#1e3a8a', 
            marginBottom: '0.8rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            lineHeight: 1.2
          }}>
            Strategic Process That Delivers Results
          </h2>
          <p style={{ 
            fontSize: '0.95rem', 
            color: '#4a5568', 
            maxWidth: '650px', 
            lineHeight: 1.6,
            margin: '0 auto',
            fontWeight: 500
          }}>
            From initial assessment to ongoing success—every step is meticulously planned, 
            transparently executed, and designed around your financial objectives.
          </p>
        </div>

        {/* Zigzag steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {STEPS.map((step, i) => {
            const isLeft = i % 2 === 0;
            const isVisible = visibleSteps.has(i);
            
            return (
              <div 
                key={i} 
                ref={el => stepRefs.current[i] = el}
                data-step-index={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: isLeft ? 'flex-start' : 'flex-end',
                  gap: 0,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDelay: `${i * 0.15}s`
                }}
              >
                {/* Left-aligned: icon then card */}
                {isLeft && (
                  <>
                    {/* Icon circle with right-pointing tail */}
                    <div style={{ 
                      position: 'relative', 
                      flexShrink: 0, 
                      zIndex: 1,
                      transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-10deg)',
                      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      transitionDelay: `${i * 0.15 + 0.2}s`
                    }}>
                      <div style={{
                        width: '56px', 
                        height: '56px', 
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        boxShadow: '0 6px 20px rgba(30,58,138,0.3), 0 2px 8px rgba(30,58,138,0.2)',
                        border: '2px solid rgba(255,255,255,0.2)',
                        position: 'relative',
                        overflow: 'hidden'
                      }}>
                        {/* Shine effect */}
                        <div style={{
                          position: 'absolute',
                          top: '-50%',
                          left: '-50%',
                          width: '200%',
                          height: '200%',
                          background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                          transform: isVisible ? 'translateX(100%)' : 'translateX(-100%)',
                          transition: 'transform 1s ease-out',
                          transitionDelay: `${i * 0.15 + 0.4}s`
                        }} />
                        <i className={`fas ${step.icon}`} style={{ 
                          color: '#fff', 
                          fontSize: '1.2rem',
                          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                          zIndex: 1
                        }}></i>
                      </div>
                      {/* Enhanced tail pointing right */}
                      <div style={{
                        position: 'absolute', 
                        right: '-10px', 
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: 0, 
                        height: 0,
                        borderTop: '8px solid transparent',
                        borderBottom: '8px solid transparent',
                        borderLeft: '10px solid #1e3a8a',
                        filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))'
                      }} />
                      {/* Step number */}
                      <div style={{
                        position: 'absolute',
                        top: '-6px',
                        right: '-6px',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.7rem',
                        fontWeight: 'bold',
                        color: '#fff',
                        boxShadow: '0 2px 6px rgba(34,197,94,0.4)'
                      }}>
                        {i + 1}
                      </div>
                    </div>
                    {/* Enhanced Card */}
                    <div style={{
                      background: 'linear-gradient(135deg, #fff 0%, #fafbfc 100%)',
                      borderRadius: '12px',
                      padding: '1.2rem 1.5rem',
                      boxShadow: '0 3px 15px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.1)',
                      maxWidth: '550px', 
                      flex: 1,
                      marginLeft: '0.8rem',
                      border: '1px solid rgba(255,255,255,0.8)',
                      position: 'relative',
                      overflow: 'hidden',
                      transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                      transitionDelay: `${i * 0.15 + 0.25}s`
                    }}>
                      {/* Card accent */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '3px',
                        height: '100%',
                        background: 'linear-gradient(180deg, #22c55e, #16a34a)',
                        borderRadius: '0 2px 2px 0'
                      }} />
                      <h4 style={{ 
                        fontSize: '1rem', 
                        fontWeight: 700, 
                        color: '#1e3a8a', 
                        marginBottom: '0.6rem', 
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        letterSpacing: '-0.01em'
                      }}>
                        {step.title}
                      </h4>
                      <p style={{ 
                        fontSize: '0.9rem', 
                        color: '#4a5568', 
                        lineHeight: 1.6, 
                        margin: 0,
                        fontWeight: 400
                      }}>
                        {step.desc}
                      </p>
                    </div>
                  </>
                )}

                {/* Right-aligned: card then icon */}
                {!isLeft && (
                  <>
                    {/* Enhanced Card */}
                    <div style={{
                      background: 'linear-gradient(135deg, #fff 0%, #fafbfc 100%)',
                      borderRadius: '12px',
                      padding: '1.2rem 1.5rem',
                      boxShadow: '0 3px 15px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.1)',
                      maxWidth: '550px', 
                      flex: 1,
                      marginRight: '0.8rem',
                      border: '1px solid rgba(255,255,255,0.8)',
                      position: 'relative',
                      overflow: 'hidden',
                      transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
                      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                      transitionDelay: `${i * 0.15 + 0.25}s`
                    }}>
                      {/* Card accent */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '3px',
                        height: '100%',
                        background: 'linear-gradient(180deg, #22c55e, #16a34a)',
                        borderRadius: '2px 0 0 2px'
                      }} />
                      <h4 style={{ 
                        fontSize: '1rem', 
                        fontWeight: 700, 
                        color: '#1e3a8a', 
                        marginBottom: '0.6rem', 
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        letterSpacing: '-0.01em',
                        textAlign: 'right'
                      }}>
                        {step.title}
                      </h4>
                      <p style={{ 
                        fontSize: '0.9rem', 
                        color: '#4a5568', 
                        lineHeight: 1.6, 
                        margin: 0,
                        fontWeight: 400,
                        textAlign: 'right'
                      }}>
                        {step.desc}
                      </p>
                    </div>
                    {/* Icon circle with left-pointing tail */}
                    <div style={{ 
                      position: 'relative', 
                      flexShrink: 0, 
                      zIndex: 1,
                      transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(10deg)',
                      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      transitionDelay: `${i * 0.15 + 0.2}s`
                    }}>
                      <div style={{
                        width: '56px', 
                        height: '56px', 
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        boxShadow: '0 6px 20px rgba(30,58,138,0.3), 0 2px 8px rgba(30,58,138,0.2)',
                        border: '2px solid rgba(255,255,255,0.2)',
                        position: 'relative',
                        overflow: 'hidden'
                      }}>
                        {/* Shine effect */}
                        <div style={{
                          position: 'absolute',
                          top: '-50%',
                          left: '-50%',
                          width: '200%',
                          height: '200%',
                          background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                          transform: isVisible ? 'translateX(100%)' : 'translateX(-100%)',
                          transition: 'transform 1s ease-out',
                          transitionDelay: `${i * 0.15 + 0.4}s`
                        }} />
                        <i className={`fas ${step.icon}`} style={{ 
                          color: '#fff', 
                          fontSize: '1.2rem',
                          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                          zIndex: 1
                        }}></i>
                      </div>
                      {/* Enhanced tail pointing left */}
                      <div style={{
                        position: 'absolute', 
                        left: '-10px', 
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: 0, 
                        height: 0,
                        borderTop: '8px solid transparent',
                        borderBottom: '8px solid transparent',
                        borderRight: '10px solid #1e3a8a',
                        filter: 'drop-shadow(-2px 2px 4px rgba(0,0,0,0.2))'
                      }} />
                      {/* Step number */}
                      <div style={{
                        position: 'absolute',
                        top: '-6px',
                        left: '-6px',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.7rem',
                        fontWeight: 'bold',
                        color: '#fff',
                        boxShadow: '0 2px 6px rgba(34,197,94,0.4)'
                      }}>
                        {i + 1}
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

      </div>
      
      {/* Add CSS animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .max-w-4xl {
            padding: 0 1rem;
          }
        }
      `}</style>
    </section>
  );
}
