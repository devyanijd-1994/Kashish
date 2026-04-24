import PolicyPage from '../PolicyPage';
const sections = [
  {
    content: `Kashish Joshi Research disclaims any liability for the data and research found on this website. Despite our best efforts to publish all of the material on the website, we disclaim all liability for the content.

Clients and guests ought to use analyses as a starting point to increase their knowledge of the topic, not as a means to generate a financial commitment. They need to speak with a money counselor.

Kashish Joshi Research disclaims any liability for materials and ads that are accessible on the website. We take no ownership for the material found on the mentioned websites.

You acknowledge that using Kashish Joshi Research is at your own risk. Kashish Joshi Research disclaims any liability for unrelated, important, indirect, direct, or exceptional damages.

The transmission of SMS may be delayed by issues with the hardware, software, or Internet connectivity; Kashish Joshi Research is not liable for these delays.

Any viewpoint, recommendation, expertise, counsel, or offer made on the website is only information. We assume that everyone who visits the website has carefully read the terms regulations as well as disclaimer.`,
  },
];
export default function OurDisclaimer() {
  return <PolicyPage title="Disclaimer" sections={sections} />;
}
