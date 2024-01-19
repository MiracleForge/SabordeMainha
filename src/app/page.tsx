import { Metadata } from 'next';
import FlyNavigation from '@/app/components/flynavigation/FlyNavigation';

export const metadata: Metadata = {
  title: 'Sabor de Mainha | Home',
};

const Home: React.FC = () => {
  return (
    <main className="w-full h-auto">
      
    <FlyNavigation/>
      
      

    </main>
  );
};

export default Home;