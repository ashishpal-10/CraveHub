"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import crossImg from "../../../public/cross.svg";
import emptyCartImg from "../../../public/shoppingcart.svg";
import {
  useCart,
  addItem,
  DELIVERY_FEE,
  FREE_DELIVERY_THRESHOLD,
} from "@/components/cartStore";
// import { featuredProducts } from "@/components/data";

const EmptyCart = () => (
  <div className="mt-2 flex flex-col items-center">
    <div className="flex w-full max-w-3xl flex-col items-center rounded-2xl border-t-4 border-red-500 bg-white p-8 shadow-lg">
      <Image
        src={emptyCartImg}
        alt="Empty cart"
        width={120}
        height={120}
        className="opacity-80 bg-red-500 rounded-full p-4"
      />
      <h2 className="mt-6 text-center text-2xl font-bold uppercase text-gray-800">
        Your cart is empty
      </h2>
      <Link
        href="/menu"
        className="mt-6 rounded-2xl bg-red-500 px-6 py-3 font-bold text-white transition hover:scale-110 hover:bg-red-600 active:scale-95"
      >
        Browse Menu
      </Link>
    </div>

    {/* <div className="mt-14 w-full">
      <h3 className="text-center text-2xl font-bold text-gray-800">
        You may also like
      </h3>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProducts.slice(0, 3).map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center justify-center rounded-2xl p-4 shadow-lg"
          >
            <Image
              src={product.img}
              alt={product.title}
              width={160}
              height={160}
              className="h-40 w-40 object-contain transition hover:scale-110"
            />
            <h4 className="mt-2 text-center text-lg font-bold text-gray-800">
              {product.title}
            </h4>
            <div className="mt-4 flex w-full items-center justify-around gap-4">
              <span className="text-lg font-bold text-gray-900">
                ${product.price}
              </span>
              <button
                onClick={() =>
                  addItem({
                    id: product.id,
                    title: product.title,
                    img: product.img,
                    unitPrice: product.price,
                    quantity: 1,
                    option: product.options?.[0].title,
                  })
                }
                className="cursor-pointer rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:scale-110 hover:bg-red-700 active:scale-90"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div> */}
  </div>
);

const CartPage = () => {
  const { loaded, items, updateQty, removeItem } = useCart();

  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0,
  );
  const delivery =
    subtotal === 0 || subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  const total = subtotal + delivery;



  return (
    <main className="mt-10 px-4 py-10 lg:px-20 xl:px-40">
      <h1 className="text-center text-4xl font-bold text-gray-800">
        Your Cart
      </h1>
      <p className="mt-2 text-center text-gray-600">
        {count > 0
          ? `${count} item${count > 1 ? "s" : ""} ready for checkout`
          : "Add something tasty to get started"}
      </p>

      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-start">
          {/* Items */}
          <div className="flex flex-1 flex-col gap-4">
            {items.map((item) => (
              <div
                key={item.key}
                className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-lg sm:flex-row sm:items-center"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={96}
                  height={96}
                  className="h-24 w-24 self-center object-contain transition hover:scale-110"
                />

                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-lg font-bold uppercase text-gray-800">
                    {item.title}
                  </h2>
                  {item.option && (
                    <span className="mt-1 inline-block rounded-full bg-red-50 px-3 py-0.5 text-xs font-semibold text-red-500">
                      {item.option}
                    </span>
                  )}
                  <p className="mt-1 text-sm text-gray-600">
                    ${item.unitPrice} each
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4 sm:justify-end">
                  <div className="flex items-center gap-3">
                    <button
                      aria-label={`Decrease quantity of ${item.title}`}
                      onClick={() => updateQty(item.key, -1)}
                      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full font-bold text-red-500 ring-1 ring-red-400 transition hover:bg-red-500 hover:text-white active:scale-90"
                    >
                      -
                    </button>
                    <span className="w-6 text-center font-bold text-gray-800">
                      {item.quantity}
                    </span>
                    <button
                      aria-label={`Increase quantity of ${item.title}`}
                      onClick={() => updateQty(item.key, 1)}
                      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full font-bold text-red-500 ring-1 ring-red-400 transition hover:bg-red-500 hover:text-white active:scale-90"
                    >
                      +
                    </button>
                  </div>

                  <span className="w-16 text-right font-bold text-gray-900">
                    ${item.unitPrice * item.quantity}
                  </span>

                  <button
                    aria-label={`Remove ${item.title} from cart`}
                    onClick={() => removeItem(item.key)}
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full    transition hover:scale-110 hover:bg-red-500"
                  >
                    <Image src={crossImg} alt="" width={16} height={16}  />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <aside className="w-full lg:sticky lg:top-8 lg:w-96">
            <div className="rounded-2xl border-t-4 border-red-500 bg-white p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800">
                Order Summary
              </h2>

              <div className="mt-6 flex flex-col gap-3 text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal ({count} items)</span>
                  <span className="font-semibold text-gray-800">
                    ${subtotal}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Service Cost</span>
                  <span className="font-semibold text-gray-800">$0</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Cost</span>
                  <span
                    className={
                      delivery === 0
                        ? "font-semibold text-green-500"
                        : "font-semibold text-gray-800"
                    }
                  >
                    {delivery === 0 ? "Free" : `$${delivery}`}
                  </span>
                </div>
              </div>

           

              <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4">
                <span className="text-xl font-bold text-gray-800">Total</span>
                <span className="text-2xl font-bold text-red-500">
                  ${total}
                </span>
              </div>

              <Link
                href={`/checkout?items=${count}&total=${total}`}
                className="mt-6 block w-full rounded-2xl bg-red-500 px-6 py-3 text-center font-bold text-white transition hover:scale-105 hover:bg-red-600 active:scale-95"
              >
                Checkout
              </Link>
              <Link
                href="/menu"
                className="mt-4 block text-center font-bold text-red-500 hover:underline"
              >
                ← Continue Shopping
              </Link>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
};

export default CartPage;
