import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dataProducts from '../../../../public/assets/data/produtos.json';


/**
 * Componente de catálogo simples para exibir produtos filtrados.
 *
 * @component
 * @example
 * // Exemplo de uso com filtro por tipo e nome do produto
 * <SimpleCatalog numberOfItems={4} filteredType="type" customTypeFilter="Seu_Tipo_Aqui" excludeProductName="Nome_Do_Produto_Aqui" />
 *
 * @param {Object} props - As propriedades do componente.
 * @param {number} props.numberOfItems - O número de itens a serem exibidos.
 * @param {'visualization' | 'type'} props.filteredType - O tipo de filtro a ser aplicado ('visualization' ou 'type').
 * @param {string} [props.customTypeFilter] - Filtro personalizado para o tipo (opcional , obrigatório se customTypeFilter for fornecido).
 * @param {string} [props.excludeProductName] - Nome do produto a ser excluído (opcional, obrigatório se customTypeFilter for fornecido).
 * @returns {JSX.Element} Componente de catálogo simples.
 */

interface CatalogProps {
  numberOfItems: number;
  filteredType: 'visualization' | 'type';
  customTypeFilter?: string;
  excludeProductName?: string; 
}

const SimpleCatalog: React.FC<CatalogProps> = ({ numberOfItems, filteredType, customTypeFilter, excludeProductName }) => {
  const filteredData = dataProducts
    .filter((data) => {
      if (filteredType === 'visualization') {
        return true;
      } else if (filteredType === 'type' && customTypeFilter) {
        // Inclui a condição para verificar se o tipo e o nome correspondem
        return data.type === customTypeFilter && (excludeProductName ? data.name !== excludeProductName : true);
      }
      return false;
    })
    .sort((a, b) => (filteredType === 'visualization' ? b.visualization - a.visualization : 0))
    .slice(0, numberOfItems);

  return (
    <>
      {filteredData.map((data) => (
        <div
          key={data.id}
          className='bg-white px-1 transition-all hover:transform hover:scale-105 duration-300 hover:shadow-xl group border-2 border-secondary rounded-3xl hover:bg-secondary hover:border-white group'
        >
          <div className='w-full p-5 md:p-8 text-center'>
            <Link 
              href={{
                pathname: '/products',
                query: { id: data.id },
              }}
              as={`/products?id=${data.id}-${encodeURIComponent(data.name)}`}
            >
              <figure className='flex flex-col gap-2 justify-center items-center text-center'>
                <Image
                  src={data.image}
                  width={500}
                  height={500}
                  alt={data.image_alt}
                  className='w-full h-60 object-cover rounded-t-lg'
                />
                <small className='text-3xl font-bold text-footer mt-6 group-hover:text-white'>{data.name} - {data.min} unidades</small>
                <p className='text-lg text-footer font-montserrat'>{data.description}</p>
                <p className='text-2xl font-semibold text-footer'> R$ {data.cost.toFixed(2)}</p>
              </figure>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default SimpleCatalog;


