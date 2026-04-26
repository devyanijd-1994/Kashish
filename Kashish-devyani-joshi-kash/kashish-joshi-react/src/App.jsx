import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

// import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeFooter from './components/HomeFooter';
import WhatsAppButton from './components/WhatsAppButton';
import DisclaimerTicker from './components/DisclaimerTicker';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import NotFound from './pages/NotFound';
import IntradayLanding from './pages/IntradayLanding';

import StockCash from './pages/services/StockCash';
import Option from './pages/services/Option';
import Future from './pages/services/Future';
import BankniftyOption from './pages/services/BankniftyOption';
import BankniftyFuture from './pages/services/BankniftyFuture';
import SystematicTradingPlan from './pages/services/SystematicTradingPlan';
import CommodityServices from './pages/services/CommodityServices';

import Payment from './pages/Payment';
import PrivacyPolicy from './pages/policies/PrivacyPolicy';
import TermsCondition from './pages/policies/TermsCondition';
import OurDisclaimer from './pages/policies/OurDisclaimer';
import OurRefundPolicy from './pages/policies/OurRefundPolicy';

function Layout({ children, useHomeFooter = false }) {
  return (
    <>
      {/* <Topbar /> */}
      <DisclaimerTicker />
      <Navbar />
      <main>{children}</main>
      {useHomeFooter ? <HomeFooter /> : <Footer />}
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Thank you page — no layout */}
        <Route path="/thankyou" element={<><ThankYou /><WhatsAppButton /></>} />

        {/* Landing pages — no layout */}
        <Route path="/intraday-trading-calls" element={<IntradayLanding />} />

        {/* All other pages with layout */}
        <Route path="/" element={<Layout useHomeFooter={true}><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/payment" element={<Layout><Payment /></Layout>} />

        {/* Services */}
        <Route path="/stock-cash" element={<Layout><StockCash /></Layout>} />
        <Route path="/option" element={<Layout><Option /></Layout>} />
        <Route path="/future" element={<Layout><Future /></Layout>} />
        <Route path="/banknifty-nifty-option" element={<Layout><BankniftyOption /></Layout>} />
        <Route path="/banknifty-nifty-future" element={<Layout><BankniftyFuture /></Layout>} />
        <Route path="/systematic-trading-plan" element={<Layout><SystematicTradingPlan /></Layout>} />
        <Route path="/commodity-services" element={<Layout><CommodityServices /></Layout>} />

        {/* Policies */}
        <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/terms-condition" element={<Layout><TermsCondition /></Layout>} />
        <Route path="/our-disclaimer" element={<Layout><OurDisclaimer /></Layout>} />
        <Route path="/our-refund-policy" element={<Layout><OurRefundPolicy /></Layout>} />

        {/* 404 */}
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}
