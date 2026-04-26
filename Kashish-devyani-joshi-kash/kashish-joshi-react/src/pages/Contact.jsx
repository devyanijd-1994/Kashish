import { useState, useRef, useEffect } from 'react';

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
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(22px)', transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

const whyPoints = [
  '8+ years of market experience',
  'SEBI Registered Research Analyst',
  'Real-time WhatsApp trade alerts',
  'Transparent track record',
  'Dedicated relationship manager',
  'SEBI complaint redressal support',
];

const segments = [
  'Stock Services — Cash, Future, Option',
  'Nifty / Bank Nifty — Option & Future',
  'Systematic Trading Plan (STP)',
  'Commodity Services (MCX / NCDEX)',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', number: '', email: '', segment: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch('/contact1.php', { method: 'POST', body: new FormData(e.target) });
    } catch (_) {}
    setSending(false);
    setSent(true);
  };

  const inputStyle = {
    width: '100%', padding: '11px 14px', borderRadius: '8px', fontSize: '14px',
    border: `1.5px solid ${T.slate200}`, outline: 'none', color: T.slate800,
    background: T.white, transition: 'border-color 0.2s, box-shadow 0.2s',
    boxSizing: 'border-box',
  };

  return (
    <>
      <style>{`
        @keyframes ctIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulseDot { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.45);opacity:0.5} }
        .ct-input:focus { border-color: ${T.green} !important; box-shadow: 0 0 0 3px rgba(34,197,94,0.12) !important; }
        .ct-btn-g { transition: transform 0.18s, box-shadow 0.18s; }
        .ct-btn-g:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(34,197,94,0.38) !important; }
        .ct-info-card { transition: transform 0.22s, box-shadow 0.22s; }
        .ct-info-card:hover { transform: translateY(-4px); box-shadow: 0 10px 28px rgba(30,58,138,0.14) !important; }
        .ct-why-item { transition: background 0.18s, border-color 0.18s; }
        .ct-why-item:hover { background: rgba(34,197,94,0.07) !important; border-color: rgba(34,197,94,0.35) !important; }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '220px' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg,${T.navyDark}f0 0%,${T.navy}d0 60%,rgba(22,163,74,0.7) 100%)` }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize: '36px 36px' }} />
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '220px', padding: '2.5rem 1rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '4px 16px', borderRadius: '20px', background: T.greenSoft, border: `1px solid ${T.greenBorder}`, marginBottom: '12px', animation: 'ctIn 0.5s ease both' }}>
            <i className="fas fa-headset" style={{ color: T.green, fontSize: '11px' }}></i>
            <span style={{ color: T.green, fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em' }}>We're Here to Help</span>
          </div>
          <h1 style={{ color: T.white, fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: '10px', animation: 'ctIn 0.55s ease 0.07s both', letterSpacing: '-0.01em' }}>
            CONTACT <span style={{ color: T.green, textShadow: '0 0 24px rgba(34,197,94,0.4)' }}>US</span>
          </h1>
          <p style={{ color: T.slate400, fontSize: '1rem', maxWidth: '480px', animation: 'ctIn 0.55s ease 0.14s both', lineHeight: 1.6 }}>
            Get in touch with us today for expert guidance, support, and personalised trading solutions.
          </p>
          {/* breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '14px', fontSize: '13px', color: T.slate400, animation: 'ctIn 0.55s ease 0.2s both' }}>
            <a href="/" style={{ color: T.slate400, textDecoration: 'none' }} onMouseEnter={e => e.target.style.color = T.green} onMouseLeave={e => e.target.style.color = T.slate400}>Home</a>
            <i className="fas fa-chevron-right" style={{ fontSize: '9px' }}></i>
            <span style={{ color: T.green, fontWeight: 600 }}>Contact Us</span>
          </div>
        </div>
      </section>

      {/* ── INFO CARDS ── */}
      <div style={{ background: T.slate100, padding: '28px 0 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 16px' }}>
          <Reveal delay={0}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '16px', marginBottom: '24px' }}>
              {/* Call */}
              <div className="ct-info-card" style={{ background: T.white, borderRadius: '13px', padding: '20px 22px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 2px 14px rgba(30,58,138,0.07)', border: `1px solid ${T.slate200}` }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: `linear-gradient(135deg,${T.navy},${T.navyMid})`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 12px rgba(30,58,138,0.25)' }}>
                  <i className="fas fa-phone" style={{ color: T.green, fontSize: '18px' }}></i>
                </div>
                <div>
                  <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: T.slate400, marginBottom: '4px' }}>Call Us</p>
                  <a href="tel:+919171718451" style={{ fontSize: '15px', fontWeight: 800, color: T.navyDark, textDecoration: 'none', display: 'block' }}>+91 91717 18451</a>
                  <p style={{ fontSize: '12px', color: T.slate400, marginTop: '2px' }}>Sun – Fri: 9am – 7pm</p>
                </div>
              </div>
              {/* Email */}
              <div className="ct-info-card" style={{ background: T.white, borderRadius: '13px', padding: '20px 22px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 2px 14px rgba(30,58,138,0.07)', border: `1px solid ${T.slate200}` }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: `linear-gradient(135deg,${T.navy},${T.navyMid})`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 12px rgba(30,58,138,0.25)' }}>
                  <i className="fas fa-envelope" style={{ color: T.green, fontSize: '18px' }}></i>
                </div>
                <div>
                  <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: T.slate400, marginBottom: '4px' }}>Email Us</p>
                  <a href="mailto:info@kashishjoshiresearch.com" style={{ fontSize: '14px', fontWeight: 700, color: T.navyDark, textDecoration: 'none', display: 'block' }}>info@kashishjoshiresearch.com</a>
                  <p style={{ fontSize: '12px', color: T.slate400, marginTop: '2px' }}>We reply within 24 hours</p>
                </div>
              </div>
              {/* Location */}
              <div className="ct-info-card" style={{ background: T.white, borderRadius: '13px', padding: '20px 22px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 2px 14px rgba(30,58,138,0.07)', border: `1px solid ${T.slate200}` }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: `linear-gradient(135deg,${T.navy},${T.navyMid})`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 12px rgba(30,58,138,0.25)' }}>
                  <i className="fas fa-location-dot" style={{ color: T.green, fontSize: '18px' }}></i>
                </div>
                <div>
                  <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: T.slate400, marginBottom: '4px' }}>Location</p>
                  <p style={{ fontSize: '13px', fontWeight: 700, color: T.navyDark, margin: 0, lineHeight: 1.4 }}>Hiran Magri, Udaipur</p>
                  <p style={{ fontSize: '12px', color: T.slate400, marginTop: '2px' }}>Rajasthan – 313002</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── MAIN 2-COL ── */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', paddingBottom: '36px' }}>

            {/* LEFT — form */}
            <Reveal delay={60}>
              <div style={{ flex: '1 1 420px', background: T.white, borderRadius: '14px', boxShadow: '0 2px 14px rgba(30,58,138,0.07)', overflow: 'hidden' }}>
                {/* form header */}
                <div style={{ padding: '16px 22px', background: `linear-gradient(135deg,${T.navyDark},${T.navy})`, display: 'flex', alignItems: 'center', gap: '9px' }}>
                  <i className="fas fa-paper-plane" style={{ color: T.green, fontSize: '14px' }}></i>
                  <span style={{ color: T.white, fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Send Us a Message</span>
                </div>
                <div style={{ padding: '22px' }}>
                  {sent ? (
                    <div style={{ textAlign: 'center', padding: '32px 16px' }}>
                      <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: `linear-gradient(135deg,${T.green},${T.greenDark})`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', boxShadow: '0 4px 16px rgba(34,197,94,0.35)' }}>
                        <i className="fas fa-check" style={{ color: T.white, fontSize: '24px' }}></i>
                      </div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: T.navyDark, marginBottom: '8px' }}>Message Sent!</h3>
                      <p style={{ fontSize: '14px', color: T.slate600, lineHeight: 1.6 }}>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                      <button onClick={() => setSent(false)} style={{ marginTop: '16px', padding: '9px 22px', borderRadius: '8px', fontSize: '13px', fontWeight: 700, color: T.white, background: `linear-gradient(135deg,${T.green},${T.greenDark})`, border: 'none', cursor: 'pointer' }}>
                        Send Another
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={submit}>
                      <p style={{ fontSize: '13px', color: T.slate400, marginBottom: '18px', lineHeight: 1.5 }}>
                        Fill in the form below and our team will get back to you with expert guidance.
                      </p>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                        <div>
                          <label style={{ fontSize: '12px', fontWeight: 700, color: T.slate700, display: 'block', marginBottom: '5px' }}>Full Name *</label>
                          <input name="name" value={form.name} onChange={handle} required placeholder="Your full name"
                            className="ct-input" style={inputStyle} />
                        </div>
                        <div>
                          <label style={{ fontSize: '12px', fontWeight: 700, color: T.slate700, display: 'block', marginBottom: '5px' }}>Phone Number *</label>
                          <input name="number" value={form.number} onChange={handle} required placeholder="10-digit number"
                            pattern="[0-9]{10}" maxLength="10" inputMode="numeric"
                            className="ct-input" style={inputStyle} />
                        </div>
                      </div>
                      <div style={{ marginBottom: '12px' }}>
                        <label style={{ fontSize: '12px', fontWeight: 700, color: T.slate700, display: 'block', marginBottom: '5px' }}>Email Address *</label>
                        <input name="email" type="email" value={form.email} onChange={handle} required placeholder="your@email.com"
                          className="ct-input" style={inputStyle} />
                      </div>
                      <div style={{ marginBottom: '12px' }}>
                        <label style={{ fontSize: '12px', fontWeight: 700, color: T.slate700, display: 'block', marginBottom: '5px' }}>Select Segment</label>
                        <div style={{ position: 'relative' }}>
                          <select name="segment" value={form.segment} onChange={handle}
                            className="ct-input" style={{ ...inputStyle, appearance: 'none', paddingRight: '36px' }}>
                            <option value="">Choose a service segment</option>
                            {segments.map((s, i) => <option key={i} value={s}>{s}</option>)}
                          </select>
                          <i className="fas fa-chevron-down" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: T.slate400, fontSize: '11px', pointerEvents: 'none' }}></i>
                        </div>
                      </div>
                      <div style={{ marginBottom: '16px' }}>
                        <label style={{ fontSize: '12px', fontWeight: 700, color: T.slate700, display: 'block', marginBottom: '5px' }}>Message</label>
                        <textarea name="message" value={form.message} onChange={handle} rows={4} placeholder="Write your message here..."
                          className="ct-input" style={{ ...inputStyle, resize: 'none' }} />
                      </div>
                      <p style={{ fontSize: '11px', color: T.slate400, marginBottom: '14px' }}>* Your email address will not be published.</p>
                      <button type="submit" disabled={sending} className="ct-btn-g"
                        style={{ width: '100%', padding: '12px', borderRadius: '9px', fontSize: '15px', fontWeight: 700, color: T.white, background: `linear-gradient(135deg,${T.green},${T.greenDark})`, border: 'none', cursor: sending ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 3px 12px rgba(34,197,94,0.3)', opacity: sending ? 0.75 : 1 }}>
                        {sending ? <><i className="fas fa-spinner fa-spin"></i> Sending...</> : <><i className="fas fa-paper-plane"></i> Send Message</>}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </Reveal>

            {/* RIGHT — WhatsApp + Why */}
            <div style={{ flex: '0 1 300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

              {/* WhatsApp CTA */}
              <Reveal delay={100}>
                <div style={{ borderRadius: '14px', padding: '22px', background: `linear-gradient(160deg,${T.navyDark},${T.navy})`, boxShadow: '0 4px 18px rgba(30,58,138,0.22)', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '90px', height: '90px', borderRadius: '50%', background: T.greenSoft, pointerEvents: 'none' }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '10px' }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: T.green, display: 'inline-block', animation: 'pulseDot 1.7s ease infinite' }}></span>
                    <span style={{ color: T.green, fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Chat on WhatsApp</span>
                  </div>
                  <p style={{ color: T.white, fontSize: '15px', fontWeight: 700, marginBottom: '6px', lineHeight: 1.35 }}>
                    Get instant support from our trading experts
                  </p>
                  <p style={{ color: T.slate400, fontSize: '13px', marginBottom: '16px', lineHeight: 1.55 }}>
                    Chat directly on WhatsApp for quick answers, trade queries, and subscription help.
                  </p>
                  <a href="https://wa.link/iw4ct4" target="_blank" rel="noreferrer" className="ct-btn-g"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '11px', borderRadius: '9px', fontSize: '14px', fontWeight: 700, color: T.white, background: 'linear-gradient(135deg,#25d366,#128c7e)', textDecoration: 'none', boxShadow: '0 3px 12px rgba(37,211,102,0.35)' }}>
                    <i className="fab fa-whatsapp" style={{ fontSize: '18px' }}></i> Message on WhatsApp
                  </a>
                </div>
              </Reveal>

              {/* Why Choose Us */}
              <Reveal delay={140}>
                <div style={{ background: T.white, borderRadius: '14px', overflow: 'hidden', boxShadow: '0 2px 14px rgba(30,58,138,0.07)', border: `1px solid ${T.slate200}` }}>
                  <div style={{ padding: '12px 18px', background: `linear-gradient(135deg,${T.navyDark},${T.navy})`, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <i className="fas fa-award" style={{ color: T.green, fontSize: '13px' }}></i>
                    <span style={{ color: T.white, fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Why Choose Us?</span>
                  </div>
                  <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {whyPoints.map((pt, i) => (
                      <div key={i} className="ct-why-item"
                        style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 12px', borderRadius: '8px', background: T.slate50, border: `1px solid ${T.slate200}` }}>
                        <i className="fas fa-circle-check" style={{ color: T.green, fontSize: '13px', flexShrink: 0 }}></i>
                        <span style={{ fontSize: '13px', color: T.slate700, fontWeight: 500 }}>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
