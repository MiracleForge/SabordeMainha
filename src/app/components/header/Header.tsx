"use client"
import { useState } from "react";
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

    return (
        <nav className={`fixed w-full  shadow bg-primary ${isOpen ? 'open' : ''}`}>
            <div className=" px-4 md:px-6 py-1 mx-auto md:flex md:justify-between md:items-center  border-b-4 border-linebaseColor">
                <div className="flex items-center justify-between ">
                    <Link 
                        href={"/"}>                   
                        <Image
                            src={logo}
                            alt="Sabor de Mainha Logo"
                            className={`w-24 h-auto`}
                            />                 
                    </Link>

                    <div className="flex md:hidden">
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

                <div className={`absolute  inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}>
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <ul className=" flex flex-col md:flex-row md:gap-6 lg:gap-12 items-center h-24  font-lily-script text-fontColor1 text-2xl md:text-lg xl:text-3xl ">
                            <li className="translate-y-0 hover:-translate-y-1 duration-300">
                                <Link href={"/"} className="">
                                    Ínicio
                                </Link>
                            </li>
                            <div className="flex gap-[0.09rem]">
                                <span className="h-20 border-e-[1px] border-tertiary border-dashed"></span>
                                <span className="h-20 border-r-[1px] border-secondary border-dashed"></span>
                            </div>
                            <li className="translate-y-0 hover:-translate-y-1 duration-300">
                                <Link href={"/"}>
                                    Sobre Nós
                                </Link>
                            </li>
                            <div className="flex gap-[0.09rem]">
                                <span className="h-20 border-e-[1px] border-tertiary border-dashed"></span>
                                <span className="h-20 border-r-[1px] border-secondary border-dashed"></span>
                            </div>
                            <li className="translate-y-0 hover:-translate-y-1 duration-300">
                                <Link href={"/"}>
                                    Encomenda
                                </Link>
                            </li>
                            <div className="flex gap-[0.09rem]">
                                <span className="h-20 border-e-[1px] border-tertiary border-dashed"></span>
                                <span className="h-20 border-r-[1px] border-secondary border-dashed"></span>
                            </div>
                            <li className="translate-y-0 hover:-translate-y-1 duration-300">
                                <Link href={"/"}>
                                    Contato
                                </Link>
                            </li>
                        </ul>                       
                    </div>

                    <div className="flex justify-center gap-2 text-white">
                        <Link href={'https://www.instagram.com/sabor.demainhaa/'} target="_blank">
                            <FiInstagram className="text-2xl md:text-2xl lg:text-3xl" />
                        </Link>

                        <Link href={'https://www.instagram.com/sabor.demainhaa/'} target="_blank">
                            {/* NEED TO CHANGE THIS URL*/ }
                            <FaWhatsapp className="text-2xl md:text-2xl lg:text-3xl" />
                        </Link>
                    </div>


                </div>

                {/* Styles borders */}
            
            </div >
            <div className="w-full sm:w-full h-auto border-b-[.7rem]  md:border-b-[.5rem] lg:border-b-[.8rem] mt-1  border-secondary relative">     
            <Image 
                src={toldo} 
                alt="Toldo Nav Figure"
                width={400}
                height={400}
                className="absolute  w-full mt-2 md:-mt-1 lg:-mt-2 -z-10"
            />
            </div>
        </nav>
    );
};

export default Navigation;
