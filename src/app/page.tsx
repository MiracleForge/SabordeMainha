import { Metadata } from 'next';
import FlyNavigation from '@/app/components/flynavigation/FlyNavigation';
import Banner from '@/app/components/banner/Banner';
import HomePage from './components/homepage/HomePage';

export const metadata: Metadata = {
  title: 'Sabor de Mainha | Home',
};


const Home: React.FC = () => {


  return (
    <main className=" bg-backColor">     
      <div className='pt-26 lg:pt-12'>
        <FlyNavigation/>
      </div>
      <div className='pt-1 md:pt-2 lg:pt-5'>
        <Banner/>
      </div>
      <div className='bg-quartenary mt-10'><HomePage/></div>
    </main>
  );
};

export default Home;