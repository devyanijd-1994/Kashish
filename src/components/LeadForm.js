import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const LeadForm = ({ title = "Book Your Free Trial", className = "" }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    segment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const segments = [
    'Stock Services - Cash, Future, Option',
    'Nifty/Bank Nifty Services - Option Future',
    'Advance Trading Plan (ATP) Services',
    'Commodity Services'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      // For demo purposes, we'll simulate form submission
      // In production, replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessage('Thank you! We will contact you soon.');
      setFormData({ name: '', number: '', email: '', segment: '' });
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`hero-form bg-white rounded-xl shadow-xl max-w-sm p-4 lg:p-6 ${className}`}
      style={{
        background: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginTop: '20px'
      }}
    >
      <h4 className="text-2xl font-bold mb-6 text-center" style={{color: '#031031', fontSize: '1.5em', marginBottom: '15px'}}>
        {title}
      </h4>
      
      {message && (
        <p 
          className={`mb-4 p-3 rounded-lg text-center font-bold ${
            message.includes('Thank you') 
              ? 'text-green-700' 
              : 'text-red-700'
          }`}
          style={{color: 'red', marginBottom: '20px', fontWeight: 'bold'}}
        >
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="form-control w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
            style={{
              marginBottom: '10px',
              color: '#000 !important',
              fontFamily: 'Rubik, sans-serif'
            }}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Your Number"
            pattern="[0-9]{10}"
            minLength="10"
            maxLength="10"
            title="Please enter exactly 10 digits without any spaces or special characters."
            inputMode="numeric"
            required
            className="form-control w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
            style={{
              marginBottom: '10px',
              color: '#000 !important',
              fontFamily: 'Rubik, sans-serif'
            }}
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            title="Please enter a valid email address."
            required
            className="form-control w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
            style={{
              marginBottom: '10px',
              color: '#000 !important',
              fontFamily: 'Rubik, sans-serif'
            }}
          />
        </div>

        <div className="form-group">
          <select
            name="segment"
            value={formData.segment}
            onChange={handleChange}
            required
            className="form-control w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
            style={{
              marginBottom: '10px',
              color: '#000',
              fontFamily: 'Rubik, sans-serif'
            }}
          >
            <option value="" disabled>Select Your Segment</option>
            {segments.map((segment, index) => (
              <option key={index} value={segment}>{segment}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="button header-cta w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            width: '100%',
            textAlign: 'center',
            background: '#00A651',
            color: '#ffffff',
            fontWeight: '600',
            padding: '17px 25px',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            display: 'inline-block',
            textTransform: 'capitalize',
            fontFamily: 'Poppins, sans-serif',
            border: 'none',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => e.target.style.background = '#0058bd'}
          onMouseOut={(e) => e.target.style.background = '#00A651'}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="loading-spinner mr-2"></div>
              Submitting...
            </div>
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default LeadForm;