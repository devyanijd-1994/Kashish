import ServiceDetail from '../ServiceDetail';

export default function Option() {
  return (
    <ServiceDetail
      title="Option Services"
      heroImage="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1600&auto=format&fit=crop"
      badge={{ icon: 'fas fa-layer-group', text: 'Option Signal Services' }}
      subtitle="For traders and investors who desire to invest a good amount and seek exponential returns. One of the top selling services of the company."
      overview="Kashish Joshi Research offers stock option intraday calls. This service caters to day traders who want to profit in rising and declining markets. For profitable entry and exit opportunities, our experts closely monitor the stocks and trends. Options trading allows you to leverage your capital and profit from both bullish and bearish market conditions with defined risk."
      whoShouldSubscribe="If you trade stock options and want leveraged exposure to equity markets with limited downside, this service is perfect for you. Ideal for traders seeking high-probability intraday option calls with precise strike price and expiry guidance."
      features={[
        '1–2 Option recommendations every day',
        '15–18 Option recommendations per month',
        'Recommendations via WhatsApp / SMS / App',
        'Timely Entry and Exit with Stop Loss',
        'Precise strike price and expiry recommendations',
        'Risk management on every call',
        'All significant news and updates on the economy',
        'Round-the-clock client assistance',
      ]}
      instruments={{
        heading: 'Option Instruments We Cover',
        items: [
          { name: 'Call Options (CE)', icon: 'fas fa-arrow-trend-up', desc: 'Bullish option calls on high-momentum stocks with defined entry, target, and stop-loss.' },
          { name: 'Put Options (PE)', icon: 'fas fa-arrow-trend-down', desc: 'Bearish option recommendations for profiting from declining stocks with controlled risk.' },
          { name: 'Weekly Expiry Options', icon: 'fas fa-calendar-week', desc: 'Short-term weekly expiry option calls for quick intraday and positional returns.' },
          { name: 'Monthly Expiry Options', icon: 'fas fa-calendar-alt', desc: 'Monthly expiry option strategies for traders with a slightly longer time horizon.' },
        ],
      }}
      whyItWorks={[
        { icon: 'fas fa-bell', label: '1–2 Daily Calls', desc: 'Precise Option calls every trading day with clear entry, exit & stop-loss levels.' },
        { icon: 'fas fa-calendar-check', label: '15–18 Monthly Calls', desc: 'Consistent monthly coverage on weekly and monthly expiry options.' },
        { icon: 'fas fa-shield-alt', label: 'Risk Management', desc: 'Every call includes defined risk parameters to protect your trading capital.' },
        { icon: 'fas fa-paper-plane', label: 'Instant Delivery', desc: 'Signals delivered via WhatsApp, SMS & App in real time.' },
      ]}
      pricing={[
        {
          name: 'Option Service',
          tiers: [
            { duration: '3 Months', price: '22,000/-' },
            { duration: '6 Months', price: '40,000/-' },
            { duration: '1 Year', price: '75,000/-' },
          ],
        },
        {
          name: 'Premium Option Service',
          tiers: [
            { duration: '3 Months', price: '32,000/-' },
            { duration: '6 Months', price: '58,000/-' },
            { duration: '1 Year', price: '1,05,000/-' },
          ],
        },
      ]}
      whyChooseUs={[
        'SEBI Registered Research Analyst with years of market experience',
        '80–90% Performance Efficiency across past Option calls',
        'Options analysis backed by OI data and technical research',
        'Dedicated support manager for every client',
        'Coverage across weekly and monthly expiry options',
        'Transparent track record available on request',
      ]}
    />
  );
}
