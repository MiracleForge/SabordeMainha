"use client"
import React from 'react';
import Image from 'next/image';
import BannerImg from '../../../../public/assets/images/Banner.png';
import toldo from '../../../../public/assets/images/img__toldo.png';

const Banner = () => {

  return (
<>
  <div className='w-full h-5 md:h-7 lg:h-10 bg-contain bg-cookie bg-repeat-x'></div>
  <figure className='pt-2 pb-3 md:pb-6 bg-primary border-b-4 border-linebaseColor relative z-10'>
    <span className='absolute h-full w-full bg-gradient-to-b from-white/55 via-white/40 to-white/5'></span>
    <Image
      src={BannerImg}
      alt='Banner'
      className='w-full h-full object-cover'
      priority={false}
    />
  </figure>
  <div className="w-full sm:w-full h-auto border-b-[.3rem]  md:border-b-[.5rem] lg:border-b-[.5rem] pt-1 bg-primary border-secondary relative z-10"></div>
    <Image
      src={toldo}
      alt="Toldo Nav Figure"
      className="absolute w-full  -mt-2 md:-mt-2 lg:-mt-3 xl:-mt-5 z-0"
    />
</>

  );
};

export default Banner;
