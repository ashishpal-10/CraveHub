import Image, { StaticImageData } from "next/image";
import React from "react";
import burger2 from "../../public/burger1.png";
import pizza1 from "../../public/pizza1.png";
import pizza2 from "../../public/pizza2.png";
import pizza3 from "../../public/pizza3.png";
import garlicbread from "../../public/garlic bread1.png";
import coldCoffee from "../../public/coldCoffee.png";
import Samosa from "../../public/samosa.png";
import Greentea from "../../public/greentea1.png";

type Card = {
  id: number;
  name: string;
  price: number;
  image: StaticImageData;
};

const cards: Card[] = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 120,
    image: pizza1,
  },
  {
    id: 2,
    name: "Farmhouse Pizza",
    price: 180,
    image: pizza2,
  },
  {
    id: 3,
    name: "Cheese Burst Pizza",
    price: 220,
    image: pizza3,
  },
  {
    id: 4,
    name: "Aloo Tikki Burger",
    price: 220,
    image: burger2,
  },
  {
    id: 5,
    name: "Cold Coffee",
    price: 25,
    image: coldCoffee,
  },
  {
    id: 6,
    name: "Green Tea",
    price: 20,
    image: Greentea,
  },
  {
    id: 7,
    name: "Samosa",
    price: 45,
    image: Samosa,
  },
  {
    id: 8,
    name: "Garlic Bread",
    price: 80,
    image: garlicbread,
  },
];

const Featured = () => {
  return (
    <div className="w-screen sm:mt-40 md:mt-90 lg:mt-20  p-10">
      <h1 className="text-3xl text-center font-bold mb-6 lg:text-6xl">
        Our awesome Dish
      </h1>
      <p className="text-center lg:text-2xl">
        Modern and direct choices such as Real ingredients, zero shortcuts. and
        Made now. Made right.
      </p>
      {/* Wrapper  */}

      <div className=" grid grid-cols-1 w-full p-4 content-center  gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-10 lg:px-20">
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

        <div className=" flex items-center  justify-center w-full">
          <button className="w-fit  px-6 py-3 mt-8 bg-red-500 rounded-2xl text-white font-bold active:scale-110">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
