import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const STP_PLANS = [
  {
    badge: 'MOST POPULAR', popular: true,
    icon: 'fa-chart-line',
    title: 'Option STP Signal Plan',
    market: 'Options Market',
    desc: 'Precision-engineered trading plans designed for disciplined execution, strategic entries, and consistent market performance across all segments.',
    features: [
      'Pre-Market View & Trading Levels & Strategy',
      'Unique Trading Strategy',
      'Timely Follow-Ups of Trade Signals',
      'Important Market News & Updates',
      'Real-Time Customer Support',
      'Risk Management Priority',
      'Whole Day Market Coverage',
      'High Performance Efficiency Intraday Trade Signals'
    ],
    to: '/option',
    durations: ['3 Months', '6 Months', '1 Year']
  },
  {
    badge: 'PREMIER', popular: false,
    icon: 'fa-chart-bar',
    title: 'Future STP Signal Plan',
    market: 'Futures Market',
    desc: 'Advanced futures trading strategies with comprehensive market analysis and real-time signal delivery for maximum profit potential.',
    features: [
      'Pre-Market View & Trading Levels & Strategy',
      'Unique Trading Strategy',
      'Timely Follow-Ups of Trade Signals',
      'Important Market News & Updates',
      'Real-Time Customer Support',
      'Risk Management Priority',
      'Whole Day Market Coverage',
      'High Performance Efficiency Intraday Trade Signals'
    ],
    to: '/future',
    durations: ['3 Months', '6 Months', '1 Year']
  },
  {
    badge: 'ESSENTIAL', popular: false,
    icon: 'fa-dollar-sign',
    title: 'Stock Cash STP Signal Plan',
    market: 'Cash Segment',
    desc: 'Comprehensive cash segment trading with detailed technical analysis and strategic entry-exit points for consistent returns.',
    features: [
      'Pre-Market View & Trading Levels & Strategy',
      'Unique Trading Strategy',
      'Timely Follow-Ups of Trade Signals',
      'Important Market News & Updates',
      'Real-Time Customer Support',
      'Risk Management Priority',
      'Whole Day Market Coverage',
      'High Performance Efficiency Intraday Trade Signals'
    ],
    to: '/stock-cash',
    durations: ['3 Months', '6 Months', '1 Year']
  },
  {
    badge: 'COMMODITY', popular: false,
    icon: 'fa-fire',
    title: 'MCX STP Strategy Plan',
    market: 'Commodity Market',
    desc: 'Specialized commodity trading strategies covering metals, energy, and agricultural segments with expert market insights.',
    features: [
      'Pre-Market View & Trading Levels & Strategy',
      'Unique Trading Strategy',
      'Timely Follow-Ups of Trade Signals',
      'Important Market News & Updates',
      'Real-Time Customer Support',
      'Risk Management Priority',
      'Whole Day Market Coverage',
      'High Performance Efficiency Intraday Trade Signals'
    ],
    to: '/commodity-services',
    durations: ['3 Months', '6 Months', '1 Year']
  },
  {
    badge: 'AGRI', popular: false,
    icon: 'fa-leaf',
    title: 'NCDEX STP Signal Plan',
    market: 'Agriculture Market',
    desc: 'Agricultural commodity trading with deep market research and fundamental analysis for informed trading decisions.',
    features: [
      'Pre-Market View & Trading Levels & Strategy',
      'Unique Trading Strategy',
      'Timely Follow-Ups of Trade Signals',
      'Important Market News & Updates',
      'Real-Time Customer Support',
      'Risk Management Priority',
      'Whole Day Market Coverage',
      'High Performance Efficiency Intraday Trade Signals'
    ],
    to: '/commodity-services',
    durations: ['3 Months', '6 Months', '1 Year']
  },
  {
    badge: 'ACTIVE', popular: false,
    icon: 'fa-clock',
    title: 'Intraday STP Strategy Plan',
    market: 'High-Frequency Trading',
    desc: 'High-frequency intraday trading strategies with rapid execution and real-time market monitoring for quick profits.',
    features: [
      'Pre-Market View & Trading Levels & Strategy',
      'Unique Trading Strategy',
      'Timely Follow-Ups of Trade Signals',
      'Important Market News & Updates',
      'Real-Time Customer Support',
      'Risk Management Priority',
      'Whole Day Market Coverage',
      'High Performance Efficiency Intraday Trade Signals'
    ],
    to: '/stock-cash',
    durations: ['3 Months', '6 Months', '1 Year']
  }
];

function STPCard({ plan, index, isVisible }) {
  const isGreen = index % 2 === 0;
  const cardColor = isGreen ? '#22c55e' : '#1e3a8a';
  const cardBg = isGreen ? 'rgba(34, 197, 94, 0.1)' : 'rgba(30, 58, 138, 0.1)';
  
  return (
    <div 
      className="stp-card" 
      style={{
        position: 'relative',
        background: 'var(--bg-primary)',
        borderRadius: '20px',
        padding: '0',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
        border: `2px solid ${cardColor}20`,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
        opacity: isVisible ? 1 : 0,
        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`,
        fontFamily: 'var(--font-family)',
        height: 'auto',
        minHeight: '480px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-12px) scale(1.03)';
        e.currentTarget.style.boxShadow = `0 20px 60px ${cardColor}25`;
        e.currentTarget.style.borderColor = `${cardColor}40`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.12)';
        e.currentTarget.style.borderColor = `${cardColor}20`;
      }}
    >
      {/* Card Header */}
      <div style={{
        background: `linear-gradient(135deg, ${cardBg}, ${cardColor}15)`,
        borderRadius: '16px 16px 0 0',
        padding: '28px',
        border: `1px solid ${cardColor}30`,
        borderBottom: 'none',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Glowing effect */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${cardColor}, transparent)`,
          animationName: isVisible ? 'shimmer' : 'none',
          animationDuration: '2s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
          animationDelay: `${index * 0.3}s`
        }} />

        {/* Badge and Popular */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{
            background: `linear-gradient(135deg, ${cardColor}20, ${cardColor}10)`,
            color: cardColor,
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.1em',
            borderRadius: '12px',
            padding: '6px 12px',
            textTransform: 'uppercase',
            border: `1px solid ${cardColor}30`,
            fontFamily: 'var(--font-family)'
          }}>
            {plan.badge}
          </div>
          {plan.popular && (
            <div style={{
              background: `linear-gradient(135deg, ${cardColor}, ${cardColor}dd)`,
              color: 'white',
              fontSize: '10px',
              fontWeight: 700,
              borderRadius: '12px',
              padding: '6px 10px',
              textTransform: 'uppercase',
              animation: 'pulse 2s infinite',
              boxShadow: `0 4px 15px ${cardColor}40`
            }}>
              ⭐ TOP PICK
            </div>
          )}
        </div>

        {/* Icon and Title */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '16px'
        }}>
          <div style={{
            width: '56px',
            height: '56px',
            background: `linear-gradient(135deg, ${cardColor}, ${cardColor}cc)`,
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 8px 24px ${cardColor}30`
          }}>
            <i className={`fas ${plan.icon}`} style={{ 
              color: 'white', 
              fontSize: '20px',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
            }}></i>
          </div>
          
          <div style={{ flex: 1 }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              lineHeight: 1.3,
              margin: 0,
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-family)'
            }}>
              {plan.title}
            </h3>
            <div style={{
              fontSize: '12px',
              color: cardColor,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginTop: '4px'
            }}>
              {plan.market}
            </div>
          </div>
        </div>


      </div>

      {/* Features List */}
      <div style={{
        padding: '20px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        background: '#ffffff'
      }}>
        <h4 style={{
          fontSize: '14px',
          fontWeight: 700,
          color: cardColor,
          margin: '0 0 12px 0',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          Core Features Included
        </h4>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          flex: 1
        }}>
          {plan.features.slice(0, 6).map((feature, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              fontSize: '12px',
              color: '#374151',
              lineHeight: 1.4
            }}>
              <div style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${cardColor}, ${cardColor}cc)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '1px'
              }}>
                <i className="fas fa-check" style={{ 
                  color: 'white', 
                  fontSize: '8px'
                }}></i>
              </div>
              <span style={{ fontWeight: 500 }}>{feature}</span>
            </div>
          ))}
        </div>

        {/* Trading Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '10px',
          marginTop: '16px'
        }}>
          {[
            { label: 'SUCCESS', val: '85-90%', icon: 'fa-chart-line', color: '#22c55e' },
            { label: 'SIGNALS', val: '2-3/Day', icon: 'fa-bolt', color: '#f59e0b' }
          ].map((stat, i) => (
            <div key={i} style={{
              background: '#ffffff',
              borderRadius: '8px',
              padding: '10px 8px',
              textAlign: 'center',
              border: '1px solid #e2e8f0',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '76px',
              gap: '4px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f8fafc';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
            }}
            >
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${stat.color}, ${stat.color}dd)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2px'
              }}>
                <i className={`fas ${stat.icon}`} style={{ 
                  color: 'white', 
                  fontSize: '8px'
                }}></i>
              </div>
              <div style={{
                fontSize: '12px',
                fontWeight: 700,
                color: '#1f2937',
                fontFamily: 'var(--font-family)',
                textAlign: 'center',
                lineHeight: 1.2,
                whiteSpace: 'nowrap'
              }}>
                {stat.val}
              </div>
              <div style={{
                fontSize: '9px',
                color: '#6b7280',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                textAlign: 'center',
                lineHeight: 1.2,
                whiteSpace: 'nowrap'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Duration Options */}
        <div style={{
          marginTop: '16px',
          padding: '16px',
          background: `${cardColor}08`,
          borderRadius: '12px',
          border: `1px solid ${cardColor}20`
        }}>
          <div style={{
            fontSize: '12px',
            fontWeight: 600,
            color: cardColor,
            marginBottom: '8px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Available Plans
          </div>
          <div style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            {plan.durations.map((duration, i) => (
              <div key={i} style={{
                fontSize: '10px',
                fontWeight: 600,
                color: cardColor,
                background: '#ffffff',
                padding: '4px 8px',
                borderRadius: '6px',
                border: `1px solid ${cardColor}30`
              }}>
                {duration}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{
        background: `linear-gradient(135deg, ${cardColor}, ${cardColor}dd)`,
        padding: '16px 20px',
        borderRadius: '0 0 16px 16px',
        display: 'flex',
        gap: '12px'
      }}>
        <Link to={plan.to} style={{
          textDecoration: 'none',
          background: 'rgba(255, 255, 255, 0.95)',
          color: cardColor,
          borderRadius: '8px',
          padding: '12px 16px',
          fontWeight: 700,
          fontSize: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          transition: 'all 0.3s ease',
          fontFamily: 'var(--font-family)',
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
          border: `2px solid ${cardColor}30`,
          boxShadow: `0 4px 12px ${cardColor}20`,
          flex: 1
        }}
        onMouseEnter={(e) => {
          const hoverColor = isGreen ? '#1e3a8a' : '#22c55e';
          e.currentTarget.style.background = hoverColor;
          e.currentTarget.style.color = 'white';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = `0 8px 24px ${hoverColor}50`;
          e.currentTarget.style.borderColor = 'transparent';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
          e.currentTarget.style.color = cardColor;
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = `0 4px 12px ${cardColor}20`;
          e.currentTarget.style.borderColor = `${cardColor}30`;
        }}
        >
          <i className="fas fa-info-circle"></i>
          Enquire Now
        </Link>
        
        <a href="https://wa.me/919171718451" target="_blank" rel="noopener noreferrer" style={{
          textDecoration: 'none',
          background: 'rgba(255, 255, 255, 0.2)',
          color: 'white',
          borderRadius: '8px',
          padding: '12px 16px',
          fontWeight: 700,
          fontSize: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          transition: 'all 0.3s ease',
          fontFamily: 'var(--font-family)',
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          flex: 1
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
        >
          <i className="fab fa-whatsapp"></i>
          Message Now
        </a>
      </div>
    </div>
  );
}

export default function STPSignalPlans() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile && isVisible) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % STP_PLANS.length);
      }, 4000); // Auto slide every 4 seconds
      
      return () => clearInterval(interval);
    }
  }, [isMobile, isVisible]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % STP_PLANS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + STP_PLANS.length) % STP_PLANS.length);
  };

  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          
          .stp-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .stp-card:hover {
            transform: translateY(-12px) scale(1.03) !important;
          }

          /* Mobile responsiveness */
          @media (max-width: 768px) {
            .stp-card {
              height: auto !important;
              min-height: 420px !important;
            }
          }
          
          @media (max-width: 480px) {
            .stp-card {
              min-height: 380px !important;
            }
          }
        `}
      </style>
      
      <section ref={sectionRef} className="section section-alt" style={{ 
        background: 'var(--bg-gradient-light)', 
        padding: 'var(--spacing-2xl) var(--spacing-md)' 
      }}>
        <div className="container">

          {/* Header */}
          <div style={{ 
            textAlign: 'center', 
            marginBottom: 'var(--spacing-2xl)',
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            {/* Badge */}
            <div style={{
              position: 'relative',
              display: 'inline-block',
              marginBottom: 'var(--spacing-lg)'
            }}>
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: 'var(--spacing-xs)', 
                background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.12), rgba(34, 197, 94, 0.12))',
                border: '2px solid',
                borderColor: 'rgba(34, 197, 94, 0.4)',
                borderRadius: '20px', 
                padding: 'var(--spacing-xs) var(--spacing-lg)', 
                backdropFilter: 'blur(10px)',
                position: 'relative',
                zIndex: 1
              }}>
                <span style={{ 
                  color: 'var(--primary-navy)', 
                  fontSize: '11px', 
                  fontWeight: 700, 
                  letterSpacing: '0.05em',
                  fontFamily: 'var(--font-family)',
                  textTransform: 'uppercase',
                  background: 'linear-gradient(135deg, var(--primary-navy), var(--primary-green))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  📋 STRUCTURED TRADING PLANS
                </span>
              </div>
            </div>
            
            <h2 className="heading-xl" style={{ 
              fontFamily: 'var(--font-family)', 
              fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', 
              fontWeight: 700, 
              color: 'var(--text-primary)', 
              marginBottom: 'var(--spacing-sm)',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
              textShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}>
              STP{' '}
              <span style={{ 
                background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #059669 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                position: 'relative'
              }}>
                Signal
              </span>{' '}
              <span style={{
                background: 'linear-gradient(135deg, var(--primary-navy) 0%, #1e40af 50%, #1d4ed8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Plans
              </span>
            </h2>
            
            <p className="body-text" style={{ 
              fontSize: 'var(--font-size-base)', 
              color: 'var(--text-secondary)', 
              maxWidth: '600px', 
              margin: '0 auto var(--spacing-lg)', 
              lineHeight: 1.5,
              fontFamily: 'var(--font-family)',
              fontWeight: 400,
              letterSpacing: '0.01em',
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
            }}>
              Precision-engineered trading plans designed for disciplined execution, strategic entries, and consistent market performance across all segments.
            </p>

            {/* Stats */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(248,250,252,0.9))',
              border: '2px solid transparent',
              backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #22c55e20, #1e3a8a20)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'content-box, border-box',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              {[
                { val: '5', label: 'TRADING SEGMENTS', icon: '📊', color: '#22c55e' },
                { val: 'Full Day', label: 'DAILY COVERAGE', icon: '⏰', color: '#f59e0b' },
                { val: '7 Core', label: 'FEATURES INCLUDED', icon: '🎯', color: '#1e3a8a' },
              ].map((s, i) => (
                <div key={i} style={{
                  padding: 'var(--spacing-md) var(--spacing-lg)', 
                  textAlign: 'center',
                  borderRight: i < 2 ? '1px solid rgba(0,0,0,0.1)' : 'none',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${s.color}10`;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                >
                  <div style={{
                    fontSize: '18px',
                    marginBottom: '4px',
                    animationName: 'float',
                    animationDuration: '3s',
                    animationTimingFunction: 'ease-in-out',
                    animationIterationCount: 'infinite',
                    animationDelay: `${i * 0.5}s`
                  }}>
                    {s.icon}
                  </div>
                  <p style={{ 
                    fontSize: 'var(--font-size-lg)', 
                    fontWeight: 700, 
                    color: s.color,
                    marginBottom: '2px',
                    fontFamily: 'var(--font-family)',
                    margin: '0 0 2px 0',
                    letterSpacing: '-0.01em'
                  }}>
                    {s.val}
                  </p>
                  <p style={{ 
                    fontSize: '10px', 
                    fontWeight: 600, 
                    color: '#6b7280',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    margin: 0
                  }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* STP Plans Grid */}
          {isMobile ? (
            // Mobile Slider
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <div 
                ref={sliderRef}
                style={{
                  display: 'flex',
                  transform: `translateX(-${currentSlide * 100}%)`,
                  transition: 'transform 0.5s ease-in-out',
                  gap: '0'
                }}
              >
                {STP_PLANS.map((plan, index) => (
                  <div key={index} style={{ minWidth: '100%', padding: '0 10px' }}>
                    <STPCard plan={plan} index={index} isVisible={isVisible} />
                  </div>
                ))}
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                style={{
                  position: 'absolute',
                  left: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #22c55e',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  zIndex: 10,
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#22c55e';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                  e.target.style.color = '#22c55e';
                }}
              >
                <i className="fas fa-chevron-left" style={{ color: '#22c55e', fontSize: '14px' }}></i>
              </button>
              
              <button
                onClick={nextSlide}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #22c55e',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  zIndex: 10,
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#22c55e';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                  e.target.style.color = '#22c55e';
                }}
              >
                <i className="fas fa-chevron-right" style={{ color: '#22c55e', fontSize: '14px' }}></i>
              </button>
              
              {/* Dots Indicator */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '20px'
              }}>
                {STP_PLANS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      border: 'none',
                      background: currentSlide === index ? '#22c55e' : '#d1d5db',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      transform: currentSlide === index ? 'scale(1.2)' : 'scale(1)'
                    }}
                  />
                ))}
              </div>
            </div>
          ) : (
            // Desktop Grid
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))',
              gap: 'var(--spacing-xl)',
              maxWidth: '1400px',
              margin: '0 auto'
            }}>
              {STP_PLANS.map((plan, index) => (
                <STPCard key={index} plan={plan} index={index} isVisible={isVisible} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}