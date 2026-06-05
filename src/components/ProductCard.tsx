"use client";

import { addToCart, removeFromCart } from "@/store/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  const dispatch = useAppDispatch();

  const cartItem = useAppSelector((state) =>
    state.cart.items.find((item) => item.id === product.id)
  );

  const inCart = !!cartItem;

  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-md transition hover:shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="h-52 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">
          {product.name}
        </h3>

        <p className="mt-2 text-xl font-bold text-blue-600">
          ${product.price.toFixed(2)}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  ...product,
                  quantity: 1,
                })
              )
            }
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            {inCart ? "Add More" : "Add To Cart"}
          </button>

          {inCart && (
            <>
              <span className="text-sm text-gray-600">
                {cartItem.quantity} in cart
              </span>

              <button
                onClick={() =>
                  dispatch(removeFromCart(product.id))
                }
                className="rounded-lg bg-red-500 px-3 py-2 text-white hover:bg-red-600"
              >
                Remove
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}