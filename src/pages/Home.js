import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaQuoteLeft, FaArrowLeft, FaArrowRight, FaCheckCircle, FaPlay, FaPause } from 'react-icons/fa';
import LeadForm from '../components/LeadForm';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Original Kashish Joshi content with enhanced variety
  const slides = [
    {
      backgroundImage: '/assets/images/hero-img.png',
      title: 'Call Now 8302463768 SEBI ® No INH000017240',
      subtitle: 'Kashish Joshi Research',
      // description: 'Research Analyst: Kashish Joshi, SEBI Registration No. INH000017240. Get professional guidance for your trading and investment decisions.'
    },
    {
      backgroundImage: '/assets/images/hero-img-2.jpg',
      title: 'Research Analyst: Kashish Joshi, SEBI Registration No. INH000017240.',
      subtitle: 'Kashish Joshi Research',
      // description: 'Maximize your trading profits with our fundamental monetary concepts and expert market analysis. 8+ years of trusted financial services.'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false); // Stop auto-play when user manually navigates
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false); // Stop auto-play when user manually navigates
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Original Kashish Joshi services
  const services = [
    {
      title: "Stock Cash",
      description: "Cash Services for Stocks Kashish Joshi Research offers Stock Cash intraday calls.",
      link: "/services"
    },
    {
      title: "Option Services",
      description: "Kashish Joshi Research offers stock option intraday calls.",
      link: "/services"
    },
    {
      title: "Future",
      description: "Kashish Joshi Research offers stock futures intraday calls.",
      link: "/services"
    },
    {
      title: "Banknifty / Nifty Options",
      description: "Kashish Joshi Research will offer our clients' INDEX Tips in the NSE market.",
      link: "/services"
    },
    {
      title: "Banknifty / Nifty Futures",
      description: "Kashish Joshi Research will offer our clients' INDEX Tips in the NSE market. Our highest-quality provider is Nifty Option Tips.",
      link: "/services"
    },
    {
      title: "Systematic Trading Plan",
      description: "We are the creators of the Systematic Trading Plan (STP), a highly special offering for all traders, investors, and other market players.",
      link: "/services"
    }
  ];

  // Original Kashish Joshi testimonials
  const testimonials = [
    {
      name: "Manoj Panday",
      role: "Stock Investor",
      content: "A nice place for fundamental analysis to see the growth ability of a stock. Stock screeners also assist in locating and selecting the appropriate stocks."
    },
    {
      name: "Ravi Prashad",
      role: "Trader",
      content: "Because my doubts were answered in a very informative way during our conversations with their advisor, I upgraded to their PRO plan."
    }
  ];

  // Original Kashish Joshi FAQs
  const faqs = [
    {
      question: "What types of services does Kashish Joshi offer?",
      answer: "Our company provides state-of-the-art business solutions, such as financial analysis, market research, content advising, and strategic planning. For a comprehensive list of all the services we provide, please visit our Services page."
    },
    {
      question: "How does Kashish Joshi help new start-ups?",
      answer: "In addition to creating company plans and growth strategies, we also help new start-ups by performing market research, delivering industry insights, and recommending content."
    },
    {
      question: "What makes Kashish Joshi stand out from other consulting firms?",
      answer: "Our distinct focus on emerging technologies, attention to particular industries, and breadth of field expertise set us apart from the competition. Our experts are well-versed in the opportunities and problems that our customers confront, as well as the dynamics of the market."
    }
  ];

  return (
    <div>
      {/* Hero Section - Phoenix Capital Layout with Kashish Content */}
      <section 
        className="hero-section relative min-h-screen flex items-center"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${slides[currentSlide].backgroundImage}')`,
          }}
        />
        
        {/* Phoenix Capital Gradient Overlay - Reduced opacity to show background images */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-blue-900/50 to-slate-900/65" />
        
        {/* Additional Phoenix Effects Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-slate-900/15"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-8">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-300 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="hero-slider-arrow"
          style={{ right: '6%' }}
        >
          <FaArrowLeft />
        </button>
        
        <button
          onClick={nextSlide}
          className="hero-slider-arrow"
          style={{ right: '2%' }}
        >
          <FaArrowRight />
        </button>
        
        {/* Play/Pause Button */}
        {/* <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="hero-slider-arrow"
          style={{ right: '10%' }}
          title={isAutoPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
        >
          {isAutoPlaying ? <FaPause /> : <FaPlay />}
        </button> */}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 10000);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
        
        {/* Auto-play progress bar */}
        {isAutoPlaying && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
            <motion.div
              key={currentSlide}
              className="h-full bg-gradient-to-r from-blue-400 to-green-400 shadow-lg"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 4, ease: 'linear' }}
            />
          </div>
        )}
        
        {/* Slide counter */}
        <div className="absolute top-8 right-8 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium z-20">
          {currentSlide + 1} / {slides.length}
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="text-white order-2 lg:order-1"
            >
              <motion.div 
                className="inline-flex items-center px-3 py-2 lg:px-4 lg:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs lg:text-sm font-medium text-white mb-4 lg:mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <FaCheckCircle className="mr-2 text-blue-400 text-sm lg:text-base" />
                <span className="text-xs lg:text-sm">{slides[currentSlide].title}</span>
              </motion.div>
              
              <motion.h1 
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {slides[currentSlide].subtitle}
              </motion.h1>
              
              {/* <motion.p 
                className="text-base lg:text-xl text-gray-200 mb-6 lg:mb-8 leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {slides[currentSlide].description || 'Professional stock market advisory services with SEBI registered research analyst. Get expert guidance for your trading and investment decisions.'}
              </motion.p> */}
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 lg:gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <a href="#contact" className="btn-primary text-center">
                  Book Your Free Trial
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2"
            >
              <div>
                <LeadForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Phoenix Layout with Kashish Content */}
      <section className="py-12 lg:py-20 bg-white about-section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 lg:mb-8">
                <div className="sub-heading mb-3 lg:mb-4">
                  <span className="text-blue-600 font-semibold text-xs lg:text-sm uppercase tracking-wider">
                    Who we are
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 lg:mb-6">
                  About us
                </h2>
                <div className="w-16 lg:w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-500 mb-4 lg:mb-6"></div>
              </div>
              
              <div className="space-y-4 lg:space-y-6 text-base lg:text-lg text-gray-600 leading-relaxed">
                <p>
                  Kashish Joshi Research is one of the financial companies that traders trust with their lives. 
                  We provide professional services for trading stocks and commodities. Our goal is to provide 
                  our clients with market knowledge and expertise so they may maximize their trading profits. 
                  We provide services to all of our clients by using fundamental monetary concepts. We provide 
                  all of our clients with fair and knowledgeable training.
                </p>
                <p>
                  As a prosperous stock advising business, we typically prioritize your financial goals, 
                  which helps you eventually achieve financial autonomy. We have continuously worked to 
                  provide a challenging and knowledgeable environment in which to handle the latest innovations. 
                  This has helped us provide our traders with the greatest share market advice, which benefits them all.
                </p>
              </div>

              {/* Progress Bars - Original Kashish Content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mt-8 lg:mt-12">
                <div className="text-center p-4 lg:p-6 progress-card">
                  <div className="text-2xl lg:text-3xl font-bold mb-2 percentage">90%</div>
                  <div className="text-xs lg:text-sm font-medium text-gray-600">Client Satisfied</div>
                </div>
                <div className="text-center p-4 lg:p-6 progress-card">
                  <div className="text-2xl lg:text-3xl font-bold mb-2 percentage">75%</div>
                  <div className="text-xs lg:text-sm font-medium text-gray-600">Financial Consultation</div>
                </div>
              </div>

              <div className="mt-6 lg:mt-8">
                <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-base">
                  We at Kashish Joshi Research are not simply focused on financial services. 
                  You'll see that we partner with you as financial advisors. For the previous eight years, 
                  we have served by providing our services.
                </p>
                <a href="/about" className="btn-primary inline-block">
                  Learn More
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img src="/assets/images/about-image.png" alt="team" className="w-full" />
              <img src="/assets/images/abt-overlay.png" alt="overlay" className="overlay absolute top-0 left-0 w-full h-full" />

              <div className="experience absolute text-center" style={{
                background: '#031031',
                color: '#fff',
                padding: '36px 60px',
                left: '-10%',
                bottom: '-8%'
              }}>
                <span style={{
                  fontSize: '80px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: '600',
                  display: 'block',
                  lineHeight: '1'
                }}>07</span>
                <p style={{
                  fontSize: '25px',
                  color: '#fff',
                  fontWeight: '500',
                  margin: '0'
                }}>Years of experience</p>
              </div>

              <div className="quote absolute" style={{
                top: '-7%',
                right: '-9%',
                background: '#00A651',
                color: '#fff',
                padding: '48px 43px',
                maxWidth: '331px'
              }}>
                <h5 style={{
                  fontSize: '25px',
                  fontWeight: '600',
                  lineHeight: '1.5',
                  color: '#fff',
                  margin: '0 0 10px 0'
                }}>PURPOSE: ACT AS THE TOP SELLER</h5>
                <h5 style={{
                  fontSize: '25px',
                  fontWeight: '600',
                  lineHeight: '1.5',
                  color: '#fff',
                  margin: '0'
                }}>GOAL: Your money, Our specialized research</h5>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Phoenix Layout with Kashish Content */}
      <section className="py-12 lg:py-20 services-section">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <div className="sub-heading mb-3 lg:mb-4">
              <span className="text-blue-600 font-semibold text-xs lg:text-sm uppercase tracking-wider">
                What we offer
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 lg:mb-6">
              Our Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="offer-wrapper group"
              >
                <div className="service-icon floating-element">
                  <FaChartLine />
                </div>
                
                <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">{service.description}</p>
                
                <a
                  href={service.link}
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm lg:text-base"
                >
                  Explore More →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Phoenix Layout */}
      <section className="py-12 lg:py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-slate-900/20"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-300 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="sub-heading mb-3 lg:mb-4">
                <span className="text-blue-400 font-semibold text-xs lg:text-sm uppercase tracking-wider">
                  Live Market Support
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 lg:mb-8">
                Start Chat with our Research Expert
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center max-w-md mx-auto">
                <a
                  href="https://wa.link/iw4ct4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-sm lg:text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  WhatsApp Now
                </a>
                <a
                  href="tel:+91 91717 18451"
                  className="border-2 border-white text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-sm lg:text-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Call Now: +91 9171718451
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Phoenix Layout with Kashish Content */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-300 rounded-full blur-3xl opacity-15"></div>
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <div className="sub-heading mb-3 lg:mb-4">
              <span className="text-blue-600 font-semibold text-xs lg:text-sm uppercase tracking-wider">
                Review
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 lg:mb-6">
              Clients Review
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 relative testimonial-card"
              style={{
                background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                boxShadow: '0 20px 40px -10px rgba(30, 64, 175, 0.1), 0 8px 16px -4px rgba(30, 64, 175, 0.05)'
              }}
            >
              {/* Navigation arrows */}
              <div className="absolute top-4 lg:top-6 right-4 lg:right-6 flex gap-2 lg:gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-8 lg:w-10 h-8 lg:h-10 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center transition-colors text-sm lg:text-base shadow-md hover:shadow-lg transform hover:scale-110"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-8 lg:w-10 h-8 lg:h-10 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center transition-colors text-sm lg:text-base shadow-md hover:shadow-lg transform hover:scale-110"
                >
                  <FaArrowRight />
                </button>
              </div>

              {/* Quote icon */}
              <FaQuoteLeft className="text-3xl lg:text-5xl text-blue-600 opacity-20 mb-4 lg:mb-6" />

              {/* Testimonial content */}
              <p className="text-base lg:text-lg text-gray-700 mb-6 lg:mb-8 leading-relaxed pr-16 lg:pr-20">
                "{testimonials[currentTestimonial].content}"
              </p>

              {/* Client info */}
              <div className="flex items-center">
                <div className="w-10 lg:w-12 h-10 lg:h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm lg:text-lg mr-3 lg:mr-4 shadow-lg">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-semibold text-slate-900 text-base lg:text-lg">
                    {testimonials[currentTestimonial].name}
                  </h5>
                  <span className="text-blue-600 font-medium text-sm lg:text-base">
                    {testimonials[currentTestimonial].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Phoenix Layout with Kashish Content */}
      <section className="py-12 lg:py-20 faq-section">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="sub-heading mb-3 lg:mb-4">
                <span className="text-blue-600 font-semibold text-xs lg:text-sm uppercase tracking-wider">
                  FAQ
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-6 text-slate-900">
                When should I get a financial advisor?
              </h2>
              <div className="text-gray-600 leading-relaxed text-sm lg:text-base">
                <p>
                  See a financial advisor if you require assistance managing your finances. 
                  For someone who has never managed money or invested, a fee-only financial 
                  planner is a good place to start. A meeting like this could be a game-changer 
                  for your financial future and a great investment. Money is, after all, unloving, 
                  lazy, and unaware of you or your needs and desires. However, you have to make 
                  money work for you because it will only do as you make it!
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-3 lg:space-y-4"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <details className="group">
                    <summary className="p-4 lg:p-6 cursor-pointer font-semibold text-slate-900 hover:text-blue-600 transition-colors flex items-center justify-between text-sm lg:text-lg">
                      <span>{faq.question}</span>
                      <span className="text-xl lg:text-2xl text-blue-600 group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="px-4 lg:px-6 pb-4 lg:pb-6 text-gray-600 leading-relaxed text-sm lg:text-base">
                      {faq.answer}
                    </div>
                  </details>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;