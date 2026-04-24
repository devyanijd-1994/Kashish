import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-9xl font-bold text-[#00A651]">404</h1>
      <h2 className="text-3xl font-bold text-[#031031] mt-4 mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-8">The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" className="bg-[#00A651] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#008a43]">
        Back to Home
      </Link>
    </div>
  );
}
