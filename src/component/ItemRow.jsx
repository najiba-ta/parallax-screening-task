export default function ItemRow({
  index,
  item,
  onChange,
  onRemove,
  showRemove,
}) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 md:flex-row md:items-center">
      {/* Item Name */}
      <div className="flex-1">
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Item Name
        </label>

        <input
          type="text"
          placeholder="e.g. Apple"
          value={item.name}
          onChange={(e) => onChange(index, "name", e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {/* Price */}
      <div className="w-full md:w-48">
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Price
        </label>

        <input
          type="number"
          min="0"
          placeholder="0"
          value={item.price}
          onChange={(e) => onChange(index, "price", e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {/* Remove Button */}
      {showRemove && (
        <div className="md:self-end">
          <button
            type="button"
            onClick={() => onRemove(index)}
            className="rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
}