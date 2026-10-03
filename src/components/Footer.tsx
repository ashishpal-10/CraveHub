import Link from 'next/link'
import React from 'react'

const FooterPage = () => {
  return (
    <div className='h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between'>
      <Link href="/" className='font-bold uppercase text-xl'>CraveHub</Link>
      <p>© ALL RIGHTS RESERVED</p>
    </div>
  )
}

export default FooterPage