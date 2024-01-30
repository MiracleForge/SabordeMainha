"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import dataProducts from '../../../../public/assets/data/produtos.json';
import Pagination from '@/app/components/pagination/Pagination';
import Filter from '@/app/components/filter/Filter';
import useFilter from '@/app/hook/useFilter';


const Catalogo = () => {
  const [currentPage, setPageNumber] = useState(1);
  const [paginationRange, setPaginationRange] = useState({ startIndex: 0, endIndex: 6 });
  const [displayedProducts, setDisplayedProducts] = useState([...dataProducts]);
  const [isOrderByOpen, setIsOrderByOpen] = useState(false); // Add this line
  const [isFilterOpen, setIsFilterOpen] = useState(false); // Add this line

  const { handleMenuItemClick, sortOption } = useFilter({
    setPageNumber,
    setDisplayedProducts,
    setIsOrderByOpen, // Add this line
    setIsFilterOpen, // Add this line
  });
 

  return (
    <div className="bg-quartenary" id='startCatalogy'>
      <Filter
        setPageNumber={setPageNumber}
        setDisplayedProducts={setDisplayedProducts}
      />
      <div className='flex flex-row  items-start '>
        <aside className='hidden md:flex flex-col gap-6 p-10 pt-28 md:pt-5 font-lily-script text-2xl text-footer/80 border w-1/5 md:w-1/3 lg:w-1/5'>
        <button onClick={() => handleMenuItemClick('Bolos Tradicionais')} className='border-b-2 border-secondary border-dashed pb-3 text-center '>
            <h3 className='translate-y-0 hover:-translate-y-2 transition-transform duration-700'>Bolos Tradicionais</h3>
          </button>
          <button onClick={() => handleMenuItemClick('Bolos de Aniversário')} className='border-b-2 border-secondary border-dashed pb-3 text-center '>
            <h3 className='translate-y-0 hover:-translate-y-2 transition-transform duration-700'>Bolos de Aniversário</h3>
          </button>
          <button onClick={() => handleMenuItemClick('Confeitaria')} className='border-b-2 border-secondary border-dashed pb-3 text-center '>
            <h3 className='translate-y-0 hover:-translate-y-2 transition-transform duration-700'>Confeitaria</h3>
          </button>
          <button onClick={() => handleMenuItemClick('Doces de Festa')} className='border-b-2 border-secondary border-dashed pb-3 text-center '>
            <h3 className='translate-y-0 hover:-translate-y-2 transition-transform duration-700'>Doce de Festas</h3>
          </button>
          <button onClick={() => handleMenuItemClick('Salgados')} className='border-b-2 border-secondary border-dashed pb-3 text-center '>
            <h3 className='translate-y-0 hover:-translate-y-2 transition-transform duration-700'>Salgados</h3>
          </button>
          <button onClick={() => handleMenuItemClick('Tortas Salgadas')} className='border-b-2 border-secondary border-dashed pb-3 text-center '>
            <h3 className='translate-y-0 hover:-translate-y-2 transition-transform duration-700'>Salgados de Festa</h3>
          </button>
          <button onClick={() => handleMenuItemClick('Bolos Tradicionais')} className='border-b-2 border-secondary border-dashed pb-3 text-center '>
            <h3 className='translate-y-0 hover:-translate-y-2 transition-transform duration-700'>Tortas Salgadas</h3>
          </button>
          <button onClick={() => handleMenuItemClick('Bolos Tradicionais')} className='border-b-2 border-secondary border-dashed pb-3 text-center '>
           <h3 className='translate-y-0 hover:-translate-y-2 transition-transform duration-700'>Kits</h3>
          </button>
        </aside>

        <section className='h-auto bg-cookieMain bg-cookieMain-small md:bg-cookieMain-medium lg:bg-cookieMain-large pt-5 lg:pt-8 md:pt-5 bg-repeat-space w-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 md:px-5 lg:px-10 gap-3 md:gap-5 lg:gap-12 mb-10 font-lily-script '>

          {displayedProducts.slice(paginationRange.startIndex, paginationRange.endIndex).map((data) => (
                
                  <div
                    key={data.id} 
                    className='w-full  px-1 transition-all hover:transform hover:scale-105 duration-300 hover:shadow-xl bg-white border-2 border-secondary rounded-3xl hover:bg-secondary hover:border-white group group'
                  >
                    <div className='w-full border-secondary p-5 md:p-10 text-center'>
                      <Link href={'/errors/Error404'} >
                        <figure className='flex flex-col gap-2 justify-center items-center text-center'>
                          <Image
                            src={data.image}
                            width={500}
                            height={500}
                            alt={data.image_alt}
                            className='w-full h-60 object-cover rounded-t-lg'
                          />
                          <small className='text-3xl font-bold text-footer mt-6 group-hover:text-white'>{data.name}</small>
                          <p className='text-lg text-footer font-montserrat'>{data.description}</p>
                          <p className='text-2xl font-semibold text-footer'> R$ {data.cost.toFixed(2)}</p>
                        </figure>
                      </Link>
                    </div>
                  </div>
                ))}
          </div>
        </section>
      </div>

      <Pagination
        totalProducts={displayedProducts.length}
        itemsPerPage={6}
        currentPage={currentPage}
        setPageNumber={setPageNumber}
        setPaginationRange={setPaginationRange}
      />
    </div>
  );
};

export default Catalogo;