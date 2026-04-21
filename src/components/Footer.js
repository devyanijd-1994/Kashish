import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Newsletter Section */}
      <div className="py-8 lg:py-12" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl lg:text-2xl font-bold mb-2" style={{color: '#031031'}}>
                Subscribe Our Newsletter to Get More Updates
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter Email"
                className="px-3 lg:px-4 py-2 lg:py-3 rounded-lg flex-1 lg:w-80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm lg:text-base"
                style={{color: '#031031', backgroundColor: '#fff'}}
              />
              <button 
                className="text-white px-6 lg:px-8 py-2 lg:py-3 rounded-lg font-semibold transition-colors text-sm lg:text-base"
                style={{backgroundColor: '#1e40af'}}
                onMouseOver={(e) => e.target.style.backgroundColor = '#1e3a8a'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#1e40af'}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 lg:py-16" style={{backgroundColor: '#fff'}}>
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Logo & Description */}
            <div className="text-center sm:text-left">
              <div className="mb-6 lg:mb-8">
                <img src="/assets/images/logoo2.png" alt="Kashish Joshi Research" className="h-10 lg:h-12 mx-auto sm:mx-0" />
              </div>
              <p className="text-xs lg:text-sm text-gray-600 leading-relaxed mb-4">
                Trusted financial advisory services for traders and investors. SEBI registered research analyst providing expert market guidance.
              </p>
              <div className="flex justify-center sm:justify-start space-x-3">
                <a href="#" className="w-8 h-8 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <i className="fab fa-facebook-f text-xs"></i>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <i className="fab fa-twitter text-xs"></i>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <i className="fab fa-linkedin text-xs"></i>
                </a>
              </div>
            </div>

            {/* Our Services */}
            <div className="text-center sm:text-left">
              <h3 className="text-base lg:text-lg font-semibold mb-4 lg:mb-6" style={{color: '#031031'}}>Our Services</h3>
              <ul className="space-y-2 lg:space-y-3">
                <li><Link to="/services" className="hover:underline transition-colors text-xs lg:text-sm" style={{color: '#647589'}}>Stock Cash</Link></li>
                <li><Link to="/services" className="hover:underline transition-colors text-xs lg:text-sm" style={{color: '#647589'}}>Option Services</Link></li>
                <li><Link to="/services" className="hover:underline transition-colors text-xs lg:text-sm" style={{color: '#647589'}}>Future Services</Link></li>
                <li><Link to="/services" className="hover:underline transition-colors text-xs lg:text-sm" style={{color: '#647589'}}>Banknifty / Nifty Options</Link></li>
                <li><Link to="/services" className="hover:underline transition-colors text-xs lg:text-sm" style={{color: '#647589'}}>Systematic Trading Plan</Link></li>
              </ul>
            </div>

            {/* Legal & Support */}
            <div className="text-center sm:text-left">
              <h3 className="text-base lg:text-lg font-semibold mb-4 lg:mb-6" style={{color: '#031031'}}>Legal & Support</h3>
              <ul className="space-y-2 lg:space-y-3">
                <li><Link to="/privacy-policy" className="hover:underline transition-colors text-xs lg:text-sm" style={{color: '#647589'}}>Privacy Policy</Link></li>
                <li><Link to="/refund-policy" className="hover:underline transition-colors text-xs lg:text-sm" style={{color: '#647589'}}>Refund Policy</Link></li>
                <li><Link to="/disclaimer" className="hover:underline transition-colors text-xs lg:text-sm" style={{color: '#647589'}}>Disclaimer</Link></li>
                <li><Link to="/terms" className="hover:underline transition-colors text-xs lg:text-sm" style={{color: '#647589'}}>Terms & Conditions</Link></li>
                <li><Link to="/contact" className="hover:underline transition-colors text-xs lg:text-sm" style={{color: '#647589'}}>Contact Support</Link></li>
              </ul>
            </div>

            {/* Contact Us - Phoenix Style */}
            <div className="text-center sm:text-left">
              <h3 className="text-base lg:text-lg font-semibold mb-4 lg:mb-6" style={{color: '#031031'}}>Contact Us</h3>
              <div className="space-y-3 lg:space-y-4">
                {/* Phone */}
                <div className="flex items-start justify-center sm:justify-start footer-contact-item">
                  <div className="footer-contact-icon bg-blue-100">
                    <i className="fas fa-phone text-blue-600 text-xs"></i>
                  </div>
                  <div>
                    <p className="text-xs lg:text-sm font-semibold text-gray-800">Call Us</p>
                    <a href="tel:+919171718451" className="text-xs lg:text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      +91 91717 18451
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start justify-center sm:justify-start footer-contact-item">
                  <div className="footer-contact-icon bg-blue-100">
                    <i className="fas fa-envelope text-blue-600 text-xs"></i>
                  </div>
                  <div>
                    <p className="text-xs lg:text-sm font-semibold text-gray-800">Email Us</p>
                    <a href="mailto:info@kashishjoshiresearch.com" className="text-xs lg:text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      info@kashishjoshiresearch.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start justify-center sm:justify-start footer-contact-item">
                  <div className="footer-contact-icon bg-orange-100">
                    <i className="fas fa-map-marker-alt text-orange-600 text-xs"></i>
                  </div>
                  <div>
                    <p className="text-xs lg:text-sm font-semibold text-gray-800">Visit Us</p>
                    <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                      Hiran Magri, Udaipur<br />
                      Rajasthan - 313002
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start justify-center sm:justify-start footer-contact-item">
                  <div className="footer-contact-icon bg-blue-100">
                    <i className="fab fa-whatsapp text-blue-600 text-xs"></i>
                  </div>
                  <div>
                    <p className="text-xs lg:text-sm font-semibold text-gray-800">WhatsApp</p>
                    <a href="https://wa.link/iw4ct4" target="_blank" rel="noopener noreferrer" className="text-xs lg:text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Chat with Expert
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-4 lg:py-6" style={{borderColor: '#e5e7eb', backgroundColor: '#f8f9fa'}}>
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="text-center lg:text-left">
              <p style={{color: '#647589', fontSize: '12px'}} className="lg:text-sm">
                © 2024 <span style={{color: '#1e40af', fontWeight: '600'}}>Kashish Joshi Research</span>. All rights reserved.
              </p>
            </div>
            <div className="text-center lg:text-right">
              <p style={{color: '#647589', fontSize: '11px'}} className="lg:text-xs">
                <span className="font-semibold">SEBI Registration:</span> INH000017240 | 
                <span className="font-semibold"> Research Analyst:</span> Kashish Joshi
              </p>
              <p style={{color: '#647589', fontSize: '10px'}} className="lg:text-xs mt-1">
                Investment in securities market are subject to market risks. Read all the related documents carefully before investing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-4 lg:bottom-6 right-4 lg:right-6 z-50">
        <a
          href="https://wa.link/iw4ct4"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 lg:w-14 h-12 lg:h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
          style={{backgroundColor: '#25D366'}}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="lg:w-7 lg:h-7">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;