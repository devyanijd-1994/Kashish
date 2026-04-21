import React from 'react';
import { motion } from 'framer-motion';

const Blogs = () => {
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Blogs</h1>
            <div className="breadcrumb">
              <span><a href="/" className="text-white hover:underline">Home</a> | <span className="text-white">Blogs</span></span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{color: '#031031'}}>
              Coming Soon
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{color: '#647589'}}>
              We're working on bringing you insightful articles and market analysis. 
              Stay tuned for expert insights on stock market trends, trading strategies, and investment tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Get Notified
              </a>
              <a
                href="https://wa.link/iw4ct4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;