import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LeadForm from '../components/LeadForm';

const Contact = () => {
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Contact</h1>
            <div className="breadcrumb">
              <span><a href="/" className="text-white hover:underline">Home</a> | <span className="text-white">Contact</span></span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section - Matching Original */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{color: '#031031'}}>
              Get In Touch
            </h2>
          </motion.div>

          <div className="max-w-md mx-auto">
            <LeadForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;