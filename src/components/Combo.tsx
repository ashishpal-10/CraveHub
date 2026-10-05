import Image from 'next/image'
import React from 'react'
import Combo1 from "../../public/combo1.png"
import Combo2 from "../../public/combo2.png"

const Combo = () => {
  return (
    <div className='flex w-full p-8 flex-col lg:flex-row lg:px-30 md: gap-10 sm:flex-row'>
    
        {/* COntainer 1  */}
         <div className='flex-1 w-full  flex items-center justify-between flex-col-reverse md:flex-row p-2 shadow-md md:px-10 bg-red-200 rounded-2xl'>
            {/* Left  */}
            <div className="w-full flex flex-col p-4 mb-2">
                <h1 className='text-4xl font-medium md:text-4xl mb-3'>Flat 30% OFF</h1>
                <span className='text-2xl font-extralightlight md:text-2xl mb-3'>On Your First Order!</span>
                <p className='font-medium md:text-xl'>Use Code <span className='font-bold'>TASTY30</span> at Checkout and delicious rewards</p>

                <button className='px-6 py-3 w-fit bg-red-500 rounded-4xl mt-4 font-bold text-white'>Order Now →</button>
            </div>
                {/* Right  */}
            <div className=' h-full w-full bg-cover flex items-center justify-between'>
                <Image src={Combo1} alt='error' />
            </div>
        </div>

{/* Container 2 */}

        <div className='flex-1 w-full flex items-center justify-between flex-col-reverse md:flex-row p-2 shadow-md md:px-10 bg-green-200 rounded-2xl'>
            {/* L  */}
            <div className="w-full flex flex-col p-6 mb-2">
                <h1 className='text-3xl font-bold md:text-5xl mb-3 text-orange-300'>Family Combo Meal</h1>
                <span className='text-xl font-medium md:text-2xl mb-3 text-gray-600'>Feed your family with our special combo deals.</span>
                {/* <p className='font-medium md:text-xl'>Use Code <span className='font-bold'>TASTY30</span> at Checkout and delicious rewards</p> */}

                <button className='px-6 py-3 w-fit bg-red-500 rounded-4xl mt-4 font-bold text-white'>Order Now →</button>
            </div>
                {/* Right  */}
            <div className=' h-full w-full  object-cover flex items-center justify-between'>
                <Image src={Combo2} alt='error' />
            </div>
        </div>

    </div>
  )
}

export default Combo