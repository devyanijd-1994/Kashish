import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { submitLandingLead } from '../utils/submitLead';
import ServiceSignals from '../components/ServiceSignals';
import WhyChooseUs from '../components/WhyChooseUs';
import Methodology from '../components/Methodology';
import Testimonials from '../components/Testimonials';
import FaqSection from '../components/FaqSection';
import BlogSection from '../components/BlogSection';
import RegisterForm from '../components/RegisterForm';
import DisclaimerTicker from '../components/DisclaimerTicker';
import WhatsAppButton from '../components/WhatsAppButton';

const HERO_BG = '/assets/images/ChatGPT Image Apr 22, 2026, 10_07_25 PM.png';

const STP_PLANS = [
  { badge: 'MOST POPULAR', icon: 'fa-chart-line', title: 'Option STP Signal Plan', market: 'Options Market' },
  { badge: 'PREMIER', icon: 'fa-chart-bar', title: 'Future STP Signal Plan', market: 'Futures Market' },
  { badge: 'ESSENTIAL', icon: 'fa-dollar-sign', title: 'Stock Cash STP Signal Plan', market: 'Cash Segment' },
  { badge: 'COMMODITY', icon: 'fa-fire', title: 'MCX STP Strategy Plan', market: 'Commodity Market' },
  { badge: 'AGRI', icon: 'fa-leaf', title: 'NCDEX STP Signal Plan', market: 'Agriculture Market' },
  { badge: 'ACTIVE', icon: 'fa-clock', title: 'Intraday STP Strategy Plan', market: 'High-Frequency Trading' },
];

const STP_FEATURES = [
  'Pre-Market View & Trading Levels & Strategy',
  'Unique Trading Strategy',
  'Timely Follow-Ups of Trade Signals',
  'Important Market News & Updates',
  'Real-Time Customer Support',
  'Risk Management Priority',
  'Whole Day Market Coverage',
  'High Performance Efficiency Intraday Trade Signals',
];


// ── Landing Header ──────────────────────────────────────────────
function LandingHeader() {
  return (
    <header style={{ background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 999 }}>
      {/* <div style={{ background: '#031031', padding: '0.35rem 1rem', textAlign: 'center' }}>
        <span style={{ color: '#00A651', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em' }}>
          TRUSTED SEBI REGISTERED RESEARCH ANALYST | INH000017240
        </span>
      </div> */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '0.6rem 1rem' }}>
        <Link to="/"><img src="/assets/images/logoo2.png" alt="Kashish Joshi Research" style={{ height: '52px' }} /></Link>
      </div>
    </header>
  );
}

// ── Hero with inline form ────────────────────────────────────────
function HeroSection() {
  const [form, setForm] = useState({ name: '', number: '', email: '', segment: '', investment: '' });
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
        segment: form.segment || 'Equity',
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
                Trusted SEBI Registered Investment Advisory Firm | INH000022446
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
                Market-Leading Options Research &amp; Trading Insights
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
                Advanced Technical Analysis for Timely, High-Confidence Trading Decisions
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
                  <label className="small-text" style={{ 
                    fontWeight: 550, 
                    color: '#1e293b', 
                    display: 'block', 
                    marginBottom: '0.2rem',
                    fontSize: '0.8rem',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}>Segment *</label>
                  <div style={{ position: 'relative' }}>
                    <select value={form.segment} onChange={e => setForm(f => ({ ...f, segment: e.target.value }))} style={{ 
                      width: '100%', 
                      border: '1px solid rgba(30, 58, 138, 0.08)', 
                      borderRadius: '6px', 
                      padding: '0.40rem 0.70rem', 
                      fontSize: '0.75rem', 
                      outline: 'none', 
                      boxSizing: 'border-box', 
                      color: '#1e293b',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      transition: 'all 0.2s ease',
                      appearance: 'none',
                      background: '#fff'
                    }}>
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
                  <label className="small-text" style={{ 
                    fontWeight: 550, 
                    color: '#1e293b', 
                    display: 'block', 
                    marginBottom: '0.2rem',
                    fontSize: '0.8rem',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}>Trading Capital *</label>
                  <div style={{ position: 'relative' }}>
                    <select value={form.investment} onChange={e => setForm(f => ({ ...f, investment: e.target.value }))} style={{ 
                      width: '100%', 
                      border: '1px solid rgba(30, 58, 138, 0.08)', 
                      borderRadius: '6px', 
                      padding: '0.40rem 0.70rem', 
                      fontSize: '0.75rem', 
                      outline: 'none', 
                      boxSizing: 'border-box', 
                      color: '#1e293b',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      transition: 'all 0.2s ease',
                      appearance: 'none',
                      background: '#fff'
                    }}>
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
    </>
  );
}
// ── Stats bar ────────────────────────────────────────────────────
function StatsBar() {
  return (
    <div style={{ background: '#031031', padding: '1.25rem 1rem' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', justifyContent: 'center', gap: '0', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px', overflow: 'hidden' }}>
        {[{ val: '90%+', label: 'Performance Efficiency' }, { val: '5K+', label: 'Clients' }, { val: '24/7', label: 'Support' }].map((s, i) => (
          <div key={i} style={{ flex: 1, padding: '0.85rem 1rem', textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
            <p style={{ color: '#fff', fontWeight: 800, fontSize: '1.2rem', margin: 0 }}>{s.val}</p>
            <p style={{ color: '#00A651', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em', margin: 0 }}>{s.label.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


// ── STP Plans ────────────────────────────────────────────────────
function STPPlans() {
  return (
    <section style={{ background: '#fff', padding: '4rem 1rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ fontSize: '0.68rem', fontWeight: 700, color: '#888', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>STRUCTURED TRADING PLANS</p>
        <h2 style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 400, color: '#1a1a2e', marginBottom: '0.5rem' }}>STP Signal Plans</h2>
        <p style={{ fontSize: '0.88rem', color: '#666', maxWidth: '600px', lineHeight: 1.7, marginBottom: '1.75rem' }}>
          Precision-engineered trading plans designed for disciplined execution, strategic entries, and consistent market performance across all segments.
        </p>
        {/* Stats */}
        <div style={{ display: 'inline-flex', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', marginBottom: '2.5rem', background: '#f7f8fa' }}>
          {[{ val: '5 Plans', label: 'TRADING SEGMENTS' }, { val: 'Full Day', label: 'DAILY COVERAGE' }, { val: '7 Core', label: 'FEATURES INCLUDED' }].map((s, i) => (
            <div key={i} style={{ padding: '0.75rem 1.5rem', textAlign: 'center', borderRight: i < 2 ? '1px solid #e2e8f0' : 'none' }}>
              <p style={{ fontWeight: 800, color: '#031031', fontSize: '1rem', margin: 0 }}>{s.val}</p>
              <p style={{ fontSize: '0.6rem', fontWeight: 600, color: '#00A651', letterSpacing: '0.08em', margin: 0 }}>{s.label}</p>
            </div>
          ))}
        </div>
        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '1.5rem' }}>
          {STP_PLANS.map((plan, i) => (
            <div key={i} style={{ border: '1px solid #e2e8f0', borderRadius: '16px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', boxShadow: '0 2px 12px rgba(3,16,49,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.62rem', fontWeight: 700, border: '1px solid #031031', color: '#031031', borderRadius: '999px', padding: '0.2rem 0.65rem' }}>
                  ↑ {plan.badge}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#031031', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className={`fas ${plan.icon}`} style={{ color: '#00A651', fontSize: '1rem' }}></i>
                </div>
                <div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#031031', margin: 0, lineHeight: 1.3 }}>{plan.title}</h3>
                  <p style={{ fontSize: '0.72rem', color: '#888', margin: 0 }}>{plan.market}</p>
                </div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {STP_FEATURES.map((f, j) => (
                  <li key={j} style={{ display: 'flex', gap: '0.4rem', fontSize: '0.78rem', color: '#555' }}>
                    <i className="fas fa-check" style={{ color: '#00A651', fontSize: '0.65rem', marginTop: '3px', flexShrink: 0 }}></i>
                    {f}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.4rem', marginTop: '0.25rem' }}>
                {['3 Months', '6 Months', '1 Year'].map((dur, j) => (
                  <div key={j} style={{ background: '#f4f6fb', borderRadius: '6px', padding: '0.4rem', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.62rem', fontWeight: 600, color: '#031031', margin: 0 }}>{dur}</p>
                    <p style={{ fontSize: '0.65rem', color: '#00A651', fontWeight: 700, margin: 0 }}>Contact Us</p>
                  </div>
                ))}
              </div>
              <a href="https://wa.link/iw4ct4" target="_blank" rel="noreferrer" style={{
                background: 'linear-gradient(135deg,#031031,#1a3a6e)', color: '#fff', borderRadius: '8px',
                padding: '0.65rem', textAlign: 'center', textDecoration: 'none', fontWeight: 700, fontSize: '0.82rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
              }}>
                <i className="fab fa-whatsapp"></i> Message Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// ── Our Clients Profit Gallery ───────────────────────────────────
function OurClientsProfit() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const clientProfits = [
    '/assets/landing/carousel-1.jpeg',
    '/assets/landing/carousel-2.jpeg',
    '/assets/landing/carousel-3.jpeg',
    '/assets/landing/carousel-4.jpeg',
    '/assets/landing/carousel-5.jpeg',
    '/assets/landing/carousel-6.jpeg',
    '/assets/landing/carousel-7.jpeg',
    '/assets/landing/carousel-8.jpeg'
  ];

  const getVisibleScreenshots = () => {
    const screenshots = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % clientProfits.length;
      screenshots.push(clientProfits[index]);
    }
    return screenshots;
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + clientProfits.length) % clientProfits.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % clientProfits.length);
  };

  return (
    <section 
      ref={sectionRef}
      style={{ 
        background: '#ffffff', 
        padding: '4rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated Background Pattern */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(34,197,94,0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite',
        zIndex: 0
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '-5%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(3,16,49,0.03) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite reverse',
        zIndex: 0
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(34,197,94,0.05) 100%)',
            borderRadius: '50px',
            marginBottom: '1rem',
            border: '1px solid rgba(34,197,94,0.2)'
          }}>
            <span style={{
              fontSize: '0.85rem',
              color: '#22c55e',
              fontWeight: 600,
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}>
              Real Results
            </span>
          </div>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            fontWeight: 800, 
            color: '#031031', 
            marginBottom: '1rem',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, #031031 0%, #1e3a8a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Our Clients Profit
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6,
            fontWeight: 500
          }}>
            See the actual trading results and profit screenshots from our satisfied clients
          </p>
        </div>

        {/* Profit Screenshots Carousel */}
        <div style={{
          position: 'relative',
          marginBottom: '3rem',
          maxWidth: '1200px',
          margin: '0 auto 3rem'
        }}>
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #22c55e, #16a34a)',
              border: 'none',
              color: '#fff',
              fontSize: '1.2rem',
              cursor: 'pointer',
              zIndex: 10,
              boxShadow: '0 4px 20px rgba(34,197,94,0.3)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              e.currentTarget.style.boxShadow = '0 6px 25px rgba(34,197,94,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(34,197,94,0.3)';
            }}
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #22c55e, #16a34a)',
              border: 'none',
              color: '#fff',
              fontSize: '1.2rem',
              cursor: 'pointer',
              zIndex: 10,
              boxShadow: '0 4px 20px rgba(34,197,94,0.3)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              e.currentTarget.style.boxShadow = '0 6px 25px rgba(34,197,94,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(34,197,94,0.3)';
            }}
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Screenshots Container */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            padding: '0 2rem',
            overflow: 'hidden'
          }}>
            {getVisibleScreenshots().map((img, index) => (
              <div
                key={`${currentIndex}-${index}`}
                style={{
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                  opacity: isVisible ? 1 : 0,
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDelay: `${index * 0.1}s`,
                  height: '250px',
                  position: 'relative'
                }}
              >
                <img 
                  src={img} 
                  alt={`Client Profit ${currentIndex + index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    borderRadius: '12px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    filter: 'contrast(1.1) brightness(1.05) saturate(1.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(34,197,94,0.25)';
                    e.currentTarget.style.filter = 'contrast(1.15) brightness(1.08) saturate(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                    e.currentTarget.style.filter = 'contrast(1.1) brightness(1.05) saturate(1.1)';
                  }}
                />
                
                {/* Image Number Badge */}
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'rgba(0,0,0,0.7)',
                  color: '#fff',
                  padding: '0.3rem 0.6rem',
                  borderRadius: '15px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  backdropFilter: 'blur(10px)'
                }}>
                  #{(currentIndex + index + 1)}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginTop: '2rem'
          }}>
            {clientProfits.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: index === currentIndex ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: index === currentIndex 
                    ? 'linear-gradient(135deg, #22c55e, #16a34a)' 
                    : 'rgba(0,0,0,0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0
                }}
              />
            ))}
          </div>
        </div>

        {/* CSS Animations */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }
          
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(50px) scale(0.9);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}</style>

        {/* Why Choose Us Section - Light Theme */}
        <div style={{ 
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', 
          borderRadius: '16px', 
          padding: '1.5rem', 
          textAlign: 'center',
          marginTop: '2rem',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
        }}>
          {/* Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(34,197,94,0.05) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(0,0,0,0.02) 0%, transparent 50%)
            `,
            pointerEvents: 'none'
          }} />

          {/* Section Header */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h1 style={{ 
              fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', 
              fontWeight: 800, 
              color: '#031031', 
              marginBottom: '1rem',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              animation: 'fadeInUp 0.8s ease-out 0.2s both',
              textRendering: 'optimizeLegibility',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale'
            }}>
              Why Choose Us?
            </h1>
            
            <div style={{
              width: '60px',
              height: '3px',
              background: 'linear-gradient(135deg, #22c55e, #16a34a)',
              margin: '0 auto 1rem',
              borderRadius: '2px',
              animation: 'fadeInUp 0.8s ease-out 0.4s both'
            }} />
          </div>

          {/* Content */}
          <div style={{ 
            maxWidth: '900px', 
            margin: '0 auto',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              animation: 'fadeInUp 0.8s ease-out 0.6s both'
            }}>
              {/* Main Description */}
              <p style={{ 
                fontSize: '1rem', 
                color: '#374151', 
                lineHeight: 1.6,
                textAlign: 'center',
                fontWeight: 500,
                marginBottom: '1rem',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale'
              }}>
                Backed by <strong style={{ color: '#031031', fontWeight: 700 }}>5+ years of industry expertise</strong>, our team is dedicated to delivering <strong style={{ color: '#22c55e', fontWeight: 700 }}>actionable trading tips</strong> that help you navigate the markets with confidence. We're committed to empowering clients with the insights they need to make <strong style={{ color: '#031031', fontWeight: 700 }}>smart financial decisions</strong> and achieve success.
              </p>
              
              {/* Key Points - Original Content from Website */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem',
                width: '100%',
                marginTop: '1.5rem'
              }}>
                {[
                  { 
                    icon: 'fa-brain', 
                    title: 'Expertise and Insight', 
                    desc: 'We bring deep knowledge and expertise in analyzing financial markets, industries, and specific companies. They provide valuable insights that can inform investment decisions.'
                  },
                  { 
                    icon: 'fa-database', 
                    title: 'Access to Information', 
                    desc: 'We have access to extensive financial data, research reports, and market trends, enabling them to make informed investment decisions and stay ahead of market developments.'
                  },
                  { 
                    icon: 'fa-handshake', 
                    title: 'Long-term Partnership', 
                    desc: 'We aims to build long-term relationships with clients, offering continuous support, advice, and guidance as financial goals evolve over time.'
                  },
                  { 
                    icon: 'fa-globe', 
                    title: 'Diverse Market Coverage', 
                    desc: 'Our research and trading activities cover global markets, offering diverse opportunities across asset classes such as equities, commodities, and derivatives.'
                  }
                ].map((item, index) => (
                  <div key={index} style={{
                    background: '#ffffff',
                    padding: '1rem',
                    borderRadius: '12px',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                    border: '1px solid rgba(34,197,94,0.15)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    textAlign: 'left',
                    position: 'relative',
                    overflow: 'hidden',
                    animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                    transform: 'translateY(20px)',
                    opacity: 0
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(34,197,94,0.25)';
                    e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
                    e.currentTarget.style.borderColor = 'rgba(34,197,94,0.15)';
                  }}
                  >
                    {/* Animated background effect */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(34,197,94,0.05) 0%, transparent 100%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}
                  />
                    
                    <div style={{
                      width: '45px',
                      height: '45px',
                      background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 0 0.8rem 0',
                      position: 'relative',
                      zIndex: 1,
                      animation: `pulse 2s infinite ${index * 0.5}s`,
                      boxShadow: '0 4px 15px rgba(34,197,94,0.3)'
                    }}>
                      <i className={`fas ${item.icon}`} style={{ 
                        fontSize: '1.1rem', 
                        color: '#fff',
                        animation: `iconFloat 3s ease-in-out infinite ${index * 0.3}s`
                      }}></i>
                    </div>
                    <h3 style={{
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: '#031031',
                      marginBottom: '0.5rem',
                      lineHeight: 1.2,
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                      textRendering: 'optimizeLegibility',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                      position: 'relative',
                      zIndex: 1
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: '0.8rem',
                      color: '#4b5563',
                      margin: 0,
                      lineHeight: 1.5,
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                      textRendering: 'optimizeLegibility',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                      position: 'relative',
                      zIndex: 1
                    }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced CSS Animations */}
          <style>{`
            @keyframes fadeInDown {
              from { opacity: 0; transform: translateY(-20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes slideInUp {
              from { 
                opacity: 0; 
                transform: translateY(30px); 
              }
              to { 
                opacity: 1; 
                transform: translateY(0); 
              }
            }
            @keyframes pulse {
              0%, 100% { 
                transform: scale(1); 
                box-shadow: 0 4px 15px rgba(34,197,94,0.3);
              }
              50% { 
                transform: scale(1.05); 
                box-shadow: 0 6px 20px rgba(34,197,94,0.4);
              }
            }
            @keyframes iconFloat {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-3px); }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}

// ── Testimonials & FAQ Combined ───────────────────────────────────
// Custom hook for responsive design
function useResponsive() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return { isMobile };
}

// Google Icon Component
function GoogleIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
      <path fill="none" d="M0 0h48v48H0z"/>
    </svg>
  );
}

function TestimonialsFaq() {
  const [activeReview, setActiveReview] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const [faqVisible, setFaqVisible] = useState(false);
  
  const { isMobile } = useResponsive();
  
  const sectionRef = useRef(null);
  const testimonialsRef = useRef(null);
  const faqRef = useRef(null);

  const REVIEWS = [
    {
      text: "The service is very good.. specially the advisor is very nice n humble person who tries to give his best.. I think employees like him actually represents the company's good wills.",
      name: 'Priya Sharma',
      location: 'Maharashtra',
      rating: 5
    },
    {
      text: 'A nice place for fundamental analysis to see the growth ability of a stock. Stock screeners also assist in locating and selecting the appropriate stocks for investment.',
      name: 'Manoj Panday',
      location: 'Uttar Pradesh',
      rating: 5
    },
    {
      text: 'My doubts were answered in a very informative way during our conversations with their advisor. I upgraded to their PRO plan and never looked back. Highly recommended!',
      name: 'Ravi Prashad',
      location: 'Delhi',
      rating: 5
    },
    {
      text: 'Excellent research calls with proper stop-loss and targets. The team is very responsive and always available during market hours. Best advisory service I have used.',
      name: 'Sunita Verma',
      location: 'Rajasthan',
      rating: 5
    },
  ];

  const FAQS = [
    { q: 'What types of services does Kashish Joshi offer? ', a: 'Our company provides state-of-the-art business solutions, such as financial analysis, market research, content advising, and strategic planning. For a comprehensive list of all the services we provide, please visit our Services page.' },
    { q: 'How does Kashish Joshi help new start-ups? ', a: 'In addition to creating company plans and growth strategies, we also help new start-ups by performing market research, delivering industry insights, and recommending content.' },
    { q: 'What makes Kashish Joshi stand out from other consultiing firms', a: 'Our distinct focus on emerging technologies, attention to particular industries, and breadth of field expertise set us apart from the competition. Our experts are well-versed in the opportunities and problems that our customers confront, as well as the dynamics of the market.' },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview(prev => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const testimonialsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTestimonialsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const faqObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFaqVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (testimonialsRef.current) testimonialsObserver.observe(testimonialsRef.current);
    if (faqRef.current) faqObserver.observe(faqRef.current);

    return () => {
      observer.disconnect();
      testimonialsObserver.disconnect();
      faqObserver.disconnect();
    };
  }, []);

  const currentReview = REVIEWS[activeReview];

  return (
    <section 
      ref={sectionRef}
      style={{ 
        background: 'linear-gradient(135deg, #f0f8f4 0%, #f7fafc 100%)', 
        padding: '4rem 1rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decorations */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-5%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(30,58,138,0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite',
        zIndex: 0
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '-3%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite reverse',
        zIndex: 0
      }} />

      <div className="max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Main Content Container */}
        <div 
          className="testimonials-faq-container"
          style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
            width: '100%'
          }}
        >
          
          {/* Left Side - Testimonials */}
          <div 
            ref={testimonialsRef}
            className="testimonials-section"
            style={{
              width: '100%',
              transform: testimonialsVisible ? 'translateY(0)' : 'translateY(30px)',
              opacity: testimonialsVisible ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {/* Testimonials Header */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                marginBottom: '1rem',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1e3a8a, #1e40af)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 20px rgba(30,58,138,0.3)',
                  animation: testimonialsVisible ? 'pulse 2s infinite' : 'none',
                  flexShrink: 0
                }}>
                  <i className="fas fa-quote-left" style={{ 
                    color: '#fff', 
                    fontSize: '1.2rem'
                  }}></i>
                </div>
                <div style={{ 
                  width: '40px', 
                  height: '3px', 
                  background: 'linear-gradient(90deg, #22c55e, #16a34a)',
                  borderRadius: '2px',
                  flexShrink: 0
                }} />
              </div>
              
              <h2 style={{ 
                fontFamily: 'system-ui, -apple-system, sans-serif', 
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
                fontWeight: 700, 
                color: '#1e3a8a', 
                marginBottom: '0.5rem',
                letterSpacing: '-0.02em',
                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                lineHeight: 1.2,
                background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                What Our Clients Say
              </h2>
              
              <p style={{
                fontSize: '1rem',
                color: '#64748b',
                fontWeight: 500,
                lineHeight: 1.6,
                margin: 0,
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>
                Real feedback from our satisfied clients
              </p>
            </div>

            {/* Testimonial Card */}
            <div style={{
              background: 'linear-gradient(135deg, #fff 0%, #fafbfc 100%)',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 10px 40px rgba(30,58,138,0.08), 0 4px 20px rgba(0,0,0,0.04)',
              border: '1px solid rgba(30,58,138,0.08)',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '280px',
              transform: testimonialsVisible ? 'scale(1)' : 'scale(0.95)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '0.2s'
            }}>
              {/* Quote decoration */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1.5rem',
                fontSize: '4rem',
                color: 'rgba(30,58,138,0.08)',
                fontFamily: 'serif',
                lineHeight: 1,
                userSelect: 'none',
                pointerEvents: 'none'
              }}>
                "
              </div>

              {/* Stars */}
              <div style={{ 
                display: 'flex', 
                gap: '0.25rem', 
                marginBottom: '1.5rem',
                flexWrap: 'wrap'
              }}>
                {[...Array(currentReview.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star" style={{ 
                    color: '#22c55e', 
                    fontSize: '1rem',
                    textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                    animation: testimonialsVisible ? `starGlow 0.5s ease-out ${i * 0.1}s` : 'none'
                  }}></i>
                ))}
              </div>

              {/* Review text */}
              <p style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontSize: '1.1rem',
                color: '#374151',
                lineHeight: 1.7,
                marginBottom: '2rem',
                fontWeight: 500,
                letterSpacing: '0.01em',
                fontStyle: 'italic'
              }}>
                "{currentReview.text}"
              </p>

              {/* Client info */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1e3a8a, #1e40af)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  boxShadow: '0 4px 15px rgba(30,58,138,0.3)',
                  flexShrink: 0,
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}>
                  {currentReview.name.charAt(0)}
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <p style={{ 
                    fontSize: '1rem', 
                    fontWeight: 700, 
                    color: '#1e3a8a', 
                    marginBottom: '0.25rem',
                    letterSpacing: '0.02em',
                    wordBreak: 'break-word',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}>
                    {currentReview.name}
                  </p>
                  <p style={{ 
                    fontSize: '0.85rem', 
                    color: '#6b7280',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    flexWrap: 'wrap',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}>
                    <i className="fas fa-map-marker-alt" style={{ 
                      color: '#22c55e',
                      fontSize: '0.8rem',
                      flexShrink: 0
                    }}></i>
                    <span>{currentReview.location}</span>
                  </p>
                </div>
              </div>

              {/* Google logo */}
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                right: '1.5rem',
                opacity: 0.7
              }}>
                <GoogleIcon size={24} />
              </div>
            </div>

            {/* Navigation dots */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '0.75rem', 
              marginTop: '1.5rem',
              flexWrap: 'wrap'
            }}>
              {REVIEWS.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveReview(i)}
                  style={{
                    width: i === activeReview ? '32px' : '12px',
                    height: '12px',
                    borderRadius: '6px',
                    background: i === activeReview 
                      ? 'linear-gradient(135deg, #1e3a8a, #1e40af)' 
                      : 'rgba(30,58,138,0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: i === activeReview 
                      ? '0 2px 8px rgba(30,58,138,0.3)' 
                      : 'none',
                    minWidth: '12px',
                    minHeight: '12px'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right Side - FAQ */}
          <div 
            ref={faqRef}
            className="faq-section"
            style={{
              width: '100%',
              transform: faqVisible ? 'translateY(0)' : 'translateY(30px)',
              opacity: faqVisible ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '0.2s'
            }}
          >
            {/* FAQ Header */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                marginBottom: '1rem',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 20px rgba(34,197,94,0.3)',
                  animation: faqVisible ? 'pulse 2s infinite 0.5s' : 'none',
                  flexShrink: 0
                }}>
                  <i className="fas fa-question-circle" style={{ 
                    color: '#fff', 
                    fontSize: '1.2rem'
                  }}></i>
                </div>
                <div style={{ 
                  width: '40px', 
                  height: '3px', 
                  background: 'linear-gradient(90deg, #1e3a8a, #1e40af)',
                  borderRadius: '2px',
                  flexShrink: 0
                }} />
              </div>
              
              <h2 style={{ 
                fontFamily: 'system-ui, -apple-system, sans-serif', 
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
                fontWeight: 700, 
                color: '#1e3a8a', 
                marginBottom: '0.5rem',
                letterSpacing: '-0.02em',
                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                lineHeight: 1.2,
                background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Frequently Asked Questions
              </h2>
              
              <p style={{
                fontSize: '1rem',
                color: '#64748b',
                fontWeight: 500,
                lineHeight: 1.6,
                margin: 0,
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>
                Get quick answers to common questions
              </p>
            </div>

            {/* FAQ Items */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem' 
            }}>
              {FAQS.map((faq, i) => (
                <div 
                  key={i} 
                  style={{
                    background: 'linear-gradient(135deg, #fff 0%, #fafbfc 100%)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 15px rgba(30,58,138,0.06), 0 1px 3px rgba(0,0,0,0.04)',
                    border: '1px solid rgba(30,58,138,0.08)',
                    transform: faqVisible ? 'translateY(0)' : 'translateY(20px)',
                    opacity: faqVisible ? 1 : 0,
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDelay: `${0.3 + i * 0.1}s`
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1.25rem',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s ease',
                      gap: '1rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(30,58,138,0.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'none';
                    }}
                  >
                    <span style={{ 
                      fontSize: '0.95rem', 
                      fontWeight: 600, 
                      color: '#1e3a8a',
                      letterSpacing: '0.01em',
                      lineHeight: 1.4,
                      flex: 1,
                      minWidth: 0,
                      wordBreak: 'break-word',
                      fontFamily: 'system-ui, -apple-system, sans-serif'
                    }}>
                      {faq.q}
                    </span>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: openFaq === i 
                        ? 'linear-gradient(135deg, #22c55e, #16a34a)' 
                        : 'rgba(30,58,138,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.3s ease'
                    }}>
                      <i 
                        className={`fas fa-chevron-${openFaq === i ? 'up' : 'down'}`}
                        style={{ 
                          fontSize: '0.8rem', 
                          color: openFaq === i ? '#fff' : '#1e3a8a',
                          transition: 'all 0.3s ease'
                        }} 
                      />
                    </div>
                  </button>
                  
                  {openFaq === i && (
                    <div style={{ 
                      padding: '0 1.25rem 1.25rem',
                      fontSize: '0.9rem', 
                      color: '#64748b', 
                      lineHeight: 1.7,
                      fontWeight: 500,
                      letterSpacing: '0.01em',
                      animation: 'fadeInUp 0.3s ease-out',
                      fontFamily: 'system-ui, -apple-system, sans-serif'
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div style={{
              marginTop: '2rem',
              padding: '1.5rem',
              background: 'linear-gradient(135deg, rgba(30,58,138,0.05) 0%, rgba(34,197,94,0.05) 100%)',
              borderRadius: '12px',
              border: '1px solid rgba(30,58,138,0.1)',
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: '0.9rem',
                color: '#64748b',
                marginBottom: '1rem',
                fontWeight: 500,
                lineHeight: 1.6,
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>
                Still have questions? We're here to help!
              </p>
              <a 
                href="https://wa.me/919171718451" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                  color: '#fff',
                  fontWeight: 600,
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  boxShadow: '0 4px 15px rgba(34,197,94,0.3)',
                  transition: 'all 0.3s ease',
                  minHeight: '44px',
                  justifyContent: 'center',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}
                className="hover-lift"
              >
                <i className="fab fa-whatsapp" style={{ 
                  fontSize: '1rem',
                  flexShrink: 0
                }}></i>
                <span>Contact Support</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations and Responsive Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes starGlow {
          0% { 
            opacity: 0;
            transform: scale(0.5) rotate(-180deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) rotate(0deg);
          }
          100% { 
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .hover-lift {
          transition: all 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(34,197,94,0.4);
        }
        
        /* Desktop Layout */
        @media (min-width: 769px) {
          .testimonials-faq-container {
            flex-direction: row !important;
            gap: 4rem !important;
          }
          
          .testimonials-section,
          .faq-section {
            flex: 1 !important;
            max-width: 50% !important;
          }
        }
        
        /* Tablet Layout */
        @media (max-width: 768px) and (min-width: 481px) {
          .testimonials-faq-container {
            gap: 2.5rem !important;
          }
          
          .max-w-7xl {
            padding: 0 2rem !important;
          }
        }
        
        /* Mobile Layout */
        @media (max-width: 480px) {
          .testimonials-faq-container {
            gap: 2rem !important;
          }
          
          .max-w-7xl {
            padding: 0 1rem !important;
          }
          
          /* Adjust font sizes for mobile */
          h2 {
            font-size: 1.5rem !important;
            line-height: 1.3 !important;
          }
          
          /* Make cards more compact on mobile */
          div[style*="padding: 2rem"] {
            padding: 1.25rem !important;
          }
          
          div[style*="padding: 1.25rem"] {
            padding: 1rem !important;
          }
          
          /* Adjust button sizes for mobile */
          button {
            min-height: 44px !important;
          }
          
          /* Stack client info on very small screens */
          div[style*="display: flex"][style*="alignItems: center"][style*="gap: 1rem"] {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.75rem !important;
          }
          
          /* Center testimonial content on mobile */
          .testimonials-section {
            text-align: center;
          }
          
          .faq-section {
            text-align: left;
          }
        }
        
        /* Very small screens */
        @media (max-width: 360px) {
          .max-w-7xl {
            padding: 0 0.75rem !important;
          }
          
          div[style*="borderRadius: 20px"] {
            border-radius: 12px !important;
          }
          
          div[style*="borderRadius: 12px"] {
            border-radius: 8px !important;
          }
        }
        
        /* Landscape mobile */
        @media (max-width: 768px) and (orientation: landscape) {
          section {
            padding: 2rem 1rem !important;
          }
        }
        
        /* High DPI screens */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          div[style*="textShadow"] {
            text-shadow: 0 0.5px 1.5px rgba(0,0,0,0.1) !important;
          }
        }
        
        /* Ensure proper spacing */
        .testimonials-section,
        .faq-section {
          min-width: 0; /* Prevent flex items from overflowing */
        }
        
        /* Fix for clamp values on older browsers */
        @supports not (width: clamp(1rem, 5vw, 2rem)) {
          @media (max-width: 480px) {
            h2 {
              font-size: 1.5rem !important;
            }
            
            p {
              font-size: 0.9rem !important;
            }
          }
          
          @media (min-width: 481px) and (max-width: 768px) {
            h2 {
              font-size: 2rem !important;
            }
          }
          
          @media (min-width: 769px) {
            h2 {
              font-size: 2.4rem !important;
            }
          }
        }
      `}</style>
    </section>
  );
}

// ── Landing Footer ───────────────────────────────────────────────
function LandingFooter() {
  return (
    <footer style={{ 
      background: '#f8fafc', 
      color: '#374151', 
      padding: '3rem 1rem 2rem', 
      textAlign: 'center', 
      position: 'relative', 
      zIndex: 9999,
      marginTop: '0',
      clear: 'both',
      display: 'block',
      width: '100%',
      minHeight: '100px',
      visibility: 'visible',
      opacity: 1
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2rem' }}>
          <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0, fontWeight: 500, letterSpacing: '0.3px' }}>
            2024 Kashish Joshi Research. All rights reserved. | SEBI Registration No: INH000017240
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── Main Export ──────────────────────────────────────────────────
export default function IntradayLanding() {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <DisclaimerTicker />
      <LandingHeader />
      
      
      

      {/* 1. Hero with embedded form */}
      <HeroSection />

      {/* 3. Quality Services tabbed section */}
      <ServiceSignals />

      
              
  
        
      {/* 5. Our Clients Profit */}
      <OurClientsProfit />

      {/* 5. Why Choose Us */}
      <WhyChooseUs />

      {/* 7. Methodology */}
      <Methodology />

      {/* 8. Testimonials
      <Testimonials /> */}

      {/* 9. Register Form
      <RegisterForm /> */}

      {/* 10. Blog */}
      {/* <BlogSection /> */}

      {/* 11. FAQ */}
      {/* <FaqSection /> */}
      <TestimonialsFaq />
      {/* 12. CTA */}
      <section style={{
        position: 'relative', padding: '4rem 1rem',
        backgroundImage: 'url("/assets/images/inner-banner - Stock Cash.png")',
        backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(3,16,49,0.60) 0%, rgba(26,58,110,0.55) 100%)' }} />
        <div className="max-w-7xl mx-auto px-4 text-center text-white" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready to Start Trading Smarter?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', marginBottom: '1.75rem' }}>Get in touch with our experts today.</p>
          <a href="#demo-form" style={{
            display: 'inline-block', background: '#fff', color: '#031031',
            fontWeight: 700, padding: '0.75rem 2rem', borderRadius: '8px',
            textDecoration: 'none', fontSize: '0.95rem',
          }}>
            Get Free Consultation
          </a>
        </div>
      </section>
      <LandingFooter />
      <WhatsAppButton />
    </div>
  );
}