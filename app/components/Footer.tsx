import Link from 'next/link';
import ExternalLink from './ExternalLink';

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-dark-green">
      <div className="max-w-5xl mx-auto flex justify-around">
        <div className="flex flex-col space-y-4">
          <Link href="/" className="text-gray-500 hover:text-gray-600 transition">
            Home
          </Link>
          <Link href="/about" className="text-gray-500 hover:text-gray-600 transition">
            About
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/amore_codes">Twitter</ExternalLink>
          <ExternalLink href="https://github.com/mjamore">GitHub</ExternalLink>
        </div>
      </div>
    </footer>
  );
}
