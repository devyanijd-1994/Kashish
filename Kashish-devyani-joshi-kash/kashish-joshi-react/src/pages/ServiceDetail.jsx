import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import EnquiryModal from '../components/EnquiryModal';

/* ─── theme tokens (matches site-wide CSS vars) ─── */
const T = {
  navy:      '#1e3a8a',
  navyDark:  '#0f172a',
  navyMid:   '#1e40af',
  green:     '#22c55e',
  greenDark: '#16a34a',
  greenSoft: 'rgba(34,197,94,0.10)',
  greenBorder:'rgba(34,197,94,0.30)',
  white:     '#ffffff',
  slate50:   '#f8fafc',
  slate100:  '#f1f5f9',
  slate200:  '#e2e8f0',
  slate400:  '#94a3b8',
  slate600:  '#475569',
  slate700:  '#334155',
  slate800:  '#1e293b',
};

const allServices = [
  { label: 'Stock Cash',               to: '/stock-cash',              icon: 'fas fa-chart-line' },
  { label: 'Option',                   to: '/option',                  icon: 'fas fa-layer-group' },
  { label: 'Future',                   to: '/future',                  icon: 'fas fa-rocket' },
  { label: 'Banknifty / Nifty Options',to: '/banknifty-nifty-option',  icon: 'fas fa-university' },
  { label: 'Banknifty / Nifty Future', to: '/banknifty-nifty-future',  icon: 'fas fa-chart-bar' },
  { label: 'Systematic Trading Plan',  to: '/systematic-trading-plan', icon: 'fas fa-sitemap' },
  { label: 'Commodity Services',       to: '/commodity-services',      icon: 'fas fa-coins' },
];

/* ─── scroll-reveal wrapper ─── */
function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); io.disconnect(); } }, { threshold: 0.07 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(24px)', transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

/* ─── Hero ─── */
function Hero({ title, heroImage }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '240px' }}>
      {/* bg image */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.04)', transition: 'transform 10s ease' }} />
      {/* navy-to-green gradient overlay */}
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${T.navyDark}ee 0%, ${T.navy}cc 55%, rgba(22,163,74,0.75) 100%)` }} />
      {/* grid texture */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)', backgroundSize: '36px 36px' }} />

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '240px', padding: '2.5rem 1rem' }}>
        {/* pill */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 14px', borderRadius: '20px', background: T.greenSoft, border: `1px solid ${T.greenBorder}`, marginBottom: '12px', animation: 'sdIn 0.5s ease both' }}>
          <i className="fas fa-shield-halved" style={{ color: T.green, fontSize: '9px' }}></i>
          <span style={{ color: T.green, fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em' }}>SEBI Registered Research Analyst</span>
        </div>
        {/* heading */}
        <h1 style={{ color: T.white, fontWeight: 800, lineHeight: 1.3, fontSize: 'clamp(1.5rem,3.5vw,2.4rem)', maxWidth: '720px', marginBottom: '12px', animation: 'sdIn 0.55s ease 0.07s both' }}>
          Get Intraday{' '}
          <span style={{ color: T.green, textShadow: `0 0 24px rgba(34,197,94,0.45)` }}>{title}</span>{' '}
          Recommendations From{' '}
          <span style={{ color: T.green }}>Experts at Kashish Joshi Research</span>
        </h1>
        <p style={{ color: T.slate400, fontSize: '1rem', maxWidth: '460px', animation: 'sdIn 0.55s ease 0.14s both' }}>
          High performance efficiency · WhatsApp / SMS / App · 80–90% accuracy
        </p>
      </div>
    </section>
  );
}

/* ─── Pricing Table ─── */
function PricingTable({ pricing, onEnquire }) {
  const [active, setActive] = useState(0);
  const plan = pricing[active];
  const parse = (s) => { const n = parseFloat(String(s).replace(/[^0-9.]/g, '')); return isNaN(n) ? 0 : n; };

  return (
    <div style={{ borderRadius: '0 0 12px 12px', overflow: 'hidden', border: `1px solid ${T.slate200}`, borderTop: 'none' }}>
      {/* plan tabs */}
      {pricing.length > 1 && (
        <div style={{ display: 'flex', borderBottom: `1px solid ${T.slate200}` }}>
          {pricing.map((p, i) => (
            <button key={i} onClick={() => setActive(i)}
              style={{ flex: 1, padding: '10px 6px', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', border: 'none', cursor: 'pointer', transition: 'all 0.2s', background: active === i ? `linear-gradient(135deg,${T.navy},${T.navyMid})` : T.slate50, color: active === i ? T.white : T.slate600 }}>
              {p.name}
            </button>
          ))}
        </div>
      )}
      {/* col headers */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr 1.1fr', padding: '10px 16px', background: `linear-gradient(90deg,${T.navyDark},${T.navy})`, color: T.white, fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        <span>Period</span>
        <span style={{ textAlign: 'center' }}>Amount</span>
        <span style={{ textAlign: 'center' }}>GST 18%</span>
        <span style={{ textAlign: 'right', color: T.green }}>Final</span>
      </div>
      {/* rows */}
      {plan.tiers.map((t, i) => {
        const amt = parse(t.price), gst = Math.round(amt * 0.18), fin = amt + gst;
        return (
          <div key={i}
            style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr 1.1fr', padding: '11px 16px', fontSize: '14px', borderBottom: `1px solid ${T.slate100}`, background: i % 2 === 0 ? T.white : T.slate50, alignItems: 'center', transition: 'background 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(34,197,94,0.06)'}
            onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? T.white : T.slate50}>
            <span style={{ fontWeight: 600, color: T.slate700 }}>{t.duration}</span>
            <span style={{ textAlign: 'center', color: T.slate600 }}>₹{amt.toLocaleString('en-IN')}</span>
            <span style={{ textAlign: 'center', color: T.slate400 }}>₹{gst.toLocaleString('en-IN')}</span>
            <span style={{ textAlign: 'right', fontWeight: 800, color: T.greenDark }}>₹{fin.toLocaleString('en-IN')}</span>
          </div>
        );
      })}
      {/* footer */}
      <div style={{ padding: '12px 16px', background: T.slate50, borderTop: `1px solid ${T.slate200}` }}>
        <p style={{ fontSize: '12px', color: T.slate400, marginBottom: '10px' }}>* GST @18% as per govt. norms. All prices in INR.</p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={onEnquire}
            style={{ flex: 1, padding: '10px', borderRadius: '7px', fontSize: '13px', fontWeight: 700, color: T.white, background: `linear-gradient(135deg,${T.green},${T.greenDark})`, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', transition: 'all 0.2s', boxShadow: '0 2px 8px rgba(34,197,94,0.25)' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 5px 16px rgba(34,197,94,0.35)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(34,197,94,0.25)'; }}>
            <i className="fas fa-paper-plane" style={{ fontSize: '9px' }}></i> Subscribe Now
          </button>
          <a href="tel:+919171718451"
            style={{ flex: 1, padding: '10px', borderRadius: '7px', fontSize: '13px', fontWeight: 700, color: T.white, background: `linear-gradient(135deg,${T.navyDark},${T.navy})`, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', transition: 'all 0.2s', boxShadow: '0 2px 8px rgba(30,58,138,0.2)' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 5px 16px rgba(30,58,138,0.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(30,58,138,0.2)'; }}>
            <i className="fas fa-phone" style={{ fontSize: '9px' }}></i> Call Expert
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── FAQ ─── */
function FAQ({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {items.map((item, i) => (
        <div key={i} style={{ borderRadius: '9px', overflow: 'hidden', border: `1px solid ${open === i ? T.greenBorder : T.slate200}`, transition: 'border-color 0.2s, box-shadow 0.2s', boxShadow: open === i ? '0 3px 14px rgba(34,197,94,0.10)' : 'none' }}>
          <button onClick={() => setOpen(open === i ? null : i)}
            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', fontSize: '14px', fontWeight: 700, textAlign: 'left', background: open === i ? 'rgba(34,197,94,0.06)' : T.white, color: T.slate800, border: 'none', cursor: 'pointer', gap: '8px', transition: 'background 0.2s' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="fas fa-circle-question" style={{ color: T.green, fontSize: '13px', flexShrink: 0 }}></i>
              {item.q}
            </span>
            <i className={`fas fa-chevron-${open === i ? 'up' : 'down'}`} style={{ color: T.navy, fontSize: '9px', flexShrink: 0, transition: 'transform 0.25s' }}></i>
          </button>
          <div style={{ maxHeight: open === i ? '220px' : '0', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
            <div style={{ padding: '12px 16px 14px 40px', fontSize: '14px', lineHeight: 1.7, color: T.slate600, background: 'rgba(34,197,94,0.04)', borderTop: `1px solid ${T.greenBorder}` }}>
              {item.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Main export ─── */
export default function ServiceDetail({
  title, heroImage,
  overview, whoShouldSubscribe,
  features, pricing, whyChooseUs, faq,
}) {
  const [showModal, setShowModal] = useState(false);

  const defaultFaq = [
    { q: `What is ${title} and what are its advantages?`,    a: `${title} service provides expert research-backed trading recommendations. Our SEBI registered analysts monitor markets closely to deliver timely entry, exit, and stop-loss levels so you can trade with confidence and discipline.` },
    { q: `${title} results with Kashish Joshi Research`,     a: `Our ${title} service has consistently delivered 80–90% performance efficiency. We track every call transparently and our clients have seen steady returns by following our disciplined research-driven approach.` },
    { q: `Why you need ${title} recommendations?`,           a: `Markets are complex and fast-moving. Expert ${title} recommendations save you time, reduce emotional trading, and give you a structured edge backed by technical and fundamental research from SEBI registered analysts.` },
  ];
  const faqs = faq || defaultFaq;

  /* reusable section-label style */
  const secLabel = { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: T.slate800, marginBottom: '14px' };
  const card = { background: T.white, borderRadius: '13px', boxShadow: '0 2px 14px rgba(30,58,138,0.07)', overflow: 'hidden' };

  return (
    <>
      <style>{`
        @keyframes sdIn { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulseDot { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.4);opacity:0.55} }
        .sd-link { transition: background 0.18s, color 0.18s, padding-left 0.18s !important; }
        .sd-link:hover { padding-left: 20px !important; }
        .sd-feat { transition: background 0.18s, border-color 0.18s; }
        .sd-feat:hover { background: rgba(34,197,94,0.07) !important; border-color: rgba(34,197,94,0.4) !important; }
        .sd-wcu { transition: background 0.18s, border-color 0.18s; }
        .sd-wcu:hover { background: rgba(34,197,94,0.07) !important; border-color: rgba(34,197,94,0.35) !important; }
        .sd-btn-g { transition: transform 0.18s, box-shadow 0.18s !important; }
        .sd-btn-g:hover { transform: translateY(-2px) !important; box-shadow: 0 6px 20px rgba(34,197,94,0.38) !important; }
        .sd-btn-n { transition: transform 0.18s, box-shadow 0.18s !important; }
        .sd-btn-n:hover { transform: translateY(-2px) !important; box-shadow: 0 6px 20px rgba(30,58,138,0.32) !important; }
      `}</style>

      <Hero title={title} heroImage={heroImage} />

      {/* ── info bar ── */}
      <div style={{ background: `linear-gradient(90deg,${T.navy},${T.navyMid})`, padding: '8px 0', borderBottom: `2px solid ${T.green}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={() => setShowModal(true)} className="sd-btn-g"
              style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 20px', borderRadius: '20px', fontSize: '13px', fontWeight: 700, color: T.white, background: `linear-gradient(135deg,${T.green},${T.greenDark})`, border: 'none', cursor: 'pointer', boxShadow: '0 2px 8px rgba(34,197,94,0.3)' }}>
              <i className="fas fa-paper-plane" style={{ fontSize: '11px' }}></i> Subscribe Now
            </button>
            <a href="tel:+919171718451" className="sd-btn-n"
              style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 20px', borderRadius: '20px', fontSize: '13px', fontWeight: 700, color: T.navy, background: T.white, textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}>
              <i className="fas fa-phone" style={{ fontSize: '11px' }}></i> Call Us
            </a>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
            <i className="fas fa-headset" style={{ color: T.green }}></i>
            For more Information Call Us: <strong style={{ color: T.white }}>+91 91717 18451</strong>
          </span>
        </div>
      </div>

      {/* ── page body ── */}
      <div style={{ background: T.slate100, padding: '20px 0 36px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px', display: 'flex', gap: '18px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

          {/* ════ SIDEBAR ════ */}
          <aside style={{ width: '236px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>

            {/* services list */}
            <Reveal delay={0}>
              <div style={card}>
                <div style={{ padding: '10px 14px', background: `linear-gradient(135deg,${T.navyDark},${T.navy})`, display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <i className="fas fa-th-list" style={{ color: T.green, fontSize: '10px' }}></i>
                  <span style={{ color: T.white, fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em' }}>Our Services</span>
                </div>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {allServices.map((s) => {
                    const isActive = s.label === title;
                    return (
                      <li key={s.to} style={{ borderBottom: `1px solid ${T.slate100}` }}>
                        <Link to={s.to} className="sd-link"
                          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '11px 14px', fontSize: '14px', fontWeight: 600, textDecoration: 'none', background: isActive ? `linear-gradient(90deg,${T.green},${T.greenDark})` : 'transparent', color: isActive ? T.white : T.slate700 }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <i className={s.icon} style={{ fontSize: '13px', color: isActive ? T.white : T.green, width: '14px' }}></i>
                            {s.label}
                          </span>
                          <i className="fas fa-chevron-right" style={{ fontSize: '8px', opacity: 0.4 }}></i>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>

            {/* SEBI badge */}
            <Reveal delay={60}>
              <div style={{ ...card, padding: '16px', textAlign: 'center', border: `1px solid ${T.slate200}` }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: `linear-gradient(135deg,${T.navy},${T.navyMid})`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', boxShadow: '0 4px 12px rgba(30,58,138,0.25)' }}>
                  <i className="fas fa-shield-halved" style={{ color: T.green, fontSize: '18px' }}></i>
                </div>
                <p style={{ fontSize: '14px', fontWeight: 800, color: T.navyDark, margin: '0 0 2px' }}>SEBI Registered</p>
                <p style={{ fontSize: '13px', color: T.slate400, margin: '0 0 8px' }}>Research Analyst</p>
                <span style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 700, background: `linear-gradient(135deg,${T.navy},${T.navyMid})`, color: T.white }}>
                  INH000022446
                </span>
              </div>
            </Reveal>

            {/* live CTA */}
            <Reveal delay={120}>
              <div style={{ borderRadius: '13px', padding: '16px', background: `linear-gradient(160deg,${T.navyDark} 0%,${T.navy} 100%)`, textAlign: 'center', boxShadow: '0 4px 18px rgba(30,58,138,0.22)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginBottom: '6px' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: T.green, display: 'inline-block', animation: 'pulseDot 1.7s ease infinite' }}></span>
                  <span style={{ color: T.green, fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Experts Online Now</span>
                </div>
                <p style={{ color: T.slate400, fontSize: '13px', marginBottom: '12px' }}>Get a free consultation today</p>
                <a href="tel:+919171718451" className="sd-btn-g"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '10px', borderRadius: '8px', fontSize: '13px', fontWeight: 700, color: T.white, background: `linear-gradient(135deg,${T.green},${T.greenDark})`, textDecoration: 'none', marginBottom: '8px', boxShadow: '0 2px 10px rgba(34,197,94,0.3)' }}>
                  <i className="fas fa-phone" style={{ fontSize: '11px' }}></i> +91 91717 18451
                </a>
                <button onClick={() => setShowModal(true)}
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', fontSize: '13px', fontWeight: 700, color: T.green, background: 'transparent', border: `1px solid ${T.greenBorder}`, cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = T.green; e.currentTarget.style.color = T.white; e.currentTarget.style.borderColor = T.green; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = T.green; e.currentTarget.style.borderColor = T.greenBorder; }}>
                  Enquire Now
                </button>
              </div>
            </Reveal>
          </aside>

          {/* ════ MAIN CONTENT ════ */}
          <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>

            {/* overview card */}
            <Reveal delay={40}>
              <div style={card}>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, padding: '20px 22px', minWidth: '260px' }}>
                    {/* eyebrow */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                      <div style={{ width: '22px', height: '2px', background: `linear-gradient(90deg,${T.green},${T.navy})`, borderRadius: '2px' }} />
                      <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: T.green }}>Expert Recommendations</span>
                    </div>
                    {/* title */}
                    <h2 style={{ fontSize: 'clamp(1.2rem,2.5vw,1.6rem)', fontWeight: 800, color: T.navyDark, lineHeight: 1.35, marginBottom: '12px' }}>
                      Get Intraday {title} Recommendations From{' '}
                      <span style={{ color: T.navy }}>Experts at Kashish Joshi Research</span>
                    </h2>
                    {/* CTA row */}
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                      <button onClick={() => setShowModal(true)} className="sd-btn-g"
                        style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '9px 22px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, color: T.white, background: `linear-gradient(135deg,${T.green},${T.greenDark})`, border: 'none', cursor: 'pointer', boxShadow: '0 2px 10px rgba(34,197,94,0.28)' }}>
                        <i className="fas fa-paper-plane" style={{ fontSize: '11px' }}></i> Subscribe Now
                      </button>
                      <a href="tel:+919171718451" className="sd-btn-n"
                        style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '9px 22px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, color: T.white, background: `linear-gradient(135deg,${T.navyDark},${T.navy})`, textDecoration: 'none', boxShadow: '0 2px 10px rgba(30,58,138,0.22)' }}>
                        <i className="fas fa-phone" style={{ fontSize: '11px' }}></i> Call Expert
                      </a>
                    </div>

                    <p style={{ fontSize: '15px', lineHeight: 1.72, color: T.slate600, marginBottom: '14px' }}>{overview}</p>

                    {whoShouldSubscribe && (
                      <div style={{ borderRadius: '9px', padding: '12px 14px', background: `linear-gradient(135deg,rgba(34,197,94,0.06),rgba(30,58,138,0.04))`, borderLeft: `3px solid ${T.green}`, marginBottom: '16px' }}>
                        <p style={{ ...secLabel, marginBottom: '5px' }}>
                          <i className="fas fa-user-check" style={{ color: T.green }}></i> Who Should Subscribe?
                        </p>
                        <p style={{ fontSize: '14px', lineHeight: 1.68, color: T.slate600, margin: 0 }}>{whoShouldSubscribe}</p>
                      </div>
                    )}

                    {features && (
                      <>
                        <p style={secLabel}>
                          <i className="fas fa-list-check" style={{ color: T.green }}></i> Service Features
                        </p>
                        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          {features.map((f, i) => (
                            <li key={i} className="sd-feat"
                              style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '9px 14px', borderRadius: '7px', background: T.slate50, border: `1px solid ${T.slate200}`, fontSize: '14px', color: T.slate700 }}>
                              <i className="fas fa-circle-check" style={{ color: T.green, fontSize: '13px', flexShrink: 0 }}></i>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  {/* image panel */}
                  {heroImage && (
                    <div style={{ width: '190px', flexShrink: 0, display: 'flex', flexDirection: 'column' }} className="hidden md:flex">
                      <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
                        <img src={heroImage} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg,transparent 50%,${T.navy}99)` }} />
                      </div>
                      <div style={{ padding: '8px', textAlign: 'center', fontSize: '10px', fontWeight: 700, color: T.white, background: `linear-gradient(90deg,${T.navy},${T.navyMid})`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                        <i className="fas fa-chart-line" style={{ color: T.green, fontSize: '9px' }}></i> Professional {title} Trading
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>

            {/* pricing */}
            {pricing && (
              <Reveal delay={80}>
                <div>
                  <div style={{ padding: '10px 16px', background: `linear-gradient(135deg,${T.navyDark},${T.navy})`, borderRadius: '13px 13px 0 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <i className="fas fa-tags" style={{ color: T.green, fontSize: '11px' }}></i>
                    <span style={{ color: T.white, fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {pricing[0]?.name || title} — Pricing Plans
                    </span>
                      <span style={{ marginLeft: 'auto', padding: '3px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 700, background: T.greenSoft, color: T.green, border: `1px solid ${T.greenBorder}` }}>
                      GST Inclusive
                    </span>
                  </div>
                  <PricingTable pricing={pricing} onEnquire={() => setShowModal(true)} />
                </div>
              </Reveal>
            )}

            {/* FAQ */}
            <Reveal delay={120}>
              <div style={{ ...card, padding: '18px 20px' }}>
                <p style={secLabel}>
                  <i className="fas fa-circle-question" style={{ color: T.green }}></i> Frequently Asked Questions
                </p>
                <FAQ items={faqs} />
              </div>
            </Reveal>

            {/* why choose us */}
            {whyChooseUs && (
              <Reveal delay={160}>
                <div style={{ ...card, padding: '18px 20px' }}>
                  <p style={secLabel}>
                    <i className="fas fa-award" style={{ color: T.green }}></i> Why Choose Kashish Joshi Research?
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: '7px' }}>
                    {whyChooseUs.map((pt, i) => (
                      <div key={i} className="sd-wcu"
                        style={{ display: 'flex', alignItems: 'flex-start', gap: '9px', padding: '11px 14px', borderRadius: '8px', background: T.slate50, border: `1px solid ${T.slate200}` }}>
                        <i className="fas fa-circle-check" style={{ color: T.green, fontSize: '13px', marginTop: '2px', flexShrink: 0 }}></i>
                        <span style={{ fontSize: '14px', color: T.slate700, lineHeight: 1.55 }}>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {/* CTA banner */}
            <Reveal delay={200}>
              <div style={{ borderRadius: '13px', padding: '26px 28px', textAlign: 'center', background: `linear-gradient(135deg,${T.navyDark} 0%,${T.navy} 55%,${T.navyMid} 100%)`, position: 'relative', overflow: 'hidden', boxShadow: '0 6px 28px rgba(30,58,138,0.22)' }}>
                {/* decorative blobs */}
                <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '140px', height: '140px', borderRadius: '50%', background: `radial-gradient(circle,${T.greenSoft},transparent 70%)`, pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', width: '100px', height: '100px', borderRadius: '50%', background: `radial-gradient(circle,rgba(30,58,138,0.3),transparent 70%)`, pointerEvents: 'none' }} />
                {/* green top accent line */}
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '60px', height: '3px', background: `linear-gradient(90deg,${T.green},${T.greenDark})`, borderRadius: '0 0 4px 4px' }} />

                <div style={{ position: 'relative' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 12px', borderRadius: '20px', background: T.greenSoft, border: `1px solid ${T.greenBorder}`, marginBottom: '10px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: T.green, animation: 'pulseDot 1.7s ease infinite', display: 'inline-block' }}></span>
                    <span style={{ fontSize: '9.5px', fontWeight: 700, color: T.green, textTransform: 'uppercase', letterSpacing: '0.14em' }}>Ready to Start?</span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: T.white, marginBottom: '8px' }}>
                    Start {title} Trading Today
                  </h3>
                  <p style={{ fontSize: '14px', color: T.slate400, maxWidth: '360px', margin: '0 auto 18px', lineHeight: 1.65 }}>
                    Join thousands of traders who trust Kashish Joshi Research for professional, research-backed {title} recommendations.
                  </p>
                  <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button onClick={() => setShowModal(true)} className="sd-btn-g"
                      style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '11px 26px', borderRadius: '9px', fontSize: '14px', fontWeight: 700, color: T.white, background: `linear-gradient(135deg,${T.green},${T.greenDark})`, border: 'none', cursor: 'pointer', boxShadow: '0 3px 12px rgba(34,197,94,0.35)' }}>
                      Get Started Today <i className="fas fa-arrow-right" style={{ fontSize: '12px' }}></i>
                    </button>
                    <a href="tel:+919171718451" className="sd-btn-n"
                      style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '11px 26px', borderRadius: '9px', fontSize: '14px', fontWeight: 700, color: T.white, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', textDecoration: 'none' }}>
                      <i className="fas fa-phone" style={{ fontSize: '10px' }}></i> Contact Expert
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>{/* end main */}
        </div>
      </div>

      {showModal && <EnquiryModal onClose={() => setShowModal(false)} />}
    </>
  );
}
