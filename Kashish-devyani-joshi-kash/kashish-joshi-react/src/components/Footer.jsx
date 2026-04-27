import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      {/* Main Footer */}
      <footer style={{ 
        background: 'linear-gradient(135deg, #031031 0%, #1a3a6e 100%)', 
        color: '#fff', 
        padding: '4rem 1rem 3rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(34,197,94,0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 0
        }} />
        
        <div className="max-w-6xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '3rem',
            marginBottom: '2rem'
          }}>

            {/* About Us */}
            <div>
              <h3 style={{ 
                fontSize: '0.9rem', 
                fontWeight: 700, 
                letterSpacing: '0.1em', 
                color: '#22c55e', 
                textTransform: 'uppercase', 
                marginBottom: '1.5rem',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>
                About Us
              </h3>
              <p style={{ 
                fontSize: '0.95rem', 
                color: '#e2e8f0', 
                lineHeight: 1.7, 
                marginBottom: '1rem',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: 400
              }}>
                We employ a team of expert research analysts specializing in Harmonic Price & Time Studies, along with custom lead indicators that deliver signals ahead of conventional, lagging technical tools.
              </p>
              <p style={{ 
                fontSize: '0.95rem', 
                color: '#e2e8f0', 
                lineHeight: 1.7, 
                marginBottom: '1.5rem',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: 400
              }}>
                Kashish Joshi Research is a pioneering advisory and coaching firm, staffed by seasoned finance professionals dedicated to delivering forward-looking insights.
              </p>
              <Link 
                to="/about" 
                style={{ 
                  fontSize: '0.9rem', 
                  fontWeight: 600, 
                  color: '#22c55e', 
                  textDecoration: 'none',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#16a34a';
                  e.currentTarget.style.transform = 'translateX(3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#22c55e';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                Read more <span>→</span>
              </Link>
            </div>

            {/* Need Help */}
            <div>
              <h3 style={{ 
                fontSize: '0.9rem', 
                fontWeight: 700, 
                letterSpacing: '0.1em', 
                color: '#22c55e', 
                textTransform: 'uppercase', 
                marginBottom: '1.5rem',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>
                Need Help?
              </h3>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0, 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '0.8rem' 
              }}>
                {[
                  { label: 'About Us', to: '/about' },
                  { label: 'Privacy Policy', to: '/privacy-policy' },
                  { label: 'Our Refund Policy', to: '/our-refund-policy' },
                  { label: 'Our Disclaimer', to: '/our-disclaimer' },
                  { label: 'Terms & Conditions', to: '/terms-condition' },
                ].map((item, i) => (
                  <li key={i}>
                    <Link 
                      to={item.to} 
                      style={{ 
                        fontSize: '0.9rem', 
                        color: '#cbd5e1', 
                        textDecoration: 'none',
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        fontWeight: 500,
                        transition: 'all 0.3s ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = '#22c55e';
                        e.currentTarget.style.transform = 'translateX(3px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = '#cbd5e1';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <span style={{ fontSize: '0.7rem' }}>▶</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 style={{ 
                fontSize: '0.9rem', 
                fontWeight: 700, 
                letterSpacing: '0.1em', 
                color: '#22c55e', 
                textTransform: 'uppercase', 
                marginBottom: '1.5rem',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>
                Our Services
              </h3>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0, 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '0.8rem' 
              }}>
                {[
                  { label: 'Stock Cash', to: '/stock-cash' },
                  { label: 'Option Services', to: '/option' },
                  { label: 'Future Services', to: '/future' },
                  { label: 'Banknifty / Nifty Options', to: '/banknifty-nifty-option' },
                  { label: 'Banknifty / Nifty Future', to: '/banknifty-nifty-future' },
                  { label: 'Commodity Services', to: '/commodity-services' },
                ].map((item, i) => (
                  <li key={i}>
                    <Link 
                      to={item.to} 
                      style={{ 
                        fontSize: '0.9rem', 
                        color: '#cbd5e1', 
                        textDecoration: 'none',
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        fontWeight: 500,
                        transition: 'all 0.3s ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = '#22c55e';
                        e.currentTarget.style.transform = 'translateX(3px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = '#cbd5e1';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <span style={{ fontSize: '0.7rem' }}>▶</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 style={{ 
                fontSize: '0.9rem', 
                fontWeight: 700, 
                letterSpacing: '0.1em', 
                color: '#22c55e', 
                textTransform: 'uppercase', 
                marginBottom: '1.5rem',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>
                Contact Us
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontFamily: 'system-ui, -apple-system, sans-serif' }}>SEBI Reg. No.</span>
                  <span style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 600, fontFamily: 'system-ui, -apple-system, sans-serif' }}>INH000017240</span>
                </div>
                <a href="mailto:info@kashishjoshiresearch.com" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 500, transition: 'all 0.3s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#22c55e'; e.currentTarget.style.transform = 'translateX(3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#cbd5e1'; e.currentTarget.style.transform = 'translateX(0)'; }}>
                  <i className="fas fa-envelope" style={{ color: '#22c55e', width: '14px' }}></i>
                  info@kashishjoshiresearch.com
                </a>
                <a href="tel:+919171718451" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 500, transition: 'all 0.3s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#22c55e'; e.currentTarget.style.transform = 'translateX(3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#cbd5e1'; e.currentTarget.style.transform = 'translateX(0)'; }}>
                  <i className="fas fa-phone" style={{ color: '#22c55e', width: '14px' }}></i>
                  +91 91717 18451
                </a>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#cbd5e1', fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 500 }}>
                  <i className="fas fa-clock" style={{ color: '#22c55e', width: '14px' }}></i>
                  Mon–Sat · 9:00 AM – 7:00 PM
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#cbd5e1', fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 500, lineHeight: 1.4 }}>
                  <i className="fas fa-location-dot" style={{ color: '#22c55e', marginTop: '2px', width: '14px' }}></i>
                  Co Habituss Co-working Space, Hiran Magri, Udaipur, Rajasthan – 313002
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>

      {/* Copyright bar */}
      <div style={{ 
        background: '#1a3a6e', 
        padding: '1.5rem 1rem', 
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <p style={{ 
          fontSize: '0.9rem', 
          color: '#cbd5e1', 
          margin: 0,
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontWeight: 400
        }}>
          © 2025 <span style={{ 
            color: '#22c55e', 
            fontWeight: 600 
          }}>
            Kashish Joshi Research
          </span>. All rights reserved.
        </p>
      </div>
    </>
  );
}