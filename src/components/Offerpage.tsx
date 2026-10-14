import React from 'react'
import offerimg from "../../public/combo2.png"
import Image from 'next/image'
import CountDown from './Countdown'

const Offerpage = () => {
  return (
    <div className='bg-red-400 md:h-[70vh] xl:h-[85vh] md:m-10 flex flex-col md:flex-row md:justify-between rounded-xl'>
      {/* textCOntainer */}
      <div className="flex-1 flex flex-col items-center justify-center text-center mt-4 gap-8 p-6 ">
        <h1 className='text-white text-4xl font-bold md:text-7xl'>Mega Offer for New Year </h1>
        <p className='text-white text-xl xl:text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, minus!</p>

        <CountDown/>
        <button className='px-6 py-3 bg-red-500 rounded-2xl text-white font-bold hover:scale-105 '>Order Now</button>


      </div>
      {/* image COnatiner  */}
      <div className="flex-1 relative w-full h-screen xl:px-8  lg:px-14 ">
        <Image src={offerimg} alt='error' className=' object-contain md:p-6 md:px-8 xl:p-15 '/>
      </div>
    </div>
  )
}

export default Offerpage 