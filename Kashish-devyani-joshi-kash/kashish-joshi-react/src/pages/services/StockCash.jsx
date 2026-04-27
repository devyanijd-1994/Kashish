import ServiceDetail from '../ServiceDetail';

export default function StockCash() {
  return (
    <ServiceDetail
      title="Stock Cash"
      heroImage="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&auto=format&fit=crop"
      badge={{ icon: 'fas fa-chart-line', text: 'Stock Cash Signal Services' }}
      subtitle="The foundational service in the cash segment. High performance efficiency equity market tips crafted by expert Technical Analysts for consistent performance."
      overview="Kashish Joshi Research offers Stock Cash intraday calls. This service caters to day traders who want to profit in rising and declining markets. To provide you with profitable entry and exit opportunities, our experts closely monitor the stocks and market movements. Our research team uses advanced technical and fundamental analysis to identify high-probability trades in the cash segment of NSE & BSE."
      whoShouldSubscribe="If you trade equities in the cash segment and want consistent, research-backed intraday calls with clear entry, exit, and stop-loss levels — this service is built for you. Ideal for traders with moderate capital looking for steady daily returns."
      features={[
        '1–2 Stock Cash recommendations every day',
        '15–18 Stock Cash recommendations per month',
        'Recommendations via WhatsApp / SMS / App',
        'Timely Entry and Exit with Stop Loss',
        'Total Support & Resistance levels every day',
        'Risk management on every call',
        'All significant news and updates on the economy',
        'Round-the-clock client assistance',
      ]}
      instruments={{
        heading: 'Segments We Cover',
        items: [
          { name: 'Large Cap Stocks', icon: 'fas fa-building', desc: 'High-probability calls on blue-chip and large-cap NSE/BSE listed stocks with strong liquidity.' },
          { name: 'Mid Cap Stocks', icon: 'fas fa-chart-line', desc: 'Mid-cap stock recommendations targeting higher growth potential with managed risk.' },
          { name: 'Small Cap Stocks', icon: 'fas fa-seedling', desc: 'Selective small-cap calls based on deep fundamental and technical research.' },
          { name: 'Sector-Based Calls', icon: 'fas fa-th-large', desc: 'Sector rotation strategies covering IT, Banking, Pharma, Auto, and more.' },
        ],
      }}
      whyItWorks={[
        { icon: 'fas fa-bell', label: '1–2 Daily Calls', desc: 'Precise Stock Cash calls every trading day with clear entry, exit & stop-loss levels.' },
        { icon: 'fas fa-calendar-check', label: '15–18 Monthly Calls', desc: 'Consistent monthly coverage across NSE & BSE cash segment stocks.' },
        { icon: 'fas fa-shield-alt', label: 'Risk Management', desc: 'Every call includes defined risk parameters to protect your trading capital.' },
        { icon: 'fas fa-paper-plane', label: 'Instant Delivery', desc: 'Signals delivered via WhatsApp, SMS & App in real time.' },
      ]}
      pricing={[
        {
          name: 'Stock Cash',
          tiers: [
            { duration: '3 Months', price: '22,000/-' },
            { duration: '6 Months', price: '40,000/-' },
            { duration: '1 Year', price: '75,000/-' },
          ],
        },
        {
          name: 'Premium Stock Cash',
          tiers: [
            { duration: '3 Months', price: '32,000/-' },
            { duration: '6 Months', price: '58,000/-' },
            { duration: '1 Year', price: '1,05,000/-' },
          ],
        },
      ]}
      whyChooseUs={[
        'SEBI Registered Research Analyst with years of market experience',
        '80–90% Performance Efficiency across past Stock Cash calls',
        'Research backed by technical and fundamental analysis',
        'Dedicated support manager for every client',
        'Coverage across NSE & BSE cash segment stocks',
        'Transparent track record available on request',
      ]}
    />
  );
}
