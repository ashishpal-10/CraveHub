import React from 'react'
import offerimg from "../../public/combo2.png"
import Image from 'next/image'

const Offerpage = () => {
  return (
    <div className='bg-red-400 p-5 flex flex-col md:flex-row'>
      {/* textCOntainer */}
      <div className="flex-1 flex flex-col items-center justify-center text-center mt-4 gap-8 p-6 ">
        <h1 className='text-white text-3xl font-bold md:text-6xl'>Mega Offer for New Year </h1>
        <p className='text-white xl:text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, minus!</p>

        <button className='px-6 py-3 bg-red-500 rounded-2xl text-white font-bold hover:scale-1 '>Order Now</button>
      </div>
      {/* image COnatiner  */}
      <div className="flex-1 relative w-full ">
        <Image src={offerimg} alt='error' className='object-contain p-8'/>
      </div>
    </div>
  )
}

export default Offerpage 