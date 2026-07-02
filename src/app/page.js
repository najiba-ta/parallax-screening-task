import ItemForm from "@/component/ItemForm";


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800">
            🛒 Item Calculator
          </h1>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Submit a list of items to calculate the total price and find the
            most expensive item.
          </p>

          <ItemForm />
        </div>
      </div>
    </main>
  );
}