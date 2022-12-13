import { Inter } from '@next/font/google';
import '../styles/globals.css';
import styles from './page.module.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Providers } from './providers';
import cn from 'classnames';

const interVariable = Inter();

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>
          <Header />
          <div className={styles.container}>
            <main
              data-test="main-wrapper"
              className={cn(styles.main, interVariable.className)}
            >
              {children}
            </main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
