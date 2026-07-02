export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-xl text-white shadow">
            🛒
          </div>

          <div>
            <h1 className="text-lg font-bold text-gray-800">
              Item Calculator
            </h1>
            <p className="text-xs text-gray-500">
              Parallax Labs Screening Task
            </p>
          </div>
        </div>

        {/* Badge */}
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          Next.js
        </span>
      </div>
    </nav>
  );
}