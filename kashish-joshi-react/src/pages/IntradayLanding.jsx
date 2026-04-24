import { useState } from 'react';
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

const RESEARCH_STEPS = [
  { num: '01', title: 'Technical Analysis', desc: 'In-depth technical analysis using charts and indicators to identify high-probability trading opportunities.' },
  { num: '02', title: 'Market Structure & Trend Identification', desc: 'Analysis of market structure and trend direction to align trades with overall market momentum.' },
  { num: '03', title: 'Price Action & Volume Analysis', desc: 'Price action and volume-based analysis to confirm strength, weakness, and potential reversals.' },
  { num: '04', title: 'Risk-Reward Optimization', desc: 'Every trade is planned with optimized risk-to-reward ratios to prioritize capital protection and consistency.' },
];

// ── Landing Header ──────────────────────────────────────────────
function LandingHeader() {
  return (
    <header style={{ background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 999 }}>
      <div style={{ background: '#031031', padding: '0.35rem 1rem', textAlign: 'center' }}>
        <span style={{ color: '#00A651', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em' }}>
          TRUSTED SEBI REGISTERED RESEARCH ANALYST | INH000017240
        </span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '0.6rem 1rem' }}>
        <Link to="/"><img src="/assets/images/logoo2.png" alt="Kashish Joshi Research" style={{ height: '52px' }} /></Link>
      </div>
    </header>
  );
}

// ── Hero with inline form ────────────────────────────────────────
function HeroSection() {
  const [form, setForm] = useState({ name: '', number: '', email: '', investment: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.number) { alert('Please enter Name and Phone.'); return; }
    setLoading(true);
    try {
      await submitLandingLead({ name: form.name, number: form.number, email: form.email, segment: form.investment || 'General' });
      window.location.href = '/thankyou';
    } catch { alert('Submission failed. Please try again.'); }
    finally { setLoading(false); }
  };

  const inp = { width: '100%', border: '1px solid #ddd', borderRadius: '8px', padding: '0.65rem 0.9rem', fontSize: '0.85rem', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit', color: '#333', background: '#fff' };

  return (
    <section style={{ position: 'relative', minHeight: '520px', display: 'flex', alignItems: 'center', backgroundImage: `url("${HERO_BG}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(3,16,49,0.80)' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1100px', margin: '0 auto', padding: '3.5rem 1rem', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div style={{ color: '#fff' }}>
            <p style={{ color: '#00A651', fontWeight: 600, letterSpacing: '0.15em', fontSize: '0.72rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>SEBI Registered Research Analyst</p>
            <h1 style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1.2, marginBottom: '1rem' }}>Market-Leading Options Research &amp; Trading Insights</h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', fontWeight: 300, marginBottom: '1.5rem', lineHeight: 1.7 }}>Advanced Technical Analysis for Timely, High-Confidence Trading Decisions</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
              {['Free Trading Calls (Demo Access)', 'Live Buy / Sell Levels with Stop Loss', 'SEBI-Registered Research Firm'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}>
                  <i className="fas fa-check-circle" style={{ color: '#00A651', flexShrink: 0 }}></i>
                  <span style={{ color: 'rgba(255,255,255,0.9)' }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#demo-form" style={{ background: '#00A651', color: '#fff', fontWeight: 600, padding: '0.75rem 2rem', borderRadius: '6px', textDecoration: 'none', fontSize: '0.9rem' }}>Who We Are</a>
              <a href="#demo-form" style={{ border: '2px solid rgba(255,255,255,0.6)', color: '#fff', fontWeight: 600, padding: '0.75rem 2rem', borderRadius: '6px', textDecoration: 'none', fontSize: '0.9rem' }}>Quick Enquiry</a>
            </div>
          </div>
          <div id="demo-form" style={{ background: '#fff', borderRadius: '16px', padding: '1.75rem', boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', border: '1px solid #c9a84c', borderRadius: '999px', padding: '0.25rem 0.85rem', marginBottom: '0.85rem' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#00A651', display: 'inline-block' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#c9a84c' }}>Secure Enquiry</span>
            </div>
            <h3 style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '1.2rem', fontWeight: 600, color: '#1a1a2e', marginBottom: '0.2rem' }}>FREE Demo (Tips / Calls)</h3>
            <p style={{ color: '#888', fontSize: '0.75rem', marginBottom: '1.25rem' }}>SEBI Registration : INH000017240</p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <input type="text" placeholder="Your Name *" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} style={inp} />
              <input type="tel" placeholder="Your Phone *" required maxLength={10} value={form.number} onChange={e => setForm(f => ({ ...f, number: e.target.value.replace(/\D/, '') }))} style={inp} />
              <input type="email" placeholder="Your Email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} style={inp} />
              <div style={{ position: 'relative' }}>
                <select value={form.investment} onChange={e => setForm(f => ({ ...f, investment: e.target.value }))} style={{ ...inp, appearance: 'none', color: form.investment ? '#333' : '#aaa' }}>
                  <option value="">Investment Amount</option>
                  <option>0-50K</option>
                  <option>50K-1L</option>
                  <option>1L-2L</option>
                  <option>Custom</option>
                </select>
                <i className="fas fa-chevron-down" style={{ position: 'absolute', right: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: '#555', fontSize: '0.72rem', pointerEvents: 'none' }} />
              </div>
              <button type="submit" disabled={loading} style={{ background: '#00A651', color: '#fff', border: 'none', borderRadius: '8px', padding: '0.75rem', fontWeight: 700, fontSize: '0.88rem', cursor: 'pointer', opacity: loading ? 0.7 : 1, letterSpacing: '0.05em' }}>
                {loading ? 'SUBMITTING...' : 'SUBMIT NOW'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
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

// ── Research Approach ────────────────────────────────────────────
function ResearchApproach() {
  return (
    <section style={{ background: '#eef1f8', padding: '4rem 1rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ fontSize: '0.68rem', fontWeight: 700, color: '#888', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>WORK PROCESS</p>
        <h2 style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 400, color: '#1a1a2e', marginBottom: '2.5rem' }}>Our Research Approach</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '1.5rem' }}>
          {RESEARCH_STEPS.map((step, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '14px', padding: '1.5rem', boxShadow: '0 2px 12px rgba(3,16,49,0.07)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg,#031031,#1a3a6e)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <span style={{ color: '#fff', fontWeight: 800, fontSize: '0.85rem' }}>{step.num}</span>
              </div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.5rem' }}>{step.title}</h4>
              <p style={{ fontSize: '0.82rem', color: '#666', lineHeight: 1.75, margin: 0 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
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

// ── Landing Footer ───────────────────────────────────────────────
function LandingFooter() {
  return (
    <>
      <footer style={{ background: '#031031', color: '#fff', padding: '3rem 1rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem' }}>
          <div>
            <Link to="/"><img src="/assets/images/logoo2.png" alt="logo" style={{ width: '110px', marginBottom: '0.75rem' }} /></Link>
            <p style={{ fontSize: '0.8rem', color: '#bbb', lineHeight: 1.8 }}>SEBI-registered research analyst providing expert trading guidance for Indian traders and investors.</p>
          </div>
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', color: '#aaa', textTransform: 'uppercase', marginBottom: '0.75rem' }}>QUICK LINKS</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[['/', 'Home'], ['/about', 'About Us'], ['/contact', 'Contact'], ['/privacy-policy', 'Privacy Policy'], ['/terms-condition', 'Terms & Conditions'], ['/our-disclaimer', 'Disclaimer']].map(([to, label]) => (
                <Link key={to} to={to} style={{ fontSize: '0.82rem', color: '#ccc', textDecoration: 'none' }}>{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', color: '#aaa', textTransform: 'uppercase', marginBottom: '0.75rem' }}>CONTACT US</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.82rem', color: '#ccc' }}>
              <p style={{ margin: 0 }}>SEBI Reg No: INH000017240</p>
              <a href="mailto:info@kashishjoshiresearch.com" style={{ color: '#ccc', textDecoration: 'none' }}>info@kashishjoshiresearch.com</a>
              <a href="tel:+919171718451" style={{ color: '#ccc', textDecoration: 'none' }}>+91 91717 18451</a>
              <p style={{ margin: 0 }}>Hiran Magri, Udaipur, Rajasthan – 313002</p>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: '1100px', margin: '2rem auto 0', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem', textAlign: 'center', fontSize: '0.78rem', color: '#888' }}>
          © 2025 <span style={{ color: '#00A651', fontWeight: 600 }}>Kashish Joshi Research</span>. All rights reserved.
        </div>
      </footer>
      <div style={{ background: '#f0f4f0', padding: '1.5rem 1rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', color: '#555', lineHeight: 1.75, margin: 0 }}>
            Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI, membership of BASL and certification from NISM in no way guarantees performance of the intermediary or provide any assurance of returns to investors.
          </p>
        </div>
      </div>
    </>
  );
}

// ── Main Export ──────────────────────────────────────────────────
export default function IntradayLanding() {
  return (
    <div>
      <LandingHeader />
      <DisclaimerTicker />
      

      {/* 1. Hero with embedded form */}
      <HeroSection />

      {/* 3. Quality Services tabbed section */}
      <ServiceSignals />

      {/* 4. Research Approach */}
      <ResearchApproach />

      {/* 5. Why Choose Us */}
      <WhyChooseUs />

      {/* 7. Methodology */}
      <Methodology />

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 9. Register Form */}
      <RegisterForm />

      {/* 10. Blog */}
      <BlogSection />

      {/* 11. FAQ */}
      <FaqSection />

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