import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import dataProducts from '../../../public/assets/data/produtos.json';

interface UseFilterProps {
  setPageNumber: Dispatch<SetStateAction<number>>;
  setDisplayedProducts: Dispatch<SetStateAction<any[]>>;
}

const useFilter = ({ setPageNumber, setDisplayedProducts }: UseFilterProps) => {
  const [filterOption, setFilterOption] = useState<string>('default');
  const [sortOption, setSortOption] = useState<string>('default');

  const handleMenuItemClick = (item: string) => {
    setPageNumber(1);

    if (item === 'Ver Todos') {
      setFilterOption('default');
      setSortOption('default');
    } else if (item.startsWith('Menor Preço') || item.startsWith('Maior Preço') || item.startsWith('Ordem Alphabética')) {
      setSortOption(item);
      // Não resetar o filtro quando aplicar a ordenação
    } else {
      setFilterOption(item);
      setSortOption('default'); // Resetar a opção de ordenação quando aplicar um filtro
    }
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

    let filteredProducts = [...dataProducts];

    if (filterFunctions[filterOption]) {
      filteredProducts = filteredProducts.filter(filterFunctions[filterOption]);
    }

    if (sortingFunctions[sortOption]) {
      filteredProducts.sort(sortingFunctions[sortOption]);
    }

    setDisplayedProducts(filteredProducts);
  }, [filterOption, sortOption, setDisplayedProducts, setPageNumber]);

  return {
    handleMenuItemClick,
    sortOption,
  };
};

export default useFilter;


