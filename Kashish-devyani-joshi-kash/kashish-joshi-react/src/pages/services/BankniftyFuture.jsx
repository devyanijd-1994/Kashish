import ServiceDetail from '../ServiceDetail';

export default function BankniftyFuture() {
  return (
    <ServiceDetail
      title="Banknifty / Nifty Future"
      heroImage="https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=1600&auto=format&fit=crop"
      badge={{ icon: 'fas fa-chart-bar', text: 'Stock + Index Future Recommendations' }}
      subtitle="Professional stock and index future recommendations with high performance efficiency rates for confident leveraged trading."
      overview="Kashish Joshi Research offers INDEX future tips in the NSE market. This service is primarily intended for traders and investors who exclusively manage the index (Nifty / Bank Nifty). We closely monitor index movements to provide profitable entry and exit opportunities for futures traders. Our expert team tracks global cues, FII/DII activity, and technical levels to deliver timely and accurate index future calls."
      whoShouldSubscribe="If you trade Nifty or Bank Nifty futures and want leveraged index positions with clear entry, exit, and stop-loss levels — this service is ideal for you. Suited for traders who want to capitalise on index trends with disciplined risk management."
      features={[
        '1–2 Index Future recommendations every day',
        '15–18 Index Future recommendations per month',
        'Recommendations via WhatsApp / SMS / App',
        'Timely Entry and Exit with Stop Loss',
        'Dedicated index futures analysis for Nifty & Bank Nifty',
        'FII/DII activity tracking and analysis',
        'All significant news and updates on the economy',
        'Round-the-clock client assistance',
      ]}
      instruments={{
        heading: 'Index Future Instruments We Cover',
        items: [
          { name: 'Nifty Futures (Long)', icon: 'fas fa-arrow-up', desc: 'Bullish Nifty futures calls based on index trend, global cues, and technical breakouts.' },
          { name: 'Nifty Futures (Short)', icon: 'fas fa-arrow-down', desc: 'Bearish Nifty futures recommendations for profiting from index corrections and breakdowns.' },
          { name: 'Bank Nifty Futures (Long)', icon: 'fas fa-landmark', desc: 'Bullish Bank Nifty calls leveraging banking sector momentum and policy-driven moves.' },
          { name: 'Bank Nifty Futures (Short)', icon: 'fas fa-shield-alt', desc: 'Bearish Bank Nifty recommendations for capitalising on banking sector weakness.' },
        ],
      }}
      whyItWorks={[
        { icon: 'fas fa-bell', label: '1–2 Daily Calls', desc: 'Precise index future calls every trading day with clear entry, exit & stop-loss levels.' },
        { icon: 'fas fa-calendar-check', label: '15–18 Monthly Calls', desc: 'Consistent monthly coverage on Nifty and Bank Nifty futures.' },
        { icon: 'fas fa-shield-alt', label: 'Risk Management', desc: 'Every call includes defined risk parameters to protect your trading capital.' },
        { icon: 'fas fa-paper-plane', label: 'Instant Delivery', desc: 'Signals delivered via WhatsApp, SMS & App in real time.' },
      ]}
      pricing={[
        {
          name: 'Index Future Service',
          tiers: [
            { duration: '3 Months', price: '22,000/-' },
            { duration: '6 Months', price: '40,000/-' },
            { duration: '1 Year', price: '75,000/-' },
          ],
        },
        {
          name: 'Premium Index Future',
          tiers: [
            { duration: '3 Months', price: '32,000/-' },
            { duration: '6 Months', price: '58,000/-' },
            { duration: '1 Year', price: '1,05,000/-' },
          ],
        },
      ]}
      whyChooseUs={[
        'SEBI Registered Research Analyst with years of market experience',
        '80–90% Performance Efficiency across past Index Future calls',
        'Futures analysis backed by technical research and FII/DII data',
        'Dedicated support manager for every client',
        'Coverage across Nifty and Bank Nifty futures',
        'Transparent track record available on request',
      ]}
    />
  );
}
