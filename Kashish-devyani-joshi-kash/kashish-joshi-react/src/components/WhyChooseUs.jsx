import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const FEATURES = [
  {
    icon: 'fa-bell-concierge',
    animatedIcon: '⚡',
    title: 'Get Timely Alerts',
    desc: 'Stay ahead with real-time recommendations delivered via SMS, email, and our app—each with clear targets and stop-loss levels.',
    color: '#6366f1'
  },
  {
    icon: 'fa-chart-simple',
    animatedIcon: '�',
    title: 'Advice Based on Real Data',
    desc: 'We buy and sell using actual market numbers—price, volume, strength, and simple risk–reward rules. No tips. No guessing.',
    color: '#06b6d4'
  },
  {
    icon: 'fa-shield-check',
    animatedIcon: '🛡️',
    title: 'SEBI Registered Investment Advisor',
    desc: 'Get quick support on WhatsApp, SMS, phone, or email—real people guiding you at every step.',
    color: '#10b981'
  },
  {
    icon: 'fa-users-gear',
    animatedIcon: '👥',
    title: 'Experienced Research Team',
    desc: 'We aim for slow and steady gains. We avoid over-priced stocks and stay with the trend and strong earnings.',
    color: '#f59e0b'
  },
  {
    icon: 'fa-certificate',
    animatedIcon: '✨',
    title: 'Transparent & Ethical Advisory',
    desc: 'We follow a simple plan: exit quickly if a trade goes wrong, move stops up as prices rise, and stick to rules—not emotions.',
    color: '#8b5cf6'
  },
  {
    icon: 'fa-bolt',
    animatedIcon: '🚀',
    title: 'Quick Help When You Need It',
    desc: 'We reply fast during market hours and send clear follow-ups after, so you\'re never left waiting.',
    color: '#ef4444'
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
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-12px) rotate(2deg); }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.15); }
          }
          
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0) scale(1); }
            40% { transform: translateY(-15px) scale(1.1); }
            60% { transform: translateY(-8px) scale(1.05); }
          }
          
          @keyframes rotate {
            0% { transform: rotate(0deg) scale(1); }
            25% { transform: rotate(90deg) scale(1.1); }
            50% { transform: rotate(180deg) scale(1); }
            75% { transform: rotate(270deg) scale(1.1); }
            100% { transform: rotate(360deg) scale(1); }
          }
          
          @keyframes shake {
            0%, 100% { transform: translateX(0) scale(1); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-8px) scale(1.05); }
            20%, 40%, 60%, 80% { transform: translateX(8px) scale(1.05); }
          }
          
          @keyframes glow {
            0%, 100% { 
              box-shadow: 0 0 10px rgba(99, 102, 241, 0.3), 0 0 20px rgba(99, 102, 241, 0.1);
            }
            50% { 
              box-shadow: 0 0 25px rgba(99, 102, 241, 0.6), 0 0 40px rgba(99, 102, 241, 0.3);
            }
          }
          
          @keyframes slideUp {
            from {
              transform: translateY(40px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          
          @keyframes scaleIn {
            from {
              transform: scale(0.8);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
          
          .feature-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(10px);
          }
          
          .feature-card:hover {
            transform: translateY(-15px) scale(1.03);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15) !important;
          }
          
          .animated-icon {
            animation: float 4s ease-in-out infinite;
            transition: all 0.3s ease;
          }
          
          .animated-icon.pulse {
            animation: pulse 2.5s ease-in-out infinite;
          }
          
          .animated-icon.bounce {
            animation: bounce 3s ease-in-out infinite;
          }
          
          .animated-icon.rotate {
            animation: rotate 6s linear infinite;
          }
          
          .animated-icon.shake {
            animation: shake 3s ease-in-out infinite;
          }
          
          .icon-container {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .icon-container:hover {
            transform: scale(1.1) rotate(5deg);
          }
          
          .gradient-border {
            position: relative;
            background: linear-gradient(135deg, #ffffff, #f8fafc);
            border-radius: 24px;
          }
          
          .gradient-border::before {
            content: '';
            position: absolute;
            inset: 0;
            padding: 2px;
            background: linear-gradient(135deg, transparent, rgba(99, 102, 241, 0.2), transparent);
            border-radius: 24px;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: xor;
            -webkit-mask-composite: xor;
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          
          .gradient-border:hover::before {
            opacity: 1;
          }
          
          @media (max-width: 768px) {
            .feature-card {
              padding: 1.5rem !important;
            }
            .animated-icon {
              font-size: 2rem !important;
            }
            .icon-container {
              width: 70px !important;
              height: 70px !important;
            }
            .feature-card h3 {
              font-size: 1.2rem !important;
            }
            .feature-card p {
              font-size: 0.9rem !important;
            }
          }
          
          @media (max-width: 480px) {
            .feature-card {
              padding: 1.2rem !important;
            }
            .animated-icon {
              font-size: 1.8rem !important;
            }
            .icon-container {
              width: 60px !important;
              height: 60px !important;
            }
            .feature-card h3 {
              font-size: 1.1rem !important;
            }
            .feature-card p {
              font-size: 0.85rem !important;
            }
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', 
            gap: '2rem' 
          }}>
            {FEATURES.map((f, i) => (
              <div 
                key={i} 
                className="feature-card gradient-border"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(248,250,252,0.8))',
                  border: '1px solid rgba(99, 102, 241, 0.1)',
                  borderRadius: '24px',
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1.5rem',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: hoveredCard === i 
                    ? '0 25px 50px rgba(99, 102, 241, 0.15)' 
                    : '0 10px 30px rgba(0, 0, 0, 0.08)',
                  transform: isVisible 
                    ? `translateY(0) scale(1)` 
                    : `translateY(50px) scale(0.9)`,
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.15}s`,
                  animation: isVisible ? `slideUp 0.8s ease-out ${i * 0.1}s both` : 'none'
                }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Subtle background pattern */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `radial-gradient(circle at 50% 0%, ${f.color}08, transparent 70%)`,
                  opacity: hoveredCard === i ? 1 : 0.5,
                  transition: 'opacity 0.3s ease'
                }} />

                {/* Animated Icon Container */}
                <div 
                  className="icon-container"
                  style={{
                    width: '90px', 
                    height: '90px', 
                    borderRadius: '24px',
                    background: hoveredCard === i 
                      ? `linear-gradient(135deg, ${f.color}20, ${f.color}10)` 
                      : `linear-gradient(135deg, ${f.color}15, ${f.color}08)`,
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    position: 'relative',
                    border: `2px solid ${f.color}25`,
                    boxShadow: hoveredCard === i 
                      ? `0 15px 35px ${f.color}30, 0 5px 15px ${f.color}20` 
                      : `0 8px 20px ${f.color}15`,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    zIndex: 2
                  }}
                >
                  <span 
                    className={`animated-icon ${
                      i === 0 ? 'shake' : 
                      i === 1 ? 'pulse' : 
                      i === 2 ? 'bounce' : 
                      i === 3 ? 'float' : 
                      i === 4 ? 'rotate' : 'pulse'
                    }`}
                    style={{ 
                      fontSize: '2.8rem',
                      animationDelay: `${i * 0.3}s`,
                      filter: hoveredCard === i ? 'brightness(1.2)' : 'brightness(1)',
                      transition: 'filter 0.3s ease'
                    }}
                  >
                    {f.animatedIcon}
                  </span>
                  
                  {/* Ripple effect on hover */}
                  {hoveredCard === i && (
                    <div style={{
                      position: 'absolute',
                      inset: '-10px',
                      borderRadius: '50%',
                      background: `radial-gradient(circle, ${f.color}20, transparent 70%)`,
                      animation: 'pulse 1.5s ease-in-out infinite'
                    }} />
                  )}
                </div>

                {/* Content */}
                <div style={{ 
                  textAlign: 'center',
                  zIndex: 2,
                  position: 'relative'
                }}>
                  {/* Title */}
                  <h3 style={{ 
                    fontSize: '1.4rem', 
                    fontWeight: 700, 
                    color: '#1e293b', 
                    lineHeight: 1.3,
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    margin: '0 0 1rem 0',
                    letterSpacing: '-0.01em'
                  }}>
                    {f.title}
                  </h3>

                  {/* Description */}
                  <p style={{ 
                    fontSize: '0.95rem', 
                    color: '#64748b', 
                    lineHeight: 1.7, 
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontWeight: 400,
                    margin: '0 0 1.5rem 0',
                    letterSpacing: '0.01em'
                  }}>
                    {f.desc}
                  </p>

                  {/* Minimal Action Indicator */}
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '50px',
                    background: hoveredCard === i 
                      ? `linear-gradient(135deg, ${f.color}15, ${f.color}08)` 
                      : 'rgba(248, 250, 252, 0.8)',
                    border: `1px solid ${hoveredCard === i ? f.color + '30' : 'rgba(226, 232, 240, 0.8)'}`,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: f.color,
                      animation: hoveredCard === i ? 'pulse 1s ease-in-out infinite' : 'none'
                    }} />
                    <span style={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: hoveredCard === i ? f.color : '#64748b',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      transition: 'color 0.3s ease'
                    }}>
                      Learn More
                    </span>
                    <i className="fas fa-arrow-right" style={{
                      fontSize: '0.75rem',
                      color: hoveredCard === i ? f.color : '#94a3b8',
                      transform: hoveredCard === i ? 'translateX(4px)' : 'translateX(0)',
                      transition: 'all 0.3s ease'
                    }}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
