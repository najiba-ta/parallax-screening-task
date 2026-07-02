import Footer from "@/components/Footer";
import ItemForm from "@/components/ItemForm";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center p-6">

        <div className="w-full max-w-3xl">

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

            <h1 className="text-center text-3xl font-semibold text-gray-900">
              Item Calculator
            </h1>

            <p className="mt-2 text-center text-sm text-gray-500">
              Add items and calculate total price with the most expensive item
            </p>

            <div className="mt-8">
              <ItemForm />
            </div>

          </div>

        </div>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}