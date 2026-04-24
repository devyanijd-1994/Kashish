import HeroBanner from '../components/HeroBanner';

export default function PolicyPage({ title, sections }) {
  return (
    <>
      <HeroBanner title={title} breadcrumb={title} />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#031031] mb-8">{title}</h2>
          <div className="space-y-8">
            {sections.map((sec, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                {sec.heading && <h4 className="text-lg font-bold text-[#031031] mb-3">{sec.heading}</h4>}
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{sec.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
