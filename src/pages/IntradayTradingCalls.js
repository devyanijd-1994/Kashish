import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaLightbulb, FaDatabase, FaHandshake, FaGlobeAsia, FaGem, FaChartLine, FaTrophy, FaWhatsapp } from 'react-icons/fa';

const IntradayTradingCalls = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    segment: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        segment: checked 
          ? [...prev.segment, value]
          : prev.segment.filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage('Thank you! We will contact you soon.');
      setFormData({ name: '', number: '', email: '', segment: [] });
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      icon: <FaGem />,
      title: "Bank Nifty / Nifty Option",
      price: "₹ 4,999",
      features: [
        "3–4 well-crafted suggestions every day",
        "As advised, three goals and a loss buffer",
        "Quick updates with text message",
        "Entire nifty evaluations",
        "Two or three open positions at most at once"
      ]
    },
    {
      icon: <FaChartLine />,
      title: "Bank Nifty / Nifty Future",
      price: "₹ 4,999",
      features: [
        "2 to 3 carefully suggestions every day",
        "Three precisely measured goal levels and a stop-loss",
        "Timely notifications with SMS",
        "Ample time to complete trades",
        "2 or 3 open positions at most at once"
      ]
    },
    {
      icon: <FaTrophy />,
      title: "Stock Commodity",
      price: "₹ 4,999",
      features: [
        "3 to 4 carefully suggestions every day",
        "A precise stop-loss and three goal levels",
        "Quick updates with text message",
        "Entire nifty evaluations",
        "2 or 3 open positions at most at once"
      ]
    },
    {
      icon: <FaGem />,
      title: "Stock Cash",
      price: "₹ 4,999",
      features: [
        "3–4 well-crafted suggestions every day",
        "As advised, three goals and a loss buffer",
        "Quick updates with text message",
        "Entire nifty evaluations",
        "Two or three open positions at most at once"
      ]
    },
    {
      icon: <FaChartLine />,
      title: "Stock F&O",
      price: "₹ 4,999",
      features: [
        "3–4 well-crafted suggestions every day",
        "As advised, three goals and a loss buffer",
        "Quick updates with text message",
        "Entire nifty evaluations",
        "Two or three open positions at most at once"
      ]
    },
    {
      icon: <FaTrophy />,
      title: "Systematic Trading Plan (STP)",
      price: "₹ 24,999",
      features: [
        "3–4 well-crafted suggestions every day",
        "As advised, three goals and a loss buffer",
        "Quick updates with text message",
        "Risk Rewards Ratio 1 : 2",
        "Two or three open positions at most at once"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Dhaval D Mehta",
      location: "Rajkot, Gujarat",
      content: "Kashish Joshi Research analysis and suggestions are excellent their knowledge and commitment to client success have significantly changed my attitude to investing. I value their unwavering support and precise direction."
    },
    {
      name: "Durga Prasad Singh",
      location: "Lucknow, U.P.",
      content: "Kashish Joshi Research is distinguished by its superb stock selections and perceptive research. It is quite admirable how committed their staff is to assisting clients in reaching their financial objectives. I heartily endorse their offerings."
    },
    {
      name: "Abdul Rashid",
      location: "Delhi",
      content: "For my investing strategy, collaboration with Kashish Joshi Research has been revolutionary. Their thorough suggestions and devoted assistance have given me the assurance to make wise choices."
    }
  ];

  const clientProfitImages = [
    "/assets/images/carousel/carousel-1.jpeg",
    "/assets/images/carousel/carousel-2.jpeg",
    "/assets/images/carousel/carousel-3.jpeg",
    "/assets/images/carousel/carousel-4.jpeg",
    "/assets/images/carousel/carousel-5.jpeg"
  ];

  return (
    <div className="intraday-trading-page">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="text-center py-4">
          <a href="/">
            <img
              src="/assets/images/logoo2.png"
              alt="Kashish Joshi"
              className="h-20 mx-auto"
            />
          </a>
        </div>
        <div className="text-center pb-2">
          <p className="mb-0 text-lg font-medium italic" style={{color: '#99cc33'}}>
            India's Leading Research Firm
          </p>
          <p className="mb-0 text-sm">
            SEBI REF NO: INH000017240
          </p>
        </div>
        <div className="text-white text-center py-3" style={{backgroundColor: '#99cc33'}}>
          <p className="mb-0 font-bold text-lg">
            Get Upto 15k Daily Profit, 1 Lakh On Expiry Calls.
          </p>
        </div>
      </header>

      {/* Landing Section */}
      <section 
        className="py-16"
        style={{
          backgroundImage: `url('/assets/images/bgs/slide-1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 order-2 md:order-1 bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-8" style={{color: '#99cc33', textTransform: 'uppercase'}}>
                Register for Premium Tips.
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="tel"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    placeholder="Your Number *"
                    pattern="[0-9]{10}"
                    maxLength="10"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email *"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-4">Services *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Bank Nifty / Nifty Option",
                      "Bank Nifty / Nifty Future", 
                      "Stock Commodity",
                      "Stock Cash",
                      "Stock F&O",
                      "Systematic Trading Plan (STP)"
                    ].map((service, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`service-${index}`}
                          name="segment"
                          value={service}
                          checked={formData.segment.includes(service)}
                          onChange={handleChange}
                          className="mr-3"
                        />
                        <label htmlFor={`service-${index}`} className="text-sm">
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-white font-semibold px-6 py-3 rounded-full text-sm uppercase transition-all duration-300 hover:opacity-90"
                  style={{backgroundColor: '#99cc33'}}
                >
                  {isSubmitting ? 'Submitting...' : 'Register Now'}
                </button>

                {message && (
                  <p className={`text-center font-bold ${message.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>
                    {message}
                  </p>
                )}
              </form>
            </div>

            <div className="md:col-span-5 order-1 md:order-2 text-white p-8" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
              <div className="mt-8">
                <h4 className="text-xl mb-6">
                  Profit First, Payment Later with Best Trading & Investment Calls
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaArrowRight className="mr-3 mt-1 flex-shrink-0" />
                    <span>Get <strong>best stocks</strong> today for intraday trade tomorrow.</span>
                  </li>
                  <li className="flex items-start">
                    <FaArrowRight className="mr-3 mt-1 flex-shrink-0" />
                    <span>Get <strong>profitable</strong> banknifty & nifty F&O calls.</span>
                  </li>
                  <li className="flex items-start">
                    <FaArrowRight className="mr-3 mt-1 flex-shrink-0" />
                    <span>Get the <strong>best stocks</strong> to invest in now.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Profits Carousel */}
      <section className="py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-center mb-8" style={{color: '#212121'}}>Our Clients Profit</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {clientProfitImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg"
              >
                <img src={image} alt={`Client Profit ${index + 1}`} className="w-full h-64 object-cover" />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://wa.link/iw4ct4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white px-8 py-3 rounded font-semibold transition-all duration-300 hover:opacity-90"
              style={{backgroundColor: '#99cc33'}}
            >
              Start Chat With Research Analysts
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-center mb-4" style={{color: '#212121'}}>Why Choose Us?</h1>
          <p className="text-center text-gray-600 max-w-4xl mx-auto mb-12">
            Backed by 5+ years of industry expertise, our team is dedicated to delivering actionable trading tips that help you navigate the markets with confidence. We're committed to empowering clients with the insights they need to make smart financial decisions and achieve success.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaLightbulb />,
                title: "Expertise and Insight",
                description: "We bring deep knowledge and expertise in analyzing financial markets, industries, and specific companies. They provide valuable insights that can inform investment decisions."
              },
              {
                icon: <FaDatabase />,
                title: "Access to Information", 
                description: "We have access to extensive financial data, research reports, and market trends, enabling them to make informed investment decisions and stay ahead of market developments."
              },
              {
                icon: <FaHandshake />,
                title: "Long-term Partnership",
                description: "We aims to build long-term relationships with clients, offering continuous support, advice, and guidance as financial goals evolve over time."
              },
              {
                icon: <FaGlobeAsia />,
                title: "Diverse Market Coverage",
                description: "Our research and trading activities cover global markets, offering diverse opportunities across asset classes such as equities, commodities, and derivatives."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bounce-hover"
              >
                <div className="text-6xl mb-4" style={{color: '#99cc33'}}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4" style={{color: '#212121'}}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section 
        className="py-16 text-white"
        style={{
          backgroundImage: `url('/assets/images/bgs/bg-parallax.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
          <p className="text-center max-w-4xl mx-auto mb-12 opacity-90">
            Backed by 5+ years of industry expertise, our team is dedicated to delivering actionable trading tips that help you navigate the markets with confidence. We're committed to empowering clients with the insights they need to make smart financial decisions and achieve success.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white text-gray-800 p-8 rounded-lg shadow-lg text-center h-full flex flex-col service-card-hover"
              >
                <div className="text-4xl mb-4" style={{color: '#99cc33'}}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <div className="mb-6">
                  <p className="text-sm mb-1">Starting From</p>
                  <p className="text-3xl font-bold" style={{color: '#99cc33'}}>{service.price}</p>
                </div>
                <ul className="text-left space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm border-b border-gray-200 pb-2">
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.link/iw4ct4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white px-6 py-3 rounded font-semibold border border-white transition-all duration-300 hover:opacity-90"
                  style={{backgroundColor: '#99cc33'}}
                >
                  Choose Plan
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Call */}
      <section className="bg-white py-8">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h2 className="text-2xl font-bold" style={{color: '#99cc33', textTransform: 'uppercase'}}>
              Request a Call
            </h2>
            <a
              href="https://wa.link/iw4ct4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:opacity-90"
              style={{backgroundColor: '#99cc33'}}
            >
              <FaWhatsapp className="mr-2" />
              WhatsApp
            </a>
          </div>
          <div className="mt-8 p-4 border-l-4 border-gray-800 bg-gray-100 text-gray-800">
            Registration granted by SEBI, membership of BASL (in case of IAs) and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        className="py-16 text-white"
        style={{
          backgroundImage: `url('/assets/images/bgs/bg-parallax.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-center mb-4">Testimonials</h1>
          <p className="text-center max-w-2xl mx-auto mb-12 opacity-90">
            Discover What Our Satisfied Clients Are Saying About Us.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white text-gray-800 p-8 rounded-lg shadow-lg text-left"
              >
                <p className="mb-6 text-sm leading-relaxed">
                  {testimonial.content}
                </p>
                <div>
                  <p className="text-2xl font-semibold mb-1">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="py-16 text-white"
        style={{
          backgroundImage: `url('/assets/images/bgs/breadcrumb.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="font-bold mb-4" style={{color: '#99cc33'}}>Address</h5>
              <p className="text-sm leading-relaxed">
                Arvian coworking, plot no. C-5, first floor, booth no.43, shanti nagar-c, gujar ki thari, near neerja modi school, jaipur, 302020<br />
                Rajasthan
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4" style={{color: '#99cc33'}}>Guide</h5>
              <div className="space-y-2">
                <a href="/terms-condition" className="block text-white hover:underline text-sm">Terms and Conditions</a>
                <a href="/privacy-policy" className="block text-white hover:underline text-sm">Privacy Policy</a>
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-4" style={{color: '#99cc33'}}>Link</h5>
              <div className="space-y-2">
                <a href="/" className="block text-white hover:underline text-sm">Home</a>
                <a href="/services" className="block text-white hover:underline text-sm">Services</a>
                <a href="/contact" className="block text-white hover:underline text-sm">Contact us</a>
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-4" style={{color: '#99cc33'}}>Contact Us</h5>
              <div className="space-y-2">
                <p className="text-sm">+91 9171718453</p>
                <a href="mailto:info@kashishjoshiresearch.com" className="block text-white hover:underline text-sm">
                  info@kashishjoshiresearch.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.link/iw4ct4"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-4 sm:right-4 sm:left-auto sm:w-12 sm:h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
        style={{
          width: '50px',
          height: '50px'
        }}
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default IntradayTradingCalls;