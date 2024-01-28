import { Metadata } from 'next';
import Catalogos from '@/app/components/catalogo/Catalogo';
import Ribbon from '@/app/components/ribbon/Ribbon';
import Filter from '@/app/components/filter/Filter';

export const metadata: Metadata = {
  title: 'Sabor de Mainha | Nosso Catálogo',
};

import React from 'react'

const Catalogo = () => {

  return (

    <main className="bg-quartenary">
      <Ribbon ribbonText="Catálogo" altText="Catalogo de Produtos" />
      <Filter/>
      <Catalogos />
    </main>
  );
};

export default Catalogo;
