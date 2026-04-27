export default function SectionTitle({ sub, title, light = false }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-2">
        <img src="/assets/images/section-title-icon.png" alt="caret" className="w-5 h-5" />
        <p className={`text-sm font-semibold uppercase tracking-wider ${light ? 'text-gray-300' : 'text-[#00A651]'}`}>{sub}</p>
      </div>
      <h2 className={`text-3xl md:text-4xl font-bold ${light ? 'text-white' : 'text-[#031031]'}`}>{title}</h2>
    </div>
  );
}
