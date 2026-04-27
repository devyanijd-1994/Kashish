import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ThankYou() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem',
        position: 'relative'
      }}>
        
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          pointerEvents: 'none'
        }} />
        
        <div style={{
          maxWidth: '600px',
          width: '100%',
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '24px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
          overflow: 'hidden',
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          position: 'relative',
          zIndex: 1
        }}>
          
          {/* Header Section */}
          <div style={{
            padding: '3rem 2rem 2rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
            animation: isVisible ? 'fadeIn 0.8s ease-out 0.2s both' : 'none'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              borderRadius: '50%',
              margin: '0 auto 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: isVisible ? 'scaleIn 0.6s ease-out 0.4s both' : 'none'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                border: '3px solid white',
                borderRadius: '50%',
                borderTop: '3px solid transparent',
                borderRight: '3px solid transparent',
                transform: 'rotate(45deg)'
              }} />
            </div>

            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              fontWeight: 800,
              margin: '0 0 1rem 0',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Thank You!
            </h1>
            
            <p style={{
              fontSize: '1.1rem',
              margin: 0,
              color: '#64748b',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 500
            }}>
              Your request has been submitted successfully
            </p>
          </div>

          {/* Content Section */}
          <div style={{
            padding: '2rem',
            textAlign: 'center',
            animation: isVisible ? 'slideUp 0.8s ease-out 0.6s both' : 'none'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
              fontWeight: 700,
              color: '#1e293b',
              margin: '0 0 1rem 0',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
              We'll Be In Touch Soon
            </h2>

            <p style={{
              fontSize: '1rem',
              color: '#64748b',
              lineHeight: 1.7,
              margin: '0 0 2rem 0',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              maxWidth: '400px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Our team will review your request and get back to you within 24 hours.
            </p>

            {/* Action Button */}
            <Link 
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: '#ffffff',
                textDecoration: 'none',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: 600,
                fontFamily: 'system-ui, -apple-system, sans-serif',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
                minWidth: '180px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(102, 126, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
              }}
            >
              Back To Home
            </Link>
          </div>

          {/* Footer Section */}
          <div style={{
            padding: '1.5rem 2rem',
            background: 'rgba(248, 250, 252, 0.8)',
            borderTop: '1px solid rgba(226, 232, 240, 0.5)',
            textAlign: 'center',
            animation: isVisible ? 'fadeIn 0.8s ease-out 0.8s both' : 'none'
          }}>
            <p style={{
              fontSize: '0.9rem',
              color: '#667eea',
              margin: '0 0 0.25rem 0',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 600
            }}>
              SEBI Registration: INH000017240
            </p>
            <p style={{
              fontSize: '0.85rem',
              color: '#94a3b8',
              margin: 0,
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
              Kashish Joshi Research
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .thank-you-container {
            margin: 1rem !important;
            padding: 2rem 1.5rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .thank-you-container {
            margin: 0.5rem !important;
            padding: 1.5rem 1rem !important;
          }
        }
      `}</style>
    </>
  );
}