import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { URLS } from '../utils/constants';
import MobileMenu from './MobileMenu';
// import { useRouter } from 'next/router';
import styles from './Header.module.css';

type NavItemProps = {
  href: string;
  text: string;
};

function NavItem({ href, text }: NavItemProps) {
  return (
    <Link href={href} className={cn('hidden rounded-lg p-1 text-gray-300 transition-all hover:text-slate-100 sm:px-3 sm:py-2 md:inline-block')}>
      {text}
    </Link>
  );
}

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={'mx-auto flex max-w-page justify-between px-8'}>
        <Link href={URLS.ROUTES.HOME}>
          <Image className={''} alt={'Code With Love Logo'} src={'/images/logos/logo-amore-red-white.png'} width={100} height={100} />
        </Link>
        <nav className="flex items-center border-gray-200 text-gray-900 dark:border-gray-700">
          <div className="ml-[-0.60rem]">
            <MobileMenu />
            <NavItem href="/" text="Home" />
            <NavItem href="/articles" text="Articles" />
            <NavItem href="/about" text="About" />
          </div>
          {/* <ThemeSwitcher /> */}
        </nav>
      </div>
    </header>
  );
}
