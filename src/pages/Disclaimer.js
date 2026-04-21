import React from 'react';
import { motion } from 'framer-motion';

const Disclaimer = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="hero-section text-white relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/images/hero-img.png')`,
          minHeight: '50vh',
          padding: '100px 0'
        }}
      >
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Our Disclaimer</h1>
            <div className="breadcrumb">
              <span><a href="/" className="text-white hover:underline">Home</a> | <span className="text-white">Our Disclaimer</span></span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="prose prose-lg">
              <h2 style={{color: '#031031', marginBottom: '24px'}}>Disclaimer</h2>
              
              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                The information provided by Kashish Joshi Research is for educational and informational purposes only and should not be construed as investment advice.
              </p>

              <h3 style={{color: '#031031', marginTop: '32px', marginBottom: '16px'}}>Investment Risk</h3>
              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                All investments involve risk, including the potential loss of principal. Past performance does not guarantee future results. The value of investments may fluctuate and investors may not get back the amount invested.
              </p>

              <h3 style={{color: '#031031', marginTop: '32px', marginBottom: '16px'}}>No Guarantee</h3>
              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                We do not guarantee the accuracy, completeness, or timeliness of any information provided. Market conditions can change rapidly, and past performance is not indicative of future results.
              </p>

              <h3 style={{color: '#031031', marginTop: '32px', marginBottom: '16px'}}>Professional Advice</h3>
              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                Before making any investment decisions, you should consult with a qualified financial advisor who can assess your individual circumstances and risk tolerance.
              </p>

              <h3 style={{color: '#031031', marginTop: '32px', marginBottom: '16px'}}>SEBI Registration</h3>
              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                Kashish Joshi Research is registered with SEBI as a research analyst under registration number INH000017240. This registration does not guarantee the accuracy of our research or recommendations.
              </p>

              <h3 style={{color: '#031031', marginTop: '32px', marginBottom: '16px'}}>Limitation of Liability</h3>
              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                Kashish Joshi Research, its employees, and affiliates shall not be liable for any losses or damages arising from the use of our services or reliance on our recommendations.
              </p>

              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                <strong>Please invest responsibly and only risk capital that you can afford to lose.</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Disclaimer;