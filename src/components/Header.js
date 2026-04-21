import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaArrowRight } from 'react-icons/fa';
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
      {/* Phoenix Capital Style Top Bar */}
      {/* <div className="bg-slate-900 text-white py-2 lg:py-3 hidden lg:block">
        <div className="container-custom">
          <div className="flex justify-between items-center text-xs lg:text-sm">
            <div className="flex items-center space-x-4 lg:space-x-6">
              <span className="text-blue-400 font-semibold text-xs lg:text-sm">SEBI Registration: INH000017240</span>
              <span className="text-gray-300">Research Analyst: Kashish Joshi</span>
            </div>
            <div className="flex items-center space-x-3 lg:space-x-4">
              <span className="text-gray-300 text-xs lg:text-sm">Follow Us:</span>
              <div className="flex space-x-1 lg:space-x-2">
                <a href="#" className="w-6 lg:w-8 h-6 lg:h-8 bg-white/10 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors">
                  <i className="fab fa-facebook-f text-xs"></i>
                </a>
                <a href="#" className="w-6 lg:w-8 h-6 lg:h-8 bg-white/10 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors">
                  <i className="fab fa-twitter text-xs"></i>
                </a>
                <a href="#" className="w-6 lg:w-8 h-6 lg:h-8 bg-white/10 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors">
                  <i className="fab fa-linkedin text-xs"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Phoenix Capital Style Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center py-3 lg:py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src="/assets/images/logoo2.png" alt="Kashish Joshi Research" className="h-10 lg:h-12" />
            </Link>

            {/* Desktop Navigation - Phoenix Style */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link
                to="/"
                className={`font-semibold text-sm transition-colors hover:text-blue-600 ${
                  location.pathname === '/' ? 'text-blue-600' : 'text-slate-700'
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`font-semibold text-sm transition-colors hover:text-blue-600 ${
                  location.pathname === '/about' ? 'text-blue-600' : 'text-slate-700'
                }`}
              >
                About
              </Link>

              {/* Services Dropdown - Phoenix Style */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <Link
                  to="/services"
                  className={`font-semibold text-sm transition-colors hover:text-blue-600 flex items-center ${
                    location.pathname.includes('/services') ? 'text-blue-600' : 'text-slate-700'
                  }`}
                >
                  Services <FaChevronDown className="ml-1 text-xs" />
                </Link>
                
                <AnimatePresence>
                  {servicesDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 bg-white shadow-xl rounded-xl py-4 min-w-72 z-50 border border-gray-100"
                      style={{ marginTop: '8px' }}
                    >
                      {servicesItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className="block px-6 py-3 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Member Zone Dropdown - Phoenix Style */}
              <div 
                className="relative"
                onMouseEnter={() => setMemberZoneDropdown(true)}
                onMouseLeave={() => setMemberZoneDropdown(false)}
              >
                <span className="font-semibold text-sm text-slate-700 hover:text-blue-600 transition-colors flex items-center cursor-pointer">
                  Legal <FaChevronDown className="ml-1 text-xs" />
                </span>
                
                <AnimatePresence>
                  {memberZoneDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 bg-white shadow-xl rounded-xl py-4 min-w-64 z-50 border border-gray-100"
                      style={{ marginTop: '8px' }}
                    >
                      {memberZoneItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className="block px-6 py-3 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/contact"
                className={`font-semibold text-sm transition-colors hover:text-blue-600 ${
                  location.pathname === '/contact' ? 'text-blue-600' : 'text-slate-700'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Phoenix Style CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
              <a
                href="https://wa.link/iw4ct4"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold text-sm hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 flex items-center"
              >
                Get Started
                <FaArrowRight className="ml-2 text-xs" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Phoenix Style */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="container-custom py-6">
                <nav className="flex flex-col space-y-4">
                  <Link
                    to="/"
                    onClick={closeMenu}
                    className={`font-semibold py-3 transition-colors ${
                      location.pathname === '/' ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    onClick={closeMenu}
                    className={`font-semibold py-3 transition-colors ${
                      location.pathname === '/about' ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                    }`}
                  >
                    About
                  </Link>
                  
                  {/* Mobile Services Menu */}
                  <div>
                    <span className="font-semibold py-3 text-slate-700 block">Services</span>
                    <div className="pl-4 space-y-2">
                      {servicesItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          onClick={closeMenu}
                          className="block py-2 text-sm text-slate-600 hover:text-blue-600 font-medium"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Legal Menu */}
                  <div>
                    <span className="font-semibold py-3 text-slate-700 block">Legal</span>
                    <div className="pl-4 space-y-2">
                      {memberZoneItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          onClick={closeMenu}
                          className="block py-2 text-sm text-slate-600 hover:text-blue-600 font-medium"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    onClick={closeMenu}
                    className={`font-semibold py-3 transition-colors ${
                      location.pathname === '/contact' ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                    }`}
                  >
                    Contact
                  </Link>
                  
                  <div className="pt-4 space-y-3">
                    <a
                      href="https://wa.link/iw4ct4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold"
                      onClick={closeMenu}
                    >
                      Get Started
                    </a>
                  </div>
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