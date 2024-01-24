import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import SonnenLogo from '../../../../public/assets/images/SonnenLogo.png';
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
<footer className="bg-footer text-white w-full" id='final'>
    <div className=" flex flex-col items-center justify-between p-3  mx-auto space-y-4 sm:space-y-0 sm:flex-row border-t-8 border-secondary">
            <div className='mx-0 flex items-center flex-col lg:flex-row '>
                <Image src={SonnenLogo} alt='Sonnen Software' className='w-40 md:w-20 lg:w-40'/>
                <p className='text-sm  sm:ml-4 sm:pl-4 lg:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>2024 | Made By Sonnen Software -&nbsp;</p>
                <Link href="https://www.sonnensoftware.com" aria-label='Sonnen Software' rel="noopener" target='_blank' className='text-sm mt-1'>
                    @SonnenSoftware
                </Link>
            </div>
        <div className='flex flex-row md:gap-6 lg:gap-6 '>
            <div className='flex-col hidden md:block text-center '>
                <h2 className=' py-2 lg:text-2xl md:text-lg font-lily-script'>Atendimento</h2>
                <p className='font-montserrat text-base'>Contato: email@hotmail.com</p>
                <p className='font-montserrat text-base'>Tel: (71) 9999-999</p>
            </div>
            <div className="hidden md:flex ">
                <span className="h-24 border-tertiary border-dashed border-e-[1px]"></span>
                <span className="h-24 border-secondary border-dashed'border-r-[1px]"></span>
            </div>
            <div className="flex md:mx-0 lg:mx-4  md:flex-col md:items-center text-center ">
                <h2 className='hidden md:block  py-2 lg:text-2xl md:text-base  font-lily-script md:w-40'>Redes Sociais</h2>
                <div className='flex md:flex-row'>
                    <Link href="https://www.instagram.com/sabor.demainhaa/" target='_blank' rel="noopener noreferrer"
                    className="mx-2 " aria-label="Instagram">
                        <FiInstagram size='2rem'/>
                    </Link>
                    <Link href="#" target='_blank' rel="noopener noreferrer"
                    className="mx-2 " aria-label="Whatsapp">
                        <FaWhatsapp size='2rem'/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer