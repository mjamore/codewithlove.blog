import Link from 'next/link';

type InternalLinkProps = {
  children: React.ReactNode;
  href: string;
};

export default function InternalLink({ children, href }: InternalLinkProps) {
  return (
    <>
      <Link href={href} className='link'>
        {children}
      </Link>
    </>
  );
}
