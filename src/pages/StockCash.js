import React from 'react';
import { motion } from 'framer-motion';

const StockCash = () => {
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Stock Cash</h1>
            <div className="breadcrumb">
              <span><a href="/" className="text-white hover:underline">Home</a> | <span className="text-white">Stock Cash</span></span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stock Cash Details */}
      <section className="service-details section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h5 className="text-2xl font-bold mb-6" style={{color: '#031031'}}>Overview</h5>
              <p style={{color: '#647589', lineHeight: '1.7', marginBottom: '24px'}}>
                Cash Services for Stocks Kashish Joshi Research offers Stock Cash intraday calls. 
                This service caters to day traders who want to profit in rising and declining markets. 
                To provide you with profitable entry and exit opportunities, our experts closely monitor 
                the stocks and market movements.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="/assets/images/service-details-img.png" alt="Stock Cash Service" className="w-full" />
            </motion.div>
          </div>

          <div className="mt-16">
            <h5 className="text-2xl font-bold mb-6" style={{color: '#031031'}}>Features:</h5>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Calls on an intraday basis 1-2",
                "Total Opposition & Assistance every day",
                "Appropriate follow-up by chat and SMS",
                "All significant news and updates on the economy",
                "Round-the-clock client assistance"
              ].map((feature, index) => (
                <li key={index} className="flex items-center" style={{color: '#647589'}}>
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16">
            <h5 className="text-2xl font-bold mb-6" style={{color: '#031031'}}>Stock Cash Pricing:</h5>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr style={{backgroundColor: '#f8f9fa'}}>
                    <th className="border border-gray-300 px-6 py-4 text-left" style={{color: '#031031'}}>Duration</th>
                    <th className="border border-gray-300 px-6 py-4 text-left" style={{color: '#031031'}}>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { duration: "Monthly", price: "10000+GST" },
                    { duration: "Quarterly", price: "25000+GST" },
                    { duration: "Half Yearly", price: "40000+GST" },
                    { duration: "Yearly", price: "70000+GST" }
                  ].map((item, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-6 py-4" style={{color: '#647589'}}>{item.duration}</td>
                      <td className="border border-gray-300 px-6 py-4" style={{color: '#00A651', fontWeight: '600'}}>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/contact"
              className="btn-primary"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StockCash;