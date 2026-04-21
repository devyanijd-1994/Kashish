import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [memberZoneDropdown, setMemberZoneDropdown] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const servicesItems = [
    { name: 'Stock Cash', path: '/services/stock-cash' },
    { name: 'Option', path: '/services/option' },
    { name: 'Future', path: '/services/future' },
    { name: 'Banknifty / Nifty Options', path: '/services/banknifty-nifty-option' },
    { name: 'Banknifty / Nifty Future', path: '/services/banknifty-nifty-future' },
    { name: 'Systematic Trading Plan', path: '/services/systematic-trading-plan' },
    { name: 'Commodity Services', path: '/services/commodity-services' },
    { name: 'Intraday Trading Calls', path: '/intraday-trading-calls' }
  ];

  const memberZoneItems = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-condition' },
    { name: 'Our Disclaimer', path: '/our-disclaimer' },
    { name: 'Our Refund Policy', path: '/our-refund-policy' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar bg-white py-6 hidden lg:block" style={{borderBottom: '1px solid rgba(100, 117, 137, 0.2)'}}>
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <div className="phone flex items-center">
              <div className="icon mr-3">
                <img src="/assets/images/phone.png" alt="phone" className="w-10 h-10" />
              </div>
              <div className="text">
                <p style={{color: '#647589', fontSize: '14px', margin: 0}}>Requesting a call</p>
                <span className="bold font-medium" style={{color: '#031031', fontSize: '14px'}}>(+91 91717 18451)</span>
              </div>
            </div>

            <div className="clock flex items-center">
              <div className="icon mr-3">
                <img src="/assets/images/clock.png" alt="clock" className="w-11 h-11" />
              </div>
              <div className="text">
                <p style={{color: '#647589', fontSize: '14px', margin: 0}}>Sunday - Friday:</p>
                <span className="bold font-medium" style={{color: '#031031', fontSize: '14px'}}>9am - 7pm</span>
              </div>
            </div>

            <div className="envelope flex items-center">
              <div className="icon mr-3">
                <img src="/assets/images/envelope.png" alt="envelope" className="w-10 h-10" />
              </div>
              <div className="text">
                <p style={{color: '#647589', fontSize: '14px', margin: 0}}>Contact Us:</p>
                <span className="bold font-medium" style={{color: '#031031', fontSize: '14px'}}>info@kashishjoshiresearch.com</span>
              </div>
            </div>

            <div className="location flex items-center">
              <div className="icon mr-3">
                <img src="/assets/images/location.png" alt="location" className="w-10 h-10" />
              </div>
              <div className="text">
                <p style={{color: '#647589', fontSize: '14px', margin: 0}}>Hiran Magri, Udaipur</p>
                <span className="bold font-medium" style={{color: '#031031', fontSize: '14px'}}>Rajasthan</span>
              </div>
            </div>

            <div className="social-icon flex space-x-2">
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:text-white" style={{backgroundColor: 'transparent', color: '#031031'}} onMouseOver={(e) => {e.target.style.backgroundColor = '#00A651'; e.target.style.color = '#fff'}} onMouseOut={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#031031'}}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:text-white" style={{backgroundColor: 'transparent', color: '#031031'}} onMouseOver={(e) => {e.target.style.backgroundColor = '#00A651'; e.target.style.color = '#fff'}} onMouseOut={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#031031'}}>
                <i className="fab fa-dribbble"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:text-white" style={{backgroundColor: 'transparent', color: '#031031'}} onMouseOver={(e) => {e.target.style.backgroundColor = '#00A651'; e.target.style.color = '#fff'}} onMouseOut={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#031031'}}>
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:text-white" style={{backgroundColor: 'transparent', color: '#031031'}} onMouseOver={(e) => {e.target.style.backgroundColor = '#00A651'; e.target.style.color = '#fff'}} onMouseOut={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#031031'}}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:text-white" style={{backgroundColor: 'transparent', color: '#031031'}} onMouseOver={(e) => {e.target.style.backgroundColor = '#00A651'; e.target.style.color = '#fff'}} onMouseOut={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#031031'}}>
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white w-full">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="site-logo">
              <img src="/assets/images/logoo2.png" alt="company logo" className="h-16" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="main-menu hidden lg:flex items-center" id="mobile-menu">
              <ul className="flex items-center space-x-8">
                <li>
                  <Link
                    to="/"
                    className="font-medium transition-colors duration-200 py-10 block text-sm font-semibold"
                    style={{
                      color: location.pathname === '/' ? '#00A651' : '#031031',
                      textTransform: 'capitalize',
                      fontWeight: '600',
                      fontSize: '14px',
                      fontFamily: 'Poppins, sans-serif'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#00A651'}
                    onMouseOut={(e) => e.target.style.color = location.pathname === '/' ? '#00A651' : '#031031'}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    className="font-medium transition-colors duration-200 py-10 block text-sm font-semibold"
                    style={{
                      color: location.pathname === '/about' ? '#00A651' : '#031031',
                      textTransform: 'capitalize',
                      fontWeight: '600',
                      fontSize: '14px',
                      fontFamily: 'Poppins, sans-serif'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#00A651'}
                    onMouseOut={(e) => e.target.style.color = location.pathname === '/about' ? '#00A651' : '#031031'}
                  >
                    About
                  </Link>
                </li>

                {/* Services Dropdown */}
                <li 
                  className="relative"
                  onMouseEnter={() => setServicesDropdown(true)}
                  onMouseLeave={() => setServicesDropdown(false)}
                >
                  <Link
                    to="/services"
                    className="font-medium transition-colors duration-200 py-10 block text-sm font-semibold flex items-center"
                    style={{
                      color: location.pathname.includes('/services') ? '#00A651' : '#031031',
                      textTransform: 'capitalize',
                      fontWeight: '600',
                      fontSize: '14px',
                      fontFamily: 'Poppins, sans-serif'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#00A651'}
                    onMouseOut={(e) => e.target.style.color = location.pathname.includes('/services') ? '#00A651' : '#031031'}
                  >
                    Services <FaChevronDown className="ml-1 text-xs" />
                  </Link>
                  
                  {/* Services Dropdown Menu */}
                  <AnimatePresence>
                    {servicesDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-64 z-50"
                        style={{ marginTop: '0px', border: '1px solid #e5e7eb' }}
                      >
                        {servicesItems.map((item, index) => (
                          <Link
                            key={index}
                            to={item.path}
                            className="block px-4 py-3 text-sm transition-colors duration-200 hover:bg-gray-50"
                            style={{
                              color: '#031031',
                              fontFamily: 'Poppins, sans-serif',
                              textDecoration: 'none'
                            }}
                            onMouseOver={(e) => {
                              e.target.style.color = '#00A651';
                              e.target.style.backgroundColor = '#f9fafb';
                            }}
                            onMouseOut={(e) => {
                              e.target.style.color = '#031031';
                              e.target.style.backgroundColor = 'transparent';
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                {/* Member Zone Dropdown */}
                <li 
                  className="relative"
                  onMouseEnter={() => setMemberZoneDropdown(true)}
                  onMouseLeave={() => setMemberZoneDropdown(false)}
                >
                  <span
                    className="font-medium transition-colors duration-200 py-10 block text-sm font-semibold flex items-center cursor-pointer"
                    style={{
                      color: '#031031',
                      textTransform: 'capitalize',
                      fontWeight: '600',
                      fontSize: '14px',
                      fontFamily: 'Poppins, sans-serif'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#00A651'}
                    onMouseOut={(e) => e.target.style.color = '#031031'}
                  >
                    Member Zone <FaChevronDown className="ml-1 text-xs" />
                  </span>
                  
                  {/* Member Zone Dropdown Menu */}
                  <AnimatePresence>
                    {memberZoneDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-56 z-50"
                        style={{ marginTop: '0px', border: '1px solid #e5e7eb' }}
                      >
                        {memberZoneItems.map((item, index) => (
                          <Link
                            key={index}
                            to={item.path}
                            className="block px-4 py-3 text-sm transition-colors duration-200 hover:bg-gray-50"
                            style={{
                              color: '#031031',
                              fontFamily: 'Poppins, sans-serif',
                              textDecoration: 'none'
                            }}
                            onMouseOver={(e) => {
                              e.target.style.color = '#00A651';
                              e.target.style.backgroundColor = '#f9fafb';
                            }}
                            onMouseOut={(e) => {
                              e.target.style.color = '#031031';
                              e.target.style.backgroundColor = 'transparent';
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                <li>
                  <Link
                    to="/blogs"
                    className="font-medium transition-colors duration-200 py-10 block text-sm font-semibold"
                    style={{
                      color: location.pathname === '/blogs' ? '#00A651' : '#031031',
                      textTransform: 'capitalize',
                      fontWeight: '600',
                      fontSize: '14px',
                      fontFamily: 'Poppins, sans-serif'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#00A651'}
                    onMouseOut={(e) => e.target.style.color = location.pathname === '/blogs' ? '#00A651' : '#031031'}
                  >
                    Blogs
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="font-medium transition-colors duration-200 py-10 block text-sm font-semibold"
                    style={{
                      color: location.pathname === '/contact' ? '#00A651' : '#031031',
                      textTransform: 'capitalize',
                      fontWeight: '600',
                      fontSize: '14px',
                      fontFamily: 'Poppins, sans-serif'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#00A651'}
                    onMouseOut={(e) => e.target.style.color = location.pathname === '/contact' ? '#00A651' : '#031031'}
                  >
                    Contact
                  </Link>
                </li>

                <li className="button header-cta">
                  <a
                    href="https://wa.link/iw4ct4"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: '#00A651',
                      color: '#ffffff',
                      fontWeight: '600',
                      padding: '17px 25px',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease',
                      display: 'inline-block',
                      textTransform: 'capitalize',
                      fontFamily: 'Poppins, sans-serif',
                      textDecoration: 'none'
                    }}
                    onMouseOver={(e) => e.target.style.background = '#0058bd'}
                    onMouseOut={(e) => e.target.style.background = '#00A651'}
                  >
                    <span>WhatsApp Now <i className="fas fa-arrow-right ml-1"></i></span>
                  </a>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="container-custom py-4">
                <nav className="flex flex-col space-y-4">
                  <Link
                    to="/"
                    onClick={closeMenu}
                    className={`font-medium py-2 transition-colors duration-200 ${
                      location.pathname === '/'
                        ? 'text-primary-600'
                        : 'text-gray-700 hover:text-primary-600'
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    onClick={closeMenu}
                    className={`font-medium py-2 transition-colors duration-200 ${
                      location.pathname === '/about'
                        ? 'text-primary-600'
                        : 'text-gray-700 hover:text-primary-600'
                    }`}
                  >
                    About
                  </Link>
                  
                  {/* Mobile Services Menu */}
                  <div>
                    <span className="font-medium py-2 text-gray-700 block">Services</span>
                    <div className="pl-4 space-y-2">
                      {servicesItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          onClick={closeMenu}
                          className="block py-1 text-sm text-gray-600 hover:text-primary-600"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Member Zone Menu */}
                  <div>
                    <span className="font-medium py-2 text-gray-700 block">Member Zone</span>
                    <div className="pl-4 space-y-2">
                      {memberZoneItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          onClick={closeMenu}
                          className="block py-1 text-sm text-gray-600 hover:text-primary-600"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/blogs"
                    onClick={closeMenu}
                    className={`font-medium py-2 transition-colors duration-200 ${
                      location.pathname === '/blogs'
                        ? 'text-primary-600'
                        : 'text-gray-700 hover:text-primary-600'
                    }`}
                  >
                    Blogs
                  </Link>
                  <Link
                    to="/contact"
                    onClick={closeMenu}
                    className={`font-medium py-2 transition-colors duration-200 ${
                      location.pathname === '/contact'
                        ? 'text-primary-600'
                        : 'text-gray-700 hover:text-primary-600'
                    }`}
                  >
                    Contact
                  </Link>
                  <a
                    href="https://wa.link/iw4ct4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block text-center mt-4"
                    onClick={closeMenu}
                  >
                    WhatsApp Now
                  </a>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;