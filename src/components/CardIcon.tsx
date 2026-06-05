"use client";

import Link from "next/link";
import { useAppSelector } from "@/store/hooks";

export default function CartIcon() {
  const totalQuantity = useAppSelector(
    (state) => state.cart.totalQuantity
  );

  return (
    <Link
      href="/cart"
      className="relative inline-block text-3xl"
    >
      🛒

      {totalQuantity > 0 && (
        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white">
          {totalQuantity}
        </span>
      )}
    </Link>
  );
}