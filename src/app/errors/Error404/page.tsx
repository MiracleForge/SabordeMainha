import { Metadata } from 'next';
import Error404 from '@/app/components/error404/Error404';

export const metadata: Metadata = {
  title: 'Sabor de Mainha | Em construção',
};


const Error: React.FC = () => {

  return (
    <main className=" bg-backColor">     
       <Error404/> 
    </main>
  );
};

export default Error;