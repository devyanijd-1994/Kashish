import HeroBanner from '../components/HeroBanner';

export default function Contact() {
  return (
    <>
      <HeroBanner title="Contact" breadcrumb="Contact" />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h4 className="text-2xl font-bold text-[#031031] mb-6">Get In Touch</h4>
            <form action="/contact1.php" method="POST" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Your Name" required
                  className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#00A651] w-full" />
                <input type="tel" name="number" placeholder="Your Number" required
                  pattern="[0-9]{10}" minLength="10" maxLength="10" inputMode="numeric"
                  className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#00A651] w-full" />
              </div>
              <input type="email" name="email" placeholder="Your Email" required
                className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#00A651] w-full" />
              <select name="segment" required
                className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#00A651] w-full">
                <option value="" disabled defaultValue>Select your segment</option>
                <option value="stock_services">Stock Services - Cash, Future, Option</option>
                <option value="nifty_services">Nifty/Bank Nifty Services - Option Future</option>
                <option value="atp_services">Advance Trading Plan (ATP) Services</option>
                <option value="commodity_services">Commodity Services</option>
              </select>
              <textarea name="message" placeholder="Message" rows="5"
                className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#00A651] w-full resize-none"></textarea>
              <p className="text-xs text-gray-400">*Your email address will not be published.</p>
              <button type="submit"
                className="bg-[#00A651] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#008a43] text-sm">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
