import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaAngleDoubleRight } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: "Stock Cash",
      description: "Cash Services for Stocks Kashish Joshi Research offers Stock Cash intraday calls.",
      features: [
        "Calls on an intraday basis 1-2",
        "Total Opposition & Assistance every day",
        "Appropriate follow-up by chat and SMS",
        "All significant news and updates on the economy",
        "Round-the-clock client assistance"
      ],
      pricing: [
        { duration: "Monthly", price: "10000+GST" },
        { duration: "Quarterly", price: "25000+GST" },
        { duration: "Half Yearly", price: "40000+GST" },
        { duration: "Yearly", price: "70000+GST" }
      ]
    },
    {
      title: "Option Services",
      description: "Kashish Joshi Research offers stock option intraday calls.",
      features: [
        "Options trading strategies",
        "Greeks analysis",
        "Volatility insights",
        "Risk-reward optimization",
        "Professional guidance"
      ],
      pricing: [
        { duration: "Monthly", price: "12000+GST" },
        { duration: "Quarterly", price: "30000+GST" },
        { duration: "Half Yearly", price: "50000+GST" },
        { duration: "Yearly", price: "85000+GST" }
      ]
    },
    {
      title: "Future",
      description: "Kashish Joshi Research offers stock futures intraday calls.",
      features: [
        "Futures market analysis",
        "Position sizing guidance",
        "Trend identification",
        "Stop-loss strategies",
        "Risk management"
      ],
      pricing: [
        { duration: "Monthly", price: "11000+GST" },
        { duration: "Quarterly", price: "28000+GST" },
        { duration: "Half Yearly", price: "45000+GST" },
        { duration: "Yearly", price: "80000+GST" }
      ]
    },
    {
      title: "Banknifty / Nifty Options",
      description: "Kashish Joshi Research will offer our clients' INDEX Tips in the NSE market.",
      features: [
        "Index options strategies",
        "Intraday trading calls",
        "Technical analysis",
        "Market timing signals",
        "Premium support"
      ],
      pricing: [
        { duration: "Monthly", price: "15000+GST" },
        { duration: "Quarterly", price: "38000+GST" },
        { duration: "Half Yearly", price: "65000+GST" },
        { duration: "Yearly", price: "110000+GST" }
      ]
    },
    {
      title: "Banknifty / Nifty Futures",
      description: "Kashish Joshi Research will offer our clients' INDEX Tips in the NSE market. Our highest-quality provider is Nifty Option Tips.",
      features: [
        "Index futures trading",
        "Systematic approach",
        "Risk management",
        "Performance tracking",
        "Expert analysis"
      ],
      pricing: [
        { duration: "Monthly", price: "13000+GST" },
        { duration: "Quarterly", price: "33000+GST" },
        { duration: "Half Yearly", price: "55000+GST" },
        { duration: "Yearly", price: "95000+GST" }
      ]
    },
    {
      title: "Systematic Trading Plan",
      description: "We are the creators of the Systematic Trading Plan (STP), a highly special offering for all traders, investors, and other market players.",
      features: [
        "Automated trading signals",
        "Backtested strategies",
        "Portfolio management",
        "Performance analytics",
        "Comprehensive support"
      ],
      pricing: [
        { duration: "Monthly", price: "20000+GST" },
        { duration: "Quarterly", price: "50000+GST" },
        { duration: "Half Yearly", price: "85000+GST" },
        { duration: "Yearly", price: "150000+GST" }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section - Matching Original */}
      <section 
        className="hero-section text-white relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/images/hero-img.png')`,
          minHeight: '50vh',
          padding: '100px 0'
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
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Our Services</h1>
            <div className="breadcrumb">
              <span><a href="/" className="text-white hover:underline">Home</a> | <span className="text-white">Services</span></span>
            </div>
          </motion.div>
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
                className="offer-wrapper cursor-pointer bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="service-icon mb-4" style={{color: '#00A651', fontSize: '40px'}}>
                  <FaChartLine />
                </div>
                <h5 style={{color: '#031031', marginBottom: '12px', fontSize: '18px', fontWeight: '600'}}>{service.title}</h5>
                <p style={{color: '#647589', fontSize: '15px', marginBottom: '20px', lineHeight: '1.6'}}>{service.description}</p>
                
                {/* Features */}
                <div className="features mb-6">
                  <h6 style={{color: '#031031', fontSize: '16px', fontWeight: '600', marginBottom: '10px'}}>Features:</h6>
                  <ul className="features-list" style={{listStyle: 'none', padding: 0}}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={{
                        position: 'relative',
                        paddingLeft: '25px',
                        marginBottom: '8px',
                        color: '#647589',
                        fontSize: '14px'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: '#00A651',
                          fontWeight: 'bold'
                        }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing Table */}
                <div className="pricing-table">
                  <h6 style={{color: '#031031', fontSize: '16px', fontWeight: '600', marginBottom: '10px'}}>Pricing:</h6>
                  <div className="table-responsive">
                    <table className="table table-bordered" style={{width: '100%', fontSize: '14px'}}>
                      <thead>
                        <tr style={{backgroundColor: '#f8f9fa'}}>
                          <th style={{padding: '8px', border: '1px solid #dee2e6', color: '#031031'}}>Duration</th>
                          <th style={{padding: '8px', border: '1px solid #dee2e6', color: '#031031'}}>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {service.pricing.map((price, priceIndex) => (
                          <tr key={priceIndex}>
                            <td style={{padding: '8px', border: '1px solid #dee2e6', color: '#647589'}}>{price.duration}</td>
                            <td style={{padding: '8px', border: '1px solid #dee2e6', color: '#00A651', fontWeight: '600'}}>{price.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <a
                    href="/contact"
                    className="btn-primary"
                    style={{
                      background: '#00A651',
                      color: '#fff',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      display: 'inline-block',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Get Started <FaAngleDoubleRight className="inline ml-1" />
                  </a>
                </div>
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
    </div>
  );
};

export default Services;