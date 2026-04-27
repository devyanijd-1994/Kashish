// import { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';

// const CARDS = [
//     {
//     badge: 'ACTIVE', popular: false,
//     icon: 'fa-clock',
//     title: 'Intraday Trading Signals',
//     desc: 'Designed for active traders who seek daily trading opportunities. Get high-probability intraday calls with proper entry, exit, and stop-loss levels.',
//     to: '/stock-cash',
//     // pricing: [
//     //   { label: 'Monthly', price: '₹7,500 + GST' },
//     //   { label: 'Quarterly', price: '₹19,000 + GST' },
//     //   { label: 'Half Yearly', price: '₹34,000 + GST' },
//     //   { label: 'Yearly', price: '₹58,000 + GST' },
//     // ],
//   },

//   {
//     badge: 'PREMIER', popular: false,
//     icon: 'fa-chart-bar',
//     title: 'Future Signals Services',
//     desc: 'One of the premier level services. Designed for clients with high net worth who want to invest colossal amounts for exceptional profits.',
//     to: '/future',
//     // pricing: [
//     //   { label: 'Monthly', price: '₹10,000 + GST' },
//     //   { label: 'Quarterly', price: '₹25,000 + GST' },
//     //   { label: 'Half Yearly', price: '₹40,000 + GST' },
//     //   { label: 'Yearly', price: '₹70,000 + GST' },
//     // ],
//   },
//   {
//     badge: 'ESSENTIAL', popular: false,
//     icon: 'fa-dollar-sign',
//     title: 'Stock Cash Signal Services',
//     desc: 'The foundational service in the cash segment. High performance equity market tips crafted by expert Technical Analysts for consistent performance.',
//     to: '/stock-cash',
//     // pricing: [
//     //   { label: 'Monthly', price: '₹6,000 + GST' },
//     //   { label: 'Quarterly', price: '₹15,000 + GST' },
//     //   { label: 'Half Yearly', price: '₹28,000 + GST' },
//     //   { label: 'Yearly', price: '₹50,000 + GST' },
//     // ],
//   },
//   {
//     badge: 'COMMODITY', popular: false,
//     icon: 'fa-fire',
//     title: 'MCX Signals Services',
//     desc: 'MCX trading requires planning and discipline. We provide research-driven commodity market insights to support your most informed decisions.',
//     to: '/commodity-services',
//     // pricing: [
//     //   { label: 'Monthly', price: '₹7,000 + GST' },
//     //   { label: 'Quarterly', price: '₹18,000 + GST' },
//     //   { label: 'Half Yearly', price: '₹32,000 + GST' },
//     //   { label: 'Yearly', price: '₹55,000 + GST' },
//     // ],
//   },
//   {
//     badge: 'AGRI', popular: false,
//     icon: 'fa-leaf',
//     title: 'NCDEX Signal Services',
//     desc: 'All day trading calls are best-in-class recommendations generated from deep Agriculture market research and fundamental analysis.',
//     to: '/commodity-services',
//     // pricing: [
//     //   { label: 'Monthly', price: '₹5,000 + GST' },
//     //   { label: 'Quarterly', price: '₹13,000 + GST' },
//     //   { label: 'Half Yearly', price: '₹24,000 + GST' },
//     //   { label: 'Yearly', price: '₹42,000 + GST' },
//     // ],
//   },

//    {
//     badge: 'TOP SELLING', popular: true,
//     icon: 'fa-chart-line',
//     title: 'Option Signal Services',
//     desc: 'For traders and investors who desire to invest a good amount and seek exponential returns. One of the top selling services of the company.',
//     to: '/option',
//     // pricing: [
//     //   { label: 'Monthly', price: '₹8,000 + GST' },
//     //   { label: 'Quarterly', price: '₹20,000 + GST' },
//     //   { label: 'Half Yearly', price: '₹35,000 + GST' },
//     //   { label: 'Yearly', price: '₹60,000 + GST' },
//     // ],
//   },

// ];

// function SignalCard({ card, index, isVisible }) {
//   const isGreen = index % 2 === 0; // Alternate between green and navy blue candles
//   const candleColor = isGreen ? '#22c55e' : '#1e3a8a'; // Changed red to navy blue
//   const candleBg = isGreen ? 'rgba(34, 197, 94, 0.1)' : 'rgba(30, 58, 138, 0.1)'; // Changed red to navy blue
  
//   return (
//     <div 
//       className="candle-card" 
//       style={{
//         position: 'relative',
//         background: 'var(--bg-primary)',
//         borderRadius: '20px',
//         padding: '0',
//         boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
//         border: `2px solid ${candleColor}20`,
//         display: 'flex',
//         flexDirection: 'column',
//         overflow: 'hidden',
//         transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
//         opacity: isVisible ? 1 : 0,
//         transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`,
//         fontFamily: 'var(--font-family)',
//         height: 'auto',
//         minHeight: '480px'
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.transform = 'translateY(-12px) scale(1.03)';
//         e.currentTarget.style.boxShadow = `0 20px 60px ${candleColor}25`;
//         e.currentTarget.style.borderColor = `${candleColor}40`;
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.transform = 'translateY(0) scale(1)';
//         e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.12)';
//         e.currentTarget.style.borderColor = `${candleColor}20`;
//       }}
//     >
//       {/* Candlestick Wick (Top) */}
//       <div style={{
//         width: '4px',
//         height: '25px',
//         background: `linear-gradient(180deg, ${candleColor}, ${candleColor}80)`,
//         margin: '0 auto',
//         borderRadius: '2px',
//         animationName: isVisible ? 'wickGlow' : 'none',
//         animationDuration: '3s',
//         animationTimingFunction: 'ease-in-out',
//         animationIterationCount: 'infinite',
//         animationDelay: `${index * 0.5}s`
//       }} />

//       {/* Candlestick Body */}
//       <div style={{
//         background: `linear-gradient(135deg, ${candleBg}, ${candleColor}15)`,
//         borderRadius: '16px 16px 0 0',
//         padding: '24px',
//         flex: 1,
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '12px',
//         border: `1px solid ${candleColor}30`,
//         borderBottom: 'none',
//         position: 'relative',
//         overflow: 'hidden'
//       }}>
//         {/* Glowing effect */}
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           height: '2px',
//           background: `linear-gradient(90deg, transparent, ${candleColor}, transparent)`,
//           animationName: isVisible ? 'shimmer' : 'none',
//           animationDuration: '2s',
//           animationTimingFunction: 'ease-in-out',
//           animationIterationCount: 'infinite',
//           animationDelay: `${index * 0.3}s`
//         }} />

//         {/* Badge and Popular */}
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//           <div style={{
//             background: `linear-gradient(135deg, ${candleColor}20, ${candleColor}10)`,
//             color: candleColor,
//             fontSize: '11px',
//             fontWeight: 800,
//             letterSpacing: '0.1em',
//             borderRadius: '12px',
//             padding: '6px 12px',
//             textTransform: 'uppercase',
//             border: `1px solid ${candleColor}30`,
//             fontFamily: 'var(--font-family)'
//           }}>
//             {card.badge}
//           </div>
//           {card.popular && (
//             <div style={{
//               background: `linear-gradient(135deg, ${candleColor}, ${candleColor}dd)`,
//               color: 'white',
//               fontSize: '10px',
//               fontWeight: 700,
//               borderRadius: '12px',
//               padding: '6px 10px',
//               textTransform: 'uppercase',
//               animation: 'pulse 2s infinite',
//               boxShadow: `0 4px 15px ${candleColor}40`
//             }}>
//               ⭐ TOP PICK
//             </div>
//           )}
//         </div>

//         {/* Trading Chart Icon */}
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '16px',
//           marginBottom: '8px'
//         }}>
//           <div style={{
//             width: '56px',
//             height: '56px',
//             background: `linear-gradient(135deg, ${candleColor}, ${candleColor}cc)`,
//             borderRadius: '16px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             boxShadow: `0 8px 24px ${candleColor}30`,
//             position: 'relative',
//             overflow: 'hidden'
//           }}>
//             {/* Mini chart pattern */}
//             <div style={{
//               position: 'absolute',
//               width: '100%',
//               height: '100%',
//               background: `url("data:image/svg+xml,%3Csvg width='56' height='56' viewBox='0 0 56 56' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 40 L16 32 L24 36 L32 24 L40 28 L48 16' stroke='white' stroke-width='2' fill='none' opacity='0.6'/%3E%3C/svg%3E")`,
//               backgroundSize: 'cover'
//             }} />
//             <i className={`fas ${card.icon}`} style={{ 
//               color: 'white', 
//               fontSize: '20px', 
//               zIndex: 1,
//               filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
//             }}></i>
//           </div>
          
//           <div style={{ flex: 1 }}>
//             <h3 style={{
//               fontSize: '18px',
//               fontWeight: 700,
//               color: 'var(--text-primary)',
//               lineHeight: 1.3,
//               margin: 0,
//               letterSpacing: '-0.02em',
//               fontFamily: 'var(--font-family)'
//             }}>
//               {card.title}
//             </h3>
//             <div style={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: '8px',
//               marginTop: '4px'
//             }}>
//               <div style={{
//                 width: '8px',
//                 height: '8px',
//                 borderRadius: '50%',
//                 background: candleColor,
//                 animation: 'pulse 2s infinite'
//               }} />
//               <span style={{
//                 fontSize: '12px',
//                 color: candleColor,
//                 fontWeight: 600,
//                 textTransform: 'uppercase',
//                 letterSpacing: '0.05em'
//               }}>
//                 LIVE SIGNALS
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Description */}
//         <p style={{
//           fontSize: '14px',
//           color: 'var(--text-secondary)',
//           lineHeight: 1.6,
//           margin: 0,
//           fontFamily: 'var(--font-family)',
//           letterSpacing: '0.01em'
//         }}>
//           {card.desc}
//         </p>

//         {/* Trading Stats */}
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: '1fr 1fr',
//           gap: '10px',
//           marginTop: 'auto'
//         }}>
//           {(() => {
//             // Different stats for each service type
//             const statsMap = {
//               'Intraday Trading Signals': [
//                 { label: 'SUCCESS', val: '85-90%', icon: '📈' },
//                 { label: 'SIGNALS', val: '2-3/Day', icon: '⚡' },
//                 { label: 'ANALYSIS', val: 'Technical', icon: '🔍' },
//                 { label: 'SUPPORT', val: '24/7', icon: '🛡️' }
//               ],
//               'Future Signals Services': [
//                 { label: 'SUCCESS', val: '85-90%', icon: '📈' },
//                 { label: 'SIGNALS', val: '2-3/Day', icon: '⚡' },
//                 { label: 'ANALYSIS', val: 'Technical', icon: '🔍' },
//                 { label: 'SUPPORT', val: '24/7', icon: '🛡️' }
//               ],
//               'Stock Cash Signal Services': [
//                 { label: 'SUCCESS', val: '85-90%', icon: '📈' },
//                 { label: 'SIGNALS', val: '2-3/Day', icon: '⚡' },
//                 { label: 'ANALYSIS', val: 'Technical', icon: '🔍' },
//                 { label: 'SUPPORT', val: '24/7', icon: '🛡️' }
//               ],
//               'MCX Signals Services': [
//                 { label: 'SUCCESS', val: '85-90%', icon: '📈' },
//                 { label: 'SIGNALS', val: '2-3/Day', icon: '⚡' },
//                 { label: 'ANALYSIS', val: 'Technical', icon: '🔍' },
//                 { label: 'SUPPORT', val: '24/7', icon: '🛡️' }
//               ],
//               'NCDEX Signal Services': [
//                 { label: 'SUCCESS', val: '85-90%', icon: '📈' },
//                 { label: 'SIGNALS', val: '2-3/Day', icon: '⚡' },
//                 { label: 'ANALYSIS', val: 'Technical', icon: '🔍' },
//                 { label: 'SUPPORT', val: '24/7', icon: '🛡️' }
//               ],
//               'Option Signal Services': [
//                 { label: 'SUCCESS', val: '85-90%', icon: '📈' },
//                 { label: 'SIGNALS', val: '2-3/Day', icon: '⚡' },
//                 { label: 'ANALYSIS', val: 'Technical', icon: '🔍' },
//                 { label: 'SUPPORT', val: '24/7', icon: '🛡️' }
//               ]
//             };
            
//             const currentStats = statsMap[card.title] || [
//               { label: 'SUCCESS', val: '85-90%', icon: '📈' },
//               { label: 'SIGNALS', val: '2-3/Day', icon: '⚡' },
//               { label: 'ANALYSIS', val: 'Technical', icon: '🔍' },
//               { label: 'SUPPORT', val: '24/7', icon: '🛡️' }
//             ];
            
//             return currentStats.slice(0, 2);
//           })().map((stat, i) => (
//             <div key={i} style={{
//               background: '#ffffff',
//               borderRadius: '8px',
//               padding: '10px 8px',
//               textAlign: 'center',
//               border: '1px solid #e2e8f0',
//               transition: 'all 0.3s ease',
//               cursor: 'pointer',
//               boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               justifyContent: 'center',
//               minHeight: '76px',
//               gap: '2px'
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.background = '#f8fafc';
//               e.currentTarget.style.transform = 'translateY(-1px)';
//               e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.15)';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.background = '#ffffff';
//               e.currentTarget.style.transform = 'translateY(0)';
//               e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
//             }}
//             >
//               <div style={{ 
//                 fontSize: '14px',
//                 lineHeight: 1
//               }}>{stat.icon}</div>
//               <div style={{
//                 fontSize: '12px',
//                 fontWeight: 700,
//                 color: '#1f2937',
//                 fontFamily: 'var(--font-family)',
//                 textAlign: 'center',
//                 lineHeight: 1.2,
//                 whiteSpace: 'nowrap'
//               }}>
//                 {stat.val}
//               </div>
//               <div style={{
//                 fontSize: '9px',
//                 color: '#6b7280',
//                 fontWeight: 600,
//                 textTransform: 'uppercase',
//                 letterSpacing: '0.04em',
//                 textAlign: 'center',
//                 lineHeight: 1.2,
//                 whiteSpace: 'nowrap'
//               }}>
//                 {stat.label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Candlestick Base */}
//       <div style={{
//         background: `linear-gradient(135deg, ${candleColor}, ${candleColor}dd)`,
//         padding: '20px 24px',
//         borderRadius: '0 0 16px 16px'
//       }}>
//         <Link to={card.to} style={{
//           textDecoration: 'none',
//           background: 'rgba(255, 255, 255, 0.95)',
//           color: candleColor,
//           borderRadius: '12px',
//           padding: '14px 20px',
//           fontWeight: 700,
//           fontSize: '14px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           gap: '8px',
//           transition: 'all 0.3s ease',
//           fontFamily: 'var(--font-family)',
//           letterSpacing: '0.02em',
//           textTransform: 'uppercase',
//           border: `2px solid ${candleColor}30`,
//           boxShadow: `0 4px 12px ${candleColor}20`
//         }}
//         onMouseEnter={(e) => {
//           const hoverColor = isGreen ? '#1e3a8a' : '#22c55e';
//           e.currentTarget.style.background = hoverColor;
//           e.currentTarget.style.color = 'white';
//           e.currentTarget.style.transform = 'translateY(-2px)';
//           e.currentTarget.style.boxShadow = `0 8px 24px ${hoverColor}50`;
//           e.currentTarget.style.borderColor = 'transparent';
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
//           e.currentTarget.style.color = candleColor;
//           e.currentTarget.style.transform = 'translateY(0)';
//           e.currentTarget.style.boxShadow = `0 4px 12px ${candleColor}20`;
//           e.currentTarget.style.borderColor = `${candleColor}30`;
//         }}
//         >
//           <i className="fas fa-rocket"></i>
//           Start Trading
//         </Link>
//       </div>

//       {/* Candlestick Wick (Bottom) */}
//       <div style={{
//         width: '4px',
//         height: '20px',
//         background: `linear-gradient(180deg, ${candleColor}80, ${candleColor})`,
//         margin: '0 auto',
//         borderRadius: '2px',
//         animationName: isVisible ? 'wickGlow' : 'none',
//         animationDuration: '3s',
//         animationTimingFunction: 'ease-in-out',
//         animationIterationCount: 'infinite',
//         animationDelay: `${index * 0.5 + 1}s`
//       }} />
//     </div>
//   );
// }

// export default function ServiceSignals() {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.05 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//       <style>
//         {`
//           @keyframes pulse {
//             0%, 100% { transform: scale(1); }
//             50% { transform: scale(1.05); }
//           }
          
//           @keyframes fadeInUp {
//             from {
//               opacity: 0;
//               transform: translateY(30px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }
          
//           @keyframes float {
//             0%, 100% { transform: translateY(0px); }
//             50% { transform: translateY(-8px); }
//           }
          
//           @keyframes wickGlow {
//             0%, 100% { 
//               opacity: 0.8;
//               box-shadow: 0 0 5px currentColor;
//             }
//             50% { 
//               opacity: 1;
//               box-shadow: 0 0 15px currentColor, 0 0 25px currentColor;
//             }
//           }
          
//           @keyframes candleGlow {
//             0%, 100% { 
//               opacity: 0.7;
//               transform: scaleY(1);
//             }
//             50% { 
//               opacity: 1;
//               transform: scaleY(1.1);
//               box-shadow: 0 0 10px currentColor;
//             }
//           }
          
//           @keyframes shimmer {
//             0% { transform: translateX(-100%); }
//             100% { transform: translateX(200%); }
//           }
          
//           @keyframes chartFlow {
//             0% { transform: translateX(-100px); }
//             100% { transform: translateX(100px); }
//           }
          
//           @keyframes underlineGrow {
//             0% { 
//               width: 0;
//               left: 50%;
//             }
//             100% { 
//               width: 100%;
//               left: 0;
//             }
//           }
          
//           .candle-card {
//             transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//           }
          
//           .candle-card:hover {
//             transform: translateY(-12px) scale(1.03) !important;
//           }

//           /* Enhanced typography for better readability */
//           .candle-card h3 {
//             font-optical-sizing: auto;
//             text-rendering: optimizeLegibility;
//           }

//           .candle-card p {
//             text-rendering: optimizeLegibility;
//           }

//           /* Improved focus states for accessibility */
//           .candle-card:focus-within {
//             outline: 2px solid var(--primary-green);
//             outline-offset: 4px;
//           }

//           button:focus-visible {
//             outline: 2px solid var(--primary-green);
//             outline-offset: 2px;
//           }

//           /* Better mobile responsiveness */
//           @media (max-width: 768px) {
//             .candle-card {
//               height: auto !important;
//               min-height: 420px !important;
//             }
            
//             .candle-card h3 {
//               font-size: 16px !important;
//             }
            
//             .candle-card > div:first-child {
//               height: 20px !important;
//             }
            
//             .candle-card > div:last-child {
//               height: 15px !important;
//             }
//           }
          
//           @media (max-width: 480px) {
//             .candle-card {
//               min-height: 380px !important;
//             }
//           }
//         `}
//       </style>
      
//       <section ref={sectionRef} className="section section-alt" style={{ 
//         background: 'var(--bg-gradient-light)', 
//         padding: 'var(--spacing-2xl) var(--spacing-md)' 
//       }}>
//         <div className="container">

//           {/* Header */}
//           <div style={{ 
//             textAlign: 'center', 
//             marginBottom: 'var(--spacing-2xl)',
//             transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
//             opacity: isVisible ? 1 : 0,
//             transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
//           }}>
//             {/* Trading Chart Background */}
//             <div style={{
//               position: 'relative',
//               display: 'inline-block',
//               marginBottom: 'var(--spacing-lg)'
//             }}>
//               {/* Animated Chart Lines */}
//               <div style={{
//                 position: 'absolute',
//                 top: '-20px',
//                 left: '-40px',
//                 right: '-40px',
//                 height: '60px',
//                 background: `url("data:image/svg+xml,%3Csvg width='200' height='60' viewBox='0 0 200 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 50 L30 30 L50 40 L70 20 L90 35 L110 15 L130 25 L150 10 L170 20 L190 5' stroke='%2322c55e' stroke-width='2' fill='none' opacity='0.3'/%3E%3Cpath d='M10 45 L30 35 L50 45 L70 25 L90 40 L110 20 L130 30 L150 15 L170 25 L190 10' stroke='%231e3a8a' stroke-width='2' fill='none' opacity='0.3'/%3E%3C/svg%3E")`, // Changed second path from red to navy blue
//                 backgroundRepeat: 'repeat-x',
//                 animation: 'chartFlow 8s linear infinite',
//                 zIndex: 0
//               }} />
              
//               <div style={{ 
//                 display: 'inline-flex', 
//                 alignItems: 'center', 
//                 gap: 'var(--spacing-xs)', 
//                 background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.12), rgba(34, 197, 94, 0.12))',
//                 border: '2px solid',
//                 borderColor: 'rgba(34, 197, 94, 0.4)',
//                 borderRadius: '20px', 
//                 padding: 'var(--spacing-xs) var(--spacing-lg)', 
//                 backdropFilter: 'blur(10px)',
//                 position: 'relative',
//                 zIndex: 1
//               }}>
//                 <div style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px'
//                 }}>
//                   <div style={{
//                     width: '8px',
//                     height: '16px',
//                     background: 'linear-gradient(180deg, #22c55e, #16a34a)',
//                     borderRadius: '2px',
//                     animation: 'candleGlow 2s ease-in-out infinite'
//                   }} />
//                   <div style={{
//                     width: '8px',
//                     height: '12px',
//                     background: 'linear-gradient(180deg, #1e3a8a, #1e40af)', // Changed from red to navy blue
//                     borderRadius: '2px',
//                     animation: 'candleGlow 2s ease-in-out infinite 0.5s'
//                   }} />
//                   <div style={{
//                     width: '8px',
//                     height: '18px',
//                     background: 'linear-gradient(180deg, #22c55e, #16a34a)',
//                     borderRadius: '2px',
//                     animation: 'candleGlow 2s ease-in-out infinite 1s'
//                   }} />
//                 </div>
//                 <span style={{ 
//                   color: 'var(--primary-navy)', 
//                   fontSize: '11px', 
//                   fontWeight: 700, 
//                   letterSpacing: '0.05em',
//                   fontFamily: 'var(--font-family)',
//                   textTransform: 'uppercase',
//                   background: 'linear-gradient(135deg, var(--primary-navy), var(--primary-green))',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   backgroundClip: 'text'
//                 }}>
//                   📊 LIVE SIGNALS
//                 </span>
//               </div>
//             </div>
            
//             <h2 className="heading-xl" style={{ 
//               fontFamily: 'var(--font-family)', 
//               fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', 
//               fontWeight: 700, 
//               color: 'var(--text-primary)', 
//               marginBottom: 'var(--spacing-sm)',
//               lineHeight: 1.2,
//               letterSpacing: '-0.02em',
//               transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//               opacity: isVisible ? 1 : 0,
//               transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
//               textShadow: '0 1px 2px rgba(0,0,0,0.1)'
//             }}>
//               Professional{' '}
//               <span style={{ 
//                 background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #059669 100%)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text',
//                 position: 'relative'
//               }}>
//                 Trading
//                 <div style={{
//                   position: 'absolute',
//                   bottom: '-4px',
//                   left: 0,
//                   right: 0,
//                   height: '2px',
//                   background: 'linear-gradient(90deg, #22c55e, #16a34a)',
//                   borderRadius: '1px',
//                   animation: 'underlineGrow 1.5s ease-out 1s both'
//                 }} />
//               </span>{' '}
//               <span style={{
//                 background: 'linear-gradient(135deg, var(--primary-navy) 0%, #1e40af 50%, #1d4ed8 100%)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text'
//               }}>
//                 Signals
//               </span>
//             </h2>
            
//             <p className="body-text" style={{ 
//               fontSize: 'var(--font-size-base)', 
//               color: 'var(--text-secondary)', 
//               maxWidth: '600px', 
//               margin: '0 auto var(--spacing-lg)', 
//               lineHeight: 1.5,
//               fontFamily: 'var(--font-family)',
//               fontWeight: 400,
//               letterSpacing: '0.01em',
//               transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//               opacity: isVisible ? 1 : 0,
//               transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
//             }}>
//               Advanced algorithmic trading signals with{' '}
//               <strong style={{ 
//                 color: 'var(--primary-green)', 
//                 fontWeight: 600,
//                 background: 'linear-gradient(135deg, #22c55e, #16a34a)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text'
//               }}>
//                 85–92% accuracy
//               </strong>
//               {' '}backed by expert research and real-time analysis.
//             </p>

//             {/* Enhanced Stats Dashboard */}
//             <div style={{
//               display: 'flex',
//               justifyContent: 'center',
//               gap: '0',
//               background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(248,250,252,0.9))',
//               border: '2px solid transparent',
//               backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #22c55e20, #1e3a8a20)',
//               backgroundOrigin: 'border-box',
//               backgroundClip: 'content-box, border-box',
//               borderRadius: '16px',
//               overflow: 'hidden',
//               boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
//               transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
//               opacity: isVisible ? 1 : 0,
//               transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s',
//               maxWidth: '500px',
//               margin: '0 auto'
//             }}>
//               {[
//                 { val: '85–92%', label: 'SUCCESS RATE', icon: '📈', color: '#22c55e' },
//                 { val: '2–4', label: 'DAILY SIGNALS', icon: '⚡', color: '#f59e0b' },
//                 { val: '6+', label: 'SERVICES', icon: '🎯', color: '#1e3a8a' },
//               ].map((s, i) => (
//                 <div key={i} style={{
//                   padding: 'var(--spacing-md) var(--spacing-lg)', 
//                   textAlign: 'center',
//                   borderRight: i < 2 ? '1px solid rgba(0,0,0,0.1)' : 'none',
//                   transition: 'all 0.3s ease',
//                   cursor: 'pointer',
//                   position: 'relative',
//                   overflow: 'hidden'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = `${s.color}10`;
//                   e.currentTarget.style.transform = 'translateY(-2px)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = 'transparent';
//                   e.currentTarget.style.transform = 'translateY(0)';
//                 }}
//                 >
//                   <div style={{
//                     fontSize: '18px',
//                     marginBottom: '4px',
//                     animationName: 'float',
//                     animationDuration: '3s',
//                     animationTimingFunction: 'ease-in-out',
//                     animationIterationCount: 'infinite',
//                     animationDelay: `${i * 0.5}s`
//                   }}>
//                     {s.icon}
//                   </div>
//                   <p style={{ 
//                     fontSize: 'var(--font-size-lg)', 
//                     fontWeight: 700, 
//                     color: s.color,
//                     marginBottom: '2px',
//                     fontFamily: 'var(--font-family)',
//                     margin: '0 0 2px 0',
//                     letterSpacing: '-0.01em'
//                   }}>
//                     {s.val}
//                   </p>
//                   <p style={{ 
//                     fontSize: '10px', 
//                     fontWeight: 600, 
//                     color: 'var(--text-secondary)', 
//                     letterSpacing: '0.05em',
//                     fontFamily: 'var(--font-family)',
//                     margin: 0,
//                     textTransform: 'uppercase'
//                   }}>
//                     {s.label}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Cards grid */}
//           <div style={{ 
//             display: 'grid', 
//             gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', 
//             gap: 'var(--spacing-xl)'
//           }}>
//             {CARDS.map((card, i) => (
//               <SignalCard key={i} card={card} index={i} isVisible={isVisible} />
//             ))}
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }
