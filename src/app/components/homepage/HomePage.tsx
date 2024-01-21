import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { GiStairsCake } from "react-icons/gi";
import { RiCake3Fill } from "react-icons/ri";
import { FaBirthdayCake } from "react-icons/fa";
import Ribbon from '@/app/components/ribbon/Ribbon';

const HomePage = () => {
  return (
    <>
        <section className='grid grid-cols-3 w-screen justify-center items-center text-center font-lily-script pt-10 ml-20'>
        <Link href={'#'} className='w-3/5 h-auto mx-20 rounded-3xl backdrop-blur-md bg-primary shadow-inner shadow-fontColor2 text-center group '>
          <div className=' m-2 border-2 border-white rounded-3xl flex flex-col items-center gap-3 relative'>
          <span className='rounded-3xl absolute w-full h-full bg-confetsGold bg-cover opacity-60 -z-10'></span>
            <h2 className='mt-2 text-5xl text-white'><span className='text-fontColor1'>Bolos</span> <br />Tradicionais</h2>
            <small className='text-2xl text-footer/60'>Veja todos</small>
            <GiStairsCake size='3rem' className='group-hover:animate-bounce text-quartenary'/>
          </div>
        </Link>
        <Link href={'#'} className='w-3/4 h-auto rounded-3xl backdrop-blur-md bg-linebaseColor/90 shadow-inner shadow-fontColor2 text-center group '>
          <div className=' m-2 border-2 border-white rounded-3xl flex flex-col items-center gap-3 relative'>
            <span className='rounded-3xl absolute w-full h-full bg-confetsCupeCake bg-cover opacity-40 -z-10'></span>
            <h2 className='mt-2 text-5xl text-white'><span className='text-quartenary'>CupCakes</span><br />& Confeitaria</h2>
            <small className='text-2xl text-footer/60'>Veja todos</small>
            <RiCake3Fill size='3rem' className='group-hover:animate-bounce duration-30 text-quartenary'/>
          </div>
        </Link>
        <Link href={'#'} className='w-3/5 h-auto rounded-3xl backdrop-blur-md bg-primary shadow-inner shadow-fontColor2 text-center group '>
          <div className=' m-2 border-2 border-white rounded-3xl flex flex-col items-center gap-3 relative'>
          <span className='rounded-3xl absolute w-full h-full bg-confets bg-cover opacity-60 -z-10'></span>
            <h2 className='mt-2 text-5xl text-white'><span className='text-fontColor1'>Bolos</span> <br />Aniversários</h2>
            <small className='text-2xl text-footer/60'>Veja todos</small>
            <FaBirthdayCake size='3rem' className='group-hover:animate-bounce text-quartenary'/>
          </div>
        </Link>
          </section>
        
          <div className='h-screen w-screen bg-cookieMain bg-cookieMain-small md:bg-cookieMain-medium lg:bg-cookieMain-large mt-20 bg-repeat-space'>
          <Ribbon ribbonText="Produtos" altText="Produtos"/>
        
        
        
          </div>
    </>
  )
}

export default HomePage