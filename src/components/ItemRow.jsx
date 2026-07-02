export default function ItemRow({
  index,
  item,
  onChange,
  onRemove,
  showRemove,
}) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md md:flex-row md:items-end">

      {/* Item Name */}
      <div className="flex-1">
        <label className="mb-1 block text-xs font-medium text-gray-500">
          Item Name
        </label>

        <input
          type="text"
          placeholder="e.g. Apple, Laptop, Phone"
          value={item.name}
          onChange={(e) => onChange(index, "name", e.target.value)}
          className="
            w-full rounded-xl border border-gray-200
            bg-gray-50 px-4 py-3 text-gray-800
            placeholder:text-gray-400
            focus:border-indigo-500 focus:bg-white
            focus:ring-2 focus:ring-indigo-100
            outline-none transition
          "
        />
      </div>

      {/* Price */}
      <div className="w-full md:w-40">
        <label className="mb-1 block text-xs font-medium text-gray-500">
          Price
        </label>

        <input
          type="number"
          min="0"
          placeholder="e.g. 100"
          value={item.price}
          onChange={(e) => onChange(index, "price", e.target.value)}
          className="
            w-full rounded-xl border border-gray-200
            bg-gray-50 px-4 py-3 text-gray-800
            placeholder:text-gray-400
            focus:border-indigo-500 focus:bg-white
            focus:ring-2 focus:ring-indigo-100
            outline-none transition
          "
        />
      </div>

      {/* Remove Button */}
      {showRemove && (
        <div>
          <button
            type="button"
            onClick={() => onRemove(index)}
            className="
              rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600
              transition hover:bg-red-100 hover:text-red-700
            "
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
}