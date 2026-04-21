import React from 'react';
import { motion } from 'framer-motion';

const RefundPolicy = () => {
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Our Refund Policy</h1>
            <div className="breadcrumb">
              <span><a href="/" className="text-white hover:underline">Home</a> | <span className="text-white">Our Refund Policy</span></span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Refund Policy Content */}
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
              <h2 style={{color: '#031031', marginBottom: '24px'}}>Refund Policy</h2>
              
              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                At Kashish Joshi Research, we strive to provide high-quality research and advisory services. This refund policy outlines the terms and conditions for refunds of our services.
              </p>

              <h3 style={{color: '#031031', marginTop: '32px', marginBottom: '16px'}}>Free Trial Period</h3>
              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                We offer a free trial period for new subscribers to evaluate our services. During this period, you can cancel without any charges.
              </p>

              <h3 style={{color: '#031031', marginTop: '32px', marginBottom: '16px'}}>Refund Eligibility</h3>
              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                Refunds may be considered in the following circumstances:
              </p>
              <ul style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px', paddingLeft: '24px'}}>
                <li>Technical issues preventing access to our services</li>
                <li>Duplicate payments</li>
                <li>Cancellation within the specified cancellation period</li>
              </ul>

              <h3 style={{color: '#031031', marginTop: '32px', marginBottom: '16px'}}>Non-Refundable Services</h3>
              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                The following are generally not eligible for refunds:
              </p>
              <ul style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px', paddingLeft: '24px'}}>
                <li>Services already consumed or utilized</li>
                <li>Losses incurred from trading decisions based on our recommendations</li>
                <li>Change of mind after the cancellation period</li>
              </ul>

              <h3 style={{color: '#031031', marginTop: '32px', marginBottom: '16px'}}>Refund Process</h3>
              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                To request a refund, please contact us at info@kashishjoshiresearch.com with your subscription details and reason for the refund request. We will review your request and respond within 5-7 business days.
              </p>

              <h3 style={{color: '#031031', marginTop: '32px', marginBottom: '16px'}}>Processing Time</h3>
              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                Approved refunds will be processed within 7-14 business days and credited back to the original payment method.
              </p>

              <h3 style={{color: '#031031', marginTop: '32px', marginBottom: '16px'}}>Contact Us</h3>
              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                For any questions about our refund policy, please contact us at info@kashishjoshiresearch.com or call +91 91717 18451.
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

export default RefundPolicy;