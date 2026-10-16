import Link from "next/link";

type SearchParams = Promise<{ items?: string; total?: string }>;

const CheckoutPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const params = await searchParams;
  const count = Number(params.items) || 0;
  const total = Number(params.total) || 0;

  return (
    <div className="px-4 mt-10 py-10 lg:px-20 xl:px-40">
      <h1 className="text-4xl font-bold text-center">Checkout</h1>

      <div className="max-w-md mx-auto mt-8 bg-white shadow-lg rounded-2xl p-6 border-t-4 border-red-500">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

        <div className="flex justify-between mb-4">
          <span className="text-gray-600">
            Items ({count} {count === 1 ? "item" : "items"})
          </span>
        </div>

        <div className="border-t border-gray-200 pt-4 flex justify-between items-center mb-6">
          <span className="text-xl font-bold">Total</span>
          <span className="text-2xl font-bold text-red-500">${total}</span>
        </div>

        <button
          disabled
          className="block w-full bg-red-300 text-white py-3 rounded-2xl font-bold text-center cursor-not-allowed"
        >
          Pay Online — Coming Soon
        </button>

        <Link
          href="/cart"
          className="block text-center mt-4 text-red-500 font-bold"
        >
          ← Back to Cart
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
