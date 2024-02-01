"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import dataProducts from '../../../../public/assets/data/produtos.json';


const ProductDetails = () => {
  const [displayedProduct, setDisplayedProduct] = useState<{
    id: number;
    name: string;
    description: string;
    image: string;
    image_alt: string;
    type: string;
    cost: number;
    visualization: number;
  } | null>(null);

  useEffect(() => {
    // Extract id from query parameters and convert to number
    const urlParams = new URLSearchParams(window.location.search);
    const productIdString = urlParams.get('id');
    const productId = productIdString ? parseInt(productIdString, 10) : null;
  
    // Find product based on id
    if (productId !== null) {
      const product = dataProducts.find(product => product.id === productId);
      setDisplayedProduct(product || null);
    }
  }, []);

  return (
    <div>
      {displayedProduct ? (
        <>
          <figure className="w-full h-auto">
            <Image src={displayedProduct.image} 
            alt={displayedProduct.image_alt}
            width={500}
            height={500}
            className='w-full h-60 object-cover rounded-t-lg'
            >

            </Image>
          </figure>
          <h1>{displayedProduct.name}</h1>
          <p>{displayedProduct.description}</p>
          <p>R$ {displayedProduct.cost.toFixed(2)}</p>
          {/* Adicione aqui o restante dos detalhes do produto */}
        </>
      ) : (
        <div>Produto não encontrado.</div>
      )}
    </div>
  );
};

export default ProductDetails;





