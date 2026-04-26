import ServiceDetail from '../ServiceDetail';

export default function CommodityServices() {
  return (
    <ServiceDetail
      title="Commodity Services"
      heroImage="https://images.unsplash.com/photo-1610375461246-83df859d849d?w=1600&auto=format&fit=crop"
      badge={{ icon: 'fas fa-coins', text: 'MCX Signal Services' }}
      subtitle="MCX trading requires planning and discipline. We provide research-driven commodity market insights to support your most informed decisions."
      overview="Kashish Joshi Research offers calls on precious metals, base metals, energy commodities, and agricultural goods — covering all commodities in one package for clients who like trading and profiting from the commodity market. Our group gives you precise calls on time so that you may earn respectable and promising returns. We track global supply-demand dynamics, geopolitical events, and technical charts to deliver high-accuracy commodity tips."
      whoShouldSubscribe="If you trade commodities on MCX or NCDEX and want research-driven calls on metals, energy, and agri commodities with defined entry, exit, and stop-loss — this service is perfect for you. Ideal for traders seeking consistent returns from commodity markets."
      features={[
        '1–2 Commodity recommendations every day',
        '15–18 Commodity recommendations per month',
        'Recommendations via WhatsApp / SMS / App',
        'Timely Entry and Exit with Stop Loss',
        'Coverage of MCX & NCDEX segments',
        'Risk management on every call',
        'Global commodity market news and updates',
        'Round-the-clock client assistance',
      ]}
      instruments={{
        heading: 'Commodity Instruments We Cover',
        items: [
          { name: 'Gold & Silver', icon: 'fas fa-gem', desc: 'High-probability precious metals calls leveraging price movements with controlled risk and defined strategies.' },
          { name: 'Crude Oil & Natural Gas', icon: 'fas fa-fire', desc: 'Energy commodity calls based on global supply-demand dynamics, OPEC data, and technical chart setups.' },
          { name: 'Base Metals', icon: 'fas fa-industry', desc: 'Copper, Zinc, Aluminium, and Lead recommendations targeting industrial demand cycles and LME price action.' },
          { name: 'Agri Commodities', icon: 'fas fa-leaf', desc: 'NCDEX agri calls on Soybean, Chana, Castor Seed, and more based on seasonal trends and fundamental analysis.' },
        ],
      }}
      whyItWorks={[
        { icon: 'fas fa-bell', label: '1–2 Daily Calls', desc: 'Precise commodity calls every trading day with clear entry, exit & stop-loss levels.' },
        { icon: 'fas fa-calendar-check', label: '15–18 Monthly Calls', desc: 'Consistent monthly coverage on Gold, Silver, Crude Oil & Copper.' },
        { icon: 'fas fa-shield-alt', label: 'Risk Management', desc: 'Every call includes defined risk parameters to protect your trading capital.' },
        { icon: 'fas fa-paper-plane', label: 'Instant Delivery', desc: 'Signals delivered via WhatsApp, SMS & App in real time.' },
      ]}
      pricing={[
        {
          name: 'Commodity Service',
          tiers: [
            { duration: '3 Months', price: '22,000/-' },
            { duration: '6 Months', price: '40,000/-' },
            { duration: '1 Year', price: '75,000/-' },
          ],
        },
        {
          name: 'Premium Commodity Service',
          tiers: [
            { duration: '3 Months', price: '32,000/-' },
            { duration: '6 Months', price: '58,000/-' },
            { duration: '1 Year', price: '1,05,000/-' },
          ],
        },
      ]}
      whyChooseUs={[
        'SEBI Registered Research Analyst with years of market experience',
        '80–90% Performance Efficiency across past Commodity calls',
        'Commodity analysis backed by global market research',
        'Dedicated support manager for every client',
        'Coverage across MCX metals, energy, and NCDEX agri segments',
        'Transparent track record available on request',
      ]}
    />
  );
}
