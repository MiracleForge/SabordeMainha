"use client"
import React from 'react';
import Link from 'next/link';

interface PaginatorProps {
    totalProducts: number;
    itemsPerPage: number;
    currentPage: number;
    setPageNumber: React.Dispatch<React.SetStateAction<number>>;
    setPaginationRange: React.Dispatch<React.SetStateAction<{ startIndex: number; endIndex: number }>>;
  }
  
  const Pagination: React.FC<PaginatorProps> = ({
    totalProducts,
    itemsPerPage,
    currentPage,
    setPageNumber,
    setPaginationRange,
  }) => {
    const totalPages = Math.ceil(totalProducts / itemsPerPage);
  
    const handleShowMore = (action: string) => {
      if (action === 'Anterior' && currentPage > 1) {
        setPageNumber((prevPage) => prevPage - 1);
      } else if (action === 'Próximo' && currentPage < totalPages) {
        setPageNumber((prevPage) => prevPage + 1);
      }
    };
  
    React.useEffect(() => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setPaginationRange({ startIndex, endIndex });
    }, [currentPage, itemsPerPage, setPaginationRange]);

    return (
      <section className="flex justify-center w-full py-6">
        <button
          onClick={() => handleShowMore('Anterior')}
          className={`flex items-center px-4 py-2 mx-1 bg-primary  text-white rounded-md transition-colors duration-300 ${
            currentPage === 1 ? 'cursor-not-allowed' : 'hover:bg-secondary'
          }`}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
  
        <div className='gap-2 flex '>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => setPageNumber(index + 1)}
              className={`items-center px-4 py-2 mx-1 rounded-md ${
                currentPage === index + 1
                  ? 'bg-secondary cursor-not-allowed'
                  : 'bg-primary hover:bg-secondary text-white transition-colors duration-300 sm:flex'
              }`}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </button>
          ))}
        </div>
  
        <button
          onClick={() => handleShowMore('Próximo')}
          className={`flex items-center px-4 py-2 mx-1 bg-primary text-white transition-colors duration-300 rounded-md  ${
            currentPage === totalPages ? 'cursor-not-allowed ' : 'hover:bg-secondary'
          }`}
          disabled={currentPage === totalPages}
        >
          Próximo
        </button>
      </section>
    );
  };
  

export default Pagination;