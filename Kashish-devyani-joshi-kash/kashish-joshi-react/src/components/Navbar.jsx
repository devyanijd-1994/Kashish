import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import EnquiryModal from './EnquiryModal';

const services = [
  { label: 'Stock Cash', to: '/stock-cash' },
  { label: 'Option', to: '/option' },
  { label: 'Future', to: '/future' },
  { label: 'Banknifty / Nifty Options', to: '/banknifty-nifty-option' },
  { label: 'Banknifty / Nifty Future', to: '/banknifty-nifty-future' },
  { label: 'Systematic Trading Plan', to: '/systematic-trading-plan' },
  { label: 'Commodity Services', to: '/commodity-services' },
];

const userAgreement = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms-condition' },
  { label: 'Our Disclaimer', to: '/our-disclaimer' },
  { label: 'Our Refund Policy', to: '/our-refund-policy' },
];

function Dropdown({ label, items, isActive }) {
  const [open, setOpen] = useState(false);
  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`flex items-center gap-1 text-sm font-bold tracking-widest uppercase py-5 border-b-2 transition-colors ${
          isActive
            ? 'border-[#c9a84c] text-[#1a1a1a]'
            : 'border-transparent text-[#1a1a1a] hover:text-[#00A651]'
        }`}
        style={{
          textShadow: '0 1px 2px rgba(0,0,0,0.1)',
          letterSpacing: '0.1em'
        }}
      >
        {label}
        <i className="fas fa-chevron-down text-[9px] mt-0.5 ml-0.5"></i>
      </button>
      {open && (
        <ul className="absolute top-full left-0 bg-white shadow-xl min-w-[220px] z-50 py-1 border-t-2 border-[#c9a84c]">
          {items.map(item => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="block px-5 py-2.5 text-xs font-semibold text-gray-700 hover:bg-[#00A651] hover:text-white transition-colors tracking-wide"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const isActive = (p) => location.pathname === p;

  const navLink = (to, label) => (
    <li key={to}>
      <Link
        to={to}
        className={`text-sm font-bold tracking-widest uppercase py-5 border-b-2 block ${
          isActive(to)
            ? 'border-[#00A651] text-[#1a1a1a]'
            : 'border-transparent text-[#1a1a1a] hover:text-[#00A651]'
        }`}
        style={{
          // textShadow: '0 1px 2px rgba(0,0,0,0.1)',
          letterSpacing: '0.1em'
        }}
      >
        {label}
      </Link>
    </li>
  );

  return (
    <header className="bg-[#eef1f8] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" onClick={() => setMobileOpen(false)} className="py-2">
          <img src="/assets/images/logoo2.png" alt="Kashish Joshi Research" className="h-14 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          <ul className="flex items-center gap-12">
            {navLink('/', 'Home')}
            {navLink('/about', 'About Us')}
            <Dropdown
              label="Services"
              items={services}
              isActive={services.some(s => isActive(s.to))}
            />
             <Dropdown
              label="User Agreement"
              items={userAgreement}
              isActive={userAgreement.some(s => isActive(s.to))}
            />
            {navLink('/payment-option', 'Payment Option')}
            {navLink('/contact', 'Contact Us')}
            {/* {navLink('/complaint', 'Complaint Board')} */}
          </ul>
        </nav>

        {/* Enquiry Button */}
        {/* <div className="hidden lg:block">
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#c9a84c] text-white text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full hover:bg-[#b8943e] transition-colors"
          >
            Enquiry
          </button>
        </div> */}

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-[#1a1a1a] text-2xl p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#eef1f8] border-t border-gray-100 px-4 pb-5">
          <ul className="flex flex-col divide-y divide-gray-100">
            {[
              { label: 'Home', to: '/' }, 
              { label: 'Payment Option', to: '/payment-option' }, 
              { label: 'About Us', to: '/about' },
              { label: 'Contact Us', to: '/contact' },
              { label: 'Complaint Board', to: '/complaint' }
            ].map(item => (
              <li key={item.to}>
                <Link to={item.to} className="block py-3 text-sm font-bold tracking-widest uppercase text-[#1a1a1a] hover:text-[#c9a84c]"
                  style={{
                    textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                    letterSpacing: '0.1em'
                  }}
                  onClick={() => setMobileOpen(false)}>{item.label}</Link>
              </li>
            ))}
            {[{ label: 'Services', items: services }, { label: 'User Agreement', items: userAgreement }].map(group => (
              <li key={group.label}>
                <button className="w-full flex justify-between items-center py-3 text-sm font-bold tracking-widest uppercase text-[#1a1a1a]"
                  style={{
                    textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                    letterSpacing: '0.1em'
                  }}
                  onClick={() => setExpandedMobile(expandedMobile === group.label ? null : group.label)}>
                  {group.label}
                  <i className={`fas fa-chevron-${expandedMobile === group.label ? 'up' : 'down'} text-xs text-[#c9a84c]`}></i>
                </button>
                {expandedMobile === group.label && (
                  <ul className="pl-3 pb-2 space-y-1">
                    {group.items.map(item => (
                      <li key={item.to}>
                        <Link to={item.to} className="block py-2 text-xs text-gray-600 hover:text-[#c9a84c]"
                          onClick={() => setMobileOpen(false)}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <button onClick={() => { setMobileOpen(false); setShowModal(true); }}
            className="mt-4 block w-full bg-[#c9a84c] text-white text-xs font-bold tracking-widest uppercase px-4 py-3 rounded-full text-center hover:bg-[#b8943e]">
            Enquiry
          </button>
        </div>
      )}

      {/* Enquiry Modal */}
      {showModal && <EnquiryModal onClose={() => setShowModal(false)} />}
    </header>
  );
}
