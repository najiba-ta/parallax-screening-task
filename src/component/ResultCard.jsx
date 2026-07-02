export default function ResultCard({ result }) {
  const { total, mostExpensive } = result;

  return (
    <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-2xl text-white">
          ✓
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Calculation Complete
          </h2>
          <p className="text-sm text-gray-600">
            Here are your calculation results.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Total Price */}
        <div className="rounded-xl bg-white p-5 shadow">
          <p className="text-sm text-gray-500">Total Price</p>

          <h3 className="mt-2 text-3xl font-bold text-blue-600">
            ${total.toFixed(2)}
          </h3>
        </div>

        {/* Most Expensive */}
        <div className="rounded-xl bg-white p-5 shadow">
          <p className="text-sm text-gray-500">Most Expensive Item</p>

          <h3 className="mt-2 text-xl font-semibold text-gray-800">
            {mostExpensive.name}
          </h3>

          <p className="mt-1 text-lg font-medium text-red-500">
            ${Number(mostExpensive.price).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}