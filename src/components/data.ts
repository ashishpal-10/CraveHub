
import { StaticImageData } from "next/image";

import burger2 from "../../public/burger1.png";
import pizza1 from "../../public/pizza1.png";
import pizza2 from "../../public/pizza2.png";
import pizza3 from "../../public/pizza3.png";
import garlicbread from "../../public/garlic bread1.png";
import coldCoffee from "../../public/coldCoffee.png";
import Samosa from "../../public/samosa.png";
import Greentea from "../../public/greentea1.png";
import burger1 from "../../public/burger1.png";
import burger3 from "../../public/burger3.png";

type Product = {
  id: number;
  title: string;
  desc: string;
  img: StaticImageData;
  price: number;
  options?: {
    title: string;
    additionalPrice: number;
  }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Margherita Pizza",
    desc: "Classic pizza topped with fresh tomatoes, mozzarella cheese, and aromatic herbs.",
    img: pizza1,
    price: 120,
    options: [
      { title: "Regular", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 40 },
      { title: "Large", additionalPrice: 80 },
    ],
  },
  {
    id: 2,
    title: "Farmhouse Pizza",
    desc: "Loaded with fresh capsicum, onions, tomatoes, and mushrooms on a cheesy base.",
    img: pizza2,
    price: 180,
    options: [
      { title: "Regular", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 40 },
      { title: "Large", additionalPrice: 80 },
    ],
  },
  {
    id: 3,
    title: "Cheese Burst Pizza",
    desc: "A cheesy delight with a rich, creamy cheese-filled crust in every bite.",
    img: pizza3,
    price: 220,
    options: [
      { title: "Regular", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 40 },
      { title: "Large", additionalPrice: 80 },
    ],
  },
  {
    id: 4,
    title: "Aloo Tikki Burger",
    desc: "A crispy spiced potato patty layered with fresh veggies and delicious sauces.",
    img: burger2,
    price: 220,
    options: [
      { title: "Regular", additionalPrice: 0 },
      { title: "Meal Combo", additionalPrice: 50 },
    ],
  },
  {
    id: 5,
    title: "Cold Coffee",
    desc: "A refreshing, chilled coffee with a smooth and creamy taste.",
    img: coldCoffee,
    price: 25,
  },
  {
    id: 6,
    title: "Green Tea",
    desc: "A light and soothing green tea with a refreshing herbal flavor.",
    img: Greentea,
    price: 20,
  },
  {
    id: 7,
    title: "Samosa",
    desc: "A crispy golden pastry filled with a flavorful, spiced potato mixture.",
    img: Samosa,
    price: 45,
    options: [
      { title: "1 Piece", additionalPrice: 0 },
      { title: "2 Pieces", additionalPrice: 35 },
    ],
  },
  {
    id: 8,
    title: "Garlic Bread",
    desc: "Toasted bread infused with aromatic garlic, butter, and savory herbs.",
    img: garlicbread,
    price: 80,
  },
  {
    id: 9,
    title: "Delite Burger",
    desc: "A delicious burger packed with a savory patty, crunchy veggies, and tasty sauces.",
    img: burger1,
    price: 70,
  },
  {
    id: 10,
    title: "Lite Burger",
    desc: "A simple, satisfying burger with a tasty patty, fresh veggies, and classic sauce.",
    img: burger3,
    price: 45,
  },
];

// Pizza category
export const pizzas: Products = featuredProducts.filter((product) =>
  product.title.toLowerCase().includes("pizza")
);

// Single product for the product details page
export const singleProduct: Product = featuredProducts[0];

// Menu categories
export type MenuItem = {
  id: number;
  slug: string;
  title: string;
  desc: string;
  img: StaticImageData;
  color: string;
};

export const menu: MenuItem[] = [
  {
    id: 1,
    slug: "pizzas",
    title: "Cheesy Pizzas",
    desc: "Enjoy delicious pizzas topped with fresh vegetables, rich sauces, and melted cheese.",
    img: pizza1,
    color: "white",
  },
  {
    id: 2,
    slug: "burgers",
    title: "Juicy Burgers",
    desc: "Bite into tasty burgers packed with savory patties, crunchy vegetables, and flavorful sauces.",
    img: burger1,
    color: "black",
  },
  {
    id: 3,
    slug: "snacks",
    title: "Snacks & Sides",
    desc: "Enjoy crispy samosas, buttery garlic bread, and delicious bites for every craving.",
    img: garlicbread,
    color: "white",
  },
  {
    id: 4,
    slug: "beverages",
    title: "Refreshing Beverages",
    desc: "Refresh yourself with creamy cold coffee and soothing green tea.",
    img: coldCoffee,
    color: "black",
  },
];

