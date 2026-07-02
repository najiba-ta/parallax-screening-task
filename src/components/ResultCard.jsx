export default function ResultCard({ result }) {
  if (!result) return null;

  const { total, mostExpensive } = result;

  return (
    <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition">

      {/* Header */}
      <div className="mb-6 flex items-start gap-3">

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-600 text-sm font-bold">
          ✓
        </div>

        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Calculation Result
          </h2>

          <p className="text-sm text-gray-500">
            Summary of your submitted items
          </p>
        </div>

      </div>

      {/* Cards */}
      <div className="grid gap-4 md:grid-cols-2">

        {/* Total */}
        <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">

          <p className="text-xs font-medium text-gray-500">
            Total Price
          </p>

          <h3 className="mt-2 text-2xl font-semibold text-indigo-600">
            ${Number(total || 0).toFixed(2)}
          </h3>

        </div>

        {/* Most Expensive */}
        <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">

          <p className="text-xs font-medium text-gray-500">
            Most Expensive Item
          </p>

          <h3 className="mt-2 text-lg font-semibold text-gray-900">
            {mostExpensive?.name || "N/A"}
          </h3>

          <p className="mt-1 text-sm font-medium text-red-500">
            ${Number(mostExpensive?.price || 0).toFixed(2)}
          </p>

        </div>

      </div>
    </div>
  );
}