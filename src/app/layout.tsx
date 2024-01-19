import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../app/components/header/Header';
import Footer from '../../src/app/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Sabor de Mainha',
    template: '%s | Sabor de Mainha'
  },
  description: 'Sabor de Mainha - Fabrica de Sonhos !',
  keywords: ['Encomendas', 'Doces', 'Salgados', 'Bolos', 'Festas', 'Mobile', 'Desktop'],
  openGraph: {
    title: 'Sabor de Mainha',
    description: 'Sabor de Mainha - Fabrica de Sonhos !',
    url: 'www.sabordemainha.com.br',
    siteName: 'Sabor de Mainha',
    images: [
      {
        
        url: 'metaImg',
        width: 3604,
        height: 1108,
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}

