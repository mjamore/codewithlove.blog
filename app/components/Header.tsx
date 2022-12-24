import cn from 'classnames';
import MobileMenu from './MobileMenu';
import Link from 'next/link';
import Image from 'next/image';
import ThemeSwitcher from './ThemeSwitcher';
// import { useRouter } from 'next/router';
import styles from './Header.module.css';
import { URLS } from '../utils/constants';

type NavItemProps = {
  href: string;
  text: string;
};

function NavItem({ href, text }: NavItemProps) {
  // const router = useRouter();
  // const isActive = router.asPath === href;
  const isActive = false;

  return (
    <Link
      href={href}
      className={cn(
        isActive ? 'font-semibold text-gray-800 dark:text-gray-200' : 'font-normal text-gray-600 dark:text-gray-400',
        'hidden rounded-lg p-1 transition-all hover:bg-gray-200 dark:hover:bg-gray-800 sm:px-3 sm:py-2 md:inline-block'
      )}
    >
      <span className="capsize">{text}</span>
    </Link>
  );
}

export default function Header() {
  return (
    <header className={cn('bg-gray-600', styles.header)}>
      <div className={'mx-auto flex max-w-page justify-between px-8'}>
        <Link href={URLS.ROUTES.HOME}>
          <Image className={''} alt={'Code With Love Logo'} src={'/images/logo.png'} width={100} height={100} />
        </Link>
        <nav className="flex items-center border-gray-200 text-gray-900 dark:border-gray-700">
          <div className="ml-[-0.60rem]">
            <MobileMenu />
            <NavItem href="/" text="Home" />
            <NavItem href="/topics" text="Topics" />
            <NavItem href="/about" text="About" />
          </div>
          {/* <ThemeSwitcher /> */}
        </nav>
      </div>
    </header>
  );
}
