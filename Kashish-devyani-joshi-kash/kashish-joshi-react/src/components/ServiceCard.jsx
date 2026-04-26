import { Link } from 'react-router-dom';

export default function ServiceCard({ icon, title, description, to }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow hover:shadow-lg hover:-translate-y-1 transition-all group">
      <div className="text-4xl text-[#00A651] mb-4">{icon}</div>
      <h5 className="text-lg font-bold text-[#031031] mb-2">{title}</h5>
      <p className="text-gray-500 text-sm mb-4">{description}</p>
      <Link to={to} className="text-[#00A651] text-sm font-semibold hover:underline flex items-center gap-1">
        Explore More <i className="fas fa-arrow-right text-xs"></i>
      </Link>
    </div>
  );
}
