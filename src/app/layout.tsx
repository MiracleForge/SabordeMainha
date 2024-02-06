import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../app/components/header/Header';
import FlyNavigation from '@/app/components/flynavigation/FlyNavigation';
import Footer from '../../src/app/components/footer/Footer';
import { AiOutlineArrowDown } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import Logo from '../../public/assets/images/Logo.png';

const inter = Inter({ subsets: ['latin'] })

const logoUrl = Logo.src;

export const metadata: Metadata = {
  title: {
    default: 'Sabor de Mainha - Encomendas de Doces, Salgados e Bolos',
    template: '%s | Sabor de Mainha - Fabrica de Sonhos'
  },
  description: 'Sabor de Mainha - A sua Fábrica de Sonhos para encomendas de doces, salgados, bolos e festas.',
  keywords: ['Encomendas', 'Doces', 'Salgados', 'Bolos', 'Festas', 'Mobile', 'Desktop', 'Sabor de Mainha', 'Fabrica de Sonhos'],
  openGraph: {
    title: 'Sabor de Mainha - Encomendas de Doces, Salgados e Bolos',
    description: 'Sabor de Mainha - A sua Fábrica de Sonhos para encomendas de doces, salgados, bolos e festas.',
    url: 'https://confeitariatemplate.vercel.app/',
    siteName: 'Sabor de Mainha',
    images: [
      {
        url: 'https://raw.githubusercontent.com/MiracleForge/SonnenSoftware_Images/main/images/Logo.png',
        width: 3604,
        height: 1108,
        alt: 'Imagem representativa da Sabor de Mainha'
      }
    ],

  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br ">
      <body className={inter.className} >
        <Header />
        <div className='pt-18 lg:pt-12 bg-backColor'>
          <FlyNavigation/>
        </div>
        {children}
        <a href="#final" className="fixed z-10 bottom-4 right-4 bg-red-600 text-white p-3 rounded-md hover:bg-red-600 hover:text-black transition duration-600 ease-in-out">
            <AiOutlineArrowDown size={"2rem"} />
          </a>
          <a href="https://wa.me/557196184966" target="_blank" className="fixed z-10 bottom-20 right-4 bg-green-600 text-white p-3 rounded-md hover:bg-green-600 hover:text-black transition duration-600 ease-in-out">
            <IoLogoWhatsapp size={"2rem"} />
          </a>
        <Footer/>
      </body>
    </html>
  );
}

