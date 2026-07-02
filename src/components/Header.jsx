export default function Header() {
  return (
    <header className="mb-8 text-center">

      {/* Title */}
      <h1 className="text-3xl font-semibold text-gray-900">
        Item Calculator
      </h1>

      {/* Subtitle */}
      <p className="mt-2 text-sm text-gray-500 max-w-xl mx-auto">
        Add items and calculate total price with the most expensive item using a simple API.
      </p>

    </header>
  );
}