import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const T = {
  navy:       '#1e3a8a',
  navyDark:   '#0f172a',
  navyMid:    '#1e40af',
  green:      '#22c55e',
  greenDark:  '#16a34a',
  greenSoft:  'rgba(34,197,94,0.10)',
  greenBorder:'rgba(34,197,94,0.30)',
  white:      '#ffffff',
  slate50:    '#f8fafc',
  slate100:   '#f1f5f9',
  slate200:   '#e2e8f0',
  slate400:   '#94a3b8',
  slate600:   '#475569',
  slate700:   '#334155',
  slate800:   '#1e293b',
};

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); io.disconnect(); }
    }, { threshold: 0.07 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? 'translateY(0)' : 'translateY(22px)',
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

/* ── copy-to-clipboard helper ── */
function CopyField({ label, value }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', padding: '11px 16px', borderBottom: `1px solid ${T.slate100}`, gap: '12px' }}>
      <div>
        <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: T.slate400, marginBottom: '2px' }}>{label}</p>
        <p style={{ fontSize: '15px', fontWeight: 700, color: T.slate800, margin: 0 }}>{value}</p>
      </div>
      <button onClick={copy}
        style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '6px 14px', borderRadius: '7px', fontSize: '12px', fontWeight: 700, border: 'none', cursor: 'pointer', transition: 'all 0.2s', background: copied ? `linear-gradient(135deg,${T.green},${T.greenDark})` : `linear-gradient(135deg,${T.navy},${T.navyMid})`, color: T.white, whiteSpace: 'nowrap' }}>
        <i className={`fas fa-${copied ? 'check' : 'copy'}`} style={{ fontSize: '11px' }}></i>
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}

const bankDetails = [
  { label: 'Account Name',   value: 'Kashish Joshi Research' },
  { label: 'Account Number', value: '50200087654321' },
  { label: 'IFSC Code',      value: 'HDFC0001234' },
  { label: 'Bank Name',      value: 'HDFC Bank' },
  { label: 'Branch',         value: 'Hiran Magri, Udaipur' },
  { label: 'Account Type',   value: 'Current Account' },
];

const paymentMethods = [
  { icon: 'fas fa-building-columns', title: 'Bank Transfer', desc: 'Direct bank transfer via NEFT, RTGS, or IMPS using the account details above.', color: T.navy },
  { icon: 'fas fa-mobile-screen-button', title: 'UPI Payment', desc: 'Instant payment using any UPI app — PhonePe, Google Pay, Paytm, BHIM.', color: '#7c3aed' },
  { icon: 'fas fa-credit-card', title: 'Debit / Credit Card', desc: 'Secure card payments accepted online. Reach out to us for the payment link.', color: '#0891b2' },
  { icon: 'fas fa-wallet', title: 'Digital Wallets', desc: 'Use popular digital wallets for quick and convenient subscription payments.', color: '#d97706' },
];

const instructions = [
  { icon: 'fas fa-circle-check', text: 'Always transfer to the official account details listed above only.' },
  { icon: 'fas fa-circle-check', text: 'Payment proof: Share your transaction screenshot on WhatsApp after payment.' },
  { icon: 'fas fa-circle-check', text: 'Processing Time: Services are activated within 30 minutes of payment confirmation.' },
  { icon: 'fas fa-circle-check', text: 'Reference Amount: Always transfer the exact amount as per your selected plan.' },
  { icon: 'fas fa-circle-check', text: 'Currency: All payments should be made in Indian Rupees (INR) only.' },
  { icon: 'fas fa-circle-check', text: 'Tax Information: GST @18% will be applicable as per government regulations.' },
  { icon: 'fas fa-circle-check', text: 'Receipt: Payment receipt will be shared on your registered email within 2 hours.' },
];

export default function Payment() {
  return (
    <>
      <style>{`
        @keyframes pyIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulseDot { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.45);opacity:0.5} }
        .py-method-card { transition: transform 0.22s, box-shadow 0.22s; }
        .py-method-card:hover { transform: translateY(-4px); box-shadow: 0 10px 28px rgba(30,58,138,0.14) !important; }
        .py-btn-g { transition: transform 0.18s, box-shadow 0.18s; }
        .py-btn-g:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(34,197,94,0.38) !important; }
        .py-btn-n { transition: transform 0.18s, box-shadow 0.18s; }
        .py-btn-n:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(30,58,138,0.32) !important; }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '200px' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg,${T.navyDark}f2 0%,${T.navy}d8 60%,rgba(22,163,74,0.72) 100%)` }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize: '36px 36px' }} />
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '200px', padding: '2.5rem 1rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '4px 16px', borderRadius: '20px', background: T.greenSoft, border: `1px solid ${T.greenBorder}`, marginBottom: '12px', animation: 'pyIn 0.5s ease both' }}>
            <i className="fas fa-lock" style={{ color: T.green, fontSize: '10px' }}></i>
            <span style={{ color: T.green, fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em' }}>Secure Payment</span>
          </div>
          <h1 style={{ color: T.white, fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: '10px', animation: 'pyIn 0.55s ease 0.07s both', letterSpacing: '-0.01em' }}>
            PAYMENT <span style={{ color: T.green, textShadow: '0 0 24px rgba(34,197,94,0.4)' }}>INFORMATION</span>
          </h1>
          <p style={{ color: T.slate400, fontSize: '1rem', maxWidth: '500px', animation: 'pyIn 0.55s ease 0.14s both', lineHeight: 1.6 }}>
            All payment details are listed below. Please transfer to the official account only and share proof on WhatsApp.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '14px', fontSize: '13px', color: T.slate400, animation: 'pyIn 0.55s ease 0.2s both' }}>
            <Link to="/" style={{ color: T.slate400, textDecoration: 'none' }} onMouseEnter={e => e.target.style.color = T.green} onMouseLeave={e => e.target.style.color = T.slate400}>Home</Link>
            <i className="fas fa-chevron-right" style={{ fontSize: '9px' }}></i>
            <span style={{ color: T.green, fontWeight: 600 }}>Payment</span>
          </div>
        </div>
      </section>

      <div style={{ background: T.slate100, padding: '28px 0 40px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 16px', display: 'flex', flexDirection: 'column', gap: '22px' }}>

          {/* ── BANK ACCOUNT DETAILS ── */}
          <Reveal delay={0}>
            <div style={{ background: T.white, borderRadius: '14px', overflow: 'hidden', boxShadow: '0 2px 14px rgba(30,58,138,0.08)' }}>
              {/* header */}
              <div style={{ padding: '14px 20px', background: `linear-gradient(135deg,${T.navyDark},${T.navy})`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: '9px', background: T.greenSoft, border: `1px solid ${T.greenBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="fas fa-building-columns" style={{ color: T.green, fontSize: '15px' }}></i>
                  </div>
                  <div>
                    <p style={{ color: T.white, fontSize: '15px', fontWeight: 800, margin: 0 }}>Bank Account Details</p>
                    <p style={{ color: T.slate400, fontSize: '11px', margin: 0 }}>Use these details for NEFT / RTGS / IMPS transfers</p>
                  </div>
                </div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: '20px', background: T.greenSoft, border: `1px solid ${T.greenBorder}`, fontSize: '11px', fontWeight: 700, color: T.green }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: T.green, display: 'inline-block', animation: 'pulseDot 1.7s ease infinite' }}></span>
                  Primary Account
                </span>
              </div>

              {/* sub-header row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', padding: '8px 16px', background: `linear-gradient(90deg,${T.slate50},${T.white})`, borderBottom: `1px solid ${T.slate200}` }}>
                <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: T.slate400 }}>Field</span>
                <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: T.slate400 }}>Tap to Copy</span>
              </div>

              {/* fields */}
              {bankDetails.map((d, i) => (
                <CopyField key={i} label={d.label} value={d.value} />
              ))}

              {/* UPI row */}
              <div style={{ padding: '14px 16px', background: `linear-gradient(135deg,rgba(34,197,94,0.06),rgba(30,58,138,0.04))`, borderTop: `2px solid ${T.green}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-mobile-screen-button" style={{ color: T.green, fontSize: '20px' }}></i>
                  <div>
                    <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: T.slate400, margin: 0 }}>UPI ID</p>
                    <p style={{ fontSize: '16px', fontWeight: 800, color: T.navyDark, margin: 0 }}>kashishjoshi@hdfcbank</p>
                  </div>
                </div>
                <button onClick={() => navigator.clipboard.writeText('kashishjoshi@hdfcbank')}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 18px', borderRadius: '8px', fontSize: '13px', fontWeight: 700, color: T.white, background: `linear-gradient(135deg,${T.green},${T.greenDark})`, border: 'none', cursor: 'pointer', boxShadow: '0 2px 10px rgba(34,197,94,0.28)' }}>
                  <i className="fas fa-copy" style={{ fontSize: '11px' }}></i> Copy UPI ID
                </button>
              </div>
            </div>
          </Reveal>

          {/* ── ACCEPTED PAYMENT METHODS ── */}
          <Reveal delay={60}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '14px' }}>
                <div style={{ width: '4px', height: '22px', borderRadius: '2px', background: `linear-gradient(180deg,${T.green},${T.navy})` }} />
                <h2 style={{ fontSize: '17px', fontWeight: 800, color: T.navyDark, margin: 0 }}>Accepted Payment Methods</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(190px,100%),1fr))', gap: '12px' }}>
                {paymentMethods.map((m, i) => (
                  <div key={i} className="py-method-card"
                    style={{ background: T.white, borderRadius: '12px', padding: '18px 16px', boxShadow: '0 2px 12px rgba(30,58,138,0.07)', border: `1px solid ${T.slate200}`, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: `linear-gradient(135deg,${m.color}22,${m.color}11)`, border: `1px solid ${m.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className={m.icon} style={{ color: m.color, fontSize: '18px' }}></i>
                    </div>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: 800, color: T.navyDark, marginBottom: '4px' }}>{m.title}</p>
                      <p style={{ fontSize: '12.5px', color: T.slate600, lineHeight: 1.55, margin: 0 }}>{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── PAYMENT INSTRUCTIONS ── */}
          <Reveal delay={100}>
            <div style={{ background: T.white, borderRadius: '14px', overflow: 'hidden', boxShadow: '0 2px 14px rgba(30,58,138,0.08)' }}>
              <div style={{ padding: '14px 20px', background: `linear-gradient(135deg,${T.navyDark},${T.navy})`, display: 'flex', alignItems: 'center', gap: '9px' }}>
                <i className="fas fa-circle-info" style={{ color: T.green, fontSize: '15px' }}></i>
                <span style={{ color: T.white, fontSize: '15px', fontWeight: 800 }}>Payment Instructions</span>
              </div>
              <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {instructions.map((ins, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '11px', padding: '10px 14px', borderRadius: '9px', background: i % 2 === 0 ? T.slate50 : T.white, border: `1px solid ${T.slate200}` }}>
                    <i className={ins.icon} style={{ color: T.green, fontSize: '14px', marginTop: '1px', flexShrink: 0 }}></i>
                    <span style={{ fontSize: '14px', color: T.slate700, lineHeight: 1.6 }}>{ins.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── NEED HELP CTA ── */}
          <Reveal delay={140}>
            <div style={{ borderRadius: '14px', padding: '26px 28px', background: `linear-gradient(135deg,${T.navyDark} 0%,${T.navy} 55%,${T.navyMid} 100%)`, position: 'relative', overflow: 'hidden', boxShadow: '0 6px 28px rgba(30,58,138,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
              {/* blobs */}
              <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '120px', height: '120px', borderRadius: '50%', background: T.greenSoft, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(30,58,138,0.3)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '60px', height: '3px', background: `linear-gradient(90deg,${T.green},${T.greenDark})`, borderRadius: '0 0 4px 4px' }} />

              <div style={{ position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '6px' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: T.green, display: 'inline-block', animation: 'pulseDot 1.7s ease infinite' }}></span>
                  <span style={{ color: T.green, fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em' }}>Need Assistance?</span>
                </div>
                <h3 style={{ color: T.white, fontSize: '1.15rem', fontWeight: 800, marginBottom: '4px' }}>Quick help with payment?</h3>
                <p style={{ color: T.slate400, fontSize: '13.5px', margin: 0, lineHeight: 1.55 }}>
                  Our team is available Mon–Sat, 9am–7pm to assist you.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', position: 'relative' }}>
                <a href="https://wa.link/iw4ct4" target="_blank" rel="noreferrer" className="py-btn-g"
                  style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '11px 22px', borderRadius: '9px', fontSize: '14px', fontWeight: 700, color: T.white, background: 'linear-gradient(135deg,#25d366,#128c7e)', textDecoration: 'none', boxShadow: '0 3px 12px rgba(37,211,102,0.35)' }}>
                  <i className="fab fa-whatsapp" style={{ fontSize: '16px' }}></i> WhatsApp Us
                </a>
                <Link to="/contact" className="py-btn-n"
                  style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '11px 22px', borderRadius: '9px', fontSize: '14px', fontWeight: 700, color: T.white, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', textDecoration: 'none' }}>
                  <i className="fas fa-phone" style={{ fontSize: '12px' }}></i> Contact Us
                </Link>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </>
  );
}
