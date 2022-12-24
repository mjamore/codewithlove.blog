import Link from 'next/link';
import ExternalLink from './ExternalLink';

export default function Footer() {
  return (
    <footer className='w-full bg-content-bg2 py-12 px-8'>
      <div className='mx-auto flex max-w-page justify-around'>
        <div className='flex flex-col space-y-4'>
          <Link href='/' className='text-gray-500 transition hover:text-gray-600'>
            Home
          </Link>
          <Link href='/about' className='text-gray-500 transition hover:text-gray-600'>
            About
          </Link>
        </div>
        <div className='flex flex-col space-y-4'>
          <ExternalLink href='https://twitter.com/amore_codes'>Twitter</ExternalLink>
          <ExternalLink href='https://github.com/mjamore'>GitHub</ExternalLink>
          <ExternalLink href='https://read.cv/mjamore'>Resume</ExternalLink>
        </div>
      </div>
    </footer>
  );
}
