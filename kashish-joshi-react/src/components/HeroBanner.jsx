import { Link } from 'react-router-dom';

export default function HeroBanner({ title, breadcrumb }) {
  return (
    <section
      className="relative py-16 flex items-center"
      style={{
        background: 'linear-gradient(rgba(3,16,49,0.8), rgba(3,16,49,0.8)), url(/assets/images/inner-banner.png) center/cover no-repeat',
        minHeight: '200px',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{title}</h2>
        <div className="flex items-center gap-2 text-gray-300 text-sm">
          <Link to="/" className="hover:text-[#00A651]">Home</Link>
          <span>|</span>
          <span className="text-[#00A651]">{breadcrumb}</span>
        </div>
      </div>
    </section>
  );
}
