import ServiceDetail from '../ServiceDetail';

export default function SystematicTradingPlan() {
  return (
    <ServiceDetail
      title="Systematic Trading Plan"
      heroImage="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1600&auto=format&fit=crop"
      badge={{ icon: 'fas fa-sitemap', text: 'Structured Trading Plans' }}
      subtitle="Precision-engineered trading plans designed for disciplined execution, strategic entries, and consistent market performance across all segments."
      overview="We are the creators of the Systematic Trading Plan (STP), a highly special offering for all traders, investors, and other market players. This bundle is broken down into three sections: Aggressive Trading, Defensive Trading, and Learning + Earning. Updates on the Indian and global markets, successful intraday tactics, FII/MF methods, stocks that are close to 52-week highs and lows, and much more — all in one comprehensive plan."
      whoShouldSubscribe="If you want a complete, structured trading plan covering all market segments with daily pre-market views, strategy, and follow-ups — STP is built for you. Ideal for traders at all levels who want discipline, consistency, and a systematic approach to the markets."
      features={[
        'Pre-Market View & Trading Levels & Strategy',
        'Unique Trading Strategy every day',
        'Timely Follow-Ups of Trade Signals',
        'Important Market News & Updates',
        'Real-Time Customer Support',
        'Risk Management Priority on every call',
        'Whole Day Market Coverage',
        'High Performance Efficiency Intraday Trade Signals',
      ]}
      instruments={{
        heading: 'STP Plan Segments',
        items: [
          { name: 'Aggressive Trading', icon: 'fas fa-bolt', desc: 'High-risk, high-reward strategies for experienced traders. Intraday futures and options calls with tight stop-losses and defined targets.' },
          { name: 'Defensive Trading', icon: 'fas fa-shield-alt', desc: 'Conservative strategies focused on capital preservation and steady returns. Ideal for investors who prefer lower risk.' },
          { name: 'Learning + Earning', icon: 'fas fa-graduation-cap', desc: 'A unique module for beginners and intermediate traders. Learn market concepts while earning from live calls.' },
          { name: 'All Segments Coverage', icon: 'fas fa-th', desc: 'Equity, F&O, Commodity, and Index — the STP plan covers all market segments in one comprehensive package.' },
        ],
      }}
      whyItWorks={[
        { icon: 'fas fa-bell', label: '2–3 Daily Calls', desc: 'Signals across all segments every trading day with pre-market view and strategy.' },
        { icon: 'fas fa-calendar-check', label: 'Whole Day Coverage', desc: 'Full-day market coverage with timely follow-ups on every trade signal.' },
        { icon: 'fas fa-shield-alt', label: 'Risk Management', desc: 'Every call includes defined risk parameters to protect your trading capital.' },
        { icon: 'fas fa-paper-plane', label: 'Instant Delivery', desc: 'Signals delivered via WhatsApp, SMS & App in real time.' },
      ]}
      pricing={[
        {
          name: 'STP Plan',
          tiers: [
            { duration: '3 Months', price: '35,000/-' },
            { duration: '6 Months', price: '60,000/-' },
            { duration: '1 Year', price: '1,00,000/-' },
          ],
        },
        {
          name: 'Premium STP Plan',
          tiers: [
            { duration: '3 Months', price: '50,000/-' },
            { duration: '6 Months', price: '85,000/-' },
            { duration: '1 Year', price: '1,50,000/-' },
          ],
        },
      ]}
      whyChooseUs={[
        'SEBI Registered Research Analyst with years of market experience',
        '80–90% Performance Efficiency across past STP calls',
        'Comprehensive plan covering all market segments in one package',
        'Dedicated relationship manager for every client',
        'Daily pre-market view, strategy, and whole-day follow-ups',
        'Transparent track record available on request',
      ]}
    />
  );
}
