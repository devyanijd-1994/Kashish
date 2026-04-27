import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import EnquiryModal from '../components/EnquiryModal';

const T = {
  navy: '#1e3a8a', navyDark: '#0f172a', navyMid: '#1e40af',
  green: '#22c55e', greenDark: '#16a34a',
  greenSoft: 'rgba(34,197,94,0.10)', greenBorder: 'rgba(34,197,94,0.30)',
  white: '#ffffff', slate50: '#f8fafc', slate100: '#f1f5f9',
  slate200: '#e2e8f0', slate400: '#94a3b8', slate600: '#475569',
  slate700: '#334155', slate800: '#1e293b',
};

const allServices = [
  { label: 'Stock Cash',                to: '/stock-cash',              icon: 'fas fa-chart-line' },
  { label: 'Option',                    to: '/option',                  icon: 'fas fa-layer-group' },
  { label: 'Future',                    to: '/future',                  icon: 'fas fa-rocket' },
  { label: 'Banknifty / Nifty Options', to: '/banknifty-nifty-option',  icon: 'fas fa-university' },
  { label: 'Banknifty / Nifty Future',  to: '/banknifty-nifty-future',  icon: 'fas fa-chart-bar' },
  { label: 'Systematic Trading Plan',   to: '/systematic-trading-plan', icon: 'fas fa-sitemap' },
  { label: 'Commodity Services',        to: '/commodity-services',      icon: 'fas fa-coins' },
];

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); io.disconnect(); } }, { threshold: 0.07 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(28px)', transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

/* ── Hero ── */
function Hero({ title, heroImage, badge, subtitle }) {
  const [v, setV] = useState(false);
  useEffect(() => { setTimeout(() => setV(true), 60); }, []);
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '380px' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg,rgba(15,23,42,0.93) 0%,rgba(30,58,138,0.82) 55%,rgba(22,163,74,0.55) 100%)' }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '380px' }}>
        {/* badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', borderRadius: '30px', background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.35)', marginBottom: '20px', width: 'fit-content', opacity: v ? 1 : 0, transform: v ? 'translateY(0)' : 'translateY(16px)', transition: 'all 0.6s ease 0s' }}>
          <i className={badge?.icon || 'fas fa-shield-halved'} style={{ color: T.green, fontSize: '12px' }} />
          <span style={{ color: T.green, fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em' }}>{badge?.text || 'SEBI Registered Research Analyst'}</span>
        </div>
        {/* title */}
        <h1 style={{ color: T.white, fontWeight: 800, fontSize: 'clamp(2rem,4.5vw,3.2rem)', lineHeight: 1.15, marginBottom: '16px', letterSpacing: '-0.02em', maxWidth: '700px', opacity: v ? 1 : 0, transform: v ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease 0.1s' }}>
          {title} <span style={{ color: T.green, textShadow: '0 0 32px rgba(34,197,94,0.5)' }}>Signal Services</span>
        </h1>
        {/* subtitle */}
        <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.05rem', maxWidth: '580px', lineHeight: 1.7, marginBottom: '28px', opacity: v ? 1 : 0, transform: v ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease 0.18s' }}>
          {subtitle || 'High performance efficiency · WhatsApp / SMS / App · 80–90% accuracy'}
        </p>
        {/* pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px', opacity: v ? 1 : 0, transition: 'all 0.6s ease 0.26s' }}>
          {[{ icon: 'fas fa-chart-line', label: '80–90% Accuracy' }, { icon: 'fas fa-bell', label: 'Daily Signals' }, { icon: 'fas fa-shield-halved', label: 'SEBI Registered' }, { icon: 'fas fa-headset', label: '24/7 Support' }].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 16px', borderRadius: '20px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)' }}>
              <i className={s.icon} style={{ color: T.green, fontSize: '11px' }} />
              <span style={{ color: T.white, fontSize: '12px', fontWeight: 600 }}>{s.label}</span>
            </div>
          ))}
        </div>
        {/* breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', opacity: v ? 1 : 0, transition: 'all 0.6s ease 0.32s' }}>
          <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color = T.green} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}>
            <i className="fas fa-house" style={{ fontSize: '11px', marginRight: '4px' }} />Home
          </Link>
          <i className="fas fa-chevron-right" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '9px' }} />
          <span style={{ color: 'rgba(255,255,255,0.5)' }}>Services</span>
          <i className="fas fa-chevron-right" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '9px' }} />
          <span style={{ color: T.green, fontWeight: 600 }}>{title}</span>
        </div>
      </div>
    </section>
  );
}

/* ── Pricing Table ── */
function PricingTable({ pricing, onEnquire }) {
  const [active, setActive] = useState(0);
  const plan = pricing[active];
  const parse = s => { const n = parseFloat(String(s).replace(/[^0-9.]/g, '')); return isNaN(n) ? 0 : n; };
  return (
    <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(30,58,138,0.10)', border: `1px solid ${T.slate200}` }}>
      {pricing.length > 1 && (
        <div style={{ display: 'flex' }}>
          {pricing.map((p, i) => (
            <button key={i} onClick={() => setActive(i)} style={{ flex: 1, padding: '12px 8px', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', border: 'none', cursor: 'pointer', transition: 'all 0.2s', background: active === i ? `linear-gradient(135deg,${T.navy},${T.navyMid})` : T.slate50, color: active === i ? T.white : T.slate600, borderBottom: active === i ? 'none' : `1px solid ${T.slate200}` }}>
              {p.name}
            </button>
          ))}
        </div>
      )}
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr 1.1fr', padding: '12px 20px', background: `linear-gradient(90deg,${T.navyDark},${T.navy})`, color: T.white, fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        <span>Period</span><span style={{ textAlign: 'center' }}>Amount</span><span style={{ textAlign: 'center' }}>GST 18%</span><span style={{ textAlign: 'right', color: T.green }}>Total</span>
      </div>
      {plan.tiers.map((t, i) => {
        const amt = parse(t.price), gst = Math.round(amt * 0.18), fin = amt + gst;
        return (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr 1.1fr', padding: '13px 20px', fontSize: '14px', borderBottom: `1px solid ${T.slate100}`, background: i % 2 === 0 ? T.white : T.slate50, alignItems: 'center', transition: 'background 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(34,197,94,0.06)'}
            onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? T.white : T.slate50}>
            <span style={{ fontWeight: 700, color: T.slate700 }}>{t.duration}</span>
            <span style={{ textAlign: 'center', color: T.slate600 }}>₹{amt.toLocaleString('en-IN')}</span>
            <span style={{ textAlign: 'center', color: T.slate400 }}>₹{gst.toLocaleString('en-IN')}</span>
            <span style={{ textAlign: 'right', fontWeight: 800, color: T.greenDark }}>₹{fin.toLocaleString('en-IN')}</span>
          </div>
        );
      })}
      <div style={{ padding: '14px 20px', background: T.slate50, borderTop: `1px solid ${T.slate200}` }}>
        <p style={{ fontSize: '12px', color: T.slate400, marginBottom: '12px' }}>* GST @18% as per govt. norms. All prices in INR.</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={onEnquire} style={{ flex: 1, padding: '12px', borderRadius: '10px', fontSize: '14px', fontWeight: 700, color: T.white, background: `linear-gradient(135deg,${T.green},${T.greenDark})`, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', transition: 'all 0.2s', boxShadow: '0 3px 10px rgba(34,197,94,0.3)' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(34,197,94,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 3px 10px rgba(34,197,94,0.3)'; }}>
            <i className="fas fa-paper-plane" style={{ fontSize: '11px' }} /> Subscribe Now
          </button>
          <a href="tel:+919171718451" style={{ flex: 1, padding: '12px', borderRadius: '10px', fontSize: '14px', fontWeight: 700, color: T.white, background: `linear-gradient(135deg,${T.navyDark},${T.navy})`, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', transition: 'all 0.2s', boxShadow: '0 3px 10px rgba(30,58,138,0.25)' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(30,58,138,0.35)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 3px 10px rgba(30,58,138,0.25)'; }}>
            <i className="fas fa-phone" style={{ fontSize: '11px' }} /> Call Expert
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── FAQ ── */
function FAQ({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {items.map((item, i) => (
        <div key={i} style={{ borderRadius: '12px', overflow: 'hidden', border: `1px solid ${open === i ? T.greenBorder : T.slate200}`, transition: 'all 0.2s', boxShadow: open === i ? '0 4px 16px rgba(34,197,94,0.10)' : 'none' }}>
          <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', fontSize: '14px', fontWeight: 700, textAlign: 'left', background: open === i ? 'rgba(34,197,94,0.06)' : T.white, color: T.slate800, border: 'none', cursor: 'pointer', gap: '8px', transition: 'background 0.2s' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fas fa-circle-question" style={{ color: T.green, fontSize: '14px', flexShrink: 0 }} />{item.q}
            </span>
            <i className={`fas fa-chevron-${open === i ? 'up' : 'down'}`} style={{ color: T.navy, fontSize: '10px', flexShrink: 0, transition: 'transform 0.25s' }} />
          </button>
          <div style={{ maxHeight: open === i ? '300px' : '0', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
            <div style={{ padding: '14px 20px 16px 44px', fontSize: '14px', lineHeight: 1.75, color: T.slate600, background: 'rgba(34,197,94,0.03)', borderTop: `1px solid ${T.greenBorder}` }}>{item.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Main Export ── */
export default function ServiceDetail({
  title, heroImage, badge, subtitle,
  overview, whoShouldSubscribe, features,
  instruments, whyItWorks, pricing, whyChooseUs, faq,
}) {
  const [showModal, setShowModal] = useState(false);
  const defaultFaq = [
    { q: `What is ${title} and what are its advantages?`, a: `${title} service provides expert research-backed trading recommendations. Our SEBI registered analysts monitor markets closely to deliver timely entry, exit, and stop-loss levels so you can trade with confidence and discipline.` },
    { q: `${title} results with Kashish Joshi Research`, a: `Our ${title} service has consistently delivered 80–90% performance efficiency. We track every call transparently and our clients have seen steady returns by following our disciplined research-driven approach.` },
    { q: `Why you need ${title} recommendations?`, a: `Markets are complex and fast-moving. Expert ${title} recommendations save you time, reduce emotional trading, and give you a structured edge backed by technical and fundamental research from SEBI registered analysts.` },
  ];
  const faqs = faq || defaultFaq;

  return (
    <>
      <style>{`
        @keyframes sdIn { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulseDot { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.5);opacity:0.5} }
        .sd-svc-link { transition: all 0.18s !important; }
        .sd-svc-link:hover { padding-left: 22px !important; color: #22c55e !important; }
        .sd-feat-item { transition: all 0.18s; }
        .sd-feat-item:hover { background: rgba(34,197,94,0.08) !important; border-color: rgba(34,197,94,0.4) !important; transform: translateX(4px); }
        @media (max-width: 768px) {
          .sd-layout { flex-direction: column !important; }
          .sd-sidebar { width: 100% !important; position: static !important; }
          .sd-main { min-width: 0 !important; }
          .sd-action-bar-text { display: none !important; }
          .sd-hero-padding { padding: 2rem 1rem !important; }
          .sd-feat-grid { grid-template-columns: 1fr !important; }
          .sd-why-grid { grid-template-columns: 1fr !important; }
          .sd-pricing-cols { grid-template-columns: 1fr 1fr !important; }
          .sd-cta-btns { flex-direction: column !important; }
        }
        @media (max-width: 480px) {
          .sd-pricing-cols { grid-template-columns: 1fr !important; }
          .sd-pills { display: none !important; }
        }
      `}</style>

      <Hero title={title} heroImage={heroImage} badge={badge} subtitle={subtitle} />

      {/* ── sticky action bar ── */}
      <div style={{ background: `linear-gradient(90deg,${T.navyDark},${T.navy})`, padding: '10px 0', borderBottom: `3px solid ${T.green}`, position: 'sticky', top: 0, zIndex: 40 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => setShowModal(true)} style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '9px 22px', borderRadius: '22px', fontSize: '13px', fontWeight: 700, color: T.white, background: `linear-gradient(135deg,${T.green},${T.greenDark})`, border: 'none', cursor: 'pointer', boxShadow: '0 2px 10px rgba(34,197,94,0.35)', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 5px 18px rgba(34,197,94,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(34,197,94,0.35)'; }}>
              <i className="fas fa-paper-plane" style={{ fontSize: '11px' }} /> Subscribe Now
            </button>
            <a href="tel:+919171718451" style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '9px 22px', borderRadius: '22px', fontSize: '13px', fontWeight: 700, color: T.navy, background: T.white, textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}>
              <i className="fas fa-phone" style={{ fontSize: '11px' }} /> Call Us
            </a>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '7px' }} className="sd-action-bar-text">
            <i className="fas fa-headset" style={{ color: T.green }} />
            Expert Support: <strong style={{ color: T.white }}>+91 91717 18451</strong>
          </span>
        </div>
      </div>

      {/* ── page body ── */}
      <div style={{ background: 'linear-gradient(180deg,#f0f7ff 0%,#f8fafc 100%)', padding: '32px 0 56px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }} className="sd-layout">

          {/* ── SIDEBAR ── */}
          <aside style={{ width: '250px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '16px', position: 'sticky', top: '64px' }} className="sd-sidebar">
            <Reveal delay={0}>
              <div style={{ background: T.white, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(30,58,138,0.08)', border: `1px solid ${T.slate200}` }}>
                <div style={{ padding: '12px 16px', background: `linear-gradient(135deg,${T.navyDark},${T.navy})`, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fas fa-th-list" style={{ color: T.green, fontSize: '11px' }} />
                  <span style={{ color: T.white, fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em' }}>Our Services</span>
                </div>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {allServices.map(s => {
                    const isActive = s.label === title;
                    return (
                      <li key={s.to} style={{ borderBottom: `1px solid ${T.slate100}` }}>
                        <Link to={s.to} className="sd-svc-link" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', fontSize: '14px', fontWeight: 600, textDecoration: 'none', background: isActive ? `linear-gradient(90deg,${T.green},${T.greenDark})` : 'transparent', color: isActive ? T.white : T.slate700 }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                            <i className={s.icon} style={{ fontSize: '13px', color: isActive ? T.white : T.green, width: '15px' }} />{s.label}
                          </span>
                          <i className="fas fa-chevron-right" style={{ fontSize: '8px', opacity: 0.4 }} />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div style={{ background: T.white, borderRadius: '16px', padding: '20px', textAlign: 'center', boxShadow: '0 4px 20px rgba(30,58,138,0.08)', border: `1px solid ${T.slate200}` }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: `linear-gradient(135deg,${T.navy},${T.navyMid})`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', boxShadow: '0 4px 14px rgba(30,58,138,0.28)' }}>
                  <i className="fas fa-shield-halved" style={{ color: T.green, fontSize: '20px' }} />
                </div>
                <p style={{ fontSize: '15px', fontWeight: 800, color: T.navyDark, margin: '0 0 3px' }}>SEBI Registered</p>
                <p style={{ fontSize: '13px', color: T.slate400, margin: '0 0 10px' }}>Research Analyst</p>
                <span style={{ display: 'inline-block', padding: '5px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 700, background: `linear-gradient(135deg,${T.navy},${T.navyMid})`, color: T.white }}>INH000017240</span>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div style={{ borderRadius: '16px', padding: '20px', background: `linear-gradient(160deg,${T.navyDark},${T.navy})`, textAlign: 'center', boxShadow: '0 4px 20px rgba(30,58,138,0.25)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', marginBottom: '8px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: T.green, display: 'inline-block', animation: 'pulseDot 1.7s ease infinite' }} />
                  <span style={{ color: T.green, fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Experts Online</span>
                </div>
                <p style={{ color: T.slate400, fontSize: '13px', marginBottom: '14px', lineHeight: 1.5 }}>Get a free consultation today</p>
                <a href="tel:+919171718451" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', padding: '11px', borderRadius: '10px', fontSize: '13px', fontWeight: 700, color: T.white, background: `linear-gradient(135deg,${T.green},${T.greenDark})`, textDecoration: 'none', marginBottom: '10px', boxShadow: '0 3px 12px rgba(34,197,94,0.35)', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(34,197,94,0.45)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 3px 12px rgba(34,197,94,0.35)'; }}>
                  <i className="fas fa-phone" style={{ fontSize: '12px' }} /> +91 91717 18451
                </a>
                <button onClick={() => setShowModal(true)} style={{ width: '100%', padding: '11px', borderRadius: '10px', fontSize: '13px', fontWeight: 700, color: T.green, background: 'transparent', border: `1px solid ${T.greenBorder}`, cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = T.green; e.currentTarget.style.color = T.white; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = T.green; }}>
                  Enquire Now
                </button>
              </div>
            </Reveal>
          </aside>

          {/* ── MAIN CONTENT ── */}
          <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '20px' }} className="sd-main">

            {/* Overview */}
            <Reveal delay={40}>
              <div style={{ background: T.white, borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(30,58,138,0.08)', border: `1px solid ${T.slate200}` }}>
                <div style={{ padding: '20px 28px 0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <div style={{ width: '28px', height: '3px', background: `linear-gradient(90deg,${T.green},${T.navy})`, borderRadius: '2px' }} />
                    <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: T.green }}>Expert Recommendations</span>
                  </div>
                  <h2 style={{ fontSize: 'clamp(1.2rem,2.5vw,1.7rem)', fontWeight: 800, color: T.navyDark, lineHeight: 1.3, marginBottom: '16px' }}>
                    Get Intraday {title} Recommendations From <span style={{ color: T.navy }}>Experts at Kashish Joshi Research</span>
                  </h2>
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
                    <button onClick={() => setShowModal(true)} style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '10px 24px', borderRadius: '10px', fontSize: '14px', fontWeight: 700, color: T.white, background: `linear-gradient(135deg,${T.green},${T.greenDark})`, border: 'none', cursor: 'pointer', boxShadow: '0 3px 12px rgba(34,197,94,0.3)', transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(34,197,94,0.4)'; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 3px 12px rgba(34,197,94,0.3)'; }}>
                      <i className="fas fa-paper-plane" style={{ fontSize: '12px' }} /> Subscribe Now
                    </button>
                    <a href="tel:+919171718451" style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '10px 24px', borderRadius: '10px', fontSize: '14px', fontWeight: 700, color: T.white, background: `linear-gradient(135deg,${T.navyDark},${T.navy})`, textDecoration: 'none', boxShadow: '0 3px 12px rgba(30,58,138,0.25)', transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(30,58,138,0.35)'; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 3px 12px rgba(30,58,138,0.25)'; }}>
                      <i className="fas fa-phone" style={{ fontSize: '12px' }} /> Call Expert
                    </a>
                  </div>
                  <p style={{ fontSize: '15px', lineHeight: 1.78, color: T.slate600, marginBottom: '20px' }}>{overview}</p>
                  {whoShouldSubscribe && (
                    <div style={{ borderRadius: '12px', padding: '16px 18px', background: 'linear-gradient(135deg,rgba(34,197,94,0.06),rgba(30,58,138,0.04))', borderLeft: `4px solid ${T.green}`, marginBottom: '20px' }}>
                      <p style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: T.green, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <i className="fas fa-user-check" /> Who Should Subscribe?
                      </p>
                      <p style={{ fontSize: '14px', lineHeight: 1.72, color: T.slate600, margin: 0 }}>{whoShouldSubscribe}</p>
                    </div>
                  )}
                </div>
                {features && (
                  <div style={{ padding: '0 28px 24px' }}>
                    <p style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: T.slate800, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '7px' }}>
                      <i className="fas fa-list-check" style={{ color: T.green }} /> Service Features
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: '8px' }} className="sd-feat-grid">
                      {features.map((f, i) => (
                        <div key={i} className="sd-feat-item" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', borderRadius: '10px', background: T.slate50, border: `1px solid ${T.slate200}`, fontSize: '14px', color: T.slate700 }}>
                          <i className="fas fa-circle-check" style={{ color: T.green, fontSize: '14px', flexShrink: 0 }} />{f}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Reveal>

            {/* Why It Works */}
            {whyItWorks && (
              <Reveal delay={80}>
                <div style={{ background: T.white, borderRadius: '20px', padding: '24px 28px', boxShadow: '0 4px 24px rgba(30,58,138,0.08)', border: `1px solid ${T.slate200}` }}>
                  <p style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: T.green, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '7px' }}>
                    <i className="fas fa-bolt" /> Why It Works
                  </p>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: T.navyDark, marginBottom: '20px' }}>What Makes Our {title} Service Stand Out</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '14px' }} className="sd-why-grid">
                    {whyItWorks.map((w, i) => (
                      <div key={i} style={{ padding: '18px', borderRadius: '14px', background: 'linear-gradient(135deg,#f0f7ff,#f8fafc)', border: `1px solid ${T.slate200}`, transition: 'all 0.2s' }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(30,58,138,0.12)'; e.currentTarget.style.borderColor = T.greenBorder; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = T.slate200; }}>
                        <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: `linear-gradient(135deg,${T.navy},${T.navyMid})`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', boxShadow: '0 4px 12px rgba(30,58,138,0.2)' }}>
                          <i className={w.icon} style={{ color: T.green, fontSize: '16px' }} />
                        </div>
                        <p style={{ fontSize: '14px', fontWeight: 700, color: T.navyDark, marginBottom: '5px' }}>{w.label}</p>
                        <p style={{ fontSize: '13px', color: T.slate600, lineHeight: 1.6, margin: 0 }}>{w.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {/* Instruments */}
            {instruments && (
              <Reveal delay={100}>
                <div style={{ background: T.white, borderRadius: '20px', padding: '24px 28px', boxShadow: '0 4px 24px rgba(30,58,138,0.08)', border: `1px solid ${T.slate200}` }}>
                  <p style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: T.green, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '7px' }}>
                    <i className="fas fa-layer-group" /> Coverage
                  </p>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: T.navyDark, marginBottom: '20px' }}>{instruments.heading}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '14px' }}>
                    {instruments.items.map((item, i) => (
                      <div key={i} style={{ padding: '18px', borderRadius: '14px', background: `linear-gradient(135deg,rgba(34,197,94,0.05),rgba(30,58,138,0.03))`, border: `1px solid ${T.greenBorder}`, transition: 'all 0.2s' }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(34,197,94,0.12)'; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                        <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: `linear-gradient(135deg,${T.green},${T.greenDark})`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', boxShadow: '0 4px 12px rgba(34,197,94,0.25)' }}>
                          <i className={item.icon} style={{ color: T.white, fontSize: '16px' }} />
                        </div>
                        <p style={{ fontSize: '14px', fontWeight: 700, color: T.navyDark, marginBottom: '5px' }}>{item.name}</p>
                        <p style={{ fontSize: '13px', color: T.slate600, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {/* Pricing */}
            {pricing && (
              <Reveal delay={120}>
                <div style={{ background: T.white, borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(30,58,138,0.08)', border: `1px solid ${T.slate200}` }}>
                  <div style={{ padding: '16px 24px', background: `linear-gradient(135deg,${T.navyDark},${T.navy})`, display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-tags" style={{ color: T.green, fontSize: '14px' }} />
                    <span style={{ color: T.white, fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Pricing Plans</span>
                    <span style={{ marginLeft: 'auto', padding: '4px 14px', borderRadius: '20px', fontSize: '11px', fontWeight: 700, background: 'rgba(34,197,94,0.15)', color: T.green, border: `1px solid ${T.greenBorder}` }}>GST Inclusive</span>
                  </div>
                  <div style={{ padding: '20px' }}>
                    <PricingTable pricing={pricing} onEnquire={() => setShowModal(true)} />
                  </div>
                </div>
              </Reveal>
            )}

            {/* Why Choose Us */}
            {whyChooseUs && (
              <Reveal delay={140}>
                <div style={{ background: `linear-gradient(135deg,${T.navyDark},${T.navy})`, borderRadius: '20px', padding: '28px', boxShadow: '0 4px 24px rgba(30,58,138,0.2)' }}>
                  <p style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: T.green, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '7px' }}>
                    <i className="fas fa-star" /> Why Choose Us
                  </p>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: T.white, marginBottom: '20px' }}>Why Traders Trust Kashish Joshi Research</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: '10px' }}>
                    {whyChooseUs.map((w, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '14px 16px', borderRadius: '12px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.2s' }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(34,197,94,0.1)'; e.currentTarget.style.borderColor = T.greenBorder; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}>
                        <i className="fas fa-circle-check" style={{ color: T.green, fontSize: '15px', flexShrink: 0, marginTop: '1px' }} />
                        <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>{w}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {/* FAQ */}
            <Reveal delay={160}>
              <div style={{ background: T.white, borderRadius: '20px', padding: '24px 28px', boxShadow: '0 4px 24px rgba(30,58,138,0.08)', border: `1px solid ${T.slate200}` }}>
                <p style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: T.green, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <i className="fas fa-circle-question" /> FAQ
                </p>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: T.navyDark, marginBottom: '20px' }}>Frequently Asked Questions</h3>
                <FAQ items={faqs} />
              </div>
            </Reveal>

            {/* Bottom CTA */}
            <Reveal delay={180}>
              <div style={{ borderRadius: '20px', padding: '32px', background: `linear-gradient(135deg,${T.green},${T.greenDark})`, textAlign: 'center', boxShadow: '0 8px 32px rgba(34,197,94,0.3)' }}>
                <i className="fas fa-rocket" style={{ color: T.white, fontSize: '28px', marginBottom: '12px', display: 'block' }} />
                <h3 style={{ color: T.white, fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>Ready to Start Trading Smarter?</h3>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', marginBottom: '20px', lineHeight: 1.6 }}>Join thousands of traders who trust Kashish Joshi Research for consistent, research-backed signals.</p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }} className="sd-cta-btns">
                  <button onClick={() => setShowModal(true)} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 28px', borderRadius: '12px', fontSize: '15px', fontWeight: 700, color: T.green, background: T.white, border: 'none', cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.15)', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)'; }}>
                    <i className="fas fa-paper-plane" /> Subscribe Now
                  </button>
                  <a href="tel:+919171718451" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 28px', borderRadius: '12px', fontSize: '15px', fontWeight: 700, color: T.white, background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                    <i className="fas fa-phone" /> Call Expert
                  </a>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </div>

      {showModal && <EnquiryModal onClose={() => setShowModal(false)} />}
    </>
  );
}
