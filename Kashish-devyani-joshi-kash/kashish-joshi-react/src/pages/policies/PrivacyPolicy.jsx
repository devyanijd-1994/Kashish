import PolicyPage from '../PolicyPage';
const sections = [
  {
    content: `Kashish Joshi Research respects and cherishes each person's freedom to establish privacy policies. We are respected for our relationships, and when you become one of our clients, you entrust us with your information with the assurance that we will always be devoted to both clients and non-clients.

Your submitted data is used solely to provide you and the services you have subscribed to from our business and for which you have supplied the data.

Your identification with us will be determined by the information you have given us. Please be sure to notify us by phone or letter if you make any changes to any of the fields in the information you have given us.

In addition to using whatever data you provide us to provide you with services, we may use it to send you emails, newsletters, contest details, surveys, and details about new services that we offer that will be beneficial to you.

You concur with the following conditions of usage and privacy policy by opting for Kashish Joshi Research's services.`,
  },
];
export default function PrivacyPolicy() {
  return <PolicyPage title="Privacy Policy" sections={sections} />;
}
