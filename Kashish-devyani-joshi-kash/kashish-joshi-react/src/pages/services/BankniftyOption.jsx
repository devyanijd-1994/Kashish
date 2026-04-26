import ServiceDetail from '../ServiceDetail';

export default function BankniftyOption() {
  return (
    <ServiceDetail
      title="Banknifty / Nifty Options"
      heroImage="https://images.unsplash.com/photo-1560221328-12fe60f83ab8?w=1600&auto=format&fit=crop"
      badge={{ icon: 'fas fa-university', text: 'Stock + Index Option Recommendations' }}
      subtitle="Professional stock and index option recommendations with high performance efficiency rates for confident trading."
      overview="Kashish Joshi Research offers INDEX option tips in the NSE market. This service is primarily intended for traders and investors who exclusively manage the index (Nifty / Bank Nifty). We closely monitor index movements to provide profitable entry and exit opportunities for options traders. Our expert team tracks FII/DII activity, global cues, and technical levels to deliver timely and accurate index option calls."
      whoShouldSubscribe="If you trade Nifty or Bank Nifty options and want high-probability index option calls with defined strike price, expiry, and stop-loss — this service is built for you. Ideal for traders seeking leveraged returns from index movements."
      features={[
        '1–2 Index Option recommendations every day',
        '15–18 Index Option recommendations per month',
        'Recommendations via WhatsApp / SMS / App',
        'Timely Entry and Exit with Stop Loss',
        'Index-specific strike price and expiry guidance',
        'Real-time monitoring of Nifty & Bank Nifty movements',
        'All significant news and updates on the economy',
        'Round-the-clock client assistance',
      ]}
      instruments={{
        heading: 'Index Option Instruments We Cover',
        items: [
          { name: 'Nifty Call Options (CE)', icon: 'fas fa-arrow-trend-up', desc: 'Bullish Nifty option calls based on index trend, support levels, and momentum analysis.' },
          { name: 'Nifty Put Options (PE)', icon: 'fas fa-arrow-trend-down', desc: 'Bearish Nifty option recommendations for profiting from index corrections.' },
          { name: 'Bank Nifty Call Options (CE)', icon: 'fas fa-landmark', desc: 'Bullish Bank Nifty calls leveraging banking sector momentum and RBI policy moves.' },
          { name: 'Bank Nifty Put Options (PE)', icon: 'fas fa-shield-alt', desc: 'Bearish Bank Nifty recommendations for capitalising on banking sector weakness.' },
        ],
      }}
      whyItWorks={[
        { icon: 'fas fa-bell', label: '1–2 Daily Calls', desc: 'Precise index option calls every trading day with clear entry, exit & stop-loss levels.' },
        { icon: 'fas fa-calendar-check', label: '15–18 Monthly Calls', desc: 'Consistent monthly coverage on Nifty & Bank Nifty weekly and monthly expiry.' },
        { icon: 'fas fa-shield-alt', label: 'Risk Management', desc: 'Every call includes defined risk parameters to protect your trading capital.' },
        { icon: 'fas fa-paper-plane', label: 'Instant Delivery', desc: 'Signals delivered via WhatsApp, SMS & App in real time.' },
      ]}
      pricing={[
        {
          name: 'Index Option Service',
          tiers: [
            { duration: '3 Months', price: '22,000/-' },
            { duration: '6 Months', price: '40,000/-' },
            { duration: '1 Year', price: '75,000/-' },
          ],
        },
        {
          name: 'Premium Index Option',
          tiers: [
            { duration: '3 Months', price: '32,000/-' },
            { duration: '6 Months', price: '58,000/-' },
            { duration: '1 Year', price: '1,05,000/-' },
          ],
        },
      ]}
      whyChooseUs={[
        'SEBI Registered Research Analyst with years of market experience',
        '80–90% Performance Efficiency across past Index Option calls',
        'Options analysis backed by OI, IV data and technical research',
        'Dedicated support manager for every client',
        'Coverage across Nifty and Bank Nifty weekly & monthly expiry',
        'Transparent track record available on request',
      ]}
    />
  );
}
