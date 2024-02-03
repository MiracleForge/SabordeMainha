import React from 'react';
import toldo from '../../../../public/assets/images/img__toldo.png';
import Image from 'next/image';

const Toldo = () => {
  return (
    <>
      <div className="w-full sm:w-full h-auto border-b-[.3rem]  md:border-b-[.5rem] lg:border-b-[.5rem]  bg-primary border-secondary relative z-10  border-t-4 border-t-linebaseColor pt-1"></div>
      <Image
        src={toldo}
        alt="Toldo Nav Figure"
        className="absolute w-full  -mt-2 md:-mt-2 lg:-mt-3 xl:-mt-4 z-0"
        />
    </>
  )
}

export default Toldo