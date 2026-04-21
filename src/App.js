import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import StockCash from './pages/StockCash';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsCondition from './pages/TermsCondition';
import Disclaimer from './pages/Disclaimer';
import RefundPolicy from './pages/RefundPolicy';
import Blogs from './pages/Blogs';
import IntradayTradingCalls from './pages/IntradayTradingCalls';
import LandingPage from './pages/LandingPage';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/intraday-trading-calls" element={<IntradayTradingCalls />} />
          <Route path="/" element={
            <>
              <Header />
              <Home />
              <Footer />
              <WhatsAppButton />
            </>
          } />
          <Route path="/about" element={
            <>
              <Header />
              <About />
              <Footer />
              <WhatsAppButton />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Header />
              <Contact />
              <Footer />
              <WhatsAppButton />
            </>
          } />
          <Route path="/services" element={
            <>
              <Header />
              <Services />
              <Footer />
              <WhatsAppButton />
            </>
          } />
          <Route path="/services/stock-cash" element={
            <>
              <Header />
              <StockCash />
              <Footer />
              <WhatsAppButton />
            </>
          } />
          <Route path="/services/option" element={
            <>
              <Header />
              <Services />
              <Footer />
              <WhatsAppButton />
            </>
          } />
          <Route path="/services/future" element={
            <>
              <Header />
              <Services />
              <Footer />
              <WhatsAppButton />
            </>
          } />
          <Route path="/services/banknifty-nifty-option" element={
            <>
              <Header />
              <Services />
              <Footer />
              <WhatsAppButton />
            </>
          } />
          <Route path="/services/banknifty-nifty-future" element={
            <>
              <Header />
              <Services />
              <Footer />
              <WhatsAppButton />
            </>
          } />
          <Route path="/services/systematic-trading-plan" element={
            <>
              <Header />
              <Services />
              <Footer />
              <WhatsAppButton />
            </>
          } />
          <Route path="/services/commodity-services" element={
            <>
              <Header />
              <Services />
              <Footer />
              <WhatsAppButton />
            </>
          } />
          <Route path="/privacy-policy" element={
            <>
              <Header />
              <PrivacyPolicy />
              <Footer />
              <WhatsAppButton />
            </>
          } />
          <Route path="/terms-condition" element={
            <>
              <Header />
              <TermsCondition />
              <Footer />
              <WhatsAppButton />
            </>
          } />
          <Route path="/our-disclaimer" element={
            <>
              <Header />
              <Disclaimer />
              <Footer />
              <WhatsAppButton />
            </>
          } />
          <Route path="/our-refund-policy" element={
            <>
              <Header />
              <RefundPolicy />
              <Footer />
              <WhatsAppButton />
            </>
          } />
          <Route path="/blogs" element={
            <>
              <Header />
              <Blogs />
              <Footer />
              <WhatsAppButton />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;