import ServiceDetail from '../ServiceDetail';

export default function Future() {
  return (
    <ServiceDetail
      title="Future Services"
      heroImage="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1600&auto=format&fit=crop"
      badge={{ icon: 'fas fa-rocket', text: 'Future Signal Services' }}
      subtitle="One of the premier level services. Designed for clients with high net worth who want to invest colossal amounts for exceptional profits."
      overview="Kashish Joshi Research offers stock futures intraday calls. This service is intended for day traders who want to profit in both rising and declining markets. For profitable entry and exit opportunities, our experts closely monitor shares and trends. Futures trading gives you the ability to take leveraged positions in the market with clear entry and exit strategies backed by thorough research."
      whoShouldSubscribe="If you trade stock futures and want leveraged positions with clear entry, exit, and stop-loss levels, this service is ideal for you. Suited for traders with higher capital who want to capitalise on short-term price movements in F&O stocks."
      features={[
        '1–2 Future recommendations every day',
        '15–18 Future recommendations per month',
        'Recommendations via WhatsApp / SMS / App',
        'Timely Entry and Exit with Stop Loss',
        'Precise entry, target, and stop-loss for every call',
        'Risk management on every call',
        'All significant news and updates on the economy',
        'Round-the-clock client assistance',
      ]}
      instruments={{
        heading: 'Future Instruments We Cover',
        items: [
          { name: 'Stock Futures (NSE)', icon: 'fas fa-chart-bar', desc: 'High-probability futures calls on top F&O stocks listed on NSE with strong volume.' },
          { name: 'Index Futures', icon: 'fas fa-chart-area', desc: 'Nifty and Bank Nifty futures calls based on index trend and momentum analysis.' },
          { name: 'Long Futures', icon: 'fas fa-arrow-up', desc: 'Bullish futures recommendations for profiting from upward price movements.' },
          { name: 'Short Futures', icon: 'fas fa-arrow-down', desc: 'Bearish futures calls to capitalise on declining stocks and market corrections.' },
        ],
      }}
      whyItWorks={[
        { icon: 'fas fa-bell', label: '1–2 Daily Calls', desc: 'Precise Future calls every trading day with clear entry, exit & stop-loss levels.' },
        { icon: 'fas fa-calendar-check', label: '15–18 Monthly Calls', desc: 'Consistent monthly coverage across top NSE F&O stocks and index futures.' },
        { icon: 'fas fa-shield-alt', label: 'Risk Management', desc: 'Every call includes defined risk parameters to protect your trading capital.' },
        { icon: 'fas fa-paper-plane', label: 'Instant Delivery', desc: 'Signals delivered via WhatsApp, SMS & App in real time.' },
      ]}
      pricing={[
        {
          name: 'Future Service',
          tiers: [
            { duration: '3 Months', price: '22,000/-' },
            { duration: '6 Months', price: '40,000/-' },
            { duration: '1 Year', price: '75,000/-' },
          ],
        },
        {
          name: 'Premium Future Service',
          tiers: [
            { duration: '3 Months', price: '32,000/-' },
            { duration: '6 Months', price: '58,000/-' },
            { duration: '1 Year', price: '1,05,000/-' },
          ],
        },
      ]}
      whyChooseUs={[
        'SEBI Registered Research Analyst with years of market experience',
        '80–90% Performance Efficiency across past Future calls',
        'Futures analysis backed by technical and fundamental research',
        'Dedicated support manager for every client',
        'Coverage across top NSE F&O stocks and index futures',
        'Transparent track record available on request',
      ]}
    />
  );
}
