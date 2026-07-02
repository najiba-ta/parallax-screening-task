export default function Header() {
  return (
    <header className="mb-8 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-3xl shadow-lg">
        🛒
      </div>

      <h1 className="mt-4 text-4xl font-bold text-gray-800">
        Item Calculator
      </h1>

      <p className="mt-2 max-w-2xl mx-auto text-gray-600">
        Submit a list of items to calculate the total price and identify the
        most expensive item using a custom Next.js API.
      </p>
    </header>
  );
}