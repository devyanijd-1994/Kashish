import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Newsletter Section */}
      <div className="py-12" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-2xl font-bold mb-2" style={{color: '#031031'}}>
                Subscribe Our Newsletter to Get More Updates
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter Email"
                className="px-4 py-3 rounded-lg flex-1 lg:w-80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                style={{color: '#031031', backgroundColor: '#fff'}}
              />
              <button 
                className="text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                style={{backgroundColor: '#00A651'}}
                onMouseOver={(e) => e.target.style.backgroundColor = '#008541'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#00A651'}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16" style={{backgroundColor: '#fff'}}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Logo */}
            <div>
              <div className="mb-8">
                <img src="/assets/images/logoo2.png" alt="Kashish Joshi Research" className="h-12" />
              </div>
            </div>

            {/* Need Help */}
            <div>
              <h3 className="text-lg font-semibold mb-6" style={{color: '#031031'}}>Need Help?</h3>
              <ul className="space-y-3">
                <li><Link to="/privacy-policy" className="hover:underline transition-colors" style={{color: '#647589', fontSize: '14px'}}>Privacy Policy</Link></li>
                <li><Link to="/refund-policy" className="hover:underline transition-colors" style={{color: '#647589', fontSize: '14px'}}>Our Refund Policy</Link></li>
                <li><Link to="/disclaimer" className="hover:underline transition-colors" style={{color: '#647589', fontSize: '14px'}}>Our Disclaimer</Link></li>
                <li><Link to="/terms" className="hover:underline transition-colors" style={{color: '#647589', fontSize: '14px'}}>Terms & Conditions</Link></li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6" style={{color: '#031031'}}>Our Services</h3>
              <ul className="space-y-3">
                <li><Link to="/services" className="hover:underline transition-colors" style={{color: '#647589', fontSize: '14px'}}>Stock Cash</Link></li>
                <li><Link to="/services" className="hover:underline transition-colors" style={{color: '#647589', fontSize: '14px'}}>Option</Link></li>
                <li><Link to="/services" className="hover:underline transition-colors" style={{color: '#647589', fontSize: '14px'}}>Future</Link></li>
                <li><Link to="/services" className="hover:underline transition-colors" style={{color: '#647589', fontSize: '14px'}}>Banknifty / Nifty Options</Link></li>
                <li><Link to="/services" className="hover:underline transition-colors" style={{color: '#647589', fontSize: '14px'}}>Banknifty / Nifty Future</Link></li>
                <li><Link to="/services" className="hover:underline transition-colors" style={{color: '#647589', fontSize: '14px'}}>Systematic Trading Plan</Link></li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h3 className="text-lg font-semibold mb-6" style={{color: '#031031'}}>Get In Touch</h3>
              <div className="space-y-4">
                <div>
                  <p style={{color: '#647589', fontSize: '14px', lineHeight: '1.6'}}>
                    Co Habibas Co-working Space Desk No. 
                    140, Radhana Prime Building, 5a, Haldons 
                    Road, Hiran Magri, Sector 4, Amer 
                    Road, Near HDFC Bank, Udaipur, 
                    Rajasthan - 313002
                  </p>
                </div>
                <div>
                  <p style={{color: '#647589', fontSize: '14px'}}>
                    <a href="mailto:info@kashishjoshiresearch.com" className="hover:underline">
                      info@kashishjoshiresearch.com
                    </a>
                  </p>
                </div>
                <div>
                  <p style={{color: '#647589', fontSize: '14px', fontWeight: '600'}}>Principal Officer :</p>
                  <p style={{color: '#647589', fontSize: '14px'}}>+91 91717 18451</p>
                </div>
                <div>
                  <p style={{color: '#647589', fontSize: '14px', fontWeight: '600'}}>Compliance Officer :</p>
                  <p style={{color: '#647589', fontSize: '14px'}}>+91 91717 18451</p>
                </div>
                <div>
                  <p style={{color: '#647589', fontSize: '14px', fontWeight: '600'}}>Inquiry Contact :</p>
                  <p style={{color: '#647589', fontSize: '14px'}}>+91 91717 18451</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-4" style={{borderColor: '#e5e7eb', backgroundColor: '#fff'}}>
        <div className="container-custom">
          <div className="text-center">
            <p style={{color: '#647589', fontSize: '14px'}}>
              © 2024 <span style={{color: '#00A651', fontWeight: '600'}}>Kashish Joshi Research</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.link/iw4ct4"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
          style={{backgroundColor: '#25D366'}}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;