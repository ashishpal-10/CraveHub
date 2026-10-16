import React, { useEffect, useState } from "react";

type props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};
const Price = ({ price, id, options }: props) => {
  const [total, setTotal] = useState(price);
  const [quantity,setQuantity] = useState(1);
  const [selected,setSelected] = useState(0);

  useEffect(()=>{
    setTotal(
      quantity*(options ? price+options[selected].additionalPrice :price)
    )
  },[quantity,selected,options,price])

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total}</h2>

      {/* Option Container  */}
      <div className="flex gap-4">
        {options?.map((option,index) => (
          <button
            key={option.title}
            className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md font-semibold"
            style={{background: selected === index ? "rgb(248 113 113)" : "white",
              color: selected === index ? "white" : "red",
            }}
            onClick={()=>setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>

      {/* Quantity Container  */}
      <div className="flex justify-between items-center">
        <div className="flex justify-between w-full p-3 ring-1 ring-red-400">
          <span>Quantity</span>
          <div className="flex gap-2">
            <button
           onClick={()=> setQuantity((prev)=>(prev>1 ? prev-1 :1))} >{"<"}</button>
            <span>{quantity}</span>
            <button
            onClick={()=> setQuantity((prev)=>(prev<10 ? prev+1 :10))}>{">"}</button>
          </div>
        </div>
        <button className="bg-red-500 text-white p-3 w-45  font-bold">Add to Cart</button>
      </div>
    </div>
  );
};

export default Price;
