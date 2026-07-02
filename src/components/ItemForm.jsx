"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import ItemRow from "./ItemRow";
import ResultCard from "./ResultCard";

export default function ItemForm() {
  const [items, setItems] = useState([
    { name: "", price: "" },
  ]);

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };

  // Add item
  const handleAddItem = () => {
    setItems([...items, { name: "", price: "" }]);
  };

  // Remove item
  const handleRemoveItem = (index) => {
    if (items.length === 1) return;
    setItems(items.filter((_, i) => i !== index));
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setResult(null);

    // Validation
    for (const item of items) {
      if (!item.name.trim()) {
        setError("Item name is required.");
        toast.error("Please enter all item names.");
        return;
      }

      if (item.price === "" || Number(item.price) < 0) {
        setError("Please enter a valid price.");
        toast.error("Please enter valid price values.");
        return;
      }
    }

    try {
      setLoading(true);

      const res = await fetch("/api/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          items.map((i) => ({
            name: i.name.trim(),
            price: Number(i.price),
          }))
        ),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Request failed");
      }

      setResult(data);
      toast.success("Calculation completed successfully!");
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">

        {items.map((item, index) => (
          <ItemRow
            key={index}
            index={index}
            item={item}
            onChange={handleChange}
            onRemove={handleRemoveItem}
            showRemove={items.length > 1}
          />
        ))}

        {/* Actions */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

          {/* Add Button */}
          <button
            type="button"
            onClick={handleAddItem}
            className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            + Add another item
          </button>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-indigo-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-300"
          >
            {loading ? "Calculating..." : "Calculate Total"}
          </button>
        </div>
      </form>

      {/* Error (backup UI) */}
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="pt-2">
          <ResultCard result={result} />
        </div>
      )}
    </div>
  );
}