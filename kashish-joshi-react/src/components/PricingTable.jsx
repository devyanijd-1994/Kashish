const pricing = [
  { duration: 'Monthly', price: '10,000 + GST' },
  { duration: 'Quarterly', price: '25,000 + GST' },
  { duration: 'Half Yearly', price: '40,000 + GST' },
  { duration: 'Yearly', price: '70,000 + GST' },
];

export default function PricingTable() {
  return (
    <div className="mt-8">
      <h5 className="text-lg font-bold text-[#031031] mb-4 flex items-center gap-2">
        <i className="fas fa-bolt text-[#00A651]"></i> Pricing
      </h5>
      <div className="overflow-x-auto rounded-xl shadow">
        <table className="w-full text-sm">
          <thead className="bg-[#031031] text-white">
            <tr>
              <th className="px-6 py-3 text-left">Duration</th>
              <th className="px-6 py-3 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            {pricing.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-6 py-3 font-medium text-[#031031]">{row.duration}</td>
                <td className="px-6 py-3 text-[#00A651] font-semibold">₹{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
