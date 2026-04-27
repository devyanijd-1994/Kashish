import { useState, useEffect, useRef } from 'react';

const PROBLEMS = [
  {
    icon: 'fa-chart-line-down',
    title: 'Losing money with random stock tips?',
    description: 'Getting overwhelmed by unverified tips from multiple sources without proper research backing?',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    icon: 'fa-exclamation-triangle',
    title: 'Confused by too many recommendations?',
    description: 'Struggling to filter through countless stock suggestions without clear direction or priority?',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    icon: 'fa-route',
    title: 'No clear entry, exit, or stop-loss strategy?',
    description: 'Trading without defined risk management and exit strategies, leading to unpredictable outcomes?',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }
];

export default function ProblemSolution() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleProblems, setVisibleProblems] = useState(new Set());
  const [solutionVisible, setSolutionVisible] = useState(false);
  const sectionRef = useRef(null);
  const problemRefs = useRef([]);
  const solutionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const problemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const problemIndex = parseInt(entry.target.dataset.problemIndex);
            setVisibleProblems(prev => new Set([...prev, problemIndex]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -30px 0px' }
    );

    const solutionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSolutionVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (solutionRef.current) solutionObserver.observe(solutionRef.current);
    
    problemRefs.current.forEach((ref) => {
      if (ref) problemObserver.observe(ref);
    });

    return () => {
      observer.disconnect();
      problemObserver.disconnect();
      solutionObserver.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      style={{ 
        background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)', 
        padding: '4rem 1rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Modern Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(30, 58, 138, 0.05) 0%, transparent 50%)
        `,
        zIndex: 0
      }} />

      <div className="max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Modern Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.1), rgba(30, 64, 175, 0.05))',
            padding: '0.5rem 1.5rem',
            borderRadius: '50px',
            border: '1px solid rgba(30, 58, 138, 0.2)',
            marginBottom: '1.5rem'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#1e3a8a',
              animation: 'pulse 2s infinite'
            }} />
            <span style={{ 
              fontSize: '0.75rem', 
              fontWeight: 700, 
              color: '#1e3a8a', 
              letterSpacing: '0.1em', 
              textTransform: 'uppercase'
            }}>
              Common Trading Problems
            </span>
          </div>
          
          <h2 style={{ 
            fontFamily: 'system-ui, -apple-system, sans-serif', 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            fontWeight: 800, 
            color: '#1e293b', 
            marginBottom: '1rem',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 1s ease-out 0.3s'
          }}>
            Are You Struggling With{' '}
            <span style={{
              color: '#dc2626',
              fontWeight: 800
            }}>
              These Issues?
            </span>
          </h2>
          
          <p style={{
            fontSize: '1.1rem',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6,
            fontWeight: 500,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 1s ease-out 0.5s'
          }}>
            Many traders face these challenges that prevent consistent profitability
          </p>
        </div>

        {/* Problems Grid - New Design */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', 
          gap: '2rem', 
          marginBottom: '4rem' 
        }}>
          {PROBLEMS.map((problem, i) => {
            const isProblemVisible = visibleProblems.has(i);
            
            return (
              <div 
                key={i}
                ref={el => problemRefs.current[i] = el}
                data-problem-index={i}
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '0',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(226, 232, 240, 0.8)',
                  position: 'relative',
                  overflow: 'hidden',
                  transform: isProblemVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
                  opacity: isProblemVisible ? 1 : 0,
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDelay: `${i * 0.2}s`,
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
                }}
              >
                {/* Image Section */}
                <div style={{
                  height: '200px',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '24px 24px 0 0'
                }}>
                  <img 
                    src={problem.image}
                    alt={problem.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      transform: isProblemVisible ? 'scale(1)' : 'scale(1.1)',
                      transition: 'all 0.8s ease-out',
                      transitionDelay: `${i * 0.2 + 0.1}s`
                    }}
                    onError={(e) => {
                      e.target.src = '/assets/images/hero-image.png';
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.7) 0%, rgba(30, 64, 175, 0.5) 100%)',
                    opacity: isProblemVisible ? 0.8 : 0.9,
                    transition: 'opacity 0.8s ease-out',
                    transitionDelay: `${i * 0.2 + 0.2}s`
                  }} />
                  
                  {/* Problem Number */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: '#1e3a8a',
                    transform: isProblemVisible ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-90deg)',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDelay: `${i * 0.2 + 0.3}s`,
                    zIndex: 2
                  }}>
                    {i + 1}
                  </div>

                  {/* Warning Icon - Removed question mark, using exclamation triangle */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    transform: isProblemVisible ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.8)',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDelay: `${i * 0.2 + 0.4}s`,
                    zIndex: 2
                  }}>
                    <i className="fas fa-exclamation-triangle" style={{ 
                      color: '#fff', 
                      fontSize: '2rem',
                      textShadow: '0 2px 8px rgba(0,0,0,0.4)'
                    }}></i>
                  </div>
                </div>

                {/* Content Section */}
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ 
                    fontSize: '1.3rem', 
                    fontWeight: 700, 
                    color: '#1e293b', 
                    marginBottom: '1rem', 
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    lineHeight: 1.3,
                    letterSpacing: '-0.01em',
                    transform: isProblemVisible ? 'translateY(0)' : 'translateY(20px)',
                    opacity: isProblemVisible ? 1 : 0,
                    transition: 'all 0.6s ease-out',
                    transitionDelay: `${i * 0.2 + 0.5}s`
                  }}>
                    {problem.title}
                  </h3>
                  
                  <p style={{ 
                    fontSize: '1rem', 
                    color: '#64748b', 
                    lineHeight: 1.6, 
                    margin: 0,
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                    transform: isProblemVisible ? 'translateY(0)' : 'translateY(20px)',
                    opacity: isProblemVisible ? 1 : 0,
                    transition: 'all 0.6s ease-out',
                    transitionDelay: `${i * 0.2 + 0.6}s`
                  }}>
                    {problem.description}
                  </p>

                  {/* Problem Indicator */}
                  <div style={{
                    marginTop: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transform: isProblemVisible ? 'translateY(0)' : 'translateY(20px)',
                    opacity: isProblemVisible ? 1 : 0,
                    transition: 'all 0.6s ease-out',
                    transitionDelay: `${i * 0.2 + 0.7}s`
                  }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#1e3a8a'
                    }} />
                    <span style={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#1e3a8a',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Common Issue
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Solution Section - Light Background */}
        <div 
          ref={solutionRef}
          style={{
            background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
            borderRadius: '32px',
            padding: '0',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(226, 232, 240, 0.8)',
            transform: solutionVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
            opacity: solutionVisible ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '0.3s'
          }}
        >
          {/* Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(30, 58, 138, 0.03) 0%, transparent 50%)
            `,
            zIndex: 0
          }} />

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            minHeight: '400px',
            position: 'relative',
            zIndex: 2
          }}>
            {/* Left: Solution Content */}
            <div style={{ 
              flex: '0 0 60%',
              padding: '3rem',
              color: '#1e293b'
            }}>
              {/* Solution Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(22, 163, 74, 0.05))',
                padding: '0.5rem 1rem',
                borderRadius: '50px',
                border: '1px solid rgba(34, 197, 94, 0.2)',
                marginBottom: '1.5rem',
                transform: solutionVisible ? 'translateX(0)' : 'translateX(-30px)',
                opacity: solutionVisible ? 1 : 0,
                transition: 'all 0.8s ease-out',
                transitionDelay: '0.5s'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  animation: 'pulse 2s infinite'
                }} />
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#16a34a',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  Our Solution
                </span>
              </div>

              <h3 style={{ 
                fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', 
                fontWeight: 700, 
                marginBottom: '1rem', 
                fontFamily: 'system-ui, -apple-system, sans-serif',
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
                color: '#1e293b',
                transform: solutionVisible ? 'translateX(0)' : 'translateX(-30px)',
                opacity: solutionVisible ? 1 : 0,
                transition: 'all 0.8s ease-out',
                transitionDelay: '0.6s'
              }}>
                Structured Trading with{' '}
                <span style={{
                  color: '#1e3a8a',
                  fontWeight: 800
                }}>
                  Clear Strategy
                </span>
              </h3>
              
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: 1.6, 
                marginBottom: '2rem',
                fontWeight: 500,
                color: '#64748b',
                letterSpacing: '0.01em',
                transform: solutionVisible ? 'translateX(0)' : 'translateX(-30px)',
                opacity: solutionVisible ? 1 : 0,
                transition: 'all 0.8s ease-out',
                transitionDelay: '0.7s'
              }}>
                We provide <strong style={{ color: '#1e293b' }}>research-backed recommendations</strong> with precise entry, exit, and stop-loss levels—eliminating guesswork and maximizing your trading confidence.
              </p>

              {/* Features Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(180px, 100%), 1fr))',
                gap: '1rem',
                marginBottom: '2rem',
                transform: solutionVisible ? 'translateX(0)' : 'translateX(-30px)',
                opacity: solutionVisible ? 1 : 0,
                transition: 'all 0.8s ease-out',
                transitionDelay: '0.8s'
              }}>
                {[
                  { icon: 'fa-bullseye', text: 'Precise Entry Points' },
                  { icon: 'fa-shield-alt', text: 'Risk Management' },
                  { icon: 'fa-chart-line', text: 'Research-Backed' },
                  { icon: 'fa-clock', text: 'Timely Alerts' }
                ].map((feature, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem',
                    background: '#ffffff',
                    borderRadius: '12px',
                    border: '1px solid rgba(226, 232, 240, 0.8)',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                    transform: solutionVisible ? 'translateY(0)' : 'translateY(20px)',
                    opacity: solutionVisible ? 1 : 0,
                    transition: 'all 0.6s ease-out',
                    transitionDelay: `${0.9 + i * 0.1}s`
                  }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <i className={`fas ${feature.icon}`} style={{ 
                        color: '#fff', 
                        fontSize: '0.9rem'
                      }}></i>
                    </div>
                    <span style={{ 
                      fontSize: '0.9rem', 
                      fontWeight: 600,
                      color: '#374151',
                      letterSpacing: '0.01em'
                    }}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div style={{
                transform: solutionVisible ? 'translateX(0)' : 'translateX(-30px)',
                opacity: solutionVisible ? 1 : 0,
                transition: 'all 0.8s ease-out',
                transitionDelay: '1.3s'
              }}>
                <a 
                  href="https://wa.me/919171718451" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                    color: '#fff',
                    fontWeight: 700,
                    padding: '1rem 2rem',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                    boxShadow: '0 8px 25px rgba(34, 197, 94, 0.3)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '2px solid transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#16a34a';
                    e.target.style.border = '2px solid #16a34a';
                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                    e.target.style.boxShadow = '0 12px 35px rgba(34, 197, 94, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
                    e.target.style.color = '#fff';
                    e.target.style.border = '2px solid transparent';
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 8px 25px rgba(34, 197, 94, 0.3)';
                  }}
                >
                  <i className="fab fa-whatsapp" style={{ fontSize: '1.2rem' }}></i>
                  Start Trading Smart
                </a>
              </div>
            </div>

            {/* Right: Solution Image */}
            <div style={{ 
              flex: '0 0 40%',
              padding: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '300px'
              }}>
                <img 
                  src="/assets/images/facilities-img.png"
                  alt="Trading Success"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '20px',
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)',
                    transform: solutionVisible ? 'scale(1) rotate(0deg)' : 'scale(0.9) rotate(3deg)',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDelay: '0.6s'
                  }}
                  onError={(e) => {
                    e.target.src = '/assets/images/hero-image.png';
                  }}
                />
                
                {/* Success Badge */}
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 25px rgba(34, 197, 94, 0.3)',
                  transform: solutionVisible ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-90deg)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDelay: '0.8s'
                }}>
                  <i className="fas fa-check" style={{ 
                    color: '#fff', 
                    fontSize: '1.5rem'
                  }}></i>
                </div>

                {/* Floating Elements */}
                <div style={{
                  position: 'absolute',
                  bottom: '-15px',
                  left: '-15px',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 20px rgba(34, 197, 94, 0.3)',
                  transform: solutionVisible ? 'scale(1)' : 'scale(0.8)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDelay: '1s',
                  animation: solutionVisible ? 'float 3s ease-in-out infinite' : 'none'
                }}>
                  <i className="fas fa-chart-line" style={{ 
                    color: '#fff', 
                    fontSize: '1.2rem'
                  }}></i>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Enhanced CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        /* Tablet and smaller desktop */
        @media (max-width: 1024px) {
          div[style*="flex: 0 0 60%"] {
            flex: 0 0 100% !important;
            padding: 2rem !important;
          }
          div[style*="flex: 0 0 40%"] {
            flex: 0 0 100% !important;
            padding: 2rem !important;
          }
          div[style*="display: flex"][style*="minHeight: 400px"] {
            flex-direction: column !important;
            text-align: center !important;
            min-height: auto !important;
          }
        }
        
        /* Mobile landscape and smaller tablets */
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: repeat(auto-fit, minmax(min(320px, 100%), 1fr))"] {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          div[style*="gridTemplateColumns: repeat(auto-fit, minmax(min(180px, 100%), 1fr))"] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
          }
          
          /* Adjust padding for mobile */
          div[style*="padding: 4rem 1rem"] {
            padding: 2rem 1rem !important;
          }
          div[style*="padding: 3rem"] {
            padding: 1.5rem !important;
          }
          div[style*="padding: 2rem"] {
            padding: 1rem !important;
          }
          
          /* Solution section mobile adjustments */
          div[style*="borderRadius: 32px"] {
            border-radius: 20px !important;
            margin: 0 0.5rem !important;
          }
        }
        
        /* Small mobile phones */
        @media (max-width: 480px) {
          div[style*="gridTemplateColumns: repeat(auto-fit, minmax(min(180px, 100%), 1fr))"] {
            grid-template-columns: 1fr !important;
          }
          
          /* Make images smaller on mobile */
          div[style*="height: 200px"] {
            height: 150px !important;
          }
          
          /* Adjust font sizes for mobile */
          h2[style*="fontSize: clamp(2rem, 4vw, 3rem)"] {
            font-size: clamp(1.5rem, 6vw, 2.5rem) !important;
          }
          h3[style*="fontSize: clamp(1.4rem, 2.5vw, 1.8rem)"] {
            font-size: clamp(1.2rem, 4vw, 1.6rem) !important;
          }
          
          /* Button adjustments */
          a[style*="padding: 1rem 2rem"] {
            padding: 0.75rem 1.5rem !important;
            font-size: 0.9rem !important;
          }
          
          /* Floating elements adjustments */
          div[style*="position: absolute"][style*="width: 60px"] {
            width: 45px !important;
            height: 45px !important;
            top: -8px !important;
            right: -8px !important;
          }
          div[style*="position: absolute"][style*="width: 50px"] {
            width: 40px !important;
            height: 40px !important;
            bottom: -10px !important;
            left: -10px !important;
          }
        }
        
        /* Extra small screens */
        @media (max-width: 360px) {
          div[style*="padding: 4rem 1rem"] {
            padding: 1.5rem 0.5rem !important;
          }
          div[style*="borderRadius: 32px"] {
            margin: 0 !important;
            border-radius: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}