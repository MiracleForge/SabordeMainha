import { Metadata } from 'next';
import FlyNavigation from '@/app/components/flynavigation/FlyNavigation';
import Banner from '@/app/components/banner/Banner';
import Ribbon from '@/app/components/ribbon/Ribbon';


export const metadata: Metadata = {
  title: 'Sabor de Mainha | Home',
};

const Home: React.FC = () => {
  return (
    <main className="w-full h-full">     
      <FlyNavigation/>
      <Banner/>

      <div className='h-screen bg-cookieMain bg-cookieMain-small md:bg-cookieMain-medium lg:bg-cookieMain-large my-[6rem] bg-repeat-space'>
          <Ribbon ribbonText="Produtos" altText="Produtos"/>
      </div>
    </main>
  );
};

export default Home;