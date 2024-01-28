import { Metadata } from 'next';
import Banner from '@/app/components/banner/Banner';
import HomePage from './components/homepage/HomePage';

export const metadata: Metadata = {
  title: 'Sabor de Mainha | Home',
};


const Home: React.FC = () => {


  return (
    <main className="bg-quartenary">         
        <div className=' lg:pt-5'>
          <Banner/>
        </div>

        <div className='bg-quartenary mt-0 md:mt-10 flex flex-col justify-center items-center align-middle'>
          <HomePage/>
        </div>
        
    </main>
  );
};

export default Home;