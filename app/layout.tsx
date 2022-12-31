import { Quicksand } from '@next/font/google';
import '../styles/globals.css';
import cn from 'classnames';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Providers } from './utils/providers';

const quicksand = Quicksand({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={quicksand.className}>
      <head />
      <body className={cn('bg-content-bg bg-[url("/images/circuit-board.svg")]')}>
        <Providers>
          <Header />
          <div className={'bg-content-bg2'}>
            <div className={cn('relative mx-auto flex w-full max-w-wide flex-col justify-center px-8 pb-28')}>
              <main className={cn('flex min-h-screen flex-col')}>{children}</main>
            </div>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
