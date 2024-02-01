"use client"
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dataProducts from '../../../../public/assets/data/produtos.json';
import { TiPlus } from "react-icons/ti";
import { FaMinus } from "react-icons/fa6";

const ProductDetails = () => {
  const [displayedProduct, setDisplayedProduct] = useState<{
    id: number;
    name: string;
    description: string;
    image: string;
    image_alt: string;
    type: string;
    cost: number;
    filing?: string[];
    visualization: number;
  } | null>(null);

  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Extrair o id dos parâmetros de consulta e converter para número
    const urlParams = new URLSearchParams(window.location.search);
    const productIdString = urlParams.get('id');
    const productId = productIdString ? parseInt(productIdString, 10) : null;

    // Encontrar o produto com base no id
    if (productId !== null) {
      const product = dataProducts.find(product => product.id === productId);
      setDisplayedProduct(product || null);
    }
  }, []);

  const handleFlavorToggle = (flavor: string) => {
    const isSelected = selectedFlavors.includes(flavor);
    if (isSelected) {
      setSelectedFlavors(selectedFlavors.filter(f => f !== flavor));
    } else {
      setSelectedFlavors([...selectedFlavors, flavor]);
    }
  };

  return (
    <main>
      {displayedProduct ? (
        <div className="flex flex-row">
          <figure className="w-1/2 flex flex-col h-auto p-12">
            <Image
              src={displayedProduct.image}
              alt={displayedProduct.image_alt}
              width={500}
              height={500}
              className='w-full h-[32rem] object-cover rounded-lg border-4 border-secondary'
            />
            <div className="flex flex-row justify-start items-center mt-5 border-2 border-white rounded-lg w-[28.09rem]">
              <h1 className="flex text-3xl font-lily-script text-black  px-4 ">Sabores</h1>
              <div className="relative inline-block">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex text-3xl font-montserrat text-white py-2 px-3 mx-auto bg-fontColor2 rounded-lg hover:bg-secondary cursor-pointer border-r-2 border-white "
                >
                  Escolha suas opções
                </button>
                {isOpen && (
                  <div
                    className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    {displayedProduct.filing && displayedProduct.filing.length > 0 ? (
                      displayedProduct.filing.map((flavor, index) => (
                        <div key={index} className="flex items-center mt-2">
                          <div className="w-full text-lg">{flavor}</div>
                        </div>
                      ))
                    ) : (
                      <p>Sem sabores Extras</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </figure>
          <div className="font-montserrat text-lg">
            <div className="flex gap-1 pt-12">
              <Link className="hover:underline" href={"/"}>Início</Link>
              /
              <Link className="hover:underline" href={"/catalogodeprodutos"}>Catálogo</Link>
              /
              <Link className="hover:underline" href={"/catalogodeprodutos"}>{displayedProduct.name}</Link>
            </div>

            <div className="text-footer ">
              <h2 className="text-3xl pt-6 font-lily-script">{displayedProduct.name}</h2>
              <hr className="h-[3px] w-[5rem] my-3 border-0 bg-secondary" />
              <p className="text-2xl pt-2 font-lily-script">R$ {displayedProduct.cost.toFixed(2)}</p>
              <p className="max-w-sm text-lg pt-6">{displayedProduct.description}</p>
              <p className="text-lg pt-6 font-lily-script">Categoria: {displayedProduct.type}</p>
            </div>

            <div className="flex flex-row items-center gap-6 mt-3">
              <div className="w-56 h-10 bg-white flex flex-row justify-between mt-1">
                <button className="w-16 h-auto rounded-lg bg-fontColor2 text-center items-center flex justify-center hover:bg-secondary group">
                  <FaMinus className="text-3xl group-hover:text-white" />
                </button>
                <small className="text-2xl font-lily-script self-center">1</small>
                <button className="w-16 h-auto rounded-lg bg-fontColor2 text-center flex items-center justify-center hover:bg-secondary group">
                  <TiPlus className="text-3xl group-hover:text-white" />
                </button>
              </div>

              <h2 className="flex items-center text-footer">Quantidade Mínima: 24</h2>
            </div>

            <button className="text-3xl font-lily-script text-white py-3 px-8 bg-fontColor2 rounded-lg mt-4 hover:bg-secondary"> Adicionar </button>
          </div>
        </div>
      ) : (
        <div>Produto não encontrado.</div>
      )}
    </main>
  );
};

export default ProductDetails;
