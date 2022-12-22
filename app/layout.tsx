import { Inter } from '@next/font/google';
import '../styles/globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Providers } from './utils/providers';
import cn from 'classnames';

const interVariable = Inter();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <div className={'flex flex-col justify-center mx-auto px-8 w-full relative max-w-4xl'}>
            <Header />
            <main className={cn('flex flex-col min-h-screen py-16', interVariable.className)}>{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
