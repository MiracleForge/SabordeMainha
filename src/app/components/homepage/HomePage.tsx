import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { GiStairsCake } from "react-icons/gi";
import { RiCake3Fill } from "react-icons/ri";
import { FaBirthdayCake } from "react-icons/fa";
import Ribbon from '@/app/components/ribbon/Ribbon';
import product01 from '../../../../public/assets/images/produtos/product01.jpg';
import product02 from '../../../../public/assets/images/produtos/product02.jpg';
import product03 from '../../../../public/assets/images/produtos/product03.jpg';
import produtosImg from '../../../../public/assets/images/produtos/beijinho.png';


const HomePage = () => {
  return (
    <>
        <section className='flex w-full justify-center items-center text-center font-lily-script pt-10 gap-4 md:gap-10 lg:gap-20 px-10 lg:px-32'>
        <Link href={'/errors/Error404'} className='w-3/4 lg:w-3/5 h-auto rounded-3xl backdrop-blur-md bg-primary shadow-inner shadow-fontColor2 text-center group '>
          <div className=' m-2 border-2 border-white rounded-3xl flex flex-col items-center gap-3 relative'>
          <span className='rounded-3xl absolute w-full h-full bg-confetsGold bg-cover opacity-60 -z-10'></span>
            <h2 className='mt-2 text-base md:text-4xl lg:text-5xl text-white px-2 md:px-6'><span className='text-fontColor1'>Bolos</span> <br />Tradicionais</h2>
            <small className='text-2xl text-footer/60'>Veja todos</small>
            <GiStairsCake size='3rem' className='mb-2 md:mb-0 group-hover:animate-bounce text-quartenary'/>
          </div>
        </Link>
        <Link href={'/errors/Error404'} className='w-2/3 lg:w-3/4 h-auto rounded-3xl  backdrop-blur-md bg-linebaseColor/90 shadow-inner shadow-fontColor2 text-center group '>
          <div className=' m-2 border-2 border-white rounded-3xl flex flex-col items-center gap-3 relative'>
            <span className='rounded-3xl absolute w-full h-full bg-confetsCupeCake bg-cover opacity-40 -z-10'></span>
            <h2 className='mt-2 text-base md:text-4xl lg:text-5xl text-white px-2 md:px-6'><span className='text-quartenary'>CupCakes</span><br />& Confeitaria</h2>
            <small className='text-2xl text-footer/60'>Veja todos</small>
            <RiCake3Fill size='3rem' className='group-hover:animate-bounce duration-30 text-quartenary'/>
          </div>
        </Link>
        <Link href={'/errors/Error404'} className='w-3/4 lg:w-3/5 h-auto rounded-3xl  backdrop-blur-md bg-primary shadow-inner shadow-fontColor2 text-center group '>
          <div className=' m-2 border-2 border-white rounded-3xl flex flex-col items-center gap-3 relative'>
          <span className='rounded-3xl absolute w-full h-full bg-confets bg-cover opacity-60 -z-10'></span>
            <h2 className='mt-2 text-base md:text-4xl lg:text-5xl text-white px-2 md:px-6'><span className='text-fontColor1'>Bolos</span> <br />Aniversários</h2>
            <small className='text-2xl text-footer/60'>Veja todos</small>
            <FaBirthdayCake size='3rem' className='mb-2 mb:mb-0 group-hover:animate-bounce text-quartenary'/>
          </div>
        </Link>
          </section>
        
          <section className='h-screen w-full bg-cookieMain bg-cookieMain-small md:bg-cookieMain-medium lg:bg-cookieMain-large mt-10 md:mt-20 bg-repeat-space'>
            <Ribbon ribbonText="Produtos" altText="Produtos"/>
            <div className='grid grid-cols-3 p-20 gap-6'>
                <div className='w-full border-r-4 border-dashed bg-white/80 border-red-600 p-10'>
                  <figure>
                    <Image src={product01} alt='produtos' className='w-full h-auto '/>
                  </figure>
                  <div>
                  </div>
                  <div>
                  </div>
                </div>
                <div className='w-full border-r-4 border-dashed border-red-600 p-10 bg-white/80'>
                  <figure>
                    <Image src={product02} alt='produtos' className='w-full h-auto'/>
                  </figure>
                  <div>
                  </div>
                  <div>
                  </div>
                </div>
                <div className='w-full border-r-4 border-dashed  border-red-600 p-10 bg-white/80'>
                  <figure>
                    <Image src={product03} alt='produtos' className='w-full h-auto'/>
                  </figure>
                  <div>
                  </div>
                  <div>
                  </div>
                </div>
            </div>
          </section>
    </>
  )
}

export default HomePage