import { useState, useEffect, useRef } from 'react';

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
//   { q: 'How will I receive recommendations?', a: 'Through your registered mobile/email via SMS and WhatsApp during market hours, as per the subscribed service.' },
//   { q: 'Do you guarantee profits or returns?', a: 'No. Markets involve risk and past performance is not indicative of future results. We provide research-based views only.' },
//   { q: 'Do you offer free trials or samples?', a: 'We occasionally offer demo calls. Please contact us directly to check current availability of trial services.' }
];

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

export default function TestimonialsFaq() {
  const [activeReview, setActiveReview] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const [faqVisible, setFaqVisible] = useState(false);
  
  const { isMobile } = useResponsive();
  
  const sectionRef = useRef(null);
  const testimonialsRef = useRef(null);
  const faqRef = useRef(null);

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