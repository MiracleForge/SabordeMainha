"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState, FormEvent } from 'react';
import Ribbon from '@/app/components/ribbon/Ribbon';
import product01 from '../../../../public/assets/images/produtos/product01.jpg';
import product02 from '../../../../public/assets/images/produtos/product02.jpg';
import product03 from '../../../../public/assets/images/produtos/product03.jpg';
import { IoSearch } from "react-icons/io5";
import { LuArrowDownUp } from "react-icons/lu";
import { LuFilter } from "react-icons/lu";

const Catalogo = () => {

  const [spin, setSpin] = useState(false);
  const [isOrderByOpen, setIsOrderByOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const handleSearchSubmit = () => {
    // Lógica para o envio do formulário, TODO
    setSpin(true);
  };
  
  const handleSearchClick = () => {
    handleSearchSubmit();
  };
  
  const toggleDropdown = (
    dropdownState: boolean,
    setDropdownState: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    closeDropdowns();
    setDropdownState(!dropdownState);
  };
  
  const closeDropdowns = () => {
    setIsOrderByOpen(false);
    setIsFilterOpen(false);
  };
  
  const handleMenuItemClick = (item: string) => {
    console.log(`Cliquei em: ${item}`);
    handleSearchSubmit();
    closeDropdowns();
  };
  return (
    <main className='bg-quartenary'>
      <Ribbon ribbonText="Catálogo" altText="Catalogo de Produtos"/>


    <div className='flex flex-col md:flex-row p-4 mt-10 gap-5 md:gap-10'>
      <div className='flex flex-row'>
        <form
          onSubmit={handleSearchSubmit}
          className='flex gap-4 p-3 mx-auto md:p-3 lg:p-6 bg-white/40 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 hover:cursor-pointer'
        >
          <input
            type="text"
            id='Search'
            placeholder='Pesquisar Produtos...'
            className='bg-white/30'
          />
          <IoSearch
            size='1.5rem'
            className={spin ? 'animate-spin' : ''}
            onClick={handleSearchClick}
          />
        </form>
      </div>

      {/* Dropdown para "Ordenar Por" */}
      <div className='flex flex-row md:gap-12 md:justify-end w-full'>
        <div className='inline-block md:flex relative ml-auto'>
          <button
              onClick={() => toggleDropdown(isOrderByOpen, setIsOrderByOpen)}
            className='flex items-center px-2 py-1 bg-white/40 border border-transparent rounded-md  focus:border-blue-500 focus:ring-opacity-40  focus:ring-blue-300 focus:ring focus:outline-none'
          >
            <LuArrowDownUp size='1.5rem' className='mr-1' />
            <h3 className='font-montserrat font-medium'>Ordenar Por</h3>
          </button>
          {isOrderByOpen && (
            <div
              className='absolute right-0 z-20 mt-2 w-48 bg-white rounded-md shadow-xl '
              onClick={closeDropdowns}
            >
              <button
                onClick={() => handleMenuItemClick('Ordem Alphabética')}
                className='w-full block px-4 py-3 text-sm text-gray-600 text-left capitalize transition-colors duration-300 transform  hover:bg-gray-100'
              >
                Ordem Alphabética
              </button>
              <button
                onClick={() => handleMenuItemClick('Maior Preço')}
                className='w-full block px-4 py-3 text-sm text-gray-600 text-left capitalize transition-colors duration-300 transform  hover:bg-gray-100'
              >
                Menor Preço
              </button>
              <button
                onClick={() => handleMenuItemClick('Maior Preço')}
                className='w-full block px-4 py-3 text-sm text-gray-600 text-left capitalize transition-colors duration-300 transform  hover:bg-gray-100'
              >
                Maior Preço
              </button>
              {/* Adicione mais itens do menu conforme necessário */}
            </div>
          )}
        </div>
        {/* Dropdown para "Filtro" */}
        <div className='flex md:justify-end mx-auto md:mx-2 md:mr-6 pb-6 md:pb-0'>
          <button
            onClick={() => toggleDropdown(isFilterOpen, setIsFilterOpen)}
            className='flex items-center px-2 py-1 bg-white/40 border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40  focus:ring-blue-300 focus:outline-none'
          >
            <LuFilter size='1.5rem' className='mr-1' />
            <h3 className='font-montserrat font-medium'>Filtrar Por</h3>
          </button>
          {isFilterOpen && (
            <div
              className='absolute right-0 z-20 mt-2 w-48 bg-white rounded-md shadow-xl '
              onClick={closeDropdowns}
            >
              <button
                onClick={() => handleMenuItemClick('Option 1')}
                className='w-full block px-4 py-3 text-sm text-gray-600 text-left capitalize transition-colors duration-300 transform 00 hover:bg-gray-100'
              >
                Option 1
              </button>
              <button
                onClick={() => handleMenuItemClick('Option 2')}
                className='w-full block px-4 py-3 text-sm text-gray-600 text-left capitalize transition-colors duration-300 transform 00 hover:bg-gray-100 '
              >
                Option 2
              </button>
              {/* Adicione mais itens do menu conforme necessário */}
            </div>
          )}
        </div>
      </div>
   

      </div>


      <div className='flex flex-row justify-between items-start '>
        <aside className='hidden md:flex flex-col gap-6 p-10 pt-28 md:pt-5 font-lily-script text-2xl text-footer/80 border w-1/5 md:w-1/3 lg:w-1/5'>
          <Link href={'#'} className='border-b-2 border-secondary border-dashed pb-3 text-center '>
            <h3 className='translate-y-0 hover:-translate-y-2 transition-transform duration-700'>Bolos</h3>
          </Link>
          <Link href={'#'} className='border-b-2 border-secondary border-dashed pb-3 text-center '>
            <h3 className='translate-y-0 hover:-translate-y-2 transition-transform duration-700'>Salgados</h3>
          </Link>
          <Link href={'#'} className='border-b-2 border-secondary border-dashed pb-3 text-center '>
            <h3 className='translate-y-0 hover:-translate-y-2 transition-transform duration-700'>Doces</h3>
          </Link>
          <Link href={'#'} className='border-b-2 border-secondary border-dashed pb-3 text-center '>
            <h3 className='translate-y-0 hover:-translate-y-2 transition-transform duration-700'>Cupcakes</h3>
          </Link>
          <Link href={'#'} className='border-b-2 border-secondary border-dashed pb-3 text-center '>
            <h3 className='translate-y-0 hover:-translate-y-2 transition-transform duration-700'>Aniversários</h3>
          </Link>
          <Link href={'#'} className='border-b-2 border-secondary border-dashed pb-3 text-center '>
           <h3 className='translate-y-0 hover:-translate-y-2 transition-transform duration-700'>Kits</h3>
          </Link>
        </aside>

        <section className='h-auto bg-cookieMain bg-cookieMain-small md:bg-cookieMain-medium lg:bg-cookieMain-large pt-5 lg:pt-8 md:pt-5 mb-10 bg-repeat-space '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 md:px-5 lg:px-10  gap-0 md:gap-5 lg:gap-20 font-lily-script '>
            <div className=' bg-white rounded-none md:rounded-3xl border-primary px-1 transition-all hover:transform hover:scale-105 duration-300 hover:shadow-xl group'>
              <div className='w-full  border-secondary p-10 md:p-5 text-center'>
                <Link href={'/errors/Error404'}>
                  <figure className='flex flex-col gap-2 justify-center items-center text-center'>
                    <Image src={product01} alt='produtos' className='w-full h-auto  rounded-t-lg'/>
                    <small className='text-2xl font-bold text-footer/80 mt-6'>Pavê de chocolate</small>
                    <p className='text-lg  text-fontColor2'>Pavê de chocolate e biscoito - FRIO</p>
                    <p className='text-2xl font-semibold text-footer/80'> R$ 45,00</p>
                  </figure>
                </Link>
              </div>
            </div>
            <div className=' bg-white rounded-none md:rounded-3xl border-primary px-1 transition-all hover:transform hover:scale-105 duration-300 hover:shadow-xl'>
              <div className='w-full border-secondary p-10 md:p-5 text-center'>
                <Link href={'/errors/Error404'}>
                  <figure className='flex flex-col gap-2 justify-center items-center text-center'>
                    <Image src={product02} alt='produtos' className='w-full h-auto  rounded-t-lg'/>
                    <small className='text-2xl font-bold text-footer/80 mt-6'>Torta de Morango</small>
                    <p className='text-lg  text-fontColor2'>Torta com cobertura de morango</p>
                    <p className='text-2xl font-semibold text-footer/80'> R$ 55,00</p>
                  </figure>
                </Link>
              </div>
            </div>
            <div className=' bg-white rounded-none md:rounded-3xl border-primary px-1 transition-all hover:transform hover:scale-105 duration-300 hover:shadow-xl'>
              <div className='w-full   border-secondary p-10 md:p-5 text-center'>
                <Link href={'/errors/Error404'}>
                  <figure className='flex flex-col gap-2 justify-center items-center text-center'>
                    <Image src={product03} alt='produtos' className='w-full h-auto  rounded-t-lg'/>
                    <small className='text-2xl font-bold text-footer/80 mt-6'>Bolo de Cerejas </small>
                    <p className='text-lg font-bold  text-fontColor2'>Bolinho de cerejas com raspas de chocolate branco e musse branco</p>
                    <p className='text-2xl font-semibold text-footer/80'> R$ 45,00</p>
                  </figure>
                </Link>
              </div>
            </div>
            <div className=' rounded-none md:rounded-3xl bg-white border-primary px-1 transition-all hover:transform hover:scale-105 duration-300 hover:shadow-xl'>
              <div className='w-full border-secondary p-10 md:p-5 text-center'>
                <Link href={'/errors/Error404'}>
                  <figure className='flex flex-col gap-2 justify-center items-center text-center'>
                    <Image src={product03} alt='produtos' className='w-full h-auto  rounded-t-lg'/>
                    <small className='text-2xl font-bold text-footer/80 mt-6'>Bolo de vegano</small>
                    <p className='text-lg font-bold  text-fontColor2'>Bolinho de cereja que ninguem gosta!</p>
                    <p className='text-2xl font-semibold text-footer/80'> R$ 45,00</p>
                  </figure>
                </Link>
              </div>
            </div>
            <div className= 'rounded-none md:rounded-3xl bg-white border-primary px-1 transition-all hover:transform hover:scale-105 duration-300 hover:shadow-xl'>
              <div className='w-full   border-secondary p-10 md:p-5 text-center'>
                <Link href={'/errors/Error404'}>
                  <figure className='flex flex-col gap-2 justify-center items-center text-center'>
                    <Image src={product02} alt='produtos' className='w-full h-auto  rounded-t-lg'/>
                    <small className='text-2xl font-bold text-footer/80 mt-6'>Torta de gente rica!</small>
                    <p className='text-lg  text-fontColor2'>Tem um gosto meio roxo!!</p>
                    <p className='text-2xl font-semibold text-footer/80'> R$ 45,00</p>
                  </figure>
                </Link>
              </div>
            </div>
            <div className=' bg-white rounded-none md:rounded-3xl border-primary px-1 transition-all hover:transform hover:scale-105 duration-300 hover:shadow-xl'>
              <div className='w-full border-secondary p-10 md:p-5 text-center'>
                <Link href={'/errors/Error404'}>
                  <figure className='flex flex-col gap-2 justify-center items-center text-center'>
                    <Image src={product03} alt='produtos' className='w-full h-auto  rounded-t-lg'/>
                    <small className='text-2xl font-bold text-footer/80 mt-6'>Bolo de vegano</small>
                    <p className='text-lg font-bold  text-fontColor2'>Bolinho de cereja que ninguem gosta!</p>
                    <p className='text-2xl font-semibold text-footer/80'> R$ 45,00</p>
                  </figure>
                </Link>
              </div>
            </div>
        </div>
          </section>
      </div>

      <section className="flex justify-center w-full py-6  ">
    <a href="#" className="flex items-center px-4 py-2 mx-1  bg-primary text-white rounded-md cursor-not-allowed  ">
        Anterior
    </a>

    <div className='gap-2 flex '>
      <Link href="#" className="items-center  px-4 py-2 mx-1  bg-primary text-white  transition-colors duration-300 transform  rounded-md sm:flex   hover:bg-secondary hover:text-white">
          1
      </Link>
      <Link href="#" className="items-center  px-4 py-2 mx-1  bg-primary text-white transition-colors duration-300 transform  rounded-md sm:flex   hover:bg-secondary hover:text-white">
          2
      </Link>
      <Link href="#" className="items-center  px-4 py-2 mx-1  bg-primary text-white transition-colors duration-300 transform  rounded-md sm:flex   hover:bg-secondary hover:text-white">
          3
      </Link>
    </div>

    <Link href="#" className="flex items-center px-4 py-2 mx-1  bg-primary text-white transition-colors duration-300 transform  rounded-md   hover:bg-secondary hover:text-white">
        Próximo
    </Link>
</section>
    </main>
  )
}

export default Catalogo