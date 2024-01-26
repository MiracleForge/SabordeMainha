import React from 'react';
import Image from 'next/image';
import RibbonImg from '../../../../public/assets/images/ribbon.png';

interface RibbonProps {
  ribbonText: string;
  altText: string;
}

const Ribbon: React.FC<RibbonProps> = ({ ribbonText, altText }) => {
  return (
    <figure className='relative flex justify-center items-center text-center'>
      <Image src={RibbonImg} alt={altText} className='w-[90%] md:w-[80%] lg:w-1/2 mx-auto h-auto' />
      <h2 className='absolute bottom-3 left-0 right-0 text-white font-lily-script text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>{ribbonText}</h2>
    </figure>
  );
}

export default Ribbon;
