
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import cartbag from "../../public/shoppingcart.svg"

const CartIcon = () => {
  return (
    <Link href="/cart" className='flex items-center justify-center gap-2'>
    <div className='relative w-12 h-10 '>
        <Image src={cartbag} alt='error'width={20} height={20} />
    </div>
    <span>cart(3)</span>
    </Link>
  )
}

export default CartIcon