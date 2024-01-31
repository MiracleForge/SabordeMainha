import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import dataProducts from '../../../public/assets/data/produtos.json';

interface UseFilterProps {
  setPageNumber: Dispatch<SetStateAction<number>>;
  setDisplayedProducts: Dispatch<SetStateAction<any[]>>;
}

const useFilter = ({ setPageNumber, setDisplayedProducts }: UseFilterProps) => {
  const [sortOption, setSortOption] = useState<string>('default');

  const handleMenuItemClick = (item: string) => {
    setPageNumber(1);

    setSortOption((prevSortOption) => {
      if (prevSortOption !== item) {
        setTimeout(() => {
          // Close the dropdowns directly in the Filter component
          // instead of here
        }, 0);
      }

      return item;
    });
  };


  useEffect(() => {
    let filteredProducts = [...dataProducts];
    let resultedFilteredProducts = [...filteredProducts];

    if (sortOption === 'Bolos Tradicionais') {
        console.log('Filtering by Bolos Tradicionais');
        resultedFilteredProducts = filteredProducts.filter(product => product.type === 'Bolos Tradicionais');
      } else if (sortOption === 'Bolos de Aniversário') {
        console.log('Filtering by Bolos de Aniversário');
        resultedFilteredProducts = filteredProducts.filter(product => product.type === 'Bolos de Aniversário');
      } else if (sortOption === 'Confeitaria') {
        console.log('Filtering by Confeitaria');
        resultedFilteredProducts = filteredProducts.filter(product => product.type === 'Confeitaria');
      } else if (sortOption === 'Doces de Festa') {
        console.log('Filtering by Doces de Festa');
        resultedFilteredProducts = filteredProducts.filter(product => product.type === 'Doces de Festa');
      } else if (sortOption === 'Salgados') {
        console.log('Filtering by Salgados');
        resultedFilteredProducts = filteredProducts.filter(product => product.type === 'Salgados');
      } else if (sortOption === 'Tortas Salgadas') {
        console.log('Filtering by Tortas Salgadas');
        resultedFilteredProducts = filteredProducts.filter(product => product.type === 'Tortas Salgadas');
      } else if (sortOption === 'Salgados de Festas') {
        console.log('Filtering by Salgados de Festas');
        resultedFilteredProducts = filteredProducts.filter(product => product.type === 'Salgados de Festas');
      } else if (sortOption === 'Kits') {
        console.log('Filtering by Kits');
        resultedFilteredProducts = filteredProducts.filter(product => product.type === 'Kits');
      }

    // Sorting conditions
    if (sortOption === 'Menor Preço') {
        console.log('Sorting by Menor Preço');
        resultedFilteredProducts.sort((a, b) => a.cost - b.cost);
      } else if (sortOption === 'Maior Preço') {
        console.log('Sorting by Maior Preço');
        resultedFilteredProducts.sort((a, b) => b.cost - a.cost);
      } else if (sortOption === 'Ordem Alphabética') {
        console.log('Sorting by Ordem Alphabética');
        resultedFilteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      }

    setDisplayedProducts(resultedFilteredProducts);
  }, [sortOption, setDisplayedProducts]);

  return {
    handleMenuItemClick,
    sortOption,
  };
};

export default useFilter;