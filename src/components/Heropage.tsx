"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import chef from "../../public/chef.png"
import pizza1 from "../../public/pizza1.png"
import burger1 from "../../public/burger1.png"


const Heropage = () => {

    const data = [

         {
    "id": 1,
    "title": "Flavors that speak louder than words!",
    "image": chef
  },
  {
    "id": 2,
    "title": "Midnight Cravings Conquered",
    "image": pizza1
  },
  {
    "id": 3,
    "title": "Cheat Day Champions",
    "image": burger1
  },
 
]

const [slide, currentSlide] = useState(0);

// useEffect(()=>{
// const interval = setInterval(
//     ()=>
//         currentSlide((prev)=>(prev === data.length-1 ? 0:prev+1)),3000);

//     return () => clearInterval(interval);
// },[]);

  return (
    <div className='flex flex-col mt-4  h-[calc(100vh-6rem)]  lg:flex-row gap-2 p-5'>
        {/* Text Div  */}
        <div className='flex-1 flex items-center justify-center flex-col  gap-6 lg:h-full'>
            <h1 className="text-5xl font-bold text-center md:text-10xl xl:text-7xl ">
                {/* Flavors that speak louder than words! */}
                {data[slide].title}
            </h1>

            <p className='px-2 text-2xl text-gray-700 mt-2 text-center'>Satisfy your cravings with top-rated local restaurants right at your doorstep.</p>

            <button className='px-3 py-2 rounded-2xl mt-4 font-medium text-white bg-red-500 hover:scale-x-50 cursor-pointer'>Order Now</button>
        </div>

        {/* Image div  */}
        <div className='w-full flex-1 relative lg:h-full'>
            <Image src={data[slide].image} alt='error' className='w-full h-full' />
        </div>
    </div>
  )
}

export default Heropage