import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const FEATURES = [
  {
    icon: 'fa-bell',
    animatedIcon: '🔔',
    title: 'Get Timely Alerts',
    desc: 'Stay ahead with real-time recommendations delivered via SMS, email, and our app—each with clear targets and stop-loss levels.',
    color: '#FF6B6B'
  },
  {
    icon: 'fa-chart-line',
    animatedIcon: '📊',
    title: 'Advice Based on Real Data',
    desc: 'We buy and sell using actual market numbers—price, volume, strength, and simple risk–reward rules. No tips. No guessing.',
    color: '#4ECDC4'
  },
  {
    icon: 'fa-headset',
    animatedIcon: '🎧',
    title: 'SEBI Registered Investment Advisor',
    desc: 'Get quick support on WhatsApp, SMS, phone, or email—real people guiding you at every step.',
    color: '#45B7D1'
  },
  {
    icon: 'fa-seedling',
    animatedIcon: '🌱',
    title: 'Experienced Research Team',
    desc: 'We aim for slow and steady gains. We avoid over-priced stocks and stay with the trend and strong earnings.',
    color: '#96CEB4'
  },
  {
    icon: 'fa-clipboard-check',
    animatedIcon: '✅',
    title: 'Transparent & Ethical Advisory',
    desc: 'We follow a simple plan: exit quickly if a trade goes wrong, move stops up as prices rise, and stick to rules—not emotions.',
    color: '#FECA57'
  },
  {
    icon: 'fa-rocket',
    animatedIcon: '🚀',
    title: 'Quick Help When You Need It',
    desc: 'We reply fast during market hours and send clear follow-ups after, so you\'re never left waiting.',
    color: '#FF9FF3'
  },
];

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }
          
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
          }
          
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 5px rgba(25, 51, 102, 0.3); }
            50% { box-shadow: 0 0 20px rgba(25, 51, 102, 0.6), 0 0 30px rgba(0, 166, 81, 0.4); }
          }
          
          .feature-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .feature-card:hover {
            transform: translateY(-10px) scale(1.02);
          }
          
          .animated-icon {
            animation: float 3s ease-in-out infinite;
          }
          
          .animated-icon.pulse {
            animation: pulse 2s ease-in-out infinite;
          }
          
          .animated-icon.bounce {
            animation: bounce 2s ease-in-out infinite;
          }
          
          .animated-icon.rotate {
            animation: rotate 4s linear infinite;
          }
          
          .animated-icon.shake {
            animation: shake 2s ease-in-out infinite;
          }
        `}
      </style>
      
      <section ref={sectionRef} style={{ background: '#f8f9ff', padding: '3rem 1rem' }}>
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div style={{ 
            marginBottom: '3rem', 
            textAlign: 'center',
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.6rem', 
              border: '2px solid #00A651', 
              borderRadius: '25px', 
              padding: '0.4rem 1.2rem', 
              marginBottom: '1.2rem',
              background: 'rgba(0, 166, 81, 0.05)',
              backdropFilter: 'blur(10px)'
            }}>
              <span style={{ 
                color: '#00A651', 
                fontSize: '0.75rem', 
                fontWeight: 700, 
                letterSpacing: '0.15em', 
                textTransform: 'uppercase',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>
                ⭐ WHY Trust US
              </span>
            </div>
            
            <h2 style={{ 
              fontFamily: 'system-ui, -apple-system, sans-serif', 
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', 
              fontWeight: 700, 
              color: '#193366ff', 
              marginBottom: '1rem',
              lineHeight: 1.2,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}>
              Share Market <span style={{ 
                background: 'linear-gradient(135deg, #00A651, #4ade80)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Research Analyst</span>
            </h2>
            
            <p style={{ 
              fontSize: '1rem', 
              color: '#666', 
              maxWidth: '600px', 
              margin: '0 auto',
              lineHeight: 1.7,
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 400,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
            }}>
              Evidence-driven ideas, risk-first execution, and responsive support—built to help you trade with clarity and confidence.
            </p>
          </div>

          {/* 3-col grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2rem' 
          }}>
            {FEATURES.map((f, i) => (
              <div 
                key={i} 
                className="feature-card"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(25, 51, 102, 0.08)',
                  borderRadius: '20px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.2rem',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: hoveredCard === i 
                    ? '0 20px 40px rgba(25, 51, 102, 0.15)' 
                    : '0 8px 25px rgba(25, 51, 102, 0.08)',
                  transform: isVisible 
                    ? `translateY(0) scale(1)` 
                    : `translateY(30px) scale(0.95)`,
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.1}s`,
                }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Decorative gradient */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${f.color}, #00A651)`
                }} />

                {/* Animated Icon */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center',
                  marginBottom: '0.5rem'
                }}>
                  <div style={{
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '20px',
                    background: `linear-gradient(135deg, ${f.color}15, ${f.color}25)`,
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    position: 'relative',
                    border: `2px solid ${f.color}30`,
                    boxShadow: hoveredCard === i 
                      ? `0 8px 25px ${f.color}40` 
                      : `0 4px 15px ${f.color}20`,
                    transition: 'all 0.3s ease'
                  }}>
                    <span 
                      className={`animated-icon ${
                        i === 0 ? 'shake' : 
                        i === 1 ? 'pulse' : 
                        i === 2 ? 'bounce' : 
                        i === 3 ? 'float' : 
                        i === 4 ? 'rotate' : 'pulse'
                      }`}
                      style={{ 
                        fontSize: '2.5rem',
                        animationDelay: `${i * 0.2}s`
                      }}
                    >
                      {f.animatedIcon}
                    </span>
                    
                    {/* Glow effect on hover */}
                    {hoveredCard === i && (
                      <div style={{
                        position: 'absolute',
                        inset: '-2px',
                        borderRadius: '20px',
                        background: `linear-gradient(135deg, ${f.color}30, transparent)`,
                        animation: 'glow 2s ease-in-out infinite'
                      }} />
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  fontWeight: 700, 
                  color: '#193366ff', 
                  lineHeight: 1.3,
                  textAlign: 'center',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  margin: 0
                }}>
                  {f.title}
                </h3>

                {/* Description */}
                <p style={{ 
                  fontSize: '0.9rem', 
                  color: '#666', 
                  lineHeight: 1.7, 
                  flexGrow: 1,
                  textAlign: 'center',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontWeight: 400,
                  margin: 0
                }}>
                  {f.desc}
                </p>

                {/* Action Button */}
                <div style={{ 
                  borderTop: '1px solid rgba(25, 51, 102, 0.1)', 
                  paddingTop: '1.2rem',
                  textAlign: 'center'
                }}>
                  <Link 
                    to="/about" 
                    style={{ 
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: hoveredCard === i ? '#00A651' : '#193366ff',
                      fontSize: '0.9rem', 
                      textDecoration: 'none', 
                      fontWeight: 600,
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      transition: 'all 0.3s ease',
                      padding: '0.5rem 1rem',
                      borderRadius: '25px',
                      background: hoveredCard === i 
                        ? 'rgba(0, 166, 81, 0.1)' 
                        : 'rgba(25, 51, 102, 0.05)',
                      border: `1px solid ${hoveredCard === i ? '#00A651' : '#193366ff'}30`
                    }}
                  >
                    Learn More 
                    <i className="fas fa-arrow-right" style={{
                      transform: hoveredCard === i ? 'translateX(3px)' : 'translateX(0)',
                      transition: 'transform 0.3s ease'
                    }}></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
