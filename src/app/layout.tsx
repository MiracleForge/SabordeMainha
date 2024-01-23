import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../app/components/header/Header';
import Footer from '../../src/app/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

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
    url: 'https://www.sabordemainha.com.br',
    siteName: 'Sabor de Mainha',
    images: [
      {
        url: 'metaImg',
        width: 3604,
        height: 1108,
        alt: 'Imagem representativa da Sabor de Mainha'
      }
    ]
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br bg-backColor">
      <body className={inter.className} >
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}

