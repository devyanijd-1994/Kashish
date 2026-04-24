import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-100 to-slate-200 px-4">
      <div className="bg-white border-2 border-green-500 rounded-2xl shadow-xl px-8 py-10 max-w-lg w-full flex flex-col items-center text-center space-y-4">
        <img src="/assets/images/right_icons.png" alt="Thank You" className="h-24 w-auto animate-pulse" />
        <h2 className="text-4xl font-bold text-[#031031]">Thank You</h2>
        <p className="text-gray-600 text-base">
          Thank You for Contacting Us... We Will Be Reaching Out to You Soon!
        </p>
        <p className="text-gray-500 text-sm max-w-sm">
          In case you are in a hurry, you can contact us via WhatsApp and our team will assist you immediately.
        </p>
        <div className="flex gap-4 pt-4">
          <Link to="/"
            className="border-2 border-sky-400 py-2 px-5 rounded-lg text-sm font-semibold hover:bg-[#00A651] hover:text-white hover:border-[#00A651] transition-all">
            Back To Home
          </Link>
          <a href="https://wa.link/iw4ct4" target="_blank" rel="noreferrer"
            className="bg-[#00A651] text-white py-2 px-5 rounded-lg text-sm font-semibold hover:bg-[#008a43] animate-pulse">
            WhatsApp Now
          </a>
        </div>
      </div>
    </div>
  );
}
