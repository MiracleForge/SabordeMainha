"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '../../../../public/assets/images/Logo.png';
import toldo from '../../../../public/assets/images/img__toldo.png';

{/*React Icons*/}
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 768) {
            setIsOpen(false);
          }
        };     
        window.addEventListener('resize', handleResize);
      
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <nav className={`fixed w-full  shadow bg-primary z-20 ${isOpen ? 'open' : ''}`}>
            <div className=" px-4 md:px-6 mx-auto md:flex md:justify-between md:items-center  border-b-4 border-linebaseColor">
                <div className="flex items-center justify-between ">
                    <Link 
                        href={"/"} aria-label="Sabor de Mainha Home">                   
                        <Image
                            src={logo}
                            alt="Sabor de Mainha Logo"
                            className={`w-32 h-auto`}
                            />                 
                    </Link>

                    <div className="flex md:hidden text-secondary">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-secundary focus:outline-none focus:text-secundary "
                            aria-label="toggle menu"
                        >
                            <RxHamburgerMenu size='2em'/>
                        </button>
                    </div>
                </div>

                <div className={`absolute  inset-x-0 z-20 w-full px-6 justify-end transition-all bg-primary duration-300 ease-in-out md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center border-y-2 md:border-0 border-secondary ${isOpen ? 'translate-x-0 opacity-100 min-h-60' : 'opacity-0 -translate-x-full'}`}>
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <ul className="h-24 flex flex-col md:flex-row items-end md:items-center md:gap-6 lg:gap-12 font-lily-script text-fontColor1 text-2xl md:text-lg xl:text-3xl ">
                            <li className={`translate-y-0 hover:-translate-y-1 duration-300 ${isOpen ? 'w-full p-3 border-b-2 border-secondary border-dashed text-end' : 'w-auto p-0 border-b-0 '}`}>
                                <Link href={"/"}>
                                    Ínicio
                                </Link>
                            </li>
                            <div className="md:flex gap-[0.09rem]">
                                <span className={`h-20 border-tertiary border-dashed ${isOpen ? 'border-e-0' : 'border-e-[1px]'}`}></span>
                                <span className={`h-20 border-secondary border-dashed ${isOpen ? 'border-r-0' : 'border-r-[1px]'}`}></span>
                            </div>
                            <li className={`translate-y-0 hover:-translate-y-1 duration-300 ${isOpen ? 'w-full p-3 border-b-2 border-secondary border-dashed text-end' : 'w-auto p-0 border-b-0 '}`}>
                                <Link href={"/"}>
                                    Sobre Nós
                                </Link>
                            </li>
                            <div className="md:flex gap-[0.09rem]">
                                <span className={`h-20 border-tertiary border-dashed ${isOpen ? 'border-e-0' : 'border-e-[1px]'}`}></span>
                                <span className={`h-20 border-secondary border-dashed ${isOpen ? 'border-r-0' : 'border-r-[1px]'}`}></span>
                            </div>
                            <li className={`translate-y-0 hover:-translate-y-1 duration-300 ${isOpen ? 'w-full p-3 border-b-2 border-secondary border-dashed text-end' : 'w-auto p-0 border-b-0 '}`}>
                                <Link href={"/"}>
                                    Encomenda
                                </Link>
                            </li>
                            <div className="md:flex gap-[0.09rem]">
                                <span className={`h-20 border-tertiary border-dashed ${isOpen ? 'border-e-0' : 'border-e-[1px]'}`}></span>
                                <span className={`h-20 border-secondary border-dashed ${isOpen ? 'border-r-0' : 'border-r-[1px]'}`}></span>
                            </div>
                            <li className={`translate-y-0 hover:-translate-y-1 duration-300 ${isOpen ? 'w-full p-3 border-b-2 border-secondary border-dashed text-end' : 'w-auto p-0 border-b-0 '}`}>
                                <Link href={"/"}>
                                    Contato
                                </Link>
                            </li>
                        </ul>                       
                    </div>

                    <div className={` justify-center gap-4 text-white ${isOpen ? `hidden opacity-0`: `flex opacity-100 transition-opacity`}`}>
                        <Link href={'https://www.instagram.com/sabor.demainhaa/'} target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                            <FiInstagram className="text-2xl md:text-2xl lg:text-3xl" />
                        </Link>

                        <Link href={'https://www.instagram.com/sabor.demainhaa/'} target="_blank" aria-label="Whatsapp" rel="noopener noreferrer">
                            {/* NEED TO CHANGE THIS URL*/ }
                            <FaWhatsapp className="text-2xl md:text-2xl lg:text-3xl" />
                        </Link>
                    </div>
                </div>
            
            </div >
            <div className="w-full sm:w-full h-auto border-b-[.7rem]  md:border-b-[.5rem] lg:border-b-[.8rem] mt-1  border-secondary relative">     
            <Image 
                src={toldo} 
                alt="Toldo Nav Figure"
                className="absolute w-full mt-2 md:-mt-1 lg:-mt-2 -z-10"
            />
            </div>
        </nav>
    );
};

export default Navigation;
