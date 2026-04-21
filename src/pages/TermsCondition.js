import React from 'react';
import { motion } from 'framer-motion';

const TermsCondition = () => {
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Terms & Conditions</h1>
            <div className="breadcrumb">
              <span><a href="/" className="text-white hover:underline">Home</a> | <span className="text-white">Terms & Conditions</span></span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms & Conditions Content */}
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
              <h2 style={{color: '#031031', marginBottom: '24px'}}>Terms & Conditions</h2>
              
              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                Welcome to Kashish Joshi Research. These terms and conditions outline the rules and regulations for the use of our research and advisory services.
              </p>

              <h3 style={{color: '#031031', marginTop: '32px', marginBottom: '16px'}}>Acceptance of Terms</h3>
              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h3 style={{color: '#031031', marginTop: '32px', marginBottom: '16px'}}>Services</h3>
              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                Kashish Joshi Research provides stock market research and advisory services. Our recommendations are based on technical and fundamental analysis and are for informational purposes only.
              </p>

              <h3 style={{color: '#031031', marginTop: '32px', marginBottom: '16px'}}>Risk Disclosure</h3>
              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                Trading and investing in securities involves risk. Past performance is not indicative of future results. You should carefully consider your financial situation and risk tolerance before making any investment decisions.
              </p>

              <h3 style={{color: '#031031', marginTop: '32px', marginBottom: '16px'}}>Limitation of Liability</h3>
              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                Kashish Joshi Research shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our services or reliance on our recommendations.
              </p>

              <h3 style={{color: '#031031', marginTop: '32px', marginBottom: '16px'}}>SEBI Compliance</h3>
              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                We are registered with SEBI as a research analyst (Registration No: INH000017240) and comply with all applicable regulations and guidelines.
              </p>

              <h3 style={{color: '#031031', marginTop: '32px', marginBottom: '16px'}}>Contact Information</h3>
              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                For any questions regarding these terms and conditions, please contact us at info@kashishjoshiresearch.com or call +91 91717 18451.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsCondition;