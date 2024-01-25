import { Metadata } from 'next';
import Catalogos from '@/app/components/catalogo/Catalogo';


export const metadata: Metadata = {
  title: 'Sabor de Mainha | Nosso Catálogo',
};

import React from 'react'

const Catalogo = () => {

  return (

    <main className="bg-quartenary">
      <Catalogos />
    </main>
  );
};

export default Catalogo;
