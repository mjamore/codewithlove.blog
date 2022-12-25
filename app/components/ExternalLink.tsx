import { ReactNode } from 'react';

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
};

export default function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a className='font-semibold text-amore-red transition duration-500 hover:text-slate-100' target='_blank' rel='noopener noreferrer' href={href}>
      {children}
    </a>
  );
}
