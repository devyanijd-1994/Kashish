import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Privacy Policy</h1>
            <div className="breadcrumb">
              <span><a href="/" className="text-white hover:underline">Home</a> | <span className="text-white">Privacy Policy</span></span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
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
              <h2 style={{color: '#031031', marginBottom: '24px'}}>Privacy Policy for Kashish Joshi Research</h2>
              
              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                At Kashish Joshi Research, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you use our services.
              </p>

              <h3 style={{color: '#031031', marginTop: '32px', marginBottom: '16px'}}>Information We Collect</h3>
              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                We collect information you provide directly to us, such as when you create an account, subscribe to our services, or contact us for support. This may include your name, email address, phone number, and financial information necessary for our advisory services.
              </p>

              <h3 style={{color: '#031031', marginTop: '32px', marginBottom: '16px'}}>How We Use Your Information</h3>
              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                We use the information we collect to provide, maintain, and improve our research and advisory services, communicate with you about your account and our services, and comply with legal obligations as a SEBI registered research analyst.
              </p>

              <h3 style={{color: '#031031', marginTop: '32px', marginBottom: '16px'}}>Information Sharing</h3>
              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
              </p>

              <h3 style={{color: '#031031', marginTop: '32px', marginBottom: '16px'}}>Data Security</h3>
              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h3 style={{color: '#031031', marginTop: '32px', marginBottom: '16px'}}>Contact Us</h3>
              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                If you have any questions about this Privacy Policy, please contact us at info@kashishjoshiresearch.com or call us at +91 91717 18451.
              </p>

              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                <strong>SEBI Registration No: INH000017240</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;