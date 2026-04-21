import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaQuoteLeft, FaAngleDoubleRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import LeadForm from '../components/LeadForm';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const slides = [
    {
      backgroundImage: '/assets/images/hero-img.png',
      title: 'Call Now 8302463768 SEBI ® No INH000017240',
      subtitle: 'Kashish Joshi Research',
      // description: 'Research Analyst: Kashish Joshi, SEBI Registration No. INH000017240'
    },
    {
      backgroundImage: '/assets/images/hero-img-2.jpg',
      title: 'RESEARCH ANALYST: KASHISH JOSHI, SEBI REGISTRATION NO. INH000017240  ',
      subtitle: 'Kashish Joshi Research',
      // description: 'Get professional guidance for your trading and investment decisions'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Testimonial slider functions
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // // Auto-play functionality matching original
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   }, 5000); // Change slide every 5 seconds

  //   return () => clearInterval(interval);
  // }, [slides.length]);
  const services = [
    {
      icon: "fluent-mdl2:design",
      title: "Stock Cash",
      description: "Cash Services for Stocks Kashish Joshi Research offers Stock Cash intraday calls.",
      link: "/services"
    },
    {
      icon: "fluent:archive-settings-24-regular",
      title: "Option Services",
      description: "Kashish Joshi Research offers stock option intraday calls.",
      link: "/services"
    },
    {
      icon: "carbon:application-web",
      title: "Future",
      description: "Kashish Joshi Research offers stock futures intraday calls.",
      link: "/services"
    },
    {
      icon: "ant-design:radar-chart-outlined",
      title: "Banknifty / Nifty Options",
      description: "Kashish Joshi Research will offer our clients' INDEX Tips in the NSE market.",
      link: "/services"
    },
    {
      icon: "ion:diamond-outline",
      title: "Banknifty / Nifty Futures",
      description: "Kashish Joshi Research will offer our clients' INDEX Tips in the NSE market. Our highest-quality provider is Nifty Option Tips.",
      link: "/services"
    },
    {
      icon: "bi:puzzle",
      title: "Systematic Trading Plan",
      description: "We are the creators of the Systematic Trading Plan (STP), a highly special offering for all traders, investors, and other market players.",
      link: "/services"
    }
  ];

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
      {/* Hero Section - Slider with arrows matching original */}
      <section 
        className="hero-section text-white relative bg-cover bg-center bg-no-repeat transition-all duration-500"
        style={{
          backgroundImage: `url('${slides[currentSlide].backgroundImage}')`,
          minHeight: '50vh',
          padding: '50px 0'
        }}
      >
        {/* Blue overlay matching original */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('/assets/images/overlay.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        ></div>
        
        {/* Slider Navigation Arrows - matching original positioning */}
        <div className='grid grid-col'>
          <button
          onClick={prevSlide}
          className="hero-slider-arrow"
          style={{ right: '6%' }}
        >
          <FaArrowRight />
        </button>
        
        <button
          onClick={nextSlide}
          className="hero-slider-arrow"
          style={{ right: '2%' }}
        >
          <FaArrowLeft />
        </button>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-content"
            >
              <div className="mb-4">
                <p className="flex items-center text-white mb-4 text-sm lg:text-sm relative hero-text-p">
                  <FaAngleDoubleRight className="mr-2" />
                  {slides[currentSlide].title}
                </p>
                <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold mb-6 text-white leading-tight">
                  <span className="text-2xl lg:text-3xl xl:text-4xl font-bold">{slides[currentSlide].subtitle}</span>
                </h1>
              </div>
              <div className="hero-cta">
                <a href="#contact" className="btn-primary text-lg px-4 py-2">
                  Book Your Free Trial
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-form"
            >
              <LeadForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Matching Original Design Exactly */}
      <section className="about bg-white" style={{padding: '188px 0'}}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="section-title mb-4">
                <div className="sub-heading flex items-center mb-2">
                  <img src="/assets/images/section-title-icon.png" alt="caret" className="mr-2" />
                  <p style={{color: '#00A651', fontWeight: '500', margin: '0 0 0 10px'}}>Who we are</p>
                </div>
                <h2 style={{color: '#031031', fontSize: '30px', fontWeight: '600', lineHeight: '44px', marginBottom: '0'}}>About us</h2>
              </div>
              
              <div className="text-content" style={{marginTop: '10px'}}>
                <p className="mb-6" style={{color: '#647589', fontSize: '16px', fontWeight: '400', lineHeight: '1.7', marginBottom: '0'}}>
                  Kashish Joshi Research is one of the financial companies that traders trust with their lives. 
                  We provide professional services for trading stocks and commodities. Our goal is to provide 
                  our clients with market knowledge and expertise so they may maximize their trading profits. 
                  We provide services to all of our clients by using fundamental monetary concepts. We provide 
                  all of our clients with fair and knowledgeable training.
                </p>
                <p className="mb-6" style={{color: '#647589', fontSize: '16px', fontWeight: '400', lineHeight: '1.7', marginBottom: '0', marginTop: '24px'}}>
                  As a prosperous stock advising business, we typically prioritize your financial goals, 
                  which helps you eventually achieve financial autonomy. We have continuously worked to 
                  provide a challenging and knowledgeable environment in which to handle the latest innovations. 
                  This has helped us provide our traders with the greatest share market advice, which benefits them all.
                </p>

                {/* Progress Bars - Matching Original Exactly */}
                <div className="progress-wrapper flex items-center" style={{margin: '30px 0'}}>
                  <div className="progress-one flex items-center mr-8">
                    <div className="progress-bar relative" style={{height: '100px', width: '100px', backgroundColor: 'transparent'}}>
                      <div className="background absolute rounded-full" style={{height: '100px', width: '100px', backgroundColor: '#b3cef6'}}></div>
                      <motion.div
                        className="rotate absolute rounded-full"
                        style={{
                          height: '100px', 
                          width: '100px', 
                          backgroundColor: '#00A651',
                          clipPath: 'rect(0 50px 100px 0)',
                          transformOrigin: '50px 50px'
                        }}
                        initial={{ transform: 'rotate(0deg)' }}
                        whileInView={{ transform: 'rotate(324deg)' }} // 90% of 360deg
                        transition={{ duration: 2, delay: 0.5 }}
                        viewport={{ once: true }}
                      ></motion.div>
                      <div className="absolute flex items-center justify-center rounded-full" style={{
                        height: '75px', 
                        width: '75px', 
                        left: '12.5px', 
                        top: '12.5px', 
                        backgroundColor: '#fff',
                        color: '#031031',
                        fontSize: '18px',
                        fontFamily: 'Poppins, sans-serif'
                      }}>
                        90%
                      </div>
                    </div>
                    <h5 style={{marginLeft: '10px', fontSize: '18px', paddingRight: '15px', lineHeight: '25px', color: '#031031', fontWeight: '600'}}>
                      Client<br />Satisfied
                    </h5>
                  </div>

                  <div className="progress-two flex items-center">
                    <div className="progress-bar relative" style={{height: '100px', width: '100px', backgroundColor: 'transparent'}}>
                      <div className="background absolute rounded-full" style={{height: '100px', width: '100px', backgroundColor: '#b3cef6'}}></div>
                      <motion.div
                        className="rotate absolute rounded-full"
                        style={{
                          height: '100px', 
                          width: '100px', 
                          backgroundColor: '#00A651',
                          clipPath: 'rect(0 50px 100px 0)',
                          transformOrigin: '50px 50px'
                        }}
                        initial={{ transform: 'rotate(0deg)' }}
                        whileInView={{ transform: 'rotate(270deg)' }} // 75% of 360deg
                        transition={{ duration: 2, delay: 0.7 }}
                        viewport={{ once: true }}
                      ></motion.div>
                      <div className="absolute flex items-center justify-center rounded-full" style={{
                        height: '75px', 
                        width: '75px', 
                        left: '12.5px', 
                        top: '12.5px', 
                        backgroundColor: '#fff',
                        color: '#031031',
                        fontSize: '18px',
                        fontFamily: 'Poppins, sans-serif'
                      }}>
                        75%
                      </div>
                    </div>
                    <h5 style={{marginLeft: '10px', fontSize: '18px', paddingRight: '15px', lineHeight: '25px', color: '#031031', fontWeight: '600'}}>
                      Financial<br />Consultation
                    </h5>
                  </div>
                </div>

                <p className="padding-text" style={{color: '#647589', fontSize: '16px', fontWeight: '400', lineHeight: '1.7', paddingRight: '100px', marginBottom: '0'}}>
                  We at Kashish Joshi Research are not simply focused on financial services. 
                  You'll see that we partner with you as financial advisors. For the previous eight years, 
                  we have served by providing our services.
                </p>

                <a className='about-btn' href='/about' style={{
                  padding: '14px 31px',
                  color: '#fff',
                  marginTop: '28px',
                  background: '#00A651',
                  display: 'inline-block',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  textTransform: 'capitalize',
                  fontFamily: 'Poppins, sans-serif',
                  transition: 'all 0.3s ease'
                }}>Learn More</a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="about-img relative"
            >
              <img src="/assets/images/about-image.png" alt="team" className="w-full" />
              <img src="/assets/images/abt-overlay.png" alt="overlay" className="overlay absolute top-0 left-0 w-full h-full" />

              <div className="experience absolute text-center" style={{
                background: '#031031',
                color: '#fff',
                padding: '36px 115px',
                left: '-14%',
                bottom: '-13%'
              }}>
                <span style={{
                  fontSize: '120px',
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

      {/* Services Section - Matching Original */}
      <section 
        className="section-padding relative bg-cover bg-no-repeat bg-top"
        style={{
          backgroundImage: `url('/assets/images/offer-bg.png')`,
          marginTop: '47px',
          padding: '135px 0'
        }}
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="section-title flex flex-col items-center" style={{marginBottom: '65px'}}>
              <div className="flex items-center mb-2">
                <img src="/assets/images/section-title-icon.png" alt="caret" className="mr-2" />
                <span className="sub-heading">What we offer</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold" style={{color: '#031031'}}>Our Services</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="offer-wrapper cursor-pointer"
              >
                <div className="service-icon mb-4" style={{color: '#00A651', fontSize: '40px'}}>
                  <FaChartLine />
                </div>
                <h5 style={{color: '#031031', marginBottom: '12px', fontSize: '18px', fontWeight: '600'}}>{service.title}</h5>
                <p style={{color: '#647589', fontSize: '15px', marginBottom: '8px', lineHeight: '1.6'}}>{service.description}</p>
                <a
                  href={service.link}
                  style={{
                    color: '#031031',
                    fontSize: '12px',
                    letterSpacing: '1px',
                    marginTop: '8px',
                    display: 'inline-block',
                    textDecoration: 'none',
                    transition: 'all 0.3s linear'
                  }}
                  onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                  onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                >
                  Explore More <FaAngleDoubleRight className="inline ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Matching Original Green Design */}
      <section 
        className="text-white relative"
        style={{
          backgroundColor: '#00A651',
          padding: '76px 0 67px'
        }}
      >
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-2">
                <img src="/assets/images/icon-white.png" alt="caret" className="mr-2" />
                <span className="font-semibold" style={{color: 'rgba(255, 255, 255, 0.8)'}}>Live Market Support</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Start Chat with our Research Expert
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <a
                href="https://wa.link/iw4ct4"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 lg:mt-0 inline-block"
                style={{
                  background: '#fff',
                  color: '#00A651',
                  fontWeight: '600',
                  padding: '17px 25px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  textTransform: 'capitalize',
                  fontFamily: 'Poppins, sans-serif'
                }}
                onMouseOver={(e) => {e.target.style.background = '#f0f0f0'}}
                onMouseOut={(e) => {e.target.style.background = '#fff'}}
              >
                <span>Whatsapp Now <FaAngleDoubleRight className="inline ml-1" /></span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Matching Original with video.png background */}
      {/* <section 
        className="testimonials relative bg-cover bg-no-repeat bg-top"
        style={{
          backgroundImage: `url('/assets/images/video.png')`,
          padding: '67px 0',
          marginTop: '-21%'
        }}
      > */}
        {/* Dark overlay matching original */}
        {/* <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: '#031031',
            opacity: '0.6'
          }}
        ></div> */}
        
        {/* <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="z-id-10 relative z-10"
            >
              <div className="testimonial-slider">
                <motion.div 
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="testimonial-wrapper bg-white relative" 
                  style={{padding: '52px 33px', boxShadow: '0px 7px 55px rgba(52, 62, 97, 0.06)'}}
                >
                  <FaQuoteLeft className="text-4xl mb-6" style={{color: '#00A651', opacity: '0.1', fontSize: '55px', marginBottom: '43px'}} />
                  <p className="mb-6" style={{color: '#031031', marginBottom: '22px', fontSize: '16px', lineHeight: '1.6'}}>"{testimonials[currentTestimonial].content}"</p>
                  <div className="client-info flex items-center">
                    <div className="client-name ml-2">
                      <h5 className="font-semibold" style={{color: '#031031', fontWeight: '600', margin: '0'}}>{testimonials[currentTestimonial].name}</h5>
                      <span style={{color: '#00A651', fontSize: '14px'}}>{testimonials[currentTestimonial].role}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="title flex justify-end z-10 relative"
            >
              <div>
                <div className="flex items-center mb-2">
                  <img src="/assets/images/section-title-icon.png" alt="caret" className="mr-2" />
                  <span className="sub-heading" style={{color: '#00A651', fontWeight: '500'}}>Review</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-8" style={{color: '#fff'}}>
                  Clients Review
                </h2>
              </div>
            </motion.div>
          </div>
        </div> */}
        
        {/* Navigation Arrows - positioned as per original */}
        {/* <button 
          onClick={prevTestimonial}
          className="slick-prev pull-left slick-arrow absolute"
          style={{
            top: '14%',
            right: '14%',
            zIndex: '99999',
            display: 'inline-block',
            border: 'none',
            background: 'transparent',
            color: '#00A651',
            borderRadius: '50%',
            height: '30px',
            width: '30px',
            fontSize: '20px',
            cursor: 'pointer'
          }}
        >
          <FaArrowLeft />
        </button> */}
        
        {/* <button 
          onClick={nextTestimonial}
          className="slick-next pull-right slick-arrow absolute"
          style={{
            right: '7%',
            top: '14%',
            zIndex: '99999',
            display: 'inline-block',
            border: 'none',
            background: 'transparent',
            color: '#00A651',
            borderRadius: '50%',
            height: '30px',
            width: '30px',
            fontSize: '20px',
            cursor: 'pointer'
          }}
        >
          <FaArrowRight />
        </button> */}
      {/* </section> */}


    {/* ✅ PERFECT TESTIMONIAL SECTION */}
<section 
  className="relative"
  style={{
    backgroundImage: `url('/assets/images/video.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    padding: '80px 0',
    marginTop: '10%'
  }}
>
  {/* Dark Overlay */}
  <div
    style={{
      position: 'absolute',
      inset: 0,
      background: '#031031',
      opacity: 0.7
    }}
  />

  <div className="container-custom relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

      {/* LEFT SIDE - CARD */}
      <motion.div
        key={currentTestimonial}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          style={{
            background: '#f3f3f3',
            padding: '50px 40px',
            maxWidth: '520px',
            position: 'relative',
            boxShadow: '0px 10px 60px rgba(0,0,0,0.1)',
            top: '-200px'
          }}
        >

          {/* 🔥 ARROWS (ON CARD) */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              display: 'flex',
              gap: '12px'
            }}
          >
            <button
              onClick={prevTestimonial}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: 'none',
                background: '#fff',
                color: '#00A651',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                cursor: 'pointer'
              }}
            >
              <FaArrowLeft />
            </button>

            <button
              onClick={nextTestimonial}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: 'none',
                background: '#fff',
                color: '#00A651',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                cursor: 'pointer'
              }}
            >
              <FaArrowRight />
            </button>
          </div>

          {/* Quote Icon */}
          <FaQuoteLeft
            style={{
              fontSize: '55px',
              color: '#00A651',
              opacity: 0.15,
              marginBottom: '30px'
            }}
          />

          {/* Text */}
          <p
            style={{
              color: '#031031',
              fontSize: '16px',
              lineHeight: '1.7',
              marginBottom: '25px'
            }}
          >
            "{testimonials[currentTestimonial].content}"
          </p>

          {/* Name */}
          <h5 style={{ fontWeight: '600', margin: 0 }}>
            {testimonials[currentTestimonial].name}
          </h5>

          <span style={{ color: '#00A651', fontSize: '14px' }}>
            {testimonials[currentTestimonial].role}
          </span>
        </div>
      </motion.div>

      {/* RIGHT SIDE - HEADING */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginTop: '-600px' }} 
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img
              src="/assets/images/section-title-icon.png"
              alt=""
              style={{ marginRight: '8px', marginLeft: '-80px'}}
            />
            <span style={{ color: '#00A651', fontWeight: '500'}}>
              Review
            </span>
          </div>

          <h2
            style={{
              color: '[#031031]',
              fontSize: '50px',
              fontWeight: '600',
              marginTop: '-20px',
              marginLeft: '-80px'
            }}
          >
            Clients Review
          </h2>
        </div>
      </motion.div>

    </div>
  </div>
</section>


      {/* FAQ Section - Matching Original */}
      <section className="" id="faq" style={{padding: '135px 0 67px'}}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-2">
                <img src="/assets/images/section-title-icon.png" alt="caret" className="mr-2" />
                <span className="sub-heading">FAQ</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{color: '#031031'}}>
                When should I get a financial advisor?
              </h2>
              <div className="faq-para">
                <p style={{color: '#647589'}}>
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
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <div key={index} className="card bg-white rounded-lg shadow-md">
                  <details className="group">
                    <summary className="p-6 cursor-pointer font-semibold hover:text-primary-500 transition-colors flex items-center justify-between" style={{color: '#031031'}}>
                      {faq.question}
                      <span className="text-2xl group-open:rotate-45 transition-transform" style={{color: '#00A651'}}>+</span>
                    </summary>
                    <div className="px-6 pb-6" style={{color: '#647589'}}>
                      {faq.answer}
                    </div>
                  </details>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      {/* <section className="section-padding bg-gray-50" id="contact">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-2">
              <img src="/assets/images/section-title-icon.png" alt="caret" className="mr-2" />
              <span className="sub-heading">Get Started</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{color: '#031031'}}>
              Ready to Start Trading?
            </h2>
            <p style={{color: '#647589'}} className="max-w-2xl mx-auto">
              Book your free trial today and experience our professional trading services
            </p>
          </motion.div>

          <div className="max-w-md mx-auto">
            <LeadForm title="Start Your Free Trial" />
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;