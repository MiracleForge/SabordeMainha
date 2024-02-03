import { Metadata } from 'next';
import FilteredCatalog from '@/app/components/filteredcatalog/FilteredCatalog';
import Ribbon from '@/app/components/ribbon/Ribbon';


export const metadata: Metadata = {
  title: 'Sabor de Mainha | Nosso Catálogo',
};

import React from 'react'

const Catalogo = () => {

  return (

    <main className="bg-quartenary ">
      <Ribbon ribbonText="Catálogo" altText="Catalogo de Produtos" />

      <FilteredCatalog />
    </main>
  );
};

export default Catalogo;