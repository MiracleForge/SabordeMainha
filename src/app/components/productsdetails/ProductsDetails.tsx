"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dataProducts from '../../../../public/assets/data/produtos.json';
import { TiPlus } from "react-icons/ti";
import { FaMinus } from "react-icons/fa6";
import Toldo from "../toldo/Toldo";
import SimpleCatalog from "../simplecatalog/SimpleCatalog";
import Head from 'next/head';

type ButtonName = "descricao" | "avaliacoes";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  image_alt: string;
  type: string;
  cost: number;
  filing?: string[];
  extras?: string[];
  min: number;
  visualization: number;
}


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
    extras?: string[];
    min: number;
    visualization: number;
  } | null>(null);

  const [quantity, setQuantity] = useState(1);
  const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("descricao"); 

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };


  const decrementQuantity = () => {

    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  const handleAddButtonClick = () => {

  console.log('Quantidade selecionada:', (quantity * (displayedProduct?.min || 1)));

  };

  const setMetadataTags = (product: Product) => {

    const additionalString = " | Sabor de Mainha";
    const titleTag = document.querySelector('head title');
    
    if (titleTag) {
      titleTag.textContent = `${product.name} - ${additionalString}`;
    }
    const tags = {
      titleTag: 'title',
      descriptionTag: 'description',
      keywordsTag: 'keywords',
      openNameTag: 'og:title',
      twitterNameTag: 'twitter:title',
      twitterImageTag: 'twitter:image',
      twitterDescriptionTag: 'twitter:description',
      twitterAltTag: 'twitter:image:alt',
      openGraphTag: 'og:description',
      siteNameTag: 'og:site_name',
      imageTag: 'og:image',
      altTag: 'og:image:alt',
      urlTag: 'og:url',
    };

    const currentUrl = window.location.href;

    for (const [tag, property] of Object.entries(tags)) {
      const tagElement = document.querySelector(`meta[property="${property}"], meta[name="${property}"]`);
      if (tagElement) {
        switch (tag) {
          case 'titleTag':
            document.title = ` ${product.name} | Sabor de Mainha`;
            break;
          case 'descriptionTag':
            tagElement.setAttribute('content', product.description);
            break;
          case 'keywordsTag':
            const keywordsContent = ['Produtos', product.type, product.name].join(', ');
            tagElement.setAttribute('content', keywordsContent);
            break;
          case 'openNameTag':
          case 'twitterNameTag':
            tagElement.setAttribute('content', ` ${product.name} | Sabor de Mainha`);
            break;
            case 'twitterImageTag':
            case 'imageTag':
              const imageUrl = new URL(`/assets/images/products/${product.image}`, 'https://confeitariatemplate.vercel.app/');
              tagElement.setAttribute('content', imageUrl.href);
              
            break;
          case 'twitterDescriptionTag':
            tagElement.setAttribute('content', product.description);
            break;
          case 'twitterAltTag':
          case 'altTag':
          tagElement.setAttribute('content', product.image_alt);
            break;
          case 'openGraphTag':
          tagElement.setAttribute('content', ` ${product.description}`);
            break;
          case 'siteNameTag':
          tagElement.setAttribute('content', `Sabor de Mainha `);
          break;
          case 'urlTag':
          tagElement.setAttribute('content', currentUrl);
            break;
        default:
            break;
      }
      }
    }
  };

  useEffect(() => {
    // Extrair o id dos parâmetros de consulta e converter para número
    const urlParams = new URLSearchParams(window.location.search);
    const productIdString = urlParams.get('id');
    const productId = productIdString ? parseInt(productIdString, 10) : null;
  
    // Encontrar o produto com base no id
    if (productId !== null) {
      const product = dataProducts.find(product => product.id === productId);
      setDisplayedProduct(product || null);
  
      // Verificar se o produto tem sabores e definir automaticamente o primeiro sabor
      if (product && product.filing && product.filing.length > 0) {
        setSelectedFlavor(product.filing[0]);
      }
    }
  }, []);

  useEffect(() => {
    if (displayedProduct) {
      setMetadataTags(displayedProduct);
    }
  }, [displayedProduct]);
  
  const handleFlavorToggle = (flavor: string) => {
    const isSelected = selectedFlavor === flavor;
    if (isSelected) {
      setSelectedFlavor(null); // Adicionado para limpar o sabor selecionado ao desmarcar
    } else {
      setSelectedFlavor(flavor);
    }
  };
  
  const handleButtonClick = (buttonName: ButtonName) => {
    setActiveButton(buttonName);
  };


  return (
    <>
      <Head>
        <title>{displayedProduct?.name || 'Product Details'} | Sabor de Mainha</title>
      </Head>
    <main >
      {displayedProduct ? (
        <>
        <section className="flex flex-row ">
        <figure className="w-1/2 flex flex-col h-auto p-12 pb-0">
        <Image
          src={displayedProduct.image}
          alt={displayedProduct.image_alt}
          width={500}
          height={500}
          className='w-full h-[32rem] object-cover rounded-lg border-4 border-secondary'
        />
        <div className="flex mt-5  rounded-lg">
          <h6 className="flex text-3xl font-lily-script text-black px-4">Escolha suas Opções de Sabores</h6>
          <div className="relative inline-block">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex text-3xl font-montserrat text-white py-2 px-3 mx-auto bg-fontColor2 rounded-lg hover:bg-secondary cursor-pointer border-r-2 border-white "
            >
              {selectedFlavor ? selectedFlavor : "Escolha suas opções"}
            </button>
            {isOpen && (
              <div
                className="absolute right-0 z-20 w-auto py-2 px-3 mt-2 origin-top-right bg-primary rounded-md shadow-xl "
                onClick={() => setIsOpen(false)}
              >
                {displayedProduct.filing && displayedProduct.filing.length > 0 ? (
                  displayedProduct.filing.map((flavor, index) => (
                    <div
                      key={index}
                      className="flex items-center mt-2 hover:bg-secondary"
                      onClick={() => handleFlavorToggle(flavor)}
                    >
                      <div className="text-2xl text-center">{flavor}</div>
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
              <Link
              href={{
                pathname: '/catalogodeprodutos',
                query: { type: displayedProduct.type },
              }}
              as={`/catalogodeprodutos?type=${displayedProduct.type}`}
              className="hover:underline"
            >
              {displayedProduct.type}
            </Link>
            </div>

            <div className="text-footer ">
              <h1 className="text-3xl pt-6 font-lily-script">  {displayedProduct.name}{selectedFlavor && ` - ${selectedFlavor}`} </h1>
              <hr className="h-[3px] w-[5rem] my-3 border-0 bg-secondary" />
              <p className="text-2xl pt-2 font-lily-script">R$ {(displayedProduct.cost * Math.max(quantity, 1) * displayedProduct.min).toFixed(2)}


</p>
              <p className="max-w-sm text-lg pt-6">{displayedProduct.description}</p>
              <p className="text-lg pt-6 font-lily-script">Categoria: {displayedProduct.type}</p>
            </div>

            <div className="flex flex-row items-center gap-6 mt-3">
              <div className="w-56 h-10 bg-white flex flex-row justify-between mt-1">
                <button onClick={decrementQuantity} className="w-16 h-auto rounded-lg bg-fontColor2 text-center items-center flex justify-center hover:bg-secondary group">
                  <FaMinus className="text-3xl group-hover:text-white" />
                </button>
                <small className="text-2xl font-lily-script self-center">{quantity}</small>
                <button onClick={incrementQuantity} className="w-16 h-auto rounded-lg bg-fontColor2 text-center flex items-center justify-center hover:bg-secondary group">
                  <TiPlus className="text-3xl group-hover:text-white" />
                </button>
              </div>

              <h2 className="flex items-center text-footer">Quantidade Mínima: {displayedProduct.min}</h2>
            </div>

            <button onClick={handleAddButtonClick} className="text-3xl font-lily-script text-white py-3 px-8 bg-fontColor2 rounded-lg mt-4 hover:bg-secondary"> Adicionar </button>

          </div>
         </section>

         <section className="flex flex-col w-full h-auto p-12 pt-0 border-t-2 border-linebaseColor bg-quartenary">
          <div className="flex flex-row gap-6">
            <button
              className={`flex text-lg pt-1 border-t-2 font-lily-script ${activeButton === "descricao" ? "border-footer" : ""}`}
              onClick={() => handleButtonClick("descricao")}
            >
              Descrição:
            </button>
            <button
              className={`flex text-lg pt-1 border-t-2 font-lily-script ${activeButton === "avaliacoes" ? "border-footer" : ""}`}
              onClick={() => handleButtonClick("avaliacoes")}
            >
              Avaliações:
            </button>
          </div>

          {activeButton === "descricao" && (
            <div className="flex flex-row items-center">
              <div className="flex flex-col mr-auto">
                <h3 className="text-3xl text-footer pt-3 font-lily-script">{displayedProduct.name}</h3>
                <p className="max-w-sm text-lg pt-1 font-montserrat"><strong>Descrição: </strong>{displayedProduct.description}</p>
              </div>

              <div className="flex flex-col ml-auto font-montserrat w-80">
              <ul className="space-y-3 list-inside pl-4">
                {displayedProduct.extras && displayedProduct.extras.length > 0 ? (
                  displayedProduct.extras.map((extra, index) => (
                    <li key={index}>
                      {extra}
                    </li>
                  ))
                ) : (
                  <p>Sem extras disponíveis.</p>
                )}
              </ul>

              </div>

            </div>
          )}
        </section>

        <section className="w-full h-auto  bg-quartenary ">
            <Toldo />
            <h3 className="text-3xl  font-lily-script text-footer pl-12 pt-16 pb-2">Relacionados :</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3    pb-12 md:px-10 gap-3 md:gap-10 lg:gap-20 font-lily-script ">
            <SimpleCatalog numberOfItems={3} filteredType="type" customTypeFilter={displayedProduct.type} excludeProductName={displayedProduct.name} />

            </div>
        </section>

        </>
      ) : (
        <div>Produto não encontrado.</div>
      )}
    </main>
    </>
  );
};

export default ProductDetails;