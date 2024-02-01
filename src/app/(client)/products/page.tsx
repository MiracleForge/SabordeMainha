import { Metadata } from 'next';
import ProductDetails from '@/app/components/productsdetails/ProductsDetails';

export const metadata: Metadata = {
  title: 'Sabor de Mainha | Nosso Catálogo',
};

const ProductsDetailsPage = () => {

  return <ProductDetails />;

};

export default ProductsDetailsPage;


