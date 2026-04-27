import PolicyPage from '../PolicyPage';
const sections = [
  {
    content: `Before making any suggestions to customers, Kashish Joshi Research takes all the required precautions regarding the risks and rewards associated with the markets. We don't provide any complimentary trials.

There are never any refunds, transfers, or cancellations once the buyer has contributed for the services. We kindly ask our visitors to refrain from offering or permitting anybody else to use your personal accounts or other electronic payment methods to accept subscriptions without first obtaining your consent.

As soon as you had deposited money into the bank account specified in the payment choice or for a membership to our website, it is our understanding that you have carefully read and agreed to Kashish Joshi Research's reimbursement policy, which states that there are never any credits, cancellations, or transfers.

If a new customer makes two payments for the same item, the initial purchase sum will be reimbursed via the identical channel within seven to ten business days (but only if the payment is made through the same portal and the client notifies the issue in writing on that day).`,
  },
];
export default function OurRefundPolicy() {
  return <PolicyPage title="Refund Policy" sections={sections} />;
}
