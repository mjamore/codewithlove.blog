import { ReactNode } from 'react';

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
};

export default function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a className='link' target='_blank' rel='noopener noreferrer' href={href}>
      {children}
    </a>
  );
}
