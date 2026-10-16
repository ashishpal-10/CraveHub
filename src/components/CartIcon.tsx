"use client";

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import cartbag from "../../public/shoppingcart.svg"
import { useCart } from "./cartStore"

const CartIcon = () => {
  const { items } = useCart();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link href="/cart" className='flex items-center justify-center gap-2'>
    <div className='relative w-12 h-10 '>
        <Image src={cartbag} alt='error'width={20} height={20} />
    </div>
    <span>cart({count})</span>
    </Link>
  )
}

export default CartIcon
