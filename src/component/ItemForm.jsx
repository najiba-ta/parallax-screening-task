"use client";

import { useState } from "react";
import ItemRow from "./ItemRow";
import ResultCard from "./ResultCard";

export default function ItemForm() {
  const [items, setItems] = useState([{ name: "", price: "" }]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  // Add new item
  const handleAddItem = () => {
    setItems([...items, { name: "", price: "" }]);
  };

  // Remove item
  const handleRemoveItem = (index) => {
    if (items.length === 1) return;

    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setResult(null);

    // Validation
    for (const item of items) {
      if (!item.name.trim()) {
        setError("Please enter all item names.");
        return;
      }

      if (item.price === "" || Number(item.price) < 0) {
        setError("Please enter a valid price.");
        return;
      }
    }

    try {
      setLoading(true);

      const response = await fetch("/api/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          items.map((item) => ({
            ...item,
            price: Number(item.price),
          }))
        ),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
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

        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleAddItem}
            className="rounded-lg bg-gray-200 px-4 py-2 font-medium transition hover:bg-gray-300"
          >
            + Add Item
          </button>

          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
          >
            {loading ? "Calculating..." : "Calculate"}
          </button>
        </div>
      </form>

      {error && (
        <div className="mt-5 rounded-lg border border-red-300 bg-red-50 p-3 text-red-600">
          {error}
        </div>
      )}

      {result && (
        <div className="mt-6">
          <ResultCard result={result} />
        </div>
      )}
    </div>
  );
}