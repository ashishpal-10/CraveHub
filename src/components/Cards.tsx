import React from "react";
import cards from "./data";
import Image from "next/image";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 w-full p-4 content-center  gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-10 lg:px-20">
      {cards.map((items) => (
        <div
          key={items.id}
          className=" md:w-full   lg:w-full flex items-center justify-center flex-col shadow-lg p-4  rounded-2xl mt-4 lg:mt-8 "
        >
          <div className="flex justify-center">
            <Image
              src={items.image}
              alt="Pizza"
              className="h-50 w-50 object-contain hover:scale-120"
            />
          </div>
          {/* Pizza Details */}
          <div className="mt-2 text-center">
            <h2 className="text-lg font-bold text-gray-800">{items.name}</h2>
          </div>
          {/* Price and Button */}
          <div className="mt-4 flex items-center justify-around  gap-4 mb-4">
            <span className="text-lg font-bold text-gray-900">
              ${items.price}
            </span>
            <button className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 hover:scale-110 active:scale-90">
              Order Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
