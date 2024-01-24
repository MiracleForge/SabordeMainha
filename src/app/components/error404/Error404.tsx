import React from 'react'
import Image from 'next/image'
import Logo from '../../../../public/assets/images/Logo.png';

const Error404 = () => {
    return (
      <main className='h-auto w-full py-28 bg-backColor flex flex-col items-center justify-center text-center bg-quartenary'>
        <h1 className='text-7xl font-montserrat text-white'>Página em Construção</h1>
        <Image
          src={Logo}
          alt='Logo Sabor de Mainha'
          width={800}
          height={800}
        />
      </main>
    );
  };
  
  export default Error404;
  