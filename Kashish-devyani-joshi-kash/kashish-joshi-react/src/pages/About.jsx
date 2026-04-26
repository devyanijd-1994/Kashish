import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    { 
      icon: '📈', 
      title: 'Intraday Trading Signals', 
      description: 'High-probability intraday calls with proper entry, exit, and stop-loss levels for active traders.',
      to: '/stock-cash' 
    },
    { 
      icon: '⚡', 
      title: 'Option Services', 
      description: 'Premium option trading signals designed for exponential returns with calculated risk management.',
      to: '/option' 
    },
    { 
      icon: '🚀', 
      title: 'Future Signals', 
      description: 'Premier level futures trading services for high net worth clients seeking exceptional profits.',
      to: '/future' 
    },
    { 
      icon: '💎', 
      title: 'Index Options', 
      description: 'Specialized Nifty and Bank Nifty option strategies for consistent market outperformance.',
      to: '/banknifty-nifty-option' 
    },
    { 
      icon: '🎯', 
      title: 'Index Futures', 
      description: 'Professional index futures trading with advanced technical and fundamental analysis.',
      to: '/banknifty-nifty-future' 
    },
    { 
      icon: '🧠', 
      title: 'MCX & NCDEX', 
      description: 'Comprehensive commodity trading signals backed by deep market research and analysis.',
      to: '/commodity-services' 
    },
  ];

  const achievements = [
    { number: '80-90%', label: 'Success Rate', icon: '🎯' },
    { number: '8+', label: 'Years Experience', icon: '⏱️' },
    { number: '5000+', label: 'Happy Clients', icon: '👥' },
    { number: '6', label: 'Service Types', icon: '📊' },
  ];

  const testimonials = [
    { 
      name: 'Rajesh Kumar', 
      role: 'Professional Trader', 
      text: 'Kashish Joshi\'s signals have transformed my trading journey. The accuracy and timing are exceptional, helping me achieve consistent profits in volatile markets.',
      rating: 5
    },
    { 
      name: 'Priya Sharma', 
      role: 'Investment Advisor', 
      text: 'The research quality and market insights provided are outstanding. I\'ve recommended Kashish Joshi Research to all my clients for reliable trading signals.',
      rating: 5
    },
    { 
      name: 'Amit Patel', 
      role: 'Retail Investor', 
      text: 'Started with small investments and now managing a substantial portfolio thanks to the consistent guidance and profitable recommendations.',
      rating: 5
    },
  ];

  const faqs = [
    { 
      q: 'What makes Kashish Joshi Research different from other advisory services?', 
      a: 'Our unique combination of technical expertise, fundamental analysis, and 8+ years of market experience delivers 80-90% success rates. We focus on risk management and provide detailed entry, exit, and stop-loss levels for every recommendation.' 
    },
    { 
      q: 'How do you achieve such high success rates in your trading signals?', 
      a: 'Our success comes from rigorous market research, advanced technical analysis, real-time market monitoring, and strict risk management protocols. We analyze multiple timeframes and market indicators before making any recommendations.' 
    },
    { 
      q: 'What support do you provide to your clients?', 
      a: 'We offer 24/7 customer support, real-time market updates, detailed research reports, and personalized guidance. Our team is always available to help clients understand market movements and trading strategies.' 
    },
    { 
      q: 'Can beginners benefit from your services?', 
      a: 'Absolutely! We provide educational content, detailed explanations with each signal, and step-by-step guidance. Our support team helps beginners understand market dynamics and develop their trading skills.' 
    },
  ];

  return (
    <>
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .gradient-text {
            background: linear-gradient(135deg, var(--primary-green), #4ade80);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .hover-lift {
            transition: all 0.3s ease;
          }
          
          .hover-lift:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(30, 58, 138, 0.15);
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="section" style={{ 
        background: 'linear-gradient(135deg, var(--bg-dark) 0%, var(--primary-navy) 100%)', 
        padding: 'var(--spacing-xl) var(--spacing-md)',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', color: 'var(--text-white)' }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: 'var(--spacing-xs)', 
              border: '1px solid var(--primary-green)', 
              borderRadius: '20px', 
              padding: '0.4rem 0.8rem', 
              marginBottom: 'var(--spacing-md)',
              background: 'rgba(34, 197, 94, 0.1)',
              backdropFilter: 'blur(10px)'
            }}>
              <span style={{ 
                color: 'var(--primary-green)', 
                fontSize: '0.7rem', 
                fontWeight: 600, 
                letterSpacing: '0.05em',
                fontFamily: 'var(--font-family)',
                textTransform: 'uppercase'
              }}>
                🏆 TRUSTED BY 5000+ TRADERS
              </span>
            </div>
            
            <h1 className="heading-xl" style={{ 
              fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', 
              fontWeight: 700, 
              color: 'var(--text-white)', 
              marginBottom: 'var(--spacing-md)',
              lineHeight: 1.2,
              letterSpacing: '-0.01em'
            }}>
              About <span className="gradient-text">Kashish Joshi</span><br />
              Research
            </h1>
            
            <p className="body-text" style={{ 
              fontSize: 'var(--font-size-base)', 
              color: 'var(--text-light)', 
              maxWidth: '600px', 
              margin: '0 auto var(--spacing-lg)', 
              lineHeight: 1.5,
              opacity: 0.9
            }}>
              Leading the financial markets with 8+ years of expertise, delivering 80-90% success rates through advanced research and professional trading strategies.
            </p>

            <div style={{ display: 'flex', gap: 'var(--spacing-sm)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary" style={{
                background: 'linear-gradient(135deg, var(--primary-green), var(--primary-green-dark))',
                color: 'var(--text-white)',
                padding: 'var(--spacing-sm) var(--spacing-lg)',
                fontSize: 'var(--font-size-sm)',
                textDecoration: 'none',
                borderRadius: 'var(--radius-md)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.01em',
                transition: 'var(--transition-normal)'
              }}>
                <i className="fas fa-phone-alt" style={{ marginRight: 'var(--spacing-xs)' }}></i>
                Get Started Today
              </Link>
              <Link to="/services" className="btn-secondary" style={{
                background: 'transparent',
                color: 'var(--text-white)',
                border: '2px solid var(--text-white)',
                padding: 'var(--spacing-sm) var(--spacing-lg)',
                fontSize: 'var(--font-size-sm)',
                textDecoration: 'none',
                borderRadius: 'var(--radius-md)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.01em',
                transition: 'var(--transition-normal)'
              }}>
                <i className="fas fa-chart-line" style={{ marginRight: 'var(--spacing-xs)' }}></i>
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section from Home */}
      <section
        ref={sectionRef}
        className="section section-alt"
        style={{
          background: 'linear-gradient(135deg, #f0f8f4 0%, #f7fafc 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background decorations */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(34,197,94,0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(30,58,138,0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 0
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>

            {/* Left: About Us Content */}
            <div style={{ 
              flex: '1', 
              minWidth: '500px',
              transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
              
              {/* Header */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.8rem', 
                  marginBottom: '0.8rem',
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isVisible ? 1 : 0,
                  transition: 'all 0.6s ease-out 0.2s'
                }}>
                  <div style={{ 
                    width: '30px', 
                    height: '3px', 
                    background: 'linear-gradient(90deg, #22c55e, #16a34a)',
                    borderRadius: '2px'
                  }} />
                  <span className="small-text" style={{ 
                    color: '#16a34a', 
                    fontWeight: 700, 
                    letterSpacing: '0.15em', 
                    textTransform: 'uppercase',
                    fontSize: '0.85rem',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}>
                    WHO WE ARE
                  </span>
                </div>
                <h2 className="heading-xl" style={{ 
                  marginBottom: '1rem',
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  opacity: isVisible ? 1 : 0,
                  transition: 'all 0.8s ease-out 0.3s'
                }}>
                  About Us
                </h2>
              </div>
              
              {/* Content */}
              <div style={{ 
                marginBottom: '2.5rem',
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out 0.4s'
              }}>
                <p className="body-text" style={{ 
                  marginBottom: '1.2rem'
                }}>
                  Kashish Joshi Research is one of the financial companies that traders trust with their lives. We provide professional services for trading stocks and commodities. Our goal is to provide our clients with market knowledge and expertise so they may maximize their trading profits.
                </p>
                
                <p className="body-text" style={{ 
                  marginBottom: '0'
                }}>
                  As a prosperous stock advising business, we typically prioritize your financial goals, which helps you eventually achieve financial autonomy. We have continuously worked to provide a challenging and knowledgeable environment.
                </p>
              </div>

              {/* Stats */}
              <div style={{ 
                display: 'flex', 
                gap: '2.5rem', 
                marginBottom: '2.5rem', 
                flexWrap: 'wrap',
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out 0.5s'
              }}>
                <div className="card hover-lift" style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1.2rem',
                  padding: '1rem',
                  background: 'rgba(255,255,255,0.7)',
                  borderRadius: '12px',
                  boxShadow: '0 4px 15px rgba(30, 58, 138, 0.1)',
                  border: '1px solid rgba(255,255,255,0.8)'
                }}>
                  <div style={{ 
                    width: '70px', 
                    height: '70px', 
                    borderRadius: '50%', 
                    background: `conic-gradient(#22c55e 0deg ${90 * 3.6}deg, #e5e7eb ${90 * 3.6}deg 360deg)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    animation: isVisible ? 'pulse 3s infinite' : 'none'
                  }}>
                    <div style={{ 
                      width: '52px', 
                      height: '52px', 
                      borderRadius: '50%', 
                      background: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: '#1e3a8a',
                      fontFamily: 'system-ui, -apple-system, sans-serif'
                    }}>
                      90%
                    </div>
                  </div>
                  <div>
                    <p className="heading-md" style={{ 
                      margin: 0,
                      fontSize: '1.1rem',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontWeight: 700,
                      color: '#1e3a8a'
                    }}>Client</p>
                    <p className="heading-md" style={{ 
                      margin: 0,
                      fontSize: '1.1rem',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontWeight: 700,
                      color: '#1e3a8a'
                    }}>Satisfied</p>
                  </div>
                </div>

                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1.2rem',
                  padding: '1rem',
                  background: 'rgba(255,255,255,0.7)',
                  borderRadius: '12px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                  border: '1px solid rgba(255,255,255,0.8)',
                  transition: 'all 0.3s ease'
                }} className="hover-lift">
                  <div style={{ 
                    width: '70px', 
                    height: '70px', 
                    borderRadius: '50%', 
                    background: `conic-gradient(#22c55e 0deg ${75 * 3.6}deg, #e5e7eb ${75 * 3.6}deg 360deg)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    animation: isVisible ? 'pulse 3s infinite 0.5s' : 'none'
                  }}>
                    <div style={{ 
                      width: '52px', 
                      height: '52px', 
                      borderRadius: '50%', 
                      background: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#1e3a8a',
                      fontFamily: 'system-ui, -apple-system, sans-serif'
                    }}>
                      75%
                    </div>
                  </div>
                  <div>
                    <p style={{ 
                      fontSize: '1.1rem', 
                      fontWeight: 700, 
                      color: '#1e3a8a', 
                      margin: 0,
                      fontFamily: 'system-ui, -apple-system, sans-serif'
                    }}>Financial</p>
                    <p style={{ 
                      fontSize: '1.1rem', 
                      fontWeight: 700, 
                      color: '#1e3a8a', 
                      margin: 0,
                      fontFamily: 'system-ui, -apple-system, sans-serif'
                    }}>Consultation</p>
                  </div>
                </div>
              </div>

              {/* Highlight Box */}
              <div style={{ 
                background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)', 
                color: '#fff', 
                padding: '1.5rem', 
                borderRadius: '12px', 
                marginBottom: '2rem',
                fontSize: '1rem',
                lineHeight: 1.7,
                fontWeight: 500,
                fontFamily: 'system-ui, -apple-system, sans-serif',
                boxShadow: '0 8px 25px rgba(30,58,138,0.2)',
                border: '1px solid rgba(255,255,255,0.1)',
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out 0.6s'
              }}>
                We at Kashish Joshi Research are not simply focused on financial services. You'll see that we partner with you as financial advisors. For the previous eight years, we have served by providing our services.
              </div>

              <Link to="/contact" style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)', 
                color: '#fff', 
                fontWeight: 600, 
                padding: '0.9rem 2.2rem', 
                borderRadius: '8px', 
                textDecoration: 'none', 
                fontSize: '0.95rem',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                boxShadow: '0 4px 15px rgba(34,197,94,0.3)',
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out 0.7s'
              }} className="hover-lift">
                Get Started Now
                <span style={{ fontSize: '1.1rem' }}>→</span>
              </Link>
            </div>

            {/* Right: Image and Experience */}
            <div style={{ 
              flex: '0 0 auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2rem',
              transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(50px) scale(0.9)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
            }}>
              
              {/* Experience Text */}
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem',
                  marginBottom: '0.5rem'
                }}>
                  <div style={{ 
                    width: '50px', 
                    height: '3px', 
                    background: 'linear-gradient(90deg, #1e3a8a, #22c55e)',
                    borderRadius: '2px'
                  }} />
                  <div>
                    <p style={{ 
                      fontSize: '1.3rem', 
                      fontFamily: 'system-ui, -apple-system, sans-serif', 
                      color: '#1e3a8a', 
                      lineHeight: 1.3,
                      margin: 0,
                      fontWeight: 600
                    }}>
                      Years of Experience
                    </p>
                    <p style={{ 
                      fontSize: '1.1rem', 
                      fontFamily: 'system-ui, -apple-system, sans-serif', 
                      color: '#64748b', 
                      lineHeight: 1.3,
                      margin: 0,
                      fontWeight: 500
                    }}>
                      Proven Strategies for Quality Investments
                    </p>
                  </div>
                </div>
              </div>

              {/* Image Container */}
              <div style={{ 
                position: 'relative',
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                border: '3px solid transparent',
                backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #22c55e, #1e3a8a)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box',
                animation: isVisible ? 'float 6s ease-in-out infinite' : 'none'
              }}>
                <img
                  src="/assets/images/7.png"
                  alt="7 Years of Experience"
                  style={{
                    width: '200px',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                  }}
                />
                
                {/* Floating elements */}
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  width: '30px',
                  height: '30px',
                  background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                  borderRadius: '50%',
                  animation: isVisible ? 'bounce 2s infinite' : 'none'
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '-5px',
                  left: '-5px',
                  width: '20px',
                  height: '20px',
                  background: 'linear-gradient(135deg, #1e3a8a, #1e40af)',
                  borderRadius: '50%',
                  animation: isVisible ? 'bounce 2s infinite 0.5s' : 'none'
                }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section section-alt" style={{ 
        background: 'var(--bg-gradient-light)', 
        padding: 'var(--spacing-2xl) var(--spacing-md)' 
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: 'var(--spacing-xs)', 
              border: '2px solid var(--primary-green)', 
              borderRadius: '25px', 
              padding: 'var(--spacing-xs) var(--spacing-lg)', 
              marginBottom: 'var(--spacing-lg)',
              background: 'rgba(34, 197, 94, 0.1)'
            }}>
              <span style={{ 
                color: 'var(--primary-green)', 
                fontSize: 'var(--font-size-xs)', 
                fontWeight: 700, 
                letterSpacing: '0.1em',
                fontFamily: 'var(--font-family)',
                textTransform: 'uppercase'
              }}>
                🏆 OUR ACHIEVEMENTS
              </span>
            </div>
            
            <h2 className="heading-lg" style={{ 
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
              fontWeight: 700, 
              color: 'var(--text-primary)', 
              marginBottom: 'var(--spacing-md)',
              lineHeight: 1.2
            }}>
              Proven Track Record of <span className="gradient-text">Excellence</span>
            </h2>
            
            <p className="body-text" style={{ 
              fontSize: 'var(--font-size-base)', 
              color: 'var(--text-secondary)', 
              maxWidth: '600px', 
              margin: '0 auto', 
              lineHeight: 1.7
            }}>
              Our numbers speak for themselves. Years of dedicated service and consistent performance have made us a trusted name in financial advisory services.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: 'var(--spacing-xl)' 
          }}>
            {achievements.map((achievement, i) => (
              <div key={i} style={{
                background: 'var(--bg-primary)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--spacing-xl)',
                textAlign: 'center',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border-light)',
                transition: 'var(--transition-normal)',
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${i * 0.1}s`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: 'var(--spacing-md)'
                }}>
                  {achievement.icon}
                </div>
                <h3 style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 700,
                  color: 'var(--primary-navy)',
                  marginBottom: 'var(--spacing-sm)',
                  fontFamily: 'var(--font-family)'
                }}>
                  {achievement.number}
                </h3>
                <p style={{
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--text-secondary)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  {achievement.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="section" style={{ 
        background: 'var(--bg-primary)', 
        padding: 'var(--spacing-2xl) var(--spacing-md)' 
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: 'var(--spacing-xs)', 
              border: '2px solid var(--primary-navy)', 
              borderRadius: '25px', 
              padding: 'var(--spacing-xs) var(--spacing-lg)', 
              marginBottom: 'var(--spacing-lg)',
              background: 'rgba(30, 58, 138, 0.05)'
            }}>
              <span style={{ 
                color: 'var(--primary-navy)', 
                fontSize: 'var(--font-size-xs)', 
                fontWeight: 700, 
                letterSpacing: '0.1em',
                fontFamily: 'var(--font-family)',
                textTransform: 'uppercase'
              }}>
                💼 OUR SERVICES
              </span>
            </div>
            
            <h2 className="heading-lg" style={{ 
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
              fontWeight: 700, 
              color: 'var(--text-primary)', 
              marginBottom: 'var(--spacing-md)',
              lineHeight: 1.2
            }}>
              Comprehensive Trading <span className="gradient-text">Solutions</span>
            </h2>
            
            <p className="body-text" style={{ 
              fontSize: 'var(--font-size-base)', 
              color: 'var(--text-secondary)', 
              maxWidth: '600px', 
              margin: '0 auto', 
              lineHeight: 1.7
            }}>
              From intraday trading to long-term investments, we offer a complete suite of financial services tailored to meet diverse trading needs and investment goals.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: 'var(--spacing-xl)' 
          }}>
            {services.map((service, i) => (
              <Link key={i} to={service.to} style={{
                textDecoration: 'none',
                background: 'var(--bg-primary)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--spacing-xl)',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border-light)',
                transition: 'var(--transition-normal)',
                display: 'block',
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${i * 0.1}s`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: 'var(--spacing-lg)',
                  textAlign: 'center'
                }}>
                  {service.icon}
                </div>
                <h3 style={{
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--spacing-md)',
                  fontFamily: 'var(--font-family)',
                  textAlign: 'center'
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  textAlign: 'center'
                }}>
                  {service.description}
                </p>
                <div style={{
                  marginTop: 'var(--spacing-lg)',
                  textAlign: 'center'
                }}>
                  <span style={{
                    color: 'var(--primary-green)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    Learn More <i className="fas fa-arrow-right" style={{ marginLeft: 'var(--spacing-xs)' }}></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section" style={{ 
        background: 'linear-gradient(135deg, var(--bg-dark) 0%, var(--primary-navy) 100%)', 
        padding: 'var(--spacing-2xl) var(--spacing-md)',
        color: 'var(--text-white)'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: 'var(--spacing-xs)', 
              border: '2px solid var(--primary-green)', 
              borderRadius: '25px', 
              padding: 'var(--spacing-xs) var(--spacing-lg)', 
              marginBottom: 'var(--spacing-lg)',
              background: 'rgba(34, 197, 94, 0.1)'
            }}>
              <span style={{ 
                color: 'var(--primary-green)', 
                fontSize: 'var(--font-size-xs)', 
                fontWeight: 700, 
                letterSpacing: '0.1em',
                fontFamily: 'var(--font-family)',
                textTransform: 'uppercase'
              }}>
                💬 CLIENT TESTIMONIALS
              </span>
            </div>
            
            <h2 className="heading-lg" style={{ 
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
              fontWeight: 700, 
              color: 'var(--text-white)', 
              marginBottom: 'var(--spacing-md)',
              lineHeight: 1.2
            }}>
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            
            <p className="body-text" style={{ 
              fontSize: 'var(--font-size-base)', 
              color: 'var(--text-light)', 
              maxWidth: '600px', 
              margin: '0 auto', 
              lineHeight: 1.7,
              opacity: 0.9
            }}>
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Kashish Joshi Research.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: 'var(--spacing-xl)' 
          }}>
            {testimonials.map((testimonial, i) => (
              <div key={i} style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--spacing-xl)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: `${i * 0.2}s`
              }}>
                <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                  <i className="fas fa-quote-left" style={{ 
                    fontSize: '2rem', 
                    color: 'var(--primary-green)', 
                    opacity: 0.7 
                  }}></i>
                </div>
                
                <p style={{
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--text-light)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--spacing-lg)',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.text}"
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between' 
                }}>
                  <div>
                    <h4 style={{
                      fontSize: 'var(--font-size-base)',
                      fontWeight: 700,
                      color: 'var(--text-white)',
                      marginBottom: 'var(--spacing-xs)',
                      fontFamily: 'var(--font-family)'
                    }}>
                      {testimonial.name}
                    </h4>
                    <p style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--primary-green)',
                      fontWeight: 500
                    }}>
                      {testimonial.role}
                    </p>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <i key={starIndex} className="fas fa-star" style={{ 
                        color: 'var(--primary-green)', 
                        fontSize: 'var(--font-size-sm)' 
                      }}></i>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ 
        background: 'var(--bg-primary)', 
        padding: 'var(--spacing-2xl) var(--spacing-md)' 
      }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: 'var(--spacing-2xl)', 
            alignItems: 'start' 
          }}>
            <div>
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: 'var(--spacing-xs)', 
                border: '2px solid var(--primary-navy)', 
                borderRadius: '25px', 
                padding: 'var(--spacing-xs) var(--spacing-lg)', 
                marginBottom: 'var(--spacing-lg)',
                background: 'rgba(30, 58, 138, 0.05)'
              }}>
                <span style={{ 
                  color: 'var(--primary-navy)', 
                  fontSize: 'var(--font-size-xs)', 
                  fontWeight: 700, 
                  letterSpacing: '0.1em',
                  fontFamily: 'var(--font-family)',
                  textTransform: 'uppercase'
                }}>
                  ❓ FAQ
                </span>
              </div>
              
              <h2 className="heading-lg" style={{ 
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
                fontWeight: 700, 
                color: 'var(--text-primary)', 
                marginBottom: 'var(--spacing-lg)',
                lineHeight: 1.2
              }}>
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              
              <p className="body-text" style={{ 
                fontSize: 'var(--font-size-base)', 
                color: 'var(--text-secondary)', 
                lineHeight: 1.7,
                marginBottom: 'var(--spacing-xl)'
              }}>
                Have questions about our services? Find answers to the most commonly asked questions about Kashish Joshi Research and our trading advisory services.
              </p>

              <Link to="/contact" className="btn-primary" style={{
                background: 'linear-gradient(135deg, var(--primary-green), var(--primary-green-dark))',
                color: 'var(--text-white)',
                padding: 'var(--spacing-md) var(--spacing-xl)',
                fontSize: 'var(--font-size-sm)',
                textDecoration: 'none',
                borderRadius: 'var(--radius-md)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--spacing-xs)'
              }}>
                <i className="fas fa-phone-alt"></i>
                Contact Us
              </Link>
            </div>

            <div>
              {faqs.map((faq, i) => (
                <div key={i} style={{
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-lg)',
                  marginBottom: 'var(--spacing-md)',
                  overflow: 'hidden',
                  background: 'var(--bg-primary)',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <button
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: 'var(--spacing-lg)',
                      background: openFaq === i ? 'var(--bg-secondary)' : 'transparent',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: 'var(--font-size-base)',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-family)',
                      transition: 'var(--transition-normal)'
                    }}
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    onMouseEnter={(e) => {
                      if (openFaq !== i) {
                        e.currentTarget.style.background = 'var(--bg-secondary)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (openFaq !== i) {
                        e.currentTarget.style.background = 'transparent';
                      }
                    }}
                  >
                    <span>{faq.q}</span>
                    <i className={`fas fa-${openFaq === i ? 'minus' : 'plus'}`} style={{ 
                      color: 'var(--primary-green)', 
                      fontSize: 'var(--font-size-sm)',
                      flexShrink: 0,
                      marginLeft: 'var(--spacing-md)'
                    }}></i>
                  </button>
                  
                  {openFaq === i && (
                    <div style={{
                      padding: '0 var(--spacing-lg) var(--spacing-lg)',
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                      borderTop: '1px solid var(--border-light)',
                      background: 'var(--bg-secondary)'
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section" style={{ 
        background: 'var(--bg-gradient-light)', 
        padding: 'var(--spacing-2xl) var(--spacing-md)' 
      }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, var(--primary-navy) 0%, var(--bg-dark) 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--spacing-2xl)',
            textAlign: 'center',
            color: 'var(--text-white)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Decorative elements */}
            <div style={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '200px',
              height: '200px',
              background: 'linear-gradient(135deg, var(--primary-green), var(--primary-green-light))',
              borderRadius: '50%',
              opacity: 0.1
            }}></div>
            
            <div style={{
              position: 'absolute',
              bottom: '-50px',
              left: '-50px',
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, var(--primary-green), var(--primary-green-light))',
              borderRadius: '50%',
              opacity: 0.1
            }}></div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                fontWeight: 700,
                marginBottom: 'var(--spacing-lg)',
                fontFamily: 'var(--font-family)'
              }}>
                Ready to Start Your <span className="gradient-text">Trading Journey?</span>
              </h2>
              
              <p style={{
                fontSize: 'var(--font-size-lg)',
                opacity: 0.9,
                maxWidth: '600px',
                margin: '0 auto var(--spacing-xl)',
                lineHeight: 1.6
              }}>
                Join thousands of successful traders who trust Kashish Joshi Research for consistent profits and professional market guidance.
              </p>
              
              <div style={{ 
                display: 'flex', 
                gap: 'var(--spacing-md)', 
                justifyContent: 'center', 
                flexWrap: 'wrap' 
              }}>
                <Link to="/contact" className="btn-primary" style={{
                  background: 'linear-gradient(135deg, var(--primary-green), var(--primary-green-dark))',
                  color: 'var(--text-white)',
                  padding: 'var(--spacing-md) var(--spacing-xl)',
                  fontSize: 'var(--font-size-base)',
                  textDecoration: 'none',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em'
                }}>
                  <i className="fas fa-rocket" style={{ marginRight: 'var(--spacing-xs)' }}></i>
                  Get Started Now
                </Link>
                
                <Link to="/services" className="btn-secondary" style={{
                  background: 'transparent',
                  color: 'var(--text-white)',
                  border: '2px solid var(--text-white)',
                  padding: 'var(--spacing-md) var(--spacing-xl)',
                  fontSize: 'var(--font-size-base)',
                  textDecoration: 'none',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em'
                }}>
                  <i className="fas fa-chart-bar" style={{ marginRight: 'var(--spacing-xs)' }}></i>
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}