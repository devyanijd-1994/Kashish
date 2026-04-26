import { useState, useEffect } from 'react';

const REVIEWS = [
  {
    text: "The service is very good.. specially the advisor is very nice n humble person who tries to give his best.. I think employees like him actually represents the company's good wills.",
    name: 'Priya Sharma',
    location: 'Maharashtra',
  },
  {
    text: '"A nice place for fundamental analysis to see the growth ability of a stock. Stock screeners also assist in locating and selecting the appropriate stocks.',
    name: 'Manoj Panday',
    location: 'Uttar Pradesh',
  },
  {
    text: 'My doubts were answered in a very informative way during our conversations with their advisor. I upgraded to their PRO plan and never looked back. Highly recommended!',
    name: 'Ravi Prashad',
    location: 'Delhi',
  },
  {
    text: 'Best part is no fake promises. Genuine research-based calls.',
    name: 'Sunita Verma',
    location: 'Rajasthan',
  },
];

// Inline Google "G" SVG
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

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % REVIEWS.length), 4500);
    return () => clearInterval(t);
  }, []);

  const review = REVIEWS[active];

  return (
    <section style={{ background: '#fff', padding: '3rem 1rem', position: 'relative', overflow: 'hidden' }}>

      {/* Big background quote marks */}
      <div style={{ position: 'absolute', top: '1rem', left: '2rem', fontSize: '12rem', color: 'rgba(26,60,46,0.06)', fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>"</div>
      <div style={{ position: 'absolute', bottom: '1rem', right: '2rem', fontSize: '12rem', color: 'rgba(26,60,46,0.06)', fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: 1, userSelect: 'none', pointerEvents: 'none', transform: 'rotate(180deg)' }}>"</div>

      <div className="max-w-3xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
          <div style={{ width: '32px', height: '2px', background: '#c9a84c' }} />
          <h2 style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 400, color: '#1a1a2e', margin: 0 }}>
            What Our Clients Say
          </h2>
        </div>

        {/* Review text */}
        <p style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontStyle: 'italic',
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: '#2a2a2a',
          lineHeight: 1.85,
          textAlign: 'center',
          marginBottom: '2.5rem',
          minHeight: '100px',
          transition: 'opacity 0.4s',
        }}>
          "{review.text}"
        </p>

        {/* Google logos — 3 stacked, center one bigger */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
          <div style={{ opacity: 0.55, transform: 'scale(0.8)' }}><GoogleIcon size={36} /></div>
          <GoogleIcon size={52} />
          <div style={{ opacity: 0.55, transform: 'scale(0.8)' }}><GoogleIcon size={36} /></div>
        </div>

        {/* Name + location */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.85rem', fontWeight: 800, color: '#1a3a6e', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
            {review.name}
          </p>
          <p style={{ fontSize: '0.8rem', color: '#888' }}>{review.location}</p>
          <div style={{ width: '60px', height: '1px', background: '#ccc', margin: '0.75rem auto 0' }} />
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
          {REVIEWS.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              style={{
                width: i === active ? '24px' : '8px',
                height: '8px',
                borderRadius: '999px',
                background: i === active ? '#1a3a6e' : '#bbb',
                border: 'none', cursor: 'pointer', padding: 0,
                transition: 'all 0.3s',
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
