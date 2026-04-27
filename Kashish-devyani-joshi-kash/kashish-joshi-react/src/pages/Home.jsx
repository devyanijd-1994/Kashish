import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
// import ServiceSignals from '../components/ServiceSignals';
import STPSignalPlans from '../components/STPSignalPlans';
import WhyChooseUs from '../components/WhyChooseUs';
import Methodology from '../components/Methodology';
import TestimonialsFaq from '../components/TestimonialsFaq';
import ProblemSolution from '../components/ProblemSolution';
import HomeFooter from '../components/HomeFooter';
import theme from '../theme';
import { submitLead } from '../utils/submitLead';
// import RegisterForm from '../components/RegisterForm';
// import BlogSection from '../components/BlogSection';

const HERO_BG = '/assets/images/ChatGPT Image Apr 22, 2026, 10_07_25 PM.png';

const services = [
  { icon: 'chart-line', title: 'Stock Cash', description: 'Cash Services for Stocks - intraday calls for day traders to profit in rising and declining markets.', to: '/stock-cash' },
  { icon: 'cog', title: 'Option Services', description: 'Stock option intraday calls with expert market monitoring for profitable entry and exit.', to: '/option' },
  { icon: 'globe', title: 'Future', description: 'Stock futures intraday calls with precise analysis and timely recommendations.', to: '/future' },
  { icon: 'chart-bar', title: 'Banknifty / Nifty Options', description: 'INDEX Tips in the NSE market for our clients with high accuracy.', to: '/banknifty-nifty-option' },
  { icon: 'gem', title: 'Banknifty / Nifty Futures', description: 'Highest-quality Nifty Future Tips in the NSE market for consistent returns.', to: '/banknifty-nifty-future' },
  { icon: 'leaf', title: 'Commodity Services', description: 'Expert commodity trading calls covering MCX metals, energy, and agri segments.', to: '/commodity-services' },
];

const faqs = [
  { q: 'What types of services does Kashish Joshi offer?', a: 'We provide financial analysis, market research, and strategic trading advice including Stock Cash, Options, Futures, and Commodity services.' },
  { q: 'How does Kashish Joshi help traders?', a: 'We deliver timely intraday calls, market insights, and expert guidance to help traders maximize their profits while managing risk.' },
  { q: 'Are the trading calls guaranteed?', a: 'No. Trading in securities markets is subject to market risks. We provide research-based recommendations, not guaranteed returns.' },
];

const testimonials = [
  { name: 'Manoj Panday', role: 'Stock Investor', text: 'A nice place for fundamental analysis to see the growth ability of a stock. Stock screeners also assist in locating and selecting the appropriate stocks.' },
  { name: 'Ravi Prashad', role: 'Trader', text: 'My doubts were answered in a very informative way during our conversations with their advisor. I upgraded to their PRO plan and never looked back.' },
];

const TABS = [
  {
    label: 'Equity & Derivatives',
    icon: '📈',
    title: 'Equity & Derivatives',
    desc: 'Research-driven ideas across cash equities and F&O (index & stock futures/options). We focus on clear entries, targets, and stop-losses—helping you capture momentum, hedge risk, and manage positions with discipline.',
    points: [
      'Actionable entries with defined targets & stop-losses to remove guesswork.',
      'Capital efficiency using futures/options for hedging and leverage (with risk limits).',
      'Fits your style—intraday, swing, or positional frameworks with clear rules.',
      'Risk discipline via position sizing, max-loss caps, and post-trade reviews.',
    ],
    img: '/assets/images/hero-image.png',
  },
  {
    label: 'Commodity Derivatives',
    icon: '🥇',
    title: 'Commodity Derivatives',
    desc: 'MCX Crude, Gold, Silver & Base Metals with evening session alerts, event/inventory calendar context, and risk-first trade plans.',
    points: [
      'Timely MCX calls with clear entry, target & stop-loss levels.',
      'Coverage across metals, energy, and agri segments.',
      'Event-driven alerts around inventory and macro data.',
      'Risk-first approach with defined max-loss per trade.',
    ],
    img: '/assets/images/about-image.png',
  },
  {
    label: 'Currency Trading',
    icon: '💱',
    title: 'Currency Trading',
    desc: 'USD/INR and cross-currency pairs with intraday and positional calls based on macro and technical analysis.',
    points: [
      'Intraday & positional calls on major currency pairs.',
      'Macro-driven insights combined with technical levels.',
      'Clear SL and target for every recommendation.',
      'Low-risk, high-discipline execution framework.',
    ],
    img: '/assets/images/choose-img.png',
  },
];

function QualityServices({ isVisible = false }) {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  // Auto-slider functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % TABS.length);
    }, 4000); // Change tab every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ background: '#f8f9ff', padding: '3rem 1rem' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div style={{ 
          marginBottom: '1.5rem',
          textAlign: 'center',
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s ease-out'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
            <div style={{ width: '28px', height: '2px', background: '#00A651' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#00A651', letterSpacing: '0.15em', textTransform: 'uppercase' }}>GLOBALLY RENOWNED &amp; TRUSTED</span>
          </div>
          <h2 style={{ 
            fontFamily: 'sans-serif', 
            fontSize: 'clamp(1.6rem, 3.5vw, 1.2rem)', 
            fontWeight: 600, 
            color: '#193366ff', 
            lineHeight: 1.2,
            margin: 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.8s ease-out 0.2s'
          }}>
            Quality Services With Difference
          </h2>
        </div>

        {/* Tabs */}
        <div className="tabs-container" style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '0', 
          borderBottom: '1px solid #e5e5e5', 
          marginBottom: '1.5rem',
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s ease-out 0.4s',
          justifyContent: 'center',
          background: '#fff',
          borderRadius: '12px 12px 0 0',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
        }}>
          {TABS.map((t, i) => (
            <button key={i} onClick={() => setActive(i)}
              className="hover-lift tab-button"
              style={{
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                padding: '0.8rem 1rem',
                fontSize: 'clamp(0.7rem, 2vw, 0.8rem)', 
                fontWeight: 600,
                color: active === i ? '#193366ff' : '#666',
                background: active === i ? 'rgba(25, 51, 102, 0.05)' : 'transparent', 
                border: 'none', 
                cursor: 'pointer',
                borderBottom: active === i ? '3px solid #193366ff' : '3px solid transparent',
                marginBottom: '1px',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s ease',
                textShadow: active === i ? '0 1px 2px rgba(0,0,0,0.1)' : 'none',
                borderRadius: '8px 8px 0 0',
                position: 'relative',
                overflow: 'hidden',
                minWidth: 'fit-content'
              }}
              onMouseEnter={(e) => {
                if (active !== i) {
                  e.target.style.background = 'rgba(25, 51, 102, 0.03)';
                  e.target.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (active !== i) {
                  e.target.style.background = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              <span style={{ 
                fontSize: '1.1rem', 
                transition: 'all 0.3s ease',
                transform: active === i ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
                filter: active === i ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' : 'none'
              }}>
                {t.icon}
              </span>
              <span style={{ fontWeight: active === i ? 700 : 500 }}>
                {t.label}
              </span>
              {active === i && (
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #193366ff, #00A651)',
                  animation: 'slideIn 0.3s ease-out'
                }} />
              )}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="content-card" style={{
          background: '#fff',
          borderRadius: '16px',
          boxShadow: '0 10px 40px rgba(25, 51, 102, 0.1)',
          overflow: 'hidden',
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s ease-out 0.6s'
        }}>
          <div className="quality-services-content" style={{ 
            display: 'flex', 
            alignItems: 'stretch',
            minHeight: '300px'
          }}>
            {/* Left: Image */}
            <div className="content-image quality-services-image" style={{ 
              flex: '0 0 45%',
              position: 'relative',
              overflow: 'hidden',
              height: '300px',
              padding: '1.2rem',
            }}>
              <img 
                src={tab.img} 
                alt={tab.title}
                style={{ 
                  width: '100%', 
                  height: 'calc(300px - 2rem)',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  transition: 'all 0.5s ease',
                  borderRadius: '12px'
                }} 
                onError={(e) => {
                  e.target.src = '/assets/images/hero-image.png';
                }}
              />
              <div style={{
                position: 'absolute',
                top: '2rem',
                left: '2rem',
                background: 'rgba(25, 51, 102, 0.9)',
                color: '#fff',
                padding: '0.4rem 0.8rem',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 600,
                // backdropFilter: 'blur(10px)'
              }}>
                {tab.icon} {tab.label}
              </div>
            </div>
            
            {/* Right: Content */}
            <div className="content-text" style={{ 
              flex: '0 0 55%',
              padding: '1.8rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #193366ff, #00A651)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  color: '#fff'
                }}>
                  {tab.icon}
                </div>
                <h3 style={{ 
                  fontFamily: 'system-ui, -apple-system, sans-serif', 
                  fontSize: '1.4rem', 
                  fontWeight: 700, 
                  color: '#193366ff', 
                  margin: 0
                }}>
                  {tab.title}
                </h3>
              </div>
              
              <p style={{ 
                fontSize: '0.9rem', 
                color: '#666', 
                lineHeight: 1.6, 
                marginBottom: '1.2rem',
                fontWeight: 400
              }}>
                {tab.desc}
              </p>
              
              <div>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#00A651',
                  marginBottom: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <span style={{ fontSize: '1.1rem' }}>✓</span>
                  Key Features
                </h4>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '0.6rem' 
                }}>
                  {tab.points.slice(0, 3).map((pt, i) => (
                    <li key={i} style={{ 
                      display: 'flex', 
                      gap: '0.6rem', 
                      fontSize: '0.8rem', 
                      color: '#555', 
                      lineHeight: 1.5,
                      padding: '0.6rem',
                      background: 'rgba(0, 166, 81, 0.05)',
                      borderRadius: '6px',
                      borderLeft: '3px solid #00A651',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(0, 166, 81, 0.1)';
                      e.target.style.transform = 'translateX(3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(0, 166, 81, 0.05)';
                      e.target.style.transform = 'translateX(0)';
                    }}
                    >
                      <span style={{ 
                        color: '#00A651', 
                        fontWeight: 700, 
                        flexShrink: 0, 
                        fontSize: '0.9rem'
                      }}>
                        →
                      </span>
                      <span style={{ fontWeight: 500 }}>
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HeroSection() {
  const [form, setForm] = useState({ name: '', number: '', email: '', investment: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.number) { 
      alert('Please enter Name and Phone.'); 
      return; 
    }
    setLoading(true);
    try {
      await submitLead({ 
        name: form.name, 
        number: form.number, 
        email: form.email, 
        segment: 'Equity',
        investment: form.investment || ''
      });
      window.location.href = '/thankyou';
    } catch { 
      alert('Submission failed. Please try again.'); 
    }
    finally { 
      setLoading(false); 
    }
  };
  const [openFaq, setOpenFaq] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  
  const heroRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };
    
    const heroObserver = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsHeroVisible(true),
      observerOptions
    );
    
    const servicesObserver = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsServicesVisible(true),
      observerOptions
    );

    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (servicesRef.current) servicesObserver.observe(servicesRef.current);

    return () => {
      heroObserver.disconnect();
      servicesObserver.disconnect();
    };
  }, []);

  return (
    <>
      <style>
        {`
          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
            font-family: 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', sans-serif;
          }
          
          @keyframes slideIn {
            from {
              transform: scaleX(0);
              transform-origin: left;
            }
            to {
              transform: scaleX(1);
              transform-origin: left;
            }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
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
          
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes slideInDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }
          
          @keyframes shimmer {
            0% { background-position: -200px 0; }
            100% { background-position: calc(200px + 100%) 0; }
          }
          
          .animate-text {
            background: linear-gradient(90deg, #1e3a8a 25%, #22c55e 50%, #1e3a8a 75%);
            background-size: 200px 100%;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer 3s infinite;
          }
          
          .hover-lift {
            transition: all 0.3s ease;
          }
          
          .hover-lift:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(30, 58, 138, 0.15);
          }
          
          .text-shadow {
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          
          .crisp-text {
            font-weight: 500;
            letter-spacing: 0.3px;
            text-shadow: 0 1px 2px rgba(0,0,0,0.1);
            font-family: 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', sans-serif;
          }
          
          /* Responsive Design */
          @media (max-width: 768px) {
            .section {
              padding: 2rem 0.75rem !important;
            }
            
            .container {
              padding: 0 0.75rem !important;
            }
            
            .card {
              padding: 1.5rem !important;
            }
            
            .heading-xl {
              font-size: 1.5rem !important;
            }
            
            .heading-lg {
              font-size: 1.3rem !important;
            }
            
            .hero-container {
              flex-direction: column !important;
              gap: 1.5rem !important;
            }
            
            .hero-content {
              text-align: center !important;
              min-width: auto !important;
            }
            
            .hero-form {
              min-width: auto !important;
              max-width: 100% !important;
              flex: none !important;
              width: 100% !important;
            }
            
            .tabs-container {
              flex-direction: column !important;
              align-items: stretch !important;
            }
            
            .tab-button {
              justify-content: center !important;
              text-align: center !important;
              min-width: auto !important;
              flex: 1 !important;
            }
            
            .content-card {
              flex-direction: column !important;
            }
            
            .content-image {
              flex: none !important;
              height: 200px !important;
            }
            
            .content-text {
              flex: none !important;
            }
            
            .max-w-6xl {
              padding: 0 1rem !important;
            }
            
            .quality-services-content {
              flex-direction: column !important;
            }
            
            .quality-services-image {
              height: 250px !important;
            }
          }
          
          @media (max-width: 480px) {
            .section {
              padding: 1.5rem 0.5rem !important;
            }
            
            .container {
              padding: 0 0.5rem !important;
            }
            
            .card {
              padding: 1rem !important;
            }
            
            .hero-badge {
              font-size: 0.65rem !important;
              padding: 0.5rem 0.8rem !important;
            }
            
            .hero-buttons {
              flex-direction: column !important;
              width: 100% !important;
            }
            
            .hero-buttons a,
            .hero-buttons button {
              width: 100% !important;
              justify-content: center !important;
            }
            
            .tabs-container {
              gap: 0 !important;
            }
            
            .tab-button {
              padding: 0.6rem 0.8rem !important;
              font-size: 0.7rem !important;
            }
            
            .max-w-6xl {
              padding: 0 0.5rem !important;
            }
          }
        `}
      </style>
      {/* Hero */}
      <section
        ref={heroRef}
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: `url("${HERO_BG}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(3,16,49,0.72)' }} />
        <div style={{ position: 'relative', zIndex: 2, padding: '2rem 1rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div className="hero-container" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', flexWrap: 'wrap' }}>

            {/* Left: Hero Content */}
            <div className="hero-content" style={{ 
              flex: '1', 
              minWidth: '300px', 
              textAlign: 'left',
              transform: isHeroVisible ? 'translateX(0)' : 'translateX(-50px)',
              opacity: isHeroVisible ? 1 : 0,
              transition: 'all 0.8s ease-out'
            }}>
              <div className="hero-badge" style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #22c55e, #15803d)',
                color: '#ffffff',
                fontWeight: 600,
                letterSpacing: '0.15em',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                padding: '0.75rem 1rem',
                borderRadius: '50px',
                marginBottom: '1.5rem',
                border: '2px solid rgba(255,255,255,0.2)',
                boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>
                Trusted SEBI Registered Investment Advisory Firm | INH000017240
              </div>
              <h1 style={{ 
                color: '#ffffff', 
                marginBottom: '1rem',
                transform: isHeroVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isHeroVisible ? 1 : 0,
                transition: 'all 0.8s ease-out 0.4s',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontSize: 'clamp(1.5rem, 4.5vw, 2.8rem)',
                fontWeight: 700,
                lineHeight: 1.2
              }}>
                Trusted Stock Recommendations by SEBI Registered Market Experts
              </h1>
              <p className="body-text crisp-text" style={{ 
                color: 'rgba(255,255,255,0.85)', 
                maxWidth: '450px', 
                marginBottom: '1.5rem',
                transform: isHeroVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isHeroVisible ? 1 : 0,
                transition: 'all 0.8s ease-out 0.6s',
                textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
                lineHeight: 1.7,
                fontWeight: 400
              }}>
                No tips. No guesswork. Only data-driven advisory with proper risk management.
              </p>
              <div className="hero-buttons" style={{ 
                display: 'flex', 
                gap: '0.8rem', 
                flexWrap: 'wrap',
                transform: isHeroVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isHeroVisible ? 1 : 0,
                transition: 'all 0.8s ease-out 0.8s'
              }}>
                <a href="https://wa.me/919171718451" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ 
                  background: 'linear-gradient(135deg, #22c55e, #15803d)', 
                  color: '#ffffff', 
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  padding: '0.65rem 1.5rem',
                  borderRadius: '6px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap'
                }}>
                  Message Now
                </a>
                <button onClick={() => document.querySelector('input[placeholder="Full name"]')?.focus()} className="btn-secondary" style={{ 
                  border: '2px solid rgba(255,255,255,0.6)', 
                  color: '#ffffff', 
                  background: 'transparent',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  padding: '0.65rem 1.5rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap'
                }}>
                  Quick Enquiry
                </button>
              </div>
            </div>

            {/* Right: Quick Inquiry Form */}
            <div className="card hover-lift hero-form" style={{
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 8px 25px rgba(30, 58, 138, 0.15)',
              minWidth: '320px',
              maxWidth: '380px',
              flex: '0 0 380px',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.2)',
              transform: isHeroVisible ? 'translateX(0) scale(1)' : 'translateX(50px) scale(0.9)',
              opacity: isHeroVisible ? 1 : 0,
              transition: 'all 0.8s ease-out 0.3s'
            }}>
              <h3 className="heading-md" style={{ 
                color: '#1e293b',
                marginBottom: '0.6rem',
                fontSize: '0.95rem',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: 600
              }}>
                Quick Inquiry
              </h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div>
                  <label className="small-text" style={{ 
                    fontWeight: 550, 
                    color: '#1e293b', 
                    display: 'block', 
                    marginBottom: '0.2rem',
                    fontSize: '0.8rem',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}>Your Name *</label>
                  <input type="text" placeholder="Full name" required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    style={{ 
                      width: '100%', 
                      border: '1px solid rgba(30, 58, 138, 0.08)', 
                      borderRadius: '6px', 
                      padding: '0.40rem 0.70rem', 
                      fontSize: '0.75rem', 
                      outline: 'none', 
                      boxSizing: 'border-box', 
                      color: '#1e293b',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      transition: 'all 0.2s ease'
                    }} />
                </div>
                <div>
                  <label className="small-text" style={{ 
                    fontWeight: 550, 
                    color: '#1e293b', 
                    display: 'block', 
                    marginBottom: '0.2rem',
                    fontSize: '0.8rem',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}>Contact Number *</label>
                  <input type="tel" placeholder="10-digit mobile" required maxLength={10}
                    value={form.number}
                    onChange={e => setForm(f => ({ ...f, number: e.target.value.replace(/\D/, '') }))}
                    style={{ 
                      width: '100%', 
                      border: '1px solid rgba(30, 58, 138, 0.08)', 
                      borderRadius: '6px', 
                      padding: '0.40rem 0.70rem', 
                      fontSize: '0.75rem', 
                      outline: 'none', 
                      boxSizing: 'border-box', 
                      color: '#1e293b',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      transition: 'all 0.2s ease'
                    }} />
                </div>
                <div>
                  <label className="small-text" style={{ 
                    fontWeight: 550, 
                    color: '#1e293b', 
                    display: 'block', 
                    marginBottom: '0.2rem',
                    fontSize: '0.8rem',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    style={{
                      width: '100%',
                      border: '1px solid rgba(30, 58, 138, 0.08)',
                      borderRadius: '6px',
                      padding: '0.40rem 0.70rem',
                      fontSize: '0.75rem',
                      outline: 'none',
                      boxSizing: 'border-box',
                      color: '#1e293b',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      transition: 'all 0.2s ease'
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 550, color: '#1a1a2e', display: 'block', marginBottom: '0.2rem' }}>Segment *</label>
                  <div style={{ position: 'relative' }}>
                    <select value={form.segment} onChange={e => setForm(f => ({ ...f, segment: e.target.value }))} style={{ width: '100%', border: '1px solid #ddd', borderRadius: '5px', padding: '0.40rem 0.70rem', fontSize: '0.75rem', outline: 'none', color: '#333', appearance: 'none', boxSizing: 'border-box', background: '#fff' }}>
                      <option value="">— Select Segment —</option>
                      <option value="Stock Cash">Stock Cash</option>
                      <option value="Option">Option</option>
                      <option value="Future">Future</option>
                      <option value="Banknifty / Nifty Options">Banknifty / Nifty Options</option>
                      <option value="Banknifty / Nifty Future">Banknifty / Nifty Future</option>
                      <option value="Commodity Services">Commodity Services</option>
                    </select>
                    <span style={{ position: 'absolute', right: '0.65rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#555', fontSize: '0.7rem' }}>▼</span>
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 550, color: '#1a1a2e', display: 'block', marginBottom: '0.2rem' }}>Trading Capital *</label>
                  <div style={{ position: 'relative' }}>
                    <select value={form.investment} onChange={e => setForm(f => ({ ...f, investment: e.target.value }))} style={{ width: '100%', border: '1px solid #ddd', borderRadius: '5px', padding: '0.40rem 0.70rem', fontSize: '0.75rem', outline: 'none', color: '#333', appearance: 'none', boxSizing: 'border-box', background: '#fff' }}>
                      <option value="">— Select Trading Capital —</option>
                      <option value="Below ₹1 Lakh">Below ₹1 Lakh</option>
                      <option value="₹1L – ₹5L">₹1L – ₹5L</option>
                      <option value="₹5L – ₹10L">₹5L – ₹10L</option>
                      <option value="Above ₹10L">Above ₹10L</option>
                    </select>
                    <span style={{ position: 'absolute', right: '0.65rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#555', fontSize: '0.7rem' }}>▼</span>
                  </div>
                </div>
                <label style={{ fontSize: '0.7rem', color: '#666', display: 'flex', alignItems: 'flex-start', gap: '0.4rem', lineHeight: 1.5 }}>
                  <input type="checkbox" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>I agree to be contacted by phone/WhatsApp and accept the{' '}
                    <Link to="/privacy-policy" style={{ color: '#00A651' }}>Privacy Policy</Link> &amp;{' '}
                    <Link to="/terms-condition" style={{ color: '#00A651' }}>Terms</Link>.
                  </span>
                </label>
                <button type="submit" className="btn-primary" disabled={loading}
                  style={{ 
                    background: 'linear-gradient(135deg, #22c55e, #15803d)', 
                    color: '#ffffff', 
                    fontWeight: 700, 
                    padding: '0.8rem', 
                    borderRadius: '8px', 
                    border: 'none', 
                    cursor: loading ? 'not-allowed' : 'pointer', 
                    fontSize: '0.85rem', 
                    letterSpacing: '0.1em',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    width: '100%',
                    transition: 'all 0.3s ease',
                    opacity: loading ? 0.7 : 1
                  }}>
                  {loading ? 'SUBMITTING...' : 'SUBMIT'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>




      {/* We Are Section */}
      {/* <section style={{ background: '#eef1f8', padding: '3rem 1rem' }}> */}
        {/* <div className="max-w-6xl mx-auto"> */}
          {/* <div style={{ background: '#fff', borderRadius: '20px', padding: '2.5rem', display: 'flex', gap: '2.5rem', alignItems: 'stretch', flexWrap: 'wrap', boxShadow: '0 8px 32px rgba(0,0,0,0.07)' }}> */}

            {/* Left: Quick Inquiry form — floating card */}
            {/* <div style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '1.75rem',
              boxShadow: '0 8px 32px rgba(0,0,0,0.13)',
              minWidth: '280px',
              maxWidth: '320px',
              flex: '0 0 300px',
              marginTop: '-3.5rem',
              marginBottom: '-1rem',
              border: '1px solid #e8e8e8',
            }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1a1a2e', marginBottom: '1.1rem', fontFamily: 'system-ui, -apple-system, sans-serif' }}>Quick Inquiry</h3>
              <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 600, color: '#1a1a2e', display: 'block', marginBottom: '0.3rem' }}>Your Name *</label>
                  <input type="text" placeholder="Full name"
                    style={{ width: '100%', border: '1px solid #ddd', borderRadius: '8px', padding: '0.55rem 0.75rem', fontSize: '0.82rem', outline: 'none', boxSizing: 'border-box', color: '#888' }} />
                </div>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 600, color: '#1a1a2e', display: 'block', marginBottom: '0.3rem' }}>Contact Number *</label>
                  <input type="tel" placeholder="10-digit mobile"
                    style={{ width: '100%', border: '1px solid #ddd', borderRadius: '8px', padding: '0.55rem 0.75rem', fontSize: '0.82rem', outline: 'none', boxSizing: 'border-box', color: '#888' }} />
                </div>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 600, color: '#1a1a2e', display: 'block', marginBottom: '0.3rem' }}>Segment *</label>
                  <div style={{ position: 'relative' }}>
                    <select style={{ width: '100%', border: '1px solid #ddd', borderRadius: '8px', padding: '0.55rem 0.75rem', fontSize: '0.82rem', outline: 'none', color: '#888', appearance: 'none', boxSizing: 'border-box', background: '#fff' }}>
                      <option value="">— Select Segment —</option>
                      <option>Stock Cash</option>
                      <option>Option</option>
                      <option>Future</option>
                      <option>Banknifty / Nifty Options</option>
                      <option>Banknifty / Nifty Future</option>
                      <option>Commodity Services</option>
                    </select>
                    <span style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#555', fontSize: '0.7rem' }}>▼</span>
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 600, color: '#1a1a2e', display: 'block', marginBottom: '0.3rem' }}>Trading Capital *</label>
                  <div style={{ position: 'relative' }}>
                    <select style={{ width: '100%', border: '1px solid #ddd', borderRadius: '8px', padding: '0.55rem 0.75rem', fontSize: '0.82rem', outline: 'none', color: '#888', appearance: 'none', boxSizing: 'border-box', background: '#fff' }}>
                      <option value="">— Select Trading Capital —</option>
                      <option>Below ₹1 Lakh</option>
                      <option>₹1L – ₹5L</option>
                      <option>₹5L – ₹10L</option>
                      <option>Above ₹10L</option>
                    </select>
                    <span style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#555', fontSize: '0.7rem' }}>▼</span>
                  </div>
                </div>
                <label style={{ fontSize: '0.7rem', color: '#777', display: 'flex', alignItems: 'flex-start', gap: '0.4rem', lineHeight: 1.5 }}>
                  <input type="checkbox" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>I agree to be contacted by phone/WhatsApp and accept the{' '}
                    <Link to="/privacy-policy" style={{ color: '#00A651' }}>Privacy Policy</Link> &amp;{' '}
                    <Link to="/terms-condition" style={{ color: '#00A651' }}>Terms</Link>.
                  </span>
                </label>
                <button type="submit"
                  style={{ background: '#1a3a6e', color: '#fff', fontWeight: 700, padding: '0.7rem', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '0.82rem', letterSpacing: '0.1em' }}>
                  SUBMIT
                </button>
              </form>
            </div> */}

            {/* Right: We Are content */}
            {/* <div style={{ flex: 1, minWidth: '280px', padding: '0.5rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
                <div style={{ width: '36px', height: '2px', background: '#c9a84c' }} />
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#c9a84c', letterSpacing: '0.15em', textTransform: 'uppercase' }}>WE ARE</span>
              </div>
              <h2 style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 400, color: '#1a1a2e', marginBottom: '1rem', lineHeight: 1.2 }}>
                We are Kashish Joshi Research
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <span style={{ border: '1px solid #b0c8b8', color: '#2a4a38', fontSize: '0.72rem', fontWeight: 200, padding: '0.3rem 0.85rem', borderRadius: '999px', background: 'transparent' }}>
                  SEBI Registered Research Analyst
                </span>
                <span style={{ border: '1px solid #b0c8b8', color: '#2a4a38', fontSize: '0.72rem', fontWeight: 500, padding: '0.3rem 0.85rem', borderRadius: '999px', background: 'transparent' }}>
                  Guiding Your Investments with Precision Research
                </span>
              </div>
              <p style={{ fontSize: '0.88rem', color: '#555', lineHeight: 1.85, marginBottom: '1.75rem', maxWidth: '480px' }}>
                Kashish Joshi Research is a SEBI-registered research analyst that provides clear,
                data-driven trading and investment recommendations for the Indian stock market. We
                focus on quality, efficiency, and smart innovation to help clients make informed
                decisions, with timely insights, disciplined risk management, and responsive support.
              </p>
              <Link to="/about"
                style={{ display: 'inline-block', border: '1px solid #1a1a2e', color: '#1a1a2e', fontWeight: 500, padding: '0.55rem 1.5rem', borderRadius: '8px', fontSize: '0.85rem', textDecoration: 'none' }}>
                Read more
              </Link>
            </div> */}

          {/* </div> */}
        {/* </div> */}
      {/* </section> */}

        {/* Signal Services */}
      {/* <ServiceSignals /> */}

      {/* STP Signal Plans */}
      <STPSignalPlans />

      {/* Quality Services Section */}
      <div ref={servicesRef}>
        <QualityServices isVisible={isServicesVisible} />
      </div>

      {/* Problem Solution Section */}
      <ProblemSolution />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Methodology */}
      <Methodology />

      {/* Testimonials & FAQ Combined */}
      <TestimonialsFaq />

      {/* Register Form */}
      {/* <RegisterForm /> */}

      {/* Blog */}
      {/* <BlogSection /> */}

      {/* CTA */}
      <section style={{
        position: 'relative',
        padding: '4rem 1rem',
        backgroundImage: 'url("/assets/images/inner-banner - Stock Cash.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(3,16,49,0.60) 0%, rgba(26,58,110,0.55) 100%)' }} />
        <div className="max-w-7xl mx-auto px-4 text-center text-white" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready to Start Trading Smarter?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', marginBottom: '1.75rem' }}>Get in touch with our experts today.</p>
          <Link to="/contact" style={{
            display: 'inline-block', background: '#fff', color: '#031031',
            fontWeight: 700, padding: '0.75rem 2rem', borderRadius: '8px',
            textDecoration: 'none', fontSize: '0.95rem', transition: 'background 0.2s, color 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#1a3a6e'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#031031'; }}
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
