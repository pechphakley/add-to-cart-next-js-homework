"use client";

import {
  clearCart,
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "@/store/cartSlice";

import {
  useAppDispatch,
  useAppSelector,
} from "@/store/hooks";

export default function CartPage() {
  const dispatch = useAppDispatch();

  const {
    items,
    totalAmount,
    totalQuantity,
  } = useAppSelector((state) => state.cart);

  if (items.length === 0) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-500">
          Cart is empty 🛒
        </h2>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Your Cart ({totalQuantity})
      </h1>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 rounded-xl border p-4 shadow-sm"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-24 w-24 rounded-lg object-cover"
            />

            <div className="flex-1">
              <h3 className="font-semibold">
                {item.name}
              </h3>

              <p className="text-blue-600 font-bold">
                ${item.price.toFixed(2)}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  dispatch(decreaseQty(item.id))
                }
                className="rounded bg-gray-200 px-3 py-1"
              >
                -
              </button>

              <span className="w-8 text-center">
                {item.quantity}
              </span>

              <button
                onClick={() =>
                  dispatch(increaseQty(item.id))
                }
                className="rounded bg-gray-200 px-3 py-1"
              >
                +
              </button>
            </div>

            <button
              onClick={() =>
                dispatch(removeFromCart(item.id))
              }
              className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border p-6">
        <h2 className="text-2xl font-bold">
          Total: ${totalAmount.toFixed(2)}
        </h2>

        <button
          onClick={() => dispatch(clearCart())}
          className="mt-4 rounded-lg bg-red-500 px-6 py-3 text-white hover:bg-red-600"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}