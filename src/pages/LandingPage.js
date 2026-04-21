import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
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
      setMessage('Registration successful! We will contact you soon.');
      setFormData({ name: '', number: '', email: '', segment: [] });
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Swiper/Carousel images
  const carouselImages = [
    '/assets/images/carousel-1.jpeg',
    '/assets/images/carousel-2.jpeg', 
    '/assets/images/carousel-3.jpeg',
    '/assets/images/carousel-4.jpeg',
    '/assets/images/carousel-5.jpeg'
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="flex justify-center py-4 px-4" style={{height: '100px'}}>
          <a href="/">
            <img
              src="/assets/images/logoo2.png"
              alt="Kashish Joshi"
              className="h-full w-auto object-contain"
            />
          </a>
        </div>
        <div className="py-2">
          <p className="text-center mb-0 text-lg font-medium italic" style={{color: '#99cc33'}}>
            India's leading research firm
          </p>
          <p className="text-center mb-0 text-sm">
            SEBIREFNO: INH000017240
          </p>
        </div>
        <div className="py-3" style={{backgroundColor: '#99cc33'}}>
          <div className="max-w-6xl mx-auto px-8">
            <p className="text-center mb-0 text-white font-bold text-lg">
              Get upto 15k Daily Profit, 1 lakh on expiry calls.
            </p>
          </div>
        </div>
      </header>

      {/* Landing Section */}
      <section 
        className="py-20"
        style={{
          background: 'url(/assets/images/bgs/slide-1.jpg) no-repeat center/cover'
        }}
      >
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Form Section */}
            <div 
              className="md:col-span-7 order-2 md:order-1 p-8 bg-white rounded-lg"
              style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'}}
            >
              <h3 className="text-2xl font-bold text-center mb-8" style={{color: '#99cc33'}}>
                Register for premium tips.
              </h3>
              
              <form onSubmit={handleSubmit} className="mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your Name *"
                    required
                  />
                  <input
                    type="text"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    className="form-control px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your Number *"
                    pattern="\\d{10}"
                    maxLength="10"
                    title="Please enter 10 digit number only"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your Email *"
                    required
                  />
                </div>

                {/* Services Checkboxes */}
                <label className="block font-semibold mt-6 mb-4">Services *</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {[
                    'Bank Nifty / Nifty Option',
                    'Bank Nifty / Nifty Future', 
                    'Stock Commodity',
                    'Stock Cash',
                    'Stock F&O',
                    'Systematic Trading Plan (STP)'
                  ].map((service, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        name="segment"
                        value={service}
                        checked={formData.segment.includes(service)}
                        onChange={handleChange}
                        className="mr-3 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                        id={`check-${index + 1}`}
                      />
                      <label htmlFor={`check-${index + 1}`} className="text-sm font-medium text-gray-700 cursor-pointer">
                        {service}
                      </label>
                    </div>
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 text-white font-semibold text-sm uppercase rounded-full transition-all duration-300 hover:opacity-90 disabled:opacity-50"
                  style={{backgroundColor: '#99cc33'}}
                >
                  {isSubmitting ? 'Registering...' : 'Register Now'}
                </button>

                {message && (
                  <div className={`mt-4 p-3 rounded-lg text-center ${
                    message.includes('successful') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {message}
                  </div>
                )}
              </form>
            </div>

            {/* Content Section */}
            <div 
              className="md:col-span-5 order-1 md:order-2 p-8 text-white"
              style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
            >
              <div className="mt-8 pt-8">
                <h4 className="text-xl mb-6">
                  Profit First, Payment Later with Best Trading & Investment Calls
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start font-semibold">
                    <i className="fas fa-arrow-right mr-3 mt-1"></i>
                    Get <strong>best stocks</strong> today for intraday trade tomorrow.
                  </li>
                  <li className="flex items-start font-semibold">
                    <i className="fas fa-arrow-right mr-3 mt-1"></i>
                    Get <strong>profitable</strong> banknifty & nifty F&O calls.
                  </li>
                  <li className="flex items-start font-semibold">
                    <i className="fas fa-arrow-right mr-3 mt-1"></i>
                    Get the <strong>best stocks</strong> to invest in now.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-4xl font-semibold text-center mb-12">Our clients profit</h1>
          
          <div className="relative h-96 overflow-hidden rounded-lg mb-8">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img 
                  src={image} 
                  alt={`Client profit ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
            
            {/* Navigation buttons */}
            <button
              onClick={() => setCurrentSlide(prev => prev === 0 ? carouselImages.length - 1 : prev - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded hover:bg-opacity-70"
            >
              ‹
            </button>
            <button
              onClick={() => setCurrentSlide(prev => (prev + 1) % carouselImages.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded hover:bg-opacity-70"
            >
              ›
            </button>
          </div>

          <div className="text-center">
            <a
              href="https://wa.link/iw4ct4"
              className="inline-block px-8 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:opacity-90"
              style={{backgroundColor: '#99cc33'}}
            >
              Start Chat With Research Analysts
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-4xl font-semibold text-center mb-4">Why Choose Us?</h1>
          <p className="text-center text-gray-600 max-w-4xl mx-auto mb-12">
            Backed by 5+ years of industry expertise, our team is dedicated to
            delivering actionable trading tips that help you navigate the markets
            with confidence. We're committed to empowering clients with the
            insights they need to make smart financial decisions and achieve
            success.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'fa-regular fa-lightbulb',
                title: 'Expertise and Insight',
                description: 'We bring deep knowledge and expertise in analyzing financial markets, industries, and specific companies. They provide valuable insights that can inform investment decisions.'
              },
              {
                icon: 'fa-solid fa-database',
                title: 'Access to Information',
                description: 'We have access to extensive financial data, research reports, and market trends, enabling them to make informed investment decisions and stay ahead of market developments.'
              },
              {
                icon: 'fa-regular fa-handshake',
                title: 'Long-term Partnership',
                description: 'We aims to build long-term relationships with clients, offering continuous support, advice, and guidance as financial goals evolve over time.'
              },
              {
                icon: 'fa-solid fa-earth-asia',
                title: 'Diverse Market Coverage',
                description: 'Our research and trading activities cover global markets, offering diverse opportunities across asset classes such as equities, commodities, and derivatives.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1 text-center"
              >
                <div className="text-6xl mb-4" style={{color: '#99cc33'}}>
                  <i className={item.icon}></i>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        className="py-20 text-white"
        style={{
          background: 'url(/assets/images/bgs/bg-parallax.jpg) no-repeat center/cover fixed'
        }}
      >
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-4xl font-semibold text-center mb-4">Our Services</h1>
          <p className="text-center max-w-4xl mx-auto mb-12 opacity-90">
            Backed by 5+ years of industry expertise, our team is dedicated to
            delivering actionable trading tips that help you navigate the markets
            with confidence. We're committed to empowering clients with the
            insights they need to make smart financial decisions and achieve
            success.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'fa-regular fa-gem',
                title: 'Bank Nifty / Nifty Option',
                price: '₹ 4,999',
                features: [
                  '3–4 well-crafted suggestions every day',
                  'As advised, three goals and a loss buffer',
                  'Quick updates with text message',
                  'Entire nifty evaluations',
                  'Two or three open positions at most at once'
                ]
              },
              {
                icon: 'fa-solid fa-chart-line',
                title: 'Bank Nifty / Nifty Future',
                price: '₹ 4,999',
                features: [
                  '2 to 3 carefully suggestions every day',
                  'Three precisely measured goal levels and a stop-loss',
                  'Timely notifications with SMS',
                  'Ample time to complete trades',
                  '2 or 3 open positions at most at once'
                ]
              },
              {
                icon: 'fa-solid fa-trophy',
                title: 'Stock Commodity',
                price: '₹ 4,999',
                features: [
                  '3 to 4 carefully suggestions every day',
                  'A precise stop-loss and three goal levels',
                  'Quick updates with text message',
                  'Entire nifty evaluations',
                  '2 or 3 open positions at most at once'
                ]
              },
              {
                icon: 'fa-regular fa-gem',
                title: 'Stock Cash',
                price: '₹ 4,999',
                features: [
                  '3–4 well-crafted suggestions every day',
                  'As advised, three goals and a loss buffer',
                  'Quick updates with text message',
                  'Entire nifty evaluations',
                  'Two or three open positions at most at once'
                ]
              },
              {
                icon: 'fa-solid fa-chart-line',
                title: 'Stock F&O',
                price: '₹ 4,999',
                features: [
                  '3–4 well-crafted suggestions every day',
                  'As advised, three goals and a loss buffer',
                  'Quick updates with text message',
                  'Entire nifty evaluations',
                  'Two or three open positions at most at once'
                ]
              },
              {
                icon: 'fa-solid fa-trophy',
                title: 'Systematic Trading Plan (STP)',
                price: '₹ 24,999',
                features: [
                  '3–4 well-crafted suggestions every day',
                  'As advised, three goals and a loss buffer',
                  'Quick updates with text message',
                  'Risk Rewards Ratio 1 : 2',
                  'Two or three open positions at most at once'
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1 hover:bg-green-500 hover:text-white group h-full flex flex-col"
              >
                <div className="text-center mb-4">
                  <div className="text-5xl mb-4" style={{color: '#99cc33'}}>
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <div className="mb-4">
                    <p className="text-sm mb-1">Starting From</p>
                    <p className="text-3xl font-semibold">{service.price}</p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <ul className="space-y-3 mb-6 text-sm">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="border-b border-gray-200 pb-2 group-hover:border-white">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.link/iw4ct4"
                    className="block text-center px-6 py-3 border border-white text-white font-semibold rounded-lg transition-all duration-300 group-hover:bg-white group-hover:text-green-500"
                    style={{backgroundColor: '#99cc33'}}
                  >
                    Choose Plan
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Call Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <h2 className="text-2xl font-bold" style={{color: '#99cc33'}}>Request a call</h2>
            <a
              href="https://wa.link/iw4ct4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 text-white font-semibold rounded-full transition-all duration-300 hover:opacity-90"
              style={{backgroundColor: '#99cc33'}}
            >
              <i className="fab fa-whatsapp mr-2 text-xl"></i>
              <span>Whatsapp</span>
            </a>
          </div>
          <div className="mt-8 p-4 border-l-4 border-gray-800 bg-gray-100 text-gray-800">
            Registration granted by SEBI, membership of BASL (in case of IAs) and
            certification from NISM in no way guarantee performance of the
            intermediary or provide any assurance of returns to investors.
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        className="py-20 text-white"
        style={{
          background: 'url(/assets/images/bgs/bg-parallax.jpg) no-repeat center/cover fixed'
        }}
      >
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-4xl font-semibold text-center mb-4">Testimonials</h1>
          <p className="text-center max-w-4xl mx-auto mb-12 opacity-90">
            Discover What Our Satisfied Clients Are Saying About Us.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "Kashish Joshi Research analysis and suggestions are excellent their knowledge and commitment to client success have significantly changed my attitude to investing. I value their unwavering support and precise direction.",
                name: "Dhaval D Mehta",
                location: "Rajkot, Gujarat"
              },
              {
                text: "Kashish Joshi Research is distinguished by its superb stock selections and perceptive research. It is quite admirable how committed their staff is to assisting clients in reaching their financial objectives. I heartily endorse their offerings.",
                name: "Durga Prasad Singh",
                location: "Lucknow, U.P."
              },
              {
                text: "For my investing strategy, collaboration with Kashish Joshi Research has been revolutionary. Their thorough suggestions and devoted assistance have given me the assurance to make wise choices.",
                name: "Abdul Rashid",
                location: "Delhi"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white text-gray-800 p-6 rounded-lg shadow-lg text-left"
              >
                <p className="mb-4 text-sm leading-relaxed">{testimonial.text}</p>
                <div>
                  <p className="text-2xl font-semibold mb-1">{testimonial.name}</p>
                  <small className="text-gray-600">{testimonial.location}</small>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="py-20 text-white"
        style={{
          background: 'url(/assets/images/bgs/breadcrumb.jpg) no-repeat center/cover',
          marginTop: '70px'
        }}
      >
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-xl font-semibold mb-4" style={{color: '#99cc33'}}>Address</h5>
              <p className="text-sm leading-relaxed">
                Arvian coworing, plot no. C-5, first floor, booth no.43,shanti
                nagar-c, gujar ki thari, near neerja modi school, jaipur,
                302020<br />
                Rajasthan
              </p>
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-4" style={{color: '#99cc33'}}>Guide</h5>
              <div className="space-y-2">
                <a href="/terms-condition" className="block text-white hover:text-green-400 transition-colors">
                  Term and Conditions
                </a>
                <a href="/privacy-policy" className="block text-white hover:text-green-400 transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-4" style={{color: '#99cc33'}}>Link</h5>
              <div className="space-y-2">
                <a href="/" className="block text-white hover:text-green-400 transition-colors">Home</a>
                <a href="/services" className="block text-white hover:text-green-400 transition-colors">Services</a>
              </div>
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-4" style={{color: '#99cc33'}}>Contact</h5>
              <p className="text-sm">Phone: +91 91717 18451</p>
              <p className="text-sm">Email: info@kashishjoshiresearch.com</p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.link/iw4ct4"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-5 w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default LandingPage;