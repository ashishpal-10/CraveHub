import Image, { StaticImageData } from "next/image";
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

  {
    id:9,
    name:"Delite burger",
    price:70,
    image:burger1
  },

  {
    id:10,
    name:"Lite Burger",
    price:45,
    image:burger3,
  }
];



export default cards;