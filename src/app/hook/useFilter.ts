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
    setSortOption(item);
  };

  useEffect(() => {
    const filterFunctions: Record<string, (product: any) => boolean> = {
      'Bolos Tradicionais': (product) => product.type === 'Bolos Tradicionais',
      'Bolos de Aniversário': (product) => product.type === 'Bolos de Aniversário',
      'Confeitaria': (product) => product.type === 'Confeitaria',
      'Doces de Festa': (product) => product.type === 'Doces de Festa',
      'Salgados': (product) => product.type === 'Salgados',
      'Tortas Salgadas': (product) => product.type === 'Tortas Salgadas',
      'Salgados de Festas': (product) => product.type === 'Salgados de Festas',
      'Kits': (product) => product.type === 'Kits',
    };

    const sortingFunctions: Record<string, (a: any, b: any) => number | any> = {
      'Menor Preço': (a, b) => a.cost - b.cost,
      'Maior Preço': (a, b) => b.cost - a.cost,
      'Ordem Alphabética': (a, b) => a.name.localeCompare(b.name),
    };

    let resultedFilteredProducts = [...dataProducts];

    if (filterFunctions[sortOption]) {
      //console.log(`Filtering by ${sortOption}`);
      resultedFilteredProducts = resultedFilteredProducts.filter(filterFunctions[sortOption]);
    }

    if (sortingFunctions[sortOption]) {
      //console.log(`Sorting by ${sortOption}`);
      resultedFilteredProducts.sort(sortingFunctions[sortOption]);
    }

    setDisplayedProducts(resultedFilteredProducts);
  }, [sortOption, setDisplayedProducts, setPageNumber]);

  return {
    handleMenuItemClick,
    sortOption,
  };
};

export default useFilter;
