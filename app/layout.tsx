import { Quicksand } from '@next/font/google';
import '../styles/globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Providers } from './utils/providers';
import cn from 'classnames';

const interVariable = Quicksand();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={cn('bg-dark-green-transparent bg-[url("/images/circuit-board.svg")]')}>
        <Providers>
          <Header />
          <div className={cn('relative mx-auto flex w-full max-w-page flex-col justify-center px-8')}>
            <main className={cn('flex min-h-screen flex-col py-16', interVariable.className)}>{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
