"use client"
import React from 'react';
import Image from 'next/image';
import BannerImg from '../../../../public/assets/images/Banner.png';
import Toldo from '../toldo/Toldo';

const Banner = () => {

  return (
<>
  <div className='w-full h-5 md:h-7 lg:h-10 bg-contain bg-cookie bg-repeat-x'></div>
  <figure className='pt-2 pb-3 md:pb-6 bg-primary  relative z-10'>
    <span className='absolute h-full w-full bg-gradient-to-b from-white/55 via-white/40 to-white/5'></span>
    <Image
      src={BannerImg}
      alt='Banner'
      className='w-full h-full object-cover'
      priority={false}
    />
  </figure>
    <Toldo/>
</>

  );
};

export default Banner;
