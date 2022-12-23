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
      <body className={cn('bg-[url("/images/circuit-board.svg")] bg-dark-green')}>
        <Providers>
          <Header />
          <div className={cn('flex flex-col justify-center mx-auto w-full px-8 relative max-w-5xl bg-gray-800')}>
            <main className={cn('flex flex-col min-h-screen py-16', interVariable.className)}>{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
