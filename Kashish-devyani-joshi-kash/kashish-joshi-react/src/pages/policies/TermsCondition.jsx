import PolicyPage from '../PolicyPage';
const sections = [
  {
    heading: 'Terms & Conditions',
    content: `There are no certain or guaranteed profits given to traders or investors in the services. The past effectiveness of the services does not predict or ensure future effectiveness or value from any of the services.

We don't have a cancellation or return policy. Every sale is final. There will be no refunds or cancellations if you decide to test out our products and services before committing to a subscription.

You have agreed to all terms and conditions by using the website kashishjoshiresearch.com to register for services.`,
  },
  {
    heading: 'Risk Disclosure',
    content: `Trading stocks is dangerous by nature. You need to understand the dangers associated with commodity trading and equities before you do so. Investments in this type have an elevated level of risk than other kinds of securities because of the high level of leverage attached to them.

The past success of these assets does not imply any future gains. It is important for you to consider any commission and tax obligations that may arise from following our advice.

The only money that should be put at risk is excess, and those without it shouldn't trade commodities and stocks.`,
  },
  {
    heading: 'Dispute Settlement',
    content: `According to the Arbitration and Conciliation Act, 1996, the sole arbitrator will hear all conflicts, disagreements, and inquiries of any kind that may arise within the parties. The Managing Director of Kashish Joshi Research will pick the lone arbitrator.`,
  },
  {
    heading: 'Jurisdiction',
    content: `The two sides acknowledge that the court system will have sole control over any grievances, disagreements, and disputes, which include those pertaining to arrangements, contracts, and purchases made with respect to a thing related to it.`,
  },
];
export default function TermsCondition() {
  return <PolicyPage title="Terms & Conditions" sections={sections} />;
}
