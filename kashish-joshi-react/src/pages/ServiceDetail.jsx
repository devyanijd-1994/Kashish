import HeroBanner from '../components/HeroBanner';
import PricingTable from '../components/PricingTable';

const features = [
  'Calls on an intraday basis 1-2',
  'Total Opposition & Assistance every day',
  'Appropriate follow-up by chat and SMS',
  'All significant news and updates on the economy',
  'Round-the-clock client assistance',
];

export default function ServiceDetail({ title, overview }) {
  return (
    <>
      <HeroBanner title={title} breadcrumb={title} />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <h5 className="text-xl font-bold text-[#031031] mb-4">Overview</h5>
              <p className="text-gray-600 text-sm leading-relaxed">{overview}</p>
            </div>
            <div>
              <img src="/assets/images/service-details-img.png" alt={title} className="rounded-xl w-full shadow" />
            </div>
          </div>

          {/* Features */}
          <div className="mb-10">
            <h5 className="text-xl font-bold text-[#031031] mb-4">Features:</h5>
            <ul className="space-y-3">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                  <i className="fas fa-check-circle text-[#00A651] text-base flex-shrink-0"></i>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <PricingTable />

          <div className="mt-8">
            <a
              href="https://wa.link/iw4ct4"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#00A651] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#008a43]"
            >
              <i className="fab fa-whatsapp text-lg"></i> WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
