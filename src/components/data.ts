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






type Card = {
  id: number;
  name: string;
  price: number;
  description:string,
  image: StaticImageData;
};
const cards: Card[] = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 120,
    description: "Classic pizza topped with fresh tomatoes, mozzarella cheese, and aromatic herbs.",
    image: pizza1,
  },
  {
    id: 2,
    name: "Farmhouse Pizza",
    price: 180,
    description: "Loaded with fresh capsicum, onions, tomatoes, and mushrooms on a cheesy base.",
    image: pizza2,
  },
  {
    id: 3,
    name: "Cheese Burst Pizza",
    price: 220,
    description: "A cheesy delight with a rich, creamy cheese-filled crust in every bite.",
    image: pizza3,
  },
  {
    id: 4,
    name: "Aloo Tikki Burger",
    price: 220,
    description: "A crispy spiced potato patty layered with fresh veggies and delicious sauces.",
    image: burger2,
  },
  {
    id: 5,
    name: "Cold Coffee",
    price: 25,
    description: "A refreshing, chilled coffee with a smooth and creamy taste.",
    image: coldCoffee,
  },
  {
    id: 6,
    name: "Green Tea",
    price: 20,
    description: "A light and soothing green tea with a refreshing herbal flavor.",
    image: Greentea,
  },
  {
    id: 7,
    name: "Samosa",
    price: 45,
    description: "A crispy golden pastry filled with a flavorful, spiced potato mixture.",
    image: Samosa,
  },
  {
    id: 8,
    name: "Garlic Bread",
    price: 80,
    description: "Toasted bread infused with aromatic garlic, butter, and savory herbs.",
    image: garlicbread,
  },
  {
    id: 9,
    name: "Delite Burger",
    price: 70,
    description: "A delicious burger packed with a savory patty, crunchy veggies, and tasty sauces.",
    image: burger1,
  },
  {
    id: 10,
    name: "Lite Burger",
    price: 45,
    description: "A simple, satisfying burger with a tasty patty, fresh veggies, and classic sauce.",
    image: burger3,
  },
];



export default cards;