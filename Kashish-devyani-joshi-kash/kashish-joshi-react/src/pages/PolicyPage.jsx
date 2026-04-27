import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const ICON_MAP = {
  'Privacy Policy':    { icon: 'fa-shield-halved', color: '#22c55e', bg: 'rgba(34,197,94,0.1)', gradient: 'linear-gradient(135deg, rgba(3,16,49,0.85), rgba(10,42,26,0.90))', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1400&q=80' },
  'Terms & Conditions':{ icon: 'fa-file-contract', color: '#60a5fa', bg: 'rgba(96,165,250,0.1)', gradient: 'linear-gradient(135deg, rgba(3,16,49,0.85), rgba(10,26,58,0.90))', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80' },
  'Disclaimer':        { icon: 'fa-triangle-exclamation', color: '#fbbf24', bg: 'rgba(251,191,36,0.1)', gradient: 'linear-gradient(135deg, rgba(3,16,49,0.85), rgba(26,18,0,0.90))', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400&q=80' },
  'Refund Policy':     { icon: 'fa-rotate-left', color: '#22c55e', bg: 'rgba(34,197,94,0.1)', gradient: 'linear-gradient(135deg, rgba(3,16,49,0.85), rgba(10,42,26,0.90))', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=80' },
  'Risk Disclosure':   { icon: 'fa-chart-line', color: '#f87171', bg: 'rgba(248,113,113,0.1)', gradient: 'linear-gradient(135deg, rgba(3,16,49,0.85), rgba(26,10,10,0.90))', image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1400&q=80' },
  'Dispute Settlement':{ icon: 'fa-scale-balanced', color: '#60a5fa', bg: 'rgba(96,165,250,0.1)', gradient: 'linear-gradient(135deg, rgba(3,16,49,0.85), rgba(10,26,58,0.90))', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1400&q=80' },
  'Jurisdiction':      { icon: 'fa-landmark', color: '#c084fc', bg: 'rgba(192,132,252,0.1)', gradient: 'linear-gradient(135deg, rgba(3,16,49,0.85), rgba(26,10,42,0.90))', image: 'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=1400&q=80' },
};

const DEFAULT_ICON = { icon: 'fa-circle-info', color: '#60a5fa', bg: 'rgba(96,165,250,0.1)', gradient: 'linear-gradient(135deg, rgba(3,16,49,0.85), rgba(10,26,58,0.90))', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400&q=80' };

function PolicyHero({ title }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 50); }, []);
  const { icon, color, bg, gradient, image } = ICON_MAP[title] || DEFAULT_ICON;

  return (
    <section style={{
      background: `${gradient}, url(${image}) center/cover no-repeat`,
      minHeight: '220px',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '3rem 1rem',
    }}>
      {/* Animated background circles */}
      <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: `radial-gradient(circle, ${color}15 0%, transparent 70%)`, animation: 'pulse 4s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '-40px', left: '10%', width: '200px', height: '200px', borderRadius: '50%', background: `radial-gradient(circle, ${color}10 0%, transparent 70%)`, animation: 'pulse 6s ease-in-out infinite 1s' }} />


      <div style={{ maxWidth: '860px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '24px',
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          opacity: visible ? 1 : 0,
          transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1)'
        }}>
          {/* Icon box */}
          <div style={{
            width: '80px', height: '80px', borderRadius: '20px',
            background: bg, border: `2px solid ${color}40`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, boxShadow: `0 8px 32px ${color}30`,
            animation: 'pulse 3s ease-in-out infinite'
          }}>
            <i className={`fas ${icon}`} style={{ color, fontSize: '32px' }} />
          </div>

          <div>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: `${color}20`, border: `1px solid ${color}40`,
              borderRadius: '20px', padding: '4px 14px',
              marginBottom: '10px',
              transform: visible ? 'translateX(0)' : 'translateX(-20px)',
              opacity: visible ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1) 0.15s'
            }}>
              <i className="fas fa-file-lines" style={{ color, fontSize: '11px' }} />
              <span style={{ color, fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                User Agreement
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800,
              color: '#fff', margin: '0 0 12px', letterSpacing: '-0.02em',
              lineHeight: 1.2,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              opacity: visible ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1) 0.2s'
            }}>
              {title}
            </h1>

            {/* Breadcrumb */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              opacity: visible ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1) 0.3s'
            }}>
              <Link to="/" style={{ color: '#94a3b8', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = color}
                onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}>
                <i className="fas fa-house" style={{ fontSize: '12px', marginRight: '4px' }} />
                Home
              </Link>
              <i className="fas fa-chevron-right" style={{ color: '#475569', fontSize: '10px' }} />
              <span style={{ color, fontSize: '0.9rem', fontWeight: 600 }}>{title}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionCard({ sec, index, title }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const key = sec.heading || title;
  const { icon, color, bg } = ICON_MAP[key] || DEFAULT_ICON;

  return (
    <div
      ref={ref}
      style={{
        background: '#fff',
        borderRadius: '16px',
        padding: '28px 32px',
        boxShadow: '0 4px 24px rgba(30,58,138,0.07)',
        border: `1px solid ${color}22`,
        borderLeft: `4px solid ${color}`,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.97)',
        opacity: visible ? 1 : 0,
        transition: `all 0.6s cubic-bezier(0.4,0,0.2,1) ${index * 0.1}s`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* subtle bg glow */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '120px', height: '120px',
        background: `radial-gradient(circle, ${color}10 0%, transparent 70%)`,
        borderRadius: '50%', pointerEvents: 'none'
      }} />

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '18px' }}>
        {/* Icon */}
        <div style={{
          width: '48px', height: '48px', borderRadius: '12px',
          background: bg, display: 'flex', alignItems: 'center',
          justifyContent: 'center', flexShrink: 0,
          boxShadow: `0 4px 12px ${color}20`
        }}>
          <i className={`fas ${icon}`} style={{ color, fontSize: '20px' }} />
        </div>

        <div style={{ flex: 1 }}>
          {sec.heading && (
            <h4 style={{
              fontSize: '1.05rem', fontWeight: 700, color: '#031031',
              marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px'
            }}>
              {sec.heading}
              <span style={{
                fontSize: '10px', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.08em', color, background: bg,
                padding: '2px 8px', borderRadius: '20px'
              }}>
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>
            </h4>
          )}
          <p style={{
            color: '#475569', fontSize: '0.92rem', lineHeight: 1.8,
            whiteSpace: 'pre-line', margin: 0
          }}>
            {sec.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PolicyPage({ title, sections }) {
  const { color } = ICON_MAP[title] || DEFAULT_ICON;

  return (
    <>
      <PolicyHero title={title} />

      <section style={{ background: 'linear-gradient(135deg, #f0f7ff 0%, #f8fafc 100%)', padding: '2rem 1rem 3rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>

          {/* Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {sections.map((sec, i) => (
              <SectionCard key={i} sec={sec} index={i} title={title} />
            ))}
          </div>

          {/* Footer note */}
          <div style={{
            marginTop: '3rem', padding: '20px 24px',
            background: `linear-gradient(135deg, ${color}10, ${color}05)`,
            borderRadius: '12px', border: `1px solid ${color}20`,
            display: 'flex', alignItems: 'center', gap: '12px'
          }}>
            <i className="fas fa-circle-check" style={{ color, fontSize: '18px', flexShrink: 0 }} />
            <p style={{ margin: 0, fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
              By using our services, you acknowledge that you have read and understood this {title}. For queries, contact us at{' '}
              <a href="mailto:info@kashishjoshiresearch.com" style={{ color, fontWeight: 600, textDecoration: 'none' }}>
                info@kashishjoshiresearch.com
              </a>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
