import { Metadata } from 'next';
import FlyNavigation from '@/app/components/flynavigation/FlyNavigation';
import Banner from '@/app/components/banner/Banner';

export const metadata: Metadata = {
  title: 'Sabor de Mainha | Home',
};

const Home: React.FC = () => {
  return (
    <main className="w-full h-full">     
      <FlyNavigation/>
      <Banner/>

      <div className='h-screen'>

      </div>
    </main>
  );
};

export default Home;