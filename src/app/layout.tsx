import Header from '../components/Header';
import Footer from '../components/Footer';
import { Saira } from 'next/font/google';
import './globals.css';
import DefaultProviders from '@/components/DefaultProviders';

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Fashion Express',
  description: 'Site de vendas de roupas e acessórios',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={saira.className}>
        <DefaultProviders>
          <Header />
          {children}
          <Footer />
        </DefaultProviders>
      </body>
    </html>
  )
}
