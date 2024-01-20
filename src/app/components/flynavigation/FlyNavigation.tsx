import React from 'react';
import Link from 'next/link';
import { useEffect } from 'react';

function FlyNavigation() {

  return (
    <nav className='flex flex-row h-24 w-full font-lily-script text-fontColor2 justify-center items-center text-center gap-10 pt-48 lg:pt-56 text-2xl md:text-3xl lg:text-4xl'>
        <Link href={'/'}className=' translate-y-0 hover:-translate-y-1 duration-300'>
            Home
        </Link>
        <div className="flex h-full items-center">
            <span className="h-14 border-tertiary border-dashed border-e-[1px]"></span>
            <span className="h-14 border-secondary border-dashed border-r-[1px]"></span>
        </div>

        <Link href={'#'}className='l translate-y-0 hover:-translate-y-1 duration-300'>
            Produtos
        </Link>
    </nav>
  )
}

export default FlyNavigation