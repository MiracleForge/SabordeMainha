"use client"
import React, { Dispatch, SetStateAction, useState, useEffect } from 'react'; 
import { IoSearch } from "react-icons/io5";
import { LuArrowDownUp, LuFilter } from 'react-icons/lu';

import dataProducts from '../../../../public/assets/data/produtos.json';

interface FilterProps {
  setSortOption: Dispatch<SetStateAction<string>>;
  setPageNumber: Dispatch<SetStateAction<number>>;
  setDisplayedProducts: Dispatch<SetStateAction<any[]>>;
}

const Filter: React.FC<FilterProps> = ({  setPageNumber, setDisplayedProducts }) => {
  const [spin, setSpin] = useState(false);
  const [isOrderByOpen, setIsOrderByOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState<string>('default');


  const handleSearchSubmit = () => {
    // Lógica para o envio do formulário, TODO
    setSpin(true);
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
    setSortOption(item);

    // Adia a execução de handleSearchSubmit
    setTimeout(() => {
      handleSearchSubmit();
      closeDropdowns();

      setPageNumber(1);
    }, 0);
  };

  useEffect(() => {
    // Atualizar a lógica de ordenação aqui
    let sortedProducts = [...dataProducts];

    if (sortOption === 'Menor Preço') {
      console.log('Sorting by Menor Preço');
      sortedProducts = sortedProducts.sort((a, b) => a.cost - b.cost);
    } else if (sortOption === 'Maior Preço') {
      console.log('Sorting by Maior Preço');
      sortedProducts = sortedProducts.sort((a, b) => b.cost - a.cost);
    } else if (sortOption === 'Ordem Alphabética') {
      console.log('Sorting by Ordem Alphabética');
      sortedProducts = sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    setDisplayedProducts(sortedProducts); // Passa os produtos ordenados de volta para o componente Catalogo
  }, [sortOption, setDisplayedProducts]);

  useEffect(() => {
    handleSearchSubmit();
  }, [sortOption]);

  return (
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
              onClick={() => handleMenuItemClick('Menor Preço')}
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
  )
}

export default Filter