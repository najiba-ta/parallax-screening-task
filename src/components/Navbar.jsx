import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/70 backdrop-blur-md">

      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">

        {/* Left side */}
        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <ShoppingCart className="h-5 w-5" />
          </div>

          <div>
            <h1 className="text-sm font-semibold text-gray-900">
              Item Calculator
            </h1>
            <p className="text-xs text-gray-500">
              Technical Screening Task
            </p>
          </div>

        </div>

        {/* Right badge */}
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          Next.js
        </span>

      </div>
    </nav>
  );
}