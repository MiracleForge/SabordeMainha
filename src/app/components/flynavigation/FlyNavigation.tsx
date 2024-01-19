import React from 'react';
import Link from 'next/link';

function FlyNavigation() {
  return (
    <nav className='flex flex-row h-20 w-full font-lily-script text-fontColor2 justify-center items-start text-center gap-12 pt-48'>
        <Link href={'/'}className=' text-2xl translate-y-0 hover:-translate-y-1 duration-300'>
            Home
        </Link>
        <div className="flex ">
            <span className="h-10 border-tertiary border-dashed border-e-2"></span>
            <span className="h-10 border-secondary border-dashed border-r-2"></span>
        </div>

        <Link href={'#'}className='text-2xl translate-y-0 hover:-translate-y-1 duration-300'>
            Produtos
        </Link>
    </nav>
  )
}

export default FlyNavigation