import React from 'react'
import Link from 'next/link';
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
<footer className="bg-footer text-white">
    <div className=" flex flex-col items-center justify-between p-6  mx-auto space-y-4 sm:space-y-0 sm:flex-row border-t-8 border-secondary">
        <p className="text-sm md:text-lg lg:text-2xl  ">© Copyright 2024. All Rights Reserved.</p>
        <div className='flex flex-row md:gap-6 lg:gap-6 w-auto'>
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
                <h2 className='hidden md:block  py-2 lg:text-2xl md:text-base  font-lily-script w-full'>Redes Sociais</h2>
                <div className='flex md:flex-row'>
                    <Link href="#"
                    className="mx-2 " aria-label="Instagram">
                    <FiInstagram size='1.5rem'/>
                    </Link>
                    <Link href="#"
                    className="mx-2 " aria-label="Whatsapp">
                    <FaWhatsapp size='1.5rem'/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer