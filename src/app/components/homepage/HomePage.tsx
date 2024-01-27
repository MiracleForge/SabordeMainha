import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { GiStairsCake } from "react-icons/gi";
import { RiCake3Fill } from "react-icons/ri";
import { FaBirthdayCake } from "react-icons/fa";
import Ribbon from '@/app/components/ribbon/Ribbon';
import dataProdutucs from '../../../../public/assets/data/produtos.json';

const HomePage = () => {

  return (
    <>
        <section className='flex w-full justify-center items-center text-center font-lily-script pt-10 gap-4  lg:gap-20 px-10 lg:px-32'>
        <Link href={'/errors/Error404'} className='w-3/4 lg:w-3/5 h-auto rounded-3xl backdrop-blur-md bg-primary shadow-inner shadow-fontColor2 text-center group transition-all hover:transform hover:scale-105 duration-300'>
          <div className=' m-2 border-2 border-white rounded-3xl flex flex-col items-center gap-3 relative'>
          <span className='rounded-3xl absolute w-full h-full bg-confetsGold bg-cover opacity-60 -z-10'></span>
            <h2 className='mt-2 text-base md:text-4xl lg:text-5xl text-white px-2 md:px-6'><span className='text-fontColor1'>Bolos</span> <br />Tradicionais</h2>
            <small className='text-2xl text-footer/60'>Veja todos</small>
            <GiStairsCake size='3rem' className='mb-2 md:mb-0 group-hover:animate-bounce text-quartenary'/>
          </div>
        </Link>
        <Link href={'/errors/Error404'} className='w-2/3 lg:w-3/4 h-auto rounded-3xl  backdrop-blur-md bg-linebaseColor/90 shadow-inner shadow-fontColor2 text-center group transition-all hover:transform hover:scale-105 duration-300'>
          <div className=' m-2 border-2 border-white rounded-3xl flex flex-col items-center gap-3 relative'>
            <span className='rounded-3xl absolute w-full h-full bg-confetsCupeCake bg-cover opacity-40 -z-10'></span>
            <h2 className='mt-2 text-base md:text-4xl lg:text-5xl text-white px-2 md:px-6'><span className='text-quartenary'>CupCakes</span><br />& Confeitaria</h2>
            <small className='text-2xl text-footer/60'>Veja todos</small>
            <RiCake3Fill size='3rem' className='group-hover:animate-bounce duration-30 text-quartenary'/>
          </div>
        </Link>
        <Link href={'/errors/Error404'} className='w-3/4 lg:w-3/5 h-auto rounded-3xl  backdrop-blur-md bg-primary shadow-inner shadow-fontColor2 text-center group transition-all hover:transform hover:scale-105 duration-300'>
          <div className=' m-2 border-2 border-white rounded-3xl flex flex-col items-center gap-3 relative'>
          <span className='rounded-3xl absolute w-full h-full bg-confets bg-cover opacity-60 -z-10'></span>
            <h2 className='mt-2 text-base md:text-4xl lg:text-5xl text-white px-2 md:px-6'><span className='text-fontColor1'>Bolos</span> <br />Aniversários</h2>
            <small className='text-2xl text-footer/60'>Veja todos</small>
            <FaBirthdayCake size='3rem' className='mb-2 mb:mb-0 group-hover:animate-bounce text-quartenary'/>
          </div>
        </Link>
          </section>
        
          <section className='h-auto w-full bg-cookieMain bg-cookieMain-small md:bg-cookieMain-medium lg:bg-cookieMain-large mt-10 md:mt-20 mb-10 bg-repeat-space'>
            <Ribbon ribbonText="Mais Populares" altText="Mais Populares"/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  p-5 md:p-10 gap-3 md:gap-10 lg:gap-20 font-lily-script'>
            {
              dataProdutucs &&
                dataProdutucs
                  .sort((a, b) => b.visualization - a.visualization)
                  .slice(0, 6)
                  .map((data) => {
                    return (
                      <div
                        key={data.id}
                        className='bg-white rounded-none md:rounded-3xl border-primary px-1 transition-all hover:transform hover:scale-105 duration-300 hover:shadow-xl group'
                      >
                        <div className='w-full border-secondary p-5 md:p-10 text-center'>
                          <Link href={'/errors/Error404'} >
                            <figure className='flex flex-col gap-2 justify-center items-center text-center'>
                              <Image
                                src={data.image}
                                width={500}
                                height={500}
                                alt={data.image_alt}
                                className='w-full h-60 object-cover rounded-t-lg'
                              />
                              <small className='text-2xl font-bold text-footer/80 mt-6'>{data.name}</small>
                              <p className='text-lg text-fontColor2'>{data.description}</p>
                              <p className='text-2xl font-semibold text-footer/80'> R$ {data.cost}</p>
                            </figure>
                          </Link>
                         </div>
                      </div>
                    );
                  })
              }
            </div>
          </section>
    </>
  )
}

export default HomePage

